let welcomeText = document.getElementById('welcomeText');
let showMoreButton = document.getElementById('showmore');
let secondContentDiv = document.getElementById('secondContent');

//讓 Welcome 變成 Have a Good time!
welcomeText.addEventListener('click', () => {
  welcomeText.textContent = "Have a good time!";
 });

 //Show更多column
 showMoreButton.addEventListener('click', () => {
   if (secondContentDiv.style.display === "none") {
     showMoreButton.textContent = "Show More";
     secondContentDiv.style.display = "none";
   } else {
     secondContentDiv.style.display === "block";
     showMoreButton.textContent = "Show Less";
   }
 });
