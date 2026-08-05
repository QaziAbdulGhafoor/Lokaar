// sampleListings.js
// 20 sample Listing documents for Lokaar.
// `owner` and `reviews` are intentionally omitted — assign these yourself
// (e.g. loop through and set owner: someUserId before insertMany).
//
// geometry.coordinates format is [longitude, latitude] (GeoJSON order).

const sampleListings = [
  {
    title: "Ahmed's Electrical Services",
    avatar: {
      filename: "avatar_1",
      url: "https://randomuser.me/api/portraits/men/12.jpg",
    },
    about:
      "Experienced electrician handling household wiring, fan/light installation, and short-circuit repairs. Quick response, fair pricing.",
    profession: "electrician",
    status: "verified",
    availability: {
      days: [1, 2, 3, 4, 5],
      startTime: "09:00",
      endTime: "18:00",
    },
    services: [
      "Wiring",
      "Fan Installation",
      "Switchboard Repair",
      "Circuit Breaker Fixing",
    ],
    price: 800,
    location: "Gulberg, Lahore, Punjab",
    experience: "expert",
    responseTime: "1",
    geometry: {
      type: "Point",
      coordinates: [74.3436, 31.5497],
    },
  },
  {
    title: "Bilal Plumbing Solutions",
    avatar: {
      filename: "avatar_2",
      url: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    about:
      "Reliable plumber for leak repairs, bathroom fittings, and water tank installation. Available for emergency calls.",
    profession: "plumber",
    status: "verified",
    availability: {
      days: [0, 1, 2, 3, 4, 5, 6],
      startTime: "08:00",
      endTime: "20:00",
    },
    services: [
      "Leak Repair",
      "Pipe Fitting",
      "Water Tank Installation",
      "Drain Cleaning",
    ],
    price: 700,
    location: "Model Town, Lahore, Punjab",
    experience: "intermediate",
    responseTime: "1",
    geometry: {
      type: "Point",
      coordinates: [74.3287, 31.4805],
    },
  },
  {
    title: "Usman House Painting",
    avatar: {
      filename: "avatar_3",
      url: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    about:
      "Professional painter offering interior and exterior wall painting, texture work, and waterproofing solutions.",
    profession: "painter",
    status: "pending",
    availability: {
      days: [1, 2, 3, 4, 5, 6],
      startTime: "09:00",
      endTime: "17:00",
    },
    services: [
      "Wall Painting",
      "Texture Design",
      "Waterproofing",
      "Wood Polish",
    ],
    price: 1200,
    location: "DHA Phase 5, Karachi, Sindh",
    experience: "expert",
    responseTime: "2",
    geometry: {
      type: "Point",
      coordinates: [67.0011, 24.8607],
    },
  },
  {
    title: "Hamza Home Cleaning",
    avatar: {
      filename: "avatar_4",
      url: "https://randomuser.me/api/portraits/men/67.jpg",
    },
    about:
      "Detailed home and office cleaning service including deep cleaning, sofa shampooing, and post-construction cleanup.",
    profession: "cleaner",
    status: "verified",
    availability: {
      days: [0, 1, 2, 3, 4, 5, 6],
      startTime: "07:00",
      endTime: "19:00",
    },
    services: [
      "Deep Cleaning",
      "Sofa Shampooing",
      "Kitchen Cleaning",
      "Post-Construction Cleanup",
    ],
    price: 500,
    location: "Clifton, Karachi, Sindh",
    experience: "beginner",
    responseTime: "1",
    geometry: {
      type: "Point",
      coordinates: [67.0299, 24.8138],
    },
  },
  {
    title: "Sir Faisal's Home Tuition",
    avatar: {
      filename: "avatar_5",
      url: "https://randomuser.me/api/portraits/men/8.jpg",
    },
    about:
      "Experienced tutor for Matric and Intermediate students, specializing in Mathematics and Physics. Home and online sessions available.",
    profession: "tutor",
    status: "verified",
    availability: {
      days: [1, 2, 3, 4, 5],
      startTime: "16:00",
      endTime: "20:00",
    },
    services: ["Mathematics", "Physics", "Chemistry", "Exam Preparation"],
    price: 1500,
    location: "F-10, Islamabad",
    experience: "expert",
    responseTime: "1",
    geometry: {
      type: "Point",
      coordinates: [73.0169, 33.6938],
    },
  },
  {
    title: "Kamran Carpentry Works",
    avatar: {
      filename: "avatar_6",
      url: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    about:
      "Skilled carpenter for custom furniture, door/window repair, and wardrobe installation. Quality wood work guaranteed.",
    profession: "carpenter",
    status: "pending",
    availability: {
      days: [1, 2, 3, 4, 5, 6],
      startTime: "09:00",
      endTime: "18:00",
    },
    services: [
      "Custom Furniture",
      "Door Repair",
      "Wardrobe Installation",
      "Wood Polishing",
    ],
    price: 1000,
    location: "G-9, Islamabad",
    experience: "intermediate",
    responseTime: "2",
    geometry: {
      type: "Point",
      coordinates: [73.0479, 33.6844],
    },
  },
  {
    title: "Imran's Electrical Repairs",
    avatar: {
      filename: "avatar_7",
      url: "https://randomuser.me/api/portraits/men/55.jpg",
    },
    about:
      "Quick and affordable electrician for home appliance wiring, inverter installation, and generator setup.",
    profession: "electrician",
    status: "verified",
    availability: {
      days: [0, 1, 2, 3, 4, 5],
      startTime: "10:00",
      endTime: "19:00",
    },
    services: [
      "Inverter Installation",
      "Generator Setup",
      "Appliance Wiring",
      "Fault Finding",
    ],
    price: 900,
    location: "Model Town, Rahim Yar Khan, Punjab",
    experience: "expert",
    responseTime: "1",
    geometry: {
      type: "Point",
      coordinates: [70.3297, 28.4212],
    },
  },
  {
    title: "Zeeshan Plumbing Care",
    avatar: {
      filename: "avatar_8",
      url: "https://randomuser.me/api/portraits/men/71.jpg",
    },
    about:
      "Affordable plumbing services for residential and commercial properties. Specializes in bathroom fittings and sewerage lines.",
    profession: "plumber",
    status: "pending",
    availability: {
      days: [1, 2, 3, 4, 5, 6],
      startTime: "08:00",
      endTime: "17:00",
    },
    services: [
      "Sewerage Line Repair",
      "Bathroom Fitting",
      "Tap Replacement",
      "Geyser Installation",
    ],
    price: 650,
    location: "Shahi Road, Rahim Yar Khan, Punjab",
    experience: "beginner",
    responseTime: "2",
    geometry: {
      type: "Point",
      coordinates: [70.2989, 28.4202],
    },
  },
  {
    title: "Asad's Painting Studio",
    avatar: {
      filename: "avatar_9",
      url: "https://randomuser.me/api/portraits/men/19.jpg",
    },
    about:
      "Creative painter offering modern wall designs, ceiling patterns, and eco-friendly paint options for homes.",
    profession: "painter",
    status: "verified",
    availability: {
      days: [1, 2, 3, 4, 5],
      startTime: "09:00",
      endTime: "17:00",
    },
    services: [
      "Wall Design",
      "Ceiling Patterns",
      "Eco-friendly Paint",
      "Spray Painting",
    ],
    price: 1100,
    location: "Satellite Town, Rawalpindi, Punjab",
    experience: "intermediate",
    responseTime: "2",
    geometry: {
      type: "Point",
      coordinates: [73.0551, 33.6007],
    },
  },
  {
    title: "Junaid Home Cleaning Services",
    avatar: {
      filename: "avatar_10",
      url: "https://randomuser.me/api/portraits/men/83.jpg",
    },
    about:
      "Trusted cleaning staff for apartments and offices. Offers weekly and monthly cleaning packages at discounted rates.",
    profession: "cleaner",
    status: "verified",
    availability: {
      days: [0, 1, 2, 3, 4, 5, 6],
      startTime: "08:00",
      endTime: "18:00",
    },
    services: [
      "Apartment Cleaning",
      "Office Cleaning",
      "Window Cleaning",
      "Carpet Cleaning",
    ],
    price: 550,
    location: "Bahria Town, Rawalpindi, Punjab",
    experience: "beginner",
    responseTime: "1",
    geometry: {
      type: "Point",
      coordinates: [73.0996, 33.5227],
    },
  },
  {
    title: "Sir Waqas English & Urdu Tutor",
    avatar: {
      filename: "avatar_11",
      url: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    about:
      "Passionate tutor teaching English grammar, Urdu literature, and essay writing for O-Level and Matric students.",
    profession: "tutor",
    status: "pending",
    availability: {
      days: [2, 3, 4, 5, 6],
      startTime: "15:00",
      endTime: "19:00",
    },
    services: [
      "English Grammar",
      "Urdu Literature",
      "Essay Writing",
      "Comprehension Skills",
    ],
    price: 1300,
    location: "Cantt Area, Multan, Punjab",
    experience: "intermediate",
    responseTime: "2",
    geometry: {
      type: "Point",
      coordinates: [71.4995, 30.1798],
    },
  },
  {
    title: "Shahzad Furniture Works",
    avatar: {
      filename: "avatar_12",
      url: "https://randomuser.me/api/portraits/men/60.jpg",
    },
    about:
      "Custom carpentry for kitchen cabinets, beds, and office furniture. Free measurement and quotation on-site.",
    profession: "carpenter",
    status: "verified",
    availability: {
      days: [1, 2, 3, 4, 5, 6],
      startTime: "09:00",
      endTime: "18:00",
    },
    services: [
      "Kitchen Cabinets",
      "Bed Frames",
      "Office Furniture",
      "Furniture Repair",
    ],
    price: 1050,
    location: "Bosan Road, Multan, Punjab",
    experience: "expert",
    responseTime: "1",
    geometry: {
      type: "Point",
      coordinates: [71.4479, 30.1978],
    },
  },
  {
    title: "Adnan Electrical Solutions",
    avatar: {
      filename: "avatar_13",
      url: "https://randomuser.me/api/portraits/men/91.jpg",
    },
    about:
      "Certified electrician offering complete home rewiring, solar panel wiring, and safety inspections.",
    profession: "electrician",
    status: "verified",
    availability: {
      days: [1, 2, 3, 4, 5],
      startTime: "09:00",
      endTime: "18:00",
    },
    services: [
      "Home Rewiring",
      "Solar Panel Wiring",
      "Safety Inspection",
      "LED Installation",
    ],
    price: 950,
    location: "Madina Town, Faisalabad, Punjab",
    experience: "expert",
    responseTime: "1",
    geometry: {
      type: "Point",
      coordinates: [73.0479, 31.4187],
    },
  },
  {
    title: "Rizwan Plumbing Experts",
    avatar: {
      filename: "avatar_14",
      url: "https://randomuser.me/api/portraits/men/27.jpg",
    },
    about:
      "Full-service plumber for new construction plumbing layout, bathroom renovation, and pipe leakage detection.",
    profession: "plumber",
    status: "pending",
    availability: {
      days: [0, 1, 2, 3, 4, 5, 6],
      startTime: "08:00",
      endTime: "20:00",
    },
    services: [
      "Plumbing Layout",
      "Bathroom Renovation",
      "Leak Detection",
      "Pipe Replacement",
    ],
    price: 750,
    location: "Susan Road, Faisalabad, Punjab",
    experience: "intermediate",
    responseTime: "2",
    geometry: {
      type: "Point",
      coordinates: [73.1113, 31.4658],
    },
  },
  {
    title: "Farhan's Painting & Decor",
    avatar: {
      filename: "avatar_15",
      url: "https://randomuser.me/api/portraits/men/44.jpg",
    },
    about:
      "Detail-oriented painter specializing in accent walls, false ceiling paint work, and wallpaper installation.",
    profession: "painter",
    status: "verified",
    availability: {
      days: [1, 2, 3, 4, 5, 6],
      startTime: "09:00",
      endTime: "17:00",
    },
    services: [
      "Accent Walls",
      "Wallpaper Installation",
      "False Ceiling Paint",
      "Texture Coating",
    ],
    price: 1150,
    location: "University Town, Peshawar, KPK",
    experience: "expert",
    responseTime: "1",
    geometry: {
      type: "Point",
      coordinates: [71.5249, 34.0151],
    },
  },
  {
    title: "Naveed Home & Office Cleaning",
    avatar: {
      filename: "avatar_16",
      url: "https://randomuser.me/api/portraits/men/76.jpg",
    },
    about:
      "Dependable cleaning crew for homes, shops, and small offices. Sanitization services also available on request.",
    profession: "cleaner",
    status: "pending",
    availability: {
      days: [0, 1, 2, 3, 4, 5],
      startTime: "07:00",
      endTime: "17:00",
    },
    services: [
      "Sanitization",
      "Shop Cleaning",
      "Office Cleaning",
      "Floor Scrubbing",
    ],
    price: 480,
    location: "Hayatabad, Peshawar, KPK",
    experience: "beginner",
    responseTime: "3",
    geometry: {
      type: "Point",
      coordinates: [71.456, 34.0044],
    },
  },
  {
    title: "Sir Tariq Science Academy",
    avatar: {
      filename: "avatar_17",
      url: "https://randomuser.me/api/portraits/men/15.jpg",
    },
    about:
      "Highly rated tutor for Biology, Chemistry, and Physics, preparing students for MDCAT and entry test success.",
    profession: "tutor",
    status: "verified",
    availability: {
      days: [1, 2, 3, 4, 5, 6],
      startTime: "14:00",
      endTime: "20:00",
    },
    services: ["Biology", "Chemistry", "Physics", "MDCAT Preparation"],
    price: 1800,
    location: "Satellite Town, Quetta, Balochistan",
    experience: "expert",
    responseTime: "1",
    geometry: {
      type: "Point",
      coordinates: [66.975, 30.1798],
    },
  },
  {
    title: "Shoaib Carpentry & Woodwork",
    avatar: {
      filename: "avatar_18",
      url: "https://randomuser.me/api/portraits/men/39.jpg",
    },
    about:
      "Traditional and modern carpentry services including window frames, staircases, and furniture polishing.",
    profession: "carpenter",
    status: "pending",
    availability: {
      days: [1, 2, 3, 4, 5],
      startTime: "09:00",
      endTime: "18:00",
    },
    services: [
      "Window Frames",
      "Staircase Work",
      "Furniture Polishing",
      "Custom Cabinets",
    ],
    price: 980,
    location: "Jinnah Town, Quetta, Balochistan",
    experience: "intermediate",
    responseTime: "2",
    geometry: {
      type: "Point",
      coordinates: [66.9911, 30.1656],
    },
  },
  {
    title: "Aamir Electrical Fixers",
    avatar: {
      filename: "avatar_19",
      url: "https://randomuser.me/api/portraits/men/58.jpg",
    },
    about:
      "Local electrician for quick fixes: tripping breakers, socket replacement, and ceiling fan repairs.",
    profession: "electrician",
    status: "verified",
    availability: {
      days: [0, 1, 2, 3, 4, 5, 6],
      startTime: "08:00",
      endTime: "21:00",
    },
    services: [
      "Socket Replacement",
      "Breaker Repair",
      "Ceiling Fan Repair",
      "Emergency Fixes",
    ],
    price: 700,
    location: "Model Town, Bahawalpur, Punjab",
    experience: "intermediate",
    responseTime: "1",
    geometry: {
      type: "Point",
      coordinates: [71.6752, 29.4],
    },
  },
  {
    title: "Nadeem's Complete Cleaning Co.",
    avatar: {
      filename: "avatar_20",
      url: "https://randomuser.me/api/portraits/men/88.jpg",
    },
    about:
      "Professional cleaning company for houses and small businesses, offering move-in/move-out cleaning packages.",
    profession: "cleaner",
    status: "pending",
    availability: {
      days: [1, 2, 3, 4, 5, 6],
      startTime: "08:00",
      endTime: "18:00",
    },
    services: [
      "Move-in Cleaning",
      "Move-out Cleaning",
      "Deep Cleaning",
      "Glass Cleaning",
    ],
    price: 520,
    location: "Baghdad-ul-Jadeed, Bahawalpur, Punjab",
    experience: "beginner",
    responseTime: "2",
    geometry: {
      type: "Point",
      coordinates: [71.7089, 29.3956],
    },
  },
];
module.exports = sampleListings.map((element) => {
  return { ...element, owner: "6a7324df71509104bfa92283" };
});
