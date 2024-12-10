import style from './ticket-lists.module.scss';
import { v4 as uuidv4 } from 'uuid';
import Ticket from "../ticket/ticket.tsx";

type TicketData = {
	arrival_date: string;
	arrival_time: string;
	carrier: string;
	departure_date: string;
	departure_time: string;
	destination: string;
	destination_name: string;
	origin: string;
	origin_name: string;
	price: number;
	stops: number;
};

type TicketListsProps = {
	list: TicketData[][];
	selectedStops: number[] | null;
	currency: string;
};

const TicketLists = ({ list, selectedStops, currency }: TicketListsProps) => {

	const filteredList = selectedStops
		? list[0].filter((ticket) => selectedStops.includes(ticket.stops))
		: list[0];

	return (
		<div className={style.container}>
			{filteredList.map((elem) => (
				<div className={style.ticket} key={uuidv4()}>
					<Ticket
						key={uuidv4()}
						arrivalDate={elem.arrival_date}
						arrivalTime={elem.arrival_time}
						carrier={elem.carrier}
						departureDate={elem.departure_date}
						departureTime={elem.departure_time}
						destination={elem.destination}
						destinationName={elem.destination_name}
						origin={elem.origin}
						originName={elem.origin_name}
						price={elem.price}
						stops={elem.stops}
						currency={currency}
					/>
				</div>
			))}
		</div>
	);
};

export default TicketLists;