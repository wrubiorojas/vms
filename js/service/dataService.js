define( [ 'app' ], function(app) {

    'use strict';

    // =======================================================================================
    // Consume JSON with user data
    // =======================================================================================
    app.service("dataUser", ["$resource", function($resource) {

        return $resource("data/data.json", {}, {
            query: {
                method: "GET",
                isArray: false
            }
        });

    }]);

});