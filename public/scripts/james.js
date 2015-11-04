console.log('component has loaded');
​
window.onload = function() {
  console.log('all files that this page needs have been loaded');
​
  // basic selectors
  // declare a selector named container
  // access that container via document.getElementById('name-of'id)
  var container = document.getElementById('container');
  console.log(container);
  var monsters = ['Wreck-it Ralph', 'The giraffe from Lion King SNES', 'Ganon'];
​
  for (var baddie in monsters) {
    // create a new dom element using document.createElement('name-of-tag');
    var li = document.createElement('li');
    console.log(li);
    // access and assign a property to my dom element
    li.innerHTML = monsters[baddie];
    // append it to a container using selector.appendChild(domElement)
    container.appendChild(li);
  }
​
  // now, we need to create an image!
  var kittenImage = document.createElement('img');
  // alt text (alt) - ADA compliancy text for the blind
  kittenImage.alt = 'A cute random kitten';
  kittenImage.id = 'kitten';
  // src = image source
  kittenImage.src = 'http://vignette3.wikia.nocookie.net/clubpenguinpookie/images/d/d0/Extremely-cute-kitten_large.jpg/revision/latest?cb=20140614000321';
  // append my element as a child to a selector
  container.appendChild(kittenImage);
​
  // modify the cuteness level of my kitten
  // create a new selector by querying the DOM
  // notice the use of CSS style selectors!
  // makes things easy to remember
  var kitten = document.querySelector('#kitten');
  kitten.src = 'http://seattletwist.com/wp-content/uploads/awesomely-cute-kitten-1500.jpg';
​
  var listItemsArray = document.getElementsByTagName('li');
  console.log(listItemsArray);
​
  for (var li in listItemsArray) {
    listItemsArray[li].innerHTML = 'We are the champions (my friend)';
  }
​
  var status = document.getElementById('status-message');
  var btn = document.getElementById('addPoint');
  // var btn = document.querySelector('#addPoint');
​
  // initialize our UI component
  user.initialize(status);
  // selector.addEventListener(eventType, function());
  btn.addEventListener('click', function() {
    user.updateScoreByOnePoint();
  });
​
  // bind events to a DOM element
  // var body = document.getElementsByTagName('body')[0];
  // // we need to add a listener for events to an element
  // // mouse event
  // body.addEventListener('click', function(event) {
  //   console.log(event);
  //   console.log('ow, y u click me bro?');
  // });
  // // touch events
  // body.addEventListener('touchstart', function(event) {
  //   // console.log(event);
  //   // touchstart
  //   // touchmove
  //   // touchend
  //   console.log('yo yo dude y u pokin me? wtf man');
  // });
  // // keyboard events
  // body.addEventListener('keyup', function(event) {
  //   // look for specific keys to be pressed
  //   if (event.keyCode == 13) {
  //     console.log('y u press enter so much yo?');
  //   }
  //   console.log(event.keyCode);
  // });
​
} // end window.onload
​
​
// create a user interface component!
// the goal here is to create an Object
// that can update itself
// and visually show that if needed
​
// ex #1: user component
var user = {
  name: null,
  score: 0,
  domElement: null,
  // elementToAppendTo: document.selector for an indivual element
  initialize: function(elementToAppendTo) {
    if (this.name == null) {
      this.name = prompt('What is your name?');
    }
    this.domElement = document.createElement('div');
    elementToAppendTo.appendChild(this.domElement);
    console.log('initialize: complete');
  },
  // innerHTM: valid html to place in our domElement
  render: function(innerHTML) {
    if (typeof(innerHTML) == 'string') {
      this.domElement.innerHTML = innerHTML;
    }
  },
  buildPlayerStatusString: function() {
    return this.name + ': ' + this.score;
  },
  getName: function() {
    return this.name;
  },
  saveName: function(newName) {
    if (typeof(newName) == 'string' && newName.length > 0) {
      this.name = newName;
    } else {
      alert('You entered an incorrect or empty name');
    }
  },
  getScore: function() {
    return this.score;
  },
  updateScoreByOnePoint: function() {
    this.score = this.score + 1;
    var status = this.buildPlayerStatusString();
    this.render(status);
    return this.score;
  }
};
