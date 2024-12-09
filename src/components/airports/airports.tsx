import style from './airports.module.scss';

type Props = {
	time: string,
	airport: string,
	country: string,
	date: string,
	isReverse?: boolean
}

const Airports = ({time, airport, country, date, isReverse}: Props) => {
	const parseDate = (dateString: string): Date => {
		const [day, month, year] = dateString.split('.');
		return new Date(`20${year}-${month}-${day}`);
	};

	const formattedDate = parseDate(date);

	const day = formattedDate.getDate();
	const year = formattedDate.getFullYear();
	const month = formattedDate.toLocaleString('ru-RU', { month: 'long' });
	const weekday = formattedDate.toLocaleString('ru-RU', { weekday: 'short' });

	return (
		<div className={style.container}
			 data-current={!isReverse}
		>
			<h2 className={style.time}> {time} </h2>

			<h6
				className={style.h4}
			>
				{!isReverse ? (
					<>
						{airport}, {country}
					</>
				) : <> {country}, {airport}</>
				}
			</h6>

			<p className={style.date}>
				{`${day} ${month} ${year}, ${weekday}`}
			</p>
		</div>
	);
};

export default Airports;