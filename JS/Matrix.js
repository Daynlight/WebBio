var canvas = document.getElementById('Matrix');
var context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
var latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var nums = '0123456789';

var alphabet = katakana + latin + nums;

var fontSize = 16;
var columns = canvas.width/fontSize;

var rainDrops = [];

for( let x = 0; x < columns; x++ ) {
    rainDrops[x] = 1;
}

var draw = () => {
	context.fillStyle = 'rgba(0, 0, 0, 0.05)';
	context.fillRect(0, 0, canvas.width, canvas.height);
	
	context.fillStyle = '#0F0';
	context.font = fontSize + 'px monospace';

	for(let i = 0; i < rainDrops.length; i++)
	{
		var text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
		context.fillText(text, i*fontSize, rainDrops[i]*fontSize);
		
		if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.975){
			rainDrops[i] = 0;
        }
		rainDrops[i]++;
	}
};

var Drawing = setInterval(draw, 30);

window.addEventListener('resize', ()=>
{
	console.log(window.innerWidth)
	if(window.innerWidth>=400)
	{
		clearInterval(Drawing);
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		
		fontSize = 16;
		columns = canvas.width/fontSize;
		
		rainDrops = [];
		
		for( let x = 0; x < columns; x++ ) {
			rainDrops[x] = 1;
		}
		Drawing = setInterval(draw,30)
	}
});