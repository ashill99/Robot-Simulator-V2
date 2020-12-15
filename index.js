document.addEventListener("DOMContentLoaded", function() {
  // initializes the board
  init();

  // ADD CODE HERE!
  document.addEventListener("DOMContentLoaded", function() {
    // initializes the board
    init();
  
    // ADD CODE HERE!
  });
  let moveContainer = document.querySelector("ul#moves-container")
  
  document.addEventListener("keydown", e => {
    let key = e.target
    let keyKey = e.key 
    if (keyKey === "a") {
      let newMove = document.createElement("li")
      newMove.textContent = "Left"
      moveContainer.append(newMove)
    // console.log("You pressed left")
  }
    if (keyKey === "w") {
      let newMove = document.createElement("li")
      newMove.textContent = "Up"
      moveContainer.append(newMove)
    }
    if (keyKey === "s") {
      let newMove = document.createElement("li")
      newMove.textContent = "Down"
      moveContainer.append(newMove)
    }
    if (keyKey === "d") {
      let newMove = document.createElement("li")
      newMove.textContent = "Right"
      moveContainer.append(newMove)
    }
  })
  
  let movesList = document.querySelectorAll("li")
  let movesArray = []
  movesArray.push(movesList)
  let moveButton = document.querySelector("button#move-button")
  
  moveButton.addEventListener("click", function(evt) {
    let firstMove = moveContainer.querySelector("li")
    
    if (firstMove.textContent === "Right") {
      move("right")
      firstMove.remove()
    } 
    if (firstMove.textContent === "Left") {
      move("left")
      firstMove.remove()
    } 
    if (firstMove.textContent === "Up") {
      move("up")
      firstMove.remove()
    }
   if (firstMove.textContent === "Down") {
     move("down")
     firstMove.remove()
   }
   else 
   return "There are no moves"
  }) 
  
  // let allMoves = moveContainer.querySelectorAll("li")
  
  moveContainer.addEventListener("click", e => {
    if (e.target.matches('li')) {
      let li = event.target.closest('li')
      li.remove()
    }
  })
  
  // allMoves.addEventListener("click", e => {
  // console.log("Click")
  // })
