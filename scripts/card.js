//этот модуль импортируем в модуль поверки валидации при правильном вводе данных и при начальной отрисовке
export default class Card{
  constructor (data, selectorTemplate, handleOpenPopup){
    this._image = data.link;
    this._title = data.name;
    this._description = data.name;
    this._selectorTemplate = selectorTemplate;

    this._handleOpenPopup = handleOpenPopup; //функция открытия попап
  }

  //Приватный метод создания копии блока карточки
  _getTemplateCard(){
    const cardElement = document.querySelector(this._selectorTemplate).content.querySelector('.card').cloneNode(true);
    return cardElement;
  }

  //Публичный метод генерации карточки
  generateCard(){
    this._card = this._getTemplateCard();//получили карточку
    this._cardImage = this._card.querySelector('.card__img');
    this._cardLike = this._card.querySelector('.card__like');

    this._cardImage.src = this._image;
    this._cardImage.alt = this._description;
    this._card.querySelector('.card__name').textContent = this._title;

    this._setEventListener();
    return this._card;
  }

  //Приватный метод like готово
  _likeCard(){
    this._cardLike.classList.toggle('card__like_active');
  }

  // Приватный метод удаления карточки
  _deleteCard(){
    this._card.remove();
    this._card = null;
  }

  // Приватный метод откртия попап с картинкой
  _openCardPopup(){
    this._handleOpenPopup(this._title, this._image);
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
