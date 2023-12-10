const refreshBtn = document.getElementById("refresh");
const toggleBtn = document.getElementById("toggle");
let theme = localStorage.getItem("theme") || "light";

document.body.classList.toggle("dark", theme === "dark");

toggleBtn.addEventListener("click", toggleMode);
refreshBtn.addEventListener("click", reload);

function toggleMode() { 
  if (document.body.classList.contains("dark")) {
      document.body.classList.remove("dark");
      theme = "light";
  } else {
      document.body.classList.add("dark");
      theme = "dark";
  }

  localStorage.setItem("theme", theme);
}

 
function reload() {
   
    window.location.reload();
}
