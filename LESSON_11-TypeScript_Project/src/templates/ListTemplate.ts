import FullList from '../model/FullList';

interface DOMList {
  ul: HTMLUListElement;
  clear(): void;
  render(fullList: FullList): void;
}

export default class ListTemplate implements DOMList {
  static instance: ListTemplate = new ListTemplate();
  ul: HTMLUListElement;
  private constructor() {
    this.ul = document.querySelector('#listItems')!;
  }

  clear(): void {
    this.ul.innerHTML = '';
  }
  render(fullList: FullList): void {
    this.clear();
    fullList.list.forEach((item) => {
      const li: HTMLLIElement = document.createElement('li') as HTMLLIElement;
      li.classList.add('item');

      const input: HTMLInputElement = document.createElement(
        'input'
      ) as HTMLInputElement;
      input.type = 'checkbox';
      input.setAttribute('id', item.id);
      input.checked = item.checked;
      input.addEventListener('change', () => {
        item.checked = !item.checked;
      });
      li.appendChild(input);

      const label: HTMLLabelElement = document.createElement(
        'label'
      ) as HTMLLabelElement;
      label.htmlFor = item.id;
      label.textContent = item.item;
      li.appendChild(label);

      const button: HTMLButtonElement = document.createElement(
        'button'
      ) as HTMLButtonElement;
      button.classList.add('button');
      button.textContent = 'X';
      button.addEventListener('click', () => {
        fullList.removeItem(item.id);
        this.render(fullList);
      });
      li.appendChild(button);
      this.ul.appendChild(li);
    });
  }
}
