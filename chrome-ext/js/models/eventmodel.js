/**
 * Created by pratima on 2/2/2016.
 */

    var Event = Backbone.Model.extend({});

    var OAuth = Backbone.Collection.extend({

        //Specify REST URL
        url: 'https://www.eventbriteapi.com/v3/events/search/',
        model: Event,

        //Parse the response
        parse: function (response) {

            console.log("Inside Parse");


            //console.log(response);

            //return models
            return response.events;

        },

        initialize: function () {
            this.bind("reset", function (model, options) {
                console.log("Inside event");
                //console.log(model);

            });
        }


    });
