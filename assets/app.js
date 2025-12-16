// LuxeWatchCo - tiny script for demo interactions
document.addEventListener("submit", (e) => {
  const form = e.target;
  if (form.matches("[data-demo-form]")) {
    e.preventDefault();
    const msg = form.querySelector("[data-demo-msg]");
    if (msg) msg.textContent = "Thanks! We received your message (demo).";
    form.reset();
  }
});