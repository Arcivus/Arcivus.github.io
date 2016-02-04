var app = app || {};

app.Food = Backbone.Model.extend({
	defaults:{
		name: '',
		weight:'0',
		kcal:'0'
	}
});

var FoodList = Backbone.Collection.extend({
	model: app.Food,

	localStorage: new Backbone.LocalStorage('foods-backbone'),

	calculateTotalKcal: function(){
		return this.reduce(function(result, food){
			return result + food.get('kcal')
		}, 0);
	}

});

app.Foods = new FoodList();