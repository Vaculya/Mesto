import Popup from "./Popup.js";

export default class PopupWithForm extends Popup{
  constructor(popupSelector, {submitForm}){
    super(popupSelector);
    this._submitForm = submitForm;        //колбэк-функция сабмита формы
    this._form = this._popupSelector.querySelector('.popup__form');  //форма внутри попапа
  }

  _getInputValues(){      //получение значений инпута
    this._formInputs = Array.from(this._form.querySelectorAll('.popup__input'));  //все инпут в массив
    this._formValues = {};
    this._formInputs.forEach(input => {       //запись значений инпут в объект this._formValues
      this._formValues[input.name] = input.value;
    });
    console.log(this._formValues);
    return this._formValues;
  }

  close(){              //закртие со сбросом формы
    super.close();
    this._form.reset();
  }

  open(){
    super.open();
  }

  setEventListeners(){
    super.setEventListeners();
    this._form.addEventListener('submit', (event) => {      //при сабмит
      event.preventDefault();                               // сброс
      this._submitForm(this._getInputValues());             // колбэк-функция сабмита формы с объектом this._formValues
      this.close();
    });
  }
}




























// export default class PopupWithForm extends Popup{
//   constructor(popupSelector, {callbackFormSubmit}){
//     super(popupSelector);
//     this._callbackFormSubmit = callbackFormSubmit;

//     this._form = this._popupSelector.querySelector('.popup__form');

//   }

//   //Запись занчений с формы
//   _getInputValues(){

//     this._inputs = Array.from(this._form.querySelectorAll('.popup__input'));


//     this._formValues = {};

//     this._inputs.forEach(input => {
//       this._formValues[input.name] = input.value;
//     });
//     console.log(this._formValues);
//     return this._formValues;
//   }


//   close() {
//     super.close();
//     this._form.reset();
//   }

//   setEventListeners(){
//     super.setEventListeners();
//     this._form.addEventListener('submit', (event) => {
//       event.preventDefault();
//       this._callbackFormSubmit(this._getInputValues());
//       this.close();
//       this._form.reset();
//     });
//   }
// }
