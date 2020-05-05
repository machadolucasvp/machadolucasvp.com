import React from 'react';
import wip from '../../assets/wip.svg'
import wipStyles from './wip.module.scss'
import Typist from 'react-typist';


const WorkInProgress = () => {
    return ( 
        <div className={wipStyles.container}>
            <div className={wipStyles.typer}>
                <ReactTypingEffect 
                text=
                {['Welcome!','Unfortunately my coffee ran out :!',
                'This page is a work in progress', 'Have a look at the others one ']}
                speed={100}
                eraseDelay={2000}
                typingDelay={400}
                />
            </div>

            <img src={wip} />
        </div>
     );
}
 
export default WorkInProgress;