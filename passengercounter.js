let peopleCount = document.getElementById("count-el");
let prevCount = document.getElementById("pre-count");
// set count as 0
// listen to click event
// increment the count
// show the new count

let count = 0;

function increment() {
  count += 1;
  peopleCount.innerText = count;
}

function save() {
  let countStr = count + " - ";
  prevCount.innerText += countStr;
  count = 0;
  peopleCount.innerText = 0;
}
