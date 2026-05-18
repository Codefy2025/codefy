function getUID() {

  const params =
    new URLSearchParams(window.location.search);

  return params.get("uid");
}

async function loadProject() {

  const uid = getUID();

  const res = await fetch(
    `https://sparkling-shape-65b4.niklasjuulrasmussen7.workers.dev/api/project?uid=${uid}`
  );

  const data = await res.json();

  const container =
    document.getElementById("project");

  container.innerHTML = `
    <h1>${data.title}</h1>

    ${
      data.image
        ? `<img src="${data.image}" style="max-width:100%;">`
        : ""
    }

    <div>${data.content}</div>
  `;
}

loadProject();
