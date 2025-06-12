import React from "react";
import SecondsCounter from "./SecondsCounter";


//create your first component
const Home = ({ digito1 }) => {

	return (
		<SecondsCounter digito1={digito1} />
	);

};

export default Home;