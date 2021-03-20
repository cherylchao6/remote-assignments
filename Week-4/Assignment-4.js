//Promise
function delayedResultPromise(n1, n2, delayTime) {
  let sum = n1 + n2;
  let result = `${sum}(${n1}+${n2})`;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(result);
    }, delayTime);
  });
  Promise
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    })
}
//delayedResultPromise(4, 5, 3000).then(console.log)
// 9 (4+5) will be shown in the console after 3 seconds

// async/await
async main() {
  const result = await delayedResultPromise(4, 5, 3000);
}
main() // result will be shown in the console after <delayTime> seconds



