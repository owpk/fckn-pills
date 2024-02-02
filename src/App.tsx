import { useRef, useState } from 'react';
import './App.css';
import { Pill, PillProps } from './Pill';

function App() {
    const [globalState, setGlobalState] = useState<boolean>(false)

    function handleClick() {
        setGlobalState(!globalState)
    }

    return (

        <div className="App">
            <header className="App-header">
                <div>
                    <Pill name={"Снуп"} freq={3} setState={globalState}/>
                    <Pill name={"Рингалин (вне еды)"} freq={3} setState={globalState}/>
                    <Pill name={"Линекс (с едой)"} freq={1} setState={globalState}/>
                    <Pill name={"Витаминки (с едой)"} freq={1} setState={globalState}/>
                    <Pill name={"Исмиген (утром)"} freq={1} setState={globalState}/>
                    <Pill name={"Цетиризин (на ночь)"} freq={1} setState={globalState}/>
                    <Pill name={"Бронхобос (по 2т)"} freq={3} setState={globalState}/>
                    <Pill name={"Пакакать"} freq={3} setState={globalState}/>
                </div>
                <button onClick={handleClick}>Reset</button>
            </header>
        </div>
    );
}

export default App;
