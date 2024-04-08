// Code for generating fireworks
function createFireworks() {
    const fireworks = document.getElementById("fireworks");
    const colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff"];
    const numFireworks = 30;
    
    for (let i = 0; i < numFireworks; i++) {
      const firework = document.createElement("div");
      firework.className = "firework";
      firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      firework.style.left = `${Math.random() * 100}%`;
      firework.style.top = `${Math.random() * 100}%`;
      fireworks.appendChild(firework);
    }
  }
  
  createFireworks();
  