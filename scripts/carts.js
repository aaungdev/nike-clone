document.addEventListener("DOMContentLoaded", function () {
  const thumbnails = document.querySelectorAll(".thumbnailList img");
  const mainImage = document.getElementById("mainImage");
  const leftArrow = document.querySelector(".leftArrow");
  const rightArrow = document.querySelector(".rightArrow");
  let currentImageIndex = 0;

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
});
