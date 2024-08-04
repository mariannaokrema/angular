// log.decorator.ts
export function Log(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<any>) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Called ${String(propertyKey)} with arguments:`, args);
    const result = originalMethod.apply(this, args);
    console.log(`Result of ${String(propertyKey)}:`, result);
    return result;
  };

  return descriptor;
}
