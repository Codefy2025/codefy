const API_URL = "https://sparkling-shape-65b4.niklasjuulrasmussen7.workers.dev/api/content";

const output = document.getElementById("output");
const button = document.getElementById("loadBtn");

button.addEventListener("click", async () => {
  const apiKey = document.getElementById("apiKey").value;

  if (!apiKey) {
    output.textContent = "Please enter an API key.";
    return;
  }

  try {
    output.textContent = "Loading...";

    const res = await fetch(API_URL, {
      method: "GET",
      headers: {
        "x-api-key": apiKey
      }
    });

    const text = await res.text();

    // Try to format JSON nicely
    try {
      output.textContent = JSON.stringify(JSON.parse(text), null, 2);
    } catch {
      output.textContent = text;
    }

  } catch (err) {
    output.textContent = "Error: " + err.message;
  }
});
