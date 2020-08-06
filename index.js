console.log("First");

// getUser(20)
//   .then((e) => getRepositories(e.github))
//   .then((e) => commit(e[2]))
//   .then((e) => console.log('commits ',e))
//   .catch((err) => console.log(err));

async function runUser() {
  try {
    const a = await getUser(10);
    const b = await repository(a.gitHubUsername);
    const c = await commit(b[0]);
    console.log(c);

  } catch (error) {
    console.log(error);
  }
}

runUser();

console.log("Second");

function getUser(id) {
  return new Promise((resolve, reject) => {
    // Kick off some async work
    setTimeout(() => {
      console.log("Reading a user from a database...");
      resolve({ id: id, gitHubUsername: "mosh" });
    }, 2000);
  });
}

function repository(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Call github Api");
      resolve(["repo0", "repo1", "repo2"]);
    }, 2000);
  });
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Calling GitHub API...");
      resolve(["repo1", "repo2", "repo3"]);
    }, 2000);
  });
}

function commit(e) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(e);
      resolve(["commit"]);
    }, 2000);
  });
}
