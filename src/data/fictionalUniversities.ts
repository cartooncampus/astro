// Fictional Worlds data structure
export interface Course {
	id: string;
	title: string;
	code: string;
	description: string;
	credits: number;
	prerequisites: string[];
	difficulty: 1 | 2 | 3 | 4 | 5;
	survivalRate: number;
	relatedMerchKeyword: string;
}

export interface SurvivalGuide {
	speciesCompatibility: Record<string, string>;
	orientationSurvivalRate: number;
	environmentalHazards: string[];
	tips: string[];
}

export interface FictionalUniversity {
	id: string;
	name: string;
	shortName: string;
	universe: string;
	location: string;
	founded: number;
	missionStatement: string;
	description: string;
	icon: string;
	courses: Course[];
	survivalGuide: SurvivalGuide;
	storeLink: string;
}

// Miskatonic University - Lovecraft Mythos
export const miskatonicUniversity: FictionalUniversity = {
	id: "miskatonic",
	name: "Miskatonic University",
	shortName: "Miskatonic",
	universe: "H.P. Lovecraft Mythos",
	location: "Arkham, Massachusetts",
	founded: 1690,
	missionStatement:
		"Pursuing knowledge beyond the boundaries of sanity since 1690. We accept all inquiries—though we cannot guarantee your mental state upon departure.",
	description:
		"Nestled in the misty hills of Arkham, Massachusetts, Miskatonic University stands as a beacon of forbidden knowledge and cosmic enlightenment. Our esteemed faculty have dedicated their careers to understanding the Great Old Ones, deciphering eldritch texts, and conducting field research in locations of questionable habitability. A Miskatonic education is not for the faint of heart—or the firmly grounded in conventional reality.",
	icon: "👁️",
	courses: [
		{
			id: "eldritch-101",
			title: "Eldritch Zoology 101",
			code: "BIO-666",
			description:
				"An introduction to creatures beyond conventional taxonomy. Topics include identification, evasion strategies, and why you should never make eye contact. Guest lecturer: The Thing in the Well (recorded sessions available).",
			credits: 4,
			prerequisites: ["Courage", "Willingness to question reality"],
			difficulty: 4,
			survivalRate: 58,
			relatedMerchKeyword: "eldritch",
		},
		{
			id: "forbidden-languages",
			title: "Forbidden Languages & Linguistic Horrors",
			code: "LANG-777",
			description:
				"Master the phonetic patterns of R'lyehian, Elder Sign inscriptions, and the click-language of the Deep Ones. Warning: Successful pronunciation may result in unwanted dimensional visitors.",
			credits: 3,
			prerequisites: ["Linguistics 101", "Ability to pronounce impossible sounds"],
			difficulty: 5,
			survivalRate: 42,
			relatedMerchKeyword: "forbidden",
		},
		{
			id: "necronomicon-studies",
			title: "Necronomicon Studies & Rare Book Conservation",
			code: "LIB-888",
			description:
				"Learn to safely handle and interpret the world's most dangerous tome. Includes proper handling techniques, summoning prevention, and binding repair. Library gloves provided. Mind provided separately.",
			credits: 3,
			prerequisites: ["Extreme caution", "Library card"],
			difficulty: 3,
			survivalRate: 71,
			relatedMerchKeyword: "necronomicon",
		},
	],
	survivalGuide: {
		speciesCompatibility: {
			Human: "Moderate - Your sanity will be tested, but you're welcome here.",
			"Deep One Hybrid": "Easy - You'll fit right in. Literally.",
			"Interdimensional Entity": "Easy - We have a guest dormitory.",
			"Perfectly Sane Individual": "Impossible - Apply somewhere else.",
		},
		orientationSurvivalRate: 68,
		environmentalHazards: [
			"The Miskatonic River (occasionally flows backward)",
			"Arkham Fog (occasionally contains entities)",
			"Library basements (strictly off-limits)",
			"Midnight lectures (featuring unexpected guest speakers)",
		],
		tips: [
			"Never accept books from mysterious professors.",
			"The library closes at dusk for a reason. Don't ask what happens after.",
			"Campus legend says there's a hidden archive in the catacombs. This is true. Don't go there.",
			"If you hear chanting from the bell tower, ignore it. Seriously.",
			"Invest in good coffee. You'll need it for all-nighters studying forbidden texts.",
		],
	},
	storeLink: "https://store.cartooncampus.ca/miskatonic",
};

// Foundation Series Universities - to be added
export const streelingUniversity: FictionalUniversity = {
	id: "streeling",
	name: "Streeling University",
	shortName: "Streeling",
	universe: "Asimov's Foundation Series",
	location: "Trantor (Imperial Sector)",
	founded: 11715,
	missionStatement:
		"Where mathematics shapes destiny and careers last a thousand years. Excellence in education, guaranteed by psychohistory.",
	description:
		"As the premier all-female institution of higher learning on the Imperial planet Trantor, Streeling University combines rigorous academic training with the political sophistication required to navigate galactic intrigue. Our faculty are leaders in psychohistory, mathematics, and the subtle art of imperial subterfuge.",
	icon: "🌌",
	courses: [
		{
			id: "psychohistory-101",
			title: "Intro to Psychohistory",
			code: "PSY-101",
			description:
				"Master the mathematical prediction of galactic behavior. Disclaimer: Results may vary across timescales, centuries, and dimensional anomalies.",
			credits: 4,
			prerequisites: ["Advanced Calculus", "Patience with Imperialism"],
			difficulty: 4,
			survivalRate: 73,
			relatedMerchKeyword: "psychohistory",
		},
		{
			id: "imperial-politics",
			title: "Imperial Court Politics & Strategic Maneuvering",
			code: "POL-250",
			description:
				"Navigate the treacherous halls of power. Learn to read political winds, identify allies, and survive backstabbing—both literal and figurative.",
			credits: 3,
			prerequisites: ["History of the Empire", "Ruthlessness"],
			difficulty: 3,
			survivalRate: 82,
			relatedMerchKeyword: "empire",
		},
		{
			id: "galactic-mathematics",
			title: "Advanced Galactic Mathematics",
			code: "MATH-401",
			description:
				"Explore the mathematical foundations that bind the galaxy together. For those who think calculus is easy and want to prove it.",
			credits: 4,
			prerequisites: ["Calculus II", "A willingness to question reality"],
			difficulty: 5,
			survivalRate: 55,
			relatedMerchKeyword: "mathematics",
		},
	],
	survivalGuide: {
		speciesCompatibility: {
			"Female Human": "Easy - Streeling was built for you.",
			"Male Human": "Hard - Men technically can attend, but don't tell Streeling that.",
			"Non-Binary/Alien": "Moderate - Progressive, but still Imperial.",
		},
		orientationSurvivalRate: 85,
		environmentalHazards: [
			"Imperial spies posing as students",
			"Psychohistorical predictions coming true during exams",
			"Ancient vendettas between noble houses",
		],
		tips: [
			"Join a house alliance early. You'll need allies.",
			"The mathematics library contains texts classified by the Empire. Browse at your own risk.",
			"Trantor's weather is artificially maintained. Dress accordingly.",
			"Never mention a Foundation in conversation. That's just asking for trouble.",
		],
	},
	storeLink: "https://store.cartooncampus.ca/streeling",
};

// University of Trantor
export const trantorUniversity: FictionalUniversity = {
	id: "trantor",
	name: "University of Trantor",
	shortName: "Trantor U",
	universe: "Asimov's Foundation Series",
	location: "Trantor (Galactic Center)",
	founded: 11650,
	missionStatement:
		"Serving the galactic empire for over 11,000 years. Where knowledge is power, and power is everything.",
	description:
		"The oldest and most prestigious institution on Trantor, the University of Trantor trains the elite minds who will shape galactic policy for centuries to come. Our curriculum spans the sciences, humanities, and the political arts required to maintain an empire spanning millions of worlds.",
	icon: "🌌",
	courses: [
		{
			id: "galactic-history",
			title: "Galactic History & Imperial Continuity",
			code: "HIST-200",
			description:
				"Understanding 20,000 years of civilization requires perspective. We'll teach you to see patterns, predict futures, and understand why the Empire will definitely last forever. Definitely.",
			credits: 3,
			prerequisites: ["Basic History"],
			difficulty: 2,
			survivalRate: 88,
			relatedMerchKeyword: "history",
		},
		{
			id: "hyperspace-physics",
			title: "Hyperspace Physics & Jump Calculations",
			code: "PHYS-350",
			description:
				"Ever wonder how ships move faster than light? This course will explain it in ways that will permanently change how you perceive space and time.",
			credits: 4,
			prerequisites: ["Physics II", "Strong stomach"],
			difficulty: 4,
			survivalRate: 69,
			relatedMerchKeyword: "hyperspace",
		},
		{
			id: "robot-laws",
			title: "Robotic Ethics & The Three Laws",
			code: "ETH-180",
			description:
				"A robot must obey the orders given to it by human beings. But what happens when orders conflict with the Three Laws? Ethics meets engineering in this foundational course.",
			credits: 3,
			prerequisites: ["Philosophy 101"],
			difficulty: 3,
			survivalRate: 79,
			relatedMerchKeyword: "robots",
		},
	],
	survivalGuide: {
		speciesCompatibility: {
			Human: "Easy - You're the default.",
			"Spacer Descendants": "Easy - Elite admissions track.",
			"Non-Terran": "Moderate - Welcome, with visa complications.",
		},
		orientationSurvivalRate: 82,
		environmentalHazards: [
			"Trantor's artificial dome can make you claustrophobic",
			"Underground caverns contain ancient archives",
			"Imperial intrigue runs deep",
		],
		tips: [
			"The library goes down 200 levels. Most students only see the first 10.",
			"Robot maintenance AIs patrol campus. Be respectful.",
			"Trantor's closed ecosystem means weather is always stable. Pack accordingly.",
		],
	},
	storeLink: "https://store.cartooncampus.ca/trantor",
};

// Dune - Arrakis University
export const arrakisUniversity: FictionalUniversity = {
	id: "arrakis",
	name: "Arrakis University",
	shortName: "Arrakis U",
	universe: "Frank Herbert's Dune",
	location: "Arrakeen, Arrakis (Planet of Spice)",
	founded: 10191,
	missionStatement:
		"Mastering survival, politics, and the intricacies of the spice trade. Our graduates have shaped empires. Literally.",
	description:
		"Built from the wealth of spice trade, Arrakis University stands as humanity's premier institution for ecological mastery, political philosophy, and desert survival. Students learn not just to survive on the harshest world known to humanity, but to thrive and lead.",
	icon: "🏜️",
	courses: [
		{
			id: "desert-ecology",
			title: "Desert Ecology & Spice Farming Fundamentals",
			code: "ECO-201",
			description:
				"Understand the sandworm-spice complex that drives galactic economy. Learn sustainable harvesting, environmental monitoring, and why you should never anger a worm.",
			credits: 4,
			prerequisites: ["Biology 101", "Heatstroke recovery training"],
			difficulty: 4,
			survivalRate: 64,
			relatedMerchKeyword: "spice",
		},
		{
			id: "politics-jihad",
			title: "Political Philosophy & Interstellar Diplomacy",
			code: "POL-310",
			description:
				"War, religion, and politics intersect on Arrakis. Learn the art of negotiation, the use of religion as political tool, and how to build loyal followings.",
			credits: 3,
			prerequisites: ["History", "Ruthlessness"],
			difficulty: 3,
			survivalRate: 77,
			relatedMerchKeyword: "politics",
		},
		{
			id: "water-ecology",
			title: "Water Conservation & Desert Survival",
			code: "ECO-150",
			description:
				"On Arrakis, water is the most precious resource. Master collection, conservation, and the cultural significance of every drop.",
			credits: 3,
			prerequisites: ["Environmental Science"],
			difficulty: 2,
			survivalRate: 86,
			relatedMerchKeyword: "water",
		},
	],
	survivalGuide: {
		speciesCompatibility: {
			"Heat-adapted Human": "Easy - Arrakis was made for you.",
			"Standard Human": "Hard - Bring water. Lots of water.",
			Fremen: "Easy - Welcome home.",
			Alien: "Moderate - Acclimatization required.",
		},
		orientationSurvivalRate: 73,
		environmentalHazards: [
			"Sandstorms (can arrive with minutes notice)",
			"Sandworms (definitely don't go near them)",
			"Political factions (Harkonnen, Landsraad, Fremen)",
			"Desert heat (lethal in minutes without proper gear)",
		],
		tips: [
			"Invest in a quality stillsuit. It's not just fashion; it's survival.",
			"The campus sits on one of the largest spice deposits. Research is happening 24/7.",
			"Fremen students are experts. Learn from them.",
			"Never waste water. Ever. The culture takes this seriously.",
		],
	},
	storeLink: "https://store.cartooncampus.ca/arrakis",
};

// Avatar - Ba Sing Se University
export const baSingSeUniversity: FictionalUniversity = {
	id: "ba-sing-se",
	name: "University of Ba Sing Se",
	shortName: "Ba Sing Se U",
	universe: "Avatar: The Last Airbender",
	location: "Ba Sing Se, Earth Kingdom",
	founded: 1130,
	missionStatement:
		"The Earth Kingdom's center of learning. Where earthbenders become leaders, and knowledge flows as steadily as the river.",
	description:
		"Within the walls of the legendary city of Ba Sing Se lies the preeminent institution of the Earth Kingdom. The University educates elite earthbenders, scholars, military strategists, and philosophers. It stands as a beacon of stability and tradition in a world forever changed by the Avatar.",
	icon: "🏔️",
	courses: [
		{
			id: "earthbending-advanced",
			title: "Advanced Earthbending: Military & Civilian Applications",
			code: "BEN-301",
			description:
				"From fortification to infrastructure, earthbending shapes civilization. Master both combat techniques and the construction methods that keep Ba Sing Se standing.",
			credits: 4,
			prerequisites: ["Earthbending proficiency", "Physical conditioning"],
			difficulty: 4,
			survivalRate: 72,
			relatedMerchKeyword: "earthbending",
		},
		{
			id: "earth-kingdom-history",
			title: "Earth Kingdom History & Philosophy",
			code: "HIST-250",
			description:
				"Understand 4,000 years of Earth Kingdom civilization. Topics include the role of the Avatar, the importance of tradition, and why walls matter.",
			credits: 3,
			prerequisites: ["General History"],
			difficulty: 2,
			survivalRate: 89,
			relatedMerchKeyword: "history",
		},
		{
			id: "non-bender-studies",
			title: "Non-Bender Studies & Inclusive Innovation",
			code: "SOC-200",
			description:
				"The majority of our citizens are non-benders. Learn to design systems, technology, and policies that serve everyone—not just those with bending abilities.",
			credits: 3,
			prerequisites: ["Sociology 101"],
			difficulty: 2,
			survivalRate: 91,
			relatedMerchKeyword: "society",
		},
	],
	survivalGuide: {
		speciesCompatibility: {
			Earthbender: "Easy - This is your kingdom.",
			"Other Benders": "Moderate - Welcome, but it's an earthbender-centric curriculum.",
			"Non-Bender": "Easy - We value all students.",
			"Fire Nation": "Hard - Historical tensions run deep.",
		},
		orientationSurvivalRate: 86,
		environmentalHazards: [
			"Earth-shaking tremors during earthbending practice",
			"Historical monuments that crumble periodically",
			"Dense city layout (easy to get lost)",
		],
		tips: [
			"Ba Sing Se is enormous. Get a map or befriend someone who knows the walls.",
			"The Tea House district is off-campus but worth exploring.",
			"Earthbending practice happens at dawn. Join in.",
			"Learn to appreciate the architecture. It's a masterpiece of engineering.",
		],
	},
	storeLink: "https://store.cartooncampus.ca/ba-sing-se",
};
