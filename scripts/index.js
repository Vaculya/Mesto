let buttonEditFormOpen = document.querySelector(".profile__edit-btn"),
    popup = document.querySelector(".popup"),
    popupEdit = document.querySelector('.popup_type_edit'),
    popupClose = document.querySelector(".popup__close"),
    formEdit = document.querySelector(".popup__form_type_edit"),// Форма изменения профиля
    nameInput = document.querySelector(".popup__input_info_name"), // имя в попап
    jobInput = document.querySelector(".popup__input_info_about"),// о человеке в попап
    profileName = document.querySelector(".profile__name"), // Имя профайла
    profileAbout = document.querySelector(".profile__about"), // О человеке

    buttonProfileaAdd = document.querySelector('.profile__add-btn'); // кнопка открытия попап с фото
    popupAdd = document.querySelector('.popup_type_add'), //попап добавления фото
    closeBtnAddPopup = document.querySelector('.popup__close_btn-add'),
    formAdd = document.querySelector('.popup__form_type_add'), // форма добавления места
    placeName = document.querySelector('.popup__input_place_name'), // Название места в попап
    imgLink = document.querySelector('.popup__input_img_link'); //Ссылка на картинку в попап

    likeCard = document.querySelectorAll('.elements__like');

function openPopupEdit (){
  popupEdit.classList.add("popup_opened");
  nameInput.value = profileName.textContent;
  jobInput.value = profileAbout.textContent;
}

function openPopupAdd(){
  popupAdd.classList.add("popup_opened");
}

// close popup
function closePopup(){
  popup.classList.remove("popup_opened");
}

function closeAddPopup(){
  popupAdd.classList.remove("popup_opened");
}

// save profile popup
function formSubmitHandler (evt) {
    evt.preventDefault();

    profileName.textContent =  nameInput.value;
    profileAbout.textContent = jobInput.value;

    closePopup();
};

//Добавление фото на страницу

let elements = document.querySelector('.elements');

let initialCards = [
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

//функция для постраения карточек по всему массиву
function AddElement (){
  initialCards.forEach(element => {

    const elementsTemplate = document.querySelector('#element-template').content;
    const elementsItem = elementsTemplate.querySelector('.elements__item').cloneNode(true);

    elementsItem.querySelector('.elements__img').setAttribute('src', element.link);
    elementsItem.querySelector('.elements__img').setAttribute('alt', element.name);
    elementsItem.querySelector('.elements__name').textContent = element.name;

    elements.append(elementsItem);
  });
};

const addNewPlace = function(evt) {
  evt.preventDefault();
  // добавление в массив нового оъекта
  initialCards.unshift(
    {
      name: placeName.value,
      link: imgLink.value
    }
  );

  elements.innerHTML = '';
  AddElement();
  closeAddPopup();
};

// Добавление лайка
const likeAdd = function(event){
  event.target.classList.toggle('elements__like_active');
};

elements.addEventListener('click', likeAdd); // поставить лайк

buttonEditFormOpen.addEventListener("click", openPopupEdit); // открытие попап изменение профиля

formEdit.addEventListener('submit', formSubmitHandler); //при нажатии сохранить в изменении профиля

popupClose.addEventListener("click", closePopup); // Закрыть попап редактирования профиля

buttonProfileaAdd.addEventListener('click', openPopupAdd); // открыть попап добавления фото

formAdd.addEventListener('submit', addNewPlace); // добавить новое фото и закрыть попап

closeBtnAddPopup.addEventListener("click", closeAddPopup); // закрыть попап добавления фото

window.onload = AddElement(); // закгрузка карточек при открытие страницы
