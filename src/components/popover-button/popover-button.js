import './popover-button.css';

import PopoverWidget from '../popover-widget/popover-widget';

const popover = new PopoverWidget();

export default class PopoverButton {

  constructor(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error('Container is not HTMLElement');
    }

    this.container = container;
    this.activePopover = null;

    this.showButton();
  }

  showButton() {
    const popoverButtonElement = document.createElement('button');
    popoverButtonElement.classList.add('popover-button');
    popoverButtonElement.textContent = 'Click to toggle popover';

    popoverButtonElement.addEventListener('click', this.btnOnClick);
    popoverButtonElement.addEventListener('blur', this.btnOnBlur);
    this.container.appendChild(popoverButtonElement);

  }

  btnOnClick(e) {
    e.preventDefault();

    if (this.activePopover) {
      return;
    }

    const title = 'Popover title';
    const content = 'And here`s some amazing content. It`s very engaging. Right?';

    console.log(e.target);

    this.activePopover = popover.showPopover(title, content, e.target);
  }

  btnOnBlur() {
    popover.removePopover(this.activePopover);
    this.activePopover = null;
  }
}
