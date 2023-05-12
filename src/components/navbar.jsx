import Link from "next/link";

const Navbar = () => {
    return (
        <div className="nav-container">
            {/* <div className="logo">
                <Link href="/">
                    Kseniia's Portfolio
                </Link>
            </div> */}
            <a href="https://docs.google.com/document/d/1LdfcIyMGGdPgtWxnfvEp2GVLo3Fx4AVCBQCFM-p828M/edit?usp=sharing" className="cta-btn">my CV</a>
        </div>
    )
}

export default Navbar;