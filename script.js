
const colors = ['#0029FA', '#8D07F6', '#FFFF05', '#B335F7', '#8A29BE', '#7B25AA', '#8527B7', '#D7F205'];
const button = document.getElementById('button');
const colorCode = document.getElementById('color_code');

button.addEventListener('click', function(){
	const code = colors[colorIndex()];
	document.body.style.backgroundColor = code;
	colorCode.textContent = code;
	colorCode.style.color = code;
});

function colorIndex(){
	return Math.floor(Math.random() * colors.length);
}