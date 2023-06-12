import Link from "next/link";

const Navbar = () => {
    return (
        <div className="nav-container">
            {/* <div className="logo">
                <Link href="/">
                    Kseniia's Portfolio
                </Link>
            </div> */}
            <a href="https://drive.google.com/file/d/1SVrPhW9K9nRkPUO3mQwxFHW1t7w38mzw/view?usp=drive_link" target="_blank" className="cta-btn">my CV</a>
        </div>
    )
}

export default Navbar;