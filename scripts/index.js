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

const likeCard = (event)  => {
  event.target.classList.toggle('card__like_active');
};

const deleteCard = (event) =>{
  event.target.closest('.card').remove();
};

// попап просмотра места
const openPlace = (cardData) => {
  openPopup(popupPLace);

  popuPlacePhoto.setAttribute('src', cardData.link);
  popuPlacePhoto.setAttribute('alt', cardData.name);

  popupPLaceFigure.textContent = cardData.name;
};

//Создание карточки
const createCard = (cardData) => {
  const card = cardTemplate.querySelector('.card').cloneNode(true);

  const cardImg = card.querySelector('.card__img');

  cardImg.src = cardData.link;
  cardImg.alt = cardData.name;
  card.querySelector('.card__name').textContent = cardData.name;

  //Лайк
  card.querySelector('.card__like').addEventListener('click',(event) => likeCard(event));

  // удалить
  card.querySelector('.card__delete').addEventListener('click', (event) => deleteCard(event));

  // попап картинки
  cardImg.addEventListener('click', () => openPlace(cardData));

  return card;
};

// Первоначальная загрузка из массива
initialCards.forEach(item =>{
  elements.append(createCard(item));
});

// закртие попапа профиля  и Добавить добавление фото
popupFormTypePhoto.addEventListener('submit', event => {
  event.preventDefault();

  const newNamePlace = document.querySelector('.popup__input_place_name').value;
  const newImgLinkPlace = document.querySelector('.popup__input_img_link').value;

  elements.prepend(createCard({name: newNamePlace, link: newImgLinkPlace}));

  closePopupForm();
  popupFormTypePhoto.reset();
});

// открытие попап
const openPopup = (popup) =>{
  popup.classList.add('popup_opened');
};

// закрытие попап
const closePopup = function (popup){
  popup.classList.remove('popup_opened');
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

//Закрыть popup после submit
const closePopupForm = () =>{
  popupForm.forEach(form => {
    const closestForm = form.closest('.popup');
    closePopup(closestForm);
  });
};


// открытие попап
btnAddPlace.addEventListener('click', () => openPopup(popupAddPlace));
btnEditProfile.addEventListener('click', () => {
  openPopup(popupEditProfile);
  putOldInfoProfile();
});

// popupPLace.classList.add('popup_opened');


// закртие на крестик
btnClosePopup.forEach(button => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

// сохранение и закртие попапа профиля
popupFormTypeEdit.addEventListener('submit', event =>{
  event.preventDefault();
  saveNewProfile();
  closePopupForm();
});
