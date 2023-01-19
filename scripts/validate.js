export default class Validate {
  constructor(dataForm, formElement){
    this._inputSelector = dataForm.inputSelector; //'.popup__input'
    this._submitButtonSelector = dataForm.submitButtonSelector; //'.popup__button'
    this._inactiveButtonClass = dataForm.inactiveButtonClass; //'popup__button_disabled'
    this._inputErrorClass = dataForm.inputErrorClass; //для input
    this._errorClass = dataForm.errorClass; //для span

    this._formElement = formElement; // для определения какой попап формы

    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector)); //все инпуты в нужной форме
    this._buttonForm = this._formElement.querySelector(this._submitButtonSelector); //кнопка в нужной форме
  }

  //показать спан ошибки и подчерк красным инпут
  _showInputError(inputElement, errorMassage){ // принимает инпут с ошибкой и текст, котрый нужно показать
    const errorElem = this._formElement.querySelector(`.${inputElement.id}-error`); //находим спан, который относится к инпуту по id в нужной форме
    errorElem.textContent = errorMassage; // прописываем спану ошибку из инпут
    inputElement.classList.add(this._inputErrorClass); //добавляем класс ошибки к инпут
    errorElem.classList.add(this._errorClass); // показываем спан ошибки
  }

  //скрыть спан ошибки и убрать красным инпут
  _hideInputError (inputElement){
    const errorElem = this._formElement.querySelector(`.${inputElement.id}-error`); //находим спан, который относится к инпуту по id в нужной форме
    errorElem.textContent = ''; // очищаем спан с ошибкой
    inputElement.classList.remove(this._inputErrorClass); //удаляем класс ошибки к инпут
    errorElem.classList.remove(this._errorClass); // скрываем спан ошибки
  }

  //валидность для кнопки
  _isValideForBtn(inputList){
    return inputList.some((inputElement) => {
      return (!inputElement.validity.valid);
    });
  }
  // изменение кнопки
  _toggleButtonState(inputList){
    if(this._isValideForBtn(inputList)){
      this._buttonForm.classList.add(this._inactiveButtonClass);
    } else{
      this._buttonForm.classList.remove(this._inactiveButtonClass);
    }
  }

  // валидность инпут
  _checkInputValidity(inputElement){
    if(!inputElement.validity.valid){
      this._showInputError(inputElement, inputElement.validationMessage);
    }else{
      this._hideInputError(inputElement);
    }
  }

  _setEventListeners(){
    this._toggleButtonState(this._inputList);
    this._inputList.forEach((inputElement) => inputElement.addEventListener('input', () => {
      this._checkInputValidity(inputElement);
      this._toggleButtonState(this._inputList);
    }));
  }

  deleteErrors(){
    this._inputList.forEach((inputItem) => {
        console.log(inputItem);
        inputItem.value = '';
        this._hideInputError(inputItem);
    });
  }

  disabledBtn(){
    this._buttonForm.classList.add(this._inactiveButtonClass);
  }

  enableValidation (){
    this._setEventListeners();
  }
}
































// //показать спан ошибки и подчерк красным инпут
// const showInputError = (formElement, inputElement, errorMassage) =>{
//   const errorElem = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.add(formElements.inputErrorClass);
//   errorElem.textContent = errorMassage;
//   errorElem.classList.add(formElements.errorClass);
// };

// //скрыть спан ошибки и убрать красным инпут
// const hideInputError = (formElement, inputElement) => {
//   const errorElem = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.remove(formElements.inputErrorClass);
//   errorElem.classList.remove(formElements.errorClass);
//   errorElem.textContent = '';
// };

// //валидность для кнопки
// const isValideForBtn = (inputList) => {
//   return inputList.some((inputItem) => {
//     return (!inputItem.validity.valid);
//   });
// };

// // изменение кнопки
// const toggleButtonState = (inputList, buttonSelector) => {
//   if(isValideForBtn(inputList)){
//     buttonSelector.classList.add(formElements.inactiveButtonClass);
//   } else{
//     buttonSelector.classList.remove(formElements.inactiveButtonClass);
//   }
// };

// // валидность инпут
// const checkInputValidity = (formElement, inputElement) => {
//   if(!inputElement.validity.valid){
//     showInputError(formElement, inputElement, inputElement.validationMessage);
//   }else{
//     hideInputError(formElement, inputElement);
//   }
// };

// const setEventListeners = (formElement) => {
//   const inputList = Array.from(formElement.querySelectorAll(formElements.inputSelector));
//   const buttonElement = formElement.querySelector(formElements.submitButtonSelector);
//   toggleButtonState(inputList, buttonElement);
//   inputList.forEach((inputElement) => inputElement.addEventListener('input', () => {
//     checkInputValidity(formElement, inputElement);
//     toggleButtonState(inputList, buttonElement);
//   }));
// };

// const enableValidation = (formElements) => {
//   const formList = Array.from(document.querySelectorAll(formElements.formSelector));
//   formList.forEach((formElement) => {
//     formElement.addEventListener('submit', (event)=>{
//       event.preventDefault();
//     });
//     setEventListeners(formElement);
//   });
// };

// enableValidation(formElements);
