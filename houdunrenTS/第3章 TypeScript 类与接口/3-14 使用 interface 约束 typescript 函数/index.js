var user = {
    name: "houdunren",
    age: 19,
    isLock: false
};
function userFunc(user, lock) {
    user.isLock = lock;
    return user;
}
console.log(userFunc(user, true));
