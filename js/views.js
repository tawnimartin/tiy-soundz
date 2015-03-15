var TrackView = Backbone.View.extend({

	template: 	JST["search_box"],
	events : {
      
      "click .play" : "buttonClick"
  },


  initialize: function() {

    this.listenTo(this.model, "stream:playing",     this.playing);
    this.listenTo(this.model, "stream:paused",    this.paused);

  },

	render: function() {

		var data = this.model.toJSON();
		data.duration = this.formatDuration(data.duration);
		data.title = this.shortenTitle(data.title);
		this.$el.html (
			this.template( data )
		);
		return this;
	},

	formatDuration: function(duration) {
		//convert the milliseconds to minutes
		duration = duration / 1000 / 60; // seconds // minutes
		//get mins and sec
		var minutes = Math.floor(duration);
		var seconds = Math.round((duration - minutes) * 60);
		//add a 0 if seconds is less than 10
		if (seconds < 10) {
			seconds = "0" + seconds.toString();
		}
		//combine the values
		duration = minutes.toString() + ":" + seconds.toString();
		return duration;
	},

	shortenTitle: function(title) {
		
   	if (title.length > 29) {
      return title.substring(0,29)+'...';
   		} else {
  		return title
		};
		return title;
		console.log(title);
	},

	paused: function() {

		var parent = this.$(".play").children();
		parent.children( ".play-show" ).css( "display", "block" );
		parent.children( ".pause-show" ).css( "display", "none" );
  },

  playing: function() {

		var parent = this.$(".play").children();
		parent.children( ".play-show" ).css( "display", "none" );
		parent.children( ".pause-show" ).css( "display", "block" );
  },

	buttonClick: function(e) {
		e.preventDefault();

		$btn = $(e.currentTarget);

    if( $btn.children().children( ".play-show" ).css( "display") == "block" ) {
    	$btn.css("background-color", "#855d54");
      this.model.play();
    }
    else if ( $btn.children().children( ".pause-show" ).css( "display") == "block" ) {
    	$btn.css("background-color", "#b39c85");
      this.model.pause();
    }

	}

});

var TrackCollectionView = Backbone.View.extend ({

	template: JST["track_collection"],

	render: function() {
		this.$el.html( this.template() );
		//rows
		var $tbody = this.$("div");
		this.collection.each(function(model){

			var view = new TrackView({model: model});
			$tbody.append(view.render().el);
		});
		return this;
	}
});

var HeaderView = Backbone.View.extend({
  template: JST["header"],
  render: function() {
    this.$el.html(this.template());
    return this;
  }
});

var CategoryNavView = Backbone.View.extend({
	  events: {
    "click a" : "onClick"
  },
  template: JST["category_nav"],
  render: function() {
    this.$el.html(this.template());
    return this;
  },
    onClick: function(e) {
    e.preventDefault();
    var name = this.$(e.currentTarget).data("name");
    var href = this.$(e.currentTarget).attr("href");

    this.trigger("link:click", {
      name: name, 
      href: href
      });
    }
});

var SearchView = Backbone.View.extend({
	template: JST["search"],
	events: {
		"submit" : "update"
	},

		render: function(query) {
		this.$el.html(this.template());
		return this;
	},

	update: function(e) {
		e.preventDefault();
		var data = this.$("form :input").val();
		console.log(data);

		this.trigger("search:data", {
      data: data
      });
    }

	
});
