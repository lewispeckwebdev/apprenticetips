import Navbar from "./navbar";
import Logo from "./logo";

export default function Layout({ children, setActivePage }) {
	return (
		<>
			<Logo />
			<Navbar setActivePage={setActivePage} />
			<main className="flex justify-center text-[#222222]">{children}</main>
		</>
	);
}
