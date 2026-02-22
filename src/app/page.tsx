import Image from "next/image";
import { ThemeToggle } from "@/components/ThemeToggle";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { SectionDots } from "@/components/SectionDots";
import {
  BoltIcon,
  DropletsIcon,
  WrenchIcon,
  SnowflakeIcon,
  ShieldCheckIcon,
  TimerIcon,
  BadgeCheckIcon,
  MessageCircleIcon,
  MapPinIcon,
  PhoneCallIcon,
  HandshakeIcon,
  Building2Icon,
  UserCheckIcon,
  ClipboardCheckIcon,
  HouseIcon,
  BriefcaseBusinessIcon,
} from "lucide-react";

const WHATSAPP_NUMBER_E164 = "5511999999999";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! Quero solicitar um orçamento com a Rico Assistências."
);
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER_E164}?text=${WHATSAPP_MESSAGE}`;

const nav = [
  { label: "Serviços", href: "#servicos" },
  { label: "Quem somos", href: "#quem-somos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Seja parceiro", href: "#parceiros" },
  { label: "Contato", href: "#contato" },
];

const services = [
  {
    title: "Elétrica",
    desc: "Disjuntores, tomadas, chuveiro, curto e instalações.",
    icon: BoltIcon,
  },
  {
    title: "Hidráulica",
    desc: "Vazamentos, torneiras, sifão, descargas e reparos.",
    icon: DropletsIcon,
  },
  {
    title: "Eletrodomésticos",
    desc: "Diagnóstico e manutenção com garantia do serviço.",
    icon: WrenchIcon,
  },
  {
    title: "Ar-condicionado",
    desc: "Instalação, limpeza e manutenção preventiva/corretiva.",
    icon: SnowflakeIcon,
  },
  {
    title: "Limpeza técnica",
    desc: "Caixa d'água, telhado e áreas de difícil acesso.",
    icon: ShieldCheckIcon,
  },
];

const differentials = [
  {
    title: "Atendimento rápido",
    text: "Triagem imediata por WhatsApp e retorno no mesmo dia.",
    icon: TimerIcon,
  },
  {
    title: "Equipe verificada",
    text: "Profissionais avaliados e padronização de atendimento.",
    icon: UserCheckIcon,
  },
  {
    title: "Orçamento claro",
    text: "Sem surpresa: escopo e valores alinhados antes do serviço.",
    icon: ClipboardCheckIcon,
  },
  {
    title: "Garantia real",
    text: "Compromisso com acabamento e suporte pós-serviço.",
    icon: BadgeCheckIcon,
  },
];

const testimonials = [
  {
    name: "Carlos M.",
    text: "Chegaram no horário, resolveram rápido e deixaram tudo organizado.",
  },
  {
    name: "Ana P.",
    text: "Atendimento profissional e preço justo. Recomendo com segurança.",
  },
  {
    name: "Roberto S.",
    text: "Fiz elétrica e hidráulica no mesmo dia, sem dor de cabeça.",
  },
];

function cn(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

function PrimaryButton({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700",
        className
      )}
      target="_blank"
      rel="noreferrer"
    >
      <MessageCircleIcon className="h-4 w-4" />
      {children}
    </a>
  );
}

export default function Page() {
  return (
    <div className="service-tone relative min-h-screen overflow-hidden bg-slate-100 dark:bg-slate-950">
      <SectionDots
        sections={[
          { id: "inicio", label: "Início" },
          { id: "quem-somos", label: "Quem somos" },
          { id: "servicos", label: "Serviços" },
          { id: "diferenciais", label: "Diferenciais" },
          { id: "depoimentos", label: "Depoimentos" },
          { id: "parceiros", label: "Seja parceiro" },
          { id: "contato", label: "Contato" },
        ]}
      />

      <header className="sticky top-0 z-50 border-b border-slate-300/80 bg-white/95 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#inicio" className="flex items-center">
            <Image
              src="/logo_no_bg_2.png"
              alt="Logo Rico Assistências"
              width={164}
              height={46}
              className="h-10 w-auto dark:hidden sm:h-11"
              priority
            />
            <Image
              src="/image.png"
              alt="Logo Rico Assistências"
              width={164}
              height={46}
              className="hidden h-10 w-auto dark:block sm:h-11"
              priority
            />
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-700 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href="tel:+5511999999999"
              className="hidden items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 sm:inline-flex"
            >
              <PhoneCallIcon className="h-4 w-4" />
              Ligar
            </a>
            <PrimaryButton href={WHATSAPP_LINK}>WhatsApp</PrimaryButton>
          </div>
        </div>
      </header>

      <section id="inicio" className="snap-section scroll-mt-24 relative flex min-h-screen items-center bg-slate-100 py-14 dark:bg-slate-950 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2">
          <div className="rounded-xl border border-slate-300 bg-white p-7 shadow-sm dark:border-slate-700 dark:bg-slate-900 md:p-8">
            <p className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
              <MapPinIcon className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
              Atendimento residencial e comercial
            </p>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              Serviços gerais com equipe técnica e prazo combinado.
            </h1>

            <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
              Da manutenção elétrica ao reparo hidráulico, atendemos com organização,
              transparência e foco em resolver de verdade.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <PrimaryButton href={WHATSAPP_LINK}>Solicitar orçamento</PrimaryButton>
            </div>

            <div className="mt-5 grid gap-2 text-sm text-slate-600 dark:text-slate-300 sm:grid-cols-3">
              <p className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 dark:border-slate-700 dark:bg-slate-800">Visita técnica</p>
              <p className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 dark:border-slate-700 dark:bg-slate-800">Orçamento claro</p>
              <p className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 dark:border-slate-700 dark:bg-slate-800">Garantia do serviço</p>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="relative overflow-hidden rounded-xl border border-slate-300 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/inicial.png"
                  alt="Equipe de manutenção"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="quem-somos" className="snap-section scroll-mt-24 relative flex min-h-screen items-center bg-slate-200/70 py-16 dark:bg-slate-900">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-3xl font-bold text-slate-900 dark:text-white">Quem somos</h2>
          <p className="mx-auto mt-3 max-w-3xl text-center text-slate-600 dark:text-slate-300">
            A Rico Assistências é uma empresa de serviços gerais focada em manutenção,
            reparos e atendimento técnico com padrão profissional.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <RevealOnScroll className="rounded-xl border border-slate-300 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900" delayMs={80}>
              <p className="text-base font-bold text-slate-900 dark:text-white">Missão</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                Resolver problemas do dia a dia com rapidez, clareza e qualidade de execução.
              </p>
            </RevealOnScroll>
            <RevealOnScroll className="rounded-xl border border-slate-300 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900" delayMs={140}>
              <p className="text-base font-bold text-slate-900 dark:text-white">Como atuamos</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                Diagnóstico, orçamento e execução com comunicação direta em todas as etapas.
              </p>
            </RevealOnScroll>
            <RevealOnScroll className="rounded-xl border border-slate-300 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900" delayMs={200}>
              <p className="text-base font-bold text-slate-900 dark:text-white">Compromisso</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                Cumprimento de prazo, respeito ao cliente e padrão consistente de serviço.
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <section id="servicos" className="snap-section scroll-mt-24 relative flex min-h-screen items-center bg-slate-100 py-16 dark:bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-3xl font-bold text-slate-900 dark:text-white">Serviços principais</h2>
          <p className="mt-2 text-center text-slate-600 dark:text-slate-300">Escolha a categoria e fale com nossa equipe</p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {services.map((s, index) => {
              const Icon = s.icon;
              return (
                <RevealOnScroll
                  key={s.title}
                  className="rounded-xl border border-slate-300 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 dark:border-slate-700 dark:bg-slate-900"
                  delayMs={70 * (index + 1)}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
                    <Icon className="h-5 w-5 text-emerald-700 dark:text-emerald-400" />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-slate-900 dark:text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{s.desc}</p>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 dark:text-emerald-400"
                  >
                    Solicitar
                  </a>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      <section id="diferenciais" className="snap-section scroll-mt-24 relative flex min-h-screen items-center bg-slate-200/70 py-16 dark:bg-slate-900">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-3xl font-bold text-slate-900 dark:text-white">Diferenciais</h2>
          <p className="mt-2 text-center text-slate-600 dark:text-slate-300">Processo simples, padrão técnico e confiança no atendimento</p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {differentials.map((item, index) => {
              const Icon = item.icon;
              return (
                <RevealOnScroll
                  key={item.title}
                  className="rounded-xl border border-slate-300 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900"
                  delayMs={90 * (index + 1)}
                >
                  <Icon className="h-5 w-5 text-emerald-700 dark:text-emerald-400" />
                  <p className="mt-3 text-base font-bold text-slate-900 dark:text-white">{item.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item.text}</p>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      <section id="depoimentos" className="snap-section scroll-mt-24 relative flex min-h-screen items-center bg-slate-100 py-16 dark:bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-3xl font-bold text-slate-900 dark:text-white">O que os clientes falam</h2>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.map((t, index) => (
              <RevealOnScroll
                key={t.name}
                className="rounded-xl border border-slate-300 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900"
                delayMs={110 * (index + 1)}
              >
                <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">{t.text}</p>
                <p className="mt-4 text-sm font-bold text-slate-900 dark:text-white">{t.name}</p>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section id="parceiros" className="snap-section scroll-mt-24 relative flex min-h-screen items-center bg-slate-200/70 py-16 dark:bg-slate-900">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-xl border border-slate-300 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <div className="grid gap-8 lg:grid-cols-[1.3fr,1fr] lg:items-center">
              <div>
                <p className="inline-flex items-center gap-2 rounded-md border border-emerald-300 bg-emerald-100 px-4 py-2 text-xs font-semibold text-emerald-800 dark:border-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                  <HandshakeIcon className="h-4 w-4" />
                  Seja um parceiro Rico Assistências
                </p>
                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                  Você é prestador ou empresa fornecedora?
                </h2>
                <p className="mt-3 max-w-2xl text-base text-slate-600 dark:text-slate-300">
                  Estamos expandindo nossa rede de atendimento e buscamos novos parceiros
                  para ampliar capacidade e cobertura.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <PrimaryButton href={WHATSAPP_LINK} className="px-6 py-3 text-base">
                    Quero ser parceiro
                  </PrimaryButton>
                  <a
                    href="tel:+5511999999999"
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
                  >
                    <PhoneCallIcon className="h-4 w-4" />
                    Falar por telefone
                  </a>
                </div>
              </div>

              <div className="grid gap-3">
                <RevealOnScroll className="rounded-lg border border-slate-300 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900" delayMs={100}>
                  <p className="inline-flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-200">
                    <UserCheckIcon className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                    Prestadores para elétrica, hidráulica e manutenção
                  </p>
                </RevealOnScroll>
                <RevealOnScroll className="rounded-lg border border-slate-300 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900" delayMs={180}>
                  <p className="inline-flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-200">
                    <Building2Icon className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
                    Parcerias B2B com seguradoras e empresas de assistência
                  </p>
                </RevealOnScroll>
                <RevealOnScroll className="rounded-lg border border-slate-300 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900" delayMs={260}>
                  <p className="inline-flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-200">
                    <BadgeCheckIcon className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                    Processo rápido de avaliação e início da parceria
                  </p>
                </RevealOnScroll>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="snap-section scroll-mt-24 relative flex min-h-screen items-center bg-slate-100 py-16 dark:bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-xl border border-slate-300 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <div className="grid gap-8 lg:grid-cols-[1.4fr,1fr] lg:items-center">
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                  Vamos resolver hoje?
                </h2>
                <p className="mt-3 max-w-2xl text-base text-slate-600 dark:text-slate-300">
                  Envie foto ou vídeo do problema, endereço e melhor horário.
                  Nossa equipe retorna rápido com orientação e orçamento.
                </p>
                <div className="mt-6">
                  <PrimaryButton href={WHATSAPP_LINK} className="px-6 py-3 text-base">
                    Abrir WhatsApp
                  </PrimaryButton>
                </div>
              </div>

              <div className="grid gap-3">
                <RevealOnScroll className="rounded-lg border border-slate-300 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800" delayMs={100}>
                  <p className="inline-flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-200">
                    <TimerIcon className="h-4 w-4" />
                    Resposta inicial em poucos minutos
                  </p>
                </RevealOnScroll>
                <RevealOnScroll className="rounded-lg border border-slate-300 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800" delayMs={180}>
                  <p className="inline-flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-200">
                    <BadgeCheckIcon className="h-4 w-4" />
                    Profissionais verificados e serviço com garantia
                  </p>
                </RevealOnScroll>
                <RevealOnScroll className="rounded-lg border border-slate-300 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800" delayMs={220}>
                  <p className="inline-flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-200">
                    <HouseIcon className="h-4 w-4" />
                    Atendimento para residência e condomínio
                  </p>
                </RevealOnScroll>
                <RevealOnScroll className="rounded-lg border border-slate-300 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800" delayMs={260}>
                  <p className="inline-flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-200">
                    <BriefcaseBusinessIcon className="h-4 w-4" />
                    Suporte para comércios e empresas
                  </p>
                </RevealOnScroll>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-200 py-10 dark:bg-slate-950">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 md:grid-cols-3 md:items-center">
          <div>
            <Image
              src="/logo_no_bg_2.png"
              alt="Logo Rico Assistências"
              width={164}
              height={46}
              className="h-9 w-auto dark:hidden"
            />
            <Image
              src="/image.png"
              alt="Logo Rico Assistências"
              width={164}
              height={46}
              className="hidden h-9 w-auto dark:block"
            />
            <p className="mt-2 text-xs text-slate-600 dark:text-slate-400">
              Elétrica, hidráulica, eletrodomésticos e ar-condicionado.
            </p>
          </div>

          <nav className="flex items-center gap-4 text-xs font-medium text-slate-600 dark:text-slate-400 md:justify-center">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-slate-900 dark:hover:text-slate-200">
                {item.label}
              </a>
            ))}
          </nav>

          <p className="text-xs text-slate-600 dark:text-slate-400 md:text-right">
            © {new Date().getFullYear()} Rico Assistências. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-3 text-sm font-semibold text-white shadow-lg hover:bg-emerald-700"
      >
        <MessageCircleIcon className="h-5 w-5" />
        WhatsApp
      </a>
    </div>
  );
}
