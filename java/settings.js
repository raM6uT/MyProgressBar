let Numb = 0;
let Perc = 0;


$("#button-one").click(function() {
	console.log ("добавили 1%")
	Perc = 0;
	Numb = Numb + 1;
	Perc = Numb + "%";
	$("#myBar").width(Perc);	
	$(myBar).text(Perc);
	console.log (typeof(Perc),Perc);
})

$("#button-two").click(function() {
	console.log ("добавили 3%")
	Perc = 0;
	Numb = Numb + 3;
	Perc = Numb + "%";
	$("#myBar").width(Perc);	
	$(myBar).text(Perc);
	console.log (typeof(Perc),Perc);
})

$("#button-three").click(function() {
	console.log ("добавили 7%")
	Perc = 0;
	Numb = Numb + 7;
	Perc = Numb + "%";
	$("#myBar").width(Perc);
	$(myBar).text(Perc);	
	console.log (typeof(Perc),Numb);	
	mess;
})

function mess() {
	if (perc < 100) { 
		$("#dontStop").removeClass("d-none");
	}
	else $("#GoodNews").removeClass("d-none");
  }
