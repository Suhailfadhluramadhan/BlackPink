
let currentSlideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let slideInterval;


function showSlide(index) {

  if (index >= slides.length) {
    currentSlideIndex = 0;
  } else if (index < 0) {
    currentSlideIndex = slides.length - 1;
  } else {
    currentSlideIndex = index;
  }

  
  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

 
  slides[currentSlideIndex].classList.add("active");
  dots[currentSlideIndex].classList.add("active");
}


function changeSlide(direction) {
  showSlide(currentSlideIndex + direction);
  resetSlideInterval();
}


function currentSlide(index) {
  showSlide(index);
  resetSlideInterval();
}


function startSlideInterval() {
  slideInterval = setInterval(() => {
    showSlide(currentSlideIndex + 1);
  }, 4000);
}


function resetSlideInterval() {
  clearInterval(slideInterval);
  startSlideInterval();
}


document.addEventListener("DOMContentLoaded", function () {
  if (slides.length > 0) {
    showSlide(0);
    startSlideInterval();
  }
});


function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebarOverlay");

  console.log("Sidebar toggled"); 
  console.log("Sidebar element:", sidebar); 

  if (sidebar && overlay) {
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");

   
    if (sidebar.classList.contains("active")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }
}


document.addEventListener("DOMContentLoaded", function () {
  const overlay = document.getElementById("sidebarOverlay");

  if (overlay) {
    overlay.addEventListener("click", function () {
      toggleSidebar();
    });
  }

  
  const sidebarLinks = document.querySelectorAll(".sidebar .nav-links a");
  sidebarLinks.forEach((link) => {
    link.addEventListener("click", function () {
      setTimeout(() => {
        toggleSidebar();
      }, 300);
    });
  });
});


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


function handleFormSubmit(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const ticketType = document.getElementById("ticket-type").value;
  const quantity = document.getElementById("quantity").value;


  alert(
    `Thank you, ${name}!\n\nYour ticket purchase request has been submitted.\n\nDetails:\n- Email: ${email}\n- Phone: ${phone}\n- Ticket Type: ${ticketType.toUpperCase()}\n- Quantity: ${quantity}\n- Event: BLACKPINK World Tour 2025 - Jakarta\n\nYou will receive a confirmation email shortly.`
  );

  
  event.target.reset();
}


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


document.querySelectorAll("section").forEach((section) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(50px)";
  section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(section);
});


document.querySelector("#home").style.opacity = "1";
document.querySelector("#home").style.transform = "translateY(0)";


const memberCards = document.querySelectorAll(".member-card");
memberCards.forEach((card) => {
  card.addEventListener("click", function () {
   
    memberCards.forEach((otherCard) => {
      if (otherCard !== card) {
        otherCard.classList.remove("flipped");
      }
    });
  });
});


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

//yuu
//yukiky
//usuruwudsiaueuue
//ususus