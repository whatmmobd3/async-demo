const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
    reject(new Error("message"));
  }, 2000);
});

p.then((e) => log("Result: ", e)).catch((err) => log("Error: ", err));
