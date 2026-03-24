"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let age = 20;
let user = [1, "Minhaz"];
// enum
var Size;
(function (Size) {
    Size[Size["small"] = 1] = "small";
    Size[Size["medium"] = 2] = "medium";
    Size[Size["large"] = 3] = "large";
})(Size || (Size = {}));
let mySize = Size.medium;
console.log(mySize);
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
const userRole = Role.Guest;
if (userRole === Role.Guest) {
    console.log("Welcome Guest!");
}
// Real World Examples
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Pending"] = "PENDING";
    OrderStatus["Processing"] = "PROCESSING";
    OrderStatus["Shipped"] = "SHIPPED";
    OrderStatus["Delivered"] = "DELIVERED";
    OrderStatus["Cancelled"] = "CANCELLED";
})(OrderStatus || (OrderStatus = {}));
function updateOrder(status) {
    if (status === OrderStatus.Delivered) {
        console.log("Order delivered");
    }
    else if (status === OrderStatus.Cancelled) {
        console.log("Order Cancelled");
    }
}
updateOrder(OrderStatus.Cancelled);
// function
function calculateTax(income) {
    if (income < 50_000) {
        return income * 1.2;
    }
    return income * 1.3;
}
const user1 = {
    name: "Alice",
    age: 23,
    email: "alice@gmail.com",
};
console.log(user1.name);
console.log(user1.age);
//# sourceMappingURL=index.js.map