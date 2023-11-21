document.addEventListener("DOMContentLoaded", function () {
  let accountElements = document.querySelectorAll(".block_account");
  let accountf5 = document.querySelectorAll(".block_account_f5 ");
  console.log(accountElements)
  if (accountElements) {
    for (const block_account of accountElements) {
      block_account.addEventListener("click", function (e) {
        e.preventDefault();
        console.log(block_account.parentElement.parentElement.getAttribute("id"));
        func_block_account(block_account,block_account.parentElement.parentElement.getAttribute("id"));
        
      });
    }
 }
  const func_block_account = async (element,id) => {
    const url = `${currentURL}/api/block_account`;
  
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
        element.parentElement.innerHTML = `
        <div class="block_account_f5 open">
        Mở khoá người dùng
      </div>
      <div class="author_btn last">
        Xoá quyền tác giả
      </div>
        `
        accountf5 = document.querySelectorAll(".block_account_f5 ");
        console.log(accountf5)
        for (const open_account of accountf5) {
          open_account.addEventListener("click", function (e) {
            e.preventDefault();
            console.log(open_account.parentElement.parentElement.getAttribute("id"));
            func_open_account(open_account,open_account.parentElement.parentElement.getAttribute("id"));
            
          });
        }
      } else {
        notify("x", response.statusText);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };


  console.log(accountf5)
  if (accountf5) {
    for (const open_account of accountf5) {
      open_account.addEventListener("click", function (e) {
        e.preventDefault();
        console.log(open_account.parentElement.parentElement.getAttribute("id"));
        func_open_account(open_account,open_account.parentElement.parentElement.getAttribute("id"));
        
      });
    }
  }
  const func_open_account = async (element,id) => {
    const url = `${currentURL}/api/open_account`;
  
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
        element.parentElement.innerHTML = `
        <div class="block_account ">
        Khoá người dùng
      </div>
      <div class="author_btn last">
        Xoá quyền tác giả
      </div>
        `
        accountElements = document.querySelectorAll(".block_account");
        for (const block_account of accountElements) {
          block_account.addEventListener("click", function (e) {
            e.preventDefault();
            console.log(block_account.parentElement.parentElement.getAttribute("id"));
            func_block_account(block_account,block_account.parentElement.parentElement.getAttribute("id"));
            
          });
        }
      } else {
        notify("x", response.statusText);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  
});


