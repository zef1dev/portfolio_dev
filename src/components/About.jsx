import Image from "next/image";

const About = () => {
    return (
        <div className="about-container">
            <h2>About Me</h2>
            <div className="flex-about">
                <div className="about-text">
                    <p>As a skilled web developer with experience in UI design, I have a strong understanding of web development best practices and extensive knowledge of HTML5, CSS3, React, JavaScript. I have experience working with popular CMS, and have a good understanding of SEO. My strong Figma and Adobe skills enable me to design better data visualizations leading to effective and user-friendly websites. 

                    </p>
                    <p>I am a fast learner and have experience working in an international startup environment. I am always eager to learn and explore new technologies, and I am constantly seeking out opportunities to improve my skills and knowledge.</p>
                </div>
                <div className="about-img">
                    <Image src='/images/about.jpeg' className="profile-img" width={368} height={437} alt="Joe and animal relaxing and having fun" />
                </div>
            </div>
        </div>

    )
}

export default About;