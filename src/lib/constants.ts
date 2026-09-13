// Wedding event constants — customize these first

export const WEDDING = {
  // Couple names
  // NOTE: internally these are "bride" and "groom" for ease of use in copy
  // Feel free to change the labels/values for your celebration
  couple: {
    bride: 'Alex',
    groom: 'Jordan',
    full: 'Alex & Jordan',
    initials: 'A & J',
  },

  // Dates
  dates: {
    start: '2027-06-18',
    end: '2027-06-20',
    ceremony: '2027-06-19',
    // Update ceremony time for the countdown (ISO 8601 with timezone)
    ceremonyDateTime: '2027-06-19T16:00:00+10:00',
    displayFull: '18th – 20th June 2027',
    displayDay1: '18th June 2027',
    displayDay2: '19th June 2027',
    displayDay3: '20th June 2027',
  },

  // Countdown
  countdown: {
    isPastTarget: 'Til death do us part!',
    isNotPastTarget: 'Time until I do',
  },

  // Venue
  venue: {
    name: 'Seaside Gardens',
    address: 'Coastal Town, Region',
    fullAddress: '100 Garden Lane, Coastal Town, Region, Country',
    displayShort: 'Seaside Gardens — Coastal Town',
    description:
      'A beautiful venue with scenic views and warm spaces for celebrating with family and friends. Replace this description with your venue details.',
    website: 'https://example.com',
  },

  // Contact
  contact: {
    groom: {
      email: 'jordan@example.com',
      phone: '+00 000 000 000',
    },
    bride: {
      email: 'alex@example.com',
      phone: '+00 000 000 001',
    },
  },
} as const;

export const RSVP_LIMITS = {
  guestCountMin: 1,
  guestCountMax: 5, // Including main guest
} as const;

// Love story facts shown on Our Story
export const LOVE_FACTS = [
  {
    icon: 'ph:heart',
    animation: 'pulse',
    label: 'How We Met',
    bullets: [
      `**First hello**: Replace with your meeting story.`,
      `**Spark**: A fun detail guests will remember.`,
      `**Hint**: You can add [tooltips](tooltip:meeting) for extra flavour.`,
    ],
  },
  {
    icon: 'ph:airplane-tilt',
    animation: 'pulse',
    label: 'Adventures',
    text: 'List a few places or milestones you have shared together.',
  },
  {
    icon: 'ph:ring',
    animation: 'pulse',
    label: 'The Proposal',
    text: 'Share where or how the proposal happened.',
  },
] as const;

// Timeline events (Wedding weekend page)
export const TIMELINE_EVENTS = [
  {
    dayLabel: 'Friday',
    title: 'Arrival & Welcome',
    date: WEDDING.dates.displayDay1,
    description:
      "Arrive, settle in, and take a breath. We'll host a casual welcome drink in the evening so everyone can mingle and relax.",
    bullets: [
      '**Check-in** opens from 2:00 PM',
      '**Welcome Drinks:** from 6:00 PM',
      '**Need Directions?** See [venue details](/venue)',
    ],
    isHighlight: false,
  },
  {
    dayLabel: 'Saturday',
    title: 'Ceremony & Celebration',
    date: WEDDING.dates.displayDay2,
    description:
      'The ceremony will be held on the grounds, followed by drinks, dinner, and dancing into the evening.',
    bullets: [
      'Ceremony begins at 4:00 PM',
      'Cocktail hour and canapés after vows',
      'Dinner, speeches, then the dance floor opens',
    ],
    isHighlight: true,
  },
  {
    dayLabel: 'Sunday',
    title: 'Slow Goodbyes',
    date: WEDDING.dates.displayDay3,
    description:
      "Sleep in, grab a coffee, and enjoy a simple brunch before saying goodbye. Safe travels home.",
    bullets: [
      'Casual brunch from 9:30 AM',
      'Check-out by 11:00 AM unless arranged otherwise',
      'Browse common questions in [FAQs](/faqs)',
    ],
    isHighlight: false,
  },
] as const;

// Ceremony timeline
export const CEREMONY_TIMELINE = [
  { icon: 'ph:sun-horizon-fill', time: '4:00 PM', event: 'Ceremony' },
  { icon: 'ph:champagne', time: '5:30 PM', event: 'Cocktail Hour' },
  { icon: 'ph:fork-knife-fill', time: '7:00 PM', event: 'Dinner' },
  { icon: 'ph:music-notes-fill', time: '9:00 PM', event: 'Dancing' },
] as const;
