// animation properties
ScrollReveal({
    // reset: true,
    distance: "60px",
    duration: 2500,
});

// animation classes 100 delay
ScrollReveal().reveal(".animate-top-100", { origin: "top", delay: 100 });
ScrollReveal().reveal(".animate-bottom-100", { origin: "bottom", delay: 100 });
ScrollReveal().reveal(".animate-left-100", { origin: "left", delay: 100 });
ScrollReveal().reveal(".animate-right-100", { origin: "right", delay: 100 });

// animation classes 300 delay
ScrollReveal().reveal(".animate-top-300", { origin: "top", delay: 300 });
ScrollReveal().reveal(".animate-bottom-300", { origin: "bottom", delay: 300 });
ScrollReveal().reveal(".animate-left-300", { origin: "left", delay: 300 });
ScrollReveal().reveal(".animate-right-300", { origin: "right", delay: 300 });

// animation classes 500 delay
ScrollReveal().reveal(".animate-top-500", { origin: "top", delay: 500 });
ScrollReveal().reveal(".animate-bottom-500", { origin: "bottom", delay: 500 });
ScrollReveal().reveal(".animate-left-500", { origin: "left", delay: 500 });
ScrollReveal().reveal(".animate-right-500", { origin: "right", delay: 500 });

// Gallery delay
ScrollReveal().reveal(".animate-gallery .image-card", { origin: "bottom", delay: 300, interval: 100 });

// Packages delay
ScrollReveal().reveal(".animate-packages .package-card", { origin: "left", delay: 300, interval: 100 });

// Contacts delay
ScrollReveal().reveal(".animate-contacts .input-field", { origin: "bottom", delay: 300, interval: 100 });

// List animate delay
ScrollReveal().reveal(".animate-list-top a", { origin: "top", delay: 300, interval: 100 });
ScrollReveal().reveal(".animate-list-bottom a", { origin: "bottom", delay: 300, interval: 100 });
ScrollReveal().reveal(".animate-list-left a", { origin: "left", delay: 300, interval: 100 });
ScrollReveal().reveal(".animate-list-right a", { origin: "right", delay: 300, interval: 100 });