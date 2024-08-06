// log.decorator.ts
export function Log(_target: Readonly<Object>, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<any>) {
  const originalMethod = descriptor.value;
  const d = descriptor;
  d.value = function (...args: any[]) {
    console.log(`Called ${String(propertyKey)} with arguments:`, args);
    const result = originalMethod.apply(this, args);
    console.log(`Result of ${String(propertyKey)}:`, result);
    return result;
  };

  return descriptor;
}

// .apply .bind
