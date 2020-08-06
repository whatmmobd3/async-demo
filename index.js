console.log("First");

getUser(1, (user) => {
  console.log("User", user);
  repository(user.github,(e) => {
      console.log(e);
  })
});

console.log("Second");

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading a user from database ...");
    callback({ name: id, github: "DavidNguyen" });
  }, 2000);
}

function repository(user,callback) {
  setTimeout(() => {
    console.log("Call github Api");
    return ["repo0", "repo1", "repo2"];
  }, 2000);
}
