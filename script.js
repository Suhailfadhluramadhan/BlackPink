// ===== IMAGE SLIDER =====
let currentSlideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let slideInterval;

// Function to show specific slide
function showSlide(index) {
  // Wrap around if index is out of bounds
  if (index >= slides.length) {
    currentSlideIndex = 0;
  } else if (index < 0) {
    currentSlideIndex = slides.length - 1;
  } else {
    currentSlideIndex = index;
  }

  // Remove active class from all slides and dots
  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  // Add active class to current slide and dot
  slides[currentSlideIndex].classList.add("active");
  dots[currentSlideIndex].classList.add("active");
}

// Function to change slide
function changeSlide(direction) {
  showSlide(currentSlideIndex + direction);
  resetSlideInterval();
}

// Function to go to specific slide
function currentSlide(index) {
  showSlide(index);
  resetSlideInterval();
}

// Auto slide every 4 seconds
function startSlideInterval() {
  slideInterval = setInterval(() => {
    showSlide(currentSlideIndex + 1);
  }, 4000);
}

// Reset interval when user manually changes slide
function resetSlideInterval() {
  clearInterval(slideInterval);
  startSlideInterval();
}

// Start slider when page loads
document.addEventListener("DOMContentLoaded", function () {
  if (slides.length > 0) {
    showSlide(0);
    startSlideInterval();
  }
});

// ===== SIDEBAR FUNCTIONALITY =====
// Toggle Sidebar for Mobile
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebarOverlay");

  console.log("Sidebar toggled"); // Debug
  console.log("Sidebar element:", sidebar); // Debug

  if (sidebar && overlay) {
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");

    // Prevent body scroll when sidebar is open
    if (sidebar.classList.contains("active")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }
}

// Close sidebar when clicking outside or on overlay
document.addEventListener("DOMContentLoaded", function () {
  const overlay = document.getElementById("sidebarOverlay");

  if (overlay) {
    overlay.addEventListener("click", function () {
      toggleSidebar();
    });
  }

  // Close sidebar when clicking on a link
  const sidebarLinks = document.querySelectorAll(".sidebar .nav-links a");
  sidebarLinks.forEach((link) => {
    link.addEventListener("click", function () {
      setTimeout(() => {
        toggleSidebar();
      }, 300);
    });
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Form submission handler
function handleFormSubmit(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const ticketType = document.getElementById("ticket-type").value;
  const quantity = document.getElementById("quantity").value;

  // Show success message
  alert(
    `Thank you, ${name}!\n\nYour ticket purchase request has been submitted.\n\nDetails:\n- Email: ${email}\n- Phone: ${phone}\n- Ticket Type: ${ticketType.toUpperCase()}\n- Quantity: ${quantity}\n- Event: BLACKPINK World Tour 2025 - Jakarta\n\nYou will receive a confirmation email shortly.`
  );

  // Reset form
  event.target.reset();
}

// Add active state to navbar on scroll
let lastScroll = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    navbar.style.padding = "0.5rem 5%";
  } else {
    navbar.style.padding = "1rem 5%";
  }

  lastScroll = currentScroll;
});

// Animate elements on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll("section").forEach((section) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(50px)";
  section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(section);
});

// Set first section visible immediately
document.querySelector("#home").style.opacity = "1";
document.querySelector("#home").style.transform = "translateY(0)";

// Add hover effect to member cards on desktop
const memberCards = document.querySelectorAll(".member-card");
memberCards.forEach((card) => {
  card.addEventListener("click", function () {
    // Remove flipped class from other cards
    memberCards.forEach((otherCard) => {
      if (otherCard !== card) {
        otherCard.classList.remove("flipped");
      }
    });
  });
});

// Album items click effect
document.querySelectorAll(".album-item").forEach((item) => {
  item.addEventListener("click", function (e) {
    if (!e.target.closest(".spotify-link")) {
      const spotifyLink = this.querySelector(".spotify-link");
      if (spotifyLink) {
        spotifyLink.click();
      }
    }
  });
});
