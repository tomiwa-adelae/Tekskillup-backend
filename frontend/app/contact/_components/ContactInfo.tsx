import React from "react";

const ContactInfo = () => {
	return (
		<div className="outline outline-2 outline-green-400 rounded-lg p-8">
			<h3 className="text-center uppercase text-2xl lg:text-3xl text-green-400 mb-6">
				Get in touch
			</h3>
			<div className="space-y-6">
				<div>
					<h5 className="uppercase font-semibold">
						Our office location
					</h5>
					<p className="text-xs md:text-sm mt-2">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Odio, atque!
					</p>
				</div>

				<div>
					<h5 className="uppercase font-semibold">Phone</h5>
					<p className="text-xs md:text-sm mt-2">
						L+234 098765432, +234 09876543
					</p>
				</div>

				<div>
					<h5 className="uppercase font-semibold">Email address</h5>
					<p className="text-xs md:text-sm mt-2">
						tkeskillup@gmail.com!
					</p>
				</div>
			</div>
		</div>
	);
};

export default ContactInfo;
