export declare interface IEntryValue {
    [field: string]: any;
}
export declare interface IClientUrlParams {
    protocol: "http" | "https";
    host: string;
    port: string | number;
    url: string;
}
export declare interface IStackSdk {
    config: {
        live_preview: {
            [key: string]: any;
        } & Partial<IConfig>;
        [key: string]: any;
    };
    [key: string]: any;
    headers: {
        api_key: string;
    };
    environment: string;
}
export declare interface IConfig {
    shouldReload: boolean;
    enable: boolean;
    cleanCslpOnProduction: boolean;
    stackDetails: {
        apiKey: string;
        environment: string;
        contentTypeUid: string;
        entryUid: string;
    };
    clientUrlParams: IClientUrlParams;
    stackSdk: IStackSdk;
    onChange: () => void;
}
export declare interface IEntryQuery {
    get: (field: string) => IEntryValue[typeof field];
    toJSON: () => IEntryValue;
}
//# sourceMappingURL=types.d.ts.map