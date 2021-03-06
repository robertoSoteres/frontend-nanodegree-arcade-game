var GEM_LIST = ['images/Gem_Blue.png', 'images/Gem_Green.png', 'images/Gem_Orange.png'];
var ENEMIES_LIST = ['images/char-boy.png', 'images/char-cat-girl.png', 'images/char-horn-girl.png', 'images/char-pink-girl.png', 'images/char-princess-girl.png'];
var Y_POSITION = [60,145,234];
var TOTAL_GEMS = 3;
var TOTAL_ENEMIES = 5;
var UP_DOWN = 83;
var LEFT_RIGHT = 101;

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});