import type { ImageMetadata } from 'astro';
import heroArchitecture from '../images/hero/salon-architecture.webp';
import heroStudioMoment from '../images/hero/studio-moment.webp';
import atelierEssence from '../images/studio/atelier-essence.webp';
import corteEstilo from '../images/services/corte-estilo.webp';
import colorMatices from '../images/services/color-matices.webp';
import tratamientosCuidado from '../images/services/tratamientos-cuidado.webp';
import workForma from '../images/works/work-forma.webp';
import workMovimiento from '../images/works/work-movimiento.webp';
import workLuz from '../images/works/work-luz.webp';
import workTextura from '../images/works/work-textura.webp';
import quietBeauty from '../images/philosophy/quiet-beauty.webp';

export const BRAND = {
	name: 'MARGEN',
	descriptor: 'HAIR STUDIO',
	year: 2026,
	conceptNotice: 'Proyecto conceptual de diseño editorial.',
	demoNotice: 'Concepto web de demostración',
} as const;

export const NAV_ITEMS = [
	{ label: 'Estudio', href: '/estudio' },
	{ label: 'Servicios', href: '/servicios' },
	{ label: 'Lookbook', href: '/trabajos' },
	{ label: 'Antes & Después', href: '/antes-despues' },
	{ label: 'Manifiesto', href: '/manifiesto' },
	{ label: 'Contacto', href: '/contacto' },
] as const;

export interface HeroSlide {
	index: string;
	caption: string;
	note: string;
	image: ImageMetadata;
	alt: string;
}

export const HERO_MEDIA = {
	mainImage: heroArchitecture,
	mainAlt:
		'Interior arquitectónico de MARGEN Hair Studio con techo de hormigón visto, mostrador de piedra travertino, madera ahumada y luz natural.',
};

export const HERO_SLIDES: HeroSlide[] = [
	{
		index: '01',
		caption: 'El oficio en calma',
		note: 'Observación, proporción y detalle antes de cada gesto.',
		image: heroStudioMoment,
		alt: 'Estilista trabajando con delicadeza el cabello largo en un estudio iluminado con luz natural.',
	},
	{
		index: '02',
		caption: 'Corte arquitectónico',
		note: 'Líneas limpias diseñadas para convivir con tu movimiento natural.',
		image: corteEstilo,
		alt: 'Retrato editorial de un corte bob texturizado con perfil limpio bajo luz lateral.',
	},
	{
		index: '03',
		caption: 'Matices de luz',
		note: 'Coloración orgánica que busca profundidad y reflejos sutiles.',
		image: colorMatices,
		alt: 'Primer plano editorial de melena castaña cálida con reflejos cobrizos naturales.',
	},
	{
		index: '04',
		caption: 'Materia y pausa',
		note: 'Un espacio pensado para detener el ritmo y cuidar la salud capilar.',
		image: atelierEssence,
		alt: 'Detalle del atelier con piedra travertino, cerámica artesanal y tijeras japonesas sobre lino.',
	},
	{
		index: '05',
		caption: 'Movimiento vivo',
		note: 'Resultados que envejecen con naturalidad fuera del estudio.',
		image: workMovimiento,
		alt: 'Retrato en movimiento de cabello largo con capas suaves frente a un muro de piedra cálida.',
	},
];

export const ESSENCE_DATA = {
	label: '01 / NUESTRA ESENCIA',
	headingStart: 'No seguimos tendencias.',
	headingEmphasis: 'Encontramos tu estilo.',
	body: 'Creemos en el cabello como una forma de identidad. En escuchar antes de cortar, en observar antes de transformar y en cuidar cada detalle hasta encontrar aquello que te representa.',
	secondary:
		'Cada sesión en MARGEN parte de un diagnóstico sereno: estructura ósea, textura real, hábitos cotidianos y el modo en que la luz cae sobre tu cabello.',
	image: atelierEssence,
	imageAlt:
		'Detalle editorial del estudio con repisa de travertino, pieza cerámica y tijeras de precisión bajo luz de tarde.',
	imageCaption: 'Atelier · Materiales nobles y precisión técnica',
};

export interface ServiceItem {
	number: string;
	title: string;
	subtitle: string;
	description: string;
	image: ImageMetadata;
	alt: string;
}

export const SERVICES_DATA = {
	label: '02 / LO QUE HACEMOS',
	headingStart: 'Cada detalle',
	headingEmphasis: 'importa.',
	items: [
		{
			number: '01',
			title: 'Corte & Estilo',
			subtitle: 'Estructura · Proporción',
			description:
				'Diseños personalizados, respetando la textura, el movimiento y la identidad de cada persona.',
			image: corteEstilo,
			alt: 'Retrato editorial de corte bob contemporáneo con caída natural y textura sutil.',
		},
		{
			number: '02',
			title: 'Color & Matices',
			subtitle: 'Luz · Profundidad',
			description:
				'Técnicas de color que trabajan con la luz, la profundidad y la naturalidad.',
			image: colorMatices,
			alt: 'Retrato editorial destacando matices cálidos y luminosos en cabello castaño.',
		},
		{
			number: '03',
			title: 'Tratamientos & Cuidado',
			subtitle: 'Fibra · Ritual',
			description:
				'Rituales orientados a cuidar la salud, la textura y la belleza del cabello.',
			image: tratamientosCuidado,
			alt: 'Primer plano editorial de cabello sano y brillante sobre lino natural en calma.',
		},
	] satisfies ServiceItem[],
};

export interface WorkItem {
	id: string;
	number: string;
	title: string;
	discipline: string;
	note: string;
	layout: 'tall' | 'wide' | 'portrait' | 'square';
	image: ImageMetadata;
	alt: string;
}

export const WORKS_DATA = {
	label: '03 / SELECTED WORKS',
	headingStart: 'El resultado',
	headingEmphasis: 'habla.',
	caption: 'Serie editorial conceptual · Estudios de forma, luz y textura',
	items: [
		{
			id: 'forma',
			number: 'I',
			title: 'Forma',
			discipline: 'Corte escultórico',
			note: 'Geometría limpia y flequillo definido en contraste suave.',
			layout: 'tall',
			image: workForma,
			alt: 'Estudio editorial Forma: corte corto estructurado fotografiado con iluminación claroscuro.',
		},
		{
			id: 'movimiento',
			number: 'II',
			title: 'Movimiento',
			discipline: 'Capas y fluidez',
			note: 'Volumen orgánico pensado para acompañar el gesto natural.',
			layout: 'wide',
			image: workMovimiento,
			alt: 'Estudio editorial Movimiento: melena larga en movimiento bajo luz natural frente a muro de cal.',
		},
		{
			id: 'luz',
			number: 'III',
			title: 'Luz',
			discipline: 'Color dimensional',
			note: 'Reflejos miel y terracota apagada integrados sin contrastes bruscos.',
			layout: 'portrait',
			image: workLuz,
			alt: 'Estudio editorial Luz: retrato con reflejos cálidos y textura natural junto a ventanal.',
		},
		{
			id: 'textura',
			number: 'IV',
			title: 'Textura',
			discipline: 'Definición y cuidado',
			note: 'Respeto por el rizo, elasticidad y acabado táctil.',
			layout: 'square',
			image: workTextura,
			alt: 'Estudio editorial Textura: primer plano artístico de ondas y rizos naturales iluminados lateralmente.',
		},
	] satisfies WorkItem[],
};

export const PHILOSOPHY_DATA = {
	label: '05 / FILOSOFÍA',
	headingStart: 'La belleza está en lo que te hace',
	headingEmphasis: 'diferente.',
	body: 'Trabajamos lejos de las prisas y de los resultados en serie. En MARGEN entendemos el silencio, la escucha y la moderación como herramientas de diseño: quitar lo superfluo hasta dejar únicamente una forma honesta que se siente tuya desde el primer día.',
	signature: 'Sin excesos. Sin artificio. Solo intención.',
	image: quietBeauty,
	imageAlt:
		'Retrato editorial de perfil y espalda con cabello oscuro natural bañado por luz cálida de tarde junto a muro de hormigón.',
};

export const BOOKING_DATA = {
	label: '06 / CONTACTO & RESERVA',
	headingStart: 'Tu próximo cambio empieza',
	headingEmphasis: 'aquí.',
	body: 'Atendemos únicamente con cita previa para dedicar a cada sesión el tiempo que requiere. Un encuentro pausado donde definimos contigo el camino de tu cabello.',
	ctaLabel: 'Reservar cita',
	demoBadge: 'Información de demostración',
	demoExplanation:
		'Esta página es una demo conceptual de diseño web. No existe un sistema de reservas activo ni una ubicación física asociada a la marca ficticia MARGEN.',
	demoDetails: [
		{ label: 'Modalidad', value: 'Cita previa individual (demo)' },
		{ label: 'Horario orientativo', value: 'Martes a sábado · Formato atelier' },
		{ label: 'Canal de contacto', value: 'Pendiente de integración real' },
	],
};
