import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import PhotoAndDescription from './Components/Body/PhotoAndDescription';
import Experience from './Components/Body/Experience';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExperienceHeading from './Components/Headings/ExperienceHeading';
import University from './Components/Education/University';
import EducationHeading from './Components/Headings/EducationHeading';
import Skill from './Components/Skills/Skill';
import SkillsHeading from './Components/Headings/SkillsHeading';
import Resume from './Components/Resume/Resume';
import ResumeHeading from './Components/Headings/ResumeHeading';

function App() {
  return (
    <div className="App">
      <Navbar />
      <PhotoAndDescription />
      <SkillsHeading />
      <Skill />
      <ExperienceHeading />
      <Experience />
      <EducationHeading />
      <University />
      <ResumeHeading />
      <Resume />
    </div>
  );
}

export default App;
