let kosik = [];

function pridatDoKosiku(nazev, cena) {
    kosik.push({nazev, cena});
    aktualizujWeb();
    alert(nazev + " je v košíku!");
}

function aktualizujWeb() {
    document.getElementById('pocet-v-kosiku').innerText = kosik.length;
    
    let cenaCelkem = 0;
    let htmlSeznam = "";
    
    kosik.forEach(polozka => {
        cenaCelkem += polozka.cena;
        htmlSeznam += `<div class="polozka-v-kosiku"><span>${polozka.nazev}</span><span>${polozka.cena} Kč</span></div>`;
    });
    
    document.getElementById('seznam-polozek').innerHTML = htmlSeznam;
    document.getElementById('celkova-cena').innerText = cenaCelkem;
}

function ukazStranu(strana) {
    if (strana === 'obchod') {
        document.getElementById('strana-obchod').style.display = 'block';
        document.getElementById('strana-kosik').style.display = 'none';
    } else {
        document.getElementById('strana-obchod').style.display = 'none';
        document.getElementById('strana-kosik').style.display = 'block';
    }
}
