AB = document.getElementById("addButton") ;
brands = [] ;

window.addEventListener("load", function() {
  init() ;
})

function init(){
  document.getElementById("addButton").addEventListener("click", function() {
    if(document.getElementById("my-input").value != "") {
      addWord(document.getElementById("my-input").value) ;
    }
  })
}

function addWord(word) {
  brands.push(word) ;
  document.getElementById("my-input").value = "" ;
  updateList() ;
}
function updateList() {
  var list = document.getElementById("list") ;

  //remove all child nodes
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  //rebuild all child nodes
  for (i = 0; i < brands.length; i++) {
    element = document.createElement("span") ;
    element.innerHTML = brands[i] + "<br>" ;
    element.setAttribute("id", "word" + i);
    list.appendChild(element) ;

    document.getElementById("word" + i).addEventListener("click", function() { removeWord(i); } ) ;
  }
}

function removeWord(int) {
  brands.splice(int,1) ;
  updateList() ;
  console.log("remove" + int) ;
}
