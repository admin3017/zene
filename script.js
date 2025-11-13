// === DUGME "PROČITAJ VIŠE" ===
function toggleTekst(id) {
  const tekst = document.getElementById(id);
  if (!tekst) return;

  if (tekst.style.display === "block") {
    tekst.style.display = "none";
  } else {
    // Zatvori druge otvorene sekcije
    document.querySelectorAll(".skriveni-tekst").forEach(el => el.style.display = "none");
    tekst.style.display = "block";
    tekst.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// === GODINA U FOOTERU ===
document.getElementById("year").textContent = new Date().getFullYear();

// === GLATKI PRELAZI PRI SKROLU ===
window.addEventListener("scroll", () => {
  document.querySelectorAll("section").forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.8) {
      sec.style.opacity = 1;
      sec.style.transform = "translateY(0)";
    }
  });
});

// Inicijalno postavljanje stila za fade-in animaciju
document.querySelectorAll("section").forEach(sec => {
  sec.style.opacity = 0;
  sec.style.transform = "translateY(40px)";
  sec.style.transition = "opacity 0.8s ease, transform 0.8s ease";
});
