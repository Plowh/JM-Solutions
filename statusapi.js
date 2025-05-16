const cheats = ["r6lite", "r6Full", "r6UA", "r6Recoil"];
const apiURL = "https://tassamai-0eb2bce07b49.herokuapp.com/api/status?name=";

function getColor(status) {
  switch (status.toLowerCase()) {
    case "undetected": return "green";
    case "updating": return "orange";
    case "detected": return "red";
    default: return "gray";
  }
}

async function fetchStatus(name) {
  try {
    const res = await fetch(apiURL + name);
    const data = await res.json();
    const element = document.getElementById(name);

    if (data.success) {
      const status = data.variable;
      const color = getColor(status);
      element.textContent = `${name} is ${status}`;
      element.style.color = color;
    } else {
      element.textContent = `${name}: ${data.message}`;
      element.style.color = "gray";
    }
  } catch (err) {
    const element = document.getElementById(name);
    element.textContent = `${name}: Error fetching status`;
    element.style.color = "gray";
  }
}

cheats.forEach(fetchStatus);
