// Fungsi untuk pindah ke halaman utama
function goToMainPage() {
    const name = document.getElementById("name-input").value;
    if (name.trim() === "") {
      alert("Please enter your name!");
      return;
    }
    
    // Navigasi ke halaman utama
    document.getElementById("welcome-page").classList.add("hidden");
    document.getElementById("main-page").classList.remove("hidden");
    document.getElementById("greeting").textContent = `Halo ${name}.`;
  }
  
  // Fungsi untuk menampilkan pop-up
  function showPopup(content) {
    document.getElementById("popup").classList.remove("hidden");
    document.getElementById("overlay").classList.remove("hidden");
    document.getElementById("popup-text").textContent = `You selected: ${content}`;
  }
  
  // Fungsi untuk menutup pop-up
  function closePopup() {
    document.getElementById("popup").classList.add("hidden");
    document.getElementById("overlay").classList.add("hidden");
  }
  
  // Fungsi untuk kembali ke halaman awal
  function goBackToWelcomePage() {
    document.getElementById("main-page").classList.add("hidden");
    document.getElementById("welcome-page").classList.remove("hidden");
    document.getElementById("name-input").value = ""; // Reset input nama
  }
  
  // Event listener untuk menangkap tombol Enter pada keyboard
  document.getElementById("name-input").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      goToMainPage(); // Panggil fungsi goToMainPage saat tombol Enter ditekan
    }
  });
  