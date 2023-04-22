import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formData = {};
const refs = {
  form: document.querySelector('.feedback-form'),
  inputEmail: document.querySelector('input[name="email"]'),
  inputTextarea: document.querySelector('textarea[name="message"]'),
};


refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

getItems();

function onFormSubmit(el) {
  el.preventDefault();

  if (refs.inputEmail.value !== null
    && refs.inputTextarea.value !== null) {
    el.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(formData);
    return;
  }
  alert('Всі поля треба заповнити');
}

function onFormInput() {
  formData.email = refs.inputEmail.value;
  formData.message = refs.inputTextarea.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function getItems() {
  try {
    const saveItems = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saveItems) {
      refs.inputEmail.value = saveItems.email;
      refs.inputTextarea.value = saveItems.message;
    }
  } catch (el) {
    console.log(el.name); 
  }
}



