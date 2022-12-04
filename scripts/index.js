let buttonEditFormOpen = document.querySelector(".profile__edit-btn"),
    popup = document.querySelector(".popup"),
    popupClose = document.querySelector(".popup__close"),
    formElement = document.querySelector(".popup__form"),// Форма
    nameInput = document.querySelector(".popup__input_info_name"), // имя в попап
    jobInput = document.querySelector(".popup__input_info_about"),// о человеке в попап
    profileName = document.querySelector(".profile__name"), // Имя профайла
    profileAbout = document.querySelector(".profile__about"); // О человеке

// Open profile popup
function openPopup (){
  popup.classList.add("popup_opened");
  nameInput.value = profileName.textContent;
  jobInput.value = profileAbout.textContent;
}

// close popup
function closePopup(){
  popup.classList.remove("popup_opened");
}

// save profile popup
function formSubmitHandler (evt) {
    evt.preventDefault();

    profileName.textContent =  nameInput.value;
    profileAbout.textContent = jobInput.value;

    closePopup();
}

formElement.addEventListener('submit', formSubmitHandler);

buttonEditFormOpen.addEventListener("click", openPopup);

popupClose.addEventListener("click", closePopup);

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

const elementsLoad = initialCards.forEach(element =>{

  const elementsTemplate = document.querySelector('#element-template').content;
  const elementsItem = elementsTemplate.querySelector('.elements__item').cloneNode(true);

  elementsItem.querySelector('.elements__img').setAttribute('src', element.link);
  elementsItem.querySelector('.elements__name').textContent = element.name;

  elements.append(elementsItem);
});

