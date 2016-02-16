var app = app || {};

app.PageListView = Backbone.View.extend({
	el: "#nutritionApp",

	events: {
		'click #addPage': 'newPage'
	},

	initialize: function(){
		this.listenTo(app.Pages, 'add', this.addOne);
		this.listenTo(app.Pages, 'reset', this.addAll);
		this.listenTo(app.Pages, 'all', this.render);
		this.listenTo(app.Foods, 'all', this.addAll);
		this.listenTo(app.Foods, 'all', this.render);

		app.Pages.fetch();
	},

	render: function(){
		this.$('#filters li a').removeClass('selected')
								  .filter('[href="#/' + app.FoodFilter + '"]')
								  .addClass('selected');

		if(!app.Pages.length){
			app.Pages.create();
		}
	},

	addOne: function(page){
		var view = new app.PageView({model: page});
		$('#filters').append(view.render().el);
	},

	addAll: function(){
		this.$('#filters').html('');
		app.Pages.each(this.addOne, this);
	},

	newPage: function(){
		if(app.Pages.length){
			var value = parseInt(app.Pages.last().get('title')) + 1;
			app.Pages.create({title: value});
		} else{
			app.Pages.create();
		}
	}
});
