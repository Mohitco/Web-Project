 var crs = document.querySelector("#cursor")
 var bcrs = document.querySelector("#blurcursor")
 var page3 = document.querySelector("#page3")
 var p = document.querySelector("#page3 p")
document.addEventListener("mousemove",(dext)=>{
    crs.style.left = dext.x + 30 +"px"
    crs.style.top = dext.y + "px"
     bcrs.style.left = dext.x - 200 + "px"
     bcrs.style.top = dext.y - 200 + "px"
})

var h4 = document.querySelectorAll("#nav h4")
h4.forEach((elem)=>{
     elem.addEventListener("mouseenter",()=>{
      crs.style.scale = 3;
      crs.style.border = "1px solid #fff";
      crs.style.backgroundColor = "transparent";
     })
     elem.addEventListener("mouseleave",()=>{
      crs.style.scale = 1;
      crs.style.border = "0px solid #95c11E";
      crs.style.backgroundColor = "#95c11E";
     })
})

gsap.to("#nav",{
   backgroundColor : "#000",
   height : "110px",
   duration : 0.5,
       scrollTrigger:{
          trigger: "#nav",
          scroller : "body",
        //   markers : true,
          start : "top -10%",
          end : "top -11%",
          scrub : 1,
   }
})

gsap.to("#main",{
    backgroundColor : "#000",
        scrollTrigger:{
           trigger: "#main",
           scroller : "body",
        //    markers : true,
           start : "top -20%",
           end : "top -70%",
           scrub : 2,
    }
 })
gsap.from("#about img, #about-us",{
      y:50,
      opacity:0,
      duration:1,
      stagger:0.4,
      scrollTrigger:{
         trigger:"#about",
         scroller: "body",
         // markers:true,
         start:"top 60%",
         end:"top 58%",
         scrub:3,

      }
    })

gsap.from("#colon1",{
      x:-70,
      y:-70,
      scrollTrigger:{
         trigger:"#colon1",
         scroller:"body",
         // markers:true,
         start: "top 55%",
         end: "top 45%" ,
         scrub:4     
      }
      })

gsap.from("#colon2",{
      x:70,
      y:70,
      scrollTrigger:{
         trigger:"#colon1",
         scroller:"body",
         // markers:true,
         start: "top 55%",
         end: "top 45%" ,
         scrub:4     
      }
      })

gsap.from("#page4 h1",{
   y:50,
   scrollTrigger:{
      trigger:"#page4 h1",
      scroller:"body",
      // markers:true,
      start: "top 70%",
      end: "top 60%" ,
      scrub:2,   
   }
})
