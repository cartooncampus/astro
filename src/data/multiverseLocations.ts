import {
	arrakisUniversity,
	baSingSeUniversity,
	miskatonicUniversity,
	streelingUniversity,
	trantorUniversity,
	type MultiverseUniversity,
} from './multiverseUniversities';

export interface MultiverseLocation {
	universeSlug: string;
	slug: string;
	name: string;
	type: 'City' | 'Planet';
	icon: string;
	theme: string;
	description: string;
	topics: string[];
	storeLink: string;
	universities: MultiverseUniversity[];
}

export const multiverseLocations: MultiverseLocation[] = [
	{
		universeSlug: 'foundation',
		slug: 'trantor',
		name: 'Trantor',
		type: 'City',
		icon: '🌌',
		theme: 'foundation',
		description:
			'At the heart of the Galactic Empire, Trantor is a planet-wide city where knowledge, bureaucracy, and political ambition meet. Its universities prepare scholars to navigate the mathematics, history, and intrigue of a civilization spanning millions of worlds.',
		topics: ['Psychohistory', 'Imperial politics', 'Galactic science'],
		storeLink: 'https://store.cartooncampus.ca/foundation',
		universities: [streelingUniversity, trantorUniversity],
	},
	{
		universeSlug: 'dune',
		slug: 'arrakis',
		name: 'Arrakis',
		type: 'Planet',
		icon: '🏜️',
		theme: 'dune',
		description:
			'Arrakis is the desert planet whose spice controls travel, wealth, and power across the known universe. In Arrakeen, learning is inseparable from water discipline, ecology, and the politics of survival.',
		topics: ['Desert ecology', 'Spice economics', 'Water conservation'],
		storeLink: 'https://store.cartooncampus.ca/dune',
		universities: [arrakisUniversity],
	},
	{
		universeSlug: 'lovecraft',
		slug: 'arkham',
		name: 'Arkham',
		type: 'City',
		icon: '🌫️',
		theme: 'lovecraft',
		description:
			'Arkham, Massachusetts is a mist-shrouded New England city with an unsettling appetite for secrets. Its academic life rewards the curious, though local archives and river fog occasionally demand a steadier constitution.',
		topics: ['Forbidden archives', 'Occult history', 'Cosmic mysteries'],
		storeLink: 'https://store.cartooncampus.ca/miskatonic',
		universities: [miskatonicUniversity],
	},
	{
		universeSlug: 'avatar',
		slug: 'ba-sing-se',
		name: 'Ba Sing Se',
		type: 'City',
		icon: '🏔️',
		theme: 'avatar',
		description:
			'Behind the walls of Ba Sing Se, the Earth Kingdom’s largest city balances old traditions with a busy civic life. Its scholars and benders study history, infrastructure, philosophy, and the patient strength of earth.',
		topics: ['Earthbending', 'Earth Kingdom history', 'Civic engineering'],
		storeLink: 'https://store.cartooncampus.ca/avatar',
		universities: [baSingSeUniversity],
	},
];

export const locationUniversityRoutes = multiverseLocations.flatMap((location) =>
	location.universities.map((university) => ({
		location,
		university,
		universitySlug: `${university.id}-university`,
	})),
);
