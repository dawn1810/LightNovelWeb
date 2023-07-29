const modal = document.querySelector(".modal"); //cam xoa
const modal2 = document.querySelector(".modal2"); //cam xoa

const login_gg = document.querySelector(".login_gg");
login_gg.onclick = async function () {
  window.open(
    `${currentURL}/api/auth/google`,
    "login With Google",
    "width=500,height=500"
  );
};

