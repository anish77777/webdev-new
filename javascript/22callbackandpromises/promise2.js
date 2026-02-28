let prom1 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("No random number is supporting u");
  } else {
    setTimeout(() => {
      console.log("Yes I am done");
      resolve("anish");
    }, 3000);
  }
});

prom1
  .then((a) => {
    console.log(a);
  })
  .catch((error) => {
    console.log(error);
  });


