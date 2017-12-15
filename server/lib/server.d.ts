declare const mongoose: any;
declare const express: any;
declare const logger: any;
declare const InitFabric: any;
declare class Server {
    private logger;
    private app;
    constructor(config: any);
    connectDB(config: any): Promise<{}>;
    runServer(config: any): Promise<any>;
}
