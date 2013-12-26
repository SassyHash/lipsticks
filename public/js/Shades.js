(function($) {

  window.Collection = Backbone.Model.extend({});
  window.CollectionView = Backbone.View.extend({
    tagName: "li",
    className: "collection",
    initialize: function() {
      _.bindAll(this, 'render');
      this.model.bind('change', this.render);
      this.template = _.template($('#collection-template').html());
    },
    render    : function() {
      var renderedContent = this.template(this.model.toJSON());
      $(this.el).html(renderedContent);
      return this;
    } 

  });

})(jQuery);
