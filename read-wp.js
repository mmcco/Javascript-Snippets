// This is a simple JS script that can be hooked into a Firefox extension.
// When clicked, it makes all links black, like normal text, and sets the
// maximum width to 40em. This is an attempt to make the pages more readable.

// It's obviously a facile program. When I have time to publish it, I'll make
// it toggle and give it a logo, etc.

var anchors = document.getElementsByTagName('a');
anchors = Array.prototype.slice.call(anchors);
anchors.forEach(function (anchor) {
        anchor.style.textDecoration = 'none';
        anchor.style.color = 'black';
});

var paras = document.getElementsByTagName('p');
paras = Array.prototype.slice.call(paras);
paras.forEach(function (para) {
    para.style.maxWidth = '40em';
});
