import '../Assets/Styles/ErrorMessage.css';
import ErrorImg from '../Assets/Images/error.png';

function ErrorMessage({ message, errorTime }) {
    const errorMessage = () => {
        return (
            <div className='errorMessage'>
                <div className='errorMessage_container'>
                    <img className='errorMessage_image' src={ErrorImg} alt='err' />
                    <div className='errorMessage_text'>{`${message}. Error time ${errorTime}`}</div>
                </div>
            </div>
        )
    }

    return(errorMessage());
}

export default ErrorMessage;