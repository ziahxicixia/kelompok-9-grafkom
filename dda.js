function dda(x1,y1,x2) {
	var dx = x2 - x1;
	var dy = y2 - y1;

	if ((dx)> (dy) ) {
		var step= (dx);
	}else{
		step=(dy);
	}

	var x_inc = dx / step;
    var y_inc = dy / step;

    for(var k=0; k<step;k++){
    	x1 += x_inc;
       	y1 += y_inc;
    }
	
}
console.log(dda(2,1,8,5))
