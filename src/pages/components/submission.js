import Link from "next/link";

const SubmissionPage = () => {
	return (
		<div className="flex flex-col text-center justify-center my-4 w-max lg:min-w-[30vw] p-4 bg-[#ffffff]">
			<div>Thank you!</div>
			<Link className="text-[#1E73BE]" href="/">
				Return to home
			</Link>
		</div>
	);
};

export default SubmissionPage;
