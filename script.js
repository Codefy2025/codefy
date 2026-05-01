async function loadHome() {
  const res = await fetch("https://sparkling-shape-65b4.niklasjuulrasmussen7.workers.dev/api/home");
  const data = await res.json();

  document.getElementById("title").innerText = data.title;
  document.getElementById("desc").innerText = data.description;
}

loadHome();
