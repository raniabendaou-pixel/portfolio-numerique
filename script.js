document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("theme-toggle");
  const body = document.body;

  // Vérifier si l'utilisateur avait déjà choisi le mode sombre
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    if (toggleBtn) toggleBtn.textContent = "☀️ Mode Clair";
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      body.classList.toggle("dark-mode");
      const isDark = body.classList.contains("dark-mode");
      toggleBtn.textContent = isDark ? "☀️ Mode Clair" : "🌙 Mode Sombre";
      localStorage.setItem("theme", isDark ? "dark" : "light");
    });
  }
});
