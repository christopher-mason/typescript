"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var friend_1 = require("./friend");
var friends = [
    new friend_1.Friend(1, "Ron", "ron@yahoo.com", "513-123-4567"),
    new friend_1.Friend(2, "Chris", "chirs@yahoo.com", "513-234-5432"),
    new friend_1.Friend(3, "Julie", "julie@yahoo.com", "513-675-4359"),
    new friend_1.Friend(4, "Greg", "greg@yahoo.com", "513-543-8970"),
    new friend_1.Friend(5, "Sean", "sean@yahoo.com", "513-654-9120")
];
for (var _i = 0, friends_1 = friends; _i < friends_1.length; _i++) {
    var friend = friends_1[_i];
    friend.print();
}
