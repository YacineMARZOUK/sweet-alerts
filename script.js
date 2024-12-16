// let info = document.getElementById("info");
// let success = document.getElementById("success");
// let warning = document.getElementById("warning");
// let danger = document.getElementById("danger");
let info = document.getElementById("info");

info.addEventListener("click", () => {
  const popup = document.createElement("div");
  popup.className = "popup";
  popup.innerHTML = `
    <div class="popup-content">
      <p>This is an info alert! </p>
      <button class="close-popup">OK</button>
    </div>
  `;

  
  document.body.appendChild(popup);

  const closeBtn = popup.querySelector(".close-popup");
  closeBtn.addEventListener("click", () => {
    popup.remove();
  });
});

