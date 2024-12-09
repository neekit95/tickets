import { useState } from 'react';
import style from './app.module.scss';
import Navbar from "../navbar/navbar.tsx";
import Wrapper from "../wrapper/wrapper.tsx";
import TicketLists from "../ticket-lists/ticket-lists.tsx";
import lists from '../../utils/tickets.json';

function App() {
    const [selectedStops, setSelectedStops] = useState<number[] | null>(null);

    const handleStopsChange = (stops: number[] | null) => {
        setSelectedStops(stops);
    };

    return (
        <div className={style.container}>
            <Wrapper>
                <Navbar onStopsChange={handleStopsChange} />
                <TicketLists list={Object.values(lists)} selectedStops={selectedStops} />
            </Wrapper>
        </div>
    );
}

export default App;