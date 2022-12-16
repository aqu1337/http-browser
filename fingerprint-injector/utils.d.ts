/**
 * @param masterObject Object to override.
 * @param propertyName Property to override.
 * @param proxyHandler Proxy handled with the new value.
 */
declare function overridePropertyWithProxy(masterObject: any, propertyName: any, proxyHandler: any): void;
/**
 * @param masterObject Object to override.
 * @param propertyName Property to override.
 * @param proxyHandler Proxy handled with getter handler.
 */
declare function overrideGetterWithProxy(masterObject: any, propertyName: any, proxyHandler: any): void;
/**
 * @param instance Instance to override.
 * @param overrideObj New instance values.
 */
declare function overrideInstancePrototype(instance: any, overrideObj: any): void;
declare function redirectToString(proxyObj: any, originalObj: any): void;
declare function makeNativeString(name?: string): string;
declare function redefineProperty(masterObject: any, propertyName: any, descriptorOverrides?: {}): any;
declare function stripProxyFromErrors(handler: any): {};
//declare function overrideWebGl(webGl: any): void;
declare function overrideBattery(batteryInfo: any): void;
declare function overrideIntlAPI(language: any): void;
declare function makeHandler(): {
    getterValue: (value: any) => {
        apply(target: any, ctx: any, args: any, ...args: any[]): any;
    };
};
declare function overrideScreenByReassigning(target: any, newProperties: any): void;
declare function overrideWindowDimensionsProps(props: any): void;
declare function overrideDocumentDimensionsProps(props: any): void;
declare function overrideUserAgentData(userAgentData: any): void;
declare function fixWindowChrome(): void;
declare function fixPermissions(): void;
declare function fixIframeContentWindow(): void;
declare function fixPluginArray(): void;
declare function runHeadlessFixes(): void;
declare function overrideStatic(): void;
declare function isHeadlessChromium(): boolean;
declare function isChrome(): boolean;
declare function isFirefox(): boolean;
declare function isSafari(): boolean;
declare namespace cache {
    namespace Reflect {
        const get: typeof Reflect.get;
        const apply: typeof Reflect.apply;
    }
    const nativeToStringStr: string;
}
declare namespace prototypeProxyHandler {
    function setPrototypeOf(target: any, newProto: any): boolean;
}
declare function overrideCodecs(audioCodecs: any, videoCodecs: any): void;
//# sourceMappingURL=utils.d.ts.map