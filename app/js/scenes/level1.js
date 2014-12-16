Q.scene('level1', function(stage) {

    stage.collisionLayer(new Q.TileLayer({
        dataAsset: 'level.json',
        sheet: 'tiles'
    }));

    var player = stage.insert(new Q.Player());

    var enemy = stage.insert(new Q.Enemy());

    stage.add('viewport').follow(player);

});
