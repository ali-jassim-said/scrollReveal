const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
}

//  header ==========
ScrollReveal().reveal(".header_container h1", scrollRevealOption)


ScrollReveal().reveal(".header_container h4", {
  ...scrollRevealOption,
  delay: 500
})

ScrollReveal().reveal(".header_container .btn", {
  ...scrollRevealOption,
  delay: 1000
})




// About section animations
ScrollReveal().reveal(".about_container .section_header", scrollRevealOption);
ScrollReveal().reveal(".about_container .section_subheader", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about_container .about_flex", {
  ...scrollRevealOption,
  delay: 750,
});

ScrollReveal().reveal(".about_container .btn", {
  ...scrollRevealOption,
  delay: 1000,
});




// discover
ScrollReveal().reveal(".discover-cards .card", {
  ...scrollRevealOption,
  interval: 500,
});


ScrollReveal().reveal(".discover-cards .text", {
  ...scrollRevealOption,
  interval: 500,
});



ScrollReveal().reveal(".blog-cards .blog-card", {
  ...scrollRevealOption,
  interval: 500,
});





ScrollReveal().reveal(".journal-cards .journal-card", {
  ...scrollRevealOption,
  interval: 500,
});

