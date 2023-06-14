backgrounds = {
    "lasagna": "https://static.itdg.com.br/images/1200-630/e6aad16dfa0581de2d2f1d35f5aa7833/324587-original.jpg",
    "apple": "https://saude.abril.com.br/wp-content/uploads/2016/11/mac3a7c3a3.jpg?quality=85&strip=info&w=680&h=453&crop=1",
    "banana": "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/06/banana_fruta_getty.jpg?w=1200&h=675&crop=1",
    "rice": "https://www.receitasnestle.com.br/sites/default/files/srh_recipes/7c44045d2e8577819cb76b2b404902dd.jpg",
    "jbl": "https://m.media-amazon.com/images/I/71T1Iu2YCjL._AC_UF1000,1000_QL80_.jpg",
    "remedy": "https://img.migalhas.com.br/gf_Base/empresas/miga/imagens/6AE83E9A6AA9602CEFEA5B21E2E670976C5E_remedios.jpg",
    "sweet potato": "https://cdn0.tudoreceitas.com/pt/posts/4/0/7/batata_doce_gratinada_com_molho_de_manteiga_e_alho_10704_600.jpg",
    "corn": "https://terramagna.com.br/wp-content/uploads/2022/05/espiga-milho-barba-palha.png",
    "nerves": "https://conteudo.imguol.com.br/c/entretenimento/50/2018/06/28/dopamina-1530218693311_v2_3x4.jpg",
    "sweet rice": "https://www.sabornamesa.com.br/media/k2/items/cache/051a22dde3b372e5c058fbc303756df4_XL.jpg",
    "sinop": "https://pagbem.com.br/wp-content/uploads/2022/01/sinop.jpg",
    "marijuana": "https://static.mundoeducacao.uol.com.br/mundoeducacao/conteudo_legenda/maconha.jpeg",
    "shorts": "https://hering.vtexassets.com/arquivos/ids/727029/HBUT-1DEN-C1.jpg?v=638193183565230000",
    "brazil shirt": "https://shoxstore.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/6/1659912068.jpeg",
    "cocaine": "https://img.freepik.com/fotos-premium/linha-de-po-branco-anfetamina-e-cocaina-uma-pessoa-que-toma-uma-dose-de-drogas_667565-436.jpg",
    "person": "https://s2.glbimg.com/jsaPuF7nO23vRxQkuJ_V3WgouKA=/e.glbimg.com/og/ed/f/original/2014/06/10/461777879.jpg",
    "bald": "https://www.al.sp.gov.br/repositorio/deputadoPortal/fotos/20230315-170849-id=1649-PEQ.jpeg",
    "programming": "https://idocode.com.br/wp-content/uploads/2021/07/programacao-scaled.jpg",
    "book": "https://ayine.com.br/wp-content/uploads/2022/03/Miolo-diagonal-O-livro-dos-amigos-site.png",
    "glasses": "https://philiphlondon.vteximg.com.br/arquivos/ids/158403-1000-1000/o%CC%81culos-restart-espelhado-preto-frente.jpg?v=637965362358000000",
    "felipe neto": "https://s2.glbimg.com/et3R54YejzPvI-r1iBLiq51s2LM=/0x0:523x719/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_63b422c2caee4269b8b34177e8876b93/internal_photos/bs/2019/c/J/z1bxemQUSNXgGW6krs6g/felipe-neto.jpeg",
    "luccas neto": "https://yt3.googleusercontent.com/ytc/AGIKgqOZQcsLV7U9vJgMBnDxIO6Z_EC-62rcO1Uz2dKbVg=s900-c-k-c0x00ffffff-no-rj",
    "wifi": "https://www.alura.com.br/artigos/assets/uploads/2017/11/wireless-technology-1967494_640.jpg",
    "2016": "https://st2.depositphotos.com/1004675/8138/i/600/depositphotos_81389618-stock-photo-new-year-2016-clipping-path.jpg",
    "horse": "https://static.biologianet.com/2019/09/cavalo.jpg",
    "javascript": "https://miro.medium.com/v2/resize:fit:1400/0*bQ2s1lDGEYzGjWVU",
    "gamer pc": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/n/a/narok-mancer-intel-rtx-0001_6_16_1.jpg",
}

function changeCSS(cssFile, cssLinkIndex) {

    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);

    document.getElementsByTagName("head").item(cssLinkIndex).replaceChild(newlink, oldlink);
}

function enter(event) {
    var frame = event.currentTarget
    var itemLabel = document.getElementById("itemLabel")
    var zoomImage = document.getElementById("zoomImage")
    zoomImage.src = frame.source
    itemLabel.innerText = frame.name
    //frame.style["border-radius"] = "20px"
    //frame.style["border-color"] = "rgb(255, 255, 255)"
}

var theme = 1

function changeTheme() {
   if (theme == 0) {
    theme = 1
    changeCSS("lightmode.css", 0)
   }
   else {
    theme = 0
    changeCSS("darkmode.css", 0)
   }
}

function leave(event) {
    var frame = event.currentTarget
    var itemLabel = document.getElementById("itemLabel")
    //frame.style["border-radius"] = "10px"
    //frame.style["border-color"] = "rgb(0, 0, 0)"
}

function clearDiv() {
    var resultDiv = document.getElementsByClassName("resultDiv")[0]
    resultDiv.innerHTML = null
    var itemLabel = document.getElementById("itemLabel")
    var zoomImage = document.getElementById("zoomImage")
    var searchInput = document.getElementById("searchInput")
    searchInput.value = ''
    zoomImage.src = ''
    itemLabel.innerText = ''
    var resultLabel = document.getElementById("resultLabel")
    resultLabel.innerHTML = ""
    
}

function input() {
    var inputframe = document.getElementById("searchInput")
    if (inputframe.innerText.length % 45) {
        inputframe.style.height += 20
    }
}

function search() {
    var resultDiv = document.getElementsByClassName("resultDiv")[0]
    resultDiv.innerHTML = null
    var itemLabel = document.getElementById("itemLabel")
    var zoomImage = document.getElementById("zoomImage")
    zoomImage.src = ''
    itemLabel.innerText = ''
    var searchInput = document.getElementById("searchInput")
    var resultLabel = document.getElementById("resultLabel")
    resultLabel.innerHTML = "Image results for: <strong>"+searchInput.value+"</strong>"
    for (var images in backgrounds) {
        console.log(searchInput.innerText.match(images))
        console.log(searchInput.value)
        if (images.match(searchInput.value.toLowerCase())) {
            var result = document.createElement("button")
            result.style.height = "100px"
            result.style.width = "100px"
            result.className = "results"
            result.name = images
            result.source = backgrounds[images]
            result.style.backgroundImage = "url('"+backgrounds[images]+"')"
            result.addEventListener("mouseenter", enter)
            result.addEventListener("mouseleave", leave)
            resultDiv.appendChild(result)
        }
    }
}