import obfuscate from "@sealcode/obfuscate-html-attr";
import { resolve } from "path";
import {
	IComponent,
	SideEffects,
	SideEffect,
	THeaderLevel,
	Context,
} from "@sealcode/tempseal";

let Team: IComponent<ITeamProps>;

export interface ITeamProps {
	title: string;
	members: IMember[];
	header_level: THeaderLevel;
}

export interface IMember {
	image_path: string;
	name: string;
	role: string;
	area_of_expertise: string;
	key_skill: string;
	opinion: string;
	proud_of: string;
	heard_saying: string;
	email: string;
	telephone: string;
	facebook: string;
	linkedin: string;
	gender: string;
}

const TeamMember = (context: Context) => async (
	member: IMember
): Promise<string> => {
	const facebook_icon = await SideEffects.File.fromPath(
		resolve(__dirname, "facebook__team-member__black.svg")
	);
	const linkedin_icon = await SideEffects.File.fromPath(
		resolve(__dirname, "linkedin__team-member__black.svg")
	);
	await Promise.all([
		context.add_effect(facebook_icon),
		context.add_effect(linkedin_icon),
	]);
	return /* HTML */ `
		<div class="team-member">
			<div class="team-member__image">
				${await SideEffects.ResponsiveImage(context, {
					image_path: member.image_path,
					resolutions: [1000, 750, 500, 400],
					sizes_attr: "(max-width: 548px) calc(100vw - 2rem), 500px",
					alt: (member.name || "") + " - zdjęcie",
				})}
			</div>
			<div class="team-member__name">
				${member.name || ""}
			</div>
			<div class="team-member__role">
				${member.role || ""}
			</div>
			<div class="team-member__description">
				<p>
					<span class="team-member__description__label"
						>Area of expertise: </span
					>${member.area_of_expertise || ""}
				</p>
				<p>
					<span class="team-member__description__label"
						>Key skill: </span
					>${member.key_skill || ""}
				</p>
				<p>
					<span class="team-member__description__label">
						${member.gender == "female"
							? "What her colleagues say about her: "
							: "What his colleagues say about him: "}
					</span>
					${member.opinion || ""}
				</p>
				<p>
					<span class="team-member__description__label"
						>Is most proud of: </span
					>${member.proud_of || ""}
				</p>
				<p>
					<span class="team-member__description__label"
						>Can often be heard saying: </span
					>${member.heard_saying || ""}
				</p>
			</div>
			${member.email
				? /* HTML */ `
						<a
							href="mailto:${obfuscate(member.email)}"
							class="team-member__email"
						>
							${obfuscate(member.email)}
						</a>
				  `
				: ""}
			<div class="team-member__telephone">
				${member.telephone || ""}
			</div>
			<div class="social-icons">
				<a href="${member.facebook || ""}"
					><img src="${await facebook_icon.getUrlPlaceholder()}"
				/></a>
				<a href="${member.linkedin || ""}"
					><img src="${await linkedin_icon.getUrlPlaceholder()}"
				/></a>
			</div>
		</div>
	`;
};

Team = async (context, { title, members, header_level = 2 }) => {
	const h = header_level;
	const html = /* HTML */ `
		<div class="team" id="the-team">
			<div class="wrapper">
         		<div class="the-team"><h${h}>${title || ""}</h${h}></div>
				<div class="members">
					${(await Promise.all(members.map(TeamMember(context)))).join("")}
				</div>
			</div>
		</div>
	`;
	await Promise.all([
		SideEffects.Scss.addFromPath(context, resolve(__dirname, "team.scss")),
		context.add_effect(new SideEffects.HtmlChunk(html)),
	]);
};

Team.identifier = "team";

export default Team;
