import AboutBox from "@/Components/About/AboutBox";
import Skill from "@/Components/Skill/Skill";
import skillsData from "@/Components/SkillsData";
import skills from "@/Components/SkillsData";
import Layout from "@/Layout/Layout";
import { TypeAnimation } from 'react-type-animation';



export default function Home() {
  return (
    <>
      <Layout>
        <div className="container min-w-full min-h-full">
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
            <h1>ABOUT ME</h1>
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
            <h1>MY SKILLS</h1>
            <h2>Technologies</h2>
            <span className="line"></span>
            <section className="skills w-5/6 mt-auto h-4/6 flex items-stretch justify-between flex-wrap ">
              {skillsData.map(skill => (
                <Skill {...skill} />
              ))}

            </section>


          </div>

        </div>
      </Layout>
    </>
  )
}
