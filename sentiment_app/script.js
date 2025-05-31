document.getElementById("sentiment-form").addEventListener("submit", async function(event) {
    event.preventDefault();

    const userText = document.getElementById("user-text").value;

    const response = await fetch("/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: userText })
    });

    const data = await response.json();
    document.getElementById("result").innerText = `Sentimiento detectado: ${data.sentiment}`;
});
