import '../pages/index.css';
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
  formElements,
  cardTemplate
} from './variables.js';

import Card from './Card.js';
import FormValidator from './FormValidator.js';
import Section from './Section.js';
import Popup from './Popup.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import UserInfo from './UserInfo.js';

// Валидацмя формы для фото
const popupFormTypePhotoValidate = new FormValidator(formElements, popupFormTypePhoto);
popupFormTypePhotoValidate.enableValidation();

// Валидация формы для профиля
const popupFormTypeEditValidate = new FormValidator(formElements, popupFormTypeEdit);
popupFormTypeEditValidate.enableValidation();


// cardCreater - функция, которая принимает в качестве параметра данные одной карточки (напрмиер: cardItem1). Затем в ней создается экземпляр класса Card, где в конструторе (объект с данными карточки, селектор карточки, {функция открытия попапа}).
// {функция открытия попапа} ниже
//в функцию открытия попапа передается объект с данными карточки. Создается экземпляр открытия попапа кароточки. И функция открытия попапа с объектом с данными карточки.
//карточка генерируется

const cardCreater = (cardData) => {     //функция, которая создает карточки
  const card = new Card(                //вызов класса
    cardData,                           //откуда берем данные(начальный массив или данные с формы)
    '#card-template',                   // селктор карточки
    {handleCardClick : (cardData) => {  // функция, открытия попап с данными карточки, как аргумент
      const popupWithImageOpener = new PopupWithImage('.popup_type_photo');   //создание попапа и передача селектора
      popupWithImageOpener.open(cardData);                                    //откртие попапа
    }});
  const cardGenerated = card.generateCard(); //генерация карточки
  return cardGenerated;
};

//Создание первой партии карточке
//создается новая секция, тк она нужна для вставки на страницу
//({  items: начльный массив данных,
//    renderer - функция, котрая принимает аргумент item (один элемент массива), создается новая карточка  newCard = cardCreater(item), вставляем новую карточку через обращение к cardOnLoad.addItem(newCard)},
//contanerSelector - куда вствить)

const cardOnLoad = new Section({      //вставка карточек из первой партии
  items : initialCards,               // начальные данные для загрузки первых карточек
  renderer : (item) => {              // отрисовка карточек (item - объект с именем и ссылка)
    const newCard = cardCreater(item);  //создание карточек с помощью cardCreater
    cardOnLoad.addItem(newCard);        // добавление карточки в верствку
  }
}, elements);                           // elements - куда вставить

cardOnLoad.renderItem();                //создание карточки

//cardOnLoad.renderItem(). В items : initialCards -> запускается  renderItem из Section. initialCards - массив? да. запускается forEach.renderer(item, где item - каждый оюъект массива с данными).


const addPopup = new PopupWithForm(
  '.popup_type_add',
  {
    submitForm : (data) => {
      const card = new Section({
        items : data,
        renderer : (item) => {
          const newCard = cardCreater(item);
          card.addItem(newCard);
        }
      }, elements);
      return card.renderItem();
    }
  }
);

addPopup.setEventListeners();

btnAddPlace.addEventListener('click', ()=>{
  addPopup.open();
});

const editorProfile = new UserInfo({
  userName : '.profile__name',
  userAbout : '.profile__about'
});

const popupProfile = new PopupWithForm(
  '.popup_type_edit',
  {
    submitForm : (userData) => {
      editorProfile.setUserInfo(userData);
      popupProfile.close();
    }
  }
);
popupProfile.setEventListeners();

btnEditProfile.addEventListener('click', ()=>{
  const oldInfo = editorProfile.getUserInfo();
  nameProfileInput.value = oldInfo.name;
  infoProfileInput.value = oldInfo.about;
  console.log(oldInfo);
  popupProfile.open();
});





























// // Создание карточки
// // const createCard = (item, selectorTemplate, handleOpenPopup) => {
// //   const card = new Card(item, selectorTemplate, handleOpenPopup);
// //   return card.generateCard();
// // };

// const cardCreate = (item) => {
//   const card = new Card(
//     item,
//     '#card-template',
//     {handleOpenPopup: (item)=> {
//       const popupWithImage = new PopupWithImage('.popup_type_photo');
//       popupWithImage.open();
//     }});
//   const cardGenerated = card.generateCard();
//   return cardGenerated;
// }


// // создание карточки
// const cardListCreate = new Section ({
//   items: initialCards,
//   renderer: (item) => {
//     const card = cardCreate(item);
//     card.addItem(card);
//   }
// }, elements);

// // начальное построение карточки
// cardListCreate.renderItems();



// // Открытие попап карточки
// const handleCardClick = (name, link) => {
//   const cardPopup = new PopupWithImage('.popup_type_photo');

//   // cardPopup.setEventListeners();
//   cardPopup.open(name, link);

//   // console.log(name, link);
// };

// // const form = new PopupWithForm(
// //   '.popup_type_add',
// //   {callbackFormSubmit : (formData) => {

// //       const Addedcard = new Section({
// //         items: formData,
// //         renderer : (item) => {
// //           const card = new Card(item, '#card-template', {handleOpenPopup: (name, link) =>  handleCardClick(name, link)});
// //           const cardGenerated = card.generateCard();
// //           cardListCreate.addItem(cardGenerated);
// //         }
// //       }, elements);
// //       return Addedcard.renderItems();
// //     }
// //   }
// // );

// form.setEventListeners();



// btnAddPlace.addEventListener('click', ()=>{
//   // form.setEventListeners();
//   form.open();
//   // console.log(form);

// });







































// const popupAddCard = new PopupWithForm(popupFormTypePhoto,{
//   // callbackFormSubmit : (formValues) => {
//     // const card = new Card(formValues, '#card-template', {handleOpenPopup: (name, link) =>  handleCardClick(name, link)});
//     // const cardGenerated = card.generateCard();
//     // cardListCreate.addItem(cardGenerated);
//   }
// });

// const popupAddCard = new PopupWithForm(popupFormTypePhoto, {
//   callbackFormSubmit : (formValues) => {
//     const Card = createCard(formValues, '#card-template', {handleOpenPopup: (name, link) =>  handleCardClick(name, link)});
//     const cardGenerated = card.generateCard();
//     console.log(cardGenerated);
//     // popupAddCard.addItem(cardGenerated);
//   }
// });


// const addCardForm = new PopupWithForm({})popupFormTypePhoto,
//     {
//       callbackFormSubmit : (formValues) => {

//       };
//     }
//   );










// Создание карточки
// function cardListCreate (){
//     initialCards.forEach((item)  =>{
//       const card = createCard(item, '#card-template', {handleOpenPopup: (name, link) =>  handleCardClick(name, link)});
//       elements.append(card);
//     });
//   }

// // Начальная генерация карточек
// cardListCreate();









// const createCard = (item, templateElem, functionToOpen) =>{
//   const card = new Card(item, templateElem, functionToOpen);
//   return card.generateCard();
// };


// Начальное построение карточки

// const cardList = [];

// function cardListCreate (){
//   initialCards.forEach((item)  =>{
//     const card = createCard(item, '#card-template', handleOpenPopup);
//     elements.append(card);
//   });
// }

// cardListCreate();


// Открытие карточек
// const popupImage = new PopupWithImage('.popup_type_photo');
// popupImage.setEventListeners();

// const handleCardClick = () => {
//   popupImage.open();
// };

// const cardListCreate = new Section ({
//   items: initialCards,
//   renderer: (item) => {
//     const card = new Card(item, '#card-template', popupImage.open);
//     const cardGenerated = card.generateCard();
//     cardListCreate.addItem(cardGenerated);
//   }
// }, elements);

// cardListCreate.renderItems();



// // закртие попапа профиля  и Добавить добавление фото
// popupFormTypePhoto.addEventListener('submit', event => {
//   event.preventDefault();

//   const newNamePlace = inputNewPlaceName.value;
//   const newImgLinkPlace = inputNewPlaceLink.value;

//   const card = createCard({name: newNamePlace, link: newImgLinkPlace}, '#card-template', handleCardClick);
//   elements.prepend(card);

//   closePopup(popupAddPlace);
//   popupFormTypePhoto.reset();
// });




// // закртие открытого попапа по клику или esc
// // закртие открытого попапа
// const closeOpenedPopup = () => {
//   const openedPopup = document.querySelector('.popup_opened');
//   closePopup(openedPopup);
// };

// // закрытие на esc
// const closeByEsc = (event) => {
//   if(event.key === 'Escape'){
//     console.log('close');
//     closeOpenedPopup();
//   }
// };

// // закрытие на клик не по форме или крестику
// const closeByClick = (event) => {
//   if(event.target.classList.contains('popup')){
//     closePopup(event.target);
//   }
// };

// // открытие попап
// const openPopup = (popup) =>{
//   popup.classList.add('popup_opened');
//   document.addEventListener('keydown', closeByEsc);
//   popup.addEventListener('mousedown', closeByClick);
// };

// // закрытие попап
// const closePopup = function (popup){
//   popup.classList.remove('popup_opened');
//   document.removeEventListener('keydown', closeByEsc);
//   popup.removeEventListener('mousedown', closeByClick);
// };

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

// // Открыть попап картинки
// function handleOpenPopup(name, link) {
//   popuPlacePhoto.src = link;
//   popuPlacePhoto.alt = name;
//   popupPLaceFigure.textContent = name;
//   openPopup(popupPLace);
// }

// // function

// // открытие попап
// btnAddPlace.addEventListener('click', () => {
//   popupFormTypePhotoValidate.deleteErrors();
//   popupFormTypePhotoValidate.disabledBtn();
//   inputNewPlaceName.value = '';
//   inputNewPlaceLink.value = '';
//   openPopup(popupAddPlace);
// });
// btnEditProfile.addEventListener('click', () => {
//   popupFormTypeEditValidate.deleteErrors();
//   popupFormTypeEditValidate.disabledBtn();
//   putOldInfoProfile();
//   openPopup(popupEditProfile);
// });

// // закртие на крестик
// btnClosePopupList.forEach(button => {
//   const popup = button.closest('.popup');
//   button.addEventListener('click', () => closePopup(popup));
// });

// // сохранение и закртие попапа профиля
// popupFormTypeEdit.addEventListener('submit', event =>{
//   event.preventDefault();
//   saveNewProfile();
//   closePopup(popupEditProfile);
// });
