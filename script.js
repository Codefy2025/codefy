const API_URL = "https://sparkling-shape-65b4.niklasjuulrasmussen7.workers.dev/api/home";

async function loadHome() {
  const res = await fetch(API_URL);
  const data = await res.json();

  document.getElementById("title").innerText = data.title;
  document.getElementById("desc").innerText = data.description;
}

loadHome();
