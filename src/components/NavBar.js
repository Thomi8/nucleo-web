import CardWidget from "./CartWidget";

const NavBar = () => {
    return (
        <> 
            <div>
                <div class="main-header__container">
                <h1 className="main-header__title">NÚCLEO</h1>
                    <span class="icon-menu" id="btn-menu"><i class="fas fa-bars"></i></span>
                    <nav class="main-nav" id="main-nav">
                        <ul class="menu">
                            <li class="menu__item"><a href="index.html" class="menu__link">HOME</a></li>
                            <li class="menu__item"><a href="./html/mercado.html" class="menu__link">MERCADO</a></li>
                            <li class="menu__item"><a href="./html/contacto.html" class="menu__link">CONTACTO</a></li>
                        </ul>
                    </nav>
                </div>
                <CardWidget />
            </div>
<<<<<<< HEAD
        </>
        
=======
            <CardWidget />
        </div>
>>>>>>> ffe8f76d390b0e5ec9121da8f6ab061ee30756fc
    )
}

export default NavBar;