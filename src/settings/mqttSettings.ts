// export const MQTT_URL = 'ws://192.168.1.101:9883';
export const MQTT_URL = 'ws://test.mosquitto.org:8081';


export const mqttTopics = {
    general: 'pi2/general',
    data: 'pi2/data',
};

//Publications
export enum OnOffEnum {
    On = 1,
    OF = 0,
}

export enum PublishEnum {
    VELOCITY        = 0xC1, 
    MAX_HEIGHT      = 0xC2, 
    MIN_HEIGHT      = 0xC3, 
    ON_OFF          = 0xC4, 
    INVERT          = 0xC5,
    TEST            = 0xC6,
    CONFIRM_HEIGHT  = 0xC7
}

export interface PublishData {
    type: PublishEnum;
    value: number;
}

//Subscriptions
export enum Device {
    D_PRESSURE   = 0xD1,
    D_STEP_MOTOR = 0xD2,
    D_RELAY      = 0xD3,
    ROBOT_DATA   = 0xD4,
};

export enum RelayId {
    RID_SOLENOID   = 0xF1,
    RID_COMPRESSOR = 0xF2,
};

export enum RobotStatus {
    SUCCESS = 0,
    ERROR = 1,
}

export enum StepMotorDataType{
    SMDT_NONE     = 0x00,
    SMDT_POSITION = 0xA1,
    SMDT_ON_OFF   = 0xA2,
    SMDT_STEPS    = 0xA3,
    SMDT_TURNS    = 0xA4,
};

export enum RobotDataType {
    RDT_NONE        = 0x00,
    RDT_COMPRESSOR  = 0xB1,
    RDT_MOTOR       = 0xB2,
    RDT_READY       = 0xB3,
}

export interface StepMotorData {
    device: Device;
    type: StepMotorDataType;
    value: number;
};

export interface RelayData {
    device: Device;
    value: number;
    id: RelayId;
} ;

export interface PressureData {
    device: Device;
    value: number;
};

export interface RobotData {
    type: RobotDataType;
    value: RobotStatus;
}

export const robotDataTypeLabels = [
    {
        type: RobotDataType.RDT_COMPRESSOR,
        label: 'Compressor'
    },
    {
        type: RobotDataType.RDT_MOTOR,
        label: 'Motor'
    }
]
