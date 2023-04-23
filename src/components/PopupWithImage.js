import Popup from "./Popup.js";

export default class PopupWithImage extends Popup{
  constructor(popupSelector){
    super(popupSelector); // берем селктор попапа из Popup
    this._popupPhoto = this._popupSelector.querySelector('.popup__photo'); // фото в попапе
    this._popupCaption = this._popupSelector.querySelector('.popup__caption'); // описание в попапе
  }

  open(item){
    super.open(); //копируем открытие из попап
    // super.setEventListeners(); //копируем слушателей закрытия по крестику и темной областиsetEventListeners
    this._popupPhoto.src = item.link; // вставляем ссылку на картинку из картинки в попап
    this._popupPhoto.alt = item.name; // вставляем имя на картинку из картинки в попап
    this._popupCaption.textContent = item.name; // вставляем имя на картинку из картинки в попап
  }
}






























// // Наследник попа - попап для картинки
// export default class PopupWithImage extends Popup{
//   constructor(popupSelector){
//     super(popupSelector);
//     this._popupImage = this._popupSelector.querySelector('.popup__photo'); // Картинка в попапе
//     this._popupCaption = this._popupSelector.querySelector('.popup__caption'); // Подпись в попапе
//   }

//   open(title, image){
//     this._popupImage.src = image;
//     this._popupImage.alt = title;
//     this._popupCaption.textContent = title;
//     super.open();
//     super.setEventListeners();
//   }
// }
