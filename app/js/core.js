var Q = Quintus()
    .include('Sprites, Scenes, Input, 2D, Touch, UI')
    .setup('render-area', {
        maximize: true
    })
    .controls().touch();

Q.gravityY = 0;

var PLAYER_SPEED = 200;

Q.load('actor.png, level.json, tiles.png, enemy.png', function() {

    Q.sheet('tiles', 'tiles.png', {
        tilew: 32,
        tileh: 32
    });

    Q.sheet('player', 'actor.png', {
        tilew: 32,
        tileh: 32
    });

    Q.sheet('enemy', 'enemy.png', {
        tilew: 32,
        tileh: 32
    });

    Q.stageScene('level1');

});
