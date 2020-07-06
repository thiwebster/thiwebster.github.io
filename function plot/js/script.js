var parameters={
	target:"#myFunction",
	data:[{
		fn:'sin(x)',
		color:'red',

	}],
	grid:true,
	yaxis:{domain:[-1,1]},
	xaxis: { domain:[0,2*Math.PI] }


};
 
function plot(){
	var color=document.querySelector('#color').value;
	parameters.data[0].color=color;
	var ymin=document.querySelector('#ymin').value;
    var ymax=document.querySelector('#ymax').value;
	parameters.yaxis.domain=[ymin,ymax]
	var xmin= document.querySelector('#xmin').value;
	var xmax= document.querySelector('#xmax').value;
	parameters.xaxis.domain = [xmin,xmax]
	var f=document.querySelector('#function').value;
	parameters.data[0].fn=f;
	functionPlot(parameters);
} 