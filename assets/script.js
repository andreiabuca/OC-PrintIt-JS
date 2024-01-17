const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');
const img = document.querySelector('.banner-img');
const tagLine = document.querySelector('.image-texte');
const dotsContainer = document.querySelector('.dots');
let currentSlide = 0
tagLine.innerHTML = "Impressions tous formats <span>en boutique et en ligne</span>"

function handleLeftArrowClick(event) {

	console.log('Left arrow clicked');

	currentSlide--
	console.log('Current slide', currentSlide)
	if (currentSlide < 0) {
		currentSlide = slides.length - 1;
	}

	img.setAttribute('src', './assets/images/slideshow/' + slides[currentSlide]['image'])
	tagLine.innerHTML = ''
	tagLine.innerHTML += slides[currentSlide]['tagLine']
	updateDots(currentSlide)




}

function handleRightArrowClick(event) {

	console.log('Right arrow clicked');

	// ont va ajouter 1 à current slide 
	//si la diapositive est la derniere on define current slide = 0
	//mettre à jour l'image pour le slide actuelle 
	//mettre à jour le selection du point  

	currentSlide++
	console.log('Current slide', currentSlide)
	if (currentSlide >= slides.length) {
		currentSlide = 0
	}

	img.setAttribute('src', './assets/images/slideshow/' + slides[currentSlide]['image'])
	tagLine.innerHTML = ''
	tagLine.innerHTML += slides[currentSlide]['tagLine']
	updateDots(currentSlide)

	}

	function updateDots(currentSlide) {
		const dots = dotsContainer.querySelectorAll('.dot')
		dots.forEach((dot,index) => {
			if (index === currentSlide) {
				dot.classList.add('dot_selected')
			} else {
				dot.classList.remove('dot_selected')
			}

		}

		)


	}


	leftArrow.addEventListener('click', handleLeftArrowClick);
	rightArrow.addEventListener('click', handleRightArrowClick);

	document.addEventListener("DOMContentLoaded", function () {
	
		slides.forEach((slide, index) => {
			const dot = document.createElement('div');
			dot.classList.add('dot');
			if (index === 0) {
				dot.classList.add('dot_selected');
			}

			dot.addEventListener('click', () => {
				console.log(`Clicked on dot ${index + 1}`);
			});

			dotsContainer.appendChild(dot);
		});
	});