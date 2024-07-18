document.addEventListener("DOMContentLoaded", function () {
  const thumbnails = document.querySelectorAll(".thumbnailList img"); // Select all thumbnails
  const mainImage = document.getElementById("mainImage"); // Main image element
  const leftArrow = document.querySelector(".leftArrow"); // Left arrow
  const rightArrow = document.querySelector(".rightArrow"); // Right arrow
  const sizeButtons = document.querySelectorAll(".sizeSelector .sizes button"); // Size buttons
  const addToBagButton = document.querySelector(".addToBag"); // 'Add to Bag' button
  const sizeLabel = document.querySelector(".sizeSelector label"); // Size label
  const messageBox = document.getElementById("messageBox"); // Message box
  let currentImageIndex = 0; // Current image index
  let sizeSelected = false; // Size selected flag

  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("mouseover", function () {
      const largeImageSrc = thumbnail.getAttribute("data-large");
      mainImage.src = largeImageSrc; // Update main image
      currentImageIndex = index; // Update current image index
    });
  });

  function showImage(index) {
    const totalImages = thumbnails.length;
    currentImageIndex = (index + totalImages) % totalImages; // Cycle through images
    const largeImageSrc =
      thumbnails[currentImageIndex].getAttribute("data-large");
    mainImage.src = largeImageSrc; // Update main image
  }

  leftArrow.addEventListener("click", function () {
    showImage(currentImageIndex - 1); // Show previous image
  });

  rightArrow.addEventListener("click", function () {
    showImage(currentImageIndex + 1); // Show next image
  });

  sizeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      sizeButtons.forEach((btn) => {
        btn.classList.remove("selected");
        btn.classList.remove("error");
      });
      button.classList.add("selected"); // Select size
      addToBagButton.disabled = false; // Enable 'Add to Bag' button
      sizeSelected = true; // Set size selected flag
      sizeLabel.classList.remove("error");
      messageBox.style.display = "none";
    });
  });

  addToBagButton.addEventListener("click", function (event) {
    if (!sizeSelected) {
      event.preventDefault(); // Prevent form submission
      sizeLabel.classList.add("error");
      sizeButtons.forEach((button) => {
        button.classList.add("error");
      });
      messageBox.style.display = "block"; // Show error message
    } else {
      window.location.href = "checkout-first.html"; // Proceed to checkout
    }
  });
});
