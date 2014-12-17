Q.scene('level1', function(stage) {

    Q.stageTMX('level1.tmx', stage);

    stage.add('viewport').follow(Q('Player').first());

});
