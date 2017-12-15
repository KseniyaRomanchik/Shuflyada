declare const logger: any;
declare class InitFabric {
    private initClasses;
    private instances;
    constructor(initClasses: any);
    start(): void;
    getClassInstance(instanceName: any): any;
}
