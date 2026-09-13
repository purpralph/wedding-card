// All website copy/content organized by section
// This makes it easy to update text without touching components

import { WEDDING } from '$lib/constants';

export const COPY = {
  // Meta / SEO
  meta: {
    title: `${WEDDING.couple.initials} — Wedding`,
    description: `Join ${WEDDING.couple.full} for their wedding celebration`,
  },

  // Navigation
  nav: {
    home: 'Home',
    aboutUs: 'Our Story',
    wedding: 'Wedding',
    venue: 'Venue',
    faqs: 'FAQs',
    rsvp: 'RSVP',
  },

  // Footer
  footer: {
    message: 'Made with',
    icon: 'ph:heart-fill',
    byLabel: ' · template',
    names: `by ${WEDDING.couple.full}`,
    linkHref: 'https://github.com/jordyjwilliams/wedding-website-template',
  },

  // Most tooltips can be written in place
  // This contains definitions for more complex (or reusable) tooltips.
  inlineTooltips: {
    meeting: `Share a fun detail about how you met — guests love these little extras.`,
    proposal: `Add a short note about the proposal here if you want.`,
  },

  // Hero Section
  hero: {
    eyebrow: 'are getting married',
    ctaButton: 'RSVP Now →',
  },

  // Our Story Section
  about: {
    title: 'Our Story',
    emoji: '',
    intro: 'Replace this intro with how your story began...',
    overviewTitle: '',
    storySectionsTitle: 'Chapters of Our Journey',
    loveFactsTitle: 'The Highlights Reel',

    story: `This is your **love story** placeholder.\n\n
    Start with how you met, then walk guests through the moments that matter most —
    first trips, meeting the families, moving in together, and the [proposal](tooltip:proposal).\n\n
    Keep it warm and personal. Guests who know you will love the details;
    guests who don't will feel like they already belong.`,

    storySections: {
      entries: {
        chapterOne: {
          title: 'Chapter One • How We Met',
          icon: 'ph:heart',
          imageSrc: '/images/our-story-scroll-placeholder.webp',
          imageAlt: 'How we met — replace with your photo',
          overview: 'Where it all began.',
          description: `Share the story of your [first meeting](tooltip:meeting).`,
          bullets: [
            `**When** and **where** you first crossed paths.`,
            `A memorable detail guests will smile at.`,
            `The moment you knew this might be something special.`,
          ],
        },
        chapterTwo: {
          title: 'Chapter Two • Growing Together',
          icon: 'ph:airplane-tilt',
          imageSrc: '/images/our-story-scroll-placeholder.webp',
          imageAlt: 'Adventures together — replace with your photo',
          overview: 'Adventures, milestones, and everyday magic.',
          description: `Trips, traditions, and the in-between moments that built your life together.`,
          bullets: [
            `A favourite trip or shared hobby.`,
            `Meeting each other's families and friends.`,
            `The chapter where "us" started to feel like home.`,
          ],
        },
        chapterThree: {
          title: 'Chapter Three • The Proposal',
          icon: 'ph:ring',
          imageSrc: '/images/our-story-scroll-placeholder.webp',
          imageAlt: 'The proposal — replace with your photo',
          overview: 'The easiest yes.',
          description: `Tell guests how the proposal unfolded — the place, the nerves, the joy.`,
          bullets: [
            `Where it happened.`,
            `A detail only the two of you would notice.`,
            `Looking ahead to celebrating with everyone you love.`,
          ],
        },
      },
    },
  },

  // Wedding Details Section
  weddingDetails: {
    title: 'Wedding Weekend',
    emoji: '',
    intro: `Celebrate with us at [${WEDDING.venue.name}](/venue).\n\n
    We're planning a warm, joyful weekend with time to reconnect with friends and family.\n\n
    More schedule details are below — and the [FAQs](/faqs) cover logistics.`,
    ctaText: 'Want to learn more about our event, or have questions?',
    ctaButton: 'Check out our FAQs',
  },

  // FAQ Section
  faq: {
    title: 'FAQ',
    emoji: '',
    intro:
      "We've put together answers to questions we think you might have. More details will be added as plans firm up.",
    contact: {
      title: '',
      content: `Can't find the answer you're looking for? Drop us a line below.`,
      icon: undefined,
    },
    questionData: {
      general: {
        title: 'General Info',
        icon: 'ph:info-bold',
        description: `If you're reading this, you probably have a few questions.\n\n
        We hope a section below will answer them — if not, please [reach out](#contact).`,
        bullets: [
          `**Meals** Provided on site from [Friday evening](/wedding#friday) through [Sunday morning](/wedding#sunday).`,
          `**Weekend** The ceremony is on [Saturday](/wedding#saturday); stay for as much (or as little) of the weekend as you'd like.`,
          '**Parking** Free on-site parking for guests. See [Getting There](#transport) for travel tips.',
        ],
      },
      accommodation: {
        title: 'Accommodation',
        icon: 'ph:house-bold',
        description: `We would love to have you stay close to the celebration.\n\n
        Message us with any questions — contact details are [below](#contact).`,
        bullets: [
          `**On-site:** Indicate your preference in the [RSVP form](/rsvp).`,
          `**Off-site:** Nearby hotels and rentals are listed under [alternatives](#accommodationAlternatives).`,
          `**Priority:** International and long-distance guests first when space is limited.`,
        ],
      },
      dressCode: {
        title: 'Dress Code',
        icon: 'ph:high-heel-bold',
        description: `We want the day to feel special — dress to celebrate with us.`,
        bullets: [
          '[Ceremony & Reception](/wedding#saturday): Cocktail attire.',
          `**Footwear tip:** The ceremony is outdoors on grass — avoid stilettos.`,
          `**Rest of the weekend:** Casual and comfortable.`,
          `**Weather:** Pack layers — conditions can change through the day. See [weather](#weather).`,
        ],
      },
      weather: {
        title: 'Weather',
        icon: 'ph:cloud-sun-bold',
        description: `Expect mild weather with a chance of breeze or showers — pack layers just in case.`,
        bullets: [
          `**Day of:** Check a local forecast closer to the date.`,
          `**Tip:** A light jacket or wrap is often welcome in the evening.`,
          '**Rain plan:** Umbrellas / light raincoats are smart backups.',
        ],
      },
      kids: {
        title: 'Kids',
        icon: 'ph:baby-carriage-bold',
        description: `Children are welcome if that works for your family.\n\n
        Please [reach out](#contact) if you want to discuss specific needs.`,
        bullets: [
          '**Childcare:** No formal childcare is planned at this stage.',
          `**Parents:** Let us know if you're bringing little ones.`,
          '**Venue:** There is space to explore, but no dedicated kids programme.',
        ],
      },
      plusOne: {
        title: 'Plus Ones',
        icon: 'ph:hand-heart-bold',
        description: `Your partner or significant other is likely included on your invitation.\n\n
        If someone was missed, please [ask us](#contact) directly.`,
        bullets: [
          `**Extras:** Ask before adding anyone not named on your invitation.`,
          `**RSVP:** You can respond once for your party, or individually — whichever is easier.`,
        ],
      },
      packing: {
        title: 'Packing',
        icon: 'ph:backpack-bold',
        description: `Think comfort first, with a touch of celebration polish.`,
        bullets: [
          '**Clothes:** See [dress code](#dressCode) and [weather](#weather).',
          '**Essentials:** Layers, sun protection, and comfortable shoes.',
          `**Travel docs:** Passport / visa checks if you're travelling internationally.`,
        ],
      },
      transport: {
        title: 'Getting There',
        icon: 'ph:car-bold',
        description: `${WEDDING.venue.name} is at ${WEDDING.venue.fullAddress}.\n\n
        Plan ahead for travel — especially if you're coming from further afield.`,
        bullets: [
          `**By car:** Usually the simplest option. Share rides when you can.`,
          `**Public transport:** Check local options closer to the date.`,
          `**Need a lift?** Note it on your [RSVP](/rsvp) and we'll help connect guests.`,
          `**Parking:** Free on-site parking is available.`,
        ],
      },
      gifts: {
        title: 'Gifts',
        icon: 'ph:gift-bold',
        description: `Your presence is the greatest gift.`,
        bullets: [
          `**Truly:** Being there means the world to us.`,
          `If you still wish to give something, we'll share details closer to the day.`,
        ],
      },
      accommodationAlternatives: {
        title: 'Accommodation Alternatives',
        icon: 'ph:bed-bold',
        description: `Prefer to stay off-site? No problem.`,
        bullets: [
          `**Search tip:** Look near ${WEDDING.venue.address} for hotels and short stays.`,
          `**Timing:** Book early around the wedding weekend.`,
        ],
      },
      thingsToDo: {
        title: 'Things to Do',
        icon: 'ph:map-pin-area-bold',
        description: `If you're making a trip of it, here are a few ideas near the venue.`,
        bullets: [
          `Explore local sights around ${WEDDING.venue.address}.`,
          `Ask us for personal favourites — we'd love to help you plan.`,
        ],
      },
      contact: {
        title: 'Still Got Questions?',
        icon: 'ph:question-bold',
        description: `If anything is still unclear, reach out — we're happy to help.`,
        bullets: [
          '**Read** this FAQ section first.',
          '**Then** contact us using the details below.',
        ],
      },
    },
  },

  // Venue Section
  venue: {
    title: WEDDING.venue.name,
    emoji: '',
    intro: WEDDING.venue.description,

    features: {
      accommodation: {
        icon: 'ph:house',
        title: 'Accommodation',
        description: `If you would like to stay nearby or on site, let us know in the [RSVP section](/rsvp).\n\n
          Nearby options are listed in our [FAQs](/faqs#accommodationAlternatives).\n\n
          Meals and drinks are included for the wedding weekend where noted.`,
      },
      views: {
        icon: 'ph:mountains',
        title: 'Scenic Views',
        description: `Beautiful grounds and photo-worthy corners throughout the property —
        perfect for quiet moments and celebration shots alike.`,
      },
      spaces: {
        icon: 'ph:champagne',
        title: 'Celebration Spaces',
        description: `Indoor and outdoor areas for the ceremony, drinks, dinner, and dancing —
        designed so the whole weekend can unfold comfortably.`,
      },
      grounds: {
        icon: 'ph:tree',
        title: 'Beautiful Grounds',
        description: `Wander the grounds between events. For nearby things to do, see our [FAQs](/faqs#thingsToDo).`,
      },
    },

    ctaText: 'Want to learn more about this venue?',
    ctaButton: `Explore ${WEDDING.venue.name}`,
    faqText: 'Got further questions about the venue or logistics?',
    faqButton: `See our FAQs`,
  },

  // RSVP Section
  rsvp: {
    title: 'RSVP',
    emoji: '',
    intro: `We'd love to know if you can join us!\n\n
      If you're unsure, give your best answer for now — plans can change.\n\n
      Please RSVP (and keep us in the loop) as soon as you know.`,

    form: {
      name: {
        label: 'Your Name',
        placeholder: 'Enter your full name',
        firstNameLabel: 'First Name',
        firstNamePlaceholder: 'First name',
        lastNameLabel: 'Last Name',
        lastNamePlaceholder: 'Last name',
      },
      email: {
        label: 'Email Address',
        placeholder: 'your@email.com',
      },
      attending: {
        label: 'Will you be attending?',
        hint: `We understand this can be a big commitment. Plans change — just keep us updated.`,
        yes: "Yes, I'll be there!",
        no: "Sorry, can't make it",
        placeholder: 'Do you want to come...',
        errorRequired: 'Please select whether you are attending before submitting.',
      },
      travelPlans: {
        label: 'How are you thinking of getting to the venue?',
        hint: 'Select all that may apply — no commitment needed.',
        errorRequired: 'Please select at least one travel option before submitting.',
        options: [
          { value: 'own-car', label: 'Driving (own car)', icon: 'ph:car-bold' },
          { value: 'hire-car', label: 'Hiring / renting a car', icon: 'ph:key-bold' },
          { value: 'shuttle', label: 'Interested in a shuttle / shared ride', icon: 'ph:bus-bold' },
          { value: 'carpool', label: 'Open to carpooling', icon: 'ph:users-three-bold' },
          {
            value: 'public-transport',
            label: 'Public transport',
            icon: 'ph:train-bold',
          },
          { value: 'not-sure', label: 'Not sure yet / TBD', icon: 'ph:question-bold' },
        ],
      },
      selectYesNoQuestions: [
        {
          key: 'fridayEveningBbq',
          label: 'Will you join Friday evening welcome drinks / BBQ?',
          hint: 'Casual kickoff to the weekend — encouraged if you can make it.',
          yesIcon: 'ph:fork-knife',
          noIcon: 'ph:x',
          yes: "Yes, I'll be there",
          no: 'Not this time',
          placeholder: 'Join Friday evening?',
          errorRequired: 'Please answer this question before submitting.',
          triggerId: 'friday-evening-bbq-trigger',
        },
        {
          key: 'sundayRecoveryBreakfast',
          label: 'Sunday morning brunch?',
          hint: `Helps us plan catering — let us know if you'll stick around Sunday morning.`,
          yesIcon: 'ph:coffee',
          noIcon: 'ph:x',
          yes: "Yes, I'll stay for brunch",
          no: 'Heading off earlier',
          placeholder: 'Join Sunday brunch?',
          errorRequired: 'Please answer this question before submitting.',
          triggerId: 'sunday-recovery-breakfast-trigger',
        },
        {
          key: 'stayingOnSite',
          label: 'Will you be staying on site / nearby with the group?',
          hint: 'Helps us plan rooms and numbers. Priority may go to long-distance guests.',
          yesIcon: 'ph:house',
          noIcon: 'ph:map-pin',
          yes: 'Yes, please',
          no: 'Staying elsewhere',
          placeholder: 'Staying with the group?',
          errorRequired: 'Please answer this question before submitting.',
          triggerId: 'staying-on-site-trigger',
        },
      ],
      guests: {
        label: 'Number of Guests (including yourself)',
        hint: `Unsure about plus-ones? Set 1 for now and note extras in the message field.`,
        description: 'Including yourself',
        additionalNamesLabel: 'Additional Guest Full Name(s)',
        additionalNamePlaceholderPrefix: 'Guest',
        additionalNamesRequired: 'Please add the full name for each additional guest.',
      },
      phone: {
        label: 'Phone Number',
        hint: 'Include country code for international numbers.',
        placeholder: '+1 XXX XXX XXXX',
        error: 'Please enter a valid mobile number with country code',
        errorRequired: 'Please enter a valid mobile number before submitting',
      },
      dietary: {
        label: 'Dietary Requirements or Allergies?',
        placeholder: 'Let us know any dietary needs or allergies we should plan for',
      },
      message: {
        label: 'Message for the Couple',
        placeholder: 'Share your excitement, request a song, or leave us a note...',
      },
      submit: 'Send RSVP',
      submitting: 'Sending...',
    },

    success: {
      title: 'RSVP Received!',
      attending:
        "Thank you! We're so excited to celebrate with you. You'll receive a confirmation email shortly.",
      notAttending:
        "Thank you for letting us know. We'll miss celebrating with you in person and really appreciate your RSVP.",
    },

    error: {
      title: 'Oops!',
      message: 'Something went wrong. Please try again or contact us directly.',
      timeout:
        'Request timed out. Please check your internet connection and try again, or contact us directly.',
      submitFailed: 'Something went wrong. Please try again or contact us directly.',
    },

    contact: {
      title: 'Need Help?',
      description:
        "If you have trouble with the form, feel free to email or text us and we'll add your details manually.",
      bride: WEDDING.couple.bride,
      groom: WEDDING.couple.groom,
    },
  },

  // Login/Passcode Page
  login: {
    eyebrow: 'are getting married!',
    welcome: `We're so excited to celebrate with you at \n\n${WEDDING.venue.displayShort}\n\n·\n\nEnter the passcode from your invitation.`,
    privacy: 'This keeps our special day a little more private',
    placeholder: 'Enter passcode',
    submit: 'Enter Site',
    submitting: 'Verifying...',

    errors: {
      incorrect:
        "Hmm, that code doesn't look quite right.\n\nCheck your invitation; (password is case-sensitive)\n\nPlease try again.",
      connection: 'Connection error. Please try again.',
      tooManyRequests: 'You have tried too many times.\n\nPlease wait a bit and try again.',
    },
  },
} as const;
