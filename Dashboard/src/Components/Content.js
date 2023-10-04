import CleanTechElement from './CleanTechElement';
import Loading from './Loading';

import '../Assets/Styles/Content.css';

import { useState, useEffect } from "react";
import ErrorMessage from './ErrorMessage';

function Content() {
    const [sourcesData, setSourcesData] = useState({});
    const [proxyFetchError, setProxyFetchError] = useState(false);
    const [cleanTechFetchError, setCleanTechFetchError] = useState(false);

    useEffect(() => {
        cleanTechDataRequest();
        const intervalId = setInterval(cleanTechDataRequest, 2000);

        return () => clearInterval(intervalId);
    }, []);

    const cleanTechDataRequest = async () => {
        await fetch('http://localhost:3001/CleanTechProxy')
        .then(response => response.json())
        .then(json => {
            setProxyFetchError(false);
            if (json.error !== undefined) {
                setCleanTechFetchError(true);
            } else {
                setSourcesData(json);
                setCleanTechFetchError(false);
            }
        })
        .catch(() => setProxyFetchError(true));
    };

    const checkErrorMessage = () => {
        let message;
        if (proxyFetchError) message = 'Failed to fetch from Proxy';
        if (cleanTechFetchError) message = 'Failed to fetch from CleanTech source';

        if (message === undefined) return;
        
        const date = new Date();
        const errorTime = `${date.getHours()}:${date.getMinutes()}`;
        return <ErrorMessage message={message} errorTime={errorTime} />
    }

    const errorMessage = checkErrorMessage();
    const containerErrorMessage = errorMessage === undefined ? ('') : ('content_container-withError');

    return(
        <div className='content'>
            {Object.keys(sourcesData).length === 0 ? (
                <Loading />
            ) : (
                <div className={`content_container ${containerErrorMessage}`}>
                    <CleanTechElement data={sourcesData.windmillData} />
                    <CleanTechElement data={sourcesData.solarPanelData} />
                </div>
            )}
            {errorMessage}
        </div>
    );
}

export default Content;