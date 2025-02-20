import { projectData } from './data.js';
import Image from "next/legacy/image";
import React from 'react';
import Link from 'next/link';

const Portfolio = () => {
  return (
    <>
      <div className="projects-container">
        <h2>Portfolio</h2>
        <div className='project-cards'>
          {projectData && projectData.map((project) => (
            <div className={`project-card ${project.gradient}`} key={project.id}>
              <Link href={project.link} legacyBehavior>
                <a className="project-link">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="responsive"
                    objectFit="contain"
                    height={100}
                    width={100}
                  />
                </a>
              </Link>

              <div className="project-header">
                {/* Header content */}
              </div>

              <div className='card-description'>
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  {project.tech && (
                    <div className="tech-stack">
                      {project.tech.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  )}
                </div>
                <div className='icon-links'>
                  <div>
                    {project.figmaLink && (
                      <a href={project.figmaLink} className='linkicon' target="_blank" rel="noopener noreferrer">
                        <svg width="16" height="25" viewBox="0 0 34 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_2612_405)">
                            <path d="M8.33333 50.0002C12.9333 50.0002 16.6667 46.2668 16.6667 41.6668V33.3335H8.33333C3.73333 33.3335 0 37.0668 0 41.6668C0 46.2668 3.73333 50.0002 8.33333 50.0002Z" fill="#0ACF83" />
                            <path d="M0 24.9998C0 20.3998 3.73333 16.6665 8.33333 16.6665H16.6667V33.3332H8.33333C3.73333 33.3332 0 29.5998 0 24.9998Z" fill="#A259FF" />
                            <path d="M0 8.33333C0 3.73333 3.73333 0 8.33333 0H16.6667V16.6667H8.33333C3.73333 16.6667 0 12.9333 0 8.33333Z" fill="#F24E1E" />
                            <path d="M16.6665 0H24.9998C29.5998 0 33.3332 3.73333 33.3332 8.33333C33.3332 12.9333 29.5998 16.6667 24.9998 16.6667H16.6665V0Z" fill="#FF7262" />
                            <path d="M33.3332 24.9998C33.3332 29.5998 29.5998 33.3332 24.9998 33.3332C20.3998 33.3332 16.6665 29.5998 16.6665 24.9998C16.6665 20.3998 20.3998 16.6665 24.9998 16.6665C29.5998 16.6665 33.3332 20.3998 33.3332 24.9998Z" fill="#1ABCFE" />
                          </g>
                          <defs>
                            <clipPath id="clip0_2612_405">
                              <rect width="33.3333" height="50" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </a>
                    )}
                    {project.webLink && (
                      <a href={project.webLink} target="_blank" rel="noopener noreferrer">
                        <svg width="25" height="25" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M40 22.05C39.337 22.05 38.7011 22.3134 38.2322 22.7822C37.7634 23.2511 37.5 23.887 37.5 24.55V42.5C37.5 43.163 37.2366 43.7989 36.7678 44.2678C36.2989 44.7366 35.663 45 35 45H7.5C6.83696 45 6.20107 44.7366 5.73223 44.2678C5.26339 43.7989 5 43.163 5 42.5V15C5 14.337 5.26339 13.7011 5.73223 13.2322C6.20107 12.7634 6.83696 12.5 7.5 12.5H25.45C26.113 12.5 26.7489 12.2366 27.2178 11.7678C27.6866 11.2989 27.95 10.663 27.95 10C27.95 9.33696 27.6866 8.70107 27.2178 8.23223C26.7489 7.76339 26.113 7.5 25.45 7.5H7.5C5.51088 7.5 3.60322 8.29018 2.1967 9.6967C0.790177 11.1032 0 13.0109 0 15V42.5C0 44.4891 0.790177 46.3968 2.1967 47.8033C3.60322 49.2098 5.51088 50 7.5 50H35C36.9891 50 38.8968 49.2098 40.3033 47.8033C41.7098 46.3968 42.5 44.4891 42.5 42.5V24.55C42.5 23.887 42.2366 23.2511 41.7678 22.7822C41.2989 22.3134 40.663 22.05 40 22.05ZM49.8 1.55C49.5463 0.939126 49.0609 0.453687 48.45 0.2C48.1494 0.0718974 47.8267 0.00394997 47.5 0H32.5C31.837 0 31.2011 0.263392 30.7322 0.732233C30.2634 1.20107 30 1.83696 30 2.5C30 3.16304 30.2634 3.79893 30.7322 4.26777C31.2011 4.73661 31.837 5 32.5 5H41.475L15.725 30.725C15.4907 30.9574 15.3047 31.2339 15.1778 31.5386C15.0508 31.8432 14.9855 32.17 14.9855 32.5C14.9855 32.83 15.0508 33.1568 15.1778 33.4614C15.3047 33.7661 15.4907 34.0426 15.725 34.275C15.9574 34.5093 16.2339 34.6953 16.5386 34.8222C16.8432 34.9492 17.17 35.0145 17.5 35.0145C17.83 35.0145 18.1568 34.9492 18.4614 34.8222C18.7661 34.6953 19.0426 34.5093 19.275 34.275L45 8.525V17.5C45 18.163 45.2634 18.7989 45.7322 19.2678C46.2011 19.7366 46.837 20 47.5 20C48.163 20 48.7989 19.7366 49.2678 19.2678C49.7366 18.7989 50 18.163 50 17.5V2.5C49.9961 2.17331 49.9281 1.85056 49.8 1.55Z" fill="#91C301" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Portfolio;