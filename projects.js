async function loadProjects() {

  const res = await fetch(
    "https://sparkling-shape-65b4.niklasjuulrasmussen7.workers.dev/api/page?uid=projects"
  );

  const projects = await res.json();

  const container = document.getElementById("projects-list");

  container.innerHTML = "";

  projects.forEach(project => {

    const item = document.createElement("div");

    item.className = "project-card";

    item.innerHTML = `
      <a href="/projects/${project.uid}">
        ${project.image
          ? `<img src="${project.image}" alt="">`
          : ""
        }

        <h2>${project.title}</h2>
      </a>
    `;

    container.appendChild(item);
  });
}

loadProjects();
