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
