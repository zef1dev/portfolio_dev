import Image from "next/legacy/image";

const About = () => {
    return (
        <div className="about-container">

            <div className="flex-about">
                <div className="about-img">
                    <Image src='/images/about.jpeg' className="profile-img" width={368} height={437} alt="Joe and animal relaxing and having fun" />
                </div>

                <div className="about-text">
                    <div className="header-name">Hey, I'm Kseniia 👋</div>

                    <p>
                        I'm a dynamic Frontend Developer with 3+ years of experience crafting high-performance web applications using React.js, Next.js, and TypeScript. Based in London, UK, I specialize in building scalable, responsive, and exceptionally functional websites, applications, and everything in between.                </p>
                    <p>
                        As a skilled web developer with experience in UI design, I have a strong understanding of web development best practices and semantic standards. My expertise includes working with modern frameworks along with traditional technologies, and I have a good understanding of SEO. My strong React and Agile skills enable me to design better user experiences.

                    </p>
                    <p>
                        Having demonstrated success across startup and agency environments, I bring genuine passion for solving complex technical challenges through clean, efficient code. I'm seeking a long-term opportunity with a forward-thinking team where I can grow professionally while delivering exceptional solutions in a collaborative corporate environment.
                    </p>
                </div>
                <div className="social-icons">
                    <a
                        href="https://twitter.com/olawanle_joel"
                        aria-label="Twitter"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="iconify" data-icon="mdi:twitter" data-width="24"></span>
                    </a>

                    <a
                        href="https://github.com/olawanlejoel"
                        aria-label="GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="iconify" data-icon="mdi:github" data-width="24"></span>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/kseniia-lysiakova/"
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="iconify" data-icon="mdi:linkedin" data-width="24"></span>
                    </a>
                </div>
            </div>
        </div>

    )
}

export default About;