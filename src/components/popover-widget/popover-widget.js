const { perfomance } = require('perf_hooks');

export default class Popover {
  constructor(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error('Container is not HTMLElement');
    }

    this.container = container;

    this._popovers = [];
  }

  _createPopoverElement(title, message) {
    const popoverElement = document.createElement('div');
    popoverElement.classList.add('popover');

    const popoverTitleElement = document.createElement('div');
    popoverTitleElement.classList.add('popover-title');
    popoverTitleElement.textContent = title;

    const popoverContentElement = document.createElement('div');
    popoverContentElement.classList.add('popover-content');
    popoverContentElement.textContent = message;
  }

  showPopover(title, message, element) {
    const popoverElement = this._createPopoverElement(title, message);

    const id = perfomance.now();

    this._popovers.push({
      id,
      element: popoverElement,
    });

    this.container.appendChild(popoverElement);

    const { left, top } = element.getBoundClientRect();

    popoverElement.style.left = `${left + 10}px`;
    popoverElement.style.bottom = `${top - 10}px`;

    return id;
  }

  removePopover(id) {
    const popover = this._popovers.find((p) => p.id === id);

    popover.element.remove();

    this._popovers = this._popovers.filter((p) => p.id !== id);
  }
}
