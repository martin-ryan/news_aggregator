

console.log('component is loaded');

window.onload = function() {

//   // console.log('all files have been loaded, beep boop beep.');
// //
// // declare a selector named container
// // access that container via document.getElementById('name-of'id)
//
//   var container = document.getElementById('container');
//   var monsters = ['wreck-it-ralph','trump','frankenstein'];
//
//   for (var baddie in monsters) {
//     var li = document.createElement('li');
//     li.innerHTML = monsters[baddie];
//     container.appendChild(li);
//   }
//
//   var kittenImage = document.createElement('img');
//   //alt text (alt) - What is read out loud to blind viewers -> Text-to-Speech
//   kittenImage.alt = 'A cute random kitten';
//   kittenImage.id = 'kitten';
//   kittenImage.src = 'http://blog.colourfulrebel.com/en/wp-content/uploads/2015/06/Cute-Kittens-1-Wallpaper-HD.jpg';
//   container.appendChild(kittenImage);
//
//   //modify cuteness level of kitten
//   // querySelector - tags classes or IDS
//   var kitten = document.querySelector('#kitten');
//   kitten.src = 'http://www.pets.ie/pet_talk/wp-content/uploads/2013/07/cute-kitty-3.jpg';
//
//   var listItemsArray = document.getElementsByTagName('li');
//   // console.log(listItemsArray);
//
//   for (var li in listItemsArray) {
//     listItemsArray[li].innerHTML = 'I can haz champion???';
//   }

  var status = document.getElementById('status-message');
  var btn = document.getElementById('addPoint');
  // var btn = document.querySelector('#addPoint')

  //initialize our UI component
  user.initialize(status);
  btn.addEventListener('click', function() {
      user.updateScoreByOnePoint();
    });





  // bind events to a DOM element
  // var body = document.getElementsByTagName('body')[0];
  // // mouse events
  // //listen for events
  // body.addEventListener('click',function () {
  //   console.log('clicked');
  // });
  // // touch events
  // // touchstart - touchmove - touchend
  // // console.log(event);
  // body.addEventListener('touchstart', function (event) {
  //   console.log('touched');
  // });
  //
  // body.addEventListener('keyup',function(event) {
  //   //look for specific keys to be pressed ('enter' in this case)
  //   if (event.keyCode == 13) {
  //     console.log('why you press enter so much??');
  //   }
  // });
  //
  // create user interace component
  // the goal here is to create and Object
  // that can update itself and visually show that if needed

  // example 1 - user component

} // end window.onload

var user = {
  name: null,
  score: 0,
  domElement: null,
  //--------------------------------------------------------------------------

  initialize: function (elementToAppendTo) {
    if (this.name == null) {
      this.name = prompt('what is your name?');
    }
    // elementToAppendTo: document.selector for an individual element
    this.domElement = document.createElement('div');
    elementToAppendTo.appendChild(this.domElement);
    },
  // validate html to place in our DOM element
  //--------------------------------------------------------------------------

  render: function(innerHTML) {
    if (typeof(innerHTML) == 'string') {
      this.domElement.innerHTML = innerHTML;
    }
  },
  //--------------------------------------------------------------------------

  getName: function() {
    return this.name;
  },
  //--------------------------------------------------------------------------

  saveName: function(newName) {
    if (typeof(newName) == 'string' && newName.length > 0) {
      this.name = newName;
    } else {
      alert('you entered an incorrect or empty name');
    }
  },
  //--------------------------------------------------------------------------

  getScore: function() {
    return this.score;
  },
  updateScoreByOnePoint: function() {
    this.score += 1;
    var status = this.buildPlayerStatusString();
    this.render(status);
    return this.score;
  },
  buildPlayerStatusString: function() {
    return this.name + ': ' + this.score;
  }
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

};
