//讓 Welcome 變成 Have a Good time!

let welcomeText = document.getElementById('welcomeText');
;
welcomeText.addEventListener('click', () => {
  welcomeText.textContent = "Have a good time!";
 });

 //Show更多column
let showMoreButton = document.getElementById('showmore');
let secondContentDiv = document.getElementById('secondContent');
showMoreButton.addEventListener('click', () => {
  if (secondContentDiv.style.display === "none") {
    showMoreButton.textContent = "Show More";
    secondContentDiv.style.display = "none";
} else {
    secondContentDiv.style.display === "none";
    showMoreButton.textContent = "Show Less";
  }
  });
