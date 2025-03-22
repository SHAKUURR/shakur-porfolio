import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { DATA } from "@/data/resume";
import Markdown from "react-markdown";
import { Testimonial } from "./Testimonial";
import { Meteors } from "@/components/magicui/meteors";

const About = () => {
	const BLUR_FADE_DELAY = 0.04;
	return (
		<main className="flex flex-col min-h-[100dvh] space-y-10">
			<section id="profile">
				<div className="gap-2 flex justify-between">
					<div className="flex-col flex flex-1 space-y-1.5 relative overflow-x-clip">
						<Meteors number={10} />
						<BlurFadeText
							delay={BLUR_FADE_DELAY}
							className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
							yOffset={8}
							text={`Frontend Developer`}
						/>
						<BlurFade delay={BLUR_FADE_DELAY * 4}>
							<Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
								{DATA.fullbio}
							</Markdown>
						</BlurFade>
					</div>
				</div>
				<div className="flex items-center flex-wrap justify-center  lg:flex-nowrap gap-4 mt-4">
					{["/me.jpg", "/me1.jpg", "/me3.jpg", "/me2.jpg"].map((src, index) => (
						<div key={index} className="w-[45%] overflow-hidden rounded-2xl">
							<img
								src={src}
								alt="Shakur"
								className="w-[300px] lg:w-full h-[350px] rounded-2xl object-cover bg-gray-100 transition-transform duration-300 ease-in-out hover:scale-110"
							/>
						</div>
					))}
				</div>
			</section>
			<section id="testimonial">
				<div className="space-y-12 w-full py-12">
					<BlurFade delay={BLUR_FADE_DELAY * 11}>
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
									Client Testimonials
								</div>
								<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
									What people are saying about my work
								</h2>
								<p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
									I&apos;ve had the chance to team up with some amazing
									clients,designers and developers building everything from
									simple websites to complex web apps. Here&apos;s what a few of
									them had to say about working with me.
								</p>
							</div>
						</div>
					</BlurFade>
				</div>
				<Testimonial />
			</section>
		</main>
	);
};

export default About;
