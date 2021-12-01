class MyHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <header id="myTopnav">
        <a href="index.html" class="active">Главная</a>
        <a href="gallery.html">Галерея</a>
        <a href="comets.html">Кометы</a>
        <div class="dropdown">
            <button class="dropbtn">Главные объекты</button>
            <div class="dropdown-content">
                <a href="sun.html">Солнце</a>
                <a href="mercury.html">Меркурий</a>
                <a href="venus.html">Венера</a>
                <a href="earth.html">Земля</a>
                <a href="mars.html">Марс</a>
                <a href="jupiter.html">Юпитер</a>
                <a href="saturn.html">Сатурн</a>
                <a href="uranus.html">Уран</a>
                <a href="neptune.html">Нептун</a>
            </div>
        </div>
        <a href="scientists.html">Ученые</a>
        <a href="javascript:void(0);" class="icon" onclick="myFunction()">&#9776;</a>
    </header>
    
        `
    }
}

customElements.define('my-header', MyHeader)

class MyFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <div class="social">
            <a href="https://github.com/IvanCherepanov" target="_blank"><img src="resources/social/GitHub-Mark-Light-32px.png"></a>
            <a href="mailto:iv.cherenov8@yandex.ru" target="_blank"><img src="resources/social/em.png"></a>
            <a href="https://vk.com/id120160951" target="_blank"><img src="resources/social/vk.png"></a>
        </div>
        <p>Курсовая работа 2021</p>
        `
    }
}

customElements.define('my-footer', MyFooter)