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