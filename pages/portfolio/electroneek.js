
import Projects from 'src/components/Projects';
import Contact from 'src/components/Contact';
import Head from 'next/head';
import Portfolio from '@/src/components/Portfolio';

const Electroneek = () => {
	return (
		<>
			<Head>
				<title>Portfolio</title>
				<meta name="description" content="Kseniia's Portfolio" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<div>
				{/* <Image src='' alt='electroneek' layout="responsive" objectFit="cover" height={100} width={100} /> */}
				{/* <Hero /> */}
				{/* <About />
				<Skills /> */}
				{/* <Portfolio />
				<Contact /> */}
			</div>
		</>
	);
};

export default Electroneek;
