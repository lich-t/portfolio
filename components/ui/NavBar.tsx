import React from "react";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";

const NavBar = () => {
	const Menus = [
		{ page: "About", url: "/about" },
		{ page: "Work", url: "/" },
		{ page: "Testimonials", url: "/" },
		{ page: "Contact", url: "/" },
	];
	return (
		<div className="flex justify-between items-center px-20 py-4 border-b-1">
			<div className="justify-between items-center flex">
				<p className="text-gray-900 text-8 items-center">
					<b>MyFolio/</b>
				</p>
			</div>
			<div className="flex items-center space-x-12 ">
				<ul className="flex space-x-8 text-gray-900 ">
					{Menus.map((menu) => (
						<li key={menu.url}>
							<a href={menu.url}>{menu.page}</a>
						</li>
					))}
				</ul>

				<div className="flex items-center justify-between space-x-6">
					<Sun />
					<Button className="rounded-[16px] px-10 py-1">download CV</Button>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
