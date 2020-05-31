import React from 'react'
import Youtube from 'react-youtube-embed'
import './App.css';
import Header from './layout/Header'

import team from './layout/assets/sections/team.jpeg'
import allTeams2019 from './layout/assets/sections/spaceapps2019.jpeg'
import cat from './layout/assets/sections/cat.png'
import iconCat from './layout/assets/sections/iconcat.svg'

import aby from './layout/assets/people/aby.png'
import feli from './layout/assets/people/feli.png'
import male from './layout/assets/people/male.png'
import azul from './layout/assets/people/azul.png'
import lucas from './layout/assets/people/lucas.png'
import fran from './layout/assets/people/fran.png'

import {Section, SectionCard, VideoCard} from './layout/Section'
import {Carousel} from './layout/Carousel'

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <section>
          <div>
            <h1>Welcome, humans!</h1>
            <h2>to the Alpha Miau Space Program!</h2>
          </div>
          <Section name="What we do">
            <SectionCard image={team} key="1">
              We're part of NASA's International Space Apps Challenge.
              Every year we choose a challenge given to us by NASA,
              with the objective to complete it in 48 hours,
              using their data to make an impact across the whole galaxy!
            </SectionCard>
            <SectionCard image={iconCat} key="2">
              We are a group of videogame enthusiasts,
              who worship our cat overlords.
              We aim to bring cuteness and perfect solutions
              to the problems of the human race.
            </SectionCard>
            <SectionCard image={cat} key="3">
              Join us in this adventure!
              We're waiting for you :)
            </SectionCard>           
          </Section>
          <Section name="Our history" vertical>
            <SectionCard key="a" image={team}>
              We started working together in 2019,
              on the first SpaceApps Challenge that was hosted in La Plata, Buenos Aires, Argentina.
            </SectionCard>
            <SectionCard image={iconCat}>
              We built a game based on the "Build a Planet" challenge - where the player customized
              their own planet using real data from NASA,
              eventually being surrounded by other people's planets
              in a virtual solar system and galaxy.
            </SectionCard>
            <SectionCard image={allTeams2019}>
              We worked, had fun, met a whole lot of people, didn't sleep and more...
              All of this in our first hackathon together (for many of us it was our first!)
              It was quite the experience, being awarded the local "Most Inspirational" award
            </SectionCard>
          </Section>
          <Section name="Our projects">
              <VideoCard>
                <h2>2019: Build your own planet!</h2>
                <Youtube id="PpA_zegOq9w" />
              </VideoCard>
          </Section>
          <Section name="The Team">
            <Carousel>
              <div>
                <img src={aby} alt="Aby" />
                <h3>Abril Aleuy</h3>
                <p>Creative Student of Design and Development of Multimedia Art Content. UNLP - Multimedia Design (...and superhero at night)</p>
              </div>
              <div>
                <img src={feli} alt="Feli" />
                <h3>Felipe Buiras</h3>
                <p>CS student at UNLP and Blockchain Developer, cat lover</p>
              </div>
              <div>
                <img src={male} alt="Male" />
                <h3>Malena Galván</h3>
                <p>20 años. Estudiante en la carrera de Diseño Multimedial de la Universidad Nacional de La Plata. Amante del universo visual en todas sus formas, diseño, fotografía, artes plásticas. Nunca no estoy pensando en una paleta de colores.</p>
              </div>
              <div>
                <img src={azul} alt="Azul" />
                <h3>Azul Celada</h3>
                <p>Industrial engineering student. Space enthusiast. Loves fluffy animals.</p>
              </div>
              <div>
                <img src={lucas} alt="Lucas" />
                <h3>Lucas Pettigrosso</h3>
                <p>Multimedia Design student in the Arts Faculty of UNLP.</p>
              </div>
              <div>
                <img src={fran} alt="Fran" />
                <h3>Francisco Maciel</h3>
                <p>studying to become a Business Administrator in the Economics Faculty of the UNLP. He loves numbers and data and it's helping out the team to sort trust-worthy 
@NASA data that is relevant to our game creation.</p>
              </div>
            </Carousel>
          </Section>
        </section>
        <footer>

        </footer>
      </div>
    </>
  );
}

export default App;
