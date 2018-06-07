var rysuj = 
{
kolor_obramowania:"rgb(0, 0, 0)",
kolor_wypelnienia:"rgb(0, 0, 0)",		
		elipse:function (x,y,szerokosc,glebokosc,kolor_obramowania,kolor_wypelnienia)
		{
			var canvas = document.getElementById('canvas');
				if (canvas.getContext) 
				{
					var ctx = canvas.getContext('2d');
					ctx.beginPath();
					ctx.moveTo(x, y);
					ctx.bezierCurveTo(x,y+glebokosc,x+szerokosc,y+glebokosc,x+szerokosc,y);
					ctx.moveTo(x, y);
					ctx.bezierCurveTo(x,y-glebokosc,x+szerokosc,y-glebokosc,x+szerokosc,y);
					ctx.stroke();
					ctx.lineWidth = 5;
					ctx.strokeStyle = kolor_obramowania;
					ctx.stroke();
					ctx.fillStyle = kolor_wypelnienia;
					ctx.fill();
				}
		},
		kolo:function (x,y,promien,kat1,kat2)
		{
			var canvas = document.getElementById('canvas');
				if (canvas.getContext)
				{
					var ctx = canvas.getContext('2d');
					ctx.beginPath();
					ctx.lineWidth = 2;
					ctx.arc(x,y,promien,kat1,kat2*Math.PI);
					ctx.stroke();
				}				
		}
}	
