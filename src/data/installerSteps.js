// =========================================================
// INSTALLER STEPS
// =========================================================
//
// Data ini menjadi single source of truth untuk:
//
// - InstallerTree
// - InstallerContent
// - Wizard navigation
//
// Jangan taruh JSX di file ini.
// =========================================================

export const installerSteps = [
  {
    id: 'profile',
    title: 'Profile',
    type: 'section',

    content: {
      eyebrow: 'About',
      heading: 'Profile',
      description:
        'An introduction to Perdana Kurniawan Arta, his background, and the way he approaches design.',
    },
  },

  {
    id: 'experience',
    title: 'Experience',
    type: 'section',

    content: {
      eyebrow: 'About',
      heading: 'Experience',
      description:
        'A timeline of experience across visual design, product design, and digital work.',
    },
  },

  {
    id: 'visual-systems',
    title: 'Visual Systems',
    type: 'section',

    content: {
      eyebrow: 'Practice',
      heading: 'Visual Systems',
      description:
        'Exploring iconography, illustration, visual language, and scalable design systems.',
    },
  },

  {
    id: 'product-design',
    title: 'Product Design',
    type: 'section',

    content: {
      eyebrow: 'Practice',
      heading: 'Product Design',
      description:
        'Understanding problems, users, structure, interaction, and the resulting experience.',
    },
  },

  {
    id: 'design-engineering',
    title: 'Design Engineering',
    type: 'section',

    content: {
      eyebrow: 'Practice',
      heading: 'Design Engineering',
      description:
        'Combining design thinking with front-end development to design, build, test, and ship.',
    },
  },

  {
    id: 'approach',
    title: 'Approach',
    type: 'section',

    content: {
      eyebrow: 'Principles',
      heading: 'Approach',
      description:
        'A practical approach to understanding problems, designing for people, making things work, and shipping.',
    },
  },
];

export default installerSteps;