import '../Assets/Styles/Loading.css'
import LoadingImg from '../Assets/Images/loading.png';

function Loading() {
    return(
        <div className='loadingScreen' >
            <div className='loadingScreen_imageContainer'>
                <img className='loadingScreen_image' src={LoadingImg} alt='load'/>
            </div>
        </div>
    );
}

export default Loading;