// Q.Sprite.extend('Enemy', {

//     init: function(p) {

//         this._super(p, {
//             sheet: 'enemy',
//             x: 600,
//             y: 200
//         });

//     },

//     step: function(dt) {

//         var player = Q('Player').first();

//         if (player) {

//             this.p.vx = player.p.x > this.p.x ? PLAYER_SPEED * 0.3 : -PLAYER_SPEED * 0.3;
//             this.p.vy = player.p.y > this.p.y ? PLAYER_SPEED * 0.3 : -PLAYER_SPEED * 0.3;

//         }

//     }

// });
