let buttonEditFormOpen = document.querySelector(".profile__edit-btn"),
    popup = document.querySelector(".popup"),
    popupClose = document.querySelector(".popup__close"),
    formElement = document.querySelector(".popup__form"),// Форма
    nameInput = document.querySelector(".popup__name"), // имя в попап
    jobInput = document.querySelector(".popup__about"),// о человеке в попап
    profileName = document.querySelector(".profile__name"), // Имя профайла
    profileAbout = document.querySelector(".profile__about"); // О человеке


buttonEditFormOpen.addEventListener("click", function(){
    popup.classList.add("popup_opened");
    nameInput.value = profileName.textContent;
    jobInput.value = profileAbout.textContent;
});

popupClose.addEventListener("click", function(){
  popup.classList.remove("popup_opened");
});


function formSubmitHandler (evt) {
    evt.preventDefault();

    profileName.textContent =  nameInput.value;
    profileAbout.textContent = jobInput.value;

    popup.classList.remove("popup_opened");
}

formElement.addEventListener('submit', formSubmitHandler);
