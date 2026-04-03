import React, { useEffect, useMemo, useState } from 'react';
import {
  motion,
  type Variants,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';
import {
  ArrowRight,
  BadgeCheck,
  Code2,
  ExternalLink,
  GitBranch,
  Mail,
  MapPin,
  MonitorSmartphone,
  Phone,
  Sparkles,
  Star,
  Sigma,
  Orbit,
  Layers3,
  Cpu,
  Palette,
  Boxes,
} from 'lucide-react';

type ProjectType = {
  title: string;
  description: string;
  stack: string[];
  github: string;
  live: string;
  image: string;
  accent: string;
};

type StatType = {
  value: string;
  label: string;
};

type FeatureType = {
  icon: React.ReactNode;
  title: string;
  text: string;
};

type ContactItemType = {
  icon: React.ReactNode;
  label: string;
  value: string;
};

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  text: string;
};

type ProjectCardProps = {
  project: ProjectType;
  index: number;
};

type SkillCardProps = {
  skill: string;
  index: number;
};

type OrbitItemProps = {
  label: string;
  angle: number;
  radius: number;
};

const projects: ProjectType[] = [
  {
    title: 'Game Management Dashboard',
    description:
      'A premium admin dashboard for managing teachers, students, groups, and team workflows with strong hierarchy, clean analytics, and enterprise-style clarity.',
    stack: ['CSS', 'HTML'],
    github: 'https://github.com/komilov2007/Game-Dashboard.git',
    live: 'https://game-dashboard-sigma.vercel.app',
    image: 'https://game-dashboard-sigma.vercel.app/image/subway.png',
    accent: 'from-cyan-500/30 to-blue-500/30',
  },
  {
    title: 'FIGMA LANDING PAGE',
    description:
      'A modern commerce interface focused on premium product storytelling, clean product detail flows, reusable components, and fluid responsiveness.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React Query'],
    github: 'https://github.com/komilov2007/imtihon',
    live: 'https://imtihon-two-ochre.vercel.app/',
    image: 'https://imtihon-two-ochre.vercel.app/image/Line%20Chart%201.png',
    accent: 'from-fuchsia-500/30 to-purple-500/30',
  },
  {
    title: 'AVION - Cinematic Landing Page',
    description:
      'A cinematic landing page with layered gradients, bold typography, strong motion direction, and section storytelling designed to feel unmistakably premium.',
    stack: ['React', 'Framer Motion', 'Tailwind CSS', 'Responsive UI'],
    github: 'https://github.com/komilov2007/avion',
    live: 'https://avion-rho.vercel.app',
    image: '	https://avion-rho.vercel.app/image/koza.png',
    accent: 'from-emerald-500/30 to-teal-500/30',
  },
  {
    title: 'ZooN UZ - instrumental landing page',
    description:
      'A stylish restaurant experience with immersive booking sections, elegant visual rhythm, rich image presentation, and polished interaction design.',
    stack: ['React', 'Tailwind CSS', 'Swiper', 'UI Design'],
    github: 'https://github.com/komilov2007/example_four.git',
    live: 'https://example-four-gcjv.vercel.app/',
    image: 'https://example-four-gcjv.vercel.app/image/hero.png',
    accent: 'from-orange-500/30 to-rose-500/30',
  },
  {
    title: 'AGENCY - structured dashboard system',
    description:
      'A structured frontend system for roles, dashboards, groups, and educational data views with scalable components and practical real-world UX.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Context API'],
    github: 'https://github.com/komilov2007/Agency.git',
    live: 'https://agency-mu-ashen-68.vercel.app/',
    image: 'https://agency-mu-ashen-68.vercel.app/image/phone2.svg',
    accent: 'from-sky-500/30 to-indigo-500/30',
  },
  {
    title: `KOMILOV'S AI BOT`,
    description:
      'Komilov’s AI is an artificial intelligence-based chatbot created for the Telegram platform that answers users’ questions in real time. The bot uses the LLaMA model via the Groq API and returns clear and understandable answers, mainly in the Uzbek language.',
    stack: ['Node.js', 'JavaScript', 'Telegram Bot API', 'Groq API'],
    github: 'https://github.com/yourusername/project-six',
    live: 'https://t.me/komilovs_si_bot',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVXoihhLDf3TQp2KTQy-AaB3mT5koZMxDeaw&s',
    accent: 'from-violet-500/30 to-pink-500/30',
  },
];

const skills: string[] = [
  'React',
  'Next.js',
  'TypeScript',
  'JavaScript',
  'Tailwind CSS',
  'Framer Motion',
  'REST API',
  'Axios',
  'React Query',
  'Responsive Design',
  'Figma to Code',
  'UI Architecture',
];

const stats: StatType[] = [
  { value: '7+', label: 'Months of consistent frontend learning' },
  { value: '15+', label: 'High-end sections built from scratch' },
  { value: '100%', label: 'Responsive, clean, and modern UI focus' },
  { value: '24/7', label: 'Driven to improve and ship better work' },
];

const features: FeatureType[] = [
  {
    icon: <Sigma className="h-5 w-5" />,
    title: 'Figma to Code Precision',
    text: 'I enjoy translating visual ideas into clean, elegant, and responsive interfaces with strong spacing, hierarchy, and premium detail work.',
  },
  {
    icon: <BadgeCheck className="h-5 w-5" />,
    title: 'Strong UI Standards',
    text: 'I build layouts that feel trustworthy, polished, and visually balanced while staying practical for real users and real products.',
  },
  {
    icon: <Star className="h-5 w-5" />,
    title: 'Motion with Purpose',
    text: 'Animations are used to guide attention, strengthen storytelling, and make the interface feel alive without hurting clarity or speed.',
  },
];

const contactItems: ContactItemType[] = [
  {
    icon: <Mail className="h-5 w-5" />,
    label: 'Email',
    value: 'komilov2007.2007@gmail.com',
  },
  {
    icon: <Phone className="h-5 w-5" />,
    label: 'Phone',
    value: '+998 90 481 40 07',
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    label: 'Location',
    value: 'Tashkent, Uzbekistan',
  },
];

const orbitItems: Array<{ label: string; angle: number; radius: number }> = [
  { label: 'React', angle: 0, radius: 132 },
  { label: 'TypeScript', angle: 60, radius: 148 },
  { label: 'Tailwind', angle: 120, radius: 130 },
  { label: 'Next.js', angle: 180, radius: 150 },
  { label: 'Motion', angle: 240, radius: 130 },
  { label: 'UI', angle: 300, radius: 145 },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: 'easeOut',
    },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

function useMousePosition() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      setMouse({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return mouse;
}

function CustomCursor(): React.JSX.Element | null {
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const mouse = useMousePosition();

  const cursorX = useSpring(mouse.x, {
    stiffness: 320,
    damping: 28,
    mass: 0.6,
  });
  const cursorY = useSpring(mouse.y, {
    stiffness: 320,
    damping: 28,
    mass: 0.6,
  });
  const followerX = useSpring(mouse.x, {
    stiffness: 160,
    damping: 24,
    mass: 1.1,
  });
  const followerY = useSpring(mouse.y, {
    stiffness: 160,
    damping: 24,
    mass: 1.1,
  });

  useEffect(() => {
    const show = () => setIsVisible(true);
    const hide = () => setIsVisible(false);

    const updatePointerState = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      const clickable = target.closest('a, button');
      setIsPointer(Boolean(clickable));
    };

    window.addEventListener('mouseenter', show);
    window.addEventListener('mouseleave', hide);
    window.addEventListener('mousemove', updatePointerState);

    return () => {
      window.removeEventListener('mouseenter', show);
      window.removeEventListener('mouseleave', hide);
      window.removeEventListener('mousemove', updatePointerState);
    };
  }, []);

  if (typeof window === 'undefined') return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-4 w-4 rounded-full bg-white mix-blend-difference md:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isVisible ? (isPointer ? 1.6 : 1) : 0,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.18 }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[99] hidden rounded-full border border-cyan-300/40 bg-cyan-400/10 backdrop-blur-md md:block"
        style={{
          x: followerX,
          y: followerY,
          translateX: '-50%',
          translateY: '-50%',
          width: isPointer ? 56 : 34,
          height: isPointer ? 56 : 34,
        }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}

function SectionTitle({ eyebrow, title, text }: SectionTitleProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.3em] text-cyan-300 backdrop-blur">
        <Sparkles className="h-3.5 w-3.5" />
        {eyebrow}
      </div>
      <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-sm leading-7 text-white/65 sm:text-base">
        {text}
      </p>
    </div>
  );
}

function OrbitItem({ label, angle, radius }: OrbitItemProps) {
  const radians = (angle * Math.PI) / 180;
  const x = Math.cos(radians) * radius;
  const y = Math.sin(radians) * radius;

  return (
    <motion.div
      className="absolute left-1/2 top-1/2"
      animate={{ rotate: 360 }}
      transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
      style={{ x: -16, y: -16 }}
    >
      <motion.div
        className="absolute"
        style={{ x, y }}
        animate={{ rotate: -360 }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
      >
        <div className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/85 shadow-[0_0_25px_rgba(34,211,238,0.14)] backdrop-blur-xl">
          {label}
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay: index * 0.08 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl transition duration-300 hover:border-cyan-300/20"
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.accent}`}
        />
        <div className="absolute -left-12 top-0 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
      </div>

      <div
        className="relative h-60 overflow-hidden"
        style={{ transform: 'translateZ(30px)' }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t ${project.accent} via-transparent to-transparent`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/35 to-transparent" />
      </div>

      <div className="relative p-6" style={{ transform: 'translateZ(45px)' }}>
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
          <div className="flex gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} GitHub`}
              className="rounded-xl border border-white/10 bg-white/5 p-2 text-white/70 transition hover:bg-white/10 hover:text-white"
            >
              <GitBranch className="h-4 w-4" />
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} Live Demo`}
              className="rounded-xl border border-white/10 bg-white/5 p-2 text-white/70 transition hover:bg-white/10 hover:text-white"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>

        <p className="mt-4 text-sm leading-7 text-white/65">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/75"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

function SkillCard({ skill, index }: SkillCardProps) {
  const percentage = useMemo(() => 100 - (index % 1) * 4, [index]);

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.05 }}
      className="rounded-[1.6rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
    >
      <div className="flex items-center justify-between gap-4">
        <span className="text-base font-semibold text-white">{skill}</span>
        <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
          {percentage}%
        </span>
      </div>
      <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.04, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-400"
        />
      </div>
    </motion.div>
  );
}

export default function App(): React.JSX.Element {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Frontend Developer • React • Next.js • Tailwind • Motion';

  useEffect(() => {
    let index = 0;
    const interval = window.setInterval(() => {
      setTypedText(fullText.slice(0, index));
      index += 1;
      if (index > fullText.length) {
        window.clearInterval(interval);
      }
    }, 42);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden bg-[#050816] text-white [perspective:1200px]">
      <CustomCursor />

      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-0 top-24 h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
        <motion.div
          animate={{ x: [0, 40, -30, 0], y: [0, 20, -25, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-[10%] top-[18%] h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -60, 30, 0], y: [0, -20, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute right-[12%] top-[45%] h-40 w-40 rounded-full bg-fuchsia-400/10 blur-3xl"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_30%),linear-gradient(to_bottom,transparent,rgba(255,255,255,0.02))]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:52px_52px] [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_90%)]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/55 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="group flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-fuchsia-500 shadow-[0_0_40px_rgba(34,211,238,0.35)]">
              <Code2 className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-base font-bold tracking-wide">Komilov.dev</p>
              <p className="text-xs text-white/50">
                Premium Frontend Portfolio
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {[
              ['About', '#about'],
              ['Projects', '#projects'],
              ['Skills', '#skills'],
              ['Contact', '#contact'],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-sm font-medium text-white/70 transition hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:scale-[1.03] hover:bg-cyan-400/20"
          >
            Explore Work
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      <main>
        <section
          id="home"
          className="relative mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 lg:px-8 lg:pb-24 lg:pt-24"
        >
          <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.1 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-cyan-300 backdrop-blur"
              >
                <Sparkles className="h-3.5 w-3.5" />
                Crafted To Impress At First Scroll
              </motion.div>

              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
                className="max-w-4xl text-4xl font-black leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl"
              >
                I design and build
                <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
                  unforgettable web experiences.
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.32 }}
                className="mt-6 max-w-2xl text-base leading-8 text-white/72 sm:text-lg"
              >
                I focus on premium interfaces, advanced motion, responsive
                systems, and clean frontend architecture using React, Next.js,
                TypeScript, and Tailwind CSS.
              </motion.p>

              <motion.div
                variants={scaleIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.45 }}
                className="mt-6 inline-flex min-h-[44px] items-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-cyan-200 shadow-[0_0_40px_rgba(34,211,238,0.08)] backdrop-blur"
              >
                {typedText}
                <span className="ml-1 inline-block h-5 w-[2px] animate-pulse bg-cyan-300" />
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.55 }}
                className="mt-10 flex flex-col gap-4 sm:flex-row"
              >
                <a
                  href="#projects"
                  className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-2xl bg-white px-6 py-4 text-sm font-bold text-slate-950 transition hover:-translate-y-1"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-white via-cyan-100 to-white opacity-0 transition group-hover:opacity-100" />
                  <span className="relative">View My Projects</span>
                  <ArrowRight className="relative h-4 w-4 transition group-hover:translate-x-1" />
                </a>
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/10"
                >
                  <GitBranch className="h-4 w-4" />
                  GitHub Profile
                </a>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.65 }}
                className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
              >
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
                  >
                    <div className="text-3xl font-black text-white">
                      {item.value}
                    </div>
                    <div className="mt-2 text-sm leading-6 text-white/60">
                      {item.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="relative mx-auto flex h-[520px] w-full max-w-[540px] items-center justify-center"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-fuchsia-500/20 blur-3xl" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 28, ease: 'linear', repeat: Infinity }}
                className="absolute h-[360px] w-[360px] rounded-full border border-dashed border-white/10"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
                className="absolute h-[300px] w-[300px] rounded-full border border-white/10"
              />

              {orbitItems.map((item) => (
                <OrbitItem
                  key={item.label}
                  label={item.label}
                  angle={item.angle}
                  radius={item.radius}
                />
              ))}

              <div className="relative z-10 w-full rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-2xl">
                <div className="rounded-[1.7rem] border border-white/10 bg-[#0b1124]/90 p-5">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-rose-400" />
                      <span className="h-3 w-3 rounded-full bg-yellow-400" />
                      <span className="h-3 w-3 rounded-full bg-emerald-400" />
                    </div>
                    <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-white/55">
                      Interface Lab
                    </div>
                  </div>

                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    {[
                      {
                        icon: <Layers3 className="h-5 w-5" />,
                        title: 'Pixel Perfect UI',
                        text: 'Sharp layouts',
                      },
                      {
                        icon: <MonitorSmartphone className="h-5 w-5" />,
                        title: 'Responsive Systems',
                        text: 'Every device',
                      },
                      {
                        icon: <Cpu className="h-5 w-5" />,
                        title: 'Clean Logic',
                        text: 'Scalable code',
                      },
                      {
                        icon: <Palette className="h-5 w-5" />,
                        title: 'Visual Impact',
                        text: 'Memorable style',
                      },
                    ].map((card) => (
                      <div
                        key={card.title}
                        className="rounded-3xl border border-white/10 bg-white/5 p-4"
                      >
                        <div className="mb-3 inline-flex rounded-2xl bg-white/10 p-3 text-cyan-300">
                          {card.icon}
                        </div>
                        <p className="font-semibold text-white">{card.title}</p>
                        <p className="mt-1 text-sm text-white/50">
                          {card.text}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 rounded-[1.6rem] border border-white/10 bg-[radial-gradient(circle_at_10%_20%,rgba(34,211,238,0.18),transparent_28%),radial-gradient(circle_at_90%_10%,rgba(217,70,239,0.16),transparent_25%),linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-5">
                    <div className="flex flex-wrap gap-2">
                      {[
                        'Motion',
                        'Architecture',
                        'Design',
                        'Speed',
                        'Experience',
                      ].map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/75"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5 grid grid-cols-3 gap-3">
                      <div className="h-24 rounded-2xl border border-white/10 bg-white/5" />
                      <div className="h-24 rounded-2xl border border-white/10 bg-white/10" />
                      <div className="h-24 rounded-2xl border border-white/10 bg-white/5" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section
          id="about"
          className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
        >
          <SectionTitle
            eyebrow="About Me"
            title="Design-driven frontend development with energy, clarity, and visual ambition"
            text="I enjoy turning ideas into smooth, premium, and production-ready digital experiences. My goal is not just to make something work, but to make it feel memorable."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {features.map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08 }}
                className="group rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/20"
              >
                <div className="mb-5 inline-flex rounded-2xl bg-white/10 p-3 text-cyan-300 transition group-hover:scale-110">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/65">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <section
          id="projects"
          className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
        >
          <SectionTitle
            eyebrow="Featured Projects"
            title="Selected work presented with depth, motion, and premium visual storytelling"
            text="Each project is designed to feel rich, serious, and polished so the portfolio reflects both frontend skill and presentation quality."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>
        </section>

        <section
          id="skills"
          className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
        >
          <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
            <div>
              <SectionTitle
                eyebrow="Core Skills"
                title="A frontend stack built for strong architecture and strong visual presence"
                text="I combine UI precision, reusable thinking, modern tooling, and motion awareness to create interfaces that feel polished and ready for real products."
              />

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-8 rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              >
                <div className="flex items-center gap-3 text-cyan-300">
                  <Boxes className="h-5 w-5" />
                  <span className="text-sm font-semibold uppercase tracking-[0.24em]">
                    Frontend Philosophy
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-white/65">
                  I care about visual rhythm, clean structure, smooth
                  interactions, and user-focused experiences that feel premium
                  without becoming heavy or confusing.
                </p>
              </motion.div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {skills.map((skill, index) => (
                <SkillCard key={skill} skill={skill} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
        >
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl sm:p-10 lg:p-14">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-cyan-300">
                  <Mail className="h-3.5 w-3.5" />
                  Let’s Build Something Exceptional
                </div>
                <h2 className="mt-6 max-w-2xl text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Need a portfolio, landing page, dashboard, or a premium
                  frontend experience?
                </h2>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
                  I’m open to exciting opportunities where beautiful UI, strong
                  frontend thinking, and attention to detail matter. Let’s
                  create something people instantly remember.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="mailto:komilov2007.2007@gmail.com"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-sm font-bold text-slate-950 transition hover:-translate-y-1"
                  >
                    <Mail className="h-4 w-4" />
                    Send Email
                  </a>
                  <a
                    href="https://github.com/komilov2007"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-white/10"
                  >
                    <GitBranch className="h-4 w-4" />
                    Visit GitHub
                  </a>
                </div>
              </div>

              <div className="grid gap-4">
                {contactItems.map((item) => (
                  <motion.div
                    key={item.label}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="rounded-[1.6rem] border border-white/10 bg-[#0b1124]/80 p-5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="rounded-2xl bg-white/10 p-3 text-cyan-300">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm text-white/45">{item.label}</p>
                        <p className="mt-1 text-base font-semibold text-white">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#050816]/70">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 text-center sm:px-6 md:flex-row md:text-left lg:px-8">
          <div>
            <p className="font-semibold text-white">Komilov.dev</p>
            <p className="mt-1 text-sm text-white/50">
              Crafted with React,Next,Bootstrap, TypeScript, Tailwind CSS, and
              serious attention to detail.
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-white/45">
            <Orbit className="h-4 w-4" />© 2026 All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
