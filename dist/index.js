"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let age = 20;
let user = [1, "Minhaz"];
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
//# sourceMappingURL=index.js.map