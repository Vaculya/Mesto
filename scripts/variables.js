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
const inputNewPlaceLink = popupFormTypePhoto.querySelector('.popup__input_img_link');

const popupPLace =  document.querySelector('.popup_type_photo');// Попап нового места
const popuPlacePhoto = popupPLace.querySelector('.popup__photo'); //Картинка места
const popupPLaceFigure = popupPLace.querySelector('.popup__caption'); // подпись места

const cardTemplate = document.querySelector('#card-template').content;// обертка карточки для клонирвания

// РАБОТА С КАРТОЧКАМИ
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

export {
  elements,
  btnEditProfile,
  btnAddPlace,
  popupEditProfile,
  popupAddPlace,
  btnClosePopup,
  profileName,
  profileAbout,
  popupForm,
  nameProfileInput,
  infoProfileInput,
  popupFormTypeEdit,
  popupFormTypePhoto,
  inputNewPlaceName,
  inputNewPlaceLink,
  popupPLace,
  popuPlacePhoto,
  popupPLaceFigure,
  cardTemplate,
  initialCards
};
