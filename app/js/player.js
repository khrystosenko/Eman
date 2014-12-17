Q.Sprite.extend('Player', {

    init: function(props) {

        props.sheet = 'Actor';

        this._super(props);

        this.on('hit.sprite', function(collision) {

            if (collision.obj.isA('Enemy')) {

                Q.stageScene('endGame', 1, {
                    label: 'You Died!'
                });

                this.destroy();

            }

        });

        this.add('stepControls');

    }

});
