import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formData = {};
const refs = {
  form: document.querySelector('.feedback-form'),
  inputEmail: document.querySelector('input[name="email"]'),
  inputText: document.querySelector('text[name="message"]'),
};

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);


getItems();

function onFormSubmit(el) {
  el.preventDefault();

  if (refs.inputEmail.value !== ''
    && refs.inputText.value !== '') {
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(formData);
    return;
  }
  alert('Всі поля треба заповнити');
}

function onFormInput() {
  formData.email = refs.inputEmail.value;
  formData.message = refs.inputText.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function getItems() {
  try {
    const saveItems = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saveItems) {
      refs.inputEmail.value = saveItems.email;
      refs.inputText.value = saveItems.message;
    }
  } catch (e) {
    console.log(e.name); // "SyntaxError"
  }
}

