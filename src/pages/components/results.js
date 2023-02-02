import Link from "next/link";

const Results = ({ searchResults }) => {
	return (
		<div className=" mt-4 flex w-[100%] flex-col justify-center text-center">
			<table className=" border-solid border border-[#1E73BE]">
				<tr className="border-solid border border-[#1E73BE]">
					<th className="border-solid border border-[#1E73BE]">Name</th>
					<th>Link</th>
				</tr>

				{searchResults !== "" &&
					searchResults.map((apprenticeship) => {
						return (
							<tr key={apprenticeship.link}>
								<td className=" p-1 border-solid border border-[#1E73BE]">
									{apprenticeship.name}
								</td>
								<td className=" p-1 border-solid border border-[#1E73BE]">
									<Link
										className="ml-4 border-dotted border-b border-[#1E73BE]"
										href={apprenticeship.link}
									>
										{apprenticeship.link.slice(12, 39)}
									</Link>
								</td>
							</tr>
						);
					})}
			</table>

			{searchResults < 1 && <div className="p-10">No Results found!</div>}
		</div>
	);
};

export default Results;
