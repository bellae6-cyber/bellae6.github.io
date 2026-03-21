function showTip() {
  const tips = [
    "Use heat protectant before styling.",
    "Don't wash your hair every day.",
    "Trim your ends regularly.",
    "Use a silk pillowcase to reduce breakage.",
    "Deep condition once a week."
    ];

const randonTip = tips[Math.floor(Math.random() * tips.length)];

document.getElementById("tipText").innerText = randomTip;
