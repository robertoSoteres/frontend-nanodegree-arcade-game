// Enemies our player must avoid
var Enemy = function(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

    //Setting the Enemy initial location (you need to implement)
    this.x = x;
    this.y = y;

    //Setting the Enemy speed (you need to implement)
    this.speed = 100 + Math.floor(Math.random() * 150);

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;
    if (this.x > 505) {
        this.x = 1;
    }

    // Control the collision of the bug with the player
    for (var i = 0; i < allEnemies.length; i++) {
        if (player.x < allEnemies[i].x + 75 && player.x + 65 > allEnemies[i].x && player.y < allEnemies[i].y + 50 && 70 + player.y > allEnemies[i].y) {
            player.reset();
        };
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


var gems = function(x,y){
    this.speed = 50 + Math.floor(Math.random() * 150);
    this.sprite = 'images/Gem_Orange.png';
    this.x = x;
    this.y = y;
};

gems.prototype.update = function(dt) {
    this.x += this.speed * dt;
    if (this.x > 505) {
        this.x = 1;
    }
    
    // Control the collision of the gem with the player
    for (var i = 0; i < allGems.length; i++) {
        if (player.x < allGems[i].x + 75 && player.x + 65 > allGems[i].x && player.y < allGems[i].y + 50 && 70 + player.y > allGems[i].y) {
            player.score += 50;
            this.x = 1;
        };
    }
};

gems.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var player = function(x, y) {
    this.speed = 100;
    this.x = x;
    this.y = y;
    this.score = 0;
    this.sprite = 'images/char-horn-girl.png';
    this.playerList = ['images/char-cat-girl.png', 'images/char-horn-girl.png', 'images/char-boy.png', 'images/char-pink-girl.png', 'images/char-princess-girl.png'];
};

player.prototype.update = function() {
    if (this.x > 402) {
        this.x = 402;
    }
    if (this.x < 0) {
        this.x = 0;
    }
    if (this.y > 400) {
        this.y = 400;
    }
    if (this.y < 35) {
        this.y = 400;
        this.x = 200;
        player.addPoints();
        
    }
};

player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    ctx.fillText("Score: "+ player.score, 10, 575); // re-draw the score text
    ctx.font='20px Verdana';
    ctx.fillStyle='white';
};

player.prototype.handleInput = function(allowedKey) {
    switch (allowedKey) {
        case 'up':
            this.y -= 83;
            break;
        case 'down':
            this.y += 83;
            break;
        case 'left':
            this.x -= 101;
            break;
        case 'right':
            this.x += 101;
            break;
    }
};

player.prototype.reset = function() {
    //reset player position
    player.x = 200;
    player.y = 400;
    
    //reset score
    this.score = 0;
};

player.prototype.addPoints = function(){
    // Add 100 points to the player score
    this.score += 100;    
    // clear a rectangle over the score text
    ctx.clearRect(1, 580, 600, 20); 
};

// Now instantiate your objects.
var bug1 = new Enemy(100, 60);
var bug2 = new Enemy(0, 234);
var bug3 = new Enemy(300, 145);
// Place all enemy objects in an array called allEnemies
var allEnemies = [bug1, bug2, bug3];

// Place the player object in a variable called player
var player = new player(200, 400);
var gem1 = new gems(100, 60);
var gem2 = new gems(0, 234);
var gem3 = new gems(300, 145);
var allGems = [gem1, gem2, gem3];

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