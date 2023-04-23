export default class UserInfo {
  constructor({userName, userAbout}){
    this._userName = userName;
    this._userAbout = userAbout;
    this._oldName = document.querySelector(this._userName);
    this._oldAbout = document.querySelector(this._userAbout);
  }

  getUserInfo(){
    this._oldNameInfo = this._oldName.textContent;
    this._oldAboutInfo = this._oldAbout.textContent;

    this._oldInfo = {
      name : this._oldNameInfo,
      about : this._oldAboutInfo
    };

    return this._oldInfo;
  }

  setUserInfo(userData){
    this._oldName.textContent = userData.name;
    this._oldAbout.textContent = userData.about;
  }
}
