
/**
 * @constant {Array<Object>} subscriptions
 * @description An array of subscription plans offered by Fit4All, detailing the name, price, image path, enrollment link, and specific features of each plan.
 * 
 * Each subscription object contains:
 * - `name` {string}: The name of the subscription plan (e.g., "Basic", "VIP+").
 * - `price` {string}: The monthly cost of the subscription in USD.
 * - `path` {string}: The relative path to the image representing the subscription.
 * - `link` {string}: The URL for the membership enrollment page.
 * - `details` {Array<string>}: A list of features and conditions associated with the subscription.
 * - `guest` {boolean} [optional]: Indicates if the subscription is a guest pass (default is `false`).
 * 
 */

const subscriptionDetails = {
  basicDetails: [
    "$49 Joining fee",
    "Club access during staffed hours",
    "$39 annual Maintenance fee",
    "60 day written Cancellation notice"
  ],
  vipDetails: [
    "$49 Joining fee",
    "24/7 access",
    "Racquetball access",
    "Wallyball access",
    "Tanning privileges",
    "Guest privileges",
    "$39 annual Maintenance fee",
    "60 day written cancellation notice"
  ],
  basicPlusDetails: [
    "$39 annual maintenance fee",
    "60 day written cancellation notice",
    "$89 cancellation fee"
  ],
  guestDetails: [
    "Access after hours for one workout session",
    "Must be accompained by an existing VIP+ member",
  ],
};

export const subscriptions = [
  {
    name: "Basic",
    price: "15",
    path: "gallery/_CSS1084.jpg",
    link: "https://www.mymemberaccount.com/member-enrollment/10887/group/8924",
    details: subscriptionDetails.basicDetails
  },
  {
    name: "VIP+",
    price: "24",
    path: "gallery/_CSS0713.jpg",
    link: "https://www.mymemberaccount.com/member-enrollment/10887/group/8882",
    details: subscriptionDetails.vipDetails
  },
  {
    name: "Basic+",
    price: "10",
    path: "gallery/_CSS2071.jpg",
    link: "https://www.mymemberaccount.com/member-enrollment/10887/group/8881",
    details: subscriptionDetails.basicPlusDetails
  },
  {
    name: "VIP+ GUEST",
    price: "25",
    path: "gallery/_CSS0527.jpg",
    link: "https://www.mymemberaccount.com/member-enrollment/10887/group/2640",
    details: subscriptionDetails.guestDetails,
    guest: true
  }
];


/**
 * @file constants.js
 * @description This file contains constants related to the amenities offered by the Fit4All facility.
 * It includes detailed information about training zones and exclusive features, 
 * along with their respective descriptions and image paths for gallery representation.
 * 
 * The `amenities` array provides a high-level overview of the amenities, 
 * while `amenitiesExtend` offers a more detailed breakdown with descriptions.
 * 
 * Sections:
 * - Training Zones: Dedicated areas for various types of training, including cardio, strength, and functional training.
 * - Exclusive Features: Unique offerings such as 24/7 access, tanning beds, and courts for racquetball and wallyball.
 */
// AMENITIES
//
export const amenities = [
  {
    name: "Training Zones",
    qualities: [
      "Women’s only area",
      "Multiple cardio areas",
      "Strength training areas",
      "Functional training zones",
      "Stretching and mobility areas",
    ],
    path: ["/gallery/_CSS1774.jpg"],
  },
  {
    name: "Exclusive Features",
    qualities: [
      "24/7 access",
      "Tanning beds",
      "Racquetball court",
      "Wallyball court",
    ],
    path: ["/gallery/_CSS1420.jpg"],
  },
];

const trainingZones = [
  {
    title: "Women’s Only Area",
    description:
      "A dedicated space for women to train confidently and comfortably. Whether you're lifting weights, stretching, or doing cardio, this area provides a supportive and empowering environment.",
  },
  {
    title: "Multiple Cardio Areas",
    description:
      "From treadmills to stairmasters, ellipticals to bikes — find your rhythm in our various cardio zones, located across the facility to avoid crowding and give you freedom to move.",
  },
  {
    title: "Strength Training Areas",
    description:
      "Power up in our fully equipped strength zones featuring free weights, squat racks, benches, and machines. Whether you're a beginner or a seasoned lifter, there's room and equipment for you here.",
  },
  {
    title: "Functional Training Zones",
    description:
      "Train smart and move freely. These areas are stocked with kettlebells, TRX straps, battle ropes, sleds, and more — perfect for high-intensity training, circuits, and mobility work.",
  },
  {
    title: "Stretching & Mobility Areas",
    description:
      "Take time to warm up, cool down, or focus on flexibility. With mats, foam rollers, and plenty of open space, this area supports injury prevention and recovery.",
  },
];

const exclusiveFeatures = [
  {
    title: "24/7 access",
    description: ""
  },
  {
    title: "Tanning beds",
    description: ""
  },
  {
    title: "Racquetball court",
    description: ""
  },
  {
    title: "Wallyball court",
    description: ""
  }
]


export const amenitiesExtend = [
  {
    name: "Training Zones",
    qualities: trainingZones,
    path: ["/gallery/ff10-055.jpg","/gallery/ff10-059.jpg",'/gallery/ff10-068.jpg'],
  },
  {
    name: "Exclusive Features",
    qualities: exclusiveFeatures,
    path: ["/gallery/ff10-020.jpg"],
  },
];

// FAQ Q&As

export const faq = [
  {
    question: "What are your hours",
    answer:
      "Our hours are <strong>Monday to Friday 8:00 am - 9:00 pm</strong> and <strong>11:00 am to 5:00 pm</strong> on weekends. We do have <strong>24/7 memberships</strong> that allow you to use the gym at all times."
  },
  {
    question: "How does the 24/7 guest pass work",
    answer:
      "You must purchase it online before entering the club. In order to enter our facility after hours you will have to be accompanied by an existing <strong>VIP+</strong> member."
  },
  {
    question: "How do I cancel my membership",
    answer:'In order to cancel your membership you can call Asf at <strong>1-800-525-8967</strong>, email them at <a href="mailto:membersupport@asfpaymentsolutions.com">membersupport@asfpaymentsolutions.com</a> or submit your request at the following link <a href="https://www.asfpaymentsolutions.com/members-support/" target="_blank" rel=\"noopener noreferrer\" class=\"accented\">asfpaymentsolutions.com</a>. Our cancellation policy is dependent on the membership you have. However, all memberships will require a <strong>written cancellation notice</strong>.'
  },
  {
    question: "Do you offer a free trial",
    answer:
      "We do not offer free trials as we have <strong>free guest privileges</strong> with our <strong>VIP+</strong> membership and also due to our <strong>low prices</strong>. But our day passes are only <strong>$15</strong>. If you purchase a day pass and sign up after your workout we will give you a <strong>$15 credit</strong> towards your membership."
  },
  {
    question: "How do your guest privileges work",
    answer:
      "You can bring a friend to workout during our <strong>staffed hours</strong>. All they need is a valid piece of I.D."
  },
  {
    question: "How old do you have to be to workout",
    answer:
      "In order to workout at our facility you must be at least <strong>12 years old</strong> and a <strong>parent/guardian waiver</strong> must be signed and kept at the club."
  },
  {
    question: "How can I tan",
    answer:
      "In order to tan you must be at least <strong>18 years old</strong> and hold a valid <strong>VIP</strong> or <strong>VIP+</strong> membership. We do not sell tanning minutes."
  },
  {
    question: "Can someone takeover my membership",
    answer:
      "No, unfortunately the contract was made and signed with you. You may cancel your membership and have them start their own!"
  },
  {
    question: "Personal training and Classes",
    answer:
      "At the time we do not offer <strong>personal training</strong> and/or <strong>fitness classes</strong> but we are looking into expanding this."
  },
  {
    question: "What happens if I lost my scan card or 24/7 card",
    answer:
      "You must report this to the club so we can cancel your <strong>key tag</strong> and <strong>24/7 card</strong>. A new one of these may be purchased at the club."
  }
];
