import { FaqItem, Testimonial } from './types';

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Will these plans pass in my city?",
    answer: "Yes. Our plans are designed to the International Residential Code (IRC) 2021 standards, which are adopted by 49 out of 50 states. While every local municipality has specific zoning quirks, the structural engineering is valid nationwide. We include a 'Permit Submission Guide' to help you navigate your local office."
  },
  {
    question: "Do these plans come with a stamp?",
    answer: "The plans in this bundle are 'Architectural & Structural Concept Sets' designed by a PE. If your specific city requires a 'Wet Stamp' (an original signature on physical paper for your specific address), we provide a discount code inside to get that service for 50% off standard rates. However, many rural counties accept these plans as-is for owner-builder permits."
  },
  {
    question: "What is the difference between these and free plans online?",
    answer: "Free or cheap plans are usually just floor plans (pretty pictures). They lack structural details, load paths, framing schedules, and connection details. Without these, a building inspector will shut down your job site immediately. Our plans are 'Builder-Ready' technical documents."
  },
  {
    question: "What happens after I buy?",
    answer: "You will receive an immediate email with a secure download link to a ZIP file containing 30 individual PDF folders, plus the bonus material lists and Excel calculators."
  }
];

export const STATES = [
  { code: 'TX', name: 'Texas' },
  { code: 'CO', name: 'Colorado' },
  { code: 'FL', name: 'Florida' },
  { code: 'GA', name: 'Georgia' },
  { code: 'VA', name: 'Virginia' },
  { code: 'MD', name: 'Maryland' },
  { code: 'MI', name: 'Michigan' },
  { code: 'AZ', name: 'Arizona' },
  { code: 'DC', name: 'District of Columbia' },
  { code: 'NC', name: 'North Carolina' },
  { code: 'NV', name: 'Nevada' },
  { code: 'OH', name: 'Ohio' },
  { code: 'LA', name: 'Louisiana' },
  { code: 'WA', name: 'Washington' },
  { code: 'CT', name: 'Connecticut' },
  { code: 'TN', name: 'Tennessee' },
  { code: 'NJ', name: 'New Jersey' },
  { code: 'OK', name: 'Oklahoma' },
  { code: 'PA', name: 'Pennsylvania' },
  { code: 'ME', name: 'Maine' },
  { code: 'RI', name: 'Rhode Island' },
  { code: 'MA', name: 'Massachusetts' },
  { code: 'SC', name: 'South Carolina' },
  { code: 'NY', name: 'New York' },
  { code: 'CA', name: 'California' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Mark Thompson",
    location: "Austin, TX",
    role: "DIY Builder",
    rating: 5,
    quote: "My local inspector is notorious for rejecting tiny homes. He looked at the load calculations in this packet, nodded, and signed off immediately. Saved me $2,500 in custom engineering fees."
  },
  {
    name: "Sarah Jenkins",
    location: "Orlando, FL",
    role: "First-time Builder",
    rating: 5,
    quote: "I bought 'cute' plans from Etsy first and got red-tagged during framing. I bought this bundle, switched to the 20x24 cottage plan, and passed inspection. The framing schedule is idiot-proof."
  },
  {
    name: "Mike Rodriguez",
    location: "Denver, CO",
    role: "Contractor",
    rating: 5,
    quote: "Honest review: The cut lists alone are worth the $17. I usually spend 4 hours calculating lumber. This package did it for me. I've built two of the 'Alpine' models so far."
  }
];
