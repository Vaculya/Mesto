export default class Section{
  //У класса Section нет своей разметки. Он получает разметку через функцию-колбэк и вставляет её в контейнер.
  constructor({items, renderer}, contanerSelector){
    this._items = items; // массив данных, которые нужно добавить на страницу при инициализации класса
    this._renderer = renderer; //функция, которая отвечает за создание и отрисовку данных на странице НО НЕ ВСТАВЛЯЕТ
    this._contanerSelector = contanerSelector; //селектор контейнера, в который нужно добавлять созданные элементы
  }

  renderItem(){
    if(Array.isArray(this._items)){  //если массив, то для каждого вызвать отрисовку this._renderer
      this._items.forEach(item => {
        this._renderer(item);
      });
    } else {
      this._renderer(this._items); //для item вызвать отрисовку this._renderer
    }
  }

  //принимает готовый DOM-элемент и добавляет его в контейнер.
  addItem(item){
    this._contanerSelector.prepend(item);
  }
}
























// export default class Section {
//   constructor({items, renderer}, containerSlector){
//     this._items = items;
//     this._renderer = renderer;
//     this._containerSelector = containerSlector;
//     // this._containerSelector = document.querySelector(containerSlector);
//   }

//   renderItems(){
//     // this._items.forEach((item) => {
//     //   this._renderer(item);
//     // });
//     if(Array.isArray(this._items)){
//       this._items.forEach((item) => {
//         this._renderer(item);
//         console.log(this._items);
//       });
//     } else{
//       this._renderer(this._items);
//     }
//   }

//   addItem(item){
//     this._containerSelector.append(item);
//   }
// }
