import profil from "@/app/assets/profil.jpg";
import {
	Figma,
	GithubIcon,
	LocateIcon,
	PoundSterlingIcon,
	X,
} from "lucide-react";
import Image from "next/image";

const Hero = () => {
	return (
		<section className="flex flex-col gap-20 md:flex-row items-center px-20 py-24">
			{/* Left Column: Text Content */}
			<div className="order-2 md:order-1 mt-4 flex flex-col  items-start">
				<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
					Hi, I’m Kab 👋{" "}
				</h1>
				<p className="text-lg md:text-base tgxt-gray-600 mb-8">
					creating (and occasionally designing) exceptional digital I'm a full
					stack developer (React.js & Node.js) <br /> with a focus on
					experiences that are fast, accessible, visually appealing, and
					responsive. Even though I have been creating web applications for over
					7 years, I still love it as if it was something new.
				</p>
				<div className="mt-8 space-y-3 ">
					<div className="flex space-x-2">
						<LocateIcon />
						<span>Lomé, Togo</span>
					</div>
					<div className="flex space-x-2">
						<PoundSterlingIcon />
						<span>Available for new projects</span>
					</div>
				</div>
				<div className=" pt-4 flex space-x-2 mt-10">
					<GithubIcon />
					<Figma />
					<X />
				</div>
			</div>
			{/* Right Column: Image */}
			<div className=" w-full order-1 md:order-2 mb-8 md:mt-0 flex justify-center">
				<Image
					src={profil}
					alt="Hero Image"
					width={400}
					height={400}
					className="rounded-lg shadow-lg"
				/>
			</div>
		</section>
	);
};

export default Hero;
