document.addEventListener("DOMContentLoaded", function () {
  const thumbnails = document.querySelectorAll(".thumbnailList img");
  const mainImage = document.getElementById("mainImage");
  const leftArrow = document.querySelector(".leftArrow");
  const rightArrow = document.querySelector(".rightArrow");
  const sizeButtons = document.querySelectorAll(".sizeSelector .sizes button");
  const addToBagButton = document.querySelector(".addToBag");
  const messageBox = document.getElementById("messageBox");
  const modal = document.getElementById("sizeModal");
  const closeModal = document.querySelector(".closeModal");
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
      sizeButtons.forEach((btn) => btn.classList.remove("selected"));
      button.classList.add("selected");
      addToBagButton.disabled = false;
      sizeSelected = true;
    });
  });

  addToBagButton.addEventListener("click", function (event) {
    if (!sizeSelected) {
      event.preventDefault();
      // Show modal if size is not selected
      modal.style.display = "block";
    } else {
      window.location.href = "checkout-first.html";
    }
  });

  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
});
