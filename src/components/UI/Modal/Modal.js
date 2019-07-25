import React from 'react';

import classes from '../Modal/Modal.css';
import Auxiliary from '../../../hoc/Auxiliary';
import Backdrop from '../../UI/Backdrop/Backdrop';

const modal = (props) => (
    <Auxiliary>
        <Backdrop show={props.show} clicked={props.modalClosed}/>
        <div className={classes.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>

            {props.children}
        </div>
    </Auxiliary>

);

export default modal;

//ternary expression ? value if true : value if false