class Button {
  constructor({ text, handleClick, icon }) {
    this.text = text;
    this.handleClick = handleClick;
    this.icon = icon;
  }

  buildButton = () => {
    const $button = document.createElement('button');
    $button.className = styles['button__tab_button'];

    const $buttonText = document.createElement('span');
    $buttonText.className = styles['button__text'];

    $buttonText.innerText = this.text;

    $buttonText.addEventListener('click', this.handleClick)

    $button.appendChild(icon);
    $button.appendChild($buttonText);

    return $button;
  }
}

export default Button;