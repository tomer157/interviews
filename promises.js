const promise1 = Promise().resolve('promis 1');
const promise2 = Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('promisse  2');
  }, 1300);
});

const promiseAll = Promise.all([promise1, promise2, promise3]);
