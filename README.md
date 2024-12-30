# Introduction to TypeScript

```
sudo npm install -g typescript
```
Here's an introduction to TypeScript that focuses on practical examples of the key concepts. This will help you understand the basic syntax and features of TypeScript and how it builds on top of JavaScript.

### 1. **What is TypeScript?**

TypeScript is a **superset of JavaScript** that adds static typing to the language. This means that TypeScript introduces new features, such as types, that make it easier to catch errors at compile-time rather than at runtime.

- **JavaScript** is dynamically typed, meaning that variable types are inferred at runtime.
- **TypeScript** allows you to explicitly define types for variables, functions, and more, ensuring better code quality.

### 2. **Basic Types**

TypeScript includes several built-in types like `string`, `number`, `boolean`, and more.

```typescript
let isStudent: boolean = true;
let age: number = 21;
let name: string = "Alice";
```

In this example:
- `isStudent` is a boolean type.
- `age` is a number type.
- `name` is a string type.

If you try to assign a value of a different type to these variables, TypeScript will throw an error.

#### Example:

```typescript
isStudent = "yes";  // Error: Type 'string' is not assignable to type 'boolean'.
```

### 3. **Arrays and Tuples**

You can define types for arrays and tuples in TypeScript.

#### **Arrays**

You can define the type of elements that an array should hold.

```typescript
let scores: number[] = [85, 92, 78];
```

This defines `scores` as an array of numbers. If you try to add anything other than a number, TypeScript will give an error.

#### **Tuples**

Tuples allow you to define an array with a fixed number of elements of specific types.

```typescript
let student: [string, number] = ["Alice", 21];
```

In this example, `student` is a tuple where the first element is a string and the second element is a number.

### 4. **Enums**

`enum` is a way to define a set of named constants in TypeScript.

```typescript
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

let move: Direction = Direction.Up;
```

By default, the values of the `enum` start at 0, so `Direction.Up` is `0`, `Direction.Down` is `1`, and so on. You can also assign custom values to the `enum` members:

```typescript
enum Status {
  Success = 200,
  NotFound = 404,
  ServerError = 500,
}

let currentStatus: Status = Status.Success;
```

### 5. **Functions**

In TypeScript, you can define types for function parameters and return values. This helps to ensure that the function is used correctly.

#### Example:

```typescript
function add(a: number, b: number): number {
  return a + b;
}

console.log(add(5, 3));  // 8
```

In this example:
- `a` and `b` are both of type `number`.
- The return value of the function is also a `number`.

If you try to call the function with non-number arguments, TypeScript will throw an error:

```typescript
add("5", 3);  // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
```

### 6. **Optional and Default Parameters**

You can make function parameters optional by adding a `?` after the parameter name. You can also assign default values to parameters.

#### Example:

```typescript
function greet(name: string, greeting: string = "Hello"): string {
  return `${greeting}, ${name}!`;
}

console.log(greet("Alice"));            // "Hello, Alice!"
console.log(greet("Bob", "Welcome"));   // "Welcome, Bob!"
```

Here, `greeting` is an optional parameter with a default value of `"Hello"`.

### 7. **Interfaces**

Interfaces define the structure of an object. This helps ensure that objects conform to a specific shape.

#### Example:

```typescript
interface Person {
  name: string;
  age: number;
}

let student: Person = {
  name: "Alice",
  age: 21,
};
```

In this example, the `Person` interface defines the structure that an object must follow. The `student` object must have both a `name` (string) and an `age` (number).

### 8. **Classes**

TypeScript supports classes, allowing you to define objects with properties and methods. Classes can also implement interfaces.

#### Example:

```typescript
class Student {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `${this.name} is ${this.age} years old.`;
  }
}

let alice = new Student("Alice", 21);
console.log(alice.getDetails());  // "Alice is 21 years old."
```

Here, we define a class `Student` with a constructor and a method `getDetails`. The class has two properties: `name` and `age`.

### 9. **Generics**

Generics allow you to create reusable components and functions that can work with any type.

#### Example:

```typescript
function identity<T>(arg: T): T {
  return arg;
}

console.log(identity<string>("Hello"));  // "Hello"
console.log(identity<number>(5));        // 5
```

In this example, `identity` is a generic function that works with any type (`T`). You can pass a string, a number, or any other type to the function, and TypeScript will infer the type.

### 10. **Type Aliases and Union Types**

A **type alias** allows you to create a new name for a type, while **union types** let you specify that a variable can hold multiple types.

#### Type Alias Example:

```typescript
type StringOrNumber = string | number;

let id: StringOrNumber;
id = "123";  // valid
id = 123;    // valid
id = true;   // Error: Type 'boolean' is not assignable to type 'string | number'.
```

### 11. **Type Assertions**

TypeScript allows you to **assert** a value as a specific type, overriding the inferred type.

#### Example:

```typescript
let someValue: any = "This is a string";
let strLength: number = (someValue as string).length;

console.log(strLength);  // 16
```

In this example, `someValue` is initially of type `any`, but by using `as string`, we assert that it is a string and can access its length property.

### 12. **Modules**

TypeScript supports ES6 modules, which allow you to organize code into separate files and import/export them as needed.

#### Example:

```typescript
// math.ts
export function add(a: number, b: number): number {
  return a + b;
}

// app.ts
import { add } from './math';

console.log(add(2, 3));  // 5
```

### Conclusion

TypeScript enhances JavaScript with static typing, making it easier to catch errors early and write cleaner, more maintainable code. By using types, interfaces, classes, and generics, you can ensure your application logic is reliable and scales well as your project grows.

This introduction covered the basics, but there are many more advanced features in TypeScript, like **decorators**, **type narrowing**, **conditional types**, and more, which you can explore as you gain more experience with the language.


### References 
-https://cs.lmu.edu/~ray/notes/introtypescript/
