
// Falling Rainbow Hearts

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  // Random position
  heart.style.left = Math.random() * window.innerWidth + "px";

  // Random size
  const size = Math.random() * 30 + 10; // 10px to 40px
  heart.style.width = size + "px";
  heart.style.height = size + "px";
  heart.style.setProperty("--size", size + "px");

  // Random color
  const colors = ["red","orange","yellow","green","blue","indigo","violet"];
  heart.style.background = colors[Math.floor(Math.random() * colors.length)];
  heart.style.setProperty("--color", heart.style.background);

  // Color the before & after for the heart shape
  heart.style.setProperty("--before-color", heart.style.background);
  heart.style.setProperty("--after-color", heart.style.background);

  // Random animation speed
  const speed = Math.random() * 3 + 2; // 2s to 5s
  heart.style.animationDuration = speed + "s";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), speed * 1000);
}

// Generate hearts every 300ms
setInterval(createHeart, 300);
