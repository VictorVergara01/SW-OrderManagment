import { Button } from '@mui/material';
import icon from '../../assets/def_button.png'


const buttonStyles = {
    AcceptButton :{
        backgroundColor: 'green',
        color: 'white'
    },
    DeclineButton:{
        backgroundColor: 'red',
        color: 'white'
    },
    RescheduleButton:{
        backgroundColor: 'yellow',
        color: 'white'
    },
    SendButton:{
        backgroundColor: 'yellow',
        color: 'white'
    },
    SaveButton:{
        backgroundColor: 'blue',
        color: 'white'
    }
};

const buttonTexts = {
    AcceptButton: 'Aceptar',
    DeclineButton: 'Rechazar',
    RescheduleButton: 'Reprogramar',
    SendButton: 'Enviar',
    SaveButton: 'Guardar',
};

const ActionButton = ({btn_type}) => {

    const style = buttonStyles[btn_type] || {};
    const text = buttonTexts[btn_type] || 'Button';

    const handleClick = () => {
        //   to do...
    };

    return(
        <Button onClick={handleClick} variant="contained" style={style}>
            {text}
            <img src={icon} alt={'Button'} style={{width:25}}/>
        </Button>
    );
}
export default ActionButton;
