import './App.css'

const services = [
	{
		type: 'Gasfiteria',
		items: [
			{
				title: 'Gasfiter Express Centro',
				phone: '+56 9 6123 4455',
				email: 'contacto@gasfitercentro.cl',
				comuna: 'Santiago Centro',
				description:
					'Reparacion de fugas, griferia y calefont con atencion en el dia. Especialistas en edificios antiguos.',
				image:
					'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=80',
			},
			{
				title: 'AquaFix Pro',
				phone: '+56 9 7788 1010',
				email: 'agenda@aquafix.cl',
				comuna: 'Santiago Centro',
				description:
					'Instalaciones completas de banos y cocinas, mantencion preventiva y emergencias 24/7.',
				image:
					'https://images.unsplash.com/photo-1505798577917-a65157d3320a?auto=format&fit=crop&w=900&q=80',
			},
			{
				title: 'Gasfiteria Almagro',
				phone: '+56 2 2890 3322',
				email: 'hola@almagrogas.cl',
				comuna: 'Santiago Centro',
				description:
					'Deteccion de filtraciones con camara termica y reparaciones certificadas.',
				image:
					'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80',
			},
		],
	},
	{
		type: 'Cerrajeria',
		items: [
			{
				title: 'Cerrajeros La Pintana',
				phone: '+56 9 5544 7788',
				email: 'urgencias@cerralapintana.cl',
				comuna: 'La Pintana',
				description:
					'Aperturas sin dano, cambios de combinacion y refuerzo de puertas metalicas.',
				image:
					'https://images.unsplash.com/photo-1516822003754-cca485356ecb?auto=format&fit=crop&w=900&q=80',
			},
			{
				title: 'Llaves y Seguridad Sur',
				phone: '+56 9 6677 2233',
				email: 'info@llavessur.cl',
				comuna: 'La Pintana',
				description:
					'Duplicado de llaves, cerraduras inteligentes y asesoria en seguridad domiciliaria.',
				image:
					'https://images.unsplash.com/photo-1505798577917-a65157d3320a?auto=format&fit=crop&w=900&q=80',
			},
		],
	},
	{
		type: 'Abogacia',
		items: [
			{
				title: 'Estudio Legal La Pintana',
				phone: '+56 2 2456 9911',
				email: 'contacto@legalpintana.cl',
				comuna: 'La Pintana',
				description:
					'Derecho de familia y laboral con orientacion gratuita en primera consulta.',
				image:
					'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80',
			},
			{
				title: 'Abogados Cercanos',
				phone: '+56 9 9900 1122',
				email: 'agenda@abogadocercano.cl',
				comuna: 'La Pintana',
				description:
					'Defensa civil y asesorias para pymes con seguimiento semanal del caso.',
				image:
					'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80',
			},
			{
				title: 'Juristas del Sur',
				phone: '+56 9 8855 3322',
				email: 'equipo@juristassur.cl',
				comuna: 'La Pintana',
				description:
					'Asesorias en contratos, cobranza y mediacion comunitaria.',
				image:
					'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80',
			},
		],
	},
	{
		type: 'Electricidad',
		items: [
			{
				title: 'Electro 24/7',
				phone: '+56 9 7432 1010',
				email: 'turnos@electro247.cl',
				comuna: 'Estacion Central',
				description:
					'Tableros, cortocircuitos y certificacion SEC para viviendas.',
				image:
					'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80',
			},
			{
				title: 'Voltaje Seguro',
				phone: '+56 2 2788 9090',
				email: 'contacto@voltajeseguro.cl',
				comuna: 'Quinta Normal',
				description:
					'Iluminacion LED, automatizacion y mantencion industrial ligera.',
				image:
					'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80',
			},
		],
	},
	{
		type: 'Pintura',
		items: [
			{
				title: 'Color Urbano',
				phone: '+56 9 6633 2221',
				email: 'proyectos@colorurbano.cl',
				comuna: 'Providencia',
				description:
					'Pintura interior, texturas y sellado antihumedad con garantia escrita.',
				image:
					'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=900&q=80',
			},
			{
				title: 'PintaMax',
				phone: '+56 9 7001 8899',
				email: 'ventas@pintamax.cl',
				comuna: 'Macul',
				description:
					'Pintura de fachadas y rejas, limpieza y proteccion UV.',
				image:
					'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=900&q=80',
			},
		],
	},
	{
		type: 'Jardineria',
		items: [
			{
				title: 'Verde Vivo',
				phone: '+56 9 6210 4433',
				email: 'hola@verdevivo.cl',
				comuna: 'La Florida',
				description:
					'Mantencion de jardines, podas y diseño de riego automatico.',
				image:
					'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=80',
			},
			{
				title: 'Jardines del Parque',
				phone: '+56 9 6002 3040',
				email: 'agenda@jardinesparque.cl',
				comuna: 'Nunoa',
				description:
					'Cesped, fertilizacion y control de plagas con productos eco.',
				image:
					'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=80',
			},
		],
	},
	{
		type: 'Limpieza',
		items: [
			{
				title: 'LimpioYa',
				phone: '+56 9 4556 2220',
				email: 'equipo@limpioya.cl',
				comuna: 'Independencia',
				description:
					'Limpieza profunda post obra y sanitizacion de espacios.',
				image:
					'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80',
			},
			{
				title: 'Brillo Total',
				phone: '+56 2 2244 5511',
				email: 'contacto@brillototal.cl',
				comuna: 'Recoleta',
				description:
					'Limpieza de oficinas, vidrios y alfombras con maquinaria industrial.',
				image:
					'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80',
			},
		],
	},
	{
		type: 'Mecanica Automotriz',
		items: [
			{
				title: 'MotorLab',
				phone: '+56 9 5090 8890',
				email: 'taller@motorlab.cl',
				comuna: 'San Miguel',
				description:
					'Diagnostico por scanner, frenos y mantencion preventiva.',
				image:
					'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80',
			},
			{
				title: 'Taller Ruta 5',
				phone: '+56 2 2888 7733',
				email: 'contacto@tallerruta5.cl',
				comuna: 'San Bernardo',
				description:
					'Mecanica general, cambios de aceite y alineacion computarizada.',
				image:
					'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80',
			},
		],
	},
	{
		type: 'Tecnicos en Computacion',
		items: [
			{
				title: 'PC Rescate',
				phone: '+56 9 7011 5533',
				email: 'soporte@pcrescate.cl',
				comuna: 'Santiago Centro',
				description:
					'Formateo, respaldo, limpieza y armado de equipos a medida.',
				image:
					'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
			},
			{
				title: 'Byte Soporte',
				phone: '+56 2 2677 3300',
				email: 'help@bytesoporte.cl',
				comuna: 'Providencia',
				description:
					'Redes domesticas, impresoras y soporte remoto para pymes.',
				image:
					'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
			},
		],
	},
	{
		type: 'Fletes y Mudanzas',
		items: [
			{
				title: 'Mudanzas Andes',
				phone: '+56 9 6122 9900',
				email: 'cotiza@mudanzasandes.cl',
				comuna: 'Maipu',
				description:
					'Embalaje seguro, subida por escalera y seguros por carga.',
				image:
					'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=900&q=80',
			},
			{
				title: 'Fletes Rapid',
				phone: '+56 2 2333 9090',
				email: 'contacto@fletesrapid.cl',
				comuna: 'Quilicura',
				description:
					'Fletes express para empresas y traslados por hora.',
				image:
					'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=900&q=80',
			},
		],
	},
]

const stats = [
	{ label: 'Servicios activos', value: '22' },
	{ label: 'Comunas cubiertas', value: '12' },
	{ label: 'Profesiones', value: '10' },
]

const comunaBadges = ['Santiago Centro', 'La Pintana', 'Providencia', 'Nunoa', 'Maipu', 'Quilicura']

function App() {
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
							<p className="hero__card-title">Comunas con mas servicios</p>
							<p className="hero__card-sub">Selecciona la zona que necesitas</p>
						</div>
						<div className="hero__badges">
							{comunaBadges.map((comuna) => (
								<span key={comuna} className="badge">
									{comuna}
								</span>
							))}
						</div>
						<p className="hero__note">
							Datos de contacto verificados por cada profesional.
						</p>
					</div>
				</div>
			</header>

			<main className="directory">
				{services.map((group) => (
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
								<article key={service.title} className="card">
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
