import Image from "next/image";
import profileimg from '/public/kseniia_portfolio.jpg' 

const Hero = () => {
    return (
        <div className="hero-container">
            <div className="header-name">Kseniia's</div>
            <Image src={profileimg} className="profile-img" layout="responsive" objectFit="cover"  width={1024} height={671.68} alt="Kseniia's personal headshot" />
            <div className="header-portfolio">portfolio</div>            
            <div className="hero-text">
                <h1>Hey, I'm Kseniia 👋</h1>
                <p>
                    I'm a web designer/developer based in London, UK. I specialize in building (and occasionally designing) exceptional websites, applications, and everything in between.
                </p>
                <div className="social-icons">
                    {/* <a
                        href="https://twitter.com/olawanle_joel"
                        aria-label="Twitter"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-twitter"></i>
                    </a> */}
                    {/* <a
                        href="https://github.com/olawanlejoel"
                        aria-label="GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-github"></i>
                    </a> */}
                    {/* <a
                        href="https://www.linkedin.com/in/kseniia-lysiakova/"
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-linkedin"></i>
                    </a> */}
                </div>
            </div>
        </div>
    )
}

export default Hero;