import React from 'react';
import './App.css';
import Header from './layout/Header'

import team from './layout/assets/sections/1.svg'
import allTeams2019 from './layout/assets/sections/1.svg'
import cat from './layout/assets/sections/1.svg'
import iconCat from './layout/assets/sections/1.svg'
// import allTeams2019 from './layout/assets/sections/spaceapps2019.jpeg'
// import cat from './layout/assets/sections/cat.png'
// import iconCat from './layout/assets/sections/icon cat.png'

import {Section, SectionCard} from './layout/Section'

function Carousel() {
  return <div></div>
}
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
          <Section name="Our projects" vertical>
              <SectionCard>

              </SectionCard>
          </Section>
          <Section name="The Team">
            <Carousel />
          </Section>
        </section>
        <footer>

        </footer>
      </div>
    </>
  );
}

export default App;
