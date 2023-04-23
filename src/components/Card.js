//этот модуль импортируем в модуль поверки валидации при правильном вводе данных и при начальной отрисовке
export default class Card{
  constructor (data, selectorTemplate, {handleCardClick}){
    this._data = data;
    this._image = data.link;
    this._title = data.name;
    this._description = data.name;
    this._selectorTemplate = selectorTemplate;
    this._handleOpenPopup = handleCardClick; //функция открытия попап
    this._openCardPopup = this._openCardPopup.bind(this);
    this._deleteCard = this._deleteCard.bind(this);
  }

  //Приватный метод создания копии блока карточки
  _getTemplateCard(){
    const cardElement = document.querySelector(this._selectorTemplate).content.querySelector('.card').cloneNode(true);
    return cardElement;
  }

  //Публичный метод генерации карточки
  generateCard(){
    console.log(this._image);
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
    this.classList.toggle('card__like_active');
  }

  // Приватный метод удаления карточки
  _deleteCard(){
    console.log(this);
    this._card.remove();
    this._card = null;
  }

  // Приватный метод откртия попап с картинкой
  _openCardPopup(){
    this._handleOpenPopup(this._data);
  }


  _setEventListener(){
    this._cardLike.addEventListener('click', this._likeCard);

    this._card.querySelector('.card__delete').addEventListener('click', this._deleteCard);

    this._cardImage.addEventListener('click', this._openCardPopup);

  }
}
