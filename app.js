fetch("https://your-worker.workers.dev/content")
  .then(res => res.json())
  .then(data => {
    console.log(data);
  });
