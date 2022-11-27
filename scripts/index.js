let buttonEditFormOpen = document.querySelector(".profile__edit-btn"),
    popup = document.querySelector(".popup"),
    popupClose = document.querySelector(".popup__close"),
    formElement = document.querySelector(".popup__form"),// Форма
    nameInput = document.querySelector(".popup__input_name"), // имя в попап
    jobInput = document.querySelector(".popup__input_about"),// о человеке в попап
    profileName = document.querySelector(".profile__name"), // Имя профайла
    profileAbout = document.querySelector(".profile__about"); // О человеке
    nameInput.value = profileName.textContent;
    jobInput.value = profileAbout.textContent;


function openPopup (){
  popup.classList.add("popup_opened");
}

function closePopup(){
  popup.classList.remove("popup_opened");
}

function formSubmitHandler (evt) {
    evt.preventDefault();

    profileName.textContent =  nameInput.value;
    profileAbout.textContent = jobInput.value;

    closePopup();
}

formElement.addEventListener('submit', formSubmitHandler);

buttonEditFormOpen.addEventListener("click", openPopup);

popupClose.addEventListener("click", closePopup);
