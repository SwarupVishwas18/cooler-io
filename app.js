const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a0db34d9b9msh736307cf881178ap17b28bjsna3a46a9462be',
		'X-RapidAPI-Host': 'random-palette-generator.p.rapidapi.com'
	}
};

var col1 = document.querySelector('#col-1');
var col2 = document.querySelector('#col-2');
var col3 = document.querySelector('#col-3');
var col4 = document.querySelector('#col-4');
var text1 = document.querySelector('#text-1');
var text2 = document.querySelector('#text-2');
var text3 = document.querySelector('#text-3');
var text4 = document.querySelector('#text-4');
var ar1 = document.querySelector('#ar-1');
var ar2 = document.querySelector('#ar-2');
var ar3 = document.querySelector('#ar-3');
var ar4 = document.querySelector('#ar-4');


fetch('https://random-palette-generator.p.rapidapi.com/palette/1/4', options)
	.then(response => response.json())
	.then(response => {
		console.log(response);
		console.log(response['data'][0].palette[0]);
		col1.style.backgroundColor = response['data'][0].palette[0];
		col2.style.backgroundColor = response['data'][0].palette[1];
		col3.style.backgroundColor = response['data'][0].palette[2];
		col4.style.backgroundColor = response['data'][0].palette[3];

		var rgb = [];

		response['data'][0].palette.forEach(color => {
			rgb.push(hexToRGB(color));
		});

		if(lightOrDark(rgb[0]) == 10){
			text1.style.color = '#fff';
			ar1.style.color = '#fff';
		}
		if(lightOrDark(rgb[1]) == 10){
			text2.style.color = '#fff';
			ar2.style.color = '#fff';
		}
		if(lightOrDark(rgb[2]) == 10){
			text3.style.color = '#fff';
			ar3.style.color = '#fff';
		}
		if(lightOrDark(rgb[3]) == 10){
			text4.style.color = '#fff';
			ar4.style.color = '#fff';
		}

		text1.textContent = response['data'][0].palette[0];
		text2.textContent = response['data'][0].palette[1];
		text3.textContent = response['data'][0].palette[2];
		text4.textContent = response['data'][0].palette[3];


		var palletes = response['data'][0].palette;
		var p = palletes[0].slice(1);
			fetch(`https://www.thecolorapi.com/id?hex=${p}`)
				.then(
					response => response.json()
				)
				.then(
					response => {
						ar1.textContent = response.name.value;
						console.log(response.name.value);
					}
				)

		var p = palletes[1].slice(1);
		fetch(`https://www.thecolorapi.com/id?hex=${p}`)
			.then(
				response => response.json()
			)
			.then(
				response => {
					ar2.textContent = response.name.value;
					console.log(response.name['value']);
				}
			)

			var p = palletes[2].slice(1);
	fetch(`https://www.thecolorapi.com/id?hex=${p}`)
		.then(
			response => response.json()
		)
		.then(
			response => {
				ar3.textContent = response.name.value;
				console.log(response.name.value);
			}
		)


		var p = palletes[3].slice(1);
	fetch(`https://www.thecolorapi.com/id?hex=${p}`)
		.then(
			response => response.json()
		)
		.then(
			response => {
				ar4.textContent = response.name.value;
				console.log(response.name.value);
			}
		)




	})
	.catch(err => console.error(err));



	function lightOrDark(color) {

		// Check the format of the color, HEX or RGB?
		if (color.match(/^rgb/)) {
	  
		  // If HEX --> store the red, green, blue values in separate variables
		  color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
	  
		  r = color[1];
		  g = color[2];
		  b = color[3];
		} 
		else {
	  
		  // If RGB --> Convert it to HEX: http://gist.github.com/983661
		  color = +("0x" + color.slice(1).replace( 
			color.length < 5 && /./g, '$&$&'
		  )
				   );
	  
		  r = color >> 16;
		  g = color >> 8 & 255;
		  b = color & 255;
		}
	  
		// HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
		hsp = Math.sqrt(
		  0.299 * (r * r) +
		  0.587 * (g * g) +
		  0.114 * (b * b)
		);
	  
		// Using the HSP value, determine whether the color is light or dark
		if (hsp>107.5) {
	  
		  return 'light';
		} 
		else {
	  
		  return 10;
		}
	  }

	  function hexToRGB(h) {
		let r = 0, g = 0, b = 0;
	  
		// 3 digits
		if (h.length == 4) {
		  r = "0x" + h[1] + h[1];
		  g = "0x" + h[2] + h[2];
		  b = "0x" + h[3] + h[3];
	  
		// 6 digits
		} else if (h.length == 7) {
		  r = "0x" + h[1] + h[2];
		  g = "0x" + h[3] + h[4];
		  b = "0x" + h[5] + h[6];
		}
		
		return "rgb("+ +r + "," + +g + "," + +b + ")";
	  }

var btns = document.querySelectorAll('.gen');


btns.forEach(btn => {
	btn.addEventListener('click', function(){
		
fetch('https://random-palette-generator.p.rapidapi.com/palette/1/4', options)
.then(response => response.json())
.then(response => {
	console.log(response);
	console.log(response['data'][0].palette[0]);
	col1.style.backgroundColor = response['data'][0].palette[0];
	col2.style.backgroundColor = response['data'][0].palette[1];
	col3.style.backgroundColor = response['data'][0].palette[2];
	col4.style.backgroundColor = response['data'][0].palette[3];

	

	var rgb = [];

	response['data'][0].palette.forEach(color => {
		rgb.push(hexToRGB(color));
	});

	
	if(lightOrDark(rgb[0]) == 10){
		text1.style.color = '#fff';
		ar1.style.color = '#fff';
	}
	if(lightOrDark(rgb[1]) == 10){
		text2.style.color = '#fff';
		ar2.style.color = '#fff';
	}
	if(lightOrDark(rgb[2]) == 10){
		text3.style.color = '#fff';
		ar3.style.color = '#fff';
	}
	if(lightOrDark(rgb[3]) == 10){
		text4.style.color = '#fff';
		ar4.style.color = '#fff';
	}

	text1.textContent = response['data'][0].palette[0];
	text2.textContent = response['data'][0].palette[1];
	text3.textContent = response['data'][0].palette[2];
	text4.textContent = response['data'][0].palette[3];


	var palletes = response['data'][0].palette;
	var p = palletes[0].slice(1);
		fetch(`https://www.thecolorapi.com/id?hex=${p}`)
			.then(
				response => response.json()
			)
			.then(
				response => {
					ar1.textContent = response.name.value;
					console.log(response.name.value);
				}
			)
			.catch(err => {
				ar1.textContent = '';
			});

	var p = palletes[1].slice(1);
	fetch(`https://www.thecolorapi.com/id?hex=${p}`)
		.then(
			response => response.json()
		)
		.then(
			response => {
				ar2.textContent = response.name.value;
				console.log(response.name['value']);
			}
		).catch(err => {
			ar2.textContent = '';
		});

		var p = palletes[2].slice(1);
fetch(`https://www.thecolorapi.com/id?hex=${p}`)
	.then(
		response => response.json()
	)
	.then(
		response => {
			ar3.textContent = response.name.value;
			console.log(response.name.value);
		}
	).catch(err => {
		ar3.textContent = '';
	});


	var p = palletes[3].slice(1);
fetch(`https://www.thecolorapi.com/id?hex=${p}`)
	.then(
		response => response.json()
	)
	.then(
		response => {
			ar4.textContent = response.name.value;
			console.log(response.name.value);
		}
	).catch(err => {
		ar4.textContent = '';
	});



})
.catch(err => console.error(err));

	})
});

var ps = document.querySelectorAll('p');

ps.forEach(p => {
	p.addEventListener('click', function(){
		navigator.clipboard.writeText(p.textContent);
		document.querySelector('#copy-success').style.display = 'flex';
		setTimeout(
			function(){
		document.querySelector('#copy-success').style.display = 'none';
			},
			3000
		) 
	})
});