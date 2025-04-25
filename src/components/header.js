
function Header() {
    const url = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Chaves_logo.svg/1024px-Chaves_logo.svg.png";
    return (
        <header>
            <a href="/"><img src={url} alt="Logo do Chaves" className="logo" /></a>
            <nav>
                <a href="/">Início</a>
                <a href="/">Sobre</a>
                <a href="/">Contato</a>
            </nav>
        </header>
    );
}

export default Header;