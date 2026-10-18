export const SITE = {
  name: 'Sodya',
  handle: 'S0dya',
  role: 'Unity Developer - Games & Backend',
  tagline: 'Unity client, .NET server, one developer.',
  summary:
    'Unity Developer with 3 years of experience shipping mobile games (Android/iOS) from prototype to release. Worked with puzzle, casual, roguelike, midcore, arcade and other genres.\n\nComfortable owning gameplay features independently, implementing backend features or working with client-server architecture.\n\nStrong C# fundamentals, focused on reusable architecture, config-driven systems, and production speed.',
  description:
    'Unity developer with 3 years of commercial experience on Android and iOS - puzzle, casual and arcade - plus the ASP.NET Core backend behind them. Accounts, cloud saves, leaderboards, remote config. Systems, templates and production speed.',
  email: 'damir.m.work@gmail.com',
  phone: '+374-95-295-124',
  github: 'https://github.com/S0dya',
  linkedin: 'https://www.linkedin.com/in/damir-m-80849128b/',
  telegram: 'https://t.me/damirsdnnp',
  discord: 'pyps1ch',
  instagram: 'https://www.instagram.com/s0dya5/',
  resume: 'https://drive.google.com/file/d/1z1hYCV4dcQ24vasbzdK1zrsilOeGhkdt/view',
  itch: 'https://pinkthing.itch.io/',
  location: 'Armenia, UTC+4 - remote',
  availability: "I'd be glad to talk.",
  years: 3,
  seo: {
    ogImage: '/media/og.png',
  },
};

export const SOCIAL = [
  { label: 'GitHub', href: SITE.github, handle: 'github.com/S0dya', glyph: 'github' },
  { label: 'LinkedIn', href: SITE.linkedin, handle: '/in/damir-m-80849128b', glyph: 'linkedin' },
  { label: 'Telegram', href: SITE.telegram, handle: '@damirsdnnp', glyph: 'telegram' },
  { label: 'Discord', href: null, handle: 'pyps1ch', glyph: 'discord' },
  { label: 'Instagram', href: SITE.instagram, handle: '@s0dya5', glyph: 'instagram' },
  { label: 'itch.io', href: SITE.itch, handle: 'pinkthing', glyph: 'itch' },
] as const;

/**
 * Bullets are taken verbatim from the master resume.
 * `**` marks the emphasised spans the resume bolds.
 */
export const EXPERIENCE = [
  {
    company: 'Syndicate Group',
    role: 'Unity Developer',
    period: 'Apr 2025 - Jun 2026',
    mode: 'Remote',
    blurb: 'Fast production across Android and iOS. Owned titles from the first idea to the store release.',
points: [
          'Built and maintained a shared Unity project template and core architecture, **adopted across the team**, cutting new-project setup from days to hours and supporting a release pace of up to **2 titles per week** - some builds needed **zero new gameplay code**.',
          'Owned the full development lifecycle for **30+ Android/iOS titles**, covering gameplay, QA and release while independently designing and shipping **10-15 original gameplay mechanics** from GDD to production.',
      'Designed reusable, config-driven gameplay systems and shared UI/reward pipelines so new titles shipped as content and configuration work instead of new code.',
      'Built a reusable SDK/service integration layer (Firebase, AppsFlyer, UniWebView) standardizing how new titles consumed third-party services, plus lightweight CI/CD for builds and releases - the starting point for later learning ASP.NET Core backend work.',
      'Built modular UI windows, tutorial and reward systems **shared across titles** to speed up new feature integration.',
    ],
  },
  {
    company: 'PinkThing',
    role: 'Unity Developer',
    period: 'Jan 2023 - Apr 2026',
    mode: 'Part-time',
    blurb: 'Cross-platform casual and puzzle games, from prototype to release.',
    points: [
      'Led technical development of cross-platform casual and puzzle games, working closely with artists and designers from prototype to release.',
      'Built a config-driven level generation system supporting **200+ levels**, reducing level creation and balancing time by 70%.',
      'Built a **no-code animation and effects sequencing tool** (ordered execution, skipping, reuse) used across Match 3 Drop\'s UI and gameplay feel.',
      'Architected gameplay around a centralized game-state model with controllers mutating state and views reacting via signals, later migrating a custom event system to **Zenject Signals** to match industry-standard DI patterns.',
      'Reduced runtime memory usage by approximately **30%** by eliminating unnecessary allocations and optimizing update-heavy systems for lower-end mobile devices.',
      'Designed and built the **ASP.NET Core backend** (JWT auth, EF Core, PostgreSQL) powering accounts, progression, and leaderboard.',
      'Integrated Firebase Remote Config with safe local fallback, Firebase Analytics, and authentication for leaderboards, **keeping gameplay functional if Firebase was unreachable**.',
    ],
  },
  {
    company: 'PlayGenes',
    role: 'Unity Programmer',
    period: 'Dec 2024 - Feb 2025',
    mode: 'Remote',
    blurb:
      'Small team shipping a midcore roguelike shooter close to release. The engagement ended when funding ran out.',
    storeLink: {
      label: 'Google Play',
      href: 'https://play.google.com/store/apps/details?id=com.playgenes.pirates&hl=en',
    },
    points: [
      'Joined a small team shipping a midcore roguelike shooter close to release, implementing gameplay inside a legacy codebase **where half the existing code was unused or non-functional**.',
      'Built a modular minigame framework, starting from a reward-wheel minigame, that cut implementation time for new minigame variants.',
      'Extended gameplay systems built on **UniTask and UniRx** inside a large, sparsely-documented legacy codebase, maintaining compatibility with fragile existing features.',
      'Built client-side state handling for server-resolved minigame outcomes - requested the result, held gameplay state safely through the network delay, server stayed the **single source of truth** - so a slow response couldn\'t desync or corrupt the run.',
      'Built a reusable localization tool pulling strings through a backend-driven process, keeping localization logic out of gameplay code and cutting translation turnaround time.',
    ],
  },
] as const;

/**
 * Profile-page version of the experience bullets: same facts, far less text, so
 * the page can be read at a glance. About keeps the full `EXPERIENCE` detail.
 */
export const EXPERIENCE_SHORT: Record<string, string[]> = {
  'Syndicate Group': [
    'Owned the full development lifecycle for **30+ Android/iOS titles**, from gameplay implementation through QA and release.',
    'Built a shared Unity template and core architecture, cutting new-project setup from days to hours and supporting a release pace of up to **2 titles per week**.',
    'Developed **10-15 original gameplay mechanics** and reusable, config-driven gameplay, UI, and reward systems that reduced the need for new code across reskins.',
  ],
  PinkThing: [
    'Built config-driven level generation for **200+ levels**, reducing level creation and balancing time by **70%**.',
    'Created a reusable animation/effects sequencing tool and modular gameplay/UI architecture.',
    'Reduced runtime memory usage by approximately **30%**, and built an ASP.NET Core backend with JWT authentication, EF Core, and PostgreSQL for accounts, progression, and leaderboards.',
  ],
  PlayGenes: [
    'Implemented gameplay features in a legacy midcore roguelike shooter approaching release, working around unused and non-functional existing code.',
    'Implemented client-side state handling for server-resolved minigame outcomes, preventing delayed responses from corrupting gameplay state.',
    'Built a backend-driven localization tool to keep translation logic separate from gameplay code.',
  ],
};

/** Prioritised short list for the profile page. About keeps the full SKILLS grid. */
export const SKILLS_SHORT = [
  {
    group: 'Unity & gameplay',
    items: ['Unity 2D/3D', 'C#', 'Gameplay systems', 'Mobile optimization', 'UI', 'Editor tooling'],
  },
  {
    group: 'Architecture',
    items: ['SOLID', 'Design patterns', 'Dependency injection', 'Config-driven systems', 'State management', 'Client-server architecture'],
  },
  {
    group: 'Backend',
    items: ['ASP.NET Core', 'REST APIs', 'EF Core', 'PostgreSQL', 'Redis', 'JWT authentication', 'Background workers'],
  },
  {
    group: 'Tools & integrations',
    items: ['Zenject', 'UniTask', 'UniRx', 'DOTween', 'Addressables', 'Firebase', 'AppsFlyer', 'Git', 'Docker', 'CI/CD basics'],
  },
];

export const SKILLS = [
  {
    group: 'Unity',
    items: [
      'C#',
      'Unity 2D / 3D',
      'UI/UX flows',
      'Mobile performance & memory optimization',
      'Editor tooling',
    ],
  },
  {
    group: 'Architecture',
    items: [
      'Dependency injection (Zenject)',
      'Centralized state / reactive views (event signals)',
      'Config-driven systems (ScriptableObjects)',
      'Service-boundary design',
      'Client-server architecture',
      'Tool development',
    ],
  },
  {
    group: 'Backend',
    items: [
      'ASP.NET Core',
      'EF Core',
      'PostgreSQL',
      'Redis',
      'JWT (access/refresh, per-device sessions)',
      'REST APIs',
      'Background workers',
      'Rate limiting',
    ],
  },
  {
    group: 'Programming',
    items: ['Algorithms & data structures', 'OOP', 'SOLID', 'Design patterns', 'ECS concepts'],
  },
  {
    group: 'Frameworks',
    items: ['Zenject', 'UniTask', 'UniRx', 'DOTween', 'Addressables', 'ScriptableObjects'],
  },
  {
    group: 'Developer Tools',
    items: [
      'Git',
      'SVN',
      'Swagger / OpenAPI',
      'Bruno',
      'Docker / Docker Compose',
      'CI/CD basics',
      'Cursor',
      'GitHub Copilot',
    ],
  },
  {
    group: 'SDK',
    items: ['Firebase (Auth, Analytics, Config, Database)'],
  },
  {
    group: 'Languages',
    items: ['English (C1)', 'Russian (native)'],
  },
] as const;

export const OTHER_SKILLS = [
  { name: 'Blender', detail: 'Simple modeling, animation, rigging' },
  { name: 'FMOD', detail: 'Audio implementation and integration' },
  { name: 'Ableton', detail: 'Audio and music production' },
  { name: 'Photoshop', detail: 'Basic image editing' },
  { name: 'Aseprite', detail: 'Pixel art and 2D sprites' },
] as const;

export const STATS = [
  { value: '3', label: 'years in Unity, all remote' },
  { value: '30+', label: 'Android and iOS titles shipped to the store' },
  { value: '200+', label: 'config-driven levels, 70% less build time' },
  { value: '30%', label: 'less runtime memory on low-end devices' },
] as const;