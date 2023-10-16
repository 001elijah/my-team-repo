import "../styles/globals.css";
import Navbar from "../components/Navbar";
import MetamaskHandler from "@/wrappers/MetamaskHandler";

export const metadata = {
	title: "E-voting System",
	description: "Generated by Next.js and Solidity",
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				<main className='min-h-screen bg-blue-300 text-black'>
					<MetamaskHandler />
					<Navbar />
					{children}
				</main>
			</body>
		</html>
	);
}