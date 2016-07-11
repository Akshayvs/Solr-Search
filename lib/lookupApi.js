'use strict';

var LookupApi;
module.exports = LookupApi = {
    init: function (server) {
        server.get('/getDoc/:key', function (request, response) {

            var searchKey = request.params.key; // primary key to search the DB
            var fields = request.params.fieldsRequested;
            var extractFields = fields ? fields.split(',') : [];



                console.log(searchKey)

                


            function callback(err, cbDoc, extractFields) {
                if (err) {
                    response.send(404);
                }
                else {
                    response.send(404);
                }
            }
        });
    },
}
