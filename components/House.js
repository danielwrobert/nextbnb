import Link from 'next/link';

export default function House({ id, title, type, town, picture }) {
	return (
		<Link href="/houses/[id]" as={'/houses/' + id}>
			<a>
				<img src={picture} width="100%" alt="House picture" />
				<p>
					{type} - {town}
				</p>
				<p>{title}</p>
			</a>
		</Link>
	);
}
