let btn = document.getElementsByClassName('home_slide');
let bg = document.getElementsByClassName('hero_bg');
console.log(btn);
console.log(bg);

let y = 1;
setInterval(function() {
    for (let z = 0; z < bg.length; z++) {
        bg[z].classList.remove('hero_visible');
    };
    if (y >= bg.length) {
        y = 0;
        bg[y].classList.add('hero_visible');
        y++;
    } else {
        bg[y].classList.add('hero_visible');
        y++;
        console.log(y);
    }
}, 2000)
for (let x = 0; x < btn.length; x++) {
    btn[x].onclick = function() {
        for (let z = 0; z < bg.length; z++) {
            bg[z].classList.remove('hero_visible');
        }
        if (x === 1 && y >= bg.length) {
            y = 0;
            bg[y].classList.add('hero_visible');
            // y++;
            console.log(y);
        } else if (x === 1 && y < bg.length) {
            bg[y].classList.add('hero_visible');
            console.log(y);
            y++;
            console.log(y);
        } else if (x === 0 && y <= 1) {
            console.log(y);
            y = bg.length;
            console.log(y);
            bg[y - 1].classList.add('hero_visible');
            console.log(y);
        } else if (x === 0 && y > 0) {
            console.log(y);
            y--;
            bg[y - 1].classList.add('hero_visible');
            console.log(y);
        }
    }
}