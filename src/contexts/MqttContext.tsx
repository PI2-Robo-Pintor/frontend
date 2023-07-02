import { createContext, ReactNode, useEffect, useState } from "react";
// @ts-ignore
import mqttClient from 'u8-mqtt/esm/web/index.js';
import { Device, MQTT_URL, PressureData, RelayData, StepMotorData } from "../settings/mqttSettings";

interface MqttSubscribeProps {
    topic: string;
    callback: (params: any) => void;
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

    const mqttSubscribe = ({ topic, callback }: MqttSubscribeProps) => {
        if (clientMqtt) {
            clientMqtt.subscribe_topic(
                topic,
                (packet: any, params: any, context: any) => {
                    console.log(packet.topic)
                
                    const data = packet.json();
                    switch(data.device){
                        case Device.D_PRESSURE:
                            console.log('pressure');
                            const pressureData: PressureData = data;
                            callback(pressureData);
                            break;
                        case Device.D_RELAY:
                            console.log('relay');
                            const relayData: RelayData = data;
                            callback(relayData);
                            break;
                        case Device.D_STEP_MOTOR:
                            console.log('motor');
                            const motorData: StepMotorData = data;
                            callback(motorData)
                            break;
                        default:
                            console.log('nada')
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