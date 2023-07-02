// export const MQTT_URL = 'ws://192.168.23.201:9883';
export const MQTT_URL = 'ws://192.168.1.101:9883';
// export const MQTT_URL = 'wss://test.mosquitto.org:8081';

export const mqttTopics = {
    general: 'pi2/general',
    sensors: 'pi2/sensors',
    states: 'pi2/states',
};

export enum StateEnum {
    position = '',
    on_off = ''
};

export enum TypeEnum {
    velocity = 0xC1,
    max_height = 0xC2,
    min_height = 0xC3,
    on_off = 0xC4,
    invert = 0xC5,
};

export enum OnOffEnum {
    on = 1,
    off = 0
}
