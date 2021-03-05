showMoreButton.addEventListener('click', () => {
  let showMoreButton = document.getElementById('showmore');
  let secondContentDiv = document.getElementById('secondContent');
  if (secondContentDiv.style.display === "none") {
    showMoreButton.textContent = "Show More";
    secondContentDiv.style.display = "none";
  } else {
    secondContentDiv.style.display === "none";
    showMoreButton.textContent = "Show Less";
  }
});
