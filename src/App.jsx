import './App.sass'
import { AiOutlineTwitter, AiOutlineGithub, AiFillYoutube } from 'react-icons/ai'
import { GiStarSattelites } from 'react-icons/gi'
import { SiChakraui, SiSupabase, SiNodedotjs, SiReact } from 'react-icons/si'
import { BsStars, BsBookFill } from 'react-icons/bs'

function App() {

  return (
    <div className='container'>
      <div className='page-container'>
        <div className='navbar'>
          <a><GiStarSattelites className='logo-icon' /></a>
          <div className='nav-icon-container'>
            <a><AiOutlineGithub className='navbar-icon' onClick={() => {window.location.href='https://github.com/hazyvt'}} /></a>
            <a><AiOutlineTwitter className='navbar-icon' onClick={() => {window.location.href='https://twitter.com/hazyvt'}}/></a>
            <a><AiFillYoutube className='navbar-icon' onClick={() => {window.location.href='https://www.youtube.com/channel/UC0S1cmn-MBXUeUAwdmXQGEA'}}/></a>
          </div>
        </div>
        <div className='mid-content'>
          <div className='hero'>
            <h1>Mohammed <span>Salim</span></h1>
            <p>Experienced Web Developer</p>
          </div>
          <div className='about-me'>
            <img src='./kitty1.jpeg' />
            <p>My name is Mohammed Salim. I am 22 years old 
              studying software enginnering. 
              I love animal crossing, cats and coding my ideas. </p>
          </div>
          <div className='portfolio'>
            <h1>Portfolio</h1>
            <p>Here are all of my beloved personal projects
              for you to feast your eyes on
            </p>
            <div className='project-container'>
              <div className='project' onClick={() => {window.open("https://shinedle.mosalim.site", "_blank")}}>
                <BsStars />
                <h4>Shinedle</h4>
                <p>A web app that gives you a random pokemon to shiny hunt daily.</p>
                <div className='project-tech'>
                  <SiNodedotjs />
                  <SiReact />
                  <SiChakraui />
                </div>
              </div>
              <div className='project' onClick={() => {window.open("https://branch.mosalim.site", "_blank")}}>
                <BsBookFill />
                <h4>Branch</h4>
                <p>A web app made to allow students to study distraction free.</p>
                <div className='project-tech'>
                  <SiNodedotjs />
                  <SiReact />
                  <SiChakraui />
                  <SiSupabase />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
