let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Mozilla is cool, ${myName}`;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.addEventListener("click", () => {
  setUserName();
});

const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "../images/firefox-icon.png") {
    myImage.setAttribute("src", "../images/firefox-icon-copy.png");
  } else {
    myImage.setAttribute("src", "../images/firefox-icon.png");
  }
});



//
const listItems = document.querySelectorAll("li");

function toggleTaskDone(e) {
  if (!e.target.className) {
    e.target.className = "taskDone";
  } else {
    e.target.className = "";
  }
}

listItems.forEach((item) => {
  item.addEventListener("click", toggleTaskDone);
});
