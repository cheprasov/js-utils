
export default class FunctionUtils {

    static debounce(func: Function, timeout: number = 200): Function {
        let timerId: number = 0;
        return ((...args) => {
            if (timerId) {
                clearTimeout(timerId);
                timerId = 0;
            }

            timerId = setTimeout(
                () => {
                    timerId = 0;
                    func(...args);
                },
                timeout,
            );
        });
    }

}
