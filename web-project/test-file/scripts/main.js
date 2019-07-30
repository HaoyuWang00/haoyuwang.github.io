//let myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello world!';

/* document.querySelector('html').onclick = function() 
{
    alert('Ouch! Stop poking me!');
}
*/
let myImage = document.querySelector('img');


myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/bob-dylan.jpg') {
      myImage.setAttribute ('src','images/bob-dylan-2.jpg');
    } else {
      myImage.setAttribute ('src','images/bob-dylan.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Home Page(h1), ' + myName;
  }

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Home Page(h1), ' + storedName;
  }

myButton.onclick = function() {
    setUserName();
  }