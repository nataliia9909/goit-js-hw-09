const formEl = document.querySelector('.form');

formEl.addEventListener("submit", onSubmitForm);

function onSubmitForm(evt) {
  evt.preventDefault();

  const { delay, step, amount } = evt.target.elements;

  let curentDelay = Number(delay.value);

  for (let i = 1; i <= Number(amount.value); i += 1) {
    createPromise(i, curentDelay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });

    curentDelay += Number(step.value);
}
}


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

return new Promise((resolve, reject) => {
  setTimeout(() => {
 if (shouldResolve) {
    resolve ({ position, delay })
  } else {
    reject ({ position, delay })
  }
  }, delay)
})


  
 
}
