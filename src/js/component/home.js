import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

function Home(props) {
	const [count, setCount] = useState(0);
	const [list, setList] = useState([]);
	//camelCase

	useEffect(async () => {
		// Efectos secundarios
		const URL = "https://reqres.in/api/users?page=2";
		const additionalSettings = {
			headers: {
				"Content-Type": "application/json"
			},
			method: "GET"
		};

		// Async / Await
		// const request = await fetch(URL, additionalSettings)
		// const response = await response.json()

		fetch(URL, additionalSettings)
			.then(response => response.json())
			.then(data => {
				console.log(">>DATA API: ", data);
				console.log(`>>DATA API: ${data}`);
				setList(data.data);
			});
	}, []);

	return (
		<div className="text-center mt-5">
			<h1>{props.title} </h1>
			<span>{`count: ${count}`}</span>

			<p>
				{count > 2 ? (
					<img
						src={
							props.img === ""
								? "http://2.bp.blogspot.com/-gBOUIRae0wk/UHaYXCgNwCI/AAAAAAAAAA0/QkU6OHjZxDE/s1600/fotos-chistosas-de-animales-llama-fea.jpg"
								: props.img
						}
					/>
				) : null}
			</p>
			<a
				href="#"
				onClick={() => {
					setCount(count + 1);
				}}
				className="btn btn-success">
				Sumar
			</a>
			<a
				href="#"
				onClick={() => {
					if (count !== 0) setCount(count - 1);
				}}
				className="btn btn-success">
				restar
			</a>
			<p>
				<ul>
					{/* array = [
    0 : "lalala",
    1 : "lelele",
    2 : "lolo",
    3 : "lulu",
] */}

					{list.map((item, index) => {
						return (
							<li key={index}>
								<button
									onClick={() => alert(index)}
									style={{ color: "red" }}>
									indice: {index}
								</button>
								{` email: ${item.email}, 
                                first_name: ${item.first_name}, 
                                last_name: ${item.last_name}
                            `}
							</li>
						);
					})}
				</ul>
				<span>Total datos: {list.length}</span>
			</p>
		</div>
	);
}

Home.propTypes = {
	title: PropTypes.string,
	img: PropTypes.string
};

const Container = () => {
	return (
		<div>
			<Home title="hola" img={""} />
			{/* <Home
				title="Grupo"
				img={
					"https://cdn.generadormemes.com/media/templates/xllama_fea.jpg.pagespeed.ic.plantilla-memes.jpg"
				}
			/>
			<Home title="Part Time" img={rigoImage} /> */}
		</div>
	);
};

export default Container;
