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


console.log('component is loaded');

window.onload = function() {

  var status = document.getElementById('status-message');
  var btn = document.getElementById('addPoint');
  // var btn = document.querySelector('#addPoint')

  user.initialize(status);
  btn.addEventListener('click', function() {
      user.updateScoreByOnePoint();
    });

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
    this.domElement = document.createElement('div');
    elementToAppendTo.appendChild(this.domElement);
    },

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

};
