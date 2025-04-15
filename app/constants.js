const subscriptionDetails = {
  basicDetails: [
    "$49.00 Joining fee",
    "Club access during staffed hours",
    "$39.00 annual Maintenance fee",
    "60 day written Cancellation notice"
  ],
  vipDetails: [
    "$49.00 Joining fee",
    "24/7 access",
    "Racquetball access",
    "Wallyball access",
    "Tanning privileges",
    "Guest privileges",
    "$39.00 annual Maintenance fee",
    "60 day written Cancellation notice"
  ],
  basicPlusDetails: [
    "All perks from the basic subscription",
    "Club Access during staffed hours",
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
    path: "gallery/_CSS0448.jpg",
    link: "https://www.mymemberaccount.com/member-enrollment/10887/group/8882",
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