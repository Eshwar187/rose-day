// script.js

document.body.addEventListener("click", function() {
    // Start the rose animation: make it visible and scale it
    gsap.to("#rose", {
        duration: 2,
        opacity: 1,  // Make the rose visible
        scale: 1.5,  // Make the rose a bit larger
        ease: "power2.out",
        delay: 0.5
    });

    // Start the message animation: fade and move up
    gsap.to("#message", {
        duration: 2,
        opacity: 1,
        y: 0,  // Move the message up to its original position
        delay: 2.5,  // Wait a bit before showing the message
        ease: "power2.out"
    });

    // Animate petals to appear
    gsap.to(".petal", {
        duration: 1.5,
        opacity: 1,
        stagger: 0.3, // Stagger the petals to make them appear one after the other
        ease: "bounce.out",
        delay: 1
    });
});
