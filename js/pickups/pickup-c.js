define(
    [
        'require',
        'physicsjs',
        'js/pickups/pickup',
    ],
    function(
        require,
        Physics
    ){

        Physics.body('pickup-c', 'pickup', function( parent ){
            var ast1 = new Image();
            ast1.src = require.toUrl('images/pickupC.png');

            return {
                init: function( options ){
                    parent.init.call(this, options);

                    this.view = ast1;
                },
                collect: function (){
                   parent.collect.call(this, "constructionMaterials");
                }
            };
        });
    }
);