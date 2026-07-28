// ==========================
// MOBILE MENU
// ==========================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// ==========================
// NAVBAR SHADOW
// ==========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,.4)";
    } else {
        navbar.style.boxShadow = "none";
    }

});

// ==========================
// FILTER PORTFOLIO
// ==========================

const filterButtons = document.querySelectorAll(".filter-buttons button");
const cards = document.querySelectorAll(".gallery .card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        const filter = button.dataset.filter;

        cards.forEach(card => {

            if (
                filter === "all" ||
                card.dataset.category === filter
            ) {
                card.style.display = "block";
            }
            else {
                card.style.display = "none";
            }

        });

    });

});

// ==========================
// SEARCH
// ==========================

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", () => {

    const value = searchInput.value.toLowerCase();

    cards.forEach(card => {

        const title = card.querySelector("h3").innerText.toLowerCase();

        if (title.includes(value)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

});

// ==========================
// VIDEO POPUP
// ==========================

const popup = document.querySelector(".video-popup");
const popupVideo = document.getElementById("popup-video");
const playBtns = document.querySelectorAll(".play-btn");
const closeBtn = document.querySelector(".close");

playBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        popup.style.display = "flex";

        popupVideo.src = btn.dataset.video;

        popupVideo.play();

    });

});

closeBtn.addEventListener("click", () => {

    popup.style.display = "none";

    popupVideo.pause();

    popupVideo.src = "";

});

window.addEventListener("click", (e) => {

    if (e.target === popup) {

        popup.style.display = "none";

        popupVideo.pause();

        popupVideo.src = "";

    }

});

// ==========================
// CONTACT FORM
// ==========================

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    alert("Thank you! Your message has been sent successfully.");

    form.reset();

});

// ==========================
// BACK TO TOP
// ==========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

// ==========================
// REVEAL ANIMATION
// ==========================

const sections = document.querySelectorAll("section");

function revealSections() {

    sections.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            section.style.opacity = "1";

            section.style.transform = "translateY(0)";

        }

    });

}

sections.forEach(section => {

    section.style.opacity = "0";

    section.style.transform = "translateY(60px)";

    section.style.transition = ".8s";

});

window.addEventListener("scroll", revealSections);

revealSections();

// ==========================
// DARK MODE
// ==========================

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {

        themeToggle.classList.remove("fa-moon");

        themeToggle.classList.add("fa-sun");

    } else {

        themeToggle.classList.remove("fa-sun");

        themeToggle.classList.add("fa-moon");

    }

});

// ==========================
// COUNTER ANIMATION
// ==========================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const update = () => {

        const target = parseInt(counter.innerText);

        let count = +counter.getAttribute("data-count") || 0;

        const increment = Math.ceil(target / 80);

        if (count < target) {

            count += increment;

            counter.innerText = count + "+";

            counter.setAttribute("data-count", count);

            setTimeout(update, 30);

        } else {

            counter.innerText = target + "+";

        }

    };

    update();

});