// CORE OF DOM MANIPULATION - BUILDING COMPONENTS
//
//
// var component = {
//   domElement: null,
//   initialize: function(selector) {
//     // create a dom element
//     this.domElement = document.createElement('div')
//     // attach it
//     selector.appendChild(this.domElement);
//   },
//   render: function(statusText) {
//     // update the dom element
//     this.domElement.innerHTML = statusText;
//   }
// }
console.log('javascript loaded');
window.onload = function () {
  console.log('page loaded');
  var body = document.getElementsByTagName('body')[0];
  var pony = 'http://i.ytimg.com/vi/nlYlNF30bVg/hqdefault.jpg';
  component.initialize(body);
  component.render(pony);
}

var component = {

  domElement: null,
  //use domSelector arg as location to append Created Element (image) with method .appendChild(arg [in this case 'img' tag])
  initialize: function(domSelector) {
    this.domElement = document.createElement('img');
    domSelector.appendChild(this.domElement);
  },
  render: function(imageSrc) {
    this.domElement.src = imageSrc;
  }

};
