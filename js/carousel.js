//Array storage class
let carouselArr = [];

//Control variable
let indexNextImg = 0

//class Carousel
class Carousel {
    constructor (image, title, url) {
        this.image = image;
        this.title = title;
        this.url = url;
    }
    
    static Start(arr){
        if(arr){
            if(arr.length > 0) {
                Carousel._sequence = [];
                for(let i = 0; i < carouselArr.length; i++){
                    Carousel._sequence.push(carouselArr[i]);
                }
                Carousel._size = arr.length;
                Carousel.Next(carouselArr); //start
                Carousel._interval = setInterval(function(){Carousel.Next(Carousel._sequence, Carousel._sequence2, Carousel._sequence3); },5000);
            }
            
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Next(image, titulo, url){
            if (indexNextImg >= Carousel._size) {
                indexNextImg = 0;
            }

            image = document.getElementById("carousel-image");
            image.src = "./img/" + Carousel._sequence[parseInt(indexNextImg)].image

            titulo = document.getElementById("redirect")
            titulo.textContent = Carousel._sequence[parseInt(indexNextImg)].title
            
            url = document.getElementById("redirect")
            url.href = Carousel._sequence[parseInt(indexNextImg)].title

            indexNextImg += 1; 
    }
};

function redirect(tag) {
    let aimg = document.getElementsByClassName("mediaLink");
    tagTitle = tag.title.toLowerCase();
    console.log(tagTitle)

    for (let i = 0; i < aimg.length; i++) {
        console.log(i)

        if (aimg[i].alt.toString().includes(tagTitle)) {
             console.log("clicando "+aimg[i].alt);

             let ahref = document.getElementsByClassName("mediaIcon");

             ahref[i].href = aimg[i].alt;
             console.log(ahref[i].href)
             break;
        }
    }
    //ahref.href = "aa";

    //console.log(link)
    //ahref.href = link;
    //console.log(link)
    //link.href = source;
    //console.log(source)
}