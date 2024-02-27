import './popover-widget.css';

export default class PopoverWidget {
  constructor() {
    this.popovers = [];
  }

  createPopoverElement(title, message) {
    const popoverElement = document.createElement('div');
    popoverElement.classList.add('popover');

    const popoverTitleElement = document.createElement('div');
    popoverTitleElement.classList.add('popover-title');
    popoverTitleElement.textContent = title;

    const popoverContentElement = document.createElement('div');
    popoverContentElement.classList.add('popover-content');
    popoverContentElement.textContent = message;

    popoverElement.appendChild(popoverTitleElement);
    popoverElement.appendChild(popoverContentElement);

    return popoverElement;
  }

  showPopover(title, message, element) {
    const popoverElement = this.createPopoverElement(title, message);

    const id = Date.now();

    this.popovers.push({
      id,
      element: popoverElement,
    });

    document.body.appendChild(popoverElement);

    const { left, top } = element.getBoundingClientRect();

    popoverElement.style.left = `${left + element.offsetWidth / 2 - popoverElement.offsetWidth / 2}px`;
    popoverElement.style.top = `${top - popoverElement.offsetHeight - 20}px`;

    return id;
  }

  removePopover(id) {
    const popover = this.popovers.find((p) => p.id === id);

    popover.element.remove();

    this.popovers = this.popovers.filter((p) => p.id !== id);
  }
}
