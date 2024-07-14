const button = document.getElementById("btn");

function generateOtp() {
  const otpLength = 6;
  const otp = Math.floor(100000 + Math.random() * 900000);
  document.getElementById("otpDisplay").textContent = `${otp}`;
}

button.addEventListener("click", generateOtp);
