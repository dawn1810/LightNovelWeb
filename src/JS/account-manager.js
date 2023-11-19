




document.addEventListener("DOMContentLoaded", function () {
    const accountElements = document.querySelectorAll('.account');
    for (const accountElement of accountElements) {
      const block_account = accountElement.querySelector('.block_account');
      const author_btn = accountElement.querySelector('.author_btn');
  
        block_account.addEventListener('click', function (e) {
          e.preventDefault();
          func_block_account(accountElement.getAttribute('id'));
          console.log('ahhahaah')
      });
    }
  
    
  });
 
const func_block_account = async (id) => {
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
    
    } else {
      alert("Có lỗi xảy ra: " + response.statusText);
    }
  } catch (error) {
    console.log("Error:", error);
  }
}