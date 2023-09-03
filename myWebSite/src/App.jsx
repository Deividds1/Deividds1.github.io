import { useState } from 'react'
import './App.css'

function App() {

  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    console.log("hola");
    setMenuAbierto(!menuAbierto);
  };

  const [animacion1, setAnimacion1] = useState(false);
  const [animacion2, setAnimacion2] = useState(false);
  const [animacion3, setAnimacion3] = useState(false);
  const [animacion4, setAnimacion4] = useState(false);

  const toggleAnimacion = (boton) => {
    switch (boton) {
      case 'boton1':
        setAnimacion1(true);
        setTimeout(() => {
          setAnimacion1(false);
        }, 1000);
        break;
      case 'boton2':
        setAnimacion2(true);
        setTimeout(() => {
          setAnimacion2(false);
        }, 1000);
        break;
      case 'boton3':
        setAnimacion3(true);
        setTimeout(() => {
          setAnimacion3(false);
        }, 1000);
        break;
      case 'boton4':
        setAnimacion4(true);
        setTimeout(() => {
          setAnimacion4(false);
        }, 1000);
        break;
      default:
        break;
    }
  };

  return (
    <div className='fade-in'>
      <header className="fixed-top">
        <section className="toparea">

          <div className="divnav">
            <nav className="navbar">

              <ul className="navlist">
                <div className={`nav-container-one ${animacion1 ? 'jello-horizontal' : ''}`}
                  onClick={() => toggleAnimacion('boton1')}>
                  <li><a className="links" href="#about">About</a></li>
                </div>
                <div className={`nav-container-four ${animacion4 ? 'jello-horizontal' : ''}`}
                  onClick={() => toggleAnimacion('boton4')}>
                  <li><a className="links" href="#projects-title">Projects</a></li>
                </div>
                <div className={`nav-container-two ${animacion2 ? 'jello-horizontal' : ''}`}
                  onClick={() => toggleAnimacion('boton2')}>
                  <li><a className="links" href="#technologies-title">Technologies</a></li>
                </div>
                <div className={`nav-container-three ${animacion3 ? 'jello-horizontal' : ''}`}
                  onClick={() => toggleAnimacion('boton3')}>
                  <li><a className="links" href="#contact">Contact</a></li>
                </div>

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
          <h1 className='title space'>About</h1>
          <p className='space history text-focus-in'>
            My name is Deivid, and I'm a calm guy who enjoys spending quality time with family and friends. As a hobby, I exercise, take my dogs for walks, and study programming. I have big dreams and goals; I want to become a senior developer, and I dedicate myself every day to learn more and reach that level. I also want to travel the world and help the people I love.

            During my journey, I faced certain difficulties. I didn't have the means to study what I was truly passionate about (programming), so I pursued other things, but I realized I didn't enjoy them. That's when I decided to study programming on my own through online courses. Later on, I had the opportunity to attend a web development bootcamp, and I didn't hesitate; I enrolled and learned a lot. At times, I found it challenging to grasp certain concepts or complete complex projects, but I always faced those difficulties head-on and overcame them.

            Today, I'm eagerly looking forward to starting work as a programmer and putting into practice the knowledge I've acquired. However, I'm aware that I still have much to learn and progress in my journey.
          </p>
        </div>
        <div className='img-container'>
          <div className='txt-img'>
            <h1 className='name'>Deivid Dos Santos</h1>
            <p className='job'>Full Stack Web Developer</p>
          </div>

          <img src="/deivid.JPG" alt="Deivid Dos Santos picture" />
        </div>
      </section>
      <h1 id="projects-title" className='header'>Projects</h1>
      <section id='projects'>

        <div className='project-container heartbeat'>

          <a href="https://creditcardsite.netlify.app/" target='_blank'>
            <div className='heartbeat'>
              <h2>Credit Card site</h2>
              <img src="/creditcard.png" alt="credit card form website" />
            </div>
          </a>
        </div>


        <div className='project-container heartbeat'>
          <a href="https://ipaddresstrackerpro.netlify.app/" target='_blank'>
            <div className='heartbeat'>
              <h2>IP Address Tracker site</h2>
              <img src="/iptracker.png" alt="ip adress tracker website" />
            </div>
          </a>
        </div>


        <div className='project-container'>
          <a href="https://todoapppro.netlify.app/" target='_blank'>
            <div className='heartbeat'>
              <h2>To Do app</h2>
              <img src="/todo.png" alt="to do app website" />
            </div>
          </a>
        </div>


        <div className='project-container'>
          <a href="https://vazdefiesta.vercel.app/" target='_blank'>
            <div className='heartbeat'>
              <h2>Vaz de fiesta</h2>
              <img src="/vaz.png" alt="vaz de fiesta website" />
            </div>
          </a>
        </div>

      </section>
      <h1 id='technologies-title' className='header'>Technologies</h1>
      <section id='technologies'>
        <div className='tech-container'><img src="/react.png" alt="react logo" /></div>
        <div className='tech-container'><img src="/html.png" alt="html logo" /></div>
        <div className='tech-container'><img src="/css.png" alt="css logo" /></div>
        <div className='tech-container'><img src="/postgre.png" alt="postgre logo" /></div>
        <div className='tech-container'><img src="/node.png" alt="node logo" /></div>
        <div className='tech-container'><img src="/javascript.png" alt="javascript logo" /></div>

      </section>
      <section id='contact'>
        <h1>Contact me!</h1>

        <div className="contact-links">
          <a href="tel:+59897346427" className="btn contact-details"><i className="fas fa-mobile-alt"></i> Phone number</a>
          <a id="profile-link" href="https://github.com/Deividds1" className="btn contact-details" target="_blank"><i className="fab fa-github"></i> GitHub</a>
          <a href="https://www.linkedin.com/in/leodossantospc/" className="btn contact-details" target="_blank"><i className="fab fa-linkedin"></i> Linkedin</a>
          <a href="mailto:deivid1421@gmail.com" className="btn contact-details"><i className="fas fa-envelope"></i> Email</a>
        </div>

      </section>
      <footer></footer>
    </div>
  )
}

export default App
