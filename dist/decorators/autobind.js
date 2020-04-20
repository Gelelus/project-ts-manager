export function AutoBind(_taget, _methodName, descripter) {
    const originalMethod = descripter.value;
    const adjDescripter = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        },
    };
    return adjDescripter;
}
