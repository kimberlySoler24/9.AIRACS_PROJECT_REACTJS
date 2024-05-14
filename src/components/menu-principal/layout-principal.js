import NavbarPrincipal from "./navbar-principal"
import FooterPrincipal from "./footer-principal"
// import "../estilos/estilo-navbar.css"
// import "../estilos/estilo-footer.css"
// import "../estilos/estilo-principal.css"

export default function LayoutPrincipal({children, login}) {
    return (
        <>
        <NavbarPrincipal login={login}></NavbarPrincipal>
        <main>{children}</main>
        <FooterPrincipal></FooterPrincipal>
    </>
    );
} 