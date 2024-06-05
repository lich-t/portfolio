import Image from "next/image";
import vecteezy_boy from "@/app/assets/Thinking face-cuate.png";
import { Book, Newspaper } from "lucide-react";

const About = () => {
	return (
		<div className="py-18 px-20">
			<div className="px-8 py-0 md:flex-row grid grid-cols-1 gap-y-12 items-center justify-center">
				<div className=" m-[0px] flex item-center justify-center">
					<h2 className="bg-white px-5 py-1 items-center rounded-2xl text-gray-600">
						About me
					</h2>{" "}
				</div>
				<div className="pt-0 m-0 flex flex-col gap-20 md:flex-row items-center justify-center ">
					<div className="order-1 mb-4 items-center justify-center w-full md:mt-0 flex">
						<Image
							src={vecteezy_boy}
							alt="Hero Image"
							width={400}
							height={400}
							object-contain
							className=" shadow-lg"
						/>
					</div>
					<div className="text-right items-center order-2 mt-4 flex flex-col  ">
						<h1 className="mt-0 text-right items-center text-3xl md:text-5xl font-bold text-gray-900 mb-4">
							Curious about me?{" "}
						</h1>
						<p className="text-lg md:text-base tgxt-gray-600 mb-8">
							creating (and occasionally designing) exceptional digital I'm a
							full stack developer (React.js & Node.js)
						</p>
						<div className="mt-8 space-y-2 space-x-9 grid grid-cols-2 items-center justify-between ">
							<div className=" mx-4 flex items-center justify-center space-x-2 cursor-pointer">
								<Book />
								<span>My story</span>
							</div>
							<div className=" mx-4 flex items-center justify-center space-x-2 cursor-pointer">
								<Newspaper />
								<span>My resum</span>
							</div>
						</div>{" "}
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
