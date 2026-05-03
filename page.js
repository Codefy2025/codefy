const API_BASE = "https://sparkling-shape-65b4.niklasjuulrasmussen7.workers.dev/api/page";

function getUID() {
  const params = new URLSearchParams(window.location.search);
  return params.get("uid") || "home";
}

async function loadPage() {
  const uid = getUID();

  try {
    const res = await fetch(`${API_BASE}?uid=${uid}`);
    const data = await res.json();

    // 🔹 existing elements
    const titleEl = document.getElementById("title");
    const contentEl = document.getElementById("content");
    const imgEl = document.getElementById("image");

    // 🔹 text content
    titleEl.textContent = data.title;
    contentEl.innerHTML = data.content;

    // 🖼️ 👉 ADD IMAGE LOGIC HERE
    if (data.image) {
      imgEl.src = data.image;
      imgEl.alt = data.imageAlt || "";
      imgEl.style.display = "block";
    } else {
      imgEl.style.display = "none";
    }

  } catch (err) {
    document.getElementById("title").textContent = "Error";
    document.getElementById("content").textContent = err.message;
  }
}

loadPage();
