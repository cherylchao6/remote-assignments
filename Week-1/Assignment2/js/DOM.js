let greeting = "<h2>Have a Good time!</h2>";
let welcomeText = document.getElementById('welcomeText');

welcomeText.addEventListener('click', () => {
  welcomeText.textContent = greeting; 
 });


document.querySelector('.Welcome-Messeage banner').innerHTML = greeting;
