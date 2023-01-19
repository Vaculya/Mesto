import{
  elements,
  btnEditProfile,
  btnAddPlace,
  popupEditProfile,
  popupAddPlace,
  btnClosePopup,
  profileName,
  profileAbout,
  // popupForm,
  nameProfileInput,
  infoProfileInput,
  popupFormTypeEdit,
  popupFormTypePhoto,
  inputNewPlaceName,
  inputNewPlaceLink,
  // popupPLace,
  // popuPlacePhoto,
  // popupPLaceFigure,
  // cardTemplate,
  initialCards
} from './variables.js';

import Card from './CardModule.js';



// Начальное построение карточки
initialCards.forEach((item)  =>{
  const card = new Card(item);
  elements.append(card.generateCard());
});







// const likeCard = (event)  => {
//   event.target.classList.toggle('card__like_active');
// };

// const deleteCard = (event) =>{
//   event.target.closest('.card').remove();
// };

// попап просмотра места
// const openPlace = (cardData) => {
//   openPopup(popupPLace);

//   popuPlacePhoto.setAttribute('src', cardData.link);
//   popuPlacePhoto.setAttribute('alt', cardData.name);

//   popupPLaceFigure.textContent = cardData.name;
// };

//Создание карточки
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

// Первоначальная загрузка из массива
// initialCards.forEach(item =>{
//   elements.append(createCard(item));
// });

// закртие попапа профиля  и Добавить добавление фото
popupFormTypePhoto.addEventListener('submit', event => {
  event.preventDefault();

  const newNamePlace = inputNewPlaceName.value;
  const newImgLinkPlace = inputNewPlaceLink.value;

  elements.prepend(createCard({name: newNamePlace, link: newImgLinkPlace}));

  closePopup(popupAddPlace);
  popupFormTypePhoto.reset();
});

// закртие открытого попапа
const closeOpenedPopup = () => {
  const openedPopup = document.querySelector('.popup_opened');
  closePopup(openedPopup);
};

// закрытие на esc
const closeByEsc = (event) => {
  if(event.key === 'Escape'){
    closeOpenedPopup();
  }
};

// закрытие на клик не по форме или крестику
const closeByClick = (event) => {
  if(event.target.classList.contains('popup')){
    closeOpenedPopup();
  }
};

// открытие попап
const openPopup = (popup) =>{
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEsc);
  document.addEventListener('mousedown', closeByClick);
};

// закрытие попап
const closePopup = function (popup){
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEsc);
  document.removeEventListener('mousedown', closeByClick);
};//удаление класса



// Начальное значение в попап редактирования при открытии
const putOldInfoProfile = () =>{
  nameProfileInput.value = profileName.textContent;
  infoProfileInput.value = profileAbout.textContent;
};

// Сохранение нового профиля
const saveNewProfile = () =>{
  profileName.textContent = nameProfileInput.value;
  profileAbout.textContent = infoProfileInput.value;
};

// открытие попап
btnAddPlace.addEventListener('click', () => openPopup(popupAddPlace));
btnEditProfile.addEventListener('click', () => {
  openPopup(popupEditProfile);
  putOldInfoProfile();
});

// закртие на крестик
btnClosePopup.forEach(button => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

// сохранение и закртие попапа профиля
popupFormTypeEdit.addEventListener('submit', event =>{
  event.preventDefault();
  saveNewProfile();
  closePopup(popupEditProfile);
});
