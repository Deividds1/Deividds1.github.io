import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    console.log("hola");
    setMenuAbierto(!menuAbierto);
  };

  return (
    <div>
      <header className="fixed-top" /* style={{ position: headerPosition }} */>
        <section className="toparea">

          <div className="divnav" /* style={{ display: navDisplay }} */>
            <nav className="navbar">

              <ul className="navlist">
                <li><a className="links" href="#about">About</a></li>
                <li><a className="links" href="#projects-title">Projects</a> </li>
                <li><a className="links" href="#technologies-title">Technologies</a> </li>
                <li><a className="links" href="#contact">Contact</a> </li>

              </ul>
            </nav>
          </div>
          <span onClick={toggleMenu} id="burguer" className="material-symbols-outlined">
            menu
          </span>
        </section>

        <section className="secondnav">
          <nav className="secondnavbar">
            <div className={`menu-container ${menuAbierto ? 'abierto' : ''}`}>
              <ul>
                <li><a onClick={toggleMenu} className="links hamburguesa1" href="#about">About</a></li>
                <li><a onClick={toggleMenu} className="links hamburguesa2" href="#projects-title">Projects</a> </li>
                <li><a onClick={toggleMenu} className="links hamburguesa3" href="#technologies-title">Technologies</a> </li>
                <li><a onClick={toggleMenu} className="links hamburguesa4" href="#contact">Contact</a> </li>
              </ul>
            </div>
          </nav>

        </section>

      </header>
      <section id='about'>
        <div className='txt-container'>
          <h1 className='space'>About</h1>
          <p className='space'>
            My name is Deivid, and I'm a calm guy who enjoys spending quality time with family and friends. As a hobby, I exercise, take my dogs for walks, and study programming. I have big dreams and goals; I want to become a senior programmer, and I dedicate myself every day to learn more and reach that level. I also want to travel the world and help the people I love.

            During my journey, I faced certain difficulties. I didn't have the means to study what I was truly passionate about (programming), so I pursued other things, but I realized I didn't enjoy them. That's when I decided to study programming on my own through online courses. Later on, I had the opportunity to attend a web development bootcamp, and I didn't hesitate; I enrolled and learned a lot. At times, I found it challenging to grasp certain concepts or complete complex projects, but I always faced those difficulties head-on and overcame them.

            Today, I'm eagerly looking forward to starting work as a programmer and putting into practice the knowledge I've acquired. However, I'm aware that I still have much to learn and progress in my journey.
          </p>
        </div>
        <div className='img-container'>
          <img src="/deivid.JPG" alt="" />
        </div>
      </section>
      <h1 id="projects-title" className='header'>Projects</h1>
      <section id='projects'>

        <div className='project-container'>
          <h2>Credit Card site</h2>
          <a href="https://creditcardsite.netlify.app/" target='_blank'>
            <img src="/creditcard.png" alt="" />
          </a>
        </div>


        <div className='project-container'>
          <h2>IP Address Tracker site</h2>
          <a href="https://ipaddresstrackerpro.netlify.app/" target='_blank'>
            <img src="/iptracker.png" alt="" />
          </a>
        </div>


        <div className='project-container'>
          <h2>To Do app</h2>
          <a href="https://todoapppro.netlify.app/" target='_blank'>
            <img src="/todo.png" alt="" />
          </a>
        </div>


        <div className='project-container'>
          <h2>Vaz de fiesta</h2>
          <a href="https://vazdefiesta.vercel.app/" target='_blank'>
            <img src="/vaz.png" alt="" />
          </a>
        </div>

      </section>
      <h1 id='technologies-title' className='header'>Technologies</h1>
      <section id='technologies'>
        <div className='tech-container'><img src="/react.png" alt="" /></div>
        <div className='tech-container'><img src="/html.png" alt="" /></div>
        <div className='tech-container'><img src="/css.png" alt="" /></div>
        <div className='tech-container'><img src="/postgre.png" alt="" /></div>
        <div className='tech-container'><img src="/node.png" alt="" /></div>
        <div className='tech-container'><img src="/javascript.png" alt="" /></div>

      </section>
      <section id='contact'>
        <h1>Contact me!</h1>

        <div class="contact-links">
          <a href="tel:+59897346427" class="btn contact-details"><i class="fas fa-mobile-alt"></i> Phone number</a>
          <a id="profile-link" href="https://github.com/Deividds1" class="btn contact-details" target="_blank"><i class="fab fa-github"></i> GitHub</a>
          <a href="https://www.linkedin.com/in/leodossantospc/" class="btn contact-details" target="_blank"><i class="fab fa-linkedin"></i> Linkedin</a>
          <a href="deivid1421@gmail.com" class="btn contact-details"><i class="fas fa-envelope"></i> Email</a>
        </div>

      </section>
      <footer></footer>
    </div>
  )
}

export default App
