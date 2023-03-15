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
		document.getElementById("letterCount").innerHTML = `Diese Seite enthält in den Überschriften ${totalCharCount} Zeichen.`;
		
	}

//JS für ToggleButton
//greife auf den toggleButton mit der klasse "toggle-button", welchen wir in unserem html-dokument angegeben haben. greife auf das erste element in dem array  
const toggleButton = document.getElementsByClassName('toggle-button')[0]
//greife auf die navbar mit der klasse "navbar-links", welchen wir in unserem html-dokument angegeben haben. greife auf das erste element in dem array 
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

//funktion durch anklicken des toggleButton: toggle unsere aktive klasse des elements "navbar-Links". Wenn unser toggleButton nun "active" ist, wird sie mit einem "click" geschlossen und wenn Sie nicht "active" ist, wird sie mit einem "click" geöffnet 
toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')})


//Javascript für die Galerie
//greife auf alle Buttons, mit dem attribut "data-carousel-button" zu
  const buttons = document.querySelectorAll("[data-carousel-button]")

  //erstelle ein loop für alle buttons, und füge diesen buttons einen EventLister zu
  buttons.forEach(button => {

    //dieser "click" Eventlistener führt dazu, dass man mit einem "click" zum nächsten bild gelangt. 
    button.addEventListener("click", () => {

      //wenn "button.dataset.carouselButton" gleich "next" ist, geh entweder vor (1) oder zurück (-1)
      const offset = button.dataset.carouselButton === "next" ? 1 : -1

      //greife von meinem "button" aus, auf mein elternelement "data-carousel" zu und greife von meinem "data-carousel" aus, auf mein "data-slides" container zu
      const slides = button
        .closest("[data-carousel]")
        .querySelector("[data-slides]")
  
        //greif auf mein slide "data-active" zu
      const activeSlide = slides.querySelector("[data-active]")

      //die slides werden in ein array umformatiert, um dann auf den index von "activeSlide" zuzugreifen.  "offset" ist entweder 1 oder -1
      let newIndex = [...slides.children].indexOf(activeSlide) + offset

      //wenn unser "newIndex" kleiner als 0 ist, gehe zurück zum vorherigen Bild (-1)
      if (newIndex < 0) newIndex = slides.children.length - 1

      //wenn unser "newIndex" gleich oder größer als "slides.children.length" loopen wir zu unserem allerersten Bild zurück 
      if (newIndex >= slides.children.length) newIndex = 0
  
      //"dataset.active" wird unserem aktuellen, neuen slide hinnzugefügt
      slides.children[newIndex].dataset.active = true

      //"dataset.active" wird aus der aktiven klasse entfernt 
      delete activeSlide.dataset.active
    })
  })