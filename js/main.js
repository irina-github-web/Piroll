// // This changes the lightbox image to the next or previous
// // image by adding an event listener.
// 'use strict';

// let link;
// let imageCount = 4;
// let regExDigit = /\d+/;

// function imageLink() {
// 	let regExImage = /#image\d+/;
// 	let image = location.href;
	
// 	link = regExImage.exec(image)[0];
// 	link = regExDigit.exec(link)[0];
// }

// let next = document.getElementById('next-lightbox');
// let prev = document.getElementById('prev-lightbox');

// next.addEventListener('click', evt => {
// 	evt.preventDefault();
// 	imageLink();
// 	let newLink = Number(link) + 1;
// 	if (newLink > imageCount) newLink = 1;	
// 	location.href = location.href.replace(regExDigit, newLink);
// });

// prev.addEventListener('click', evt => {
// 	evt.preventDefault();
// 	imageLink();
// 	let newLink = Number(link) - 1;
// 	if (newLink < 1) newLink = imageCount;
// 	location.href = location.href.replace(regExDigit, newLink);
// });