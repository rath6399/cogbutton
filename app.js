var win1 = Ti.UI.createWindow();

var mycog = Ti.UI.createImageView({
	top: '10%',
	height: '20dp',
	width: '20dp'
});

mycog.image = '\cog.png';

win1.add(mycog);

var win2 = Ti.UI.createWindow();

mycog.addEventListener('click', function(e){
	win2.open();
});

win1.open();
