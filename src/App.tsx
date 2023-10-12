import { useEffect, useState } from 'react';
import './App.css';
import './index.scss';

function App() {
    const [key, setKey] = useState<{
        keyName: string;
        location: number;
        code: string;
        which: number;
    }>();

    useEffect(() => {
        document.addEventListener('keypress', function (event) {
            setKey({
                keyName: event.key,
                location: event.location,
                code: event.code,
                which: event.which,
            });
        });

        return () => {
            document.removeEventListener('keypress', function () {});
        };
    }, []);

    return (
        <div className="container-input-keyboard ">
            {key === undefined && <p className="alert">Press any key</p>}
            {key && (
                <div className="box">
                    <p className="box__result">{key.which}</p>
                    <div className="box__detail">
                        <div className="box__card">
                            <p className="box__card__header">Key</p>
                            <p className="box__card__body">{key.keyName}</p>
                        </div>
                        <div className="box__card">
                            <p className="box__card__header">Location</p>
                            <p className="box__card__body">{key.location}</p>
                        </div>
                        <div className="box__card">
                            <p className="box__card__header">Which</p>
                            <p className="box__card__body">{key.which}</p>
                        </div>
                        <div className="box__card">
                            <p className="box__card__header">Code</p>
                            <p className="box__card__body">{key.code}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
