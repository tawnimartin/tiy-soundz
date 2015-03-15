var Router = Backbone.Router.extend ({

	routes: {
		""						 : "loadGenre",
		"genre/:genre" : "loadGenre"
	},

	initialize: function() {

		//views

		this.headerView     	= new HeaderView();
		this.categoryNavView  = new CategoryNavView();
		this.tracks 					= new TrackCollection();
		this.tracksView 			= new TrackCollectionView({
			collection: this.tracks
		});
		this.searchView = new SearchView();

		//initial structure

		$(".header").html( this.headerView.render().el );
		//$(".main").html( this.categoryNavView .render().el );
		$(".main-container").html(this.tracksView.el);
		this.loadGenre("electronic");

		$(".play-show" ).css( "display", "block" );
		$(".pause-show" ).css( "display", "none" );

		$(".search").append(this.searchView.render().el);

		//listeners

		this.listenTo(this.categoryNavView, "link:click", function(options){
				switch(options.name) {
        case "rock":
          this.loadGenre(options.name);
        break;
        case "alternative":
          this.loadGenre(options.name);
        break;
        default:
          this.loadGenre(options.name);
        break;
      }
      this.navigate("genre/" + options.href);
    });
		

		this.listenTo(this.tracks, "reset", function() {
			this.tracksView.render();
		});

		this.listenTo(this.searchView, "search:data", function(options) {
			this.search(options.data);
		});
	},

	loadGenre: function(genre) {
		this.tracks.loadGenre(genre);
	},
	search: function(query) {
		this.tracks.search(query);
	}
});