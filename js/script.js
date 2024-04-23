// (function  ($){
//     $('[data-toggle="counter-up"]').counterUp({
//         delay: 10,
//         time: 2000
//     });
// });

// var myCarousel = document.querySelector('#myCarousel')
// var carousel = new bootstrap.Carousel(myCarousel, {
//   interval: 2000,
//   wrap: false,
//   autoplay: true
// })

// =============whatsapp button================

!(function () {
  var e, t, n, a;
  window.MyAliceWebChat ||
    (((t = document.createElement("div")).id = "myAliceWebChat"),
    ((n = document.createElement("script")).type = "text/javascript"),
    (n.async = !0),
    (n.src = "https://myalice-widget.netlify.app/index.js"),
    (a = (e = document.body.getElementsByTagName("script"))[
      e.length - 1
    ]).parentNode.insertBefore(n, a),
    a.parentNode.insertBefore(t, a),
    n.addEventListener("load", function () {
      MyAliceWebChat.init({
        selector: "myAliceWebChat",
        number: "2347061615907",
        message:
          "Welcome to Finger Bite Cafeteria. What would you like to order",
        color: "#25D366",
        channel: "wa",
        boxShadow: "medium",
        text: "",
        theme: "light",
        position: "left",
        mb: "20px",
        mx: "20px",
        radius: "20px",
      });
    }));
})();
