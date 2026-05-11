// ============================================
// SITE CONFIGURATION
// ============================================

export const siteConfig = {
  // ============================================
  // BOUTIQUES API (set PUBLIC_BOUTIQUES_API env var to enable)
  // ============================================
  boutiquesApi: import.meta.env.PUBLIC_BOUTIQUES_API || '',

  // ============================================
  // SITE METADATA & SEO
  // ============================================
  site: {
    name: 'TailorDost',
    title: 'TailorDost - Boutique Order Management Made Simple',
    description:
      'Manage custom garment orders, customer measurements, fabric tracking, and payments all in one place. The complete platform for boutique owners who take custom clothing orders.',
    keywords:
      'boutique management, custom garment orders, tailoring software, measurement tracking, order management, boutique owner app',
    email: 'contact@tailordost.in',

    // Open Graph / Twitter
    ogTitle: 'TailorDost - Custom Garment Order Management for Boutiques',
    ogDescription:
      'From measurements to delivery — manage every custom order with clarity and ease.',
    twitterCard: 'summary_large_image',
    twitterTitle: 'TailorDost',
    twitterDescription: 'Complete boutique order management solution',
  },

  // ============================================
  // NAVIGATION
  // ============================================
  navigation: {
    links: [
      { name: 'Features', href: '#features' },
      { name: 'How It Works', href: '#how-it-works' },
      // { name: 'Pricing', href: '#pricing' },
      { name: 'FAQ', href: '#faq' },
    ],
    cta: {
      text: 'Get Started',
      href: '#contact',
    },
  },

  // ============================================
  // HERO SECTION
  // ============================================
  hero: {
    headline: 'Boutique Order Management',
    subheadline: 'From Measurement to Delivery',
    description:
      'Run your boutique without the paperwork. Capture customer measurements, track fabric and design references, monitor stitching progress, and manage payments — all in one organized platform built for boutique owners.',
    cta: {
      primary: {
        text: 'Get Started Free',
        href: '#contact',
      },
      secondary: {
        text: 'See How It Works',
        href: '#how-it-works',
      },
    },
    stats: [
      { value: '500+', label: 'Boutiques Using TailorDost' },
      { value: '5000+', label: 'Happy Customers' },
      { value: '99.9%', label: 'Uptime' },
    ],
  },

  // ============================================
  // FEATURES SECTION
  // ============================================
  features: {
    title: 'Everything You Need to Run Your Boutique',
    subtitle:
      'Purpose-built tools that handle the full custom garment lifecycle — from the first customer visit to final delivery.',
    items: [
      { icon: 'layers', title: 'Customer Directory' },
      { icon: 'chart', title: 'Business Dashboard' },
      { icon: 'clock', title: 'Order Progress Tracking' },
      { icon: 'brush', title: 'Design Reference Management' },
      { icon: 'code', title: 'Measurement Recording' },
      { icon: 'shield', title: 'Billing & Payments' },
      { icon: 'lightning', title: 'Fabric Tracking' },
      { icon: 'chat', title: 'Photo Documentation' },
      { icon: 'link', title: 'Customer Tracking Links' },
      { icon: 'team', title: 'Tailor Team Access' },
    ],
  },

  // ============================================
  // HOW IT WORKS
  // ============================================
  howItWorks: {
    title: 'How TailorDost Works',
    subtitle: 'A simple, repeatable workflow for every custom order you take',
  },

  // ============================================
  // TESTIMONIALS
  // ============================================
  testimonials: {
    title: 'Trusted by Boutique Owners',
    subtitle: 'See what boutique owners and tailors have to say about TailorDost',
  },

  // ============================================
  // PRICING
  // ============================================
  pricing: {
    title: 'Simple, Transparent Pricing',
    subtitle:
      'Choose the plan that fits your boutique. Upgrade or cancel any time.',
    plans: [
      {
        name: 'Starter',
        price: '₹999',
        period: '/month',
        description: 'Perfect for solo boutique owners just getting started',
        features: [
          'Up to 50 active orders',
          'Customer directory',
          'Measurement recording',
          'Order progress tracking',
          'Photo uploads',
          'Email support',
        ],
        cta: {
          text: 'Get Started',
          href: '#contact',
        },
        featured: false,
      },
      {
        name: 'Professional',
        price: '₹2,499',
        period: '/month',
        description: 'For growing boutiques managing high order volumes',
        badge: 'MOST POPULAR',
        features: [
          'Unlimited active orders',
          'Full customer profiles & history',
          'Design reference & fabric tracking',
          'Billing & payment tracking',
          'Business dashboard & reports',
          'Priority support',
        ],
        cta: {
          text: 'Start Free Trial',
          href: '#contact',
        },
        featured: true,
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        period: '',
        description: 'Self-hosted solution for boutique chains and franchises',
        features: [
          'Unlimited orders & customers',
          'Multi-location support',
          'Self-hosted on your servers',
          'Complete data ownership',
          'Custom integrations',
          'Dedicated account manager',
          'Custom training & onboarding',
          'Priority support',
          'API access',
        ],
        cta: {
          text: 'Contact Sales',
          href: '#contact',
        },
        featured: false,
      },
    ],
  },

  // ============================================
  // FAQ
  // ============================================
  faq: {
    title: 'Frequently Asked Questions',
    subtitle: 'Everything you need to know about TailorDost',
  },

  // ============================================
  // CONTACT
  // ============================================
  contact: {
    title: 'Start Managing Orders the Smart Way',
    subtitle:
      'Join hundreds of boutique owners using TailorDost to stay organized, delight customers, and grow their business. Get started in minutes.',
    benefits: [
      'Free 14-day trial',
      'Setup in under 10 minutes',
      'No credit card required',
      'Dedicated onboarding support',
    ],
    email: 'contact@tailordost.in',
    phone: '+123456',
    salesTeam: [
      { name: 'Sales1', phone: '+123456', email: 'sales1@tailordost.in' },
      { name: 'Sales2', phone: '+654321', email: 'sales2@tailordost.in' },
    ],
    form: {
      cta: 'Get Started Free',
      fields: {
        name: {
          label: 'Full Name',
          placeholder: 'Priya Sharma',
          required: true,
        },
        email: {
          label: 'Work Email',
          placeholder: 'priya@yourboutique.com',
          required: true,
        },
        company: {
          label: 'Boutique Name',
          placeholder: 'Your Boutique Name',
          required: false,
        },
        message: {
          label: 'Tell us about your boutique',
          placeholder: 'Number of orders per month, garment types, key challenges...',
          required: false,
        },
      },
    },
  },

  // ============================================
  // FOOTER
  // ============================================
  footer: {
    tagline:
      'Purpose-built boutique management for custom garment professionals. Every order, perfectly organized.',
    columns: [
      {
        title: 'Product',
        links: [
          { name: 'Features', href: '#features' },
          // { name: 'Pricing', href: '#pricing' },
          { name: 'How It Works', href: '#how-it-works' },
        ],
      },
      {
        title: 'Company',
        links: [
          { name: 'About Us', href: '#' },
          { name: 'Case Studies', href: '#' },
          { name: 'Contact', href: '#contact' },
        ],
      },
    ],
    copyright: `${new Date().getFullYear()} TailorDost. All rights reserved.`,
  },
};
