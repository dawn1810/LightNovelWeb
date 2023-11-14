document.addEventListener("DOMContentLoaded", function () {
    // Get the player element
  
    setTimeout(console.clear.bind(console));
    setTimeout(() => {
      console.log("%cTắt f12 đi bạn nho!!!", "color:red;font-family:system-ui;font-size:100px");
    }, 200);
    let player = document.querySelector(".player");
    let gameContainer = document.querySelector(".gameContainer");
  
    // store container variable
    let containerRect = gameContainer.getBoundingClientRect();
    let containerLeft = containerRect.left;
    let containerTop = containerRect.top;
    let containerWidth = containerRect.width;
    let containerHeight = containerRect.height;
  
    // Store current player position
    let playerX = 0;
    let playerY = 0;
    var playerSpeed = 5;
  
    // Keyboard event listeners
    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);
  
    // Variables to track key states
    let leftPressed = false;
    let rightPressed = false;
    let upPressed = false;
    let downPressed = false;
  
    // Functions to handle key events
    function keyDownHandler(event) {
      if (event.key === "ArrowUp" || event.key === "w") {
        upPressed = true;
      } else if (event.key === "ArrowDown" || event.key === "s") {
        downPressed = true;
      } else if (event.key === "ArrowLeft" || event.key === "a") {
        // flip player
        player.classList.add("player_flipH");
        leftPressed = true;
      } else if (event.key === "ArrowRight" || event.key === "d") {
        // unflip player
        player.classList.remove("player_flipH");
        rightPressed = true;
      }
    }
  
    function keyUpHandler(event) {
      if (event.key === "ArrowUp" || event.key === "w") {
        upPressed = false;
      } else if (event.key === "ArrowDown" || event.key === "s") {
        downPressed = false;
      } else if (event.key === "ArrowLeft" || event.key === "a") {
        leftPressed = false;
      } else if (event.key === "ArrowRight" || event.key === "d") {
        rightPressed = false;
      }
    }
  
    // Function to update player position
    function updateGame() {
      // Update player position based on input
      if (leftPressed && playerX > 0) {
        playerX -= playerSpeed;
      }
      if (rightPressed && playerX + player.offsetWidth < containerWidth) {
        playerX += playerSpeed;
      }
      if (upPressed && playerY > 0) {
        playerY -= playerSpeed;
      }
      if (downPressed && playerY + player.offsetHeight < containerHeight) {
        playerY += playerSpeed;
      }
    }
  
    // Function to update player position
    function updatePlayerPosition() {
      player.style.left = containerLeft + playerX + "px";
      player.style.top = containerTop + playerY + "px";
    }
  
    // Game loop
    function gameLoop() {
      // Update game logic
      updateGame();
      updatePlayerPosition();
  
      // Call the game loop again
      requestAnimationFrame(gameLoop);
    }
  
    // Event listener for window resize (keep player position not mess up)
    window.addEventListener("resize", function () {
      containerRect = gameContainer.getBoundingClientRect();
      containerLeft = containerRect.left;
      containerTop = containerRect.top;
      updatePlayerPosition();
    });
  
    // Start the game loop
    gameLoop();
  });