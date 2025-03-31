// DOMContentLoaded event to ensure the DOM is fully loaded before executing scripts
document.addEventListener("DOMContentLoaded", () => {
    // Initialize the mobile navigation
    const navToggle = document.querySelector(".navbar-toggle");
    const navMenu = document.querySelector(".navbar-menu");
  
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      navToggle.classList.toggle("active");
    });
  
    // Smooth scrolling for anchor links
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: "smooth" });
      });
    });
  
    // Modal functionality
    const modal = document.querySelector(".modal");
    const modalClose = document.querySelector(".modal-close");
    const modalOpenButtons = document.querySelectorAll("[data-modal]");
  
    modalOpenButtons.forEach(button => {
      button.addEventListener("click", () => {
        modal.classList.add("active");
      });
    });
  
    modalClose.addEventListener("click", () => {
      modal.classList.remove("active");
    });
  
    // Close modal when clicking outside of it
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("active");
      }
    });
  
    // Form validation
    const form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const nameInput = form.querySelector("input[name='name']");
      const emailInput = form.querySelector("input[name='email']");
      const errorMessage = form.querySelector(".error-message");
  
      // Simple validation
      if (nameInput.value.trim() === "" || emailInput.value.trim() === "") {
        errorMessage.textContent = "Please fill in all fields.";
        errorMessage.style.display = "block";
      } else {
        errorMessage.style.display = "none";
        // Here you can handle form submission (e.g., send data to a server)
        console.log("Form submitted:", {
          name: nameInput.value,
          email: emailInput.value,
        });
        form.reset(); // Reset the form after submission
      }
    });
  });