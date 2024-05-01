import styles from './style.module.scss';
import $app from '../../assets/utils/app';
import TodoService from '../../services/TodoService';

class InputText {
  name;
  placeholder;
  $inputWrapper = null;
  value = ''
  todoService = new TodoService();

  constructor ({ name, placeholder }) {
    this.placeholder = placeholder;
    this.name = name;
  
    this.buildInputWrapper();
  }

  get inputWrapper() {
    return this.$inputWrapper;
  }

  buildInputText = () => {
    const $inputText = document.createElement('input');

    $inputText.className = styles['input_line'];

    $inputText.setAttribute('name', `${this.name}`);
    $inputText.setAttribute('value', `${this.value}`);
    $inputText.setAttribute('id', `id-${this.name}`);
    $inputText.setAttribute('type', 'text');
    $inputText.setAttribute('placeholder', `${this.placeholder}`);

    $inputText.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        this.todoService.addTask($inputText.value);
        $inputText.value = '';
      }
    });

    return $inputText;
  }

  buildInputWrapper = () => {
    const $inputWrapper = document.createElement('div');
    $inputWrapper.className = styles['input_line__wrapper'];

    const $imgPlus = document.createElement('img');
    $imgPlus.className = styles['input_line__img_plus'];

    $imgPlus.setAttribute('src', "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' id='icon-plus' viewBox='0 0 32 32'%3E%3Cpath d='M31 12h-11v-11c0-0.552-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1v11h-11c-0.552 0-1 0.448-1 1v6c0 0.552 0.448 1 1 1h11v11c0 0.552 0.448 1 1 1h6c0.552 0 1-0.448 1-1v-11h11c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1z'%3E%3C/path%3E%3C/svg%3E")

    $inputWrapper.appendChild($imgPlus);
    $inputWrapper.appendChild(this.buildInputText());

    this.$inputWrapper = $inputWrapper;
  }
}

export default InputText;
