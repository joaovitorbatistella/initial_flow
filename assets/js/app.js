function switchHeaderPage(eclass='') {   
    switch (eclass) {
        case 'start-project':
            document.getElementsByClassName('tools')[0].setAttribute('style', 'display:none')
            document.getElementsByClassName('latest-projects')[0].setAttribute('style', 'display:none')
            document.getElementsByClassName('start-project')[0].setAttribute('style', 'display:flex')
            break;
    
        case 'tools':
            document.getElementsByClassName('tools')[0].setAttribute('style', 'display:flex')
            document.getElementsByClassName('latest-projects')[0].setAttribute('style', 'display:none')
            document.getElementsByClassName('start-project')[0].setAttribute('style', 'display:none')
            break;

        case 'latest-projects':
            document.getElementsByClassName('tools')[0].setAttribute('style', 'display:none')
            document.getElementsByClassName('latest-projects')[0].setAttribute('style', 'display:flex')
            document.getElementsByClassName('start-project')[0].setAttribute('style', 'display:none')
            break;
    
        default:
            break;
    }
}  

const openCloseUserDialog = () => {
    let styles = document.getElementsByClassName('menu-user')[0].getAttribute('style')

    if(styles.includes('display:none')) {
        document.getElementsByClassName('menu-user')[0].setAttribute('style', 'display:flex')
    } else {
        document.getElementsByClassName('menu-user')[0].setAttribute('style', 'display:none')
    }
}


const closeModal = () => {
    document.getElementsByClassName('menu-welcome')[0].setAttribute('style','display:none')
    document.getElementsByClassName('background-appear')[0].setAttribute('style','display:none')
}

var slideIndex = 1;

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function nextSlide() {
    showSlides(slideIndex);
    slideIndex++
  }

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}