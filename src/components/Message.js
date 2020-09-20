import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Popup = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 35vw;
	height: 15vh;
	position: absolute;
	top: 10%;
	left: ${(props) => props.show}%;
	background-color: #2ecc71;
	color: #fff;
	padding: 20px;
	text-align: center;
	font-size: 25px;
	opacity: 0.9;
	transition: left 0.3s ease;
`;

export const Message = (props) => {
	const [show, setShow] = useState(-100);

	const { percentage } = props;

	console.log(props);

	useEffect(() => {
		percentage >= 100 ? setShow(0) : setShow(-100);
		setTimeout(() => {
			setShow(-100);
		}, 3000);
	}, [percentage]);

	return <Popup show={show}>Congrats! The goal is funded!</Popup>;
};
