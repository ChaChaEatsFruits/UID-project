document.addEventListener("DOMContentLoaded", function() {
  window.focus();
  const params = new URLSearchParams(window.location.search);
  document.getElementById("confirm-from").innerText = params.get("from") || "N/A";
  document.getElementById("confirm-to").innerText = params.get("to") || "N/A";
  document.getElementById("confirm-email").innerText = params.get("email") || "N/A";
  document.getElementById("confirm-date").innerText = params.get("date") || "N/A";
  document.getElementById("confirm-class").innerText = params.get("classType") || "N/A";
});