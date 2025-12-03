const data = [
  { name: "Compute", aws: "EC2", azure: "VMs", gcp: "Compute Engine" },
  { name: "Storage", aws: "S3", azure: "Blob Storage", gcp: "Cloud Storage" },
  { name: "Database", aws: "RDS", azure: "SQL Database", gcp: "Cloud SQL" },
  { name: "Serverless", aws: "Lambda", azure: "Functions", gcp: "Cloud Functions" },
  { name: "Container Service", aws: "EKS", azure: "AKS", gcp: "GKE" },
];

function drawCards(list) {
  const container = document.getElementById("container");
  container.innerHTML = "";
  list.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${item.name}</h3>
      <p><span>AWS:</span> ${item.aws}</p>
      <p><span>Azure:</span> ${item.azure}</p>
      <p><span>GCP:</span> ${item.gcp}</p>
    `;
    container.appendChild(card);
  });
}

document.getElementById("search").addEventListener("input", function () {
  const q = this.value.trim().toLowerCase();
  const filtered = data.filter(item =>
    item.name.toLowerCase().includes(q) ||
    item.aws.toLowerCase().includes(q) ||
    item.azure.toLowerCase().includes(q) ||
    item.gcp.toLowerCase().includes(q)
  );
  drawCards(filtered);
});

drawCards(data);
