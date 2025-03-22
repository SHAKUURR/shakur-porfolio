import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
	name: "Shakur Salman",
	initials: "DV",
	url: "https://shakur-porfolio.vercel.app/",
	location: "Lagos, Nigeria",
	locationLink: "https://www.google.com/maps/place/sanfrancisco",
	description:
		"I build responsive, high-performance, and visually stunning websites and web apps for startups and businesses",
	// summary:
	// 	"At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
	summary:
		"I'm a frontend developer who builds fast, scalable, and reliable web apps that work flawlessly on any device or browser. I love turning ideas into smooth, user-friendly experiences that help businesses grow. I collaborate with designers, backend developers, and product managers to deliver solid, stress-free projects. When I’m not coding, I’m exploring the latest tech trends or connecting with fellow developers at meetups. 😎",
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
		{ href: "/blog", icon: NotebookIcon, label: "Blog" },
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
				"Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
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
				"Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
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
