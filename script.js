
var crsr = document.querySelector("#cursor")
var crs = document.querySelector("#curso")
document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x - 10 + "px"
    crsr.style.top = dets.y - 10 + "px"
    crs.style.left = dets.x - 150 + "px"
    crs.style.top = dets.y - 150 + "px"
});


gsap.to("#nav", {
    backgroundColor: "#000",
    height: "90px",
    duration: 1,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        markers: false,
        start: "top-20%",
        scrub: 1
    }
});

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "main",
        scroller: "body",
        markers: false,
        start: "top-50vh",
        scrub: 2
    }
});

var n = document.querySelectorAll("#nav h4")
n.forEach(function (valu) {
    valu.addEventListener("mouseenter", function () {
        crsr.style.scale="3"
        crsr.style.border="1px solid #fff"
        crsr.style.transition=".3s"
        crsr.style.backgroundColor="transparent"
        

    })
    valu.addEventListener("mouseleave", function () {
        crsr.style.scale="1"
        crsr.style.border="0px solid #a2d517"
        crsr.style.transition="0s"
        crsr.style.backgroundColor="#a2d517"

    })
})

document.querySelector("#footer h1")
.addEventListener("mouseenter",function(){
    this.style.  WebkitTextStroke = "1.5px  rgba(228, 228, 228, 0.912)"
})
 
gsap.from("#underscroller",{
    y:90,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#underscroller",
        scroller:"body",
        markers:false,
        start:"top 60%",
        end:"top 55%",
        scrub:3
    }
})

 



