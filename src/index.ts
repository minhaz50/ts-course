let age: number = 20;

let user: [number, string] = [1, "Minhaz"];

// enum
const enum Size {
  small = 1,
  medium,
  large,
}

let mySize = Size.medium;

console.log(mySize);

enum Role {
  Admin,
  User,
  Guest,
}

const userRole = Role.Guest;

if (userRole === Role.Guest) {
  console.log("Welcome Guest!");
}

// Real World Examples

enum OrderStatus {
  Pending = "PENDING",
  Processing = "PROCESSING",
  Shipped = "SHIPPED",
  Delivered = "DELIVERED",
  Cancelled = "CANCELLED",
}

function updateOrder(status: OrderStatus) {
  if (status === OrderStatus.Delivered) {
    console.log("Order delivered");
  } else if (status === OrderStatus.Cancelled) {
    console.log("Order Cancelled");
  }
}

updateOrder(OrderStatus.Cancelled);

// function

function calculateTax(income: number): number {
  if (income < 50_000) {
    return income * 1.2;
  }
  return income * 1.3;
}

// objects

type User = {
  name: string;
  age: number;
  email: string;
};

const user1: User = {
  name: "Alice",
  age: 23,
  email: "alice@gmail.com",
};

console.log(user1.name);
console.log(user1.age);
