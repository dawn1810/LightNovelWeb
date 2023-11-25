document.addEventListener("DOMContentLoaded", function () {
  let accountElements = document.querySelectorAll(".block_account");
  let accountf5 = document.querySelectorAll(".block_account_f5 ");
  let authorf5 = document.querySelectorAll(".author_btn_f5");
  let author = document.querySelectorAll(".author_btn");

 

  const author_open_func = () => {
    authorf5 = document.querySelectorAll(".author_btn_f5");
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
  };

  const author_block_func = () => {
    author = document.querySelectorAll(".author_btn");
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
  };

  const account_block_func = () => {
  const accountElements = document.querySelectorAll(".block_account");
  if (accountElements) {
    for (const block_account of accountElements) {
      block_account.addEventListener("click", function (e) {
        e.preventDefault();
        console.log(block_account.parentElement.parentElement.getAttribute("id"));
        func_block_account(block_account, block_account.parentElement.parentElement.getAttribute("id"));
      });
    }
  }
};

const account_open_func = () => {
  const accountf5 = document.querySelectorAll(".block_account_f5");
  if (accountf5) {
    for (const open_account of accountf5) {
      open_account.addEventListener("click", function (e) {
        e.preventDefault();
        console.log(open_account.parentElement.parentElement.getAttribute("id"));
        func_open_account(open_account, open_account.parentElement.parentElement.getAttribute("id"));
      });
    }
  }
};

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
      element.classList.remove("block_account");
      element.classList.add("block_account_f5");
      element.innerHTML = "Mở khoá người dùng";
      element.parentElement.children[1].classList.add("last");
      element.parentElement.children[1].style.pointerEvents = "none";
    } else {
      notify("x", response.statusText);
    }
  } catch (error) {
    console.log("Error:", error);
  }

  account_block_func();
  account_open_func();
};

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

      element.classList.remove("block_account_f5");
      element.classList.add("block_account");
      element.innerHTML = "Khoá người dùng";
      element.parentElement.children[1].classList.remove("last");
      element.parentElement.children[1].style.pointerEvents = "auto";
    } else {
      notify("x", response.statusText);
    }
  } catch (error) {
    console.log("Error:", error);
  }

  account_block_func();
  account_open_func();
};

account_block_func();
account_open_func();

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

        element.classList.remove("author_btn");
        element.classList.add("author_btn_f5");
        element.innerHTML = "Thêm quyền tác giả";

        // author_block_func();
        author_open_func();
        // account_block_func();
        // account_open_func();
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

        element.classList.remove("author_btn_f5");
        element.classList.add("author_btn");
        element.innerHTML = "Xoá quyền tác giả";

        // author_open_func();
        author_block_func();
        // account_block_func();
        // account_open_func();
      } else {
        notify("x", response.statusText);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };
});
