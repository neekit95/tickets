import { useState } from 'react';
import style from './app.module.scss';
import Navbar from "../navbar/navbar.tsx";
import Wrapper from "../wrapper/wrapper.tsx";
import TicketLists from "../ticket-lists/ticket-lists.tsx";
import lists from '../../utils/tickets.json';

function App() {
    const [selectedStops, setSelectedStops] = useState<number[] | null>(null);
    const [currency, setCurrency] = useState('RUB');

    const handleStopsChange = (stops: number[] | null) => {
        setSelectedStops(stops);
    };

    const handleCurrencyChange = (currency: string) => {
        setCurrency(currency);
    };

    return (
        <div className={style.container}>
            <Wrapper>
                <Navbar
                    onStopsChange={handleStopsChange}
                    onCurrencyChange={handleCurrencyChange}
                />
                <TicketLists
                    list={Object.values(lists)}
                    selectedStops={selectedStops}
                    currency={currency}
                />
            </Wrapper>
        </div>
    );
}

export default App;