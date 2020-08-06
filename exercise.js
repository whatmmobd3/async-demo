console.log("Start");

async function runStep() {
    const customer = await getCustomer(1);
    console.log('Customer: ',customer);

    if (customer.isGod) {
        const m = await movies()
        console.log('Top movies ',m);
        await sendMail(customer.email,m)
        console.log('Sent Email ...');
    }

}

runStep();

function getCustomer(e) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            id:1,
            name:'Mosh Hamedani',
            isGod:true,
            email:'david'
        })
    }, 2000);
  });
}

function movies(e) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["movie1", "movie2"]);
    }, 2000);
  });
}

function sendMail(email, movies) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 4000);
  });
}

console.log("End");
