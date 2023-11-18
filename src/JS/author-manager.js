document.addEventListener("DOMContentLoaded", function () {
  // Mã của bạn ở đây
  const find_page = document.querySelector(".find_page");
  const next_page = document.querySelector(".next_page");
  const previous_page = document.querySelector(".previous_page");

  next_page.onclick = async function (event) {
    try {
      const requestOptions = {
        method: "GET",
      };
      const response = await fetch(
        `/api/api_get_novel?offset=${find_page.value}&n=3`,
        requestOptions
      );
      if (response.ok) {
        const data = await response.json();
        alert(data);
      } else {
        alert("Có lỗi xảy ra!");
      }
    } catch (error) {
      alert(error);
    }
  };
});
