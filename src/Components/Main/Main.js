import React from 'react';
import './Main.css';
import Background from './Background/Background';
import Word from './BackgroundWord/Word';
import Close from './CloseTrip/CloseTrip';
import Live from './TobeLive/ToBeLive';
import Wisdom from './Wisdom/Wisdom';
import Experience from './Experience/Experience';
import Hosting from './StartHosting/StartHosting';

function Main() {
  return (
    <main className="Total-Main-wrapper">
      <Background />
      <Word />
      <Close />
      <Live />
      <Wisdom />
      <Experience />
      <Hosting />
    </main>
  );
}

export default Main;
