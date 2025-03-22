import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { DATA } from "@/data/resume";
import Markdown from "react-markdown";

const About = () => {
	const BLUR_FADE_DELAY = 0.04;
	return (
		<div>
			<div className="gap-2 flex justify-between">
				<div className="flex-col flex flex-1 space-y-1.5">
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
		</div>
	);
};

export default About;
