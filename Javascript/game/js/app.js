window.addEventListener("load", () => {

    const game = document.querySelectorAll("#game div");
    let _can = document.querySelector("#can");
    let _xal = document.querySelector("#xal");
    let _ad = document.querySelector("#ad");
    let _adress = document.querySelector("#adress");
    let _home = document.querySelector("#home");
    let _play = document.querySelector("#play");

    _ad.innerText = prompt("adinizi daxil edin") || "Qonaq istifadeci";
    _adress.innerText = prompt("unvaninizi daxil edin") || "Server";
    _xal.innerText = parseInt(localStorage.getItem("xal")) || 0;

    //Events start
    
    _home.addEventListener("click", () => {
        open("index.html", "_parent")
    })

    _play.addEventListener("click", () => {
        clearInterval(interval);
    })

    //Events end

    for (let i = 0; i < game.length; i++) {
        game[i].addEventListener("click", () => {

            if (isStar(i)) {
                xalArtir();
                clear();
            } else {
                canAzalt();
            }

        })

        clear(i);
    }

    const interval = setInterval(() => {
        clear();
        let index = Random(0, game.length - 1);
        game[index].classList.add("star");

    }, 2000);

    function xalArtir() {
        let x = Number(_xal.innerText);
        _xal.innerText = x + 1;
        localStorage.setItem("xal", x + 1);
    }


    function canAzalt() {
        let c = Number(_can.innerText);
        _can.innerText = c - 1;


        if ((c - 1) <= 0) {
            do {
                var icaze = confirm("Caniniz bitdi.Yeniden baslamaq isteyirsinizmi?");
                console.log(icaze);
            } while (!icaze);

            open("index.html", "_parent");

        }
    }


    function isStar(i) {
        let cls = game[i].classList;
        return cls[0] === "star" ? true : false;
    }


    function clear(index = "all") {
        if (index === "all") {
            for (let i = 0; i < game.length; i++) {
                game[i].classList.remove("star");
            }

        } else {
            game[index].classList.remove("star");
        }
    }

    function Random(s, e) {
        return Math.floor(s + Math.random() * (e - s))
    }

})