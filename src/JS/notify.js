// toast
const toast = document.querySelector(".toast");
const toast_icon = document.querySelector(".toast-content i");
const closeIcon = document.getElementById("close");
const progress = document.querySelector(".progress");
closeIcon.addEventListener("click", () => {
  toast.classList.remove("active");
});


function notify(type, text_2) {
    switch (type) {
      // thong bao
      case "n":
        toast_icon.classList = ["fas fa-solid fa-check"];
        toast.querySelector(".text-1").innerHTML = "Thông báo";
        document.documentElement.style.setProperty("--color_i", "#3adb3a");
        break;
      // chu y
      case "!":
        toast_icon.classList = ["fa-solid fa-exclamation"];
        toast.querySelector(".text-1").innerHTML = "Chú ý";
        document.documentElement.style.setProperty("--color_i", "#e1e11a");
  
        break;
      // loi
      case "x":
        toast_icon.classList = ["fa-solid fa-x"];
        toast.querySelector(".text-1").innerHTML = "Lỗi";
        document.documentElement.style.setProperty("--color_i", "red");
  
        break;
    }
  
    toast.querySelector(".text-2").innerHTML = text_2;
    toast.classList.add("active");
    progress.classList.add("active");
  
    timer1 = setTimeout(() => {
      toast.classList.remove("active");
    }, 5000); //1s = 1000 milliseconds
  
    timer2 = setTimeout(() => {
      progress.classList.remove("active");
    }, 5300);
  }