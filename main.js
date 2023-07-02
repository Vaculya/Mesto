(()=>{"use strict";document.querySelector(".elements");var e=document.querySelector(".profile__edit-btn"),t=document.querySelector(".profile__add-btn"),r=(document.querySelector(".popup_type_edit"),document.querySelector(".popup_type_add"),document.querySelectorAll(".popup__close"),document.querySelector(".profile__name"),document.querySelector(".profile__about"),document.querySelectorAll(".popup__form"),document.querySelector(".popup__input_info_name")),n=document.querySelector(".popup__input_info_about"),o=document.querySelector(".popup__form_type_edit"),i=document.querySelector(".popup__form_type_add"),u=(i.querySelector(".popup__input_place_name"),i.querySelector(".popup__input_img_link"),document.querySelector(".popup_type_photo")),a=(u.querySelector(".popup__photo"),u.querySelector(".popup__caption"),document.querySelector("#card-template").content,{formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"});function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,s(n.key),n)}}function s(e){var t=function(e,t){if("object"!==c(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===c(t)?t:String(t)}var f=function(){function e(t,r,n,o,i){var u,a,c,l=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),u=this,c=function(){l._cardElementLike.addEventListener("click",(function(){return l._Like()})),l._cardElementImg.addEventListener("click",(function(){return l._cardOpen(l._cardName,l._cardImage)})),l._userId===l._authorId?l._cardElementDeleteBtn.addEventListener("click",(function(){return l._cardDelete(l,l._cardId)})):l._cardElementDeleteBtn.remove()},(a=s(a="_setEventListenners"))in u?Object.defineProperty(u,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):u[a]=c,this._userId=n,this._cardId=o.cardId,this._authorId=o.authorId,this._card=t,this._cardName=this._card.name,this._cardImage=this._card.link,this._cardTemplate=r,this._cardOpen=i.handleCardOpen,this._cardDelete=i.handleCardDelete,this._putLike=i.handleCardLike,this._removeLike=i.handleCardDeleteLike}var t,r;return t=e,(r=[{key:"_cardClone",value:function(){return document.querySelector(this._cardTemplate).content.querySelector(".card").cloneNode(!0)}},{key:"_isCardLiked",value:function(){var e=this;return this._likeNum.find((function(t){return t._id===e._userId}))}},{key:"_Like",value:function(){this._isCardLiked()?this._removeLike(this._cardId):this._putLike(this._cardId)}},{key:"renderCard",value:function(){return this._cardElement=this._cardClone(),this._cardElementDeleteBtn=this._cardElement.querySelector(".card__delete"),this._cardElementImg=this._cardElement.querySelector(".card__img"),this._cardElementName=this._cardElement.querySelector(".card__name"),this._cardElementLike=this._cardElement.querySelector(".card__like"),this.numOfLikes=this._cardElement.querySelector(".card__like-num"),console.log(this._cardName),this._cardElementName.textContent=this._cardName,this._cardElementImg.src=this._cardImage,this._cardElementImg.alt=this._cardName,this.likeCard(this._card),this._setEventListenners(),this._cardElement}},{key:"cardDelete",value:function(){this._card.remove(),this._card=null}},{key:"likeCard",value:function(e){this._likeNum=e.likes,0===this._likeNum.length?this.numOfLikes.textContent="":this.numOfLikes.textContent=this._likeNum.length,this._isCardLiked()?this._cardElementLike.classList.add("card__like_active"):this._cardElementLike.classList.remove("card__like_active")}}])&&l(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==p(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===p(o)?o:String(o)),n)}var o}var d=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formElement=r,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonForm=this._formElement.querySelector(this._submitButtonSelector)}var t,r;return t=e,(r=[{key:"_showInputError",value:function(e,t){var r=this._formElement.querySelector(".".concat(e.id,"-error"));r.textContent=t,e.classList.add(this._inputErrorClass),r.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));t.textContent="",e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass)}},{key:"_isValideForBtn",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._isValideForBtn()?this.disabledBtn():(this._buttonForm.classList.remove(this._inactiveButtonClass),this._buttonForm.disabled=!1)}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){return t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"deleteErrors",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"disabledBtn",value:function(){this._buttonForm.classList.add(this._inactiveButtonClass),this._buttonForm.disabled=!0}},{key:"resetForm",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)})),this._toggleButtonState()}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&y(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function m(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==h(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==h(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===h(o)?o:String(o)),n)}var o}var v=function(){function e(t,r){var n=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=n,this._container=document.querySelector(r)}var t,r;return t=e,(r=[{key:"renderItems",value:function(e){e.forEach(this._renderer)}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&m(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function b(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==_(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==_(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===_(o)?o:String(o)),n)}var o}var S=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupSelector=document.querySelector(t),this._handleOverlayClick=this._handleOverlayClick.bind(this),this._handleEscClose=this._handleEscClose.bind(this)}var t,r;return t=e,(r=[{key:"_handleEscClose",value:function(){"Escape"===event.key&&this.close()}},{key:"_handleOverlayClick",value:function(e){(e.target.classList.contains("popup_opened")||e.target.classList.contains("popup__close"))&&this.close()}},{key:"open",value:function(){this._popupSelector.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupSelector.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){this._popupSelector.addEventListener("click",this._handleOverlayClick)}}])&&b(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function k(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==g(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==g(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===g(o)?o:String(o)),n)}var o}function w(){return w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=O(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},w.apply(this,arguments)}function E(e,t){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},E(e,t)}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&E(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=O(n);if(o){var r=O(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===g(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupDescription=t._popupSelector.querySelector(".popup__caption"),t._popupImage=t._popupSelector.querySelector(".popup__photo"),t}return t=u,(r=[{key:"open",value:function(e,t){this._popupDescription.textContent=e,this._popupImage.src=t,this._popupImage.alt=e,w(O(u.prototype),"open",this).call(this)}}])&&k(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(S);function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function L(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==j(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==j(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===j(o)?o:String(o)),n)}var o}function P(){return P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=T(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},P.apply(this,arguments)}function I(e,t){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},I(e,t)}function T(e){return T=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},T(e)}var q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&I(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=T(n);if(o){var r=T(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===j(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e,t){var r,n=t.callbackFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,e))._callbackFormSubmit=n,r._popupForm=r._popupSelector.querySelector(".popup__form"),r._inputList=Array.from(r._popupForm.querySelectorAll(".popup__input")),r._popupBtn=r._popupSelector.querySelector(".popup__button"),r._popupBtnText=r._popupBtn.textContent,r}return t=u,(r=[{key:"_getInputValues",value:function(){var e={};return this._inputList.forEach((function(t){e[t.name]=t.value})),e}},{key:"addSavingText",value:function(){this._popupBtn.textContent="Сохранение..."}},{key:"removeSavingText",value:function(){this._popupBtn.textContent=this._popupBtnText}},{key:"close",value:function(){P(T(u.prototype),"close",this).call(this),this._popupForm.reset()}},{key:"setEventListeners",value:function(){var e=this;P(T(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._callbackFormSubmit(e._getInputValues())}))}}])&&L(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(S);function A(e){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(e)}function B(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==A(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==A(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===A(o)?o:String(o)),n)}var o}var F=function(){function e(t){var r=t.userInfoName,n=t.userInfoAbout,o=t.userInfoAvatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(r),this._userAbout=document.querySelector(n),this._userAvatar=document.querySelector(o)}var t,r;return t=e,(r=[{key:"getUserInfo",value:function(){return{username:this._userName.textContent,about:this._userAbout.textContent}}},{key:"setUserInfo",value:function(e){var t=e.userName,r=e.userAbout;this._userName.textContent=t,this._userAbout.textContent=r}},{key:"setUserAvatar",value:function(e){this._userAvatar.src=e}}])&&B(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function x(e){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(e)}function D(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==x(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==x(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===x(o)?o:String(o)),n)}var o}var R=function(){function e(t){var r=t.link,n=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._link=r,this._headers=n}var t,r;return t=e,(r=[{key:"_getAnswerFromServer",value:function(e){return e.ok?e.json():Promise.reject("код ошибки: ".concat(e.status))}},{key:"getCardFromServer",value:function(){var e=this;return fetch("".concat(this._link,"/cards"),{headers:this._headers}).then((function(t){return e._getAnswerFromServer(t)}))}},{key:"addCardToServer",value:function(e){var t=this,r=e.name,n=e.link;return fetch("".concat(this._link,"/cards"),{headers:this._headers,method:"POST",body:JSON.stringify({name:r,link:n})}).then((function(e){return t._getAnswerFromServer(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._link,"/cards/").concat(e),{headers:this._headers,method:"DELETE"}).then((function(e){return t._getAnswerFromServer(e)}))}},{key:"getUserData",value:function(){var e=this;return fetch("".concat(this._link,"/users/me"),{headers:this._headers}).then((function(t){return e._getAnswerFromServer(t)}))}},{key:"sendUserData",value:function(e){var t=this;return fetch("".concat(this._link,"/users/me"),{headers:this._headers,method:"PATCH",body:JSON.stringify({name:e.name,about:e.about})}).then((function(r){return console.log(e),t._getAnswerFromServer(r)}))}},{key:"sendUserAvatar",value:function(e){var t=this;return fetch("".concat(this._link,"/users/me/avatar"),{headers:this._headers,method:"PATCH",body:JSON.stringify({avatar:e.avatar})}).then((function(e){return t._getAnswerFromServer(e)}))}},{key:"sendLikeCard",value:function(e){var t=this;return fetch("".concat(this._link,"/cards/").concat(e,"/likes"),{headers:this._headers,method:"PUT"}).then((function(e){return t._getAnswerFromServer(e)}))}},{key:"removeLikeCard",value:function(e){var t=this;return fetch("".concat(this._link,"/cards/").concat(e,"/likes"),{headers:this._headers,method:"DELETE"}).then((function(e){return t._getAnswerFromServer(e)}))}}])&&D(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function N(e){return N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},N(e)}function U(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==N(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==N(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===N(o)?o:String(o)),n)}var o}function V(){return V="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=z(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},V.apply(this,arguments)}function J(e,t){return J=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},J(e,t)}function z(e){return z=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},z(e)}var H=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&J(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=z(n);if(o){var r=z(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===N(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e,t){var r,n=t.callbackComfirm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,e))._submitBtn=r._popupSelector.querySelector(".popup__form"),r._callbackComfirm=n,r}return t=u,(r=[{key:"open",value:function(e,t){this._cardObject=e,this._cardId=t,V(z(u.prototype),"open",this).call(this)}},{key:"setEventListeners",value:function(){var e=this;this._submitBtn.addEventListener("submit",(function(t){t.preventDefault(),e._callbackComfirm(e._cardObject,e._cardId)})),V(z(u.prototype),"setEventListeners",this).call(this)}}])&&U(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(S);function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var $,G=new R({link:"https://mesto.nomoreparties.co/v1/cohort-69",headers:{authorization:"909736a2-d755-4350-99fb-d6f4431f5f44","Content-Type":"application/json"}}),K=new F({userInfoName:".profile__name",userInfoAbout:".profile__about",userInfoAvatar:".profile__avatar"}),Q=function(e){var t=new f(e,"#card-template",$,{cardId:e._id,authorId:e.owner._id},{handleCardOpen:function(e,t){W.open(e,t)},handleCardDelete:function(e,t){ne.open(e,t)},handleCardLike:function(e){G.sendLikeCard(e).then((function(e){t.likeCard(e)})).catch((function(e){console.log("Лайк неудался. Ошибка: ".concat(e))}))},handleCardDeleteLike:function(e){G.removeLikeCard(e).then((function(e){t.likeCard(e)})).catch((function(e){console.log("Убрать лайк не получилось. Ошибка: ".concat(e))}))}});return t.renderCard()},W=new C(".popup_type_photo");W.setEventListeners();var X=new v({renderer:function(e){X.addItem(Q(e))}},".elements");Promise.all([G.getUserData(),G.getCardFromServer()]).then((function(e){var t,r,n=(r=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,u,a=[],c=!0,l=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(a.push(n.value),a.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(t,r)||function(e,t){if(e){if("string"==typeof e)return M(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?M(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];$=o._id,K.setUserInfo({userName:o.name,userAbout:o.about}),X.renderItems(i.reverse()),K.setUserAvatar(o.avatar)})).catch((function(e){console.log("Ошибка, ".concat(e))}));var Y=new q(".popup_type_edit_avatar",{callbackFormSubmit:function(e){Y.addSavingText(),G.sendUserAvatar(e).then((function(e){K.setUserAvatar(e.avatar),Y.close()})).catch((function(e){console.log("Загрузка аватарки неуспешна. Ошибка: ".concat(e))})).finally((function(){Y.removeSavingText()}))}});Y.setEventListeners();var Z=new q(".popup_type_edit",{callbackFormSubmit:function(e){Z.addSavingText(),G.sendUserData(e).then((function(e){console.log(e),K.setUserInfo({userName:e.name,userAbout:e.about}),Z.close()})).catch((function(e){console.log("При редактировании профиля возникла ошибка, ".concat(e))})).finally((function(){Z.removeSavingText()}))}});Z.setEventListeners();var ee=new d(a,o);ee.enableValidation(),e.addEventListener("click",(function(){Z.open(),ee.resetForm(),ee.disabledBtn();var e=K.getUserInfo();r.value=e.username,n.value=e.about}));var te=new q(".popup_type_add",{callbackFormSubmit:function(e){te.addSavingText(),G.addCardToServer({name:e.name,link:e.link}).then((function(e){X.addItem(Q(e)),te.close()})).catch((function(e){console.log("Карта не добавлена. Ошибка: ".concat(e))})).finally((function(){te.removeSavingText()}))}});te.setEventListeners();var re=new d(a,i);re.enableValidation(),t.addEventListener("click",(function(){te.open(),re.resetForm(),re.disabledBtn()}));var ne=new H(".popup_type_card_delete",{callbackComfirm:function(e,t){G.cardDelete(t).then((function(){e.cardDelete(),ne.close()})).catch((function(e){console.log("Не удалось удалить. Ошибка: ".concat(e))}))}});ne.setEventListeners(),fetch("https://nomoreparties.co/v1/cohort-69/cards",{headers:{authorization:"909736a2-d755-4350-99fb-d6f4431f5f44","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log(e)}))})();