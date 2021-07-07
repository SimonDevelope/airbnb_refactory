import React from 'react';
import './Footter.css';
import Info from './Information/Information';
import Policy from './Policy/Policy';

function Footter () {
    return(
        <>
            <footer className='footter-total-area-attr'>
                <Info />
                <Policy />
            </footer>
        </>
    );
}

export default Footter;