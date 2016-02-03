/**
 * Created by pratima on 2/2/2016.
 */

    var OAuthInstance = new OAuth();

    var AppView = Backbone.View.extend({
        model: OAuthInstance,
        tagName: 'li',
        el: $('#events-container'),
        initialize: function () {
            _.bindAll(this, 'render');
            console.log("in appview");
            this.template = _.template(tpl.get('eventgrid'));


        },
        render: function () {
            var self = this;

            self.$el.html('');
            $(this.el).html(this.template({events: this.model.toJSON()}));

            return this;
        }
    });
