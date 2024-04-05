type AnyFunction = (...args: any[]) => any;

// Utility function for debouncing a function
export function debounce<T extends AnyFunction>(func: T, delay: number): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout>;
  // Return a debounced function
  return function(this: ThisParameterType<T>, ...args: Parameters<T>): void {
    clearTimeout(timeoutId);  // Clear any existing timeout
    timeoutId = setTimeout(() => { // Set a new timeout to execute the function after the specified delay
      func.apply(this, args);  // Call the original function with provided arguments
    }, delay);
  };
}

// Utility function to generate a random number with specified digits
export const generateRandomNumber=(digits:number)=>{
    const min = Math.pow(10, digits - 1); // Minimum value based on number of digits
    const max = Math.pow(10, digits) - 1; // Maximum value based on number of digits
    return Math.floor(Math.random() * (max - min + 1)) + min; // Generate and return a random number within the specified range
  }

  // Utility function to format numbers for display
  export const formatNumber = (number:number) => {
    // Format large numbers into abbreviated format (e.g., 1.5m, 3.2k)
    if (number >= 1000000) {
      return (number / 1000000).toFixed(1) + 'm';
    } else if (number >= 1000) {
      return (number / 1000).toFixed(1) + 'k';
    } else {
      return number.toString();
    }
  };
  
  
