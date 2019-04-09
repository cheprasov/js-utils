// @flow

export default class ScreenUtils {

    static isTouchScreen(): boolean {
        return ('ontouchstart' in window);
    }

    static getDevicePixelRatio(): number {
        if (window.devicePixelRatio) {
            return window.devicePixelRatio;
        }
        if (window.screen && window.screen.deviceXDPI && window.screen.logicalXDPI) {
            return window.screen.deviceXDPI / window.screen.logicalXDPI;
        }
        return 1;
    }

}
