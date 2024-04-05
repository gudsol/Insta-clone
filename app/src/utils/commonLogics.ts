type AnyFunction = (...args: any[]) => any;

export function debounce<T extends AnyFunction>(func: T, delay: number): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function(this: ThisParameterType<T>, ...args: Parameters<T>): void {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

export const generateRandomNumber=(digits:number)=>{
    const min = Math.pow(10, digits - 1); // Minimum value based on number of digits
    const max = Math.pow(10, digits) - 1; // Maximum value based on number of digits
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  
