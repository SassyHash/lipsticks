(function($) {

  window.Collection = Backbone.Model.extend({
    isFirstColor: function(index) {
      return index == 0;
    },
    isLastColor: function(index) {
      return index >= this.get('colors').length -1;
    },

    colorUrlAtIndex: function(index) {
      if (this.get("colors").length >= index) {
        return this.get("colors")[index].url;
      }

      return null;
    },
  });
  
  window.Collections = Backbone.Collection.extend({
    model: Collection,
    url: '/collections',
    
  });

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

  window.LibraryCollectionView = CollectionView.extend({

  });

  window.LibraryView = Backbone.View.extend({
    initialize: function() {
        _.bindAll(this, 'render');
        this.template = _.template($('#library-template').html());
        
    }
  });

})(jQuery);
