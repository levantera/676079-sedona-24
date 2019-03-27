
var link = document.querySelector(".searching");
var popup = document.querySelector(".search-info");

var popup_class_popup = "search-info-show";

if (link){
  link.addEventListener("click", function (evt) {
    evt.preventDefault();

    if (popup.classList.contains(popup_class_popup)) {
      popup.classList.remove(popup_class_popup);
    } else {
      popup.classList.add(popup_class_popup);
    }
  });
}
