
		//JS für LetterCounter//
		document.addEventListener('DOMContentLoaded', function() {
			const button = document.getElementById("countButton");
			button.addEventListener('click', countCharacters);
		});
		function countCharacters()
		{
		
		const headlines = document.getElementsByTagName("h1");

		let totalCharCount = 0;

		for (let i = 0; i < headlines.length; i = i + 1) {
			const headlineText = headlines[i].textContent;
			const charCount = headlineText.length;

		
			totalCharCount += charCount;
		}

		document.getElementById("letterCount").innerHTML = "Total character count: " + totalCharCount ;
		
	}

//JS für ToggleButton//
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')})


//Javascript für die Galerie//
  const buttons = document.querySelectorAll("[data-carousel-button]")

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const offset = button.dataset.carouselButton === "next" ? 1 : -1
      const slides = button
        .closest("[data-carousel]")
        .querySelector("[data-slides]")
  
      const activeSlide = slides.querySelector("[data-active]")
      let newIndex = [...slides.children].indexOf(activeSlide) + offset
      if (newIndex < 0) newIndex = slides.children.length - 1
      if (newIndex >= slides.children.length) newIndex = 0
  
      slides.children[newIndex].dataset.active = true
      delete activeSlide.dataset.active
    })
  })