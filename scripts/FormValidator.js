export default class FormValidator {
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
  _isValideForBtn(){
    return this._inputList.some((inputElement) => {
      return (!inputElement.validity.valid);
    });
  }
  // изменение кнопки
  _toggleButtonState(){
    if(this._isValideForBtn()){
      this._buttonForm.classList.add(this._inactiveButtonClass);
      this._buttonForm.disabled = true;
    } else{
      this._buttonForm.classList.remove(this._inactiveButtonClass);
      this._buttonForm.disabled = false;
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
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => inputElement.addEventListener('input', () => {
      this._checkInputValidity(inputElement);
      this._toggleButtonState();
    }));
  }

  deleteErrors(){
    this._inputList.forEach((inputItem) => {
        this._hideInputError(inputItem);
    });
  }

  disabledBtn(){
    this._buttonForm.classList.add(this._inactiveButtonClass);
    this._buttonForm.disabled = true;
  }

  enableValidation (){
    this._setEventListeners();
  }
}
