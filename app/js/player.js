Q.Sprite.extend('Player', {

    init: function(props) {

        props.sheet = 'Actor';

        this._super(props);

        // this.on('hit.sprite', function(collision) {

        //     if (collision.obj.isA('Enemy')) {

        //         Q.stageScene('endGame', 1, {
        //             label: 'You Died!'
        //         });

        //         this.destroy();

        //     }

        // });

        this.add('2d');

    },

    step: function(dt) {

        if (Q.inputs['up']) {

            this.p.vy = -PLAYER_SPEED;

        } else if (Q.inputs['down']) {

            this.p.vy = PLAYER_SPEED;

        } else {

            this.p.vy = 0;

        }

        if (Q.inputs['left']) {

            this.p.vx = -PLAYER_SPEED;

        } else if (Q.inputs['right']) {

            this.p.vx = PLAYER_SPEED;

        } else {

            this.p.vx = 0;

        }

    }

});
