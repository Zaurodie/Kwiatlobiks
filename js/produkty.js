let ceny_prod_str = [ `79,99`, `1,50<sup>30</sup>`, `12,99<sup>2</sup>`, `72,24`, 
    `log<sub>2</sub>2147483648`, `29,99`, `199,99`
]
let nazwy_prod = ["Dyplis Lutenes", "Charmaedorea elegans", "Strelitzia", "Cocos Nucifera",
    "Schefflera abrboricola", "Spathiphyllum", "Clusia"
]

let cena_int = [79.99, 191751.06, 168.74, 72.24, 31, 29.99, 199.99];

let d_opis_prod = [
    `Ten kwiat o nazwie popularnej w świecie (Ikei): Dyplis Lutenes, sprawdzi się idealnie w twoim ogrodzie,
    kuchni, salonie, toalecie i pozostałych częściach mieszkania. Wysoka jakość pozwoli na przetrwanie tej rośliny 
    w warunkach ekstremalnych (kiedy przyjedzie rodzina z daleka i musisz pokazać jaki to bogaty/a jesteś).`,
    
    `Ten kwiat o nazwie popularnej w świecie (Ikei): Charmaedorea elegans, sprawdzi się idealnie w twoim ogrodzie,
    kuchni, salonie, toalecie i pozostałych częściach mieszkania. Wysoka jakość pozwoli na przetrwanie tej rośliny 
    w warunkach ekstremalnych (kiedy przyjedzie rodzina z daleka i musisz pokazać jaki to bogaty/a jesteś ty egocentryczna kappo).`,

    `Ten kwiat o nazwie popularnej w świecie (Ikei): Strelitzia, sprawdzi się idealnie w twoim ogrodzie,
    kuchni, salonie, toalecie i pozostałych częściach mieszkania. Wysoka jakość pozwoli na przetrwanie tej rośliny 
    w warunkach ekstremalnych (kiedy przyjedzie rodzina z daleka i musisz pokazać jaki to bogaty/a jesteś).`,

    `Ten kwiat o nazwie popularnej w świecie (Ikei): Cocos Nuciferas, sprawdzi się idealnie w twoim ogrodzie,
    kuchni, salonie, toalecie i pozostałych częściach mieszkania. Wysoka jakość pozwoli na przetrwanie tej rośliny 
    w warunkach ekstremalnych (kiedy przyjedzie rodzina z daleka i musisz pokazać jaki to bogaty/a jesteś).`,

    `Ten kwiat o nazwie popularnej w świecie (Ikei): Schefflera abrboricola, sprawdzi się idealnie w twoim ogrodzie,
    kuchni, salonie, toalecie i pozostałych częściach mieszkania. Wysoka jakość pozwoli na przetrwanie tej rośliny 
    w warunkach ekstremalnych (kiedy przyjedzie rodzina z daleka i musisz pokazać jaki to bogaty/a jesteś).`,
    
    `Ten kwiat o nazwie popularnej w świecie (Ikei): Spathiphyllum, sprawdzi się idealnie w twoim ogrodzie,
    kuchni, salonie, toalecie i pozostałych częściach mieszkania. Wysoka jakość pozwoli na przetrwanie tej rośliny 
    w warunkach ekstremalnych (kiedy przyjedzie rodzina z daleka i musisz pokazać jaki to bogaty/a jesteś).`,
    
    `Ten kwiat o nazwie popularnej w świecie (Ikei): Clusia, sprawdzi się idealnie w twoim ogrodzie,
    kuchni, salonie, toalecie i pozostałych częściach mieszkania. Wysoka jakość pozwoli na przetrwanie tej rośliny 
    w warunkach ekstremalnych (kiedy przyjedzie rodzina z daleka i musisz pokazać jaki to bogaty/a jesteś).`,

]

let sh_opis_prod = 
[
    `Kwiat do twojego ogrodu, idealny do kupienia na odwiedziny rodziny, by potem wywalić`,
    `Kwiat do twojego ogrodu, idealny do kupienia na odwiedziny rodziny, by potem wywalić`,
    `Kwiat do twojego ogrodu, idealny do kupienia na odwiedziny rodziny, by potem wywalić`,
    `Kwiat do twojego ogrodu, nie znane są żadne powiązania z kokosami, ale nadal możesz go wywalić do kosza`,
    `Kwiat do twojego ogrodu, zakręcona łodyga według niektórych osób dodaje jej tak zwanej piękności`,
    `Kwiat do twojego ogrodu, doniczka nie załączona,  by potem wywalić`,
    `Kwiat do twojego ogrodu, idealny do kupienia na odwiedziny rodziny, by potem wywalić`,
]


function produkt(nazwa, cena_str, cena_int, sh_opis_prod, opis_prod)
{
    this.name = nazwa;
    this.price_str = cena_str;
    this.price_int = cena_int;
    this.short_desc = sh_opis_prod;
    this.full_desc = opis_prod;
}

let produkty = [];


function stworz_prod()
{
    console.log(2137);
    for(prod in nazwy_prod)
        produkty[prod] = new produkt(nazwy_prod[prod], ceny_prod_str[prod], cena_int[prod], sh_opis_prod[prod] ,d_opis_prod[prod]);
}


function generate_shop_prod(nr_prod)
{
    return `<div class="produkt">

                        <div class="left">
                            <a href="html/stronaProduktu.htm#${nr_prod}" target="_self">
                                <img src="zdj_prod/kwiat${nr_prod}.jpg" alt="Wysokiej jakości produkt"/>
                            </a>
                        </div>
                        <div class="right">
                            <a href="html/stronaProduktu.htm#${nr_prod}" target="_self">
                                <h3>${produkty[nr_prod - 1].name}</h3>
                                <p>${produkty[nr_prod - 1].short_desc}</p>
                                <button class="cena">Kup za ${produkty[nr_prod - 1].price_str} zł</button>
                            </a>
                        </div>

                    </div>`
}

function generate_prod(nr_prod)
{
    console.log("ok");
    document.getElementById("product_space").innerHTML = 
    `<div id="kwiat${nr_prod}" style="display: block;">
                <section class="produkt-strona-sekcje">   
                    <div class="lewo">
                        <div>
                            <img src="zdj_prod/kwiat${nr_prod}.jpg">
                            <a href="html/kupowanie.html#${nr_prod}"><button class="cena">Kup za ${produkty[nr_prod - 1].price_str} zł</button></a>
                        </div>
                        <h2>
                            ${produkty[nr_prod-1].name}
                        </h2>
                    </div>
                    <div class="prawo">
                        <h2>${produkty[nr_prod-1].name}</h2>
                        <p>
                            ${produkty[nr_prod-1].full_desc}
                        </p>
                    </div>
                </section>
            </div>`
}
