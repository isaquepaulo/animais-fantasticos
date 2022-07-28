import outsideClick from "./outsideclick.js";

export default function initDropDownMenu() {}
const dropDownMenus = document.querySelectorAll("[data-dropdown]");
function handleClick(event) {
  event.preventDefault();
  this.classList.add("active");
  outsideClick(this, ["touthstart", "click"], () => {
    this.classList.remove("active");
  });
}
dropDownMenus.forEach((menu) => {
  ["touthstart", "click"].forEach((userEvent) => {
    menu.addEventListener(userEvent, handleClick);
  });
});
