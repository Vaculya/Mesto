export default class UserInfo {
  constructor({userName, userAbout}){
    this._userName = userName;
    this._userAbout = userAbout;
  }

  getUserInfo(){
    this._oldName = document.querySelector(this._userName).textContent;
    this._oldAbout = document.querySelector(this._userAbout).textContent;

    this._oldInfo = {
      name : this._oldName,
      about : this._oldAbout
    };

    return this._oldInfo;
  }

  setUserInfo(userData){
    document.querySelector(this._userName).textContent = userData.name;
    document.querySelector(this._userAbout).textContent = userData.about;
  }
}
