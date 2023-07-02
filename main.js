(()=>{"use strict";document.querySelector(".elements");var e=document.querySelector(".profile__edit-btn"),t=(document.querySelector(".profile__add-btn"),document.querySelector(".popup_type_edit"),document.querySelector(".popup_type_add"),document.querySelectorAll(".popup__close"),document.querySelector(".profile__name"),document.querySelector(".profile__about"),document.querySelectorAll(".popup__form"),document.querySelector(".popup__input_info_name")),r=document.querySelector(".popup__input_info_about"),n=document.querySelector(".popup__form_type_edit"),o=document.querySelector(".popup__form_type_add"),i=(o.querySelector(".popup__input_place_name"),o.querySelector(".popup__input_img_link"),document.querySelector(".popup_type_photo"));function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,c(n.key),n)}}function c(e){var t=function(e,t){if("object"!==u(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===u(t)?t:String(t)}i.querySelector(".popup__photo"),i.querySelector(".popup__caption"),document.querySelector("#card-template").content;var l=function(){function e(t,r,n,o,i){var u,a,l,s=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),u=this,l=function(){s._cardElementLike.addEventListener("click",(function(){return s._Like()})),s._cardElementImg.addEventListener("click",(function(){return s._cardOpen(s._cardName,s._cardImage)})),s._userId===s._authorId?s._cardElementDeleteBtn.addEventListener("click",(function(){return s._cardDelete(s,s._cardId)})):s._cardElementDeleteBtn.remove()},(a=c(a="_setEventListenners"))in u?Object.defineProperty(u,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):u[a]=l,this._userId=n,this._cardId=o.cardId,this._authorId=o.authorId,this._card=t,this._cardName=this._card.name,this._cardImage=this._card.link,this._cardTemplate=r,this._cardOpen=i.handleCardOpen,this._cardDelete=i.handleCardDelete,this._putLike=i.handleCardLike,this._removeLike=i.handleCardDeleteLike}var t,r;return t=e,(r=[{key:"_cardClone",value:function(){return document.querySelector(this._cardTemplate).content.querySelector(".card").cloneNode(!0)}},{key:"_isCardLiked",value:function(){var e=this;return this._likeNum.find((function(t){return t._id===e._userId}))}},{key:"_Like",value:function(){this._isCardLiked()?this._removeLike(this._cardId):this._putLike(this._cardId)}},{key:"renderCard",value:function(){return this._cardElement=this._cardClone(),this._cardElementDeleteBtn=this._cardElement.querySelector(".card__delete"),this._cardElementImg=this._cardElement.querySelector(".card__img"),this._cardElementName=this._cardElement.querySelector(".card__name"),this._cardElementLike=this._cardElement.querySelector(".card__like"),this.numOfLikes=this._cardElement.querySelector(".card__like-num"),console.log(this._cardName),this._cardElementName.textContent=this._cardName,this._cardElementImg.src=this._cardImage,this._cardElementImg.alt=this._cardName,this.likeCard(this._card),this._setEventListenners(),this._cardElement}},{key:"cardDelete",value:function(){this._card.remove(),this._card=null}},{key:"likeCard",value:function(e){this._likeNum=e.likes,0===this._likeNum.length?this.numOfLikes.textContent="":this.numOfLikes.textContent=this._likeNum.length,this._isCardLiked()?this._cardElementLike.classList.add("cards__like_active"):this._cardElementLike.classList.remove("cards__like_active")}}])&&a(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==s(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===s(o)?o:String(o)),n)}var o}var p=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formElement=r,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonForm=this._formElement.querySelector(this._submitButtonSelector)}var t,r;return t=e,(r=[{key:"_showInputError",value:function(e,t){var r=this._formElement.querySelector(".".concat(e.id,"-error"));r.textContent=t,e.classList.add(this._inputErrorClass),r.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));t.textContent="",e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass)}},{key:"_isValideForBtn",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._isValideForBtn()?this.disabledBtn():(this._buttonForm.classList.remove(this._inactiveButtonClass),this._buttonForm.disabled=!1)}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){return t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"deleteErrors",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"disabledBtn",value:function(){this._buttonForm.classList.add(this._inactiveButtonClass),this._buttonForm.disabled=!0}},{key:"resetForm",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)})),this._toggleButtonState()}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&f(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==y(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==y(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===y(o)?o:String(o)),n)}var o}var h=function(){function e(t,r){var n=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=n,this._container=document.querySelector(r)}var t,r;return t=e,(r=[{key:"renderItems",value:function(e){e.forEach(this._renderer)}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&d(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function v(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==m(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==m(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===m(o)?o:String(o)),n)}var o}var _=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupSelector=document.querySelector(t),this._handleOverlayClick=this._handleOverlayClick.bind(this),this._handleEscClose=this._handleEscClose.bind(this)}var t,r;return t=e,(r=[{key:"_handleEscClose",value:function(){"Escape"===event.key&&this.close()}},{key:"_handleOverlayClick",value:function(e){(e.target.classList.contains("popup_opened")||e.target.classList.contains("popup__close"))&&this.close()}},{key:"open",value:function(){this._popupSelector.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupSelector.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){this._popupSelector.addEventListener("click",this._handleOverlayClick)}}])&&v(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function S(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==b(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==b(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===b(o)?o:String(o)),n)}var o}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},g.apply(this,arguments)}function k(e,t){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},k(e,t)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(n);if(o){var r=w(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===b(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupDescription=t._popupSelector.querySelector(".popup__caption"),t._popupImage=t._popupSelector.querySelector(".popup__photo"),t}return t=u,(r=[{key:"open",value:function(e,t){this._popupDescription.textContent=e,this._popupImage.src=t,this._popupImage.alt=e,g(w(u.prototype),"open",this).call(this)}}])&&S(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(_);function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function C(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==O(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==O(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===O(o)?o:String(o)),n)}var o}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=L(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},j.apply(this,arguments)}function P(e,t){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},P(e,t)}function L(e){return L=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},L(e)}var I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&P(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=L(n);if(o){var r=L(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===O(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e,t){var r,n=t.callbackFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,e))._callbackFormSubmit=n,r._popupForm=r._popupSelector.querySelector(".popup__form"),r._inputList=Array.from(r._popupForm.querySelectorAll(".popup__input")),r._popupBtn=r._popupSelector.querySelector(".popup__button"),r._popupBtnText=r._popupBtn.textContent,r}return t=u,(r=[{key:"_getInputValues",value:function(){var e={};return this._inputList.forEach((function(t){e[t.name]=t.value})),e}},{key:"addSavingText",value:function(){this._popupBtn.textContent="Сохранение..."}},{key:"removeSavingText",value:function(){this._popupBtn.textContent=this._popupBtnText}},{key:"close",value:function(){j(L(u.prototype),"close",this).call(this),this._popupForm.reset()}},{key:"setEventListeners",value:function(){var e=this;j(L(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._callbackFormSubmit(e._getInputValues())}))}}])&&C(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(_);function T(e){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}function q(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==T(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==T(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===T(o)?o:String(o)),n)}var o}var A=function(){function e(t){var r=t.userInfoName,n=t.userInfoAbout,o=t.userInfoAvatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(r),this._userAbout=document.querySelector(n),this._userAvatar=document.querySelector(o)}var t,r;return t=e,(r=[{key:"getUserInfo",value:function(){return{username:this._userName.textContent,about:this._userAbout.textContent}}},{key:"setUserInfo",value:function(e){var t=e.userName,r=e.userAbout;this._userName.textContent=t,this._userAbout.textContent=r}},{key:"setUserAvatar",value:function(e){this._userAvatar.src=e}}])&&q(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function B(e){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B(e)}function x(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==B(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==B(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===B(o)?o:String(o)),n)}var o}var F=function(){function e(t){var r=t.link,n=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._link=r,this._headers=n}var t,r;return t=e,(r=[{key:"_getAnswerFromServer",value:function(e){return e.ok?e.json():Promise.reject("код ошибки: ".concat(e.status))}},{key:"getCardFromServer",value:function(){var e=this;return fetch("".concat(this._link,"/cards"),{headers:this._headers}).then((function(t){return e._getAnswerFromServer(t)}))}},{key:"addCardToServer",value:function(e){var t=this,r=e.name,n=e.link;return fetch("".concat(this._link,"/cards"),{headers:this._headers,method:"POST",body:JSON.stringify({name:r,link:n})}).then((function(e){return t._getAnswerFromServer(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._link,"/cards/").concat(e),{headers:this._headers,method:"DELETE"}).then((function(e){return t._getAnswerFromServer(e)}))}},{key:"getUserData",value:function(){var e=this;return fetch("".concat(this._link,"/users/me"),{headers:this._headers}).then((function(t){return e._getAnswerFromServer(t)}))}},{key:"sendUserData",value:function(e){var t=this;return fetch("".concat(this._link,"/users/me"),{headers:this._headers,method:"PATCH",body:JSON.stringify({name:e.username,about:e.about})}).then((function(e){return console.log(e),t._getAnswerFromServer(e)}))}},{key:"sendUserAvatar",value:function(e){var t=this;return fetch("".concat(this._link,"/users/me/avatar"),{headers:this._headers,method:"PATCH",body:JSON.stringify({avatar:e.avatar})}).then((function(e){return t._getAnswerFromServer(e)}))}},{key:"sendLikeCard",value:function(e){var t=this;return fetch("".concat(this._link,"/cards/").concat(e,"/likes"),{headers:this._headers,method:"PUT"}).then((function(e){return t._getAnswerFromServer(e)}))}},{key:"removeLikeCard",value:function(e){var t=this;return fetch("".concat(this._link,"/cards/").concat(e,"/likes"),{headers:this._headers,method:"DELETE"}).then((function(e){return t._getAnswerFromServer(e)}))}}])&&x(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function R(e){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R(e)}function D(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==R(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==R(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===R(o)?o:String(o)),n)}var o}function N(){return N="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=V(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},N.apply(this,arguments)}function U(e,t){return U=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},U(e,t)}function V(e){return V=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},V(e)}var J=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&U(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=V(n);if(o){var r=V(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===R(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e,t){var r,n=t.callbackComfirm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,e))._submitBtn=r._popupSelector.querySelector(".popup__form"),r._callbackComfirm=n,r}return t=u,(r=[{key:"open",value:function(e,t){this._cardObject=e,this._cardId=t,N(V(u.prototype),"open",this).call(this)}},{key:"setEventListeners",value:function(){var e=this;this._submitBtn.addEventListener("submit",(function(t){t.preventDefault(),e._callbackComfirm(e._cardObject,e._cardId)})),N(V(u.prototype),"setEventListeners",this).call(this)}}])&&D(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(_);function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var H,M=new F({link:"https://mesto.nomoreparties.co/v1/cohort-69",headers:{authorization:"909736a2-d755-4350-99fb-d6f4431f5f44","Content-Type":"application/json"}}),$=new A({userInfoName:".profile__name",userInfoAbout:".profile__about",userInfoAvatar:".profile__avatar"}),G=function(e){var t=new l(e,"#card-template",H,{cardId:e._id,authorId:e.owner._id},{handleCardOpen:function(e,t){K.open(e,t)},handleCardDelete:function(e,t){Q.open(e,t)},handleCardLike:function(e){M.sendLikeCard(e).then((function(e){t.likeCard(e)})).catch((function(e){console.log("Лайк неудался. Ошибка: ".concat(e))}))},handleCardDeleteLike:function(e){M.removeLikeCard(e).then((function(e){t.likeCard(e)})).catch((function(e){console.log("Убрать лайк не получилось. Ошибка: ".concat(e))}))}});return t.renderCard()},K=new E(".popup_type_photo");K.setEventListeners();var Q=new J(".popup_type_card_delete",{callbackComfirm:function(e,t){M.deleteCard(t).then((function(){e.deleteCard(),Q.close()})).catch((function(e){console.log("При удалении карточки возникла ошибка, ".concat(e))}))}});Q.setEventListeners();var W=new h({renderer:function(e){W.addItem(G(e))}},".elements");Promise.all([M.getUserData(),M.getCardFromServer()]).then((function(e){var t,r,n=(r=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,u,a=[],c=!0,l=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(a.push(n.value),a.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(t,r)||function(e,t){if(e){if("string"==typeof e)return z(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?z(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];H=o._id,$.setUserInfo({userName:o.name,userAbout:o.about}),W.renderItems(i.reverse()),$.setUserAvatar(o.avatar)})).catch((function(e){console.log("Ошибка, ".concat(e))}));var X=new I(".popup_type_edit_avatar",{callbackFormSubmit:function(e){X.addSavingText(),M.sendUserAvatar(e).then((function(e){$.setUserAvatar(e.avatar),X.close()})).catch((function(e){console.log("Загрузка аватарки неуспешна. Ошибка: ".concat(e))})).finally((function(){X.removeSavingText()}))}});X.setEventListeners();var Y=new I(".popup_type_edit",{callbackFormSubmit:function(e){Y.addSavingText(),M.sendUserData(e).then((function(e){console.log(e),$.setUserInfo({userName:e.name,userAbout:e.about}),Y.close()})).catch((function(e){console.log("При редактировании профиля возникла ошибка, ".concat(e))})).finally((function(){Y.removeSavingText()}))}});Y.setEventListeners();var Z=new p({formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},n);Z.enableValidation(),e.addEventListener("click",(function(){Y.open(),Z.resetForm();var e=$.getUserInfo();t.value=e.username,r.value=e.about}));var ee=new I(".popup_type_add",{callbackFormSubmit:function(e){ee.addSavingText(),M.addCardToServer({name:e.name,link:e.link}).then((function(e){W.addItem(G(e)),ee.close()})).catch((function(e){console.log("Карта не добавлена. Ошибка: ".concat(e))})).finally((function(){ee.removeSavingText()}))}});ee.setEventListeners(),fetch("https://nomoreparties.co/v1/cohort-69/cards",{headers:{authorization:"909736a2-d755-4350-99fb-d6f4431f5f44","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log(e)}))})();