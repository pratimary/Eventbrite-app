/**
 * Created by pratima on 2/2/2016.
 */
(function($) {

    tpl = {

        // Hash of preloaded templates for the app
        templates: {},

        // Recursively pre-load all the templates for the app.
        // This implementation should be changed in a production environment. All the template files should be
        // concatenated in a single file.
        loadTemplates: function (names, callback) {

            var that = this;

            var loadTemplate = function (index) {
                var name = names[index];
                console.log('Loading template: ' + name);
                $.get('tpl/' + name + '.html', function (data) {
                    console.log('Loading template: ' + data[0]);
                    //data=data[0];
                    that.templates[name] = data;

                    index++;
                    if (index < names.length) {
                        loadTemplate(index);
                    } else {
                        callback();
                    }
                });
            }

            loadTemplate(0);

        },

        // Get template by name from hash of preloaded templates
        get: function (name) {
            //this.templates=this.templates[0];
           // console.log(this.templates["eventgrid"]);
            return this.templates[name];
        }

    };
})(jQuery);