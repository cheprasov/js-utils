// @flow

export default class FunctionUtils {

    static debounce(func: Function, timeout: number = 200, isLeading: boolean = false): Function {
        let timerId: number = 0;

        if (isLeading) {
            return ((...args) => {
                if (!timerId) {
                    func(...args);
                } else {
                    clearTimeout(timerId);
                }

                timerId = setTimeout(() => {
                        timerId = 0;
                    }, timeout);
            });
        }

        return ((...args) => {
            if (timerId) {
                clearTimeout(timerId);
                timerId = 0;
            }

            timerId = setTimeout(() => {
                    timerId = 0;
                    func(...args);
                }, timeout);
        });
    }

    static throttle(func: Function, timeout: number = 200): Function {
        let nextTime: number = 0;

        return ((...args) => {
            const nowTime = Date.now();

            if (nextTime <= nowTime) {
                nextTime = nowTime + timeout;
                func(...args);
            }
        });
    }

}
