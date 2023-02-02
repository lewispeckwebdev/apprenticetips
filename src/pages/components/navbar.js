const Navbar = ({ setActivePage }) => {
	return (
		<div className="h-[8vh] flex w-[100vw]  bg-[#1E73BE] text-[#ffffff]">
			<div className="flex  m-auto lg:ml-32 gap-10">
				<button onClick={() => setActivePage("Form")} className="">
					Form
				</button>
				<button onClick={() => setActivePage("Search")}>Search</button>
			</div>
		</div>
	);
};

export default Navbar;
