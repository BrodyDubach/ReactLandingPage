import React from "react";
import Jumbotron from"./Jumbotron.jsx";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";


//include images into your bundle
import Card from "./Card.jsx";

//create your first component
function Home () {
	return (
		<>
			<Navbar/>
			<div className="container">
				<Jumbotron/>
				<div className="d-flex mb-3">
					<div className="mx-auto ms-0 ">
						<Card cTitle="cardTitle" cDiscript="This is discription one" btnText="Read more" cImg="https://picsum.photos/id/2/200/300"/>
					</div>
					<div className="mx-auto ">
						<Card cTitle="cardTitle" cDiscript="This is discription two" btnText="Read more" cImg="https://picsum.photos/id/3/200/300"/>
					</div>
					<div className="mx-auto ">
						<Card cTitle="cardTitle" cDiscript="This is discription three" btnText="Click me" cImg="https://picsum.photos/id/4/200/300"/>
					</div>
					<div className="mx-auto me-0 ">
						<Card cTitle="cardTitle" cDiscript="This is discription four" btnText="Click me" cImg="https://picsum.photos/id/5/200/300"/>
					</div>
				</div>
			</div>
			<Footer/>
		</>
	);

};

export default Home;
