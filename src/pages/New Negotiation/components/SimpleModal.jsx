import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button } from '@material-ui/core/';
//import { Icon } from '@material-ui/core'
import SearchBar from "material-ui-search-bar";
import { svgAddField } from './svgComponents';
import useLocalStorage from './localStorageList';

const useStyles = makeStyles((theme) => ({
    btnWrapper: {
        display: 'inline'
    },
    button: {
        minWidth: 'auto',
        padding: 0,
        marginRigth: 'auto'
    },
    paper: {
        position: 'absolute',
        width: 600,
        backgroundColor: theme.palette.background.paper,
        textAlign: 'center',
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3)
    },
    ulList: {
        textAlign: 'left'
    },
    liList: {
        padding: '5px 15px'
    }
}));

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

export default function SimpleModal({ participants, setParticipants }) {
    const classes = useStyles();
    const localState = useLocalStorage(); //local storage keys

    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
    const [modalSatge] = useState('APPROVAL');


    const handleClose = () => {
        setOpen(false);
    };

    const buttonHandler = (value, index) => {
        setOpen(false);
        setParticipants([...participants, value])
        localState.setUnselectedParticipants(localState.unselectedParticipants.filter((el, i) => i === index ? false : true));
    }



    const sendMessage = () => {

        if (modalSatge === 'APPROVAL') {
            return <div style={modalStyle} className={classes.paper}>
                <h3 id="simple-modal-title">{localState.unselectedParticipants.length > 0 ? 'Select the members you want to add' : 'No members available'}</h3>
                <SearchBar />
                <ul className={classes.ulList}>
                    {localState.unselectedParticipants.map((el, index) => <li className={classes.liList} key={index}><button className="participantsMembers" type="button" onClick={() => buttonHandler(el, index)}>{el[0]} <br /> {el[1]} </button></li>)}
                </ul>
            </div >
        }

    }

    return (
        <div className={classes.btnWrapper}>
            <Button
                className={classes.button}
                onClick={() => setOpen(true)}
            >
                {svgAddField}
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {sendMessage()}
            </Modal>
        </div>
    );
}