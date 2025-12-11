document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("videoModal");
  const videoPlayer = document.getElementById("videoPlayer");
  const closeBtn = document.querySelector(".video-close");

  // Открытие модалки по клику на видео/элемент
  document.querySelectorAll(".portfolio-item").forEach(item => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const video = item.querySelector("video");
      const src = video?.querySelector("source")?.src || item.getAttribute("href");
      if (!src) return;
      videoPlayer.src = src;
      modal.classList.add("active");
      videoPlayer.play();
    });
  });

  // Закрытие
  if (closeBtn) {
    closeBtn.onclick = () => closeModal();
  }
  if (modal) {
    modal.onclick = (e) => { if (e.target === modal) closeModal(); };
  }

  function closeModal() {
    modal.classList.remove("active");
    videoPlayer.pause();
    videoPlayer.src = "";
  }

  // 🔥 БУРГЕР-МЕНЮ ТУТ
  const navToggle = document.getElementById("navToggle");
  const nav = document.getElementById("nav");

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      nav.classList.toggle("nav-show");  // <-- работа с твоим классом из CSS
    });
  }
});
