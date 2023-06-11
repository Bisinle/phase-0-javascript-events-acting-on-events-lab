// Your code here
const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";
dodger.style.bottom = "0px";
dodger.style.right = "400px";

// document.addEventListener("keydown", function (event) {
//   console.log(event);
// });


function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 20}px`;
    }
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });




  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left + 20}px`;
    }
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });


  function moveDodgerUp() {
    const leftNumbers = dodger.style.bottom.replace("px", "");
    const bottom = parseInt(leftNumbers, 10);
  
    if (bottom >= 0) {
      dodger.style.bottom = `${bottom + 20}px`;
    }
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowUp") {
      moveDodgerUp();
    }
  });

  function moveDodgerDown() {
    const leftNumbers = dodger.style.bottom.replace("px", "");
    const bottom = parseInt(leftNumbers, 10);
  
    if (bottom > 0) {
      dodger.style.bottom = `${bottom - 20}px`;
    }
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowDown") {
      moveDodgerDown();
    }
  });





