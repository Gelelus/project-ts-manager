///autobind decorator
export function AutoBind(
  _taget: any,
  _methodName: string,
  descripter: PropertyDescriptor
) {
  const originalMethod = descripter.value;
  const adjDescripter: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjDescripter;
}
