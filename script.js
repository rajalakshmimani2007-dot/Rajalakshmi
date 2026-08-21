const scriptURL = "https://script.google.com/macros/s/AKfycbxMj7_9WtyRCVeX1VvOFrubOP6flYYvEFraZIIYLPrZxDC46sa594kJMeUtTkGnwYm25Q/exec";

document.getElementById("contactForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const formData = new FormData(this);

    try {
        await fetch(scriptURL, {
            method: "POST",
            body: formData
        });

        alert("Message sent successfully!");
        this.reset();

    } catch (error) {
        alert("Message sending failed!");
        console.error(error);
    }
});
const revealSections = document.querySelectorAll(".reveal");

const sectionObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }

    });

}, {
    threshold: 0.15
});

revealSections.forEach(section => {
    sectionObserver.observe(section);
});