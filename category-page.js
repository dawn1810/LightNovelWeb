const day_tab_btn=document.getElementById("day-tab");
const month_tab_btn=document.getElementById("month-tab");
const all_tab_btn=document.getElementById("all-tab");

const day_panel_btn=document.getElementById("day-panel");
const month_panel_btn=document.getElementById("month-panel");
const all_panel_btn=document.getElementById("all-panel");

day_tab_btn.onclick=function(e) {
    e.preventDefault();
    if (day_tab_btn.classList[1]!="active"){
        
        day_tab_btn.classList.add("active");
        month_tab_btn.classList.remove("active");
        all_tab_btn.classList.remove("active");

        day_panel_btn.classList.add("active");
        month_panel_btn.classList.remove("active");
        all_panel_btn.classList.remove("active");
    }
}

month_tab_btn.onclick=function(e) {
    e.preventDefault();
    if (month_tab_btn.classList[1]!="active") {

        day_tab_btn.classList.remove("active");
        month_tab_btn.classList.add("active");
        all_tab_btn.classList.remove("active");

        day_panel_btn.classList.remove("active");
        month_panel_btn.classList.add("active");
        all_panel_btn.classList.remove("active");

    }
}
all_tab_btn.onclick=function(e) {
    e.preventDefault();
    if (all_tab_btn.classList[1]!="active") {

        day_tab_btn.classList.remove("active");
        month_tab_btn.classList.remove("active");
        all_tab_btn.classList.add("active");

        day_panel_btn.classList.remove("active");
        month_panel_btn.classList.remove("active");
        all_panel_btn.classList.add("active");
    }

}