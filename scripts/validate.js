const formElements = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error', //для input
  errorClass: 'popup__error_visible' //для span
};

//показать спан ошибки и подчерк красным инпут
const showInputError = (formElement, inputElement, errorMassage) =>{
  const errorElem = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(formElements.inputErrorClass);
  errorElem.textContent = errorMassage;
  errorElem.classList.add(formElements.errorClass);
};

//скрыть спан ошибки и убрать красным инпут
const hideInputError = (formElement, inputElement) => {
  const errorElem = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(formElements.inputErrorClass);
  errorElem.classList.remove(formElements.errorClass);
  errorElem.textContent = '';
};

//валидность для кнопки
const isValideForBtn = (inputList) => {
  return inputList.some((inputItem) => {
    return (!inputItem.validity.valid);
  });
};

// изменение кнопки
const toggleButtonState = (inputList, buttonSelector) => {
  if(isValideForBtn(inputList)){
    buttonSelector.classList.add(formElements.inactiveButtonClass);
    buttonSelector.setAttribute('disabled', '');
  }else{
    buttonSelector.classList.remove(formElements.inactiveButtonClass);
    buttonSelector.removeAttribute('disabled');
  }
};

// валидность инпут
const checkInputValidity = (formElement, inputElement) => {
  if(!inputElement.validity.valid){
    showInputError(formElement, inputElement, inputElement.validationMessage);
  }else{
    hideInputError(formElement, inputElement);
  }
};

const addDesableBtn = (formElements, popup) => {
  const button = popup.querySelector(formElements.submitButtonSelector);
  button.setAttribute('disabled', '');
  button.classList.add(formElements.inactiveButtonClass);
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(formElements.inputSelector));
  const buttonElement = formElement.querySelector(formElements.submitButtonSelector);
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = (formElements) => {
  const formList = Array.from(document.querySelectorAll(formElements.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (event)=>{
      event.preventDefault();
    });
    setEventListeners(formElement);
  });
};

enableValidation(formElements);
