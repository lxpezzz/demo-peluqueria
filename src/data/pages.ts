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

import ba01Before from '../images/transformations/01-color-before.webp';
import ba01After from '../images/transformations/01-color-after.webp';
import ba02Before from '../images/transformations/02-corte-before.webp';
import ba02After from '../images/transformations/02-corte-after.webp';
import ba03Before from '../images/transformations/03-brillo-before.webp';
import ba03After from '../images/transformations/03-brillo-after.webp';
import ba04Before from '../images/transformations/04-estilo-before.webp';
import ba04After from '../images/transformations/04-estilo-after.webp';

/* ==========================================================================
   /estudio
   ========================================================================== */
export const STUDIO_PAGE = {
	meta: {
		title: 'Estudio — MARGEN Hair Studio',
		description:
			'Conoce el espacio arquitectónico, el concepto de peluquería de autor y el modo de trabajo pausado de MARGEN Hair Studio.',
	},
	hero: {
		label: '01 / EL ESTUDIO',
		headingStart: 'Un espacio para',
		headingEmphasis: 'ser tú.',
		image: heroArchitecture,
		alt: 'Interior arquitectónico de MARGEN Hair Studio en hormigón visto, piedra travertino y madera ahumada.',
	},
	story: {
		label: 'NUESTRA HISTORIA',
		lead: 'MARGEN nace con la intención de devolver calma, criterio y sensibilidad arquitectónica al cuidado del cabello.',
		paragraphs: [
			'Concebido como un estudio de autor y no como un salón de paso, cada decisión del espacio —la luz natural, la acústica contenida, los materiales minerales y la distancia entre puestos— responde a una misma idea: ofrecer un lugar donde el tiempo se desacelera.',
			'Trabajamos en sesiones individuales, sin ruido ni prisas, para que cada corte, cada matiz y cada ritual responda exclusivamente a tu fisonomía, tu textura y tu manera real de llevar el cabello.',
		],
	},
	space: {
		label: 'EL ESPACIO',
		heading: 'Arquitectura, luz y silencio.',
		caption: 'Hormigón, piedra travertino, madera ahumada y luz natural.',
		images: [
			{
				image: heroStudioMoment,
				alt: 'Escena de trabajo en calma dentro del estudio iluminado por ventanales amplios.',
				note: 'Zona de trabajo · Luz natural lateral',
				span: 'wide' as const,
			},
			{
				image: atelierEssence,
				alt: 'Detalle de repisa de travertino con cerámica artesanal y tijeras japonesas sobre lino.',
				note: 'Materia · Travertino, lino y precisión',
				span: 'tall' as const,
			},
			{
				image: quietBeauty,
				alt: 'Luz de tarde proyectada sobre muro de cal y hormigón en la zona de descanso.',
				note: 'Atmósfera · Calma y espacio negativo',
				span: 'wide' as const,
			},
		],
	},
	people: {
		label: 'LAS PERSONAS',
		headingStart: 'El oficio detrás de',
		headingEmphasis: 'cada sesión.',
		notice:
			'Perfiles editoriales provisionales de demostración. Pendientes de sustituir por retratos, nombres y trayectorias reales del equipo.',
		roles: [
			{
				code: '01',
				role: 'Dirección Creativa & Corte',
				bio: 'Enfoque en arquitectura del corte, proporción ósea y acabados pensados para evolucionar con naturalidad.',
				image: workForma,
				alt: 'Retrato editorial provisional asociado al área de Dirección Creativa y Corte.',
			},
			{
				code: '02',
				role: 'Dirección de Color & Matices',
				bio: 'Especialización en iluminación orgánica, profundidad tonal y transiciones suaves respetuosas con la fibra.',
				image: colorMatices,
				alt: 'Retrato editorial provisional asociado al área de Dirección de Color y Matices.',
			},
			{
				code: '03',
				role: 'Rituales & Salud Capilar',
				bio: 'Diagnóstico de cuero cabelludo y tratamientos restauradores enfocados en brillo, tacto y densidad.',
				image: tratamientosCuidado,
				alt: 'Retrato editorial provisional asociado al área de Rituales y Salud Capilar.',
			},
		],
	},
	process: {
		label: 'NUESTRA FORMA DE TRABAJAR',
		headingStart: 'Del silencio inicial al',
		headingEmphasis: 'resultado honesto.',
		steps: [
			{
				number: '01',
				title: 'Escucha y diagnóstico',
				text: 'Comenzamos cada cita observando la caída natural, la densidad, el historial del cabello y tu ritmo diario.',
			},
			{
				number: '02',
				title: 'Diseño a medida',
				text: 'Definimos contigo la dirección de corte, color o tratamiento sin imposiciones ni fórmulas cerradas.',
			},
			{
				number: '03',
				title: 'Ejecución precisa',
				text: 'Trabajamos con técnica depurada, tiempos respetados y atención absoluta a los pequeños detalles.',
			},
			{
				number: '04',
				title: 'Continuidad fuera del estudio',
				text: 'Te acompañamos con pautas sencillas para que tu cabello mantenga su forma y vitalidad semanas después.',
			},
		],
	},
};

/* ==========================================================================
   /servicios
   ========================================================================== */
export interface ServiceCategory {
	number: string;
	id: string;
	title: string;
	description: string;
	image: ImageMetadata;
	alt: string;
	items: { name: string; detail: string; pricing: string }[];
}

export const SERVICES_PAGE = {
	meta: {
		title: 'Servicios — MARGEN Hair Studio',
		description:
			'Carta editorial de servicios de MARGEN Hair Studio: corte y estilo, color y matices, tratamientos capilares y experiencias a medida.',
	},
	hero: {
		label: '02 / SERVICIOS',
		headingStart: 'El detalle lo',
		headingEmphasis: 'cambia todo.',
		intro: 'Cada servicio se diseña tras una valoración individual. No trabajamos con tarifas cerradas genéricas: cada propuesta se ajusta a la longitud, densidad y necesidad real de tu cabello.',
		image: corteEstilo,
		alt: 'Retrato editorial de cabello con corte contemporáneo de líneas limpias.',
	},
	pricingNotice:
		'Indicaciones de consulta orientativas: las tarifas definitivas se confirman tras diagnóstico previo en el estudio.',
	categories: [
		{
			number: '01',
			id: 'corte-estilo',
			title: 'Corte & Estilo',
			description:
				'Estudio de proporciones, caída y textura natural para construir siluetas limpias que funcionan en tu día a día.',
			image: corteEstilo,
			alt: 'Corte bob contemporáneo con textura natural y perfil arquitectónico.',
			items: [
				{
					name: 'Corte de autor y asesoramiento',
					detail: 'Diagnóstico personalizado, lavado sensorial, corte en húmedo y acabado en seco.',
					pricing: 'Según diagnóstico',
				},
				{
					name: 'Rediseño de forma y cambio de longitud',
					detail: 'Sesión extendida para transformaciones estructurales y definición de nuevo volumen.',
					pricing: 'Según diagnóstico',
				},
				{
					name: 'Peinado editorial y definición natural',
					detail: 'Acabado pulido o con movimiento orgánico respetando la textura original.',
					pricing: 'Bajo consulta',
				},
				{
					name: 'Mantenimiento de flequillo y contornos',
					detail: 'Ajuste preciso entre cortes para conservar la geometría inicial.',
					pricing: 'Bajo consulta',
				},
			],
		},
		{
			number: '02',
			id: 'color-matices',
			title: 'Color & Matices',
			description:
				'Coloración pensada desde la luz y la profundidad, evitando contrastes artificiales y priorizando la salud de la fibra.',
			image: colorMatices,
			alt: 'Melena con coloración dimensional cálida y reflejos cobrizos sutiles.',
			items: [
				{
					name: 'Coloración personalizada',
					detail: 'Formulación a medida para unificar tono, cubrir canas con naturalidad o enriquecer la base.',
					pricing: 'Según diagnóstico',
				},
				{
					name: 'Iluminación orgánica y mechas suaves',
					detail: 'Trabajo a mano alzada enfocado en puntos de luz y crecimiento armónico.',
					pricing: 'Según diagnóstico',
				},
				{
					name: 'Baño de matiz y luminosidad',
					detail: 'Corrección sutil de reflejos y aporte de brillo espejo sin sobrecargar el color.',
					pricing: 'Bajo consulta',
				},
				{
					name: 'Mantenimiento de color de autor',
					detail: 'Reequilibrio tonal diseñado para prolongar la frescura entre sesiones completas.',
					pricing: 'Bajo consulta',
				},
			],
		},
		{
			number: '03',
			id: 'tratamientos',
			title: 'Tratamientos',
			description:
				'Rituales de pausa y recuperación formulados para devolver elasticidad, suavidad y luminosidad profunda.',
			image: tratamientosCuidado,
			alt: 'Primer plano editorial de cabello sano, brillante y cuidado sobre lino natural.',
			items: [
				{
					name: 'Ritual de hidratación profunda',
					detail: 'Infusión nutritiva para cabellos deshidratados o sensibilizados por el clima y el calor.',
					pricing: 'Bajo consulta',
				},
				{
					name: 'Reparación estructural de la fibra',
					detail: 'Tratamiento intensivo enfocado en elasticidad y resistencia tras procesos técnicos.',
					pricing: 'Según diagnóstico',
				},
				{
					name: 'Cuidado y equilibrio del cuero cabelludo',
					detail: 'Exfoliación suave, oxigenación y masaje lento para revitalizar desde la raíz.',
					pricing: 'Bajo consulta',
				},
				{
					name: 'Ritual de brillo y sellado cuticular',
					detail: 'Acabado sedoso que realza la luz natural sin apelmazar el movimiento.',
					pricing: 'Bajo consulta',
				},
			],
		},
		{
			number: '04',
			id: 'experiencias',
			title: 'Experiencias',
			description:
				'Sesiones integrales que combinan diagnóstico, técnica y ritual de cuidado en un único encuentro sin prisas.',
			image: atelierEssence,
			alt: 'Detalle del atelier con piedra travertino, cerámica y herramientas de precisión.',
			items: [
				{
					name: 'Experiencia MARGEN Completa',
					detail: 'Diagnóstico detenido, corte de autor, ritual de hidratación y acabado personalizado.',
					pricing: 'Según diagnóstico',
				},
				{
					name: 'Renovación de Luz y Forma',
					detail: 'Trabajo integral de iluminación, matiz protector, tratamiento reparador y corte.',
					pricing: 'Según diagnóstico',
				},
				{
					name: 'Sesión de Preparación Editorial o Evento',
					detail: 'Propuesta a medida de textura, peinado y cuidado previo para ocasiones especiales.',
					pricing: 'Bajo consulta',
				},
			],
		},
	] satisfies ServiceCategory[],
};

/* ==========================================================================
   /trabajos (Lookbook)
   ========================================================================== */
export type LookbookCategory = 'corte' | 'color' | 'editorial';

export interface LookbookItem {
	id: string;
	number: string;
	collection: string;
	title: string;
	category: LookbookCategory;
	categoryLabel: string;
	note: string;
	layout: 'tall' | 'wide' | 'portrait' | 'square';
	image: ImageMetadata;
	alt: string;
}

export const LOOKBOOK_PAGE = {
	meta: {
		title: 'Lookbook — MARGEN Hair Studio',
		description:
			'Lookbook editorial de MARGEN Hair Studio: estudios de corte, color y fotografía de moda centrada en el cabello.',
	},
	hero: {
		label: 'SELECTED WORKS / MARGEN HAIR STUDIO',
		headingStart: 'El cabello también',
		headingEmphasis: 'cuenta historias.',
		image: workMovimiento,
		alt: 'Fotografía editorial de melena larga en movimiento bajo luz natural frente a muro de cal.',
	},
	filters: [
		{ id: 'todos', label: 'Todos' },
		{ id: 'corte', label: 'Corte' },
		{ id: 'color', label: 'Color' },
		{ id: 'editorial', label: 'Editorial' },
	] as const,
	items: [
		{
			id: 'forma-01',
			number: '01',
			collection: 'Colección I · Arquitectura',
			title: 'Forma',
			category: 'corte',
			categoryLabel: 'Corte',
			note: 'Silueta corta estructurada con flequillo limpio y contraste claroscuro.',
			layout: 'tall',
			image: workForma,
			alt: 'Estudio editorial Forma: corte corto estructurado con flequillo definido.',
		},
		{
			id: 'movimiento-02',
			number: '02',
			collection: 'Colección I · Dinámica',
			title: 'Movimiento',
			category: 'editorial',
			categoryLabel: 'Editorial',
			note: 'Capas largas ligeras captadas en gesto natural frente a piedra cálida.',
			layout: 'wide',
			image: workMovimiento,
			alt: 'Estudio editorial Movimiento: cabello largo en movimiento en luz de día.',
		},
		{
			id: 'luz-03',
			number: '03',
			collection: 'Colección II · Cromática',
			title: 'Luz',
			category: 'color',
			categoryLabel: 'Color',
			note: 'Reflejos miel y terracota apagada integrados con suavidad orgánica.',
			layout: 'portrait',
			image: workLuz,
			alt: 'Estudio editorial Luz: retrato con reflejos cálidos naturales junto a ventanal.',
		},
		{
			id: 'textura-04',
			number: '04',
			collection: 'Colección II · Materia',
			title: 'Textura',
			category: 'editorial',
			categoryLabel: 'Editorial',
			note: 'Estudio táctil del rizo y la onda natural en iluminación lateral.',
			layout: 'square',
			image: workTextura,
			alt: 'Estudio editorial Textura: primer plano de rizos y ondas naturales.',
		},
		{
			id: 'linea-05',
			number: '05',
			collection: 'Colección III · Precisión',
			title: 'Línea',
			category: 'corte',
			categoryLabel: 'Corte',
			note: 'Bob contemporáneo a la altura de la mandíbula con caída limpia y sin peso.',
			layout: 'portrait',
			image: corteEstilo,
			alt: 'Estudio editorial Línea: corte bob texturizado de perfil limpio.',
		},
		{
			id: 'matiz-06',
			number: '06',
			collection: 'Colección III · Profundidad',
			title: 'Matiz',
			category: 'color',
			categoryLabel: 'Color',
			note: 'Castaño cálido multidimensional con acabado luminoso y natural.',
			layout: 'tall',
			image: colorMatices,
			alt: 'Estudio editorial Matiz: ondas castañas cálidas con reflejos cobrizos.',
		},
		{
			id: 'calma-07',
			number: '07',
			collection: 'Colección IV · Silencio',
			title: 'Calma',
			category: 'editorial',
			categoryLabel: 'Editorial',
			note: 'Retrato contemplativo de luz de tarde y volumen natural sin artificio.',
			layout: 'wide',
			image: quietBeauty,
			alt: 'Estudio editorial Calma: perfil y espalda con cabello natural bajo luz de tarde.',
		},
	] satisfies LookbookItem[],
	bridge: {
		label: 'ANTES & DESPUÉS',
		headingStart: 'Detrás de cada cambio,',
		headingEmphasis: 'una historia.',
		body: 'Explora nuestras comparativas interactivas para apreciar cómo un matiz, una proporción o un ritual transforman el conjunto manteniendo la esencia.',
		ctaLabel: 'Descubrir transformaciones',
		ctaHref: '/antes-despues',
	},
};

/* ==========================================================================
   /antes-despues (Transformaciones)
   ========================================================================== */
export interface TransformationCase {
	id: string;
	number: string;
	category: string;
	title: string;
	description: string;
	serviceNote: string;
	detailText: string;
	theme: 'light' | 'dark';
	layout: 'featured-right' | 'featured-left' | 'wide-split' | 'offset-editorial';
	beforeImage: ImageMetadata;
	beforeAlt: string;
	afterImage: ImageMetadata;
	afterAlt: string;
}

export const TRANSFORMATIONS_PAGE = {
	meta: {
		title: 'Antes & Después — MARGEN Hair Studio',
		description:
			'Comparadores interactivos de transformaciones capilares de MARGEN Hair Studio: color, corte, brillo y estilo.',
	},
	hero: {
		label: '05 / TRANSFORMACIONES',
		headingStart: 'El',
		headingEmphasis1: 'cambio',
		headingMid: 'se siente. Se',
		headingEmphasis2: 've.',
		intro: 'Cada cabello tiene una historia. Descubre cómo un corte, un nuevo color o un tratamiento pueden transformar una imagen sin perder su esencia.',
		image: heroStudioMoment,
		alt: 'Estilista trabajando el acabado del cabello en calma dentro del estudio.',
	},
	demoDisclosure:
		'Nota editorial: por tratarse de una web conceptual de demostración sin fotografías de clientes reales, los comparadores utilizan pares demostrativos de un mismo encuadre preparados para sustituirse directamente por casos reales del salón.',
	cases: [
		{
			id: 'color',
			number: '01',
			category: '01 / COLOR',
			title: 'Luz cálida y profundidad',
			description:
				'Trabajo de tonalidad y matices diseñado para devolver dimensión, reflejo natural y calidez sin perder suavidad en la transición.',
			serviceNote: 'Color & Matices · Iluminación orgánica + baño de brillo',
			detailText:
				'Buscamos que la luz recorra el cabello con naturalidad, evitando bloques planos o contrastes rígidos.',
			theme: 'light',
			layout: 'featured-right',
			beforeImage: ba01Before,
			beforeAlt: 'Estudio demostrativo antes: base castaña apagada sin reflejos dimensionales.',
			afterImage: ba01After,
			afterAlt: 'Estudio demostrativo después: castaño cálido con matices cobrizos luminosos.',
		},
		{
			id: 'corte',
			number: '02',
			category: '02 / CORTE',
			title: 'Proporción y nueva silueta',
			description:
				'Transformación enfocada en la estructura, la línea de mandíbula y la ligereza del acabado para potenciar los rasgos.',
			serviceNote: 'Corte & Estilo · Diseño a medida + acabado natural',
			detailText:
				'Cuando la geometría respeta el movimiento real, el corte se mantiene equilibrado sin esfuerzo.',
			theme: 'dark',
			layout: 'featured-left',
			beforeImage: ba02Before,
			beforeAlt: 'Estudio demostrativo antes: acabado plano en estudio monocromo de referencia.',
			afterImage: ba02After,
			afterAlt: 'Estudio demostrativo después: corte bob limpio con definición y volumen equilibrado.',
		},
		{
			id: 'brillo-tratamiento',
			number: '03',
			category: '03 / BRILLO & TRATAMIENTO',
			title: 'Recuperación y acabado táctil',
			description:
				'Mejora visible de la calidad superficial de la fibra: suavidad, elasticidad y un brillo sereno que refleja la salud capilar.',
			serviceNote: 'Tratamientos · Ritual de hidratación y sellado cuticular',
			detailText:
				'Un tratamiento bien elegido cambia tanto el tacto como la forma en que el cabello recibe la luz.',
			theme: 'light',
			layout: 'wide-split',
			beforeImage: ba03Before,
			beforeAlt: 'Estudio demostrativo antes: fibra capilar con aspecto mate y menor luminosidad.',
			afterImage: ba03After,
			afterAlt: 'Estudio demostrativo después: cabello sedoso con brillo saludable y tacto ligero.',
		},
		{
			id: 'estilo',
			number: '04',
			category: '04 / ESTILO',
			title: 'Definición sin rigidez',
			description:
				'Redefinición del peinado y la textura natural para lograr una imagen actual, fresca y coherente con quien la lleva.',
			serviceNote: 'Estilo & Acabado · Definición orgánica + matiz de luz',
			detailText:
				'El mejor peinado no parece forzado: acompaña el gesto y conserva su naturalidad horas después.',
			theme: 'dark',
			layout: 'offset-editorial',
			beforeImage: ba04Before,
			beforeAlt: 'Estudio demostrativo antes: referencia tonal neutra previa al acabado de estilo.',
			afterImage: ba04After,
			afterAlt: 'Estudio demostrativo después: textura definida con calidez y movimiento sutil.',
		},
	] satisfies TransformationCase[],
	homePreview: {
		label: '04 / TRANSFORMACIONES',
		headingStart: 'Un antes. Un después.',
		headingEmphasis: 'Una nueva forma de verte.',
		body: 'Desliza para observar cómo el trabajo de luz, proporción y cuidado transforma la percepción del cabello sin alterar tu identidad.',
		ctaLabel: 'Ver todas las transformaciones',
		ctaHref: '/antes-despues',
	},
	cta: {
		label: 'TU PRÓXIMO PASO',
		headingStart: '¿Y si el próximo cambio',
		headingEmphasis: 'es el tuyo?',
		ctaLabel: 'Reservar una cita',
		ctaHref: '/contacto',
	},
};

/* ==========================================================================
   /manifiesto
   ========================================================================== */
export const MANIFESTO_PAGE = {
	meta: {
		title: 'Manifiesto — MARGEN Hair Studio',
		description:
			'Manifiesto creativo y visión de MARGEN Hair Studio: individualidad, técnica, naturalidad y detalle.',
	},
	hero: {
		label: 'MANIFIESTO / MARGEN',
		headingStart: 'La belleza no',
		headingEmphasis: 'sigue reglas.',
		lead: 'Frente a la velocidad y a los moldes repetidos, reivindicamos el margen: ese espacio de pausa donde aparece lo verdaderamente propio.',
	},
	principles: [
		{
			number: '01',
			title: 'La individualidad',
			statement: 'Ningún rostro ni ninguna textura deberían adaptarse a una tendencia pasajera.',
			body: 'Observamos cómo se mueve tu cabello, cómo cae cuando no lo fuerzas y qué energía transmite tu presencia. Cada propuesta nace de esa lectura singular.',
			image: workForma,
			alt: 'Retrato editorial minimalista enfatizando la identidad individual del corte.',
		},
		{
			number: '02',
			title: 'La técnica',
			statement: 'La precisión invisible es lo que permite la aparente sencillez.',
			body: 'Detrás de un acabado natural hay geometría, conocimiento del color y dominio de la herramienta. La técnica no busca exhibirse: existe para sostener el resultado en el tiempo.',
			image: heroStudioMoment,
			alt: 'Estilista ejecutando un gesto preciso sobre el cabello en luz natural.',
		},
		{
			number: '03',
			title: 'La naturalidad',
			statement: 'Un buen trabajo convive contigo al día siguiente, no solo frente al espejo del estudio.',
			body: 'Huimos de los efectos rígidos y de las fórmulas excesivas. Creemos en colores que envejecen con elegancia y cortes que acompañan tu ritmo real.',
			image: quietBeauty,
			alt: 'Retrato sereno con cabello oscuro natural bañado en luz cálida de tarde.',
		},
		{
			number: '04',
			title: 'El detalle',
			statement: 'Lo extraordinario casi siempre vive en aquello que apenas se nombra.',
			body: 'La temperatura de la luz, el peso exacto de un contorno, el silencio durante un ritual o la delicadeza de un matiz. Cuidar lo mínimo transforma la experiencia entera.',
			image: atelierEssence,
			alt: 'Detalle del atelier con piedra travertino, cerámica y tijeras sobre lino.',
		},
	],
	quote: {
		text: 'No buscamos cambiar quién eres. Buscamos expresar lo que te hace diferente.',
		attribution: 'MARGEN — HAIR STUDIO',
	},
};

/* ==========================================================================
   /contacto
   ========================================================================== */
export const CONTACT_PAGE = {
	meta: {
		title: 'Contacto y Reserva — MARGEN Hair Studio',
		description:
			'Contacto y solicitud de cita de demostración para MARGEN Hair Studio.',
	},
	hero: {
		label: '06 / CONTACTO',
		headingStart: 'Todo empieza con',
		headingEmphasis: 'una conversación.',
		intro: 'Cuéntanos qué buscas o qué momento atraviesa tu cabello. Cada cita comienza escuchando.',
		image: atelierEssence,
		alt: 'Detalle sereno del interior del estudio MARGEN en piedra travertino y luz cálida.',
	},
	demoBanner: {
		title: 'Entorno de demostración',
		text: 'Este formulario valida los campos de forma accesible, pero no envía ni almacena datos porque todavía no hay un servicio backend conectado.',
	},
	infoBlocks: [
		{
			label: 'Dirección del estudio',
			value: 'Ubicación pendiente de definir (proyecto conceptual)',
		},
		{
			label: 'Teléfono y WhatsApp',
			value: 'Canal directo pendiente de integración',
		},
		{
			label: 'Horario orientativo',
			value: 'Cita previa individual · Martes a sábado (demo)',
		},
		{
			label: 'Redes editoriales',
			value: 'Perfiles sociales pendientes de publicación',
		},
	],
	serviceOptions: [
		'Corte & Estilo',
		'Color & Matices',
		'Tratamientos & Cuidado',
		'Experiencia Completa',
		'Diagnóstico previo / Consulta',
	],
};
