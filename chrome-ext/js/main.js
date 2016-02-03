

(function($) {



      var appview;
    $(document).ready(function() {
        tpl.loadTemplates(['eventgrid'], function () {
            console.log("tpl loaded");
            appview= new AppView();
        });

        $('#search-form').submit(function (ev) {
            var loc= $('#locationInput').val();




            OAuthInstance.fetch({
                data:{
                    "popular":"on",
                    "venue.city":loc,
                    "token":"PSQQB7WT4FWOB2RQYB6K",
                    "page": 1

                },
                success : function(collection, response, options) {
                    console.log(collection.models.length);
                    //console.log(response);
                    // console.log(options);
                    appview= new AppView();
                    if(collection.models.length!=0) {
                        $('#heading').html("Events in " + loc);
                    }else
                    {
                        $('#heading').html("No Events :/");
                    }
                    appview.render();
                    _.each(collection.models, function(model) {

                        //console.log(model.toJSON());
                    })
                },

                error: function (errorResponse) {
                    console.log(errorResponse)
                }
            });
            $('#locationInput').val('');


            return false;
        });


    });


})(jQuery);

/**
 * Created by pratima on 2/2/2016.
 */
