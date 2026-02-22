const traveler = document.getElementById("traveler");

function goLocation(page) {
  traveler.style.top = event.target.style.top;
  traveler.style.left = event.target.style.left;

  setTimeout(() => {
    window.location.href = page;
  }, 1000);
}
