Q.scene('level1', function(stage) {

    // stage.collisionLayer(new Q.TileLayer({
    //     dataAsset: 'level.json',
    //     sheet: 'tiles'
    // }));

    Q.stageTMX('level1.tmx', stage);

    stage.add('viewport').follow(Q('Player').first());

});
