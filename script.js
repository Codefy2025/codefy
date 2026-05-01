const output = document.getElementById("output");

document.getElementById("load").onclick = async () => {
  try {
    const res = await fetch("https://your-worker-url.workers.dev/api/content");
    const data = await res.text();

    output.textContent = data;
  } catch (err) {
    output.textContent = "Error: " + err.message;
  }
};
