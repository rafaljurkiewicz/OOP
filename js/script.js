/*
function Phone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
}
Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}

var iPhone6S = new Phone("Apple", 2250, "silver");
var SamsungGalaxyS6 = new Phone("Samsung Galaxy S6", 1750, "red");
var OnePlusOne = new Phone("OnePlus One", 1250, "black");

iPhone6S.printInfo();
SamsungGalaxyS6.printInfo();
OnePlusOne.printInfo();
*/

function Button(text) {
	this.text = text || 'Hello';
}

Button.prototype = {
	create: function() {
		var self = this;
		this.$element = $('<button>');
		this.$element.text(this.text);
		this.$element.click(function() {
			alert(self.text);
		});
		$('body').append(this.$element);
	}
}

var btn1 = new Button('Hello!');

btn1.create();