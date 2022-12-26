// Import stylesheets
import './style.css';

// Write Javascript code!
let arr = [12, 30, 20, 7];
for (let i = 0; i < arr.length; i++) {
  let a = 0;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      a = arr[i];
      arr[i] = arr[j];
      arr[j] = a;
    }
  }
}
console.log(arr);
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
