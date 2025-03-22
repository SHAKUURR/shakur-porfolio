import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, User } from "lucide-react";

export const DATA = {
	name: "Shakur Salman",
	initials: "SS",
	url: "https://shakur-porfolio.vercel.app/",
	location: "Lagos, Nigeria",
	locationLink: "https://www.google.com/maps/place/lagos",
	description:
		"I build responsive, high-performance, and visually stunning websites and web apps for startups and businesses",
	// summary:
	// 	"At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
	summary:
		"I'm a frontend developer who builds fast, scalable, and reliable web apps that work flawlessly on any device or browser. I love turning ideas into smooth, user-friendly experiences that help businesses grow. I collaborate with designers, backend developers, and product managers to deliver solid, stress-free projects. When I’m not coding, I’m exploring the latest tech trends or connecting with fellow developers at meetups. 😎",
	fullbio: `
I’ve always been hooked on how clean code can make a website feel smooth and easy to use. Over the years, I’ve worked with startups, founders, and teams to turn their ideas into solid web apps—think fast-loading landing pages, interactive dashboards, or full-on web platforms.  

My approach is pretty simple: write code that’s easy to follow, make sure it runs fast, and build interfaces that just work. I focus on frontend development, using tools like React, Typescript, and Tailwind CSS to take designs and make them real, while keeping things accessible and responsive. The goal? Products that users love to interact with, not just scroll through.  

I’m big on **performance and scalability**—making sure that the apps I build can handle growth without slowing down. I also care about the small details, like smooth animations and intuitive navigation, because they’re what make an experience feel polished.  

Beyond the code, I enjoy figuring out tricky bugs, picking up new tools, and sharing what I’ve learned with others. I’ve also worked with backend tools like **Appwrite** to create seamless full-stack solutions when needed. If you’ve got an idea you want to build or a project that needs a boost, let’s team up and create something great together.  
`,
	avatarUrl: "/me.jpg",
	skills: [
		"Javascipt",
		"React",
		"Next.js",
		"Typescript",
		"Html",
		"CSS",
		"Tailwind",
		"Appwrite",
	],
	navbar: [
		{ href: "/", icon: HomeIcon, label: "Home" },
		{ href: "/about", icon: User, label: "About" },
	],
	contact: {
		email: "salmanshakur7@gmail.com",
		tel: "+2348160219474",
		social: {
			GitHub: {
				name: "GitHub",
				url: "https://github.com/SHAKUURR",
				icon: Icons.github,
				navbar: true,
			},
			LinkedIn: {
				name: "LinkedIn",
				url: "https://www.linkedin.com/in/salman-abdulshakur-92802124a/",
				icon: Icons.linkedin,

				navbar: true,
			},
			X: {
				name: "X",
				url: "https://x.com/AdemolaSalman",
				icon: Icons.x,

				navbar: true,
			},
			Instagram: {
				name: "Instagram",
				url: "https://www.instagram.com/shakur_tobi/",
				icon: Icons.instagram,
				navbar: true,
			},
			email: {
				name: "Send Email",
				url: "salmanshakur7@gmail.com",
				icon: Icons.email,

				navbar: false,
			},
		},
	},

	work: [
		{
			company: "CDLP-HUB Limited",
			href: "https://cdlphubltd.com/",
			badges: [],
			location: "Full-time",
			title: "Frontend Developer",
			logoUrl: "/cdlp.jpg",
			start: "Feb 2023",
			end: "July 2024",
			description:
				"At CDLPHUB, I developed web apps for bill payment and utilities management, led a team to build 1,000+ landing page templates, and collaborated with designers and developers on various projects. I played a key role in building a bulk SMS platform and a data marketplace, designed the company’s main landing page, and mentored interns in styling and UI implementation.",
		},
		{
			company: "MyReceipt",
			badges: [],
			href: "https://www.linkedin.com/company/myreceipt/",
			location: "Contract",
			title: "Frontend Developer",
			logoUrl: "/my.jpg",
			start: "June 2023",
			end: "Dec 2023",
			description:
				"Developed websites for clients, collaborated with design and backend teams to create user-friendly interfaces, attended client meetings to understand business needs, and built a platform for small business owners to generate customer receipts.",
		},
	],
	education: [
		{
			school: "Obafemi Awolowo University, Ile-Ife",
			href: "https://oauife.edu.ng/",
			degree: "B.Sc. Computer Engineering",
			logoUrl: "/oau.png",
			start: "2023",
			end: "Now",
		},
		{
			school: "Federal Polytechnic, Offa, Kwara-state",
			href: "https://portal.fedpoffaonline.edu.ng/",
			degree: "National Diploma (ND)",
			logoUrl: "/offa.jpg",
			start: "2018",
			end: "2020",
		},
		{
			school: "Progressive Academy School, Oyo-State",
			href: "https://maps.app.goo.gl/zvUdqf1z5d4AooFX7",
			degree: "WAEC",
			logoUrl: "/prog.jpg",
			start: "2014",
			end: "2017",
		},
	],
	projects: [
		{
			title: "GOTRADEIT",
			href: "https://www.gotradeit.co",
			dates: "- 2025",
			active: true,
			description:
				"A marketplace for secure asset trading, allowing users to buy, sell, and exchange assets safely. Built with modern UI/UX principles and optimized for seamless transactions.",
			technologies: ["React", "Typescript", "Tailwind"],
			links: [
				{
					type: "Website",
					href: "https://www.gotradeit.co",
					icon: <Icons.globe className="size-3" />,
				},
			],
			image: "",
			video:
				"https://res.cloudinary.com/dtn4hkrzn/video/upload/v1742650505/gotradeit-1742649647752_th4tvq.mp4",
		},
		{
			title: "STUDIII",
			href: "http://studiii.com/",
			dates: "- 2025",
			active: true,
			description:
				"A platform designed to help students achieve their reading goals in an engaging and interactive way. Features include progress tracking, personalized study plans, and community interaction to enhance learning.",
			technologies: ["React", "Typescript", "Tailwind"],
			links: [
				{
					type: "Website",
					href: "http://studiii.com/",
					icon: <Icons.globe className="size-3" />,
				},
				// {
				// 	type: "Source",
				// 	href: "https://github.com/magicuidesign/magicui",
				// 	icon: <Icons.github className="size-3" />,
				// },
			],
			image: "",
			video:
				"https://res.cloudinary.com/dtn4hkrzn/video/upload/v1742651256/cursorful-video-1742651225518_duu0ky.mp4",
		},
		{
			title: "ABNPAYS",
			href: "https://abnpays.com/",
			dates: "- 2024",
			active: true,
			description:
				"A bill payment and utilities management platform that enables users to seamlessly purchase and sell data, airtime, and electricity.",
			technologies: ["React", "Typescript", "Tailwind", "ShadcnUI"],
			links: [
				{
					type: "Website",
					href: "https://abnpays.com/",
					icon: <Icons.globe className="size-3" />,
				},
				// {
				// 	type: "Source",
				// 	href: "https://github.com/dillionverma/llm.report",
				// 	icon: <Icons.github className="size-3" />,
				// },
			],
			image: "",
			video:
				"https://res.cloudinary.com/dtn4hkrzn/video/upload/v1742651512/cursorful-video-1742651492587_hi2roh.mp4",
		},
		{
			title: "SOLOMOMO",
			href: "https://www.solomomo.com/",
			dates: "- 2024",
			active: true,
			description:
				"A landing page for Solomomo Wand, a high-tech skincare device that captures high-resolution images of the skin in a controlled environment. Developed with a focus on minimalist design, performance optimization, and mobile responsiveness.",
			technologies: ["React", "Typescript", "Tailwind"],
			links: [
				{
					type: "Website",
					href: "https://www.solomomo.com/",
					icon: <Icons.globe className="size-3" />,
				},
			],
			image: "",
			video:
				"https://res.cloudinary.com/dtn4hkrzn/video/upload/v1742651845/cursorful-video-1742651828261_gxmtfb.mp4",
		},
	],
	hackathons: [
		{
			title: "Maxlogistics",
			dates: "- 2025",
			// location: "London, Ontario",
			description:
				"A logistics website designed to ensure packages reach their destinations on time and in perfect condition. Features include real-time tracking, order management, and seamless delivery coordination. I handled both the frontend and backend. (Tracking code: YQ5689767096)",
			image: "/max.png",
			// mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
			links: [
				{
					title: "Website",
					icon: <Icons.globe className="h-4 w-4" />,
					href: "https://maxlogistics.vercel.app/",
				},
			],
		},
		{
			title: "QuranVerse",
			dates: "- 2025",
			description:
				"Developed a website which allows users to search for Quran verse using audio.",
			image: "qur.jpg",
			links: [
				{
					title: "Website",
					icon: <Icons.github className="h-4 w-4" />,
					href: "https://quranverse-one.vercel.app",
				},
			],
		},
		{
			title: "Dynaswap",
			dates: "- 2023",
			description:
				"A decentralized exchange pioneering in the Tenet ecosystem, facilitating secure and efficient cryptocurrency transactions with a focus on decentralization and user experience.",
			image: "/dyna.jpg",
			links: [
				{
					title: "Website",
					icon: <Icons.globe className="h-4 w-4" />,
					href: "https://dyna.vercel.app/",
				},
			],
		},
		{
			title: "AlphaStake",
			dates: "- 2023",
			description:
				"AlphaStake is a pioneering web3 company with a commitment to decentralization.",
			image: "/alpha.jpg",
			links: [
				{
					title: "Website",
					icon: <Icons.globe className="h-4 w-4" />,
					href: "https://alpha-stake-bay.vercel.app/",
				},
			],
		},
		{
			title: "Dreamer Hotel",
			dates: "- 2022",
			description:
				"Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
			image: "/dreamer.png",
			links: [
				{
					title: "Website",
					icon: <Icons.globe className="h-4 w-4" />,
					href: "https://dream-hotel.vercel.app/",
				},
			],
		},
		{
			title: "Fundily",
			dates: "- 2022",
			description:
				"A digital payment platform that facilitates quick online transactions across West Africa. Fundily also ensures a reliable payment system between individuals and businesses.",
			image: "/fund.png",
			links: [
				{
					title: "Website",
					icon: <Icons.globe className="h-4 w-4" />,
					href: "https://fundily.vercel.app/",
				},
			],
		},
	],
} as const;
