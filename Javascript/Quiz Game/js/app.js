window.addEventListener("load", () => {

    var can = 5, zaman = 15, status = false, sual_sayi = 1, index = 0, clear = 800, next = 1000, sual_kec_qiymet = 5, btn_50_50_sayi = 3, remove_index = [], interval;
    var xal = parseInt(localStorage.getItem("xal")) || 0;

    const _can = document.querySelector("#can");
    const _xal = document.querySelector("#xal");
    const _zaman = document.querySelector("#zaman");
    const _sual_sayi = document.querySelector("#sual_sayi");
    const _sual = document.querySelector("#sual");
    const _variant = document.querySelectorAll("#variant");
    const _sual_kec = document.querySelector("#sual_kec");
    const _sual_kec_qiymeti = document.querySelector("#sual_kec_qiymeti");
    const _btn_50_50 = document.querySelector("#btn_50_50");


    //RUN GAME
    Start();
    SualVer();
    CavabVer();
    //RUN GAME

    //Event start

    _sual_kec.addEventListener("click", () => {
        if (xal >= sual_kec_qiymet && status) {
            SualKec();
        }
        else {
            const s = confirm("Hesabinizda yeterli balans yoxdur.Almaq isteyirsizmi?");
            if (s) Market();
        }
    });

    _btn_50_50.addEventListener("click", () => {
        if (btn_50_50_sayi > 0 && status) {
            btn_50_50_sayi--;
            CavabSil();
        }

        if (btn_50_50_sayi <= 0) _btn_50_50.classList.add("disabled");
    })

    //Event end

    //function start

    function CavabSil() {
        const dogru_variant = Suallar[index]?.dogru_cevap;
        const dogru_cavab = Suallar[index]?.cevaplar[dogru_variant];
        const max = _variant.length - 1;

        for (let i = 0; i < _variant.length / 2; i++) {
            let value;
            let cavab;
            do {
                value = Random(max);
                cavab = _variant[value].innerText;
            }
            while (remove_index.includes(value) || cavab === dogru_cavab);

            remove_index.push(value);
        }
        for (remove of remove_index) {
            _variant[remove].classList.add("remove");
        }

    }


    function Random(max, min = 0) {
        return Math.floor(min + Math.random() * (max - min))
    }


    function TimeStart() {
        zaman = 15;
        interval = setInterval(() => {
            if (zaman > 0) _zaman.innerText = --zaman;
            else ZamanBitti();
        }, 1000);
    }


    function ZamanBitti() {
        clearInterval(interval);
        status = false;
        Uduzdun();
    }


    function Market() {
        console.log("market");
    }

    function Start() {
        _can.innerText = can;
        _xal.innerText = xal;
        _zaman.innerText = zaman;
        _sual_sayi.innerText = index + sual_sayi;
        _sual_kec_qiymeti.innerText = sual_kec_qiymet;

    }

    function SualVer() {

        for (remove of remove_index) _variant[remove].classList.remove("remove");
        _sual.innerText = Suallar[index]?.soru;

        _variant[0].innerText = Suallar[index]?.cevaplar?.A;
        _variant[1].innerText = Suallar[index]?.cevaplar?.B;
        _variant[2].innerText = Suallar[index]?.cevaplar?.C;
        _variant[3].innerText = Suallar[index]?.cevaplar?.D;

        status = true;
        remove_index = [];
        TimeStart();
    }


    function Uduzdun() {
        const s = confirm("Oyunu uduzdunuz.Yeniden baslamaq isteyirsiz?");
        localStorage.setItem("xal", xal);
        if (s) window.open("index.html", "_parent");
        else Uduzdun();
    }

    function Novbeti() {
        if (index < Suallar.length - 1) index++;
        else {
            sual_sayi += (index + 1);
            index = 0;
        }
    }

    function CavabVer() {
        _variant.forEach(v => {
            v.addEventListener("click", () => {

                if (status) {
                    clearInterval(interval)
                    status = false;
                    v.classList.add("select");

                    const menim_cavab = v.innerText;
                    const dogru_variant = Suallar[index]?.dogru_cevap;
                    const dogru_cavab = Suallar[index]?.cevaplar[dogru_variant];


                    setTimeout(() => {

                        v.classList.remove("select");
                        if (menim_cavab === dogru_cavab) {
                            v.classList.add("success");
                            xal++;

                            Novbeti();

                            setTimeout(() => {
                                v.classList.remove("success");
                                SualVer();
                            }, clear)
                        }
                        else {
                            v.classList.add("error");
                            can--;
                            if (can > 0) status = true;
                            else Uduzdun();
                            setTimeout(() => {
                                v.classList.remove("success");
                                v.classList.remove("error");
                            }, clear)
                        }

                        Start();

                    }, next);
                }
            })
        })
    }

    function SualKec() {
        xal -= sual_kec_qiymet;
        sual_kec_qiymet *= 2;
        localStorage.setItem("xal", xal)
        Novbeti();
        SualVer();
        Start();
    }

    //function end


})