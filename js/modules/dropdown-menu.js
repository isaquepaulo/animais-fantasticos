import outsideClick from "./outsideclick.js";

export default class DropdownMenu {
  constructor(dropDownMenus, event) {
    this.dropDownMenus = document.querySelectorAll(dropDownMenus);

    if (event === undefined) {
      this.event = ["touthstart", "click"];
    } else {
      this.event = event;
    }

    this.activeClass = "active";
    this.activeDropDownMenu = this.activeDropDownMenu.bind(this);
  }

  activeDropDownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.add(this.activeClass);
    outsideClick(element, this.event, () => {
      element.classList.remove("active");
    });
  }

  addDropdownMenusEvent() {
    this.dropDownMenus.forEach((menu) => {
      this.event.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropDownMenu);
      });
    });
  }

  init() {
    if (this.dropDownMenus.length) {
      this.addDropdownMenusEvent();
    }
    return this;
  }
}
