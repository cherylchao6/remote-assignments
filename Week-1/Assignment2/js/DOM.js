//讓 Welcome 變成 Have a Good time!
let greeting = "Have a Good time!";
let welcomeText = document.getElementById('welcomeText');

welcomeText.addEventListener('click', () => {
  welcomeText.textContent = greeting;
 });

 //Show更多column
let showMoreButton = document.getElementById('showmore');
let secondContentDiv = document.getElementById('secondContent');
showMoreButton.addEventListener('click', () => {
  if (secondContentDiv.style.display == "none") {
    showMoreButton.textContent = "Show More";
    secondContentDiv.style.display = "block";
    } else {
        toggleList.textContent = "Show List";
        listDiv.style.display = "none";
      }
  });
