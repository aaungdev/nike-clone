document.addEventListener("DOMContentLoaded", function () {
  const texts = [
    "Look for Store Pickup at Checkout",
    "Gear Up Mid-Season: Use EXTRA25",
    "Members: Free Shipping on Orders $50+",
  ];
  let currentIndex = 0;
  const contentElement = document.getElementById("carousel-text");

  function slideText() {
    contentElement.style.transition = "none";
    contentElement.style.transform = "translateX(100%)";
    setTimeout(() => {
      contentElement.style.transition = "transform 1s ease";
      contentElement.style.transform = "translateX(0)";
      contentElement.textContent = texts[currentIndex];
      currentIndex = (currentIndex + 1) % texts.length;
    }, 100);
  }

  setInterval(slideText, 3000); // Change text every 3 seconds
});
