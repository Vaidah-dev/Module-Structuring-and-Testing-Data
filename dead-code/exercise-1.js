const greeting = "hello";

function sayHello(greeting, name) {
  return `${greeting}, ${name}!`;
}

let testName = "Aman";

const greetingMessage = sayHello(greeting, testName);

console.log(greetingMessage);
