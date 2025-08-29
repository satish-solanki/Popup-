window.addEventListener("load", function () {
  const popup = document.getElementById("popup");
  const closeBtn = document.getElementById("closeBtn");

  // Show popup when site loads/reloads
  popup.classList.add("active");

  // Close popup on button click
  closeBtn.addEventListener("click", function () {
    popup.classList.remove("active");
  });
});
