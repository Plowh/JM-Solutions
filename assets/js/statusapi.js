const cheats = {
  r6lite: "R6 Lite",
  "b06-lite": "BO6 Lite"
};

const apiURL = "https://tassamai-0eb2bce07b49.herokuapp.com/api/status?name=";

function getColorClass(status) {
  switch (status.toLowerCase()) {
    case "undetected": return "text-green-400"; 
    case "updating": return "text-yellow-400"; 
    case "detected": return "text-red-600"; 
    default: return "text-gray-400";
  }
}

async function fetchStatus(name) {
  const displayName = cheats[name];
  try {
    const res = await fetch(apiURL + name);
    const data = await res.json();
    const element = document.getElementById(`${name}-status`);

    if (data.success) {
      const status = data.variable;
      const capitalizedStatus = status.charAt(0).toUpperCase() + status.slice(1).toLowerCase();

      element.textContent = capitalizedStatus;

      // tailwind classes
      element.classList.remove("text-green-400", "text-yellow-400", "text-red-600", "text-gray-400");
      element.classList.add(getColorClass(status));
    } else {
      element.textContent = data.message || "Unavailable";
      element.classList.remove("text-green-400", "text-yellow-400", "text-red-600");
      element.classList.add("text-gray-400");
    }
  } catch (err) {
    const element = document.getElementById(`${name}-status`);
    element.textContent = "Error";
    element.classList.remove("text-green-400", "text-yellow-400", "text-red-600");
    element.classList.add("text-gray-400");
  }
}

Object.keys(cheats).forEach(fetchStatus);
