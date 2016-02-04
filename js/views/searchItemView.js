var app = app || {};

app.SearchItemView = Backbone.View.extend({
	tagName: 'li',

	template: _.template($('#search-template').html()),

	events:{
		'click label': 'chooseItem',
		'mouseover label': 'highlightItem',
		'mouseout label': 'removeHighlight'
	},

	initialize: function(){
		this.listenTo(this.model, 'destroy', this.remove);
	},

	render: function(){
		this.$el.html(this.template(this.model.attributes));
		return this;
	},

	chooseItem: function(){
		$('#searchField').val(this.model.get('name'));
		$('#kcalPerHundred').attr('value', this.model.get('kcal'));
		$('#kcalPerHundred').val(this.model.get('kcal'));
		this.model.destroy();
	},

	highlightItem: function(){
		this.$el.css('background-color', '#AAD1D8');
	},

	removeHighlight: function(){
		this.$el.css('background-color', '#d4d5d6');
	}


});