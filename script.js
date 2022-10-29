class scrollNadpis {
    constructor(el){
        this.element = document.querySelector(el)
    }

    getEl() {
        return this.element
    }

    enableScroll() {
        this.ahoj = "ajooj"
        console.log(this.ahoj)


        window.addEventListener("scroll", ()=>{
            // console.log("SCROLL IS: " + window.scrollY)
            //     console.log("ELEMENT: " + elem.getBoundingClientRect().top)


            if(this.element.getBoundingClientRect().top <= (Math.ceil(window.innerHeight/2))){
                // console.log("cicky")
                this.element.style.cssText = "top: " + (window.scrollY - this.element.getBoundingClientRect().top) + "px"
            }
        })
        
        
    }

}

const nadpisCreafea = new scrollNadpis("#creafea .header-wrapper")
// nadpisCreafea.enableScroll()

elem = nadpisCreafea.getEl()
// window.addEventListener("scroll", ()=>{
//     console.log("SCROLL IS: " + window.scrollY)
//     console.log("ELEMENT: " + elem.getBoundingClientRect().top)
//     console.log(window.innerHeight)
// })

console.log(Math.ceil(window.innerHeight/2))

// stred  = window.innerHeight / 2





function rotateText(){
    elems = document.querySelectorAll(".rotateMe")

    window.addEventListener("scroll", ()=>{
        elems.forEach(element => {
            element.style.transform = `rotate(${window.scrollY/10}deg)`
        });
    })
    
}

rotateText()




function appendClassToElement(el, cls){
    element = document.querySelector(el)
    window.addEventListener("scroll", ()=>{
        if((element.getBoundingClientRect().top <= (Math.ceil(window.innerHeight/1.2))) && !element.classList.contains(cls)){
            element.classList.add(cls)
        }
    })
}

appendClassToElement(".fun-design", "scrolledIn")

// function testtt(){
//     let tri1 = document.querySelector(".fun-design");

//     let tri1XInitial = tri1.getBoundingClientRect().x;
//     console.log(tri1)

//     window.addEventListener("scroll", ()=> {
//     let total = window.innerHeight;

//     let current = window.scrollY;

//     let per = (current / total)

//     tri1.style.cssText = "transform: translateX(" + -(tri1XInitial * per * 1.25) + tri1XInitial +  "px)";
//     });
// }

// testtt()