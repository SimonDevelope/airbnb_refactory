import React from 'react';
import './MiddleMenu.css';
import {Lodge} from './SearchBar/SearchBar';

export const MenuList = ({content}) => {
    return (
        <>
            <label>
                <input 
                className='Menu-btn-atr'
                type='radio'
                ></input>
                <span className='Name-wrapper'>{content.name}</span>
            </label>
        </>
    );
}

function MiddleMenu () {
    const contents = [
        {
            id: 1,
            name: '숙소'
        },
        {
            id: 2,
            name: '체험'
        },
        {
            id: 3,
            name: '온라인 체험'
        },
    ]

    return(
        <div className='Middle-menu-outter-wrapper'>
            <div className='Middle-inner-contents-wrapper'>
                <div>
                    <div>
                        <form className='Middle-inner-area-attr'>
                            <fieldset className='Middle-inner-contents-area'>
                                <div className='Middle-menu-list'>
                                    {
                                        contents.map(
                                            content => (<MenuList content={content}/>)
                                        )
                                    }
                                </div>
                            </fieldset>
                            <Lodge />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MiddleMenu;