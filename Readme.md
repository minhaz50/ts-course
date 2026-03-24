# Tuples in TypeScript

## English Explanation

A **tuple** is a special type of array where:

- The **number of elements is fixed**
- The **type of each element is known** and in a specific position

### Basic Example

typescript

```tsx
// Regular array - all elements same type
const numbers: number[] = [1, 2, 3, 100];

// Tuple - fixed length, each position has a specific type
const person: [string, number] = ["Alice", 25];
//                                  ↑         ↑
//                               position 0  position 1
//                               must be     must be
//                               string      number
```

### More Examples

typescript

```tsx
// RGB Color
const color: [number, number, number] = [255, 128, 0];

// User data
const user: [string, number, boolean] = ["Bob", 30, true];

// Accessing elements
const name = user[0]; // string
const age = user[1]; // number
const active = user[2]; // boolean

// ❌ Wrong type at wrong position — TypeScript will throw error
const wrong: [string, number] = [25, "Alice"]; // Error!

// ❌ Wrong length
const wrong2: [string, number] = ["Alice", 25, true]; // Error!
```

### Named Tuples (cleaner & readable)

typescript

```tsx
const user: [name: string, age: number, active: boolean] = ["Alice", 25, true];
```

### Optional Elements

typescript

```tsx
const data: [string, number?] = ["Alice"]; // age is optional
```

### Tuple with Rest

typescript

```tsx
const log: [string, ...number[]] = ["scores", 10, 20, 30, 40];
```

### Common Use Case — Function returning multiple values

typescript

```tsx
function getUser(): [string, number] {
  return ["Alice", 25];
}

const [name, age] = getUser(); // destructuring
console.log(name); // "Alice"
console.log(age); // 25
```

# Enums in TypeScript

## English Explanation

An **enum** (enumeration) is a way to define a set of **named constants**. Instead of using raw numbers or strings, you give them meaningful names.

### Without Enum (messy ❌)

typescript

```tsx
// What does 1, 2, 3 mean here? Hard to understand!
const userRole = 1;
if (userRole === 1) {
} // is 1 admin? user? guest?
```

### With Enum (clean ✅)

typescript

```tsx
enum Role {
  Admin,
  User,
  Guest,
}

const userRole = Role.Admin;
if (userRole === Role.Admin) {
  console.log("Welcome Admin!");
}
```

---

### Types of Enums

### 1️⃣ Numeric Enum (default)

typescript

```tsx
enum Direction {
  Up, // 0
  Down, // 1
  Left, // 2
  Right, // 3
}

console.log(Direction.Up); // 0
console.log(Direction.Down); // 1

// You can also set custom start value
enum StatusCode {
  OK = 200,
  NotFound = 404,
  ServerError = 500,
}

console.log(StatusCode.OK); // 200
console.log(StatusCode.NotFound); // 404
```

### 2️⃣ String Enum (most commonly used ✅)

typescript

```tsx
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

console.log(Direction.Up); // "UP"

// Very useful in API calls, conditions
function move(dir: Direction) {
  console.log(`Moving ${dir}`);
}

move(Direction.Up); // Moving UP
move(Direction.Left); // Moving LEFT
move("UP"); // ❌ Error! must use enum value
```

### 3️⃣ Const Enum (faster, no JS output)

typescript

```tsx
const enum Season {
  Spring = "SPRING",
  Summer = "SUMMER",
  Autumn = "AUTUMN",
  Winter = "WINTER",
}

const current = Season.Summer; // compiles to just "SUMMER" in JS
```

---

### Real World Example

typescript

```tsx
enum OrderStatus {
  Pending = "PENDING",
  Processing = "PROCESSING",
  Shipped = "SHIPPED",
  Delivered = "DELIVERED",
  Cancelled = "CANCELLED",
}

function updateOrder(status: OrderStatus) {
  if (status === OrderStatus.Delivered) {
    console.log("Order delivered! 🎉");
  } else if (status === OrderStatus.Cancelled) {
    console.log("Order cancelled 😢");
  }
}

updateOrder(OrderStatus.Delivered); // ✅
updateOrder("DELIVERED"); // ❌ Error!
```

---

### Enum vs Union Type

Many developers prefer **union types** over enums in modern TypeScript:

typescript

```tsx
// Enum approach
enum Direction {
  Up = "UP",
  Down = "DOWN",
}

// Union type approach (simpler, more modern)
type Direction = "UP" | "DOWN";
```

|             | Enum                 | Union Type        |
| ----------- | -------------------- | ----------------- |
| Syntax      | More verbose         | Cleaner           |
| JS output   | Generates extra code | No extra code     |
| Use case    | Large fixed sets     | Small simple sets |
| Recommended | For big projects     | For most cases    |

# Functions in TypeScript

In TypeScript, functions work just like JavaScript but with **type annotations** — you define what types go **in** and what type comes **out**.

---

### Basic Function

typescript

```tsx
// JavaScript (no types)
function add(a, b) {
  return a + b;
}

// TypeScript (with types)
function add(a: number, b: number): number {
  return a + b;
}
//                                 ↑
//                          return type
```

---

### Types of Functions

### 1️⃣ Regular Function

typescript

```tsx
function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet("Alice")); // Hello, Alice!
console.log(greet(123)); // ❌ Error! number is not string
```

### 2️⃣ Arrow Function

typescript

```tsx
const greet = (name: string): string => {
  return `Hello, ${name}!`;
};

// Short version (single expression)
const greet = (name: string): string => `Hello, ${name}!`;
```

### 3️⃣ Optional Parameters

typescript

```tsx
function greet(name: string, age?: number): string {
  //                                 ↑
  //                           optional parameter
  if (age) {
    return `Hello ${name}, you are ${age} years old!`;
  }
  return `Hello ${name}!`;
}

greet("Alice"); // ✅ Hello Alice!
greet("Alice", 25); // ✅ Hello Alice, you are 25 years old!
```

### 4️⃣ Default Parameters

typescript

```tsx
function greet(name: string, role: string = "User"): string {
  return `Hello ${name}, your role is ${role}`;
}

greet("Alice"); // Hello Alice, your role is User
greet("Alice", "Admin"); // Hello Alice, your role is Admin
```

### 5️⃣ Rest Parameters

typescript

```tsx
function addAll(...numbers: number[]): number {
  return numbers.reduce((sum, n) => sum + n, 0);
}

addAll(1, 2, 3); // 6
addAll(1, 2, 3, 4, 5); // 15
addAll(10, 20, 30, 40); // 100
```

---

### Return Types

### void — returns nothing

typescript

```tsx
function logMessage(message: string): void {
  console.log(message);
  // no return value
}
```

### never — never returns (throws error or infinite loop)

typescript

```tsx
function throwError(message: string): never {
  throw new Error(message);
}
```

### union return type

typescript

```tsx
function findUser(id: number): string | null {
  if (id === 1) return "Alice";
  return null; // user not found
}
```

---

### Function Types

typescript

```tsx
// Define a function type
type MathOperation = (a: number, b: number) => number;

// Use it
const add: MathOperation = (a, b) => a + b;
const subtract: MathOperation = (a, b) => a - b;
const multiply: MathOperation = (a, b) => a * b;

console.log(add(5, 3)); // 8
console.log(subtract(5, 3)); // 2
console.log(multiply(5, 3)); // 15
```

---

### Function as Parameter (Callback)

typescript

```tsx
function calculate(
  a: number,
  b: number,
  operation: (x: number, y: number) => number,
): number {
  return operation(a, b);
}

calculate(5, 3, (a, b) => a + b); // 8
calculate(5, 3, (a, b) => a * b); // 15
```

---

### Real World Example

typescript

```tsx
type User = {
  name: string;
  age: number;
  email: string;
};

// Create user
function createUser(name: string, age: number, email: string): User {
  return { name, age, email };
}

// Filter adult users
function getAdults(users: User[]): User[] {
  return users.filter((user) => user.age >= 18);
}

// Format user info
function formatUser(user: User): string {
  return `${user.name} (${user.age}) - ${user.email}`;
}

const users: User[] = [
  createUser("Alice", 25, "alice@email.com"),
  createUser("Bob", 16, "bob@email.com"),
  createUser("Charlie", 30, "charlie@email.com"),
];

const adults = getAdults(users);
adults.forEach((user) => console.log(formatUser(user)));
// Alice (25) - alice@email.com
// Charlie (30) - charlie@email.com
```

# Objects in TypeScript

An **object** is a collection of **key-value pairs**. In TypeScript, you define the **shape** of an object — what properties it has and what types they are.

---

### Basic Object

typescript

```tsx
// JavaScript (no types)
const user = {
  name: "Alice",
  age: 25,
};

// TypeScript (with inline type)
const user: { name: string; age: number } = {
  name: "Alice",
  age: 25,
};
```

---

### Using `type` (most common ✅)

typescript

```tsx
type User = {
  name: string;
  age: number;
  email: string;
};

const user: User = {
  name: "Alice",
  age: 25,
  email: "alice@email.com",
};

console.log(user.name); // Alice
console.log(user.age); // 25
```

---

### Using `interface`

typescript

```tsx
interface User {
  name: string;
  age: number;
  email: string;
}

const user: User = {
  name: "Alice",
  age: 25,
  email: "alice@email.com",
};
```

### `type` vs `interface`

|                    | type          | interface           |
| ------------------ | ------------- | ------------------- |
| Basic objects      | ✅            | ✅                  |
| Extend/inherit     | ✅ (with `&`) | ✅ (with `extends`) |
| Union types        | ✅            | ❌                  |
| Reopen & add props | ❌            | ✅                  |
| Recommended for    | Most cases    | Class-based OOP     |

---

### Optional Properties

typescript

```tsx
type User = {
  name: string;
  age: number;
  phone?: string; // optional
  //      ↑
  //   may or may not exist
};

const user1: User = { name: "Alice", age: 25 }; // ✅
const user2: User = { name: "Bob", age: 30, phone: "123" }; // ✅
```

---

### Readonly Properties

typescript

```tsx
type User = {
  readonly id: number; // cannot be changed after creation
  name: string;
};

const user: User = { id: 1, name: "Alice" };

user.name = "Bob"; // ✅ allowed
user.id = 2; // ❌ Error! id is readonly
```

---

### Nested Objects

typescript

```tsx
type Address = {
  city: string;
  country: string;
};

type User = {
  name: string;
  age: number;
  address: Address; // nested object
};

const user: User = {
  name: "Alice",
  age: 25,
  address: {
    city: "New York",
    country: "USA",
  },
};

console.log(user.address.city); // New York
```

---

### Object with Methods

typescript

```tsx
type User = {
  name: string;
  age: number;
  greet: () => string; // method
  birthday: (n: number) => number; // method with param
};

const user: User = {
  name: "Alice",
  age: 25,
  greet: () => `Hello, I am Alice!`,
  birthday: (years) => 25 + years,
};

console.log(user.greet()); // Hello, I am Alice!
console.log(user.birthday(1)); // 26
```

---

### Intersection Type (combining objects)

typescript

```tsx
type Person = {
  name: string;
  age: number;
};

type Employee = {
  company: string;
  salary: number;
};

// Combine both types with &
type Staff = Person & Employee;

const staff: Staff = {
  name: "Alice",
  age: 25,
  company: "Google",
  salary: 100000,
};
```

---

### Real World Example

typescript

```tsx
type Address = {
  city: string;
  country: string;
};

type Product = {
  readonly id: number;
  name: string;
  price: number;
  inStock: boolean;
  tags?: string[];
};

type Order = {
  readonly orderId: number;
  product: Product;
  quantity: number;
  shippingAddress: Address;
  getTotal: () => number;
};

const order: Order = {
  orderId: 101,
  product: {
    id: 1,
    name: "Laptop",
    price: 999,
    inStock: true,
    tags: ["electronics", "computers"],
  },
  quantity: 2,
  shippingAddress: {
    city: "New York",
    country: "USA",
  },
  getTotal: function () {
    return this.product.price * this.quantity;
  },
};

console.log(order.getTotal()); // 1998
```
