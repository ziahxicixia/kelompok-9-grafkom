function dda(x1,y1,x2,y2) {
	var dx = x2 - x1;
	var dy = y2 - y1;

	if (Math.abs(dx)> Math.abs(dy) ) {
		var step= Math.abs(dx);
	}else{
		step=Math.abs(dy);
	}

		var x_inc = dx / step;
        var y_inc = dy / step;
        var result = [];

        for(var k=0; k<step;k++){
        	result.push([ Math.round(x1), Math.round(y1) ]);
        	 x1 += x_inc;
       		 y1 += y_inc;
        }
        return result;
	
}
console.log(dda(2,1,8,5));
