		//JS für LetterCounter

    //erstelle nach dem das DOM geladen wurde einen eventlistener der merkt wenn ein button geclickt wird und die funktion "countCharacters" feuert
		document.addEventListener('DOMContentLoaded', function() {
			const button = document.getElementById("countButton");
			button.addEventListener('click', countCharacters);
		});

    //erstelle die funktion "countCharacters"
		function countCharacters() {
		
    //hol dir alle h1 headlines
		const headlines = document.getElementsByTagName("h1");

    //setze absoluten zeichenanzahl auf 0
		let totalCharCount = 0;

    //für alle headlines im dokument
		for (let i = 0; i < headlines.length; i = i + 1) {
      //hol dir den inhalt einer h1 elements
			const headlineText = headlines[i].textContent;
      //zähle die zeichen dieses h1 elements
			const charCount = headlineText.length;

      //addiere die anzahl zur absoluten anzahl "totalCharCount"
			totalCharCount += charCount;
		}

    //lege fest, dass das Element mit der Id "letterCount" die absolute zeichenanzahl anzeigt
		document.getElementById("letterCount").innerHTML = `Total character count: ${totalCharCount}`;
		
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