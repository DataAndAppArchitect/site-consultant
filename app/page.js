export default function SiteConsultantPremium() {
  const expertises = [
    {
      title: "Architecture Data & Applications",
      description:
        "Conception de systèmes robustes, modélisation des flux, urbanisation technique et fiabilisation d’environnements sensibles.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Performance SQL Server / Oracle / PostgreSQL",
      description:
        "Audit, tuning, indexation, requêtes complexes, optimisation de procédures stockées et résolution de points de blocage critiques.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Haute disponibilité & continuité",
      description:
        "Mise en place et stabilisation d’architectures haute disponibilité, PRA/PCA, AlwaysOn et supervision d’environnements multi-serveurs.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Remédiation & modernisation",
      description:
        "Reconstruction après incident, reprise d’applications legacy, sécurisation des accès et remise en production maîtrisée.",
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const preuves = [
    "Plus de 20 ans d’expérience en bases de données et applications critiques",
    "Interventions sur des environnements industriels et pharmaceutiques sensibles",
    "Expertise SQL Server, Oracle, PostgreSQL et architectures haute disponibilité",
    "Capacité à reprendre, stabiliser et moderniser des systèmes complexes",
  ];

  const missions = [
    {
      title: "Audit technique & plan d’action",
      result:
        "Identifier rapidement les risques, les goulots d’étranglement et les priorités de sécurisation ou d’optimisation.",
    },
    {
      title: "Renfort expert sur mission critique",
      result:
        "Intervenir sur un projet sensible ou une situation de crise avec une montée en valeur immédiate.",
    },
    {
      title: "Modernisation d’un existant complexe",
      result:
        "Fiabiliser un système ancien, clarifier l’architecture et préparer des évolutions durables.",
    },
  ];

  const realisations = [
    "Stabilisation d’un parc de plus de 130 bases SQL Server en haute disponibilité",
    "Optimisation de performances sur bases critiques et traitements sensibles",
    "Reconstruction et sécurisation d’applications après incident majeur",
    "Migration et reprise de systèmes legacy : Access, ASP Classic, Oracle Forms",
  ];

  const publications = [
    {
      title: "SQL & MySQL : de Zéro à l’Optimisation",
      description: "Ce livre est le compagnon idéal pour tous ceux qui souhaitent apprendre le langage SQL et maîtriser MySQL, que vous soyez débutant, étudiant en informatique ou professionnel en reconversion.",
      cover: "https://images.bod.com/images/sql-et-mysql-mohamad-taghlobi-9782322635801.jpg/500/500/SQL_%26_MySQL.webp",
    },
	{
      title: "L'autre visage de l'informatique : Anatomie d'un monde invisible",
      description: "Dans ce livre sincère et incarné, je raconte ce que l'on dit rarement : la pression silencieuse, les incompréhensions entre équipes, les décisions qui semblent rationnelles sur le papier mais destructrices sur le terrain, les mécanismes invisibles qui usent les organisations. et ceux qui les font tenir.",
      cover: "https://images.bod.com/images/lautre-visage-de-linformatique-mohamad-taghlobi-9782322624201.jpg/1200/1200/L%27autre_visage_de_l%27informatique.webp",
    },
	{
      title: "ASP.NET Core MVC & MongoDB : Architecture, bonnes pratiques et développement d'applications web modernes",
      description: "Ce livre propose une approche pragmatique et professionnelle de la conception d'applications modernes avec ASP.NET Core MVC et MongoDB. À travers un cas d'étude complet et réaliste, le lecteur est accompagné pas à pas dans les choix architecturaux, la structuration des données NoSQL et l'optimisation des performances applicatives.",
      cover: "https://images.bod.com/images/asp-net-core-mvc-et-mongodb-mohamad-taghlobi-9782322601448.jpg/500/500/ASP.NET_Core_MVC_%26_MongoDB.webp",
    },
	
    {
      title: "PostgreSQL : architecture & pratique",
      description: "Ouvrage en préparation sur l’architecture, les outils et l’administration PostgreSQL.",
      cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "MongoDB & Power BI",
      description: "Passer du NoSQL à la modélisation analytique et à la BI décisionnelle.",
      cover: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div>
            <div className="text-lg font-semibold tracking-tight">Mohamad Taghlobi</div>
            <div className="text-sm text-slate-600">Architecte Data & Applications critiques</div>
          </div>
          <nav className="hidden gap-6 text-sm text-slate-700 md:flex">
            <a href="#expertises" className="transition hover:text-slate-950">Expertises</a>
            <a href="#missions" className="transition hover:text-slate-950">Missions</a>
            <a href="#realisations" className="transition hover:text-slate-950">Réalisations</a>
            <a href="#publications" className="transition hover:text-slate-950">Livres</a>
            <a href="#contact" className="transition hover:text-slate-950">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-cyan-50">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
            <div className="flex flex-col justify-center">
              <div className="mb-6 inline-flex w-fit rounded-full border border-sky-200 bg-white px-4 py-1 text-sm text-sky-700 shadow-sm">
                Consultant senior freelance · Data · Bases de données · Applications critiques
              </div>
              <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-slate-950 md:text-6xl">
                Donnez plus de fiabilité, de performance et de clarté à vos systèmes critiques.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                J’accompagne les entreprises dans l’optimisation de leurs bases de données, la sécurisation
                de leurs applications sensibles et la modernisation d’environnements complexes.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="rounded-2xl bg-slate-950 px-6 py-3 text-center text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5"
                >
                  Réserver un échange
                </a>
                <a
                  href="#publications"
                  className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-center text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
                >
                  Voir mes livres
                </a>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="text-2xl font-semibold">20+</div>
                  <div className="mt-1 text-sm text-slate-600">années d’expérience</div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="text-2xl font-semibold">130+</div>
                  <div className="mt-1 text-sm text-slate-600">bases stabilisées en HA</div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="text-2xl font-semibold">Expert</div>
                  <div className="mt-1 text-sm text-slate-600">SQL Server, Oracle, PostgreSQL</div>
                </div>
              </div>
            </div>

            <div className="grid gap-5">
              <div className="overflow-hidden rounded-[2rem] border border-white bg-white shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1400&q=80"
                  alt="Environnement de travail data et développement"
                  className="h-[260px] w-full object-cover"
                />
                <div className="p-6">
                  <div className="text-lg font-semibold">Expertise technique visible dès la première impression</div>
                  <p className="mt-3 leading-7 text-slate-600">
                    Un site premium doit montrer tout de suite ton univers : data, systèmes critiques,
                    architecture, performance et crédibilité métier.
                  </p>
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
                    alt="Réunion de conseil et accompagnement technique"
                    className="h-40 w-full object-cover"
                  />
                  <div className="p-4 text-sm leading-6 text-slate-600">
                    Conseil, cadrage, stratégie et accompagnement.
                  </div>
                </div>
                <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80"
                    alt="Dashboards et données"
                    className="h-40 w-full object-cover"
                  />
                  <div className="p-4 text-sm leading-6 text-slate-600">
                    Données, supervision, analyse et décision.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {preuves.map((preuve) => (
                <div key={preuve} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-700">
                  {preuve}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="expertises" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Expertises</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Une expertise technique forte, rendue plus visuelle et plus engageante.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Cette fois, chaque domaine d’intervention est associé à une image pour rendre le site plus vivant,
              plus moderne et plus vendeur dès le premier scroll.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {expertises.map((item) => (
              <div key={item.title} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <img src={item.image} alt={item.title} className="h-52 w-full object-cover" />
                <div className="p-7">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-4 leading-7 text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="missions" className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Types de missions</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                  Des interventions pensées pour produire de la valeur rapidement.
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Audit, renfort expert, reprise d’existant, stabilisation d’environnements critiques :
                  le site doit rassurer un décideur tout en montrant que tu maîtrises des sujets complexes.
                </p>
                <a
                  href="#contact"
                  className="mt-8 inline-flex rounded-2xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                >
                  Discuter d’une mission
                </a>
              </div>
              <div className="space-y-5">
                {missions.map((mission) => (
                  <div key={mission.title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                    <h3 className="text-xl font-semibold">{mission.title}</h3>
                    <p className="mt-4 leading-7 text-slate-600">{mission.result}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="realisations" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Réalisations</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Des expériences concrètes sur des environnements exigeants.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Le visiteur doit voir que tu n’es pas seulement consultant, mais aussi intervenant sur des contextes réels,
                complexes et critiques.
              </p>
              <div className="mt-8 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80"
                  alt="Infrastructure, matériel et environnement technique"
                  className="h-72 w-full object-cover"
                />
              </div>
            </div>
            <div className="grid gap-4">
              {realisations.map((realisation) => (
                <div key={realisation} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 leading-7 text-slate-700">
                  {realisation}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="publications" className="bg-gradient-to-br from-sky-50 via-white to-cyan-50">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Livres & publications</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Tes livres doivent être visibles comme des preuves d’expertise.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                J’ai ajouté une vraie section visuelle avec des couvertures. On pourra ensuite remplacer ces images
                par les vraies couvertures de tes ouvrages pour donner encore plus d’impact.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {publications.map((publication) => (
                <div key={publication.title} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <img src={publication.cover} alt={publication.title} className="h-80 w-full object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold">{publication.title}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{publication.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Positionnement</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                  Un site plus clair, plus lumineux, et beaucoup plus incarné.
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                  Maintenant, le site respire davantage, met mieux en valeur ton activité et prépare mieux la conversion.
                  Il reste encore une étape clé : remplacer les images génériques par tes vraies visuels et tes vraies couvertures.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <div className="text-lg font-semibold">Ce qu’il faut encore personnaliser</div>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                  <li>• Ta vraie photo ou un portrait professionnel</li>
                  <li>• Les vraies couvertures de tes livres</li>
                  <li>• Ton email et ton profil LinkedIn</li>
                  <li>• 2 ou 3 références de missions particulièrement fortes</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-slate-200 bg-slate-50">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Contact</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Parlons de votre besoin.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Vous avez une mission, un audit à mener, une base instable ou un environnement critique à reprendre ?
                Échangeons sur le contexte, les enjeux et les priorités.
              </p>
              <div className="mt-8 space-y-3 text-slate-700">
                <div>Email : contact@votredomaine.fr</div>
                <div>LinkedIn : linkedin.com/in/votre-profil</div>
                <div>Localisation : France</div>
              </div>
            </div>
            <form className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-slate-600">Nom</label>
                  <input className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400" placeholder="Votre nom" />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-slate-600">Email</label>
                  <input className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400" placeholder="vous@entreprise.com" />
                </div>
              </div>
              <div className="mt-5">
                <label className="mb-2 block text-sm text-slate-600">Entreprise / Contexte</label>
                <input className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400" placeholder="Votre société ou votre besoin" />
              </div>
              <div className="mt-5">
                <label className="mb-2 block text-sm text-slate-600">Message</label>
                <textarea rows={6} className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400" placeholder="Décrivez brièvement votre besoin" />
              </div>
              <button type="button" className="mt-6 w-full rounded-2xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5">
                Envoyer la demande
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
