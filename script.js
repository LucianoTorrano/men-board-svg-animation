/*** GSAP ANIMATION ***/

var tl = gsap.timeline({defaults:{duration: .7, ease: Back.easeOut.config(2), opacity:0}})

    tl.from(".person",{delay:1,scale:.8,transformOrigin:'center'},"=.2")
      .from(".board", {scale:.2,transformOrigin:'center'})
      .from(".topMsg", {scaleY:0,transformOrigin:'top'})
      .from(".rightMsg", {scaleX:0,transformOrigin:'left', duration:.5})
      .from(".bottomMsg",{scaleY:0,transformOrigin:'top', duration:.5})
      .from(".msgCircle",{scale:0,transformOrigin:'center', duration:.5})
      .from(".text",{scale:0.2,transformOrigin:'left'})
