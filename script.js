// Button click
document.getElementById("magicBtn").addEventListener("click", () => {
    alert("Button clicked!");
    document.getElementById("magicBtn").style.backgroundColor = "lightgreen";
  });
  
  // Double-click action
  document.getElementById("secretBtn").addEventListener("dblclick", () => {
    alert("Secret action unlocked! 🎉");
  });
  
  // Hover effect
  document.getElementById("magicBtn").addEventListener("mouseover", () => {
    document.getElementById("magicBtn").style.transform = "scale(1.1)";
  });
  document.getElementById("magicBtn").addEventListener("mouseout", () => {
    document.getElementById("magicBtn").style.transform = "scale(1)";
  });
  
  // Keypress detection
  document.addEventListener("keydown", (e) => {
    console.log(`Key pressed: ${e.key}`);
  });
  
  // Image gallery
  const images = ["img1.jpg", "img2.jpg", "img3.jpg"];
  let currentImg = 0;
  document.getElementById("nextImg").addEventListener("click", () => {
    currentImg = (currentImg + 1) % images.length;
    document.getElementById("galleryImg").src = images[currentImg];
  });
  
  // Tabs
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".tab-content").forEach((content) => {
        content.style.display = "none";
      });
      document.getElementById(tab.dataset.tab).style.display = "block";
    });
  });
  
  // Form validation
  document.getElementById("myForm").addEventListener("submit", function (e) {
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
  
    if (!username || !email || password.length < 8 || !email.includes("@")) {
      alert("Please fill in all fields correctly.");
      e.preventDefault();
    }
  });
  
  // Real-time feedback
  document.getElementById("password").addEventListener("input", function () {
    if (this.value.length < 8) {
      this.style.borderColor = "red";
    } else {
      this.style.borderColor = "green";
    }
  });
  