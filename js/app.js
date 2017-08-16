// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.

var gemList = ['images/Gem_Blue.png', 'images/Gem_Green.png', 'images/Gem_Orange.png'];
var playerList = ['images/char-boy.png', 'images/char-cat-girl.png', 'images/char-horn-girl.png', 'images/char-pink-girl.png', 'images/char-princess-girl.png'];
var yPosition = [60,145,234];
var totalGems = 3;
var totalEnemies = 5;
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});