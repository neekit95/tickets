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
	stops: number
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
	stops
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

	console.log(`${stops} ${stopWord}`);

	return (
		<div className={style.container}>
			<div className={style.left}>
				<h3 className={style.carrier}>
					{carrier}
				</h3>

				<button className={style.button}>
					Купить
					<br/>
					за {' '}
					{new Intl.NumberFormat('ru-Ru').format(price)}₽
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

