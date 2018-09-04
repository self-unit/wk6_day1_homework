const issMurda = {
  murderer: 'Ja Rule',
  weapon: 'Beef Jerky',
  location: 'Poolside'
};

const mutateMurda = function() {
  issMurda.location = 'Juice-bar';

  let jallAintGonBelieveDis = function(location) {
    if (issMurda.location === location) {
      issMurda.muderer = 'Capitain Kirk'
    }
  }

  jallAintGonBelieveDis('Juice-Bar');
}

const changeWeapon = function() {
  if (issMurda.weapon === 'Beef Jerky') {
    issMurda.weapon = 'Sammo Hung'
  }
}

const declareMurderer = function() {
  return `The murder was committed at the ${issMurda.location} by ${issMurda.murderer} with ${issMurda.weapon}.`;
}

mutateMurda('Beef-Jerky');
changeWeapon();
const verdict = declareMurderer();
console.log(verdict);
