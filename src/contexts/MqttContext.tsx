import { createContext, ReactNode, useEffect, useState } from "react";
import mqttClient from 'u8-mqtt/esm/web/index.js';

const MQTT_URL = 'wss://test.mosquitto.org:8081';

interface MqttSubscribeProps {
    topic: string;
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
    const [client, setClient] = useState<any>();

    useEffect(() => {
        console.log(client)
    }, [client])


    const mqttConnect = async () => {
        const clientMqtt = mqttClient().with_websock(MQTT_URL);
        await clientMqtt.connect();
        
        setClient(clientMqtt)
    };

    const mqttSubscribe = ({ topic }: MqttSubscribeProps) => {
        if (client) {
            client.subscribe_topic(
                topic,
                (packet: any, params: any, context: any) => {
                  console.log(packet.topic);
                  console.log(packet.json());
                }
              )
        }
    };

    const mqttPublish = async ({ topic, message } : MqttPublishProps) => {
        if (client) {
            await client.json_send(
                topic,
                message
            )
        }
    }

    useEffect(() => {
        mqttConnect();

        return () => client.disconnect();
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