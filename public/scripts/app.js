// CORE OF DOM MANIPULATION - BUILDING COMPONENTS
//
//
// var component = {
//   clickElement: null,
//   initialize: function(selector) {
//     // create a dom element
//     this.clickElement = document.createElement('div')
//     // attach it
//     selector.appendChild(this.clickElement);
//   },
//   render: function(statusText) {
//     // update the dom element
//     this.clickElement.innerHTML = statusText;
//   }
// }

window.onload = function () {

// new Navigation Button
var navBtnOne = new btn('nav1', 'feature_headline', 'div', 'New copy stuff 1111111!');
navBtnOne.initialize();
//
//
var navBtnTwo = new btn('nav2', 'feature_headline', 'div', 'New copy stuff 2222222!');
navBtnTwo.initialize();

console.log(navBtnOne);

console.log(navBtnTwo);

//
var navBtn3 = new btn('nav3', 'feature_headline', 'div', 'New copy stuff 3333333!');
navBtn3.initialize();
//
//
var navBtn4 = new btn('nav4', 'feature_headline', 'div', 'New copy stuff 444444!');
navBtn4.initialize();
//
//
var navBtn5 = new btn('nav5', 'feature_headline', 'div', 'New copy stuff 555555!');
navBtn5.initialize();


} // end of window.onload



//---------------------------------------------------------------//
//  COMPONENTS
//
//  Navigation Button CONSTRUCTOR
//
function btn(clickElement, replaceElement, container, newContent) {

  this.clickElement = document.getElementById(clickElement);
  this.replaceElement = document.getElementById(replaceElement);
  this.container = document.createElement(container);
  this.newContent = newContent;

  this.initialize = function() {
    var self = this;
    this.clickElement.addEventListener('click', function () {
      self.render();
    });
  };
// need to find out why this.newContent is the same for every instance
  this.render = function() {
    console.log(this.newContent);
    var replaceContent = this.newContent;
    console.log(this.replaceContent);
    if (this.replaceElement.firstChild != null) {
      this.replaceElement.removeChild(this.replaceElement.firstChild);
    }
    this.replaceElement.appendChild(this.container);
    this.replaceElement.innerHTML = replaceContent;
  }
}


//
// function LoadInHtml(wrapper) {
//
//   this.emptyTag = null;
//   this.wrapper = wrapper;
//   this.initialize = function() {
//     this.emptyTag = document.createElement('div');
//     this.wrapper.appendChild(emptyTag);
//   };
//   this.render = function(htmlToLoadIn) {
//     this.wrapper.innerHTML = htmlToLoadIn;
//   }
// }

// var component = {
//   clickElement: null,
//   initialize: function(selector) {
//     // create a dom element
//     this.clickElement = document.createElement('div');
//     // attach it
//     selector.appendChild(this.clickElement);
//   },
//   render: function(statusText) {
//     // update the dom element
//     this.clickElement.innerHTML = statusText;
//   }
// };

//
//
// var navButton = {
//
//   clickElement: null,
// //--------------------------------------------------------------//
//   initialize: function(wrapper,siteSection) {
//     this.clickElement = document.createElement('div');
//     wrapper.appendChild(this.clickElement);
//     this.clickElement.addEventListener('click', function() {
//       //call render function with section html I want to put into 'this.clickElement'
//       this.render(siteSection);
//     });
//   },
// //--------------------------------------------------------------//
//   render: function(siteSection) {
//     this.clickElement.innerHTML = siteSection;
//   },
// }
