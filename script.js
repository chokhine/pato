let bg = document.getElementsByClassName("hero_bg");
let slideBtn = document.getElementsByClassName("home_slide");
let spot = document.getElementsByClassName("h_spot");
// let heroH1 = document.getElementsByClassName('hero_h1');
// let heroH2 = document.getElementsByClassName('hero_h2');
// let heroA = document.getElementsByClassName('hero_a');
console.log(bg);
console.log(slideBtn);
console.log(spot);
// console.log(heroH1);
// console.log(heroH2);
// console.log(heroA);
let y = 1;

// for(let x = 0 ; x < slideBtn.length; x++){
// 	slideBtn[x].onclick=function(){
// 		for(let z = 0; z < bg.length ; z++ ){
// 			spot[z].classList.remove('h_active');
// 		};
// 		if(x===1 && y >= spot.length){
// 			y=0;
// 			// console.log(y);
// 			spot[y].classList.add('h_active');
// 			y++;
// 		}else if(x===1){
// 			spot[y].classList.add('h_active');
// 			// console.log(y)
// 			y++;
// 			// console.log(y)
// 		}else if(x===0 && y <= 1){
// 			y=spot.length;
// 			spot[y-1].classList.add('h_active')
// 		}else if(x===0 && y > 1){
// 			y--;
// 			spot[y-1].classList.add('h_active')
// 		}
// 	}
// };

// function ani(){
// 	if(y===0){
// 		heroH1[y].style.animationName='h1h1ani';
// 		heroH2[y].style.animationName='h1h2ani';
// 		heroA[y].style.animationName='h1aani';
// 	}
// }

setInterval(function() {
    for (let z = 0; z < bg.length; z++) {
        bg[z].classList.remove("hero_visible");
        spot[z].classList.remove("h_active");
    }
    if (y >= bg.length && y >= spot.length) {
        y = 0;
        bg[y].classList.add("hero_visible");
        spot[y].classList.add("h_active");
        // heroH1[y].style.animationName='h1ani';
        // ani();
        y++;
    } else {
        bg[y].classList.add("hero_visible");
        spot[y].classList.add("h_active");
        // heroH1[y].style.animationName='h1ani';
        // ani();
        y++;
    }
}, 6000);
for (let c = 0; c < spot.length; c++) {
    // console.log(spot[c]);
    spot[c].onclick = function() {
        for (let d = 0; d < spot.length; d++) {
            bg[d].classList.remove("hero_visible");
            spot[d].classList.remove("h_active");
        }
        spot[c].classList.add("h_active");
        bg[c].classList.add("hero_visible");
        // ani();
        y = c + 1;
    };
}
for (let x = 0; x < slideBtn.length; x++) {
    slideBtn[x].onclick = function() {
        for (let z = 0; z < bg.length; z++) {
            bg[z].classList.remove("hero_visible");
            spot[z].classList.remove("h_active");
        }
        if (x === 1 && y < bg.length && y < spot.length) {
            // console.log(y)
            bg[y].classList.add("hero_visible");
            spot[y].classList.add("h_active");
            // ani();
            y++;
            // console.log(y)
        } else if (x === 1 && y >= bg.length && y >= spot.length) {
            y = 0;
            bg[y].classList.add("hero_visible");
            spot[y].classList.add("h_active");
            // ani();
            y++;
            // console.log(y);
        } else if (x === 0 && y <= 1) {
            y = bg.length;
            console.log(y);
            bg[y - 1].classList.add("hero_visible");
            spot[y - 1].classList.add("h_active");
            // ani();
        } else if (x === 0) {
            // console.log(y);
            y--;
            bg[y - 1].classList.add("hero_visible");
            spot[y - 1].classList.add("h_active");
            // ani();
            console.log(y);
        }
    };
}
let navscroll = document.getElementsByTagName("nav")[0];
let hlogo = document.getElementsByClassName("h_logo")[0];
let nava = document.getElementsByClassName("nav_a");

document.addEventListener("scroll", function() {
    if (scrollY >= 200) {
        navscroll.classList.add("nav_ani");
        // navscroll.style.height = '80px';
        hlogo.src = "img/logo2.webp";
        for (let x = 0; x < nava.length; x++) {
            nava[x].style.color = "#000";
        }
    } else {
        navscroll.classList.remove("nav_ani");
        // navscroll.style.height = '100px';
        hlogo.src = "img/logo.webp";
        for (let x = 0; x < nava.length; x++) {
            nava[x].style.color = "#fff";
        }
    }
});

// function navchange() {
//     if (window.innerWidth < 600) {
//         navscroll.style.height = '60px';
//     } else {
//         navscroll.style.backgroundColor = 'transparent';
//     }
// }
// window.addEventListener('resize', navchange);

let navclick = document.getElementsByClassName("nav_click")[0];
let slidenav = document.getElementsByClassName("slide_nav")[0];
let slidehide = document.getElementsByClassName("slide_cross")[0];
let overlay = document.getElementsByClassName("hero_over_lay")[0];

navclick.onclick = function() {
    slidenav.classList.add("show_slide_nav");
    overlay.style.backgroundColor = "#000b";
    overlay.style.zIndex = "101";
};

slidehide.onclick = function() {
    slidenav.classList.remove("show_slide_nav");
    overlay.style.backgroundColor = "transparent";
    overlay.style.zIndex = "-1";
};

let hpimg = document.getElementsByClassName("hero_img")[0];
let overimg = document.getElementsByClassName("hero_img_inner")[0];
let clickimgs = document.getElementsByClassName("nav_z");
console.log(overimg);
console.log(clickimgs);
console.log(hpimg);

for (let x = 0; x < clickimgs.length; x++) {
    clickimgs[x].onclick = function() {
        overimg.style.background = `url(img/footer${x + 1}.webp`;
        overimg.style.backgroundPosition = "center";
        overimg.style.backgroundSize = "cover";
        hpimg.classList.add("hero_img_visible");
        overlay.style.zIndex = "103";
    };
}

overlay.onclick = function() {
    let himgexist = hpimg.classList.contains("hero_img_visible");
    if (himgexist === true) {
        overlay.style.zIndex = "102";
        hpimg.classList.remove("hero_img_visible");
    } else {
        slidenav.classList.remove("show_slide_nav");
        overlay.style.backgroundColor = "transparent";
        overlay.style.zIndex = "-1";
    }
    // console.log(himgexist);
};
// ----------Countdown Timer---------------
setInterval(() => {
    let now = new Date().getTime();
    let deadline = new Date("april 3, 2022 00:00:00").getTime();
    let timeDifference = deadline - now;

    let days = timeDifference / (1000 * 60 * 60 * 24);
    let hours = (days - Math.floor(days)) * 24;
    let minutes = (hours - Math.floor(hours)) * 60;
    let seconds = (minutes - Math.floor(minutes)) * 60;

    /*
                                                            let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
                                                            let hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                                                            let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
                                                            let seconds = Math.floor((timeDifference % (1000 * 60)) / (1000));
                                                                    
                                                            document.getElementById("days").innerHTML = days;
                                                            document.getElementById("hours").innerHTML = hours;
                                                            document.getElementById("minutes").innerHTML = minutes;
                                                            document.getElementById("seconds").innerHTML = seconds;
                                                            */

    document.getElementsByClassName("days")[0].innerHTML = Math.floor(days);
    document.getElementsByClassName("hours")[0].innerHTML = Math.floor(hours);
    document.getElementsByClassName("minutes")[0].innerHTML = Math.floor(minutes);
    document.getElementsByClassName("seconds")[0].innerHTML = Math.floor(seconds);
    document.getElementsByClassName("days")[1].innerHTML = Math.floor(days);
    document.getElementsByClassName("hours")[1].innerHTML = Math.floor(hours);
    document.getElementsByClassName("minutes")[1].innerHTML = Math.floor(minutes);
    document.getElementsByClassName("seconds")[1].innerHTML = Math.floor(seconds);
    document.getElementsByClassName("days")[2].innerHTML = Math.floor(days);
    document.getElementsByClassName("hours")[2].innerHTML = Math.floor(hours);
    document.getElementsByClassName("minutes")[2].innerHTML = Math.floor(minutes);
    document.getElementsByClassName("seconds")[2].innerHTML = Math.floor(seconds);
}, 1000);

// --------------gallery-----------------

let gallery_h1 = document.getElementById("photo");
let gallery_h2 = document.getElementById("interior");
let gallery_h3 = document.getElementById("food");
let gallery_h4 = document.getElementById("event");
let gallery_h5 = document.getElementById("vip");

gallery_h1.onclick = function abc() {
    gallery_1.style.display = "grid";
    gallery_2.style.display = "none";
    gallery_3.style.display = "none";
    gallery_4.style.display = "none";
    gallery_5.style.display = "none";
    gallery_h1.style.color = "red";
    gallery_h2.style.color = "black";
    gallery_h3.style.color = "black";
    gallery_h4.style.color = "black";
    gallery_h5.style.color = "black";
};
gallery_h2.onclick = function abc() {
    gallery_1.style.display = "none";
    gallery_2.style.display = "grid";
    gallery_3.style.display = "none";
    gallery_4.style.display = "none";
    gallery_5.style.display = "none";
    gallery_h1.style.color = "black";
    gallery_h2.style.color = "red";
    gallery_h3.style.color = "black";
    gallery_h4.style.color = "black";
    gallery_h5.style.color = "black";
};
gallery_h3.onclick = function abc() {
    gallery_1.style.display = "none";
    gallery_2.style.display = "none";
    gallery_3.style.display = "grid";
    gallery_4.style.display = "none";
    gallery_5.style.display = "none";
    gallery_h1.style.color = "black";
    gallery_h2.style.color = "black";
    gallery_h3.style.color = "red";
    gallery_h4.style.color = "black";
    gallery_h5.style.color = "black";
};
gallery_h4.onclick = function() {
    gallery_1.style.display = "none";
    gallery_2.style.display = "none";
    gallery_3.style.display = "none";
    gallery_4.style.display = "grid";
    gallery_5.style.display = "none";
    gallery_h1.style.color = "black";
    gallery_h2.style.color = "black";
    gallery_h3.style.color = "black";
    gallery_h4.style.color = "red";
    gallery_h5.style.color = "black";
};
gallery_h5.onclick = function() {
    gallery_1.style.display = "none";
    gallery_2.style.display = "none";
    gallery_3.style.display = "none";
    gallery_4.style.display = "none";
    gallery_5.style.display = "grid";
    gallery_h1.style.color = "black";
    gallery_h2.style.color = "black";
    gallery_h3.style.color = "black";
    gallery_h4.style.color = "black";
    gallery_h5.style.color = "red";
};