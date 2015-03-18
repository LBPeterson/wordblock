
function addWord() {
  var string = document.getElementById("my-input").value;
  document.getElementById("my-input").value = "";
  brands[brands.length] = string;
  console.log(brands);
  updateList();
}
function updateList() {
  var text;
  for (i = 0; i < brands.length; i++) {
    text += "<br><span onclick='removeWord(" + i + ")'>" + brands[i] + "</span>";
  }
  document.getElementById("list").innerHTML = text;
}

function removeWord(int) {
  brands.splice(int,1);
  console.log(brands);
  updateList();
}
