import '../Assets/Styles/CleanTechElement.css';
import locationImg from '../Assets/Images/location.png';
import temperatureImg from '../Assets/Images/temperature.png';
import windmillImg from '../Assets/Images/windmill.png';
import solarPanelImg from '../Assets/Images/solarPanel.png';

function CleanTechElement({ data }) {

    const backgroundImage = (type) => {
        if (type === "windmill") return windmillImg;
        if (type === "solarPanel") return solarPanelImg;
        return '';
    };

    const dataValue = data.value;

    return(
        <div className='element'>
            <div className='element_header'>
                <div className='element_id'>
                    {dataValue.type} {dataValue.id}
                </div>
                <div className='element_location'>
                    <img className='element_location_image' src={locationImg} alt='loc'/>
                    <div>
                        <div className='element_location_text'>{dataValue.location}</div>
                    </div>
                </div>
            </div>
            <div className='element_metrics'>
                <div className='element_power'>
                    {dataValue.power} W
                </div>
                <div className='element_temperature'>
                    <img className='element_temperature_image' src={temperatureImg} alt='tmp'/>
                    +{dataValue.temperature} C
                </div>
            <img className='element_backgroundImage' src={backgroundImage(dataValue.type)} alt='bg' />
            </div>
        </div>
    );
}

export default CleanTechElement;