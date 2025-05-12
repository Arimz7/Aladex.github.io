function showAlert() {
  alert("Welcome to Aladex Realty! Let's find your dream home.");
}

// function bookAppointment() {
//   alert("Appointment booked with Ayodele Ajayi.");
// }

function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
}

// function toggleMenu() {
//   const navLinks = document.querySelector('.nav-links');
//   navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
// }

function toggleDropdown(event) {
  event.preventDefault(); // prevent default anchor behavior
  const parent = event.target.closest(".nav-item");

  // Close other open dropdowns
  document.querySelectorAll(".nav-item").forEach((item) => {
    if (item !== parent) item.classList.remove("active");
  });

  parent.classList.toggle("active");
}
var popoverTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="popover"]')
);
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl);
});
