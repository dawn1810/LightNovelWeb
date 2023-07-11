

const modal = document.querySelector(".modal");
const modal2 = document.querySelector(".modal2");

const login_gg = document.querySelector(".login_gg");
login_gg.onclick = async function () {
  window.open(
    `${currentURL}/auth/google`,
    "login With Google",
    "width=500,height=500"
  );
};
const login_fa = document.querySelector(".login_fa");
login_fa.onclick = async function () {
  window.open(
    `${currentURL}/auth/facebook`,
    "login With Facebook",
    "width=500,height=500"
  );
};
const login_tw = document.querySelector(".login_tw");
login_tw.onclick = async function () {
  window.open(
    `${currentURL}/login/twitter`,
    "login With Twitter",
    "width=500,height=500"
  );
};

