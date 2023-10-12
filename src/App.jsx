import './App.sass'
import { AiOutlineTwitter, AiOutlineGithub, AiFillYoutube } from 'react-icons/ai'
import { GiStarSattelites } from 'react-icons/gi'
import { SiChakraui, SiSupabase, SiNodedotjs, SiReact } from 'react-icons/si'

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
            <h1>Hazy<span>Rain</span></h1>
            <p>Good Programming, Bad Ideas</p>
          </div>
          <div className='about-me'>
            <img src='./kitty1.jpeg' />
            <p>My name is Mohammed Salim. I am 22 years old 
              studying software enginnering. 
              I love animal crossing, cats and coding my really bad ideas. </p>
          </div>
          <div className='portfolio'>
            <h1>Portfolio</h1>
            <p>Here are all of my beloved personal projects
              for you to feast your eyes on
            </p>
            <div className='project-container'>
              <div className='project' onClick={() => {window.location.href='https://shinedle.mosalim.site'}}>
                <img src='./shinedle.png' />
                <p>Shinedle is a daily shiny hunting minigame
                  webapp for pokemon.
                </p>
                <div className='tech-icon-container'>
                  <SiNodedotjs className='icon'/>
                  <SiReact className='icon'/>
                  <SiChakraui className='icon'/>
                </div>
              </div>
              <div className='project' onClick={() => {window.location.href='https://gdb.mosalim.site'}}>
                <img src='./gamedb.png' />
                <p>GameDB is a webapp for storing and scoring games
                  you've played.
                </p>
                <div className='tech-icon-container'>
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
