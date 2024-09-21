export function ValidateNonEmpty(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    const product = args[0];
    
    // Check if the product object has a name;
    if (product.name !== undefined && product.name.trim() === '') {
      throw new Error('Product name cannot be empty.');
    }
    // Check if the product object has price;
    if (product.price !== undefined && (product.price === undefined || product.price <= 0)) {
      throw new Error('Product price must be a positive number.');
    }

    return originalMethod.apply(this, args);
  };

  return descriptor;
}
