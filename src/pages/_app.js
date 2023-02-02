import "@/styles/globals.css";
import Layout from "./components/layout";
import { useState } from "react";

export default function MyApp({ Component, pageProps }) {
	const [activePage, setActivePage] = useState("Form");

	return (
		<Layout setActivePage={setActivePage}>
			<Component
				setActivePage={setActivePage}
				activePage={activePage}
				{...pageProps}
			/>
		</Layout>
	);
}
