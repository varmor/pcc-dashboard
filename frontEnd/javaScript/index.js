var listContainer = document.getElementById("activeMenu");

var lists = listContainer.getElementsByClassName("list");

for (var i = 0; i < lists.length; i++) {
  lists[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}