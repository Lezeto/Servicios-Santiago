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
const featuredServiceId = 'Gasfiteria-Stgo centro'
const featuredService = services
	.flatMap((group) => group.items)
	.find((item) => item.id === featuredServiceId)

const featuredDetail = {
	longDescription: [
		'Servicio especializado en gasfiteria residencial y comercial, con enfoque en diagnostico rapido y soluciones duraderas para instalaciones antiguas y modernas.',
		'Realizamos cambios de griferia, reparacion de filtraciones, mantencion de calefont y mejoras de presion, siempre con materiales certificados y garantia escrita.',
		'Atendemos urgencias dentro de Santiago y entregamos informes con recomendaciones para evitar futuras fallas en la red de agua y gas.',
	],
	address: 'Alameda 100, Santiago',
	mapUrl: 'https://www.google.com/maps?q=Alameda%20100%2C%20Santiago%2C%20Chile&output=embed',
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

	if (selectedServiceId === featuredServiceId && featuredService) {
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
							<h1>{featuredService.title}</h1>
							<p className="detail__address">{featuredDetail.address}</p>
							<div className="detail__meta">
								<span className="chip">{featuredService.comuna}</span>
								<span className="detail__type">{featuredServiceId.split('-')[0]}</span>
							</div>
							<div className="detail__description">
								{featuredDetail.longDescription.map((text) => (
									<p key={text}>{text}</p>
								))}
							</div>
							<div className="detail__contacts">
								<a href={`tel:${featuredService.phone}`} className="meta">
									{featuredService.phone}
								</a>
								<a href={`mailto:${featuredService.email}`} className="meta">
									{featuredService.email}
								</a>
							</div>
						</div>
						<div className="detail__media">
							<img src={featuredService.image} alt={featuredService.title} />
							<div className="detail__map">
								<iframe
									title="Mapa Alameda 100"
									src={featuredDetail.mapUrl}
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
									className={`card${service.id === featuredServiceId ? ' card--clickable' : ''}`}
									role={service.id === featuredServiceId ? 'button' : undefined}
									tabIndex={service.id === featuredServiceId ? 0 : undefined}
									onClick={() =>
										service.id === featuredServiceId
											? setSelectedServiceId(service.id)
											: null
									}
									onKeyDown={(event) => {
										if (service.id !== featuredServiceId) {
											return
										}

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
