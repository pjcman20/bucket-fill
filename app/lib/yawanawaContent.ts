export type YawaSection = {
  title: string;
  body: string[];
};

export type YawaPage = {
  slug: string;
  navLabel: string;
  category:
    | 'core'
    | 'category'
    | 'support'
    | 'story'
    | 'guide'
    | 'blog'
    | 'evergreen';
  seoTitle: string;
  metaDescription: string;
  h1: string;
  heroKicker: string;
  heroSummary: string;
  ctas: {label: string; to: string}[];
  positioning: string;
  narrative: YawaSection[];
  infographic: {
    title: string;
    visualization: string;
    style: string;
    conversionValue: string;
  };
  iconFeatures: {icon: string; title: string; text: string}[];
  dynamicModule: {
    name: string;
    purpose: string;
    interactions: string[];
  };
  trustBlock: string[];
  faq: {q: string; a: string}[];
  midCta: {title: string; text: string; action: {label: string; to: string}};
  bottomCta: {title: string; text: string; action: {label: string; to: string}};
  internalLinks: {label: string; to: string}[];
  imagePrompts: string[];
  altText: string[];
  responsiveNotes: string[];
  performanceNotes: string[];
};

const baseFeatures = [
  {
    icon: '🛖',
    title: 'Tribe-led ownership',
    text: 'All priorities, approvals, and publication are directed by Yawanawá leadership.',
  },
  {
    icon: '🌿',
    title: 'Forest stewardship',
    text: 'Commerce and contributions are linked to living-territory protection and long-term ecological continuity.',
  },
  {
    icon: '🤝',
    title: 'Family support',
    text: 'Product, membership, and donation flows are mapped to direct family and community support outcomes.',
  },
  {
    icon: '📜',
    title: 'Protocol and context',
    text: 'Products and stories include guidance on what is public, what requires context, and what remains protected.',
  },
];

function mkPage(
  partial: Partial<YawaPage> &
    Pick<YawaPage, 'slug' | 'navLabel' | 'seoTitle' | 'metaDescription' | 'h1'>,
): YawaPage {
  return {
    category: 'core',
    heroKicker: 'Yawanawá Tribe-Led Platform',
    heroSummary:
      'A sovereign digital flagship where shopping, membership, and giving directly support families, cultural continuity, and rainforest stewardship.',
    ctas: [
      {label: 'Explore Marketplace', to: '/yawanawa/marketplace'},
      {label: 'Join Family Circle', to: '/yawanawa/membership-family-circle'},
      {
        label: 'Protect the Forest',
        to: '/yawanawa/donation-protect-the-forest',
      },
    ],
    positioning:
      'This platform is a tribe-owned model of sovereign commerce: products with lineage, donations with transparency, and membership with relationship.',
    narrative: [
      {
        title: 'A direct relationship, not a resale channel',
        body: [
          'This website is directly handled and hosted by the Yawanawá community, with offerings and context approved through tribe-led decision-making. Supporters do not buy into an aesthetic; they enter a respectful relationship with people, territory, and living responsibilities.',
          'Each purchase route is paired with educational context so buyers understand origin, appropriate use, and how support reaches families and stewardship priorities.',
        ],
      },
    ],
    infographic: {
      title: 'The Yawanawá Ecosystem',
      visualization:
        'A circular model connecting Marketplace, Membership, Donation, Family Support, Forest Stewardship, Stories, and Approved Gatherings.',
      style:
        'Premium parchment map with forest-green rings and bead-inspired icon nodes.',
      conversionValue:
        'Reduces confusion by helping visitors choose the right support path in under 60 seconds.',
    },
    iconFeatures: baseFeatures,
    dynamicModule: {
      name: 'What brings you here selector',
      purpose:
        'Routes new visitors to Shop, Membership, Donation, Learning, Impact, or Gatherings.',
      interactions: [
        'Goal selection cards',
        'Personalized recommendation panel',
        'Sticky mobile CTA based on selection',
      ],
    },
    trustBlock: [
      'Quarterly impact brief with allocation percentages.',
      'Product provenance notes per item family or artisan group.',
      'Protocol badges: Public, Educational, Members-context, or Restricted.',
    ],
    faq: [
      {
        q: 'Is this website tribe-led?',
        a: 'Yes. Governance, approvals, and storytelling direction are led by the Yawanawá community and designated families.',
      },
      {
        q: 'How does support reach families and forest projects?',
        a: 'Every product, membership, and donation path is mapped to budget categories and shared through periodic impact updates.',
      },
      {
        q: 'Are all items publicly available?',
        a: 'No. Some offerings require context, legal review, membership education, or are not sold publicly at all.',
      },
    ],
    midCta: {
      title: 'Choose your support path with confidence',
      text: 'Compare purchase, membership, and donation routes to match your values and the relationship depth you seek.',
      action: {
        label: 'Compare Support Paths',
        to: '/yawanawa/membership-vs-purchase-vs-donation',
      },
    },
    bottomCta: {
      title: 'Enter the Yawanawá digital home',
      text: 'Start with approved offerings, family stories, and transparent impact pathways.',
      action: {label: 'Start Here', to: '/yawanawa/start-here'},
    },
    internalLinks: [
      {label: 'Marketplace', to: '/yawanawa/marketplace'},
      {
        label: 'Impact & Forest Stewardship',
        to: '/yawanawa/impact-forest-stewardship',
      },
      {
        label: 'Cultural Protocol & Sacred Boundaries',
        to: '/yawanawa/cultural-protocol-sacred-boundaries',
      },
      {
        label: 'Articles / Stories from the Forest',
        to: '/yawanawa/articles-stories-from-the-forest',
      },
    ],
    imagePrompts: [
      'Tribe-approved artisan product still life with beadwork, textiles, and natural materials in premium editorial lighting.',
      'Respectful portrait of Yawanawá family in community-approved context with natural Amazon light and documentary depth.',
      'Forest and river stewardship scene showing people, place, and purpose without stereotypes.',
    ],
    altText: [
      'Yawanawá artisan beadwork displayed beside natural fibers and carved wood on a neutral surface.',
      'Community-led gathering circle with contextual caption and no sacred restriction imagery.',
    ],
    responsiveNotes: [
      'Use mobile-first stacked sections and persistent sticky CTA (Shop / Join / Donate) under 768px.',
      'Turn infographics into swipeable cards with text summaries for readability.',
    ],
    performanceNotes: [
      'Serve AVIF/WebP assets with responsive srcset and lazy-load non-critical media.',
      'Defer quiz and calculator scripts until interaction; keep first contentful paint text-first.',
    ],
    ...partial,
  };
}

export const primaryNav = [
  {label: 'Home', to: '/yawanawa'},
  {label: 'Start Here', to: '/yawanawa/start-here'},
  {label: 'Marketplace', to: '/yawanawa/marketplace'},
  {label: 'Shop by Category', to: '/yawanawa/shop-by-category'},
  {label: 'Membership', to: '/yawanawa/membership-family-circle'},
  {label: 'Donation', to: '/yawanawa/donation-protect-the-forest'},
  {
    label: 'Meet the Families',
    to: '/yawanawa/meet-the-families-gatherings-immersions',
  },
  {label: 'Impact', to: '/yawanawa/impact-forest-stewardship'},
  {label: 'Protocol', to: '/yawanawa/cultural-protocol-sacred-boundaries'},
  {label: 'Stories', to: '/yawanawa/articles-stories-from-the-forest'},
  {label: 'FAQ Hub', to: '/yawanawa/faq-hub'},
  {label: 'Contact', to: '/yawanawa/contact-support'},
];

export const yawaPages: YawaPage[] = [
  mkPage({
    slug: 'home',
    navLabel: 'Home',
    seoTitle: 'Yawanawá Tribe-Led Marketplace | Shop, Join, Give',
    metaDescription:
      'Official Yawanawá tribe-led marketplace and membership platform supporting families, cultural continuity, and Amazon forest stewardship.',
    h1: 'Shop, Support, and Belong — Directly with the Yawanawá People',
    category: 'core',
    narrative: [
      {
        title: 'A sovereign commerce flagship',
        body: [
          'The homepage introduces a complete support ecosystem: ethical marketplace purchasing, recurring Family Circle membership, and donation pathways designed for direct, transparent impact.',
          'Visitors can move from curiosity to contribution with confidence through contextual product storytelling, clear protocol language, and impact transparency modules.',
        ],
      },
      {
        title: 'One platform, three ways to support',
        body: [
          'Buy: approved public offerings linked to artisans, families, and cultural context.',
          'Join: recurring membership with first access, tribe-led updates, and deeper relationship pathways.',
          'Give: one-time or recurring forest and family support with transparent allocation updates.',
        ],
      },
    ],
    dynamicModule: {
      name: 'What brings you here?',
      purpose:
        'Personalized entry routing for first-time and returning supporters.',
      interactions: [
        'Choose: Buy products / Support families / Join membership / Learn / Track impact / Explore gatherings',
        'Receive a tailored 3-step path and recommended next page',
        'Persist selection in session for smart CTAs site-wide',
      ],
    },
    faq: [
      {
        q: 'Is this site directly run by the Yawanawá tribe?',
        a: 'Yes. The marketplace, story publishing, and support pathways are tribe-led and community-approved.',
      },
      {
        q: 'How do purchases support families and the forest?',
        a: 'Each category maps to family support and stewardship budgets, published in impact updates.',
      },
      {
        q: 'What is the membership?',
        a: 'Family Circle is a recurring support relationship with education, updates, first access, and approved future gathering pathways.',
      },
      {
        q: 'What kinds of products are available?',
        a: 'Approved artisan goods, contextual gifts, selected wearables, and legal public offerings with provenance notes.',
      },
      {
        q: 'Are all products publicly available?',
        a: 'No. Some items are contextualized, gated, members-context, or restricted.',
      },
      {
        q: 'How do I begin if I am new?',
        a: 'Start on Start Here, take the supporter quiz, then choose purchase, membership, or donation path.',
      },
    ],
  }),
  mkPage({
    slug: 'start-here',
    navLabel: 'Start Here',
    seoTitle: 'Start Here | Yawanawá Supporter Onboarding',
    metaDescription:
      'Find your best support path: first purchase, Family Circle membership, donation, learning, or approved gathering interest.',
    h1: 'Start Here: Choose the Support Path That Matches Your Intent',
    category: 'core',
  }),
  mkPage({
    slug: 'marketplace',
    navLabel: 'Marketplace',
    seoTitle: 'Yawanawá Marketplace | Tribe-Approved Offerings',
    metaDescription:
      'Browse tribe-approved categories with provenance, context, and direct support transparency.',
    h1: 'Marketplace: Approved Offerings, Context, and Direct Support',
    category: 'core',
  }),
  mkPage({
    slug: 'shop-by-category',
    navLabel: 'Shop by Category',
    seoTitle: 'Shop by Category | Yawanawá Marketplace',
    metaDescription:
      'Discover products by use, meaning, gifting path, and relationship depth.',
    h1: 'Shop by Category: Meaningful Browsing with Cultural Context',
    category: 'core',
  }),
  mkPage({
    slug: 'wearables-adornment',
    navLabel: 'Wearables & Adornment',
    seoTitle: 'Wearables & Adornment | Yawanawá Artisan Goods',
    metaDescription:
      'Explore public wearables and adornment with respectful context and gifting guidance.',
    h1: 'Wearables & Adornment: Public Offerings with Context',
    category: 'category',
  }),
  mkPage({
    slug: 'jewelry-beadwork-bracelets',
    navLabel: 'Jewelry, Beadwork & Bracelets',
    seoTitle: 'Yawanawá Jewelry and Beadwork',
    metaDescription:
      'Handmade beadwork, bracelets, and adornment tied to artisan stories and motif context.',
    h1: 'Jewelry, Beadwork & Bracelets: Story-Carrying Craft',
    category: 'category',
  }),
  mkPage({
    slug: 'ceremonial-clothing-textiles',
    navLabel: 'Ceremonial Clothing & Textiles',
    seoTitle: 'Ceremonial Clothing and Textiles | Yawanawá',
    metaDescription:
      'A high-context page describing public offerings, protected boundaries, and respectful purchase guidance.',
    h1: 'Ceremonial Clothing & Textiles: Context, Craft, and Boundaries',
    category: 'category',
  }),
  mkPage({
    slug: 'forest-remedies-approved-wellness',
    navLabel: 'Forest Remedies & Approved Wellness',
    seoTitle: 'Forest Remedies & Approved Wellness Offerings',
    metaDescription:
      'Legally compliant, tribe-approved public wellness offerings with protocol and shipping clarity.',
    h1: 'Forest Remedies & Approved Wellness Offerings',
    category: 'category',
  }),
  mkPage({
    slug: 'ritual-tools-approved-sacred-objects',
    navLabel: 'Ritual Tools & Approved Sacred Objects',
    seoTitle: 'Ritual Tools & Approved Sacred Objects | Yawanawá',
    metaDescription:
      'Careful public offerings with context cards, protocol notes, and educational pathways.',
    h1: 'Ritual Tools & Approved Sacred Objects',
    category: 'category',
  }),
  mkPage({
    slug: 'books-art-cultural-gifts',
    navLabel: 'Books, Art & Cultural Gifts',
    seoTitle: 'Books, Art & Cultural Gifts | Yawanawá',
    metaDescription:
      'Giftable educational products that connect learning, culture, and direct support.',
    h1: 'Books, Art & Cultural Gifts',
    category: 'category',
  }),
  mkPage({
    slug: 'membership-family-circle',
    navLabel: 'Membership / Family Circle',
    seoTitle: 'Yawanawá Family Circle Membership',
    metaDescription:
      'Recurring tribe-led support with first access, stories, impact reports, and relationship pathways.',
    h1: 'Yawanawá Family Circle: Membership as Relationship',
    category: 'support',
  }),
  mkPage({
    slug: 'donation-protect-the-forest',
    navLabel: 'Donation / Protect the Forest',
    seoTitle: 'Protect the Forest | Yawanawá Donations',
    metaDescription:
      'Direct one-time and recurring donation pathways supporting families, culture, and rainforest stewardship.',
    h1: 'Protect the Forest: Direct Giving with Transparency',
    category: 'support',
  }),
  mkPage({
    slug: 'meet-the-families-gatherings-immersions',
    navLabel: 'Meet the Families / Gatherings & Immersions',
    seoTitle: 'Meet the Families | Approved Gatherings and Immersions',
    metaDescription:
      'Relationship-first pathways to approved tribe-led gatherings and immersive learning experiences.',
    h1: 'Meet the Families: Approved Gatherings & Immersions',
    category: 'support',
  }),
  mkPage({
    slug: 'the-yawanawa-people',
    navLabel: 'The Yawanawá People',
    seoTitle: 'The Yawanawá People | Territory, Culture, Continuity',
    metaDescription:
      'A tribe-centered page on identity, territory, sovereignty, language, and future continuity.',
    h1: 'The Yawanawá People',
    category: 'story',
  }),
  mkPage({
    slug: 'impact-forest-stewardship',
    navLabel: 'Impact & Forest Stewardship',
    seoTitle: 'Impact & Forest Stewardship | Yawanawá',
    metaDescription:
      'See how commerce and support pathways protect forest territory and strengthen family continuity.',
    h1: 'Impact & Forest Stewardship',
    category: 'story',
  }),
  mkPage({
    slug: 'cultural-protocol-sacred-boundaries',
    navLabel: 'Cultural Protocol & Sacred Boundaries',
    seoTitle: 'Cultural Protocol & Sacred Boundaries | Yawanawá',
    metaDescription:
      'Understand public offerings, protected knowledge, and respectful participation protocols.',
    h1: 'Cultural Protocol & Sacred Boundaries',
    category: 'story',
  }),
  mkPage({
    slug: 'families-artisans-creators',
    navLabel: 'Families, Artisans & Creators',
    seoTitle: 'Families, Artisans & Creators | Yawanawá',
    metaDescription:
      'Meet makers and understand how products carry lineage, craft, and family stories.',
    h1: 'Families, Artisans & Creators',
    category: 'story',
  }),
  mkPage({
    slug: 'articles-stories-from-the-forest',
    navLabel: 'Articles / Stories from the Forest',
    seoTitle: 'Stories from the Forest | Yawanawá Articles',
    metaDescription:
      'Editorial hub for community updates, culture, stewardship, and approved product stories.',
    h1: 'Articles / Stories from the Forest',
    category: 'story',
  }),
  mkPage({
    slug: 'faq-hub',
    navLabel: 'FAQ Hub',
    seoTitle: 'FAQ Hub | Yawanawá Marketplace Support Center',
    metaDescription:
      'Filterable answers on products, shipping, protocol, membership, donations, impact, and gatherings.',
    h1: 'FAQ Hub: Searchable Trust Center',
    category: 'support',
  }),
  mkPage({
    slug: 'contact-support',
    navLabel: 'Contact / Support',
    seoTitle: 'Contact & Support | Yawanawá Platform',
    metaDescription:
      'Segmented support for product orders, membership, donations, partnerships, and gathering interest.',
    h1: 'Contact / Support',
    category: 'support',
  }),

  mkPage({
    slug: 'supporter-quiz',
    navLabel: 'What Kind of Supporter Are You?',
    seoTitle: 'What Kind of Supporter Are You? | Yawanawá Quiz',
    metaDescription:
      'Take the supporter quiz and get a personalized route: shop, join, donate, learn, or gather.',
    h1: 'What Kind of Supporter Are You?',
    category: 'guide',
  }),
  mkPage({
    slug: 'membership-vs-purchase-vs-donation',
    navLabel: 'Membership vs Purchase vs Donation',
    seoTitle: 'Membership vs One-Time Purchase vs Donation',
    metaDescription:
      'Compare support paths by impact cadence, relationship depth, and best next step.',
    h1: 'Membership vs One-Time Purchase vs Donation',
    category: 'guide',
  }),
  mkPage({
    slug: 'how-your-purchase-helps',
    navLabel: 'How Your Purchase Helps',
    seoTitle: 'How Your Purchase Helps | Yawanawá Impact',
    metaDescription:
      'Understand exactly how each order contributes to families, culture, and forest stewardship.',
    h1: 'How Your Purchase Helps',
    category: 'guide',
  }),
  mkPage({
    slug: 'gift-guide',
    navLabel: 'Gift Guide',
    seoTitle: 'Yawanawá Gift Guide | Respectful Cultural Gifting',
    metaDescription:
      'Find meaningful, context-rich gifts by recipient, occasion, and relationship depth.',
    h1: 'Gift Guide: Meaningful Gifts with Origin',
    category: 'guide',
  }),
  mkPage({
    slug: 'first-order-guide',
    navLabel: 'First Order Guide',
    seoTitle: 'First Order Guide | Yawanawá Marketplace',
    metaDescription:
      'A step-by-step first order guide with category recommendations, protocol tips, and support options.',
    h1: 'First Order Guide',
    category: 'guide',
  }),

  mkPage({
    slug: 'yawanawa-tribe-marketplace',
    navLabel: 'Yawanawá Tribe Marketplace',
    seoTitle: 'Yawanawá Tribe Marketplace | Official Source',
    metaDescription:
      'Official evergreen page for Yawanawá tribe products, story-led commerce, and direct support.',
    h1: 'Yawanawá Tribe Marketplace',
    category: 'evergreen',
  }),
  mkPage({
    slug: 'indigenous-led-marketplace-supporting-the-amazon',
    navLabel: 'Indigenous-Led Marketplace Supporting the Amazon',
    seoTitle: 'Indigenous-Led Marketplace Supporting the Amazon',
    metaDescription:
      'Evergreen guide to tribe-led commerce supporting families, sovereignty, and rainforest protection.',
    h1: 'Indigenous-Led Marketplace Supporting the Amazon',
    category: 'evergreen',
  }),

  ...[
    'why-buying-directly-from-the-yawanawa-matters',
    'how-tribe-led-commerce-protects-culture-and-forest',
    'difference-between-donation-membership-and-purchase',
    'what-respectful-cultural-commerce-looks-like',
    'how-products-carry-story-family-and-forest',
    'why-membership-means-more-than-discounts',
    'gifts-with-origin-what-makes-a-purchase-meaningful',
    'the-forest-the-families-and-the-future',
    'how-to-begin-a-respectful-relationship-with-the-marketplace',
    'why-sovereignty-must-stay-at-the-center-of-indigenous-commerce',
  ].map((slug, idx) =>
    mkPage({
      slug,
      navLabel: `Blog ${idx + 1}`,
      seoTitle: `Stories from the Forest: ${slug.replaceAll('-', ' ')}`,
      metaDescription:
        'SEO article focused on tribe-led commerce, cultural context, and direct support pathways.',
      h1: [
        'Why Buying Directly from the Yawanawá Matters',
        'How Tribe-Led Commerce Protects Culture and Forest',
        'The Difference Between Donation, Membership, and Purchase',
        'What Respectful Cultural Commerce Looks Like',
        'How Products Carry Story, Family, and Forest',
        'Why Membership Means More Than Discounts',
        'Gifts with Origin: What Makes a Purchase Meaningful',
        'The Forest, the Families, and the Future',
        'How to Begin a Respectful Relationship with the Yawanawá Marketplace',
        'Why Sovereignty Must Stay at the Center of Indigenous Commerce',
      ][idx],
      category: 'blog',
    }),
  ),
];

export const yawanawaBySlug = new Map(yawaPages.map((p) => [p.slug, p]));

export const infographicLibrary = [
  'The Yawanawá Ecosystem',
  'One Platform, Three Ways to Support',
  'Supporter Pathway Map',
  'Marketplace Ecosystem',
  'Product / Membership / Donation Relationship',
  'Wearables & Adornment Framework',
  'Jewelry & Beadwork Ecosystem',
  'Public Product vs Restricted Sacred Item Logic',
  'Cultural Gifts Ecosystem',
  'Membership Value Stack',
  'Family + Forest Support Flow',
  'Relationship Ladder',
  'Yawanawá Identity Framework',
  'Forest Stewardship Ecosystem',
  'Cultural Respect Framework',
  'Family / Artisan Ecosystem',
];

export const kpiArchitecture = [
  'Marketplace conversion rate by category and traffic source.',
  'Average order value segmented by gift, personal, and educational purchasing intent.',
  'Membership conversion rate from quiz, impact pages, and product pages.',
  'Recurring donation start rate and 90-day retention.',
  'Gift-guide conversion and assisted conversion.',
  'First-order guide completion and first purchase lag time.',
  'Where your money goes engagement depth.',
  'Impact page assisted conversion to donation or membership.',
  'Membership-to-gathering interest conversion.',
  'Repeat purchase rate and first-access signup rate.',
  'Cultural-context accordion engagement on product pages.',
  'Donation calculator interactions and completed gifts.',
  'Article-to-purchase and article-to-membership conversion.',
];
