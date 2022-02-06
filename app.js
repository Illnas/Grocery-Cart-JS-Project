let main = document.getElementById("main");
let priceNumber = document.querySelectorAll(".priceNumber");
let itemContainer = document.getElementsByClassName("item-container")[0];
let dropdownContent = document.getElementById("dropdown-content");
let numberOfItems = document.getElementById("numberOfItems")
let header = document.getElementById("header")
let shoppingCart = document.getElementsByClassName("shopping-cart")[0]
let icon = document.getElementById("icon")

//On page load, to assign random rumbers as a price
window.onload = () => {
  function callingRandom() {
    let rng = Math.floor(Math.random() * 99);
    return rng;
  }

  [...priceNumber].map((e) => (e.innerText = `${callingRandom()}$`));
  console.log(priceNumber);
};

main.onclick = (e) => {
  let target = e.target.dataset.action;
  //parentNode
  let createdDiv = document.createElement("div");
  createdDiv.classList.add("item");
  //childrenNodes
  let createdPara = document.createElement("p");
  createdPara.classList.add("price");
  let createThirdTitle = document.createElement("h3");
  let createdSpan = document.createElement("span");
  createdSpan.classList.add("material-icons");
  createdSpan.setAttribute("data-action", "remove");
  createdSpan.innerText = "close";

  //appending children to parentNode
  createdDiv.appendChild(createThirdTitle);
  createdDiv.appendChild(createdPara);
  createdDiv.appendChild(createdSpan);

  if (target === "add") {
    //adding values to children nodes
    createdPara.innerText = `${e.target.parentNode.children[3].children[1].innerHTML}`;
    createThirdTitle.innerText = `${e.target.parentNode.children[0].innerHTML}`;
    //appending
    itemContainer.append(createdDiv);
    //settingNumber of items
    numberOfItems.innerText = `${itemContainer.children.length}`
  }
};

dropdownContent.onclick = (e) => {
  let target = e.target.dataset.action;
  let containerLength = itemContainer.children.length

  if(target === "remove") {
      e.target.parentNode.remove()
      //settingNumber of items
      numberOfItems.innerText = `${containerLength - 1}`
  }

  if(target === "clear") {
      console.log(e.target.previousElementSibling.children)
      itemContainer.innerHTML = ""
      numberOfItems.innerText = "0"
  }
};


//Ontouch events

icon.ontouchstart = (e) => {
  e.preventDefault()
  dropdownContent.classList.toggle("dropdown-toggle")
}

dropdownContent.ontouchstart = (e) => {
  e.preventDefault();
  let target = e.target.dataset.action;
  let containerLength = itemContainer.children.length

  if(target === "remove") {
      e.target.parentNode.remove()
      //settingNumber of items
      numberOfItems.innerText = `${containerLength - 1}`
  }

  if(target === "clear") {
      console.log(e.target.previousElementSibling.children)
      itemContainer.innerHTML = ""
      numberOfItems.innerText = "0"
  }
}



