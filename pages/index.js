import AboutBox from "@/Components/About/AboutBox";
import ContactForm from "@/Components/ContactMe/ContactMe";
import Experience from "@/Components/Experience/Experience";
import ExperiencesData from "@/Components/Experience/ExperienceData";
import Skill from "@/Components/Skill/Skill";
import skillsData from "@/Components/SkillsData";
import skills from "@/Components/SkillsData";
import Layout from "@/Layout/Layout";
import Link from "next/link";
import { TypeAnimation } from 'react-type-animation';
import { FaHome, FaPhoneAlt } from 'react-icons/fa'
import { MdMail } from 'react-icons/md'
import { BsLinkedin, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs'
import { useEffect, useState } from "react";
import NotAvailable from "@/Components/NotAvailable/NotAvailable";
import { useMediaQuery } from "@/Components/useMediaQuery";



export default function Home() {
  const [responsive, setResponsive] = useState(false)
  const isDesktop = useMediaQuery("(min-width:1023px)")


  useEffect(() => {
    setResponsive(prev => !prev)
  }, [isDesktop])
  return (
    <>
      <Layout>
        {isDesktop ?
          (<div className="container min-w-full min-h-full">
            <div className="background absolute"></div>
            <div className="main ">
              <h1>Welcome</h1>
              <span style={{ fontSize: '5em', color: "white" }}>

                <TypeAnimation
                  sequence={[
                    `I'm a FreeLancer`,
                    3000,
                    `I'm a Front-End Developer`,
                    3000,
                    `I'm a Designer`,
                    3000,

                  ]}
                  repeat={Infinity}

                />
              </span>
              <h6>based in London, United Kingdom</h6>
              <button className="hireMeBtn">Hire Me</button>
            </div>



            <section className="about">
              <h1 className="backTitle">ABOUT ME</h1>
              <h2>Know Me More</h2>
              <span className="line"></span>
              <div className="interview ">
                <section className="whoIAm">
                  <h1>Im <span>Mohammad Mirhoseini,</span> a junior front-end developer</h1>
                  <p>I help you build a website for your brand. I'm a perfectionist person so you can trust me because I always use new technologies and build websites with The smallest details.
                  </p>
                </section>
                <section className="box ">
                  <AboutBox title={"Name:"} detail={"Mohammad Mirhoseini"} />
                  <AboutBox title={"Email:"} detail={"realmowhamad@gmail.com"} link={"realmowhamad@gmail.com"} isLink={true} />
                  <AboutBox title={"Age:"} detail={"27"} />
                  <AboutBox title={"From:"} detail={"London, United Kingdom"} />
                </section>
              </div>
            </section>

            <div className="skillSection">
              <h1 className="backTitle">MY SKILLS</h1>
              <h2>Technologies</h2>
              <span className="line"></span>
              <section className="skills w-5/6 mt-auto h-4/6 flex items-stretch justify-between flex-wrap ">
                {skillsData.map(skill => (
                  <Skill {...skill} />
                ))}
              </section>
              <Link className='my-4 border px-4 py-2 rounded-md text-[#58c3ef] ' href="/1.pdf" download >Download CV</Link>
            </div>



            <div className="resume">
              <h1 className="backTitle">SUMMARY</h1>
              <h2>Resume</h2>
              <span className="line"></span>
              <section className="experiences">
                {ExperiencesData.map(x => (
                  <Experience {...x} />
                ))}
              </section>
            </div>


            <div className="ContactMe">
              <h1 className="backTitle">CONTACT</h1>
              <h2>Get in Touch</h2>
              <span className="line"></span>
              <div className="adressInfo">
                <ul>
                  <h6>ADRESS</h6>
                  <li>
                    <i><FaHome /></i>
                    <p>Lorem ipsum dolor sit amet.</p>
                  </li>
                  <li>
                    <i><FaPhoneAlt /></i>
                    <p>(+44) 737 122 737</p>
                  </li>
                  <li>

                    <i><MdMail /></i>
                    <p>Realmowhamad@gmail.com</p>
                  </li>
                  <li>
                    <div className="socialMedia">
                      <h6>FOLLOW ME</h6>
                      <ul>
                        <a href="">
                          <li>
                            <i><BsLinkedin /></i>
                          </li>
                        </a>
                        <a href="">
                          <li>
                            <i><BsGithub /></i>
                          </li>
                        </a>
                        <a href="">
                          <li>
                            <i><BsTwitter /></i>
                          </li>
                        </a>
                        <a href="">
                          <li>
                            <i><BsInstagram /></i>
                          </li>
                        </a>
                      </ul>

                    </div>
                  </li>

                </ul>
                <ContactForm />
              </div>
            </div>
          </div >
          ) : <NotAvailable />
        }
      </Layout >
    </>
  )
}
