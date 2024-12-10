import style from './ticket.module.scss';
import Airports from "../airports/airports.tsx";
import { IoIosAirplane } from "react-icons/io";


type Props = {
	arrivalDate: string,
	arrivalTime: string,
	carrier: string,
	departureDate: string,
	departureTime: string,
	destination: string,
	destinationName: string,
	origin: string,
	originName: string,
	price: number,
	stops: number,
	currency: string
}

const Ticket = ({
	arrivalDate,
	arrivalTime,
	carrier,
	departureDate,
	departureTime,
	destination,
	destinationName,
	origin,
	originName,
	price,
	stops,
	currency
}: Props) => {
	let stopWord: string;

	if (stops % 10 === 1 && stops % 100 !== 11) {
		stopWord = "ПЕРЕСАДКА";
	} else if (stops % 10 >= 2 && stops % 10 <= 4 && (stops % 100 < 10 || stops % 100 >= 20)) {
		stopWord = "ПЕРЕСАДКИ";
	} else if(stops === 0) {
		stopWord = 'БЕЗ ПЕРЕСАДОК';
	}
	else {
		stopWord = "ПЕРЕСАДОК";
	}

	const currencyRates: Record<string, number> = {
		RUB: 1,
		USD: 1 / 99.38,
		EUR: 1 / 105.1,
	};

	const currencySymbols: Record<string, string> = {
		RUB: '₽',
		USD: '$',
		EUR: '€',
	};

	const convertedPrice = Math.round(price * (currencyRates[currency] || 1));
	const currencySymbol = currencySymbols[currency] || '';

	return (
		<div className={style.container}>
			<div className={style.left}>
				<h3 className={style.carrier}>{carrier}</h3>
				<button className={style.button}>
					Купить<br/>
					за {new Intl.NumberFormat('ru-RU').format(convertedPrice)} {currencySymbol}
				</button>
			</div>

			<div className={style.right}>

				<Airports
					time={departureTime}
					airport={destination}
					country={destinationName}
					date={departureDate}
				/>

				<div className={style.stops}>
					<div className={style.stopWord}>
						{stops > 0 &&
							stops
						}
						{' '}
						{stopWord}
					</div>
					<div className={style.stopline}>
						<div className={style.line}/>
						<IoIosAirplane className={style.icon}/>
					</div>
				</div>

				<Airports
					isReverse={true}
					time={arrivalTime}
					airport={origin}
					country={originName}
					date={arrivalDate}
				/>
			</div>
		</div>
	);
};

export default Ticket;

