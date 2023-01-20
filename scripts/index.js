import{
  elements,
  btnEditProfile,
  btnAddPlace,
  popupEditProfile,
  popupAddPlace,
  btnClosePopupList,
  profileName,
  profileAbout,
  nameProfileInput,
  infoProfileInput,
  popupFormTypeEdit,
  popupFormTypePhoto,
  inputNewPlaceName,
  inputNewPlaceLink,
  popupPLace,
  popuPlacePhoto,
  popupPLaceFigure,
  initialCards,
  formElements
} from './variables.js';

import Card from './card.js';
import FormValidator from './FormValidator.js';

const popupFormTypePhotoValidate = new FormValidator(formElements, popupFormTypePhoto);
popupFormTypePhotoValidate.enableValidation();

const popupFormTypeEditValidate = new FormValidator(formElements, popupFormTypeEdit);
popupFormTypeEditValidate.enableValidation();

const createCard = (item, templateElem, functionToOpen) =>{
  const card = new Card(item, templateElem, functionToOpen);

  return card;
};

// Начальное построение карточки

const cardList = [];

function cardListCreate (){
  initialCards.forEach((item)  =>{
    const card = createCard(item, '#card-template', handleOpenPopup);
    cardList.unshift(card);
  });
}

cardListCreate();

cardList.forEach((card)=>{
  elements.prepend(card.generateCard());
});


// закртие попапа профиля  и Добавить добавление фото
popupFormTypePhoto.addEventListener('submit', event => {
  event.preventDefault();

  const newNamePlace = inputNewPlaceName.value;
  const newImgLinkPlace = inputNewPlaceLink.value;

  const card = new Card({name: newNamePlace, link: newImgLinkPlace}, '#card-template', handleOpenPopup);
  elements.prepend(card.generateCard());

  closePopup(popupAddPlace);
  popupFormTypePhoto.reset();
});



// закртие открытого попапа по клику или esc
// закртие открытого попапа
const closeOpenedPopup = () => {
  const openedPopup = document.querySelector('.popup_opened');
  closePopup(openedPopup);
};

// закрытие на esc
const closeByEsc = (event) => {
  if(event.key === 'Escape'){
    console.log('close');
    closeOpenedPopup();
  }
};

// закрытие на клик не по форме или крестику
const closeByClick = (event) => {
  if(event.target.classList.contains('popup')){
    closePopup(event.target);
  }
};

// открытие попап
const openPopup = (popup) =>{
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEsc);
  popup.addEventListener('mousedown', closeByClick);
};

// закрытие попап
const closePopup = function (popup){
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEsc);
  popup.removeEventListener('mousedown', closeByClick);
};

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

// Открыть попап картинки
function handleOpenPopup(name, link) {
  popuPlacePhoto.src = link;
  popuPlacePhoto.alt = name;
  popupPLaceFigure.textContent = name;
  openPopup(popupPLace);
}

// function

// открытие попап
btnAddPlace.addEventListener('click', () => {
  popupFormTypePhotoValidate.deleteErrors();
  popupFormTypePhotoValidate.disabledBtn();
  inputNewPlaceName.value = '';
  inputNewPlaceLink.value = '';
  openPopup(popupAddPlace);
});
btnEditProfile.addEventListener('click', () => {
  popupFormTypeEditValidate.deleteErrors();
  popupFormTypeEditValidate.disabledBtn();
  putOldInfoProfile();
  openPopup(popupEditProfile);
});

// закртие на крестик
btnClosePopupList.forEach(button => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

// сохранение и закртие попапа профиля
popupFormTypeEdit.addEventListener('submit', event =>{
  event.preventDefault();
  saveNewProfile();
  closePopup(popupEditProfile);
});
