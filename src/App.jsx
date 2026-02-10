import { useMemo, useState } from 'react'
import './App.css'

const comunas = [
	'Stgo centro',
	'San Miguel',
	'Las Condes',
	'Ñuñoa',
	'Providencia',
	'La Reina',
	'Independencia',
]

const serviceTemplates = [
	{
		type: 'Gasfiteria',
		baseName: 'Gasfiter Pro',
		emailDomain: 'gasfiterpro.cl',
		description:
			'Reparacion de fugas, griferia y calefont con atencion programada y soporte de emergencia.',
		image:
			'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=80',
	},
	{
		type: 'Cerrajeria',
		baseName: 'Llaves Seguras',
		emailDomain: 'llavesseguras.cl',
		description:
			'Aperturas sin dano, cambios de combinacion y refuerzo de cerraduras residenciales.',
		image:
			'https://images.unsplash.com/photo-1516822003754-cca485356ecb?auto=format&fit=crop&w=900&q=80',
	},
	{
		type: 'Abogacia',
		baseName: 'Estudio Legal',
		emailDomain: 'estudiolegal.cl',
		description:
			'Asesorias en derecho civil, familia y laboral con seguimiento mensual de casos.',
		image:
			'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80',
	},
	{
		type: 'Electricidad',
		baseName: 'Electro Asistencia',
		emailDomain: 'electroasistencia.cl',
		description:
			'Tableros, cortocircuitos y certificacion SEC para hogares y pequenos comercios.',
		image:
			'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80',
	},
	{
		type: 'Pintura',
		baseName: 'Pintura Urbana',
		emailDomain: 'pinturaurbana.cl',
		description:
			'Pintura interior y exterior, sellos antihumedad y acabados premium.',
		image:
			'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=900&q=80',
	},
	{
		type: 'Jardineria',
		baseName: 'Jardines Verdes',
		emailDomain: 'jardinesverdes.cl',
		description:
			'Mantencion de jardines, podas y riego automatico para areas residenciales.',
		image:
			'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=80',
	},
	{
		type: 'Limpieza',
		baseName: 'Limpieza Total',
		emailDomain: 'limpiezatotal.cl',
		description:
			'Limpieza profunda post obra y sanitizacion de oficinas y hogares.',
		image:
			'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80',
	},
	{
		type: 'Mecanica Automotriz',
		baseName: 'Motor Expert',
		emailDomain: 'motorexpert.cl',
		description:
			'Diagnostico por scanner, frenos y mantencion preventiva para todo tipo de vehiculos.',
		image:
			'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80',
	},
	{
		type: 'Tecnicos en Computacion',
		baseName: 'Soporte PC',
		emailDomain: 'soporte-pc.cl',
		description:
			'Formateo, respaldo, limpieza y armado de equipos con soporte remoto.',
		image:
			'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
	},
	{
		type: 'Fletes y Mudanzas',
		baseName: 'Mudanzas Urbanas',
		emailDomain: 'mudanzasurbanas.cl',
		description:
			'Embalaje seguro, traslados por hora y seguro de carga incluido.',
		image:
			'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=900&q=80',
	},
]

const services = serviceTemplates.map((template, templateIndex) => {
	const items = comunas.map((comuna, comunaIndex) => {
		const index = templateIndex * comunas.length + comunaIndex + 1
		const phone = `+56 9 ${7000 + index} ${2000 + comunaIndex}`
		const emailHandle = `contacto${index}`
		return {
			id: `${template.type}-${comuna}`,
			title: `${template.baseName} ${comuna}`,
			phone,
			email: `${emailHandle}@${template.emailDomain}`,
			comuna,
			description: template.description,
			image: template.image,
		}
	})

	return {
		type: template.type,
		items,
	}
})

const comunaBadges = comunas
const flatServices = services.flatMap((group) => group.items)
const mapUrlBase = 'https://www.google.com/maps?q='

const detailText = {
	Gasfiteria: [
		'Servicio especializado en gasfiteria residencial y comercial, con enfoque en diagnostico rapido y soluciones duraderas para instalaciones antiguas y modernas.',
		'Realizamos cambios de griferia, reparacion de filtraciones, mantencion de calefont y mejoras de presion, siempre con materiales certificados y garantia escrita.',
		'Atendemos urgencias dentro de Santiago y entregamos informes con recomendaciones para evitar futuras fallas en la red de agua y gas.',
	],
	Cerrajeria: [
		'Atencion profesional para aperturas sin dano, cambio de cilindros y refuerzo de puertas residenciales y comerciales.',
		'Se instalan cerraduras de alta seguridad y se realizan duplicados con registro de llaves.',
		'Asesoria en seguridad domiciliaria con evaluacion en terreno y presupuesto detallado.',
	],
	Abogacia: [
		'Asesorias integrales en derecho civil, familia y laboral, con enfoque en soluciones claras y tiempos de respuesta rapidos.',
		'El equipo acompana todo el proceso con informes y seguimiento mensual para cada cliente.',
		'Se incluyen orientaciones preventivas para evitar litigios futuros.',
	],
	Electricidad: [
		'Diagnostico y reparacion de fallas electricas, con trabajos certificados y materiales aprobados por norma.',
		'Instalacion de tableros, mejora de protecciones y mantenciones preventivas.',
		'Atencion programada y urgencias para viviendas y locales comerciales.',
	],
	Pintura: [
		'Pintura interior y exterior con preparacion de superficies, sellado y terminaciones premium.',
		'Aplicacion de tratamientos antihumedad y proteccion UV para fachadas.',
		'Asesoria de color y presupuesto detallado segun metros cuadrados.',
	],
	Jardineria: [
		'Mantencion de jardines, podas y renovacion de areas verdes con riego automatico.',
		'Se incluye fertilizacion, control de plagas y diseño de especies.',
		'Planes mensuales para hogares y condominios.',
	],
	Limpieza: [
		'Limpieza profunda post obra, sanitizacion y mantencion de oficinas y hogares.',
		'Se utiliza maquinaria industrial para vidrios, alfombras y pisos delicados.',
		'Planes recurrentes y servicio express en 24 horas.',
	],
	'Mecanica Automotriz': [
		'Diagnostico por scanner, mantencion preventiva y reparacion de frenos.',
		'Se trabaja con repuestos garantizados y pruebas de ruta incluidas.',
		'Atencion programada con entrega de informe tecnico.',
	],
	'Tecnicos en Computacion': [
		'Formateo, respaldo, limpieza interna y armado de equipos a medida.',
		'Soporte remoto y presencial para redes domesticas y pymes.',
		'Recuperacion de datos y optimizacion de rendimiento.',
	],
	'Fletes y Mudanzas': [
		'Embalaje seguro, traslado por hora y seguros de carga incluidos.',
		'Se coordinan rutas para mudanzas dentro y fuera de Santiago.',
		'Equipo profesional con control de inventario al retiro y entrega.',
	],
}

const comunaAddresses = {
	'Stgo centro': 'Alameda 100, Santiago Centro',
	'San Miguel': 'Gran Avenida 5120, San Miguel',
	'Las Condes': 'Av. Apoquindo 4501, Las Condes',
	'Ñuñoa': 'Irarrázaval 2400, Ñuñoa',
	'Providencia': 'Av. Providencia 1550, Providencia',
	'La Reina': 'Av. Larrain 9000, La Reina',
	'Independencia': 'Av. Independencia 2150, Independencia',
}

const comunaDetailIntro = {
	'Stgo centro': 'Cobertura en barrios historicos y edificios de alta densidad.',
	'San Miguel': 'Atencion a condominios y viviendas familiares con respuesta rapida.',
	'Las Condes': 'Servicios premium con coordinacion de horarios y garantia extendida.',
	'Ñuñoa': 'Enfoque en viviendas tradicionales y departamentos nuevos.',
	'Providencia': 'Soporte para oficinas, locales comerciales y hogares.',
	'La Reina': 'Trabajo en casas con jardines y soluciones personalizadas.',
	'Independencia': 'Cobertura para zonas mixtas con atencion flexible.',
}

const getDetailData = (service) => {
	const type = service.id.split('-')[0]
	const comuna = service.comuna
	const baseDescription = detailText[type] ?? detailText.Gasfiteria
	const comunaIntro = comunaDetailIntro[comuna] ?? ''
	const longDescription = [
		comunaIntro,
		...baseDescription,
		`Direccion de atencion: ${comunaAddresses[comuna] ?? 'Santiago'}.`,
	].filter(Boolean)
	const address = comunaAddresses[comuna] ?? 'Alameda 100, Santiago'
	const mapUrl = `${mapUrlBase}${encodeURIComponent(address)},%20Chile&output=embed`

	return {
		longDescription,
		address,
		mapUrl,
	}
}

function App() {
	const [selectedComuna, setSelectedComuna] = useState(null)
	const [selectedServiceId, setSelectedServiceId] = useState(null)

	const filteredGroups = useMemo(() => {
		if (!selectedComuna) {
			return services
		}

		return services
			.map((group) => ({
				...group,
				items: group.items.filter((item) => item.comuna === selectedComuna),
			}))
			.filter((group) => group.items.length > 0)
	}, [selectedComuna])

	const totalServices = services.reduce((acc, group) => acc + group.items.length, 0)
	const stats = [
		{ label: 'Servicios activos', value: `${totalServices}` },
		{ label: 'Comunas cubiertas', value: `${comunas.length}` },
		{ label: 'Profesiones', value: `${services.length}` },
	]

	const selectedService = flatServices.find((service) => service.id === selectedServiceId)
	const selectedDetail = selectedService ? getDetailData(selectedService) : null

	if (selectedService && selectedDetail) {
		return (
			<div className="page">
				<section className="detail">
					<button
						className="btn btn--ghost"
						type="button"
						onClick={() => setSelectedServiceId(null)}
					>
						Volver al directorio
					</button>
					<div className="detail__grid">
						<div className="detail__content">
							<p className="detail__eyebrow">Detalle del servicio</p>
							<h1>{selectedService.title}</h1>
							<p className="detail__address">{selectedDetail.address}</p>
							<div className="detail__meta">
								<span className="chip">{selectedService.comuna}</span>
								<span className="detail__type">{selectedServiceId.split('-')[0]}</span>
							</div>
							<div className="detail__description">
								{selectedDetail.longDescription.map((text) => (
									<p key={text}>{text}</p>
								))}
							</div>
							<div className="detail__contacts">
								<a href={`tel:${selectedService.phone}`} className="meta">
									{selectedService.phone}
								</a>
								<a href={`mailto:${selectedService.email}`} className="meta">
									{selectedService.email}
								</a>
							</div>
						</div>
						<div className="detail__media">
							<img src={selectedService.image} alt={selectedService.title} />
							<div className="detail__map">
								<iframe
									title={`Mapa ${selectedDetail.address}`}
									src={selectedDetail.mapUrl}
									loading="lazy"
									referrerPolicy="no-referrer-when-downgrade"
								></iframe>
							</div>
						</div>
					</div>
				</section>
			</div>
		)
	}

	return (
		<div className="page">
			<header className="hero">
				<div className="hero__content">
					<p className="hero__eyebrow">Directorio de servicios en Santiago</p>
					<h1>Agenda de contactos para profesionales que resuelven hoy</h1>
					<p className="hero__lead">
						Gasfiteria, cerrajeria, abogacia y mucho mas. Encuentra servicios por tipo y comuna
						con datos completos, descripcion e imagen.
					</p>
					<div className="hero__actions">
						<button className="btn btn--primary" type="button">
							Ver servicios
						</button>
						<button className="btn btn--ghost" type="button">
							Publicar contacto
						</button>
					</div>
					<div className="hero__stats">
						{stats.map((stat) => (
							<div key={stat.label} className="stat">
								<span className="stat__value">{stat.value}</span>
								<span className="stat__label">{stat.label}</span>
							</div>
						))}
					</div>
				</div>
				<div className="hero__panel">
					<div className="hero__card">
						<div>
							<p className="hero__card-title">Comunas con servicios</p>
							<p className="hero__card-sub">Selecciona la zona que necesitas</p>
						</div>
						<div className="hero__badges">
							{comunaBadges.map((comuna) => (
								<button
									key={comuna}
									className={`badge badge--button${selectedComuna === comuna ? ' badge--active' : ''}`}
									type="button"
									onClick={() => setSelectedComuna(comuna)}
								>
									{comuna}
								</button>
							))}
						</div>
						{selectedComuna && (
							<div className="hero__filter">
								<span>Filtrando por: {selectedComuna}</span>
								<button
									className="btn btn--ghost btn--small"
									type="button"
									onClick={() => setSelectedComuna(null)}
								>
									Limpiar
								</button>
							</div>
						)}
						<p className="hero__note">
							Datos de contacto verificados por cada profesional.
						</p>
					</div>
				</div>
			</header>

			<main className="directory">
				{filteredGroups.map((group) => (
					<section key={group.type} className="group">
						<div className="group__head">
							<div>
								<h2>{group.type}</h2>
								<p>
									{group.items.length} servicios disponibles en distintas comunas.
								</p>
							</div>
							<button className="btn btn--outline" type="button">
								Ver todos
							</button>
						</div>
						<div className="grid">
							{group.items.map((service) => (
								<article
									key={service.id}
									className="card card--clickable"
									role="button"
									tabIndex={0}
									onClick={() => setSelectedServiceId(service.id)}
									onKeyDown={(event) => {
										if (event.key === 'Enter' || event.key === ' ') {
											event.preventDefault()
											setSelectedServiceId(service.id)
										}
									}}
								>
									<img src={service.image} alt={service.title} loading="lazy" />
									<div className="card__body">
										<div className="card__top">
											<h3>{service.title}</h3>
											<span className="chip">{service.comuna}</span>
										</div>
										<p className="card__desc">{service.description}</p>
										<div className="card__meta">
											<a href={`tel:${service.phone}`} className="meta">
												{service.phone}
											</a>
											<a href={`mailto:${service.email}`} className="meta">
												{service.email}
											</a>
										</div>
									</div>
								</article>
							))}
						</div>
					</section>
				))}
			</main>
		</div>
	)
}

export default App
