var Q = Quintus()
    .include('Sprites, Scenes, Input, 2D, Touch, UI')
    .setup('render-area')
    .controls().touch();

Q.gravityY = 0;

Q.Sprite.extend('Player', {

    init: function(p) {

        this._super(p, {
            sheet: 'player',
            x: 400,
            y: 300
        });

        this.add('2d');

        // this.on('hit.sprite', function(collision) {

        //     if (collision.obj.isA('Tower')) {

        //         Q.stageScene('endGame', 1, {
        //             label: 'You Won!'
        //         });

        //         this.destroy();

        //     }

        // });

    },

    step: function(dt) {

        if (Q.inputs['up']) {

            this.p.vy = -200;

        } else if (Q.inputs['down']) {

            this.p.vy = 200;

        } else {

            this.p.vy = 0;

        }

        if (Q.inputs['left']) {

            this.p.vx = -200;

        } else if (Q.inputs['right']) {

            this.p.vx = 200;

        } else {

            this.p.vx = 0;

        }

    }

});

Q.scene('level1', function(stage) {

    stage.collisionLayer(new Q.TileLayer({
        dataAsset: 'level.json',
        sheet: 'tiles'
    }));

    var player = stage.insert(new Q.Player());

    stage.add('viewport').follow(player);

});

Q.scene('endGame', function(stage) {

    var box = stage.insert(new Q.UI.Container({

        x: Q.width / 2,
        y: Q.height / 2,
        fill: 'rgba(0,0,0,0.5)'

    }));

    var button = box.insert(new Q.UI.Button({

        x: 0,
        y: 0,
        fill: '#CCCCCC',
        label: 'Play Again'

    }));

    var label = box.insert(new Q.UI.Text({

        x: 10,
        y: -10 - button.p.h,
        label: stage.options.label

    }));

    button.on('click', function() {

        Q.clearStages();
        Q.stageScene('level1');

    });

    box.fit(20);

});

Q.load('actor.png, level.json, tiles.png', function() {

    Q.sheet('tiles', 'tiles.png', {
        tilew: 32,
        tileh: 32
    });

    Q.sheet('player', 'actor.png', {
        tilew: 32,
        tileh: 32
    });

    Q.stageScene('level1');

});
