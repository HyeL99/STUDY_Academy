const cursor = document.querySelector('.cursor');
const changer = document.querySelector('.changer');
const span = document.querySelector('span');

document.addEventListener('mousemove', (e) => {
	let x = e.clientX;
	let y = e.clientY;
	cursor.style.top = -15 + y + 'px';
	cursor.style.left = -15 +  x + "px";
	//console.log(x + 'px,' + y + 'px');
});

changer.addEventListener('click', () => {
	cursor.classList.toggle('green');
});

changer.addEventListener('mouseover', () => {
	span.style.width = 100 + '%';
	span.style.height = 100 + '%';
	span.style.opacity = 0.6;
	span.style.boxShadow = 'inset 0 0 10px rgba(0,0,0,0.9)';
});

changer.addEventListener('mouseout', () => {
	span.style.width = 11 + 'px';
	span.style.height = 11 + 'px';
	span.style.boxShadow = 'none';
});
