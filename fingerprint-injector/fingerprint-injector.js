"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FingerprintInjector = void 0;
const tslib_1 = require("tslib");
const path_1 = tslib_1.__importDefault(require("path"));
const fs_1 = require("fs");
const constants_1 = require("./constants");
/**
 * Fingerprint injector class.
 * @class
 */
class FingerprintInjector {
    constructor() {
        Object.defineProperty(this, "utilsJs", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: this._loadUtils()
        });
    }
    /**
     * Adds init script to the browser context, so the fingerprint is changed before every document creation.
     * DISCLAIMER: Since Playwright does not support changing viewport and `user-agent` after the context is created,
     * you have to set it manually when the context is created. Check the Playwright usage example for more details.
     * @param browserContext Playwright browser context to be injected with the fingerprint.
     * @param fingerprint Browser fingerprint from [`fingerprint-generator`](https://github.com/apify/fingerprint-generator).
     */
    async attachFingerprintToPlaywright(browserContext, browserFingerprintWithHeaders) {
        const { fingerprint, headers } = browserFingerprintWithHeaders;
        const enhancedFingerprint = this._enhanceFingerprint(fingerprint);
        const content = this.getInjectableFingerprintFunction(enhancedFingerprint);
        // Override the language properly
        await browserContext.setExtraHTTPHeaders({
            'accept-language': headers['accept-language'],
        });
        await browserContext.on('page', (page) => {
            page.emulateMedia({ colorScheme: 'dark' })
                .catch(() => { });
        });
        await browserContext.addInitScript({
            content,
        });
    }
    /**
     * Adds script that is evaluated before every document creation.
     * Sets User-Agent and viewport using native puppeteer interface
     * @param page Puppeteer `Page` object to be injected with the fingerprint.
     * @param fingerprint Fingerprint from [`fingerprint-generator`](https://github.com/apify/fingerprint-generator).
     */
    async attachFingerprintToPuppeteer(page, browserFingerprintWithHeaders) {
        const { fingerprint, headers } = browserFingerprintWithHeaders;
        const enhancedFingerprint = this._enhanceFingerprint(fingerprint);
        const { screen: { width, height }, userAgent } = enhancedFingerprint;
        await page.setUserAgent(userAgent);
        await page.setViewport({
            width,
            height,
        });
        // Override the language properly
        await page.setExtraHTTPHeaders({
            'accept-language': headers['accept-language'],
        });
        await page.emulateMediaFeatures([
            { name: 'prefers-color-scheme', value: 'dark' },
        ]);
        await page.evaluateOnNewDocument(this.getInjectableFingerprintFunction(enhancedFingerprint));
    }
    /**
     * Gets the override script that should be evaluated in the browser.
     */
    getInjectableScript(browserFingerprintWithHeaders) {
        const { fingerprint } = browserFingerprintWithHeaders;
        const enhancedFingerprint = this._enhanceFingerprint(fingerprint);
        return this.getInjectableFingerprintFunction(enhancedFingerprint);
    }
    /**
     * Create injection function string.
     * @param fingerprint Enhanced fingerprint.
     * @returns Script overriding browser fingerprint.
     */
    getInjectableFingerprintFunction(fingerprint) {
        function inject() {
            const { battery, navigator: { 
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            extraProperties, userAgentData, webdriver, ...navigatorProps }, screen: allScreenProps, videoCard, historyLength, audioCodecs, videoCodecs,
            // @ts-expect-error internal browser code
             } = fp;
            const { 
            // window screen props
            outerHeight, outerWidth, innerWidth, innerHeight, screenX, pageXOffset, pageYOffset, 
            // Document screen props
            clientWidth, clientHeight, 
            // Ignore hdr for now.
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            hasHDR, 
            // window.screen props
            ...newScreen } = allScreenProps;
            const windowScreenProps = {
                innerHeight,
                outerHeight,
                outerWidth,
                innerWidth,
                screenX,
                pageXOffset,
                pageYOffset,
            };
            const documentScreenProps = {
                clientHeight,
                clientWidth,
            };
            runHeadlessFixes();
            overrideIntlAPI(navigatorProps.language);
            overrideStatic();
            if (userAgentData) {
                overrideUserAgentData(userAgentData);
            }
            if (window.navigator.webdriver) {
                navigatorProps.webdriver = false;
            }
            overrideInstancePrototype(window.navigator, navigatorProps);
            overrideInstancePrototype(window.screen, newScreen);
            overrideWindowDimensionsProps(windowScreenProps);
            overrideDocumentDimensionsProps(documentScreenProps);
            overrideInstancePrototype(window.history, { length: historyLength });
            //overrideWebGl(videoCard);
            overrideCodecs(audioCodecs, videoCodecs);
            overrideBattery(battery);
        }
        const mainFunctionString = inject.toString();
        return `(()=>{${this.utilsJs}; const fp=${JSON.stringify(fingerprint)}; (${mainFunctionString})()})()`;
    }
    _enhanceFingerprint(fingerprint) {
        const { navigator, ...rest } = fingerprint;
        return {
            ...rest,
            navigator,
            userAgent: navigator.userAgent,
            historyLength: this._randomInRange(2, 6),
        };
    }
    _loadUtils() {
        const utilsJs = (0, fs_1.readFileSync)(path_1.default.join(__dirname, constants_1.UTILS_FILE_NAME));
        // we need to add the new lines because of typescript initial a final comment causing issues.
        return `\n${utilsJs}\n`;
    }
    _randomInRange(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    ;
}
exports.FingerprintInjector = FingerprintInjector;
//# sourceMappingURL=fingerprint-injector.js.map