// @flow

export default class DocumentUtils {

    static update(callback): Promise {
        return new Promise((resolve) => {
            window.requestAnimationFrame(() => {
                resolve(callback());
            });
        });
    }

}
