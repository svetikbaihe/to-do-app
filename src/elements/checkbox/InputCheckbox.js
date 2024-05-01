import styles from './style.module.scss';

class InputCheckbox {
  $checkboxWrapper = null;
  value = '';
  id = '';
  isCompleted = false;
  isActive = true;

  constructor ({ id, isCompleted, isActive, value }) {
    this.value = value;
    this.id = id;
    this.isCompleted = isCompleted;
    this.isActive = isActive;

    this.buildInputCheckbox();
  }

  get checkboxWrapper() {
    return this.$checkboxWrapper;
  }

  buildInputCheckbox = () => {
    const $checkboxWrapper = document.createElement('div');
    $checkboxWrapper.className = styles['checkbox__wrapper'];

      const $inputCheckbox = document.createElement('input');
      $inputCheckbox.className = styles['checkbox__todo_task']; 

      $inputCheckbox.setAttribute('name', 'task');
      $inputCheckbox.setAttribute('id', `id-${this.id}`);
      $inputCheckbox.setAttribute('type', 'checkbox');
      $inputCheckbox.setAttribute('value', this.value);

      const $checkImage = document.createElement('img');
      $checkImage.className = styles['checkbox__check-img'];

      $checkImage.setAttribute('src', "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23000000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3C/svg%3E");

      $inputCheckbox.addEventListener('change', function (e) {
        console.log(e.target.checked);

        if (e.target.checked) {
          $checkImage.setAttribute('src', "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23000000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M22 11.08V12a10 10 0 1 1-5.93-9.14'%3E%3C/path%3E%3Cpolyline points='22 4 12 14.01 9 11.01'%3E%3C/polyline%3E%3C/svg%3E");
        } else {
          $checkImage.setAttribute('src', "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23000000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3C/svg%3E");
        }
      })

      const $checkboxLabel = document.createElement('label');
      $checkboxLabel.className = styles['checkbox__label'];

      const $labelText = document.createElement('span');
      $labelText.className = styles['checkbox__span'];
      $labelText.innerText = this.value;

      $checkboxLabel.setAttribute('for', `id-${this.id}`);
      $checkboxLabel.appendChild($checkImage);
      $checkboxLabel.appendChild($labelText);
      
      $checkboxWrapper.appendChild($inputCheckbox);
      $checkboxWrapper.appendChild($checkboxLabel);
    
    this.$checkboxWrapper = $checkboxWrapper;
  }
}

export default InputCheckbox;