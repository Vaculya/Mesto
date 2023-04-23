export default class Popup {
  constructor(popupSelector){
    this._popupSelector = document.querySelector(popupSelector); // находим нужный попап по селектору
    this._handleOverlayClick = this._handleOverlayClick.bind(this);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  _handleEscClose(){  //логика закрытия попапа клавишей Esc
    if(event.key === 'Escape'){
      this.close();
    }
  }

  _handleOverlayClick(event){
    if(event.target.classList.contains('popup_opened') || event.target.classList.contains('popup__close')){
      this.close();
    }
  }

  open(){ // открыть попап
    this._popupSelector.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close(){ // закрыть попап
    this._popupSelector.classList.remove('popup_opened');
    document.removeEventListener('keydown',this._handleEscClose);
  }

  setEventListeners(){ //слушатель клика иконке закрытия.Popup также закрывается при клике на затемнённую область вокруг формы.
    this._popupSelector.addEventListener('click', this._handleOverlayClick);
  }
}



























// export default class Popup{
//   //Селектор попапа, как параметр
//   constructor(popupSelector){
//     this._popupSelector = document.querySelector(popupSelector);
//   }

//     // Закртие на esc


//   // Открытие попап и вешаем событие закрытия на esc
//   open(){

//     document.addEventListener('keydown', this._handleEscClose.bind(this));
//     this._popupSelector.addEventListener('mousedown', this.setEventListeners.bind(this));
//     this._popupSelector.classList.add('popup_opened');
//     console.log(this._popupSelector);
//   }



//   // Закртытие попап и убираем слушатели
//   close(){
//     this._popupSelector.classList.remove('popup_opened');
//     document.removeEventListener('keydown', this._handleEscClose.bind(this));

//     this._popupSelector.removeEventListener('mousedown', this.setEventListeners.bind(this));
//   }


//   _handleEscClose(evt){
//     if (evt.key === "Escape") {
//       this.close();
//     }
//   }

//   //Закрытие на клик
//   setEventListeners() {
//     // console.log(this);
//     this._popupSelector.addEventListener('mousedown', (event)=>{
//         if(event.target.classList.contains('popup_opened') || event.target.classList.contains('popup__close')){
//           this.close();
//         }
//     });
//   };
// }
