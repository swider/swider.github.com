// Canvas & Shape Object
var 
	canvas = document.getElementById('stage'),
	ctx = canvas.getContext('2d'),
	shapes = new Array();
	shape = function(id, shapeType, x, y, width, height, radius, txt, color){
		shapes.push(this);
		this.drawShape(shapeType, x, y, width, height, radius, txt, color);
	},
	listShapes = function(){ alert(shapes); },
	logger = $("#console"),
	log = function(txt){ logger.append(txt+"<br />"); };
	
shape.prototype = {
	drawShape: function(shapeType, x, y, width, height, radius, txt, color){
		log("drawShape");
		switch(shapeType){
		  case 1: // Rectangle
				ctx.fillStyle = color;
				ctx.fillRect(x, y, width, height);
				log('--Rect : '+x+', '+y+', '+width+', '+height+', '+color);
				break;
			case 2: // Circle
				ctx.beginPath();
				ctx.arc(x, y, radius, 0, Math.PI*2, true); 
				ctx.closePath();
				ctx.fillStyle = color;
				ctx.fill();
				log('--Circ : '+x+', '+y+', '+width+', '+color);
				break;
			case 3: // Text
				ctx.fillStyle = color;
				ctx.font = 'italic 30px sans-serif';
				ctx.fillText(txt, x, y);
				log('--Text : '+x+', '+y+', \''+txt+'\', '+color);
				break;
			default:
				alert("You broke it.");
		}
	}
		
};

// Shape creation form
var
	frm_t = $("#frm_t"),
	frm_x = $("#frm_x"),
	frm_y = $("#frm_y"),
	frm_w = $("#frm_w"),
	frm_h = $("#frm_h"),
	frm_r = $("#frm_r"),
	frm_txt = $("#frm_txt"),
	frm_c = $("#frm_c"),
	frm_update = function(){
		log("Update form "+parseInt(frm_t.val()));
		$('.perams').hide();
		switch(parseInt(frm_t.val())){
			case 1: $('.rect').show(); break;
			case 2: $('.circ').show(); break;
			case 3: $('.txt').show(); break;
			default: alert("Ya broke it!");
		}
	};

frm_t.change(function(){ 
	frm_update(); 
});	
$('#designer').submit(function(){
	new shape("name", parseInt(frm_t.val()), parseInt(frm_x.val()), parseInt(frm_y.val()), parseInt(frm_w.val()), parseInt(frm_h.val()), parseInt(frm_r.val()), frm_txt.val(), frm_c.val());
	return false;
});
$('#clear').click(function(){
	canvas.width = canvas.width;
	log("clear");
});

canvas.addEventListener("click", function(e) { 
	frm_x.val(e.clientX-canvas.offsetLeft);
  frm_y.val(e.clientY-canvas.offsetTop); 
}, false);


// Init
frm_update();