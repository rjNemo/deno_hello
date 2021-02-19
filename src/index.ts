/**
 * Display the iconic Hello, World
 */
export const sayHello = (id?: number) => {
  return (id === 5) ? "Bonjour le monde" : "Hello, World!";
};

console.log(sayHello());
