import { Marquee } from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";

const reviews = [
	{
		name: "Taofeeq",
		username: "Designer | No-code developer",
		body: "Shakur is an incredibly skilled and forward-thinking Front-End Developer. Having collaborated with him on two diverse projects, I can confidently attest to his exceptional expertise and dedication.",
		img: "https://avatar.vercel.sh/jack",
	},
	{
		name: "Mashood",
		username: "Business owner",
		body: "Salman helped us improve our website's performance and set up an effective retargeting strategy. We’ve seen a noticeable increase in traffic since then.",
		img: "https://avatar.vercel.sh/john",
	},
	{
		name: "Mujeeb",
		username: "Designer",
		body: "Working with Shakur has been a game-changer! His attention to detail and clean code make designing seamless. Highly recommend!",
		img: "https://avatar.vercel.sh/jill",
	},
	{
		name: "Misco",
		username: "CEO, GoTradeIt",
		body: "He built an impressive 'Coming Soon' page for GoTradeIt, complete with an email notification feature. It helped us generate early interest and build a solid user base before launch.",
		img: "https://avatar.vercel.sh/jane",
	},
	{
		name: "Adebayo",
		username: "Backend developer",
		body: "Shakur’s frontend work at MyReceipt was top-notch. His ability to turn complex requirements into clean, responsive interfaces made our job on the backend much easier. ",
		img: "https://avatar.vercel.sh/jenny",
	},
	{
		name: "Tobi",
		username: "Backend Developer",
		body: "His attention to detail and ability to sync perfectly with the backend made the development process efficient and enjoyable.",
		img: "https://avatar.vercel.sh/james",
	},
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
	img,
	name,
	username,
	body,
}: {
	img: string;
	name: string;
	username: string;
	body: string;
}) => {
	return (
		<figure
			className={cn(
				"relative h-full w-[400px] cursor-pointer overflow-hidden rounded-xl border p-4",
				// light styles
				"border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
				// dark styles
				"dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
			)}
		>
			<div className="flex flex-row items-center gap-2">
				<img className="rounded-full" width="32" height="32" alt="" src={img} />
				<div className="flex flex-col">
					<figcaption className="text-sm font-medium dark:text-white">
						{name}
					</figcaption>
					<p className="text-xs font-medium dark:text-white/40">{username}</p>
				</div>
			</div>
			<blockquote className="mt-2 text-sm">{body}</blockquote>
		</figure>
	);
};

export function Testimonial() {
	return (
		<div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
			<Marquee pauseOnHover className="[--duration:20s]">
				{firstRow.map((review) => (
					<ReviewCard key={review.username} {...review} />
				))}
			</Marquee>
			<Marquee reverse pauseOnHover className="[--duration:20s]">
				{secondRow.map((review) => (
					<ReviewCard key={review.username} {...review} />
				))}
			</Marquee>
			<div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
			<div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
		</div>
	);
}
