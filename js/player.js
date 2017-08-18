// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y) {
    this.speed = 100;
    this.x = x;
    this.y = y;
    this.score = 0;
    this.sprite = 'images/enemy-bug.png';
};

// update the location
Player.prototype.update = function() {
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
        this.addPoints();        
    }
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    // re-draw the score text
    ctx.fillText("Score: "+ this.score, 10, 575);
    ctx.font='20px Verdana';
    ctx.fillStyle='white';
};

//move the Player
Player.prototype.handleInput = function(allowedKey) {
    switch (allowedKey) {
        case 'up':
            this.y -= upDown;
            break;
        case 'down':
            this.y += upDown;
            break;
        case 'left':
            this.x -= leftRight;
            break;
        case 'right':
            this.x += leftRight;
            break;
    }
};

//when the Player and the enemies have a collision
Player.prototype.reset = function() {
    //reset Player position
    this.x = 200;
    this.y = 400;
    //reset score
    this.score = 0;
};

// Add points to the score
Player.prototype.addPoints = function(){
    // Add 100 points to the Player score
    this.score += 100;
    totalEnemies += 1;
    // clear a rectangle over the score text
    ctx.clearRect(1, 580, 600, 20); 
};


// Place the Player object in a variable called player
var player = new Player(200, 400);