import Image from "next/image";
import logo from "../../../public/ApprenticeTips_logo.png";
import weDevelop from "../../../public/WeDevelopNow_logo.png";

const Logo = () => {
	return (
		<header className="bg-[#ffffff] w-[100vw] min-h-[20vh] flex justify-center align-center ">
			<Image
				className="absolute top-0 right-0  w-auto h-[2vh]"
				src={weDevelop}
				alt="WeDevelopNow Logo"
			/>
			<div className="lg:w-[60vw] sm:w-[80vw] m-auto p-10 lg:ml-12">
				<Image
					priority
					className="w-[100%] h-auto max-w-[1034px]  block"
					src={logo}
					alt="ApprenticeTips Logo"
				/>
			</div>
		</header>
	);
};

export default Logo;
