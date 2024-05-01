import './main.scss';
import $app from './src/assets/utils/app';
import Button from './src/elements/Button/Button';
import InputText from './src/elements/InputText/InputText';
import InputCheckbox from './src/elements/checkbox/InputCheckbox';

import TodoService from './src/services/TodoService';

const todoService = new TodoService();

const $newTaskInput = new InputText ({
  name: 'newTaskInput',
  placeholder: 'Create a new todo...'
}).inputWrapper;

const $todoCheckbox = new InputCheckbox ({
  value: 'To clean a bathroom',
  id: 'one',
  isActive: true,
  isCompleted: false
}).checkboxWrapper;

$app.appendChild($newTaskInput);
$app.appendChild($todoCheckbox);
