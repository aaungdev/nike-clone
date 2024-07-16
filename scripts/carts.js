document.addEventListener("DOMContentLoaded", function () {
  const thumbnails = document.querySelectorAll(".thumbnailList img");
  const mainImage = document.getElementById("mainImage");
  const leftArrow = document.querySelector(".leftArrow");
  const rightArrow = document.querySelector(".rightArrow");
  const sizeButtons = document.querySelectorAll(".sizeSelector .sizes button");
  const addToBagButton = document.querySelector(".addToBag");
  const messageBox = document.getElementById("messageBox");
  let currentImageIndex = 0;
  let sizeSelected = false;

  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("mouseover", function () {
      const largeImageSrc = thumbnail.getAttribute("data-large");
      mainImage.src = largeImageSrc;
      currentImageIndex = index;
    });
  });

  function showImage(index) {
    const totalImages = thumbnails.length;
    currentImageIndex = (index + totalImages) % totalImages;
    const largeImageSrc =
      thumbnails[currentImageIndex].getAttribute("data-large");
    mainImage.src = largeImageSrc;
  }

  leftArrow.addEventListener("click", function () {
    showImage(currentImageIndex - 1);
  });

  rightArrow.addEventListener("click", function () {
    showImage(currentImageIndex + 1);
  });

  sizeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      sizeButtons.forEach((btn) => (btn.style.border = "none"));
      button.style.border = "2px solid #000";
      addToBagButton.disabled = false;
      sizeSelected = true;
      messageBox.style.display = "none";
    });
  });

  addToBagButton.addEventListener("click", function (event) {
    if (!sizeSelected) {
      event.preventDefault();
      messageBox.style.display = "block";
    } else {
      // Code to add the item to the cart
    }
  });
});
