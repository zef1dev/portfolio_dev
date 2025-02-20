import About from '../src/components/About';
import Skills from '../src/components/Skills';
import Contact from '../src/components/Contact';

import Head from 'next/head';
import Portfolio from '../src/components/Portfolio';

const Home = () => {
	return (
		<>
			<Head>
				<title>Kseniia's Portfolio</title>
				<meta name="description" content="Kseniia's Portfolio" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.jpeg" />
			</Head>
			<div>
				{/* <Hero />  */}
				<About />
				<Skills />
				<Portfolio />
				<Contact /> 
			</div>
		</>
	);
};

export default Home;
