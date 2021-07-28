function addToDo() {
  const t1 = document.getElementById("t1")
  const d1 = document.getElementById("ParentDiv")
  const newDiv = document.createElement("div")
  let newP = document.createElement("p")
  newP.textContent = t1.value
  let newButton = document.createElement("input")
  newButton.type = "button"
  newButton.value = "REMOVE"
  newButton.addEventListener("click", function(){newDiv.remove()})
  
  newDiv.appendChild(newP)
  newDiv.appendChild(newButton)

  d1.appendChild(newDiv)
}

const b1 = document.getElementById("b1")
b1.addEventListener("click", addToDo)

