import React from 'react';
import './Main.css'
import Background from './Background/Background';
import Word from './BackgroundWord/Word';

function Main () {
    return(
        <main className='Total-Main-wrapper'>
            <Background />
            <Word />
        </main>
    );
}

export default Main;