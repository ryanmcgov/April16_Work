
function Character(name, race, role){
	this.name = $("input:text").val();
	this.race = race;
	this.role = role;

}


Character.prototype.answers = function(data) {
	var markup = "";
	

	$(":checked").each(function(){
		console.log($(this).val());
		markup += "<h1>" + data.name + "</h1>" + "<li>" + $(this).val() + "</li>";
		
		return markup;
	});
};

Character.prototype.playerSheet = function($el, data) {
	var playerMarkup = this.answers(data);
	$el.append(playerMarkup);

}













































