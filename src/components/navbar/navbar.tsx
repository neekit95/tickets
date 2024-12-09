import { useState } from 'react';
import style from './navbar.module.scss';

type NavbarProps = {
	onStopsChange: (stops: number[] | null) => void;
};

const Navbar = ({ onStopsChange }: NavbarProps) => {
	const [activeCurrency, setActiveCurrency] = useState('RUB');
	const [selectedStops, setSelectedStops] = useState<number[]>([]);

	const handleCurrencyChange = (currency: string) => {
		setActiveCurrency(currency);
	};

	const handleStopsChange = (stop: number) => {
		const newSelectedStops = selectedStops.includes(stop)
			? selectedStops.filter((s) => s !== stop)
			: [...selectedStops, stop];

		setSelectedStops(newSelectedStops);
		onStopsChange(newSelectedStops.length > 0 ? newSelectedStops : null);
	};

	return (
		<div className={style.container}>
			<h2 className={style.title}>Валюта</h2>
			<div className={style.slider}>
				{['RUB', 'USD', 'EUR'].map((currency) => (
					<button
						key={currency}
						className={style.button}
						data-active={activeCurrency === currency}
						onClick={() => handleCurrencyChange(currency)}
					>
						{currency}
					</button>
				))}
			</div>

			<h2 className={style.title}>Количество пересадок</h2>
			<div className={style.checkboxGroup}>
				<label>
					<input
						type="checkbox"
						onChange={() => handleStopsChange(0)}
						checked={selectedStops.includes(0)}
					/>
					<span></span>

					Без пересадок
				</label>
				<label>
					<input
						type="checkbox"
						onChange={() => handleStopsChange(1)}
						checked={selectedStops.includes(1)}
					/>
					<span></span>
					1 пересадка
				</label>
				<label>
					<input
						type="checkbox"
						onChange={() => handleStopsChange(2)}
						checked={selectedStops.includes(2)}
					/>
					<span></span>
					2 пересадки
				</label>
				<label>
					<input
						type="checkbox"
						onChange={() => handleStopsChange(3)}
						checked={selectedStops.includes(3)}
					/>
					<span></span>
					3 пересадки
				</label>
			</div>
		</div>
	);
};

export default Navbar;