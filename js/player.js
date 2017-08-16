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
    // re-draw the score text
    ctx.fillText("Score: "+ player.score, 10, 575);
    ctx.font='20px Verdana';
    ctx.fillStyle='white';
};

//move the player
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


// Place the player object in a variable called player
var player = new player(200, 400);