// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const btnClass = e.currentTarget.classList;
    if (btnClass.contains("decrease")) {
      count--;
    } else if (btnClass.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    return (value.textContent = count);
  });
});
