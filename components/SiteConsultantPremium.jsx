"use client";

import { useMemo, useState } from "react";

export default function SiteConsultantPremium() {
  const expertises = [
    {
      title: "Architecture Data & Applications",
      description:
        "Conception d’architectures robustes, modélisation des flux, urbanisation technique et fiabilisation d’environnements sensibles.",
      image:
        "/expertises.jpg",
    },
    {
      title: "Performance SQL Server / Oracle / PostgreSQL",
      description:
        "Audit, tuning, indexation, optimisation de requêtes complexes, traitements sensibles et procédures stockées sur environnements critiques.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Haute disponibilité & continuité de service",
      description:
        "Stabilisation d’architectures haute disponibilité, PRA/PCA, AlwaysOn, supervision et sécurisation d’environnements multi-serveurs.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Remédiation & modernisation",
      description:
        "Reprise après incident, remise en contrôle d’applications legacy, sécurisation d’un existant complexe et modernisation progressive.",
      image:
        "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const preuves = [
    "20+ ans d’expérience sur bases de données et applications critiques",
    "Interventions dans des contextes industriels et pharmaceutiques sensibles",
    "Expertise SQL Server, Oracle, PostgreSQL et haute disponibilité",
    "Capacité à reprendre, stabiliser et moderniser des systèmes complexes",
  ];

  const situations = [
    {
      title: "Votre base devient lente ou instable",
      description:
        "J’analyse rapidement les causes, priorise les actions et remets la performance sous contrôle.",
    },
    {
      title: "Votre production est trop fragile",
      description:
        "J’interviens pour sécuriser la continuité de service, réduire les risques et stabiliser l’environnement.",
    },
    {
      title: "Vous sortez d’un incident critique",
      description:
        "Je vous aide à reprendre la main sur l’existant, à corriger les fragilités et à éviter la récidive.",
    },
    {
      title: "Votre système est devenu difficile à faire évoluer",
      description:
        "Je clarifie l’architecture, sécurise l’existant et prépare une modernisation réaliste.",
    },
  ];

  const missions = [
    {
      title: "Audit technique & plan d’action",
      result:
        "Identifier rapidement les fragilités, les goulots d’étranglement et les priorités d’amélioration.",
    },
    {
      title: "Renfort expert sur mission sensible",
      result:
        "Apporter une expertise senior immédiatement opérationnelle sur un sujet critique ou urgent.",
    },
    {
      title: "Stabilisation & modernisation",
      result:
        "Fiabiliser un système complexe, sécuriser les évolutions et remettre l’environnement sous contrôle.",
    },
  ];

  const realisations = [
    "Stabilisation d’un parc de plus de 130 bases SQL Server en haute disponibilité",
    "Optimisation de performances sur bases critiques et traitements sensibles",
    "Reprise d’applications et remise en contrôle après incident majeur",
    "Migration et reprise de systèmes legacy : Access, ASP Classic, Oracle Forms",
  ];

  const experiences = [
    {
      client: "Novo Nordisk",
      detail:
        "Revitalisation d’une ligne de production stratégique et maintien en conditions opérationnelles de plus de 130 bases de données en haute disponibilité, dans un contexte d’exigence forte sur la fiabilité et la continuité de service.",
    },
    {
      client: "AFNOR",
      detail:
        "Remédiation d’applications stratégiques et stabilisation du système d’information dans un contexte critique, avec reprise rapide et sécurisée des activités.",
    },
    {
      client: "L’Argus",
      detail:
        "Remédiation applicative et contribution à une migration stratégique dans un contexte de reprise d’activité, avec des enjeux forts de continuité et de fiabilisation.",
    },
    {
      client: "Sacem",
      detail:
        "Refonte complète d’une application cœur métier “œuvre par œuvre”, réarchitecture applicative, adaptation du modèle de données et implémentation du module de paiement en ligne SogenActif.",
    },
  ];

  const publications = [
    {
      title: "SQL & MySQL : de Zéro à l’Optimisation",
      description:
        "Un ouvrage pédagogique pour apprendre le langage SQL et maîtriser MySQL, depuis les bases jusqu’aux techniques d’optimisation.",
      cover:
        "https://images.bod.com/images/sql-et-mysql-mohamad-taghlobi-9782322635801.jpg/500/500/SQL_%26_MySQL.webp",
      link: "https://www.bod.fr/librairie/sql-et-mysql-mohamad-taghlobi-9782322635801",
      excerptLink:
        "https://www.bod.fr/booksample?json=http%3A%2F%2Fwww.bod.fr%2Fgetjson.php%3Fobjk_id%3D5837251%26hash%3D7529e25ebc28cf63a3a681996bdcc3d7",
    },
    {
      title: "L'autre visage de l'informatique : Anatomie d'un monde invisible",
      description:
        "Un regard lucide sur les réalités du terrain informatique, les tensions invisibles des organisations et les mécanismes qui fragilisent les équipes et les systèmes.",
      cover:
        "https://images.bod.com/images/lautre-visage-de-linformatique-mohamad-taghlobi-9782322624201.jpg/1200/1200/L%27autre_visage_de_l%27informatique.webp",
      link: "https://www.bod.fr/librairie/lautre-visage-de-linformatique-mohamad-taghlobi-9782322624201",
      excerptLink:
        "https://www.bod.fr/booksample?json=http%3A%2F%2Fwww.bod.fr%2Fgetjson.php%3Fobjk_id%3D6059531%26hash%3Dcb77ff30e63f759ed5798e8e9395d74a",
    },
    {
      title:
        "ASP.NET Core MVC & MongoDB : Architecture, bonnes pratiques et développement d'applications web modernes",
      description:
        "Une approche pragmatique de la conception d’applications modernes avec ASP.NET Core MVC et MongoDB, fondée sur un cas d’étude structuré.",
      cover:
        "https://images.bod.com/images/asp-net-core-mvc-et-mongodb-mohamad-taghlobi-9782322601448.jpg/500/500/ASP.NET_Core_MVC_%26_MongoDB.webp",
      link: "https://www.bod.fr/librairie/asp-net-core-mvc-et-mongodb-mohamad-taghlobi-9782322601448",
      excerptLink:
        "https://www.bod.fr/booksample?json=http%3A%2F%2Fwww.bod.fr%2Fgetjson.php%3Fobjk_id%3D6121501%26hash%3Dd6ec7570338f70a0912899263dcccf72",
    },
  ];

  const initialFormData = useMemo(
    () => ({
      name: "",
      email: "",
      company: "",
      subject: "",
      message: "",
      website: "",
      captchaAnswer: "",
    }),
    []
  );

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "idle", message: "" });

  const captchaQuestion = "Combien font 3 + 4 ?";
  const captchaExpectedAnswer = "7";

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    setErrors((current) => ({
      ...current,
      [name]: undefined,
    }));

    if (submitStatus.type !== "idle") {
      setSubmitStatus({ type: "idle", message: "" });
    }
  }

  function validateForm(values) {
    const nextErrors = {};

    const trimmedName = values.name.trim();
    const trimmedEmail = values.email.trim();
    const trimmedCompany = values.company.trim();
    const trimmedSubject = values.subject.trim();
    const trimmedMessage = values.message.trim();
    const trimmedWebsite = values.website.trim();
    const trimmedCaptcha = values.captchaAnswer.trim();

    if (!trimmedName) {
      nextErrors.name = "Le nom est requis.";
    }

    if (!trimmedEmail) {
      nextErrors.email = "L’email est obligatoire.";
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(trimmedEmail)) {
        nextErrors.email = "Veuillez saisir une adresse email valide.";
      }
    }

    if (!trimmedCompany) {
      nextErrors.company = "Le champ Entreprise / Contexte ne peut pas être vide.";
    }

    if (!trimmedSubject) {
      nextErrors.subject = "Le sujet de la demande est obligatoire.";
    }

    if (!trimmedMessage) {
      nextErrors.message = "La description de la mission est obligatoire.";
    }

    if (trimmedWebsite) {
      nextErrors.website = "Soumission détectée comme robot.";
    }

    if (trimmedCaptcha !== captchaExpectedAnswer) {
      nextErrors.captchaAnswer = "Réponse anti-robot incorrecte.";
    }

    return nextErrors;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (isSubmitting) return;

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setSubmitStatus({
        type: "error",
        message: "Le formulaire contient des erreurs. Merci de vérifier les champs indiqués.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: "idle", message: "" });

    try {
      const trimmedName = formData.name.trim();
      const trimmedEmail = formData.email.trim();
      const trimmedCompany = formData.company.trim();
      const trimmedSubject = formData.subject.trim();
      const trimmedMessage = formData.message.trim();

      const response = await fetch("https://formspree.io/f/mgorvlel", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          company: trimmedCompany,
          subject: trimmedSubject,
          message: trimmedMessage,
          _replyto: trimmedEmail,
          _subject: `Nouvelle demande de mission — ${trimmedName} — ${trimmedCompany}`,
        }),
      });

      if (!response.ok) {
        throw new Error("Échec lors de l’envoi du formulaire.");
      }

      setSubmitStatus({
        type: "success",
        message:
          "Votre message a bien été envoyé. Merci. Je vous répondrai rapidement à l’adresse indiquée.",
      });

      setFormData(initialFormData);
      setErrors({});
    } catch {
      setSubmitStatus({
        type: "error",
        message:
          "L’envoi a échoué. Merci de réessayer dans quelques instants ou de me contacter directement par email.",
      });
    } finally {
      setTimeout(() => {
        setIsSubmitting(false);
      }, 400);
    }
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <img
              src="/profile.jpg"
              alt="Photo de profil"
              className="h-10 w-10 rounded-full object-cover"
            />
            <div>
              <div className="text-lg font-semibold tracking-tight">Mohamad TAGHLOBI</div>
              <div className="text-sm text-slate-600">Architecte Data & Applications critiques</div>
            </div>
          </div>

          <nav className="hidden gap-6 text-sm text-slate-700 md:flex">
            <a href="#expertises" className="transition hover:text-slate-950">
              Expertises
            </a>
            <a href="#situations" className="transition hover:text-slate-950">
              Problématiques
            </a>
            <a href="#missions" className="transition hover:text-slate-950">
              Missions
            </a>
            <a href="#realisations" className="transition hover:text-slate-950">
              Réalisations
            </a>
            <a href="#experiences" className="transition hover:text-slate-950">
              Expériences clés
            </a>
            <a href="#publications" className="transition hover:text-slate-950">
              Publications
            </a>
            <a href="#contact" className="transition hover:text-slate-950">
              Contact
            </a>
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

              <h1 className="max-w-5xl text-4xl font-semibold leading-tight tracking-tight text-slate-950 md:text-6xl">
                J’interviens lorsque vos systèmes critiques deviennent instables, lents ou difficiles à faire évoluer
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                Architecte Data & Applications critiques, j’aide les entreprises à stabiliser,
                optimiser et moderniser leurs bases de données et applications sensibles, avec
                plus de 20 ans d’expérience sur des environnements à forts enjeux de continuité de service.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="rounded-2xl bg-slate-950 px-6 py-3 text-center text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5"
                >
                  Échanger sur votre situation
                </a>
                <a
                  href="#situations"
                  className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-center text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
                >
                  Voir quand j’interviens
                </a>
                <a
                  href="#experiences"
                  className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-center text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
                >
                  Voir mes références
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="text-2xl font-semibold">20+</div>
                  <div className="mt-1 text-sm text-slate-600">années d’expérience</div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="text-2xl font-semibold">130+</div>
                  <div className="mt-1 text-sm text-slate-600">bases en MCO en HA</div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="text-2xl font-semibold">Expert</div>
                  <div className="mt-1 text-sm text-slate-600">SQL Server, Oracle, PostgreSQL</div>
                </div>
              </div>
            </div>

            <div className="grid gap-5">
              <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80"
                  alt="Infrastructure data et environnement critique"
                  className="h-[260px] w-full object-cover"
                />
                <div className="p-6">
                  <div className="text-lg font-semibold">
                    Une expertise immédiatement mobilisable sur les environnements sensibles
                  </div>
                  <p className="mt-3 leading-7 text-slate-600">
                    Performance, haute disponibilité, remédiation, reprise d’existant et modernisation :
                    j’interviens là où les incidents coûtent cher et où la fiabilité n’est pas négociable.
                  </p>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80"
                    alt="Audit et analyse technique"
                    className="h-40 w-full object-cover"
                  />
                  <div className="p-4 text-sm leading-6 text-slate-600">
                    Audit, diagnostic et cadrage technique.
                  </div>
                </div>

                <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=1200&q=80"
                    alt="Sécurisation et supervision d'environnements critiques"
                    className="h-40 w-full object-cover"
                  />
                  <div className="p-4 text-sm leading-6 text-slate-600">
                    Stabilisation, supervision et continuité de service.
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
                <div
                  key={preuve}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-700"
                >
                  {preuve}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="situations" className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
                Situations dans lesquelles j’interviens
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Quand faire appel à moi
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Mon intervention est particulièrement utile lorsque votre environnement devient
                instable, difficile à maintenir, ou trop risqué pour continuer sans expertise senior.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {situations.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm"
                >
                  <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-4 leading-7 text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="expertises" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              Expertises
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Mes domaines d’intervention
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              J’interviens sur l’architecture data, la performance des bases de données,
              la haute disponibilité et la reprise d’environnements applicatifs sensibles.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {expertises.map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <img src={item.image} alt={item.title} className="h-52 w-full object-cover" />
                <div className="p-7">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-4 leading-7 text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="missions" className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
                  Types de missions
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                  Des interventions pensées pour remettre rapidement un environnement sous contrôle
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Audit, renfort expert, stabilisation, reprise d’existant ou modernisation :
                  j’interviens avec une logique simple, pragmatique et orientée résultats.
                </p>
                <a
                  href="#contact"
                  className="mt-8 inline-flex rounded-2xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                >
                  Discuter d’un besoin concret
                </a>
              </div>

              <div className="space-y-5">
                {missions.map((mission) => (
                  <div
                    key={mission.title}
                    className="rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm"
                  >
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
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
                Réalisations
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Quelques réalisations significatives
              </h2>

              <div className="mt-8 grid gap-4">
                {realisations.map((realisation) => (
                  <div
                    key={realisation}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-5 leading-7 text-slate-700"
                  >
                    {realisation}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 lg:mt-16">
              <p className="text-lg leading-8 text-slate-600">
                Ces réalisations illustrent ma capacité à intervenir sur des environnements sensibles,
                à reprendre une situation dégradée et à restaurer performance, stabilité et continuité de service.
              </p>

              <div className="relative mt-8 overflow-hidden rounded-[2rem] border border-slate-200 shadow-sm">
                <img
                  src="/realisations.jpg"
                  alt="Analyse et reprise d'environnement critique"
                  className="h-72 w-full object-cover brightness-90"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
            </div>
          </div>
        </section>

        <section id="experiences" className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
                Expériences clés
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Des interventions menées sur des systèmes d’information critiques
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Au fil de mes missions, j’ai été amené à intervenir sur des environnements
                exigeants où l’enjeu n’était pas seulement technique, mais aussi opérationnel,
                organisationnel et parfois vital pour la continuité d’activité.
              </p>
            </div>

            <div className="mt-12 grid gap-6">
              {experiences.map((experience) => (
                <div
                  key={experience.client}
                  className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
                >
                  <h3 className="text-xl font-semibold text-slate-950">{experience.client}</h3>
                  <p className="mt-4 leading-8 text-slate-600">{experience.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="publications" className="bg-gradient-to-br from-sky-50 via-white to-cyan-50">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
                Livres & publications
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Livres publiés
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                J’ai publié plusieurs ouvrages techniques et professionnels autour des bases de données,
                du développement applicatif et de la réalité du terrain informatique.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {publications.map((publication) => (
                <div
                  key={publication.title}
                  className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-[420px] items-center justify-center bg-slate-50 p-6">
                    <img
                      src={publication.cover}
                      alt={publication.title}
                      className="max-h-full w-auto max-w-full object-contain"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold leading-8">{publication.title}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{publication.description}</p>
                    <div className="mt-6 flex gap-3">
                      <a
                        href={publication.excerptLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 rounded-2xl border border-slate-300 bg-white px-5 py-2.5 text-center text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
                      >
                        Lire un extrait
                      </a>
                      <a
                        href={publication.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 rounded-2xl bg-slate-950 px-5 py-2.5 text-center text-sm font-semibold text-white transition hover:-translate-y-0.5"
                      >
                        Acheter le livre
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
                  Positionnement
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                  Un accompagnement senior quand les enjeux sont réellement critiques
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                  Architecte Data & Applications critiques, j’accompagne depuis plus de 20 ans
                  des environnements exigeants dans la conception, l’optimisation, la sécurisation
                  et la stabilisation de leurs systèmes.
                </p>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                  Mon rôle est d’apporter une expertise claire, immédiatement utile, lorsque
                  la situation ne peut plus être traitée par des solutions superficielles :
                  incident, lenteurs persistantes, fragilité d’exploitation, dette technique
                  ou besoin de modernisation sans mettre en danger la continuité de service.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <div className="text-lg font-semibold">Comment me joindre facilement</div>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                  <li>
                    • Contact : <span className="font-medium">taghlobi.consulting@proton.me</span>
                  </li>
                  <li>
                    • LinkedIn :{" "}
                    <a
                      className="text-sky-700 hover:underline"
                      href="https://www.linkedin.com/in/i-am-mohamad-taghlobi-ph-d"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Profil LinkedIn
                    </a>
                  </li>
                  <li>• Localisation : Île-de-France</li>
                  <li>• Disponibilité : échanges sur besoin, audit, reprise ou mission sensible</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <div className="text-lg font-semibold">Quelques références</div>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                <li>
                  • <span className="font-medium">Novo Nordisk</span> : revitalisation d’une ligne
                  de production et maintien en MCO de plus de 130 bases de données
                </li>
                <li>
                  • <span className="font-medium">AFNOR</span> : remédiation d’applications
                  stratégiques et stabilisation du système d’information
                </li>
                <li>
                  • <span className="font-medium">L’Argus</span> : remédiation applicative et
                  migration stratégique dans un contexte de reprise d’activité
                </li>
                <li>
                  • <span className="font-medium">Sacem</span> : refonte d’une application cœur métier
                  incluant réarchitecture applicative, adaptation du modèle de données et module de paiement
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-slate-200 bg-slate-50">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
                Contact
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Parlons de votre besoin
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Vous avez une mission, un audit à mener, une base instable, une production fragile
                ou un environnement critique à reprendre ? Échangeons sur le contexte, les enjeux
                et les priorités.
              </p>
              <div className="mt-8 space-y-3 text-slate-700">
                <div>Email : taghlobi.consulting@proton.me</div>
                <div>
                  LinkedIn :{" "}
                  <a
                    href="https://www.linkedin.com/in/i-am-mohamad-taghlobi-ph-d"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sky-700 hover:underline"
                  >
                    www.linkedin.com/in/i-am-mohamad-taghlobi-ph-d
                  </a>
                </div>
                <div>Localisation : Île-de-France</div>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">
                    Nom
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    className={`w-full rounded-2xl border bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 ${
                      errors.name ? "border-red-500" : "border-slate-200"
                    }`}
                    placeholder="Votre nom"
                  />
                  {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
                    Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    required
                    className={`w-full rounded-2xl border bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 ${
                      errors.email ? "border-red-500" : "border-slate-200"
                    }`}
                    placeholder="vous@entreprise.com"
                  />
                  {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="company" className="mb-2 block text-sm font-medium text-slate-700">
                  Entreprise / Contexte <span className="text-red-600">*</span>
                </label>
                <input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className={`w-full rounded-2xl border bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 ${
                    errors.company ? "border-red-500" : "border-slate-200"
                  }`}
                  placeholder="Votre société ou votre contexte"
                />
                {errors.company && <p className="mt-2 text-sm text-red-600">{errors.company}</p>}
              </div>

              <div className="mt-5">
                <label htmlFor="subject" className="mb-2 block text-sm font-medium text-slate-700">
                  Sujet de la demande <span className="text-red-600">*</span>
                </label>
                <input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full rounded-2xl border bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 ${
                    errors.subject ? "border-red-500" : "border-slate-200"
                  }`}
                  placeholder="Ex. Audit SQL Server, reprise d’application critique, optimisation Oracle..."
                />
                {errors.subject && <p className="mt-2 text-sm text-red-600">{errors.subject}</p>}
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">
                  Décrivez votre mission <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full rounded-2xl border bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 ${
                    errors.message ? "border-red-500" : "border-slate-200"
                  }`}
                  placeholder="Décrivez votre besoin, le contexte, les enjeux, les délais, l’environnement technique et toute information utile à l’analyse de votre demande."
                />
                {errors.message && <p className="mt-2 text-sm text-red-600">{errors.message}</p>}
              </div>

              <div className="mt-5 hidden" aria-hidden="true">
                <label htmlFor="website">Ne pas remplir ce champ</label>
                <input
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <label
                  htmlFor="captchaAnswer"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Vérification anti-robot : {captchaQuestion}
                </label>
                <input
                  id="captchaAnswer"
                  name="captchaAnswer"
                  value={formData.captchaAnswer}
                  onChange={handleChange}
                  inputMode="numeric"
                  className={`w-full rounded-2xl border bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 ${
                    errors.captchaAnswer ? "border-red-500" : "border-slate-200"
                  }`}
                  placeholder="Votre réponse"
                />
                {errors.captchaAnswer && (
                  <p className="mt-2 text-sm text-red-600">{errors.captchaAnswer}</p>
                )}
              </div>

              {submitStatus.message && (
                <div
                  className={`mt-5 rounded-2xl px-4 py-3 text-sm ${
                    submitStatus.type === "success"
                      ? "bg-emerald-50 text-emerald-700"
                      : "bg-red-50 text-red-700"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 w-full rounded-2xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer la demande"}
              </button>

              <p className="mt-3 text-xs leading-6 text-slate-500">
                Les messages sont envoyés via Formspree vers l’adresse{" "}
                <span className="font-semibold">taghlobi.consulting@proton.me</span>.
              </p>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}