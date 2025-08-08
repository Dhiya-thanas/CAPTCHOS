// Generate new CAPTCHA after successful attempt
a = Math.floor(Math.random() * 10);
b = Math.floor(Math.random() * 10);
document.getElementById("math-captcha").textContent = `What is ${a} + ${b}?`;
document.getElementById("user-answer").value = ""; // clear input
return false; // Prevent actual submission to keep the page from reloading
