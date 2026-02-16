/**
 * GR Infraprojects - Main JavaScript
 * Version: 1.0
 */

// ============ Sidebar Navigation ============
window.toggleSidebar = function () {
  const sidebar = document.getElementById("sidebarNav");
  const overlay = document.getElementById("sidebarOverlay");

  if (!sidebar || !overlay) return;

  sidebar.classList.toggle("active");
  overlay.classList.toggle("active");

  if (sidebar.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
};

// Close sidebar on escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    const sidebar = document.getElementById("sidebarNav");
    if (sidebar && sidebar.classList.contains("active")) {
      toggleSidebar();
    }
  }
});

// ============ Hero Slider ============
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".slider-dot");

function showSlide(n) {
  if (slides.length === 0) return;

  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  currentSlide = (n + slides.length) % slides.length;

  slides[currentSlide].classList.add("active");
  if (dots[currentSlide]) {
    dots[currentSlide].classList.add("active");
  }
}

window.goToSlide = function (n) {
  showSlide(n);
};

// Auto slide every 5 seconds
if (slides.length > 0) {
  setInterval(() => {
    showSlide(currentSlide + 1);
  }, 5000);
}

// ============ FAQ Toggle ============
document.addEventListener("DOMContentLoaded", function () {
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question) => {
    question.addEventListener("click", function () {
      const faqItem = this.closest(".faq-item");
      const answer = this.nextElementSibling;
      const isActive = faqItem.classList.contains("active");

      // Close all FAQs
      document.querySelectorAll(".faq-item").forEach((item) => {
        item.classList.remove("active");
        item.querySelector(".faq-answer").classList.remove("active");
      });

      // Open clicked FAQ if it wasn't active
      if (!isActive) {
        faqItem.classList.add("active");
        answer.classList.add("active");
      }
    });
  });
});

// ============ Header Scroll Effect ============
window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  if (header) {
    if (window.scrollY > 100) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }
});

// ============ Smooth Scroll ============
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

// ============ Stats Counter Animation ============
function animateCounter(element) {
  const target = parseInt(element.getAttribute("data-target"));
  const duration = 2000;
  const increment = target / (duration / 16);
  let current = 0;

  const updateCounter = () => {
    current += increment;
    if (current < target) {
      element.textContent = Math.floor(current) + "+";
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target + "+";
    }
  };

  updateCounter();
}

// Intersection Observer for counter animation
const observerOptions = {
  threshold: 0.5,
  rootMargin: "0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const counters = entry.target.querySelectorAll(".stat-number");
      counters.forEach((counter) => {
        if (!counter.classList.contains("animated")) {
          counter.classList.add("animated");
          animateCounter(counter);
        }
      });
    }
  });
}, observerOptions);

// Observe stats sections
document.addEventListener("DOMContentLoaded", () => {
  const statsSection = document.querySelector(".stats-section");
  const statsCounterSection = document.querySelector(".stats-counter-section");
  if (statsSection) {
    observer.observe(statsSection);
  }
  if (statsCounterSection) {
    observer.observe(statsCounterSection);
  }
});

// ============ Contact Form Handling ============
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you for your message! We will get back to you soon.");
      this.reset();
    });
  }
});

// ============ Gallery Slider ============
let currentGallerySlide = 0;
const gallerySlides = document.querySelectorAll(".gallery-slide");

function showGallerySlide(n) {
  if (gallerySlides.length === 0) return;

  gallerySlides.forEach((slide) => slide.classList.remove("active"));
  currentGallerySlide = (n + gallerySlides.length) % gallerySlides.length;
  gallerySlides[currentGallerySlide].classList.add("active");
}

window.changeGallerySlide = function (direction) {
  showGallerySlide(currentGallerySlide + direction);
};

if (gallerySlides.length > 0) {
  setInterval(() => {
    showGallerySlide(currentGallerySlide + 1);
  }, 4000);
}

// ============ Testimonial Slider ============
let currentTestimonialSlide = 0;
const testimonialSlides = document.querySelectorAll(".testimonial-slide");

function showTestimonialSlide(n) {
  if (testimonialSlides.length === 0) return;

  testimonialSlides.forEach((slide) => slide.classList.remove("active"));
  currentTestimonialSlide =
    (n + testimonialSlides.length) % testimonialSlides.length;
  testimonialSlides[currentTestimonialSlide].classList.add("active");
}

window.changeTestimonialSlide = function (direction) {
  showTestimonialSlide(currentTestimonialSlide + direction);
};

if (testimonialSlides.length > 0) {
  setInterval(() => {
    showTestimonialSlide(currentTestimonialSlide + 1);
  }, 5000);
}

// ============ Blog Slider ============
let currentBlogSlide = 0;
const blogSlides = document.querySelectorAll(".blog-slide");

function showBlogSlide(n) {
  if (blogSlides.length === 0) return;

  blogSlides.forEach((slide) => slide.classList.remove("active"));
  currentBlogSlide = (n + blogSlides.length) % blogSlides.length;
  blogSlides[currentBlogSlide].classList.add("active");
}

window.changeBlogSlide = function (direction) {
  showBlogSlide(currentBlogSlide + direction);
};

if (blogSlides.length > 0) {
  setInterval(() => {
    showBlogSlide(currentBlogSlide + 1);
  }, 6000);
}

// ============ Scroll Animations ============
const scrollAnimateObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");
      }
    });
  },
  {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }
);

document.addEventListener("DOMContentLoaded", () => {
  // Add scroll animation classes to sections
  const sections = document.querySelectorAll(
    "section:not(.hero-slider), .service-card, .gallery-item-new, .team-member-card, .faq-item"
  );
  sections.forEach((section) => {
    section.classList.add("scroll-animate");
    scrollAnimateObserver.observe(section);
  });

  // Add left/right animations for specific elements
  const leftElements = document.querySelectorAll(".about-left, .faq-image-side");
  leftElements.forEach((el) => {
    el.classList.add("scroll-animate-left");
    scrollAnimateObserver.observe(el);
  });

  const rightElements = document.querySelectorAll(
    ".about-right, .faq-questions-side"
  );
  rightElements.forEach((el) => {
    el.classList.add("scroll-animate-right");
    scrollAnimateObserver.observe(el);
  });
});

// ============ Lazy Loading Images ============
const lazyLoadObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.classList.add("loaded");
          img.removeAttribute("data-src");
          lazyLoadObserver.unobserve(img);
        }
      }
    });
  },
  {
    rootMargin: "50px",
  }
);

document.addEventListener("DOMContentLoaded", () => {
  const lazyImages = document.querySelectorAll("img[data-src]");
  lazyImages.forEach((img) => {
    lazyLoadObserver.observe(img);
  });
});
