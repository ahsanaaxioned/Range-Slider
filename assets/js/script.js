// global variable start here

const inputOne = document.querySelector(".input"),
  rangeval = document.querySelector(".input-value"),
  inputTwo = document.querySelector(".input2"),
  rangeval2 = document.querySelector(".input-value2");

// global variable end here

// function and event for both input range start here

inputOne.value = 0;
inputTwo.value = 0;

setInterval(() => {
  inputOne.value++;
  rangeval.innerText = inputOne.value;
}, 100);

inputTwo.addEventListener("input", () => {
  rangeval2.innerText = inputTwo.value;
  rangeval2.style.left = `${ inputTwo.value}px`
});

// function and event for both input range end here
