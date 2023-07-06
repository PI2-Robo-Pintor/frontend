import { createContext, ReactNode, useEffect, useState } from "react";
// @ts-ignore
import mqttClient from 'u8-mqtt/esm/web/index.js';
import { Device, MQTT_URL, PressureData, RelayData, StepMotorData } from "../settings/mqttSettings";

interface MqttSubscribeProps {
    topic: string;
    callback: (params: any) => void;
    device: Device;
}

interface MqttPublishProps {
    topic: string;
    message: any;
}

interface MqttContextData {
    mqttSubscribe: (props: MqttSubscribeProps) => void;
    mqttPublish: (props: MqttPublishProps) => Promise<void>;
}

interface MqttProviderProps{
    children: ReactNode;
}

export const MqttContext = createContext({} as MqttContextData);

export function MqttProvider({ children }: MqttProviderProps){
    // const [client, setClient] = useState<any>();

    let clientMqtt: any;

    // useEffect(() => {
    //     console.log(client)
    // }, [client])

    const mqttConnect = async () => {
        clientMqtt = mqttClient().with_websock(MQTT_URL).with_autoreconnect();
        await clientMqtt.connect();
        
        // setClient(clientMqtt)
    };

    const mqttSubscribe = ({ topic, callback, device }: MqttSubscribeProps) => {
        if (clientMqtt) {
            clientMqtt.subscribe_topic(
                topic,
                (packet: any, params: any, context: any) => {            
                    const data = packet.json();

                    if(data.device === device){
                        callback(data);
                    }
                }
              )
        }
    };

    const mqttPublish = async ({ topic, message } : MqttPublishProps) => {
        if (clientMqtt) {
            await clientMqtt.json_send(
                topic,
                message
            )
        }  
    }

    useEffect(() => {
        mqttConnect();

        return () => clientMqtt.disconnect();
    }, []);

    return(
        <MqttContext.Provider value={{
            mqttPublish,
            mqttSubscribe
        }}>
            {children}
        </MqttContext.Provider>
    )
}