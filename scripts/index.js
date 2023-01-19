import{
  elements,
  btnEditProfile,
  btnAddPlace,
  popupEditProfile,
  popupAddPlace,
  btnClosePopup,
  profileName,
  profileAbout,
  nameProfileInput,
  infoProfileInput,
  popupFormTypeEdit,
  popupFormTypePhoto,
  inputNewPlaceName,
  inputNewPlaceLink,
  initialCards,
  formElements
} from './variables.js';

import Card from './CardModule.js';
import Validate from './validate.js';

const popupFormTypePhotoValidate = new Validate(formElements, popupFormTypePhoto);
popupFormTypePhotoValidate.enableValidation();

const popupFormTypeEditValidate = new Validate(formElements, popupFormTypeEdit);
popupFormTypeEditValidate.enableValidation();

// Начальное построение карточки
initialCards.forEach((item)  =>{
  const card = new Card(item);
  elements.append(card.generateCard());
});

// закртие попапа профиля  и Добавить добавление фото
popupFormTypePhoto.addEventListener('submit', event => {
  event.preventDefault();

  const newNamePlace = inputNewPlaceName.value;
  const newImgLinkPlace = inputNewPlaceLink.value;

  const card = new Card({name: newNamePlace, link: newImgLinkPlace});
  elements.prepend(card.generateCard());

  closePopup(popupAddPlace);
  popupFormTypePhoto.reset();
});



// закртие открытого попапа по клику или esc
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
    console.log(1);
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

// открытие попап
btnAddPlace.addEventListener('click', () => {
  deleteErrorsInForm(popupFormTypePhoto);
  addDesableBtn(formElements, popupAddPlace);
  openPopup(popupAddPlace);
});
btnEditProfile.addEventListener('click', () => {
  deleteErrorsInForm(popupFormTypeEdit);
  addDesableBtn(formElements, popupEditProfile);
  putOldInfoProfile();
  openPopup(popupEditProfile);
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
