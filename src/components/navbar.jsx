import Link from "next/link";

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo">
                <Link href="/">
                    Kseniia's Portfolio
                </Link>
            </div>
            <a href="https://docs.google.com/document/d/1JN5ijati-sdoxcxXw2EOCigUsUTEwk8VYc1Bnr3oWsM/edit?usp=sharing" className="cta-btn">Resume</a>
        </div>
    )
}

export default Navbar;