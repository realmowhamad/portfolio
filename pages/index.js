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


        </div>
      </Layout>
    </>
  )
}
