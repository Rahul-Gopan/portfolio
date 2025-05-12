AOS.init();

const titles = ["MERN Stack Developer", "Open Source Enthusiast", "Full-Stack Engineer"];
let count = 0, index = 0;
let currentText = '', letter = '';
(function type(){
    if (count === titles.length) count = 0;
    currentText = titles[count];
    letter = currentText.slice(0, ++index);
    $('#typing').text(letter);
    if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 2000);
    } else {
    setTimeout(type, 100);
    }
})();

particlesJS.load('particles-js', 'particles.json', function() {
    console.log('Particles loaded');
});