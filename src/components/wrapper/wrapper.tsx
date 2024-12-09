import style from './wrapper.module.scss';
import React from "react";

type Props = {
	children: React.ReactNode
}

const Wrapper = ({children}: Props) => {
	return (
		<div className={style.container}>
			{children}
		</div>
	);
};

export default Wrapper;

