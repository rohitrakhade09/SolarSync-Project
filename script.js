// ===================================
// SIGNAL CHAIN - WEBSITE INTERACTION
// ===================================

// MOBILE NAVIGATION

function toggleMenu() {
    const nav = document.getElementById("nav");

    nav.classList.toggle("active");
}

// CLOSE MENU AFTER CLICKING A LINK

document.querySelectorAll("#nav a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("nav").classList.remove("active");
    });
});

// AUTOMATIC COPYRIGHT YEAR

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}

// SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll(
    "section, .hero-content, .card, .flow-box, .timeline-item"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12
    }
);

revealElements.forEach(element => {
    observer.observe(element);
});

// ACTIVE NAVIGATION LINK

const sections = document.querySelectorAll(
    "section[id], .hero[id]"
);

const navLinks = document.querySelectorAll("#nav a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 130;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + currentSection
        ) {
            link.classList.add("active");
        }
    });

});