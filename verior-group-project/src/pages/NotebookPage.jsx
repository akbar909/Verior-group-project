import { Link } from "react-router-dom";
import HeaderGradient from "../assets/HeaderGradient.png";
import image1 from "../assets/image.png";
import image2 from "../assets/image1.png";
import Footer from '../components/Footer';
import Header from '../components/Header';
const notebooks = [
	{
		id: "1",
		title: "React Notes",
		description: "Everything about React basics.",
		cover: image1,
	},
	{
		id: "2",
		title: "JavaScript",
		description: "Deep dive into JS.",
		cover: image2,
	},
];

export default function NotebookPage() {
	console.log(" NotebookPage Loaded");

	return (
		<section
		 style={{
				backgroundImage: `url(${HeaderGradient})`,
				  backgroundPosition: "top center",
				 backgroundSize: "100% 600px",
			  }}
			  className={`bg-[#fbfbfb] dark:bg-[#131313] flex-1 flex flex-col items-center justify-center text-gray-900 dark:text-white bg-[center_top] lg:bg-[left_top] bg-no-repeat bg-cover`}
			>
			  <div>
				<Header />
			  </div>
			
			{/* Main Content */}
			<div className="lg:w-full min-h-screen mt-20 md:mt-32 px-4 md:px-8 xl:px-36 2xl:px-64 text-black dark:text-white">
				<main className="max-w-[990px] mx-auto ">
					{/* Hero Section */}
					<div className="mb-16">
						<h1 className="font-inter font-bold text-[40px] sm:text-[60px] md:text-[80px] leading-[1] align-bottom mb-4">Notebook</h1>
						<p
							className="font-inter font-normal text-[16px] sm:text-[20px] md:text-[24px] leading-[1] mb-0"
							style={{ letterSpacing: '-0.019em', color: '#80808078' }}
						>
							My thoughts, insights and reflections
						</p>
					</div>

					{/* Dev Section */}
					<section className="mb-16">
						<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-2 sm:gap-0">
							<h2
								className="font-inter font-bold text-[32px] sm:text-[40px] md:text-[48px] leading-[1] mb-0"
								style={{ color: '#808080', letterSpacing: '0em' }}
							>
								Dev
							</h2>
							<span
								className="font-inter font-normal text-[16px] sm:text-[18px] md:text-[20px] leading-[1]"
								style={{ color: '#808080', letterSpacing: '-0.017em' }}
							>
								1 note
							</span>
						</div>

						<div className="bg-gray-900 rounded-lg overflow-hidden inline-block w-full max-w-[504px]">
							<div className="relative">
						<Link to="/notebook/2">
							<img
								src={image2}
								alt="Highway intersection aerial view"
								className="w-full max-w-[504px] h-auto aspect-square object-cover rounded-[22px]"
								style={{ opacity: 1, borderWidth: '1px', borderStyle: 'solid', borderColor: '#383737', background: '#151515', transform: 'rotate(0deg)' }}
							/>
						</Link>
								<div className="absolute bottom-4 left-4 right-4">
									<h3
										className="font-inter font-semibold text-[20px] sm:text-[28px] md:text-[32px] leading-[1] text-white"
										style={{ letterSpacing: '0em' }}
									>
										Ultimate guide to the App Router in Next.js 13
									</h3>
									<p className="text-gray-300 text-xs sm:text-sm mt-1">
										17th Jul 2023 -- 7 min read
									</p>
								</div>
							</div>
						</div>
					</section>

					{/* Design Section */}
					<section className="mb-16">
						<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-2 sm:gap-0">
							<h2
								className="font-inter font-bold text-[32px] sm:text-[40px] md:text-[48px] leading-[1] mb-0"
								style={{ color: '#808080', letterSpacing: '0em' }}
							>
								Design
							</h2>
							<span
								className="font-inter font-normal text-[16px] sm:text-[18px] md:text-[20px] leading-[1]"
								style={{ color: '#808080', letterSpacing: '-0.017em' }}
							>
								1 note
							</span>
						</div>

						<div className="bg-gray-900 rounded-lg overflow-hidden inline-block w-full max-w-[504px]">
							<div className="relative">
						<Link to="/notebook/1">
							<img
								src={image1}
								alt="Highway intersection aerial view"
								className="w-full max-w-[504px] h-auto aspect-square object-cover rounded-[22px]"
								style={{ opacity: 1, borderWidth: '1px', borderStyle: 'solid', borderColor: '#383737', background: '#151515', transform: 'rotate(0deg)' }}
							/>
						</Link>
								<div className="absolute bottom-4 left-4 right-4">
									<h3
										className="font-inter font-semibold text-[20px] sm:text-[28px] md:text-[32px] leading-[1] text-white"
										style={{ letterSpacing: '0em' }}
									>
										Ultimate guide to the App Router in Next.js 13
									</h3>
									<p className="text-gray-300 text-xs sm:text-sm mt-1">
										17th Jul 2023 -- 7 min read
									</p>
								</div>
							</div>
						</div>
					</section>
				</main>
			</div>
			<Footer />
		</section>
	);
}

