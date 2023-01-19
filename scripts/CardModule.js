//этот модуль импортируем в модуль поверки валидации при правильном вводе данных и при начальной отрисовке

import {popupPLace, popuPlacePhoto, popupPLaceFigure} from './variables.js';

export default class Card{
  constructor ( data){
    this._image = data.link;
    this._title = data.name;
    this._description = data.name;
  }

  //Приватный метод создания копии блока карточки
  _getTemplateCard(){
    const cardElement = document.querySelector('#card-template').content.querySelector('.card').cloneNode(true);
    return cardElement;
  }

  //Публичный метод генерации карточки
  generateCard(){
    this._card = this._getTemplateCard();//получили карточку

    this._card.querySelector('.card__img').src = this._image;
    this._card.querySelector('.card__img').alt = this._description;
    this._card.querySelector('.card__name').textContent = this._title;

    this._setEventListener();
    return this._card;
  }

  //Приватный метод like готово
  _likeCard(){
    event.target.classList.toggle('card__like_active');
  }

  // Приватный метод удаления карточки
  _deleteCard(){
    event.target.closest('.card').remove();
  }

  // Приватный метод откртия попап с картинкой
  _openCardPopup(){
    console.log(popupPLace);
    popuPlacePhoto.src = this._image;
    popuPlacePhoto.alt = this._description;
    popupPLaceFigure.textContent = this._title;

    popupPLace.classList.add('popup_opened');
  }

  _setEventListener(){
    this._card.querySelector('.card__like').addEventListener('click', ()=> {
      this._likeCard();
    });

    this._card.querySelector('.card__delete').addEventListener('click', () => {
      this._deleteCard();
    });

    this._card.querySelector('.card__img').addEventListener('click', () =>{
      this._openCardPopup();
    });

  }
}
