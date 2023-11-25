document.addEventListener("DOMContentLoaded", function () {
  let accountElements = document.querySelectorAll(".block_account");
  let accountf5 = document.querySelectorAll(".block_account_f5 ");
  let authorf5 = document.querySelectorAll(".author_btn_f5");
  let author = document.querySelectorAll(".author_btn");

  if (accountElements) {
    for (const block_account of accountElements) {
      block_account.addEventListener("click", function (e) {
        e.preventDefault();
        console.log(
          block_account.parentElement.parentElement.getAttribute("id")
        );
        func_block_account(
          block_account,
          block_account.parentElement.parentElement.getAttribute("id")
        );
      });
    }
  }
  const func_block_account = async (element, id) => {
    const url = `/api/block_account`;

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    };

    try {
      const response = await fetch(url, requestOptions);

      if (response.status === 200) {
        const data = await response.json();
        notify("n", "Thay đổi thông tin thành công!");
        element.classList.add("block");
        element.parentElement.children[0].classList.remove("block");
        console.log(data.role[0].last_role);
        element.parentElement.children[3].classList.remove("last");
        element.parentElement.children[2].classList.remove("last");

        if (data.role[0].last_role == 1) {
          element.parentElement.children[3].classList.add("last");
        } else if (data.role[0].last_role == 2) {
          element.parentElement.children[2].classList.add("last");
        }
      } else {
        notify("x", response.statusText);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  if (accountf5) {
    for (const open_account of accountf5) {
      open_account.addEventListener("click", function (e) {
        e.preventDefault();
        console.log(
          open_account.parentElement.parentElement.getAttribute("id")
        );
        func_open_account(
          open_account,
          open_account.parentElement.parentElement.getAttribute("id")
        );
      });
    }
  }
  const func_open_account = async (element, id) => {
    const url = `/api/open_account`;

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    };

    try {
      const response = await fetch(url, requestOptions);

      if (response.status === 200) {
        const data = await response.json();
        console.log(data.role[0].role);
        notify("n", "Thay đổi thông tin thành công!");

        element.classList.add("block");
        element.parentElement.children[1].classList.remove("block");
        element.parentElement.children[3].classList.remove("last");
        element.parentElement.children[2].classList.remove("last");
      } else {
        notify("x", response.statusText);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  if (author) {
    for (const open_account of author) {
      open_account.addEventListener("click", function (e) {
        e.preventDefault();
        console.log(
          open_account.parentElement.parentElement.getAttribute("id")
        );
        func_block_author(
          open_account,
          open_account.parentElement.parentElement.getAttribute("id")
        );
      });
    }
  }
  const func_block_author = async (element, id) => {
    const url = `/api/block_author`;

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    };

    try {
      const response = await fetch(url, requestOptions);

      if (response.status === 200) {
        const data = await response.json();
        notify("n", "Thay đổi thông tin thành công!");

        element.classList.add("block");
        element.parentElement.children[3].classList.remove("block");
      } else {
        notify("x", response.statusText);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  if (authorf5) {
    for (const open_account of authorf5) {
      open_account.addEventListener("click", function (e) {
        e.preventDefault();
        console.log(
          open_account.parentElement.parentElement.getAttribute("id")
        );
        func_open_author(
          open_account,
          open_account.parentElement.parentElement.getAttribute("id")
        );
      });
    }
  }
  const func_open_author = async (element, id) => {
    const url = `/api/open_author`;

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    };

    try {
      const response = await fetch(url, requestOptions);

      if (response.status === 200) {
        const data = await response.json();
        notify("n", "Thay đổi thông tin thành công!");

        element.classList.add("block");
        element.parentElement.children[2].classList.remove("block");
      } else {
        notify("x", response.statusText);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };
});
