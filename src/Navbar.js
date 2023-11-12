import "./App.css";
export default function NavBar(){
    return( <nav className="nav">
        <a href = "/" className="Home">Bengal Books</a>
        <ul>
            <CustomLink href="/Login">Login</CustomLink>
            <CustomLink href="/Books">Books</CustomLink>
            <CustomLink href="/Account">Account</CustomLink>
        </ul>
    </nav>
    )
}

function CustomLink({href, children, ...props}){
    const path = window.location.pathname
    return(
        <li className = {path === href ? "active" : ""}>
            <a href={href} {...props}>
                {children}</a>
        </li>
    )

}