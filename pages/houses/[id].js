import Head from 'next/head';
import houses from '../../houses.js';
import Layout from '../../components/Layout';
import DateRangePicker from '../../components/DateRangePicker.js';

export async function getServerSideProps({ query }) {
	const { id } = query;

	return {
		props: {
			house: houses.filter((house) => house.id === parseInt(id, 10))[0],
		},
	};
}

export default function House(props) {
	return (
		<Layout
			content={
				<div className="container">
					<Head>
						<title>{props.house.title}</title>
					</Head>
					<article>
						<img src={props.house.picture} width="100%" alt="House" />
						<p>
							{props.house.type} - {props.house.town}
						</p>
						<p>{props.house.title}</p>
					</article>
					<aside>
						<h2>Choose a date</h2>
						<DateRangePicker />
					</aside>

					<style jsx>{`
						.container {
							display: grid;
							grid-template-columns: 60% 40%;
							grid-gap: 30px;
						}

						aside {
							border: 1px solid #ccc;
							padding: 20px;
						}
					`}</style>
				</div>
			}
		/>
	);
}
