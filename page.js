const API_BASE = "https://sparkling-shape-65b4.niklasjuulrasmussen7.workers.dev/api/page";

function getUID() {
  const params = new URLSearchParams(window.location.search);
  return params.get("uid") || "home"; // default page
}

async function loadPage() {
  const uid = getUID();

  try {
    const res = await fetch(`${API_BASE}?uid=${uid}`);
    const data = await res.json();

    if (data.error) {
      throw new Error(data.error);
    }

    document.getElementById("title").textContent = data.title;
    document.getElementById("content").innerHTML = data.content;
    document.getElementById("page-title").textContent = data.title;

  } catch (err) {
    document.getElementById("title").textContent = "Error";
    document.getElementById("content").textContent = err.message;
  }
}

loadPage();
