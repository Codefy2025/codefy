const output = document.getElementById("output");

document.getElementById("load").onclick = async () => {
  try {
    const res = await fetch("https://sparkling-shape-65b4.niklasjuulrasmussen7.workers.dev/");
    const data = await res.text();

    output.textContent = data;
  } catch (err) {
    output.textContent = "Error: " + err.message;
  }
};
