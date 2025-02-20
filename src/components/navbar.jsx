import Link from "next/link";

const Navbar = () => {
    return (
        <div className="nav-container">
            {/* <div className="logo">
                <Link href="/">
                    Kseniia's Portfolio
                </Link>
            </div> */}
            
            <a href="https://docs.google.com/document/d/1R8r83TRzaf_J4ta3-Eju5hrvkWhTaAuYSXxQR--1vug/edit?usp=sharing" target="_blank" className="cta-btn">my CV</a>
        </div>
    )
}

export default Navbar;