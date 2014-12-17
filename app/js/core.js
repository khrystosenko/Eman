var Q = Quintus()
    .include('Sprites, Scenes, Input, 2D, Touch, UI, TMX')
    .setup('render-area', {
        maximize: true
    })
    .controls().touch();

var PLAYER_SPEED = 200;

Q.loadTMX('level1.tmx', function() {

    Q.stageScene('level1');

});
