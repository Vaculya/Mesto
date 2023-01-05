// создание переменных
const elements = document.querySelector('.elements'); //Родельский блок всех карточек

const btnEditProfile = document.querySelector('.profile__edit-btn');// Кнопка редактирования профиля
const btnAddPlace = document.querySelector('.profile__add-btn'); // Кнопка добавления нового места
const popupEditProfile = document.querySelector('.popup_type_edit');// Попап редактирования профиля
const popupAddPlace = document.querySelector('.popup_type_add'); // Попап добавления нового места
const btnClosePopup = document.querySelectorAll('.popup__close'); // Кнопки закрытия popup

const profileName = document.querySelector('.profile__name'); // Строка имени в профиле
const profileAbout =  document.querySelector('.profile__about'); // Строка о себе в профиле
const popupForm = document.querySelectorAll('.popup__form'); // Все попапы с формой
const nameProfileInput = document.querySelector('.popup__input_info_name'); // В попап редактирования профиля строка имени
const infoProfileInput = document.querySelector('.popup__input_info_about'); // В попап редактирования профиля строка о себе
const popupFormTypeEdit = document.querySelector('.popup__form_type_edit');// Форма попапа профиля

const popupFormTypePhoto = document.querySelector('.popup__form_type_add'); //Форма попапа нового места
const inputNewPlaceName =  popupFormTypePhoto.querySelector('.popup__input_place_name');
const inputNewPlaceLink = popupFormTypePhoto.querySelector('.popup__input_img_link')

const popupPLace =  document.querySelector('.popup_type_photo');// Попап нового места
const popuPlacePhoto = popupPLace.querySelector('.popup__photo'); //Картинка места
const popupPLaceFigure = popupPLace.querySelector('.popup__caption'); // подпись места

const cardTemplate = document.querySelector('#card-template').content;// обертка карточки для клонирвания



const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

class Card{
  constructor (data){
    this._name = data.name;
    this._image = data.link;
  }

  _getTemplateCard(){
    this._card = document.querySelector('#card-template').content.querySelector('.card').cloneNode(true);
    return this._card;
  }


  generateCard(){
    this._cardElement = this._getTemplateCard();
    this._eventListeners();

    this._cardElement.querySelector('.card__img').setAttribute('src', this._image);
    this._cardElement.querySelector('.card__name').textContent = this._name;

    return this._cardElement;
  }

  _eventListeners(){
    this._cardElement.querySelector('.card__like').addEventListener('click', () => {
      this._likeIt();
    });
  }

  _likeIt(){
    const likeBtn = this._cardElement.querySelector('.card__like');
    likeBtn.classList.toggle('card__like_active');
  }

}

initialCards.forEach((item) => {
  const card = new Card(item);
  elements.append(card.generateCard());
});



















































// // NEEEEEEEEEEEEEW
// const initialCards = [
//   {
//     name: 'Архыз',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
//   },
//   {
//     name: 'Челябинская область',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
//   },
//   {
//     name: 'Иваново',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
//   },
//   {
//     name: 'Камчатка',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
//   },
//   {
//     name: 'Холмогорский район',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
//   },
//   {
//     name: 'Байкал',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
//   }
// ];

// class Card {
//   constructor (data){
//     this._image = data.link;
//     this._name = data.name;
//   }


//   _getTemplate(){
//     const cardElement = document.querySelector('.card-template').content.querySelector('.card');
//     return cardElement;
//   }

//   _deleteCard(event){
//     event.target.closest('.card').remove();
//   }

//   _setEventListeners(){
//     this._card.querySelector('.card__delete').addEventListener('click', this._deleteCard());
//   }

//   generateCard(){
//     this._card = this._getTemplate();

//     this._card.querySelector('.card__img').setAttribute('src', this._image);
//     this._card.querySelector('.card__name').setAttribute('src', this._name);
//   }

// }


// // РАБОТА С КАРТОЧКАМИ
// // const initialCards = [
// //     {
// //       name: 'Архыз',
// //       link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
// //     },
// //     {
// //       name: 'Челябинская область',
// //       link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
// //     },
// //     {
// //       name: 'Иваново',
// //       link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
// //     },
// //     {
// //       name: 'Камчатка',
// //       link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
// //     },
// //     {
// //       name: 'Холмогорский район',
// //       link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
// //     },
// //     {
// //       name: 'Байкал',
// //       link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
// //     }
// // ];

// const likeCard = (event)  => {
//   event.target.classList.toggle('card__like_active');
// };

// // const deleteCard = (event) =>{
// //   event.target.closest('.card').remove();
// // };

// // попап просмотра места
// const openPlace = (cardData) => {
//   openPopup(popupPLace);

//   popuPlacePhoto.setAttribute('src', cardData.link);
//   popuPlacePhoto.setAttribute('alt', cardData.name);

//   popupPLaceFigure.textContent = cardData.name;
// };

// //Создание карточки
// const createCard = (cardData) => {
//   const card = cardTemplate.querySelector('.card').cloneNode(true);
//   const cardImg = card.querySelector('.card__img');

//   cardImg.src = cardData.link;
//   cardImg.alt = cardData.name;
//   card.querySelector('.card__name').textContent = cardData.name;

//   //Лайк
//   card.querySelector('.card__like').addEventListener('click',(event) => likeCard(event));

//   // удалить
//   card.querySelector('.card__delete').addEventListener('click', (event) => deleteCard(event));

//   // попап картинки
//   cardImg.addEventListener('click', () => openPlace(cardData));

//   return card;
// };

// // Первоначальная загрузка из массива
// initialCards.forEach(item =>{
//   elements.append(createCard(item));
// });

// // закртие попапа профиля  и Добавить добавление фото
// popupFormTypePhoto.addEventListener('submit', event => {
//   event.preventDefault();

//   const newNamePlace = inputNewPlaceName.value;
//   const newImgLinkPlace = inputNewPlaceLink.value;

//   elements.prepend(createCard({name: newNamePlace, link: newImgLinkPlace}));

//   closePopup(popupAddPlace);
//   popupFormTypePhoto.reset();
// });

// // закртие открытого попапа
// const closeOpenedPopup = () => {
//   const openedPopup = document.querySelector('.popup_opened');
//   closePopup(openedPopup);
// };

// // закрытие на esc
// const closeByEsc = (event) => {
//   if(event.key === 'Escape'){
//     closeOpenedPopup();
//   }
// };

// // закрытие на клик не по форме или крестику
// const closeByClick = (event) => {
//   if(event.target.classList.contains('popup')){
//     closeOpenedPopup();
//   }
// };

// // открытие попап
// const openPopup = (popup) =>{
//   popup.classList.add('popup_opened');
//   document.addEventListener('keydown', closeByEsc);
//   document.addEventListener('mousedown', closeByClick);
// };

// // закрытие попап
// const closePopup = function (popup){
//   popup.classList.remove('popup_opened');
//   document.removeEventListener('keydown', closeByEsc);
//   document.removeEventListener('mousedown', closeByClick);
// };//удаление класса



// // Начальное значение в попап редактирования при открытии
// const putOldInfoProfile = () =>{
//   nameProfileInput.value = profileName.textContent;
//   infoProfileInput.value = profileAbout.textContent;
// };

// // Сохранение нового профиля
// const saveNewProfile = () =>{
//   profileName.textContent = nameProfileInput.value;
//   profileAbout.textContent = infoProfileInput.value;
// };

// // открытие попап
// btnAddPlace.addEventListener('click', () => openPopup(popupAddPlace));
// btnEditProfile.addEventListener('click', () => {
//   openPopup(popupEditProfile);
//   putOldInfoProfile();
// });

// // закртие на крестик
// btnClosePopup.forEach(button => {
//   const popup = button.closest('.popup');
//   button.addEventListener('click', () => closePopup(popup));
// });

// // сохранение и закртие попапа профиля
// popupFormTypeEdit.addEventListener('submit', event =>{
//   event.preventDefault();
//   saveNewProfile();
//   closePopup(popupEditProfile);
// });
