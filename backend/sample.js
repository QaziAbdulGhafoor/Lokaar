// sampleListings2.js
// 30 more sample Listing documents for Lokaar.
// `owner` and `reviews` are intentionally omitted — assign these yourself
// (e.g. loop through and set owner: someUserId before insertMany).
//
// "about" sections are written longer / resume-style since the details
// page is meant to read like a profile, not a one-liner.
//
// geometry.coordinates format is [longitude, latitude] (GeoJSON order).

const sampleListings = [
  {
    title: "Danish Electrical Services",
    avatar: {
      filename: "avatar_21",
      url: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    about:
      "With over 9 years of hands-on experience, I specialize in residential and light commercial electrical work across Lahore. My services cover complete house wiring for new construction, rewiring of older homes, three-phase meter installations, and troubleshooting of persistent tripping or short-circuit issues. I've worked closely with builders on DHA and Bahria Town projects, which means I'm comfortable reading architectural layouts and coordinating with other trades on site. I carry my own testing equipment, including a multimeter and clamp meter, so faults are diagnosed accurately instead of guessed at. I also handle solar inverter wiring and net-metering connections, an area I've specifically trained in over the last two years as demand has grown. Punctuality and clean work — no exposed wires, properly labeled distribution boards — are things I take pride in on every job.",
    profession: "electrician",
    status: "verified",
    availability: {
      days: [1, 2, 3, 4, 5, 6],
      startTime: "09:00",
      endTime: "19:00",
    },
    services: [
      "House Wiring",
      "Three-Phase Meter Installation",
      "Solar Inverter Wiring",
      "Fault Diagnosis",
    ],
    price: 900,
    location: "Johar Town, Lahore, Punjab",
    experience: "expert",
    responseTime: "1",
    geometry: { type: "Point", coordinates: [74.2755, 31.4697] },
  },
  {
    title: "Salman Plumbing Co.",
    avatar: {
      filename: "avatar_22",
      url: "https://randomuser.me/api/portraits/men/18.jpg",
    },
    about:
      "I started as an apprentice under my father, who ran a small plumbing shop in Model Town for over two decades, and I've now been working independently for six years. My core strength is diagnosing hidden leaks in concealed piping without having to break open entire walls — I use a combination of pressure testing and experience-based instinct to narrow down the source before any demolition starts. I regularly handle full bathroom re-piping for renovation projects, geyser and water heater installation, kitchen sink and drainage work, and water tank float valve repairs. I keep a stock of common fittings in my van so most jobs can be completed in a single visit rather than requiring a follow-up trip for parts. Clients often ask me to also inspect their overhead tank overflow and boosting pump setup while I'm there, and I'm happy to give an honest opinion even if it means less work for me.",
    profession: "plumber",
    status: "verified",
    availability: {
      days: [0, 1, 2, 3, 4, 5, 6],
      startTime: "08:00",
      endTime: "20:00",
    },
    services: [
      "Concealed Pipe Leak Detection",
      "Bathroom Re-piping",
      "Geyser Installation",
      "Drainage Repair",
    ],
    price: 750,
    location: "Wapda Town, Lahore, Punjab",
    experience: "expert",
    responseTime: "1",
    geometry: { type: "Point", coordinates: [74.2938, 31.4419] },
  },
  {
    title: "Arslan Paints & Interiors",
    avatar: {
      filename: "avatar_23",
      url: "https://randomuser.me/api/portraits/men/27.jpg",
    },
    about:
      "Painting has been my full-time profession for the last five years, and before that I spent two years working under a senior painter learning surface preparation, which I believe is the part most people skip and later regret. My typical process starts with proper crack filling, sanding, and a primer coat before any topcoat goes on — this is why my finishes tend to last longer without peeling. I offer standard emulsion painting, textured accent walls, and increasingly popular options like Japanese and Spanish texture designs for feature walls in living rooms. I've also picked up basic wallpaper installation skills over the past year to offer clients a complete interior finishing package rather than sending them to a separate contractor. I bring my own drop sheets, tape, and safety gear, and I always show clients a small sample patch before committing to a final color or texture across the whole room.",
    profession: "painter",
    status: "pending",
    availability: {
      days: [1, 2, 3, 4, 5, 6],
      startTime: "09:00",
      endTime: "17:00",
    },
    services: [
      "Emulsion Painting",
      "Texture Wall Design",
      "Wallpaper Installation",
      "Crack Filling & Priming",
    ],
    price: 1100,
    location: "Bahadurabad, Karachi, Sindh",
    experience: "intermediate",
    responseTime: "2",
    geometry: { type: "Point", coordinates: [67.0654, 24.9089] },
  },
  {
    title: "Fahad Home Care Cleaning",
    avatar: {
      filename: "avatar_24",
      url: "https://randomuser.me/api/portraits/men/33.jpg",
    },
    about:
      "I lead a small trained team of three, and together we've been providing home and office cleaning services in Karachi for the past four years. We specialize in deep cleaning packages that go beyond regular sweeping and mopping — this includes kitchen degreasing, bathroom tile and grout scrubbing, ceiling fan and light fixture dusting, and upholstery cleaning for sofas and curtains. For move-in or move-out situations, we do a full top-to-bottom pass including inside cabinets, window tracks, and balcony areas that are usually neglected. We bring our own equipment including a wet-dry vacuum and microfiber cloths, and we're flexible about using eco-friendly, fragrance-free products for households with small children or allergy concerns. Most of our repeat clients are working families who book us on a bi-weekly or monthly schedule, and I personally supervise the first visit at any new property to set expectations correctly.",
    profession: "cleaner",
    status: "verified",
    availability: {
      days: [0, 1, 2, 3, 4, 5, 6],
      startTime: "07:00",
      endTime: "18:00",
    },
    services: [
      "Deep Cleaning",
      "Move-in/Move-out Cleaning",
      "Upholstery Cleaning",
      "Kitchen Degreasing",
    ],
    price: 600,
    location: "Gulshan-e-Iqbal, Karachi, Sindh",
    experience: "intermediate",
    responseTime: "1",
    geometry: { type: "Point", coordinates: [67.0822, 24.9204] },
  },
  {
    title: "Sir Umar's Mathematics Academy",
    avatar: {
      filename: "avatar_25",
      url: "https://randomuser.me/api/portraits/men/41.jpg",
    },
    about:
      "I hold a Master's degree in Mathematics and have been teaching for eight years, splitting my time between a private school in the mornings and home tuitions in the evenings. My tutoring focuses on Matric and Intermediate level Mathematics, with particular strength in Calculus, Trigonometry, and Coordinate Geometry, subjects where I've noticed students often struggle simply because their basics from earlier grades were never solidified. I build a personalized study plan for every student after an initial diagnostic session, rather than following a generic syllabus pace. Over the years several of my students have secured A-1 grades in board exams, and a few have gone on to study Engineering at NUST and GIKI. I also prepare students for entry tests including ECAT and NAT, covering not just concepts but time-management strategy for the exam itself. Sessions can be conducted at the student's home, in small group format, or online via Zoom depending on preference.",
    profession: "tutor",
    status: "verified",
    availability: {
      days: [1, 2, 3, 4, 5, 6],
      startTime: "16:00",
      endTime: "21:00",
    },
    services: [
      "Matric Mathematics",
      "Intermediate Mathematics",
      "ECAT/NAT Preparation",
      "Calculus & Trigonometry",
    ],
    price: 2000,
    location: "E-11, Islamabad",
    experience: "expert",
    responseTime: "1",
    geometry: { type: "Point", coordinates: [72.9822, 33.6989] },
  },
  {
    title: "Hassan Bespoke Carpentry",
    avatar: {
      filename: "avatar_26",
      url: "https://randomuser.me/api/portraits/men/50.jpg",
    },
    about:
      "Carpentry runs in my family — my grandfather ran a small workshop in the old city, and I grew up around wood shavings before I ever picked up a saw myself. I've been working professionally for eleven years now, initially focused on furniture repair before expanding into full custom builds. My specialty is fitted wardrobes and kitchen cabinetry designed to match exact room dimensions, which means I always do an in-person measurement visit before quoting rather than relying on rough estimates. I work with both MDF and solid wood depending on budget, and I'm upfront with clients about the trade-offs between the two in terms of cost, durability, and finish. Beyond new builds, I also do furniture restoration, hinge and lock replacement, and door alignment fixes for homes with older wooden doors that have started sticking or sagging. I deliver my own designs sketched by hand before any cutting begins, so clients can request changes at zero cost before work starts.",
    profession: "carpenter",
    status: "verified",
    availability: {
      days: [1, 2, 3, 4, 5, 6],
      startTime: "09:00",
      endTime: "18:00",
    },
    services: [
      "Fitted Wardrobes",
      "Kitchen Cabinetry",
      "Furniture Restoration",
      "Door Alignment",
    ],
    price: 1200,
    location: "Cavalry Ground, Lahore, Punjab",
    experience: "expert",
    responseTime: "1",
    geometry: { type: "Point", coordinates: [74.3667, 31.4874] },
  },
  {
    title: "Bilawal Electric Works",
    avatar: {
      filename: "avatar_27",
      url: "https://randomuser.me/api/portraits/men/62.jpg",
    },
    about:
      "I've spent the past six years working on residential electrical projects across Sialkot and nearby towns, starting out doing basic repair work before moving into full installations for newly built homes. I'm comfortable with both single and three-phase setups and regularly handle load calculations to make sure a home's wiring can safely support air conditioners, water pumps, and kitchen appliances without overloading circuits. I offer earthing installation and testing, a service many local electricians skip but which I consider essential for safety, particularly in homes with older wiring. I also do UPS and inverter wiring, including battery bank setups, and I'm currently expanding into solar installation work as more households in the area move toward it. I keep detailed notes on every job so that if a client calls me back months later with a related issue, I already know the layout of their home's electrical system.",
    profession: "electrician",
    status: "pending",
    availability: {
      days: [0, 1, 2, 3, 4, 5],
      startTime: "08:00",
      endTime: "19:00",
    },
    services: [
      "Load Calculation",
      "Earthing Installation",
      "UPS/Inverter Wiring",
      "Solar Installation",
    ],
    price: 850,
    location: "Cantt Area, Sialkot, Punjab",
    experience: "intermediate",
    responseTime: "2",
    geometry: { type: "Point", coordinates: [74.5229, 32.4977] },
  },
  {
    title: "Sohail Plumbing & Sanitary",
    avatar: {
      filename: "avatar_28",
      url: "https://randomuser.me/api/portraits/men/71.jpg",
    },
    about:
      "I run a small plumbing and sanitary supply business in Gujranwala, which means unlike many plumbers, I can source and install fittings myself rather than sending clients to the market to buy parts separately. Over seven years I've built strong relationships with local hardware suppliers, so I can often get a fair price on quality fittings, which I pass along to clients rather than marking up heavily. My day-to-day work covers full bathroom sanitary fitting for new homes, including commode, basin, and shower installation, along with sewerage and drainage system design for houses under construction. For existing homes I handle common issues like low water pressure, blocked drains, and geyser servicing. I try to explain to clients what's actually wrong before starting any work, since I've found that many people have been overcharged in the past for repairs they didn't fully understand, and I'd rather build long-term trust than take advantage of a one-time job.",
    profession: "plumber",
    status: "verified",
    availability: {
      days: [0, 1, 2, 3, 4, 5, 6],
      startTime: "09:00",
      endTime: "20:00",
    },
    services: [
      "Bathroom Sanitary Fitting",
      "Sewerage System Design",
      "Geyser Servicing",
      "Drain Unblocking",
    ],
    price: 700,
    location: "Model Town, Gujranwala, Punjab",
    experience: "expert",
    responseTime: "1",
    geometry: { type: "Point", coordinates: [74.1945, 32.1877] },
  },
  {
    title: "Rehan's Wall Art & Painting",
    avatar: {
      filename: "avatar_29",
      url: "https://randomuser.me/api/portraits/men/8.jpg",
    },
    about:
      "I trained originally as a sign painter before moving into residential wall painting about four years ago, and that background shows in the freehand detail work I can offer for kids' rooms and feature walls — things like simple murals, geometric patterns, and clean edge work around trim that machine rollers can't achieve. For standard jobs I do full interior and exterior painting using quality emulsion and weather-shield paints depending on the surface, always starting with proper putty and sanding so the final coat looks smooth rather than patchy. I've noticed a growing number of clients requesting two-tone accent walls and subtle textured finishes, and I keep sample boards with me so people can see exactly how a color or texture will look under their own room lighting before committing. I also offer minor plaster repair for cracked or damaged walls as part of the painting job, since patch jobs that aren't properly prepped tend to show through the paint within a few months.",
    profession: "painter",
    status: "pending",
    availability: {
      days: [1, 2, 3, 4, 5, 6],
      startTime: "09:00",
      endTime: "18:00",
    },
    services: [
      "Interior/Exterior Painting",
      "Accent Wall Design",
      "Freehand Wall Art",
      "Plaster Repair",
    ],
    price: 1000,
    location: "Township, Lahore, Punjab",
    experience: "intermediate",
    responseTime: "2",
    geometry: { type: "Point", coordinates: [74.2938, 31.4818] },
  },
  {
    title: "Zohaib Cleaning Squad",
    avatar: {
      filename: "avatar_30",
      url: "https://randomuser.me/api/portraits/men/14.jpg",
    },
    about:
      "I started this cleaning service two years ago after noticing how difficult it was for working families in my neighborhood to find reliable, trustworthy help for regular home cleaning. My small team and I focus on recurring weekly or bi-weekly cleaning contracts, which lets us really get to know a household's layout and preferences over time rather than treating every visit as a one-off. Standard service includes floor mopping and vacuuming, kitchen and bathroom cleaning, dusting of furniture and electronics, and trash disposal, while add-on services cover fridge and oven interior cleaning, balcony and yard sweeping, and glass and mirror polishing. I personally background-check and train every team member before they're sent to a client's home, since I understand people are trusting us with access to their private space. We also offer a one-time deep cleaning service for clients preparing to host guests or move into a new home, which typically takes a full team half a day depending on the property size.",
    profession: "cleaner",
    status: "verified",
    availability: {
      days: [1, 2, 3, 4, 5, 6],
      startTime: "08:00",
      endTime: "17:00",
    },
    services: [
      "Recurring Home Cleaning",
      "One-Time Deep Cleaning",
      "Fridge/Oven Cleaning",
      "Glass Polishing",
    ],
    price: 550,
    location: "PECHS, Karachi, Sindh",
    experience: "intermediate",
    responseTime: "1",
    geometry: { type: "Point", coordinates: [67.0822, 24.8748] },
  },
  {
    title: "Miss Ayesha's Study Circle",
    avatar: {
      filename: "avatar_31",
      url: "https://randomuser.me/api/portraits/women/21.jpg",
    },
    about:
      "I completed my BS in English Literature and have been tutoring for five years, working primarily with O-Level and A-Level students on English Language, English Literature, and Urdu as a second language. My teaching approach centers on building genuine reading habits rather than rote memorization of past papers, though I do also spend dedicated time on exam technique closer to test dates since I know results matter for university admissions. I run small group sessions of no more than four students so everyone gets individual feedback on their writing, particularly for essay and creative writing components, which I've found is where most students lose easy marks. I also help students prepare university admission essays and personal statements, an area many tutors in this city don't cover but which I picked up an interest in after helping a niece through her own applications. Sessions are held at my home in a dedicated study room, or I can travel to a student's home for an additional fee within the local area.",
    profession: "tutor",
    status: "verified",
    availability: {
      days: [0, 1, 2, 3, 4, 5],
      startTime: "15:00",
      endTime: "19:00",
    },
    services: [
      "English Language & Literature",
      "Urdu Second Language",
      "Essay Writing",
      "University Admission Essays",
    ],
    price: 1700,
    location: "North Nazimabad, Karachi, Sindh",
    experience: "intermediate",
    responseTime: "1",
    geometry: { type: "Point", coordinates: [67.0369, 24.9342] },
  },
  {
    title: "Talha Furniture & Interiors",
    avatar: {
      filename: "avatar_32",
      url: "https://randomuser.me/api/portraits/men/29.jpg",
    },
    about:
      "I run a small carpentry workshop with two assistants, and together we've completed furniture and interior woodwork projects for homes and small offices across Faisalabad for the past eight years. My core work includes built-in wardrobes, TV console units, study tables, and full kitchen cabinetry, all designed and cut to order rather than assembled from pre-made modules, which gives clients more flexibility on layout and finish. I've also developed a good working relationship with a local laminate and hardware supplier, so I can offer a range of finish options at competitive prices without clients needing to source materials themselves. For office clients I've built reception desks, partition units, and storage cabinets, adapting designs to fit oddly shaped spaces that off-the-shelf furniture usually can't handle well. I always provide a rough 2D sketch with dimensions before starting any custom piece, and I welcome site visits so clients can see work in progress rather than only seeing the finished product.",
    profession: "carpenter",
    status: "pending",
    availability: {
      days: [1, 2, 3, 4, 5, 6],
      startTime: "09:00",
      endTime: "18:00",
    },
    services: [
      "Built-in Wardrobes",
      "Kitchen Cabinetry",
      "Office Furniture",
      "Custom Woodwork",
    ],
    price: 1100,
    location: "Peoples Colony, Faisalabad, Punjab",
    experience: "expert",
    responseTime: "2",
    geometry: { type: "Point", coordinates: [73.135, 31.4361] },
  },
  {
    title: "Ayaan Electrical & Solar",
    avatar: {
      filename: "avatar_33",
      url: "https://randomuser.me/api/portraits/men/37.jpg",
    },
    about:
      "I completed a diploma in Electrical Technology before working under a senior electrician for three years, and I've now been operating independently for four years across Multan and surrounding areas. Alongside standard household wiring and repair work, solar has become the main focus of my business over the last two years as more households look to reduce their electricity bills given rising tariffs. I handle full on-grid and hybrid solar system installation, including panel mounting, inverter setup, and net-metering paperwork coordination with the local WAPDA office, which many installers leave entirely to the client to figure out. For non-solar work, I still take on general household electrical jobs including DB box upgrades, socket and switch replacement, and fan or light fixture installation. I try to give clients realistic expectations about payback periods for solar systems based on their actual monthly usage rather than inflated sales pitches, since I'd rather have a client who trusts my numbers than one who feels misled later.",
    profession: "electrician",
    status: "verified",
    availability: {
      days: [1, 2, 3, 4, 5, 6],
      startTime: "09:00",
      endTime: "18:00",
    },
    services: [
      "Solar System Installation",
      "Net-Metering Coordination",
      "DB Box Upgrade",
      "General Wiring Repair",
    ],
    price: 1000,
    location: "Gulgasht Colony, Multan, Punjab",
    experience: "expert",
    responseTime: "1",
    geometry: { type: "Point", coordinates: [71.4731, 30.1975] },
  },
  {
    title: "Saad Home Plumbing",
    avatar: {
      filename: "avatar_34",
      url: "https://randomuser.me/api/portraits/men/44.jpg",
    },
    about:
      "I've been working as a plumber for three years, starting out helping my uncle on residential jobs before beginning to take on clients of my own. My work is mostly focused on smaller repair jobs rather than large renovation projects, which I think has actually made me quicker and more efficient at diagnosing common household issues — leaking taps, running toilets, low-pressure showers, and blocked kitchen sinks. I keep a stocked toolkit with common washers, seals, and fittings so most repair visits don't require a second trip to the hardware store. I'm also building experience in water heater and geyser installation, and I always test a full system after installation rather than leaving immediately, since I've seen how a small leak at a joint can go unnoticed for hours if not checked properly. I try to keep my pricing transparent and give a rough estimate over the phone before arriving, so there are no surprises once the job is done.",
    profession: "plumber",
    status: "pending",
    availability: {
      days: [0, 1, 2, 3, 4, 5, 6],
      startTime: "09:00",
      endTime: "19:00",
    },
    services: [
      "Tap & Toilet Repair",
      "Blocked Sink Clearing",
      "Geyser Installation",
      "Shower Pressure Fixing",
    ],
    price: 600,
    location: "Askari Colony, Multan, Punjab",
    experience: "beginner",
    responseTime: "1",
    geometry: { type: "Point", coordinates: [71.5249, 30.21] },
  },
  {
    title: "Hamid Home Painters",
    avatar: {
      filename: "avatar_35",
      url: "https://randomuser.me/api/portraits/men/52.jpg",
    },
    about:
      "I've been in the painting trade for over a decade, having worked on everything from small single-room touch-ups to full villa exteriors in gated communities. My team of three and I are equipped to handle large jobs efficiently, using both roller and spray application depending on the surface and the client's budget, since spray finishes tend to look more even but cost more in material and setup time. For exterior work I always factor in weather conditions and use weather-shield paints rated for the local climate, since I've seen cheaper paint jobs peel and fade within a single monsoon season. Interior work includes standard emulsion, textured finishes, and increasingly requested metallic or pearl-finish accent walls for living rooms and bedrooms. I also offer a maintenance package for clients who want annual touch-ups on high-traffic areas like staircases and entryways rather than repainting entire rooms every year. Before any job I walk the client through the full surface prep process so they understand why proper prep, not just the paint brand, is what determines how long a paint job actually lasts.",
    profession: "painter",
    status: "verified",
    availability: {
      days: [1, 2, 3, 4, 5, 6],
      startTime: "08:00",
      endTime: "17:00",
    },
    services: [
      "Exterior Villa Painting",
      "Spray Finish Application",
      "Metallic Accent Walls",
      "Annual Maintenance Touch-ups",
    ],
    price: 1300,
    location: "University Road, Peshawar, KPK",
    experience: "expert",
    responseTime: "1",
    geometry: { type: "Point", coordinates: [71.4849, 34.0022] },
  },
  {
    title: "Yasir's Cleaning Experts",
    avatar: {
      filename: "avatar_36",
      url: "https://randomuser.me/api/portraits/men/63.jpg",
    },
    about:
      "My cleaning business has been operating in Peshawar for three years, growing from just myself to a team of four trained staff members who handle bookings across residential homes and small commercial spaces like clinics and small offices. We specialize in thorough kitchen and bathroom sanitization, an area we've found most general cleaning services rush through, along with full-home dusting, mopping, and vacuuming for regular maintenance visits. For commercial clients, particularly clinics, we follow a stricter sanitization protocol using appropriate disinfectants for medical waiting areas and reception spaces. We also offer post-renovation cleanup, which involves removing construction dust from every surface, light fixture, and vent, a service that's grown significantly in demand as more homes in the area undergo renovation work. All our staff wear uniforms and carry ID cards, since we know many clients are understandably cautious about letting unfamiliar people into their homes, and we want that trust to be earned from the very first visit.",
    profession: "cleaner",
    status: "verified",
    availability: {
      days: [0, 1, 2, 3, 4, 5, 6],
      startTime: "07:00",
      endTime: "18:00",
    },
    services: [
      "Kitchen & Bathroom Sanitization",
      "Clinic/Office Cleaning",
      "Post-Renovation Cleanup",
      "Regular Home Maintenance",
    ],
    price: 580,
    location: "Hayatabad Phase 3, Peshawar, KPK",
    experience: "intermediate",
    responseTime: "1",
    geometry: { type: "Point", coordinates: [71.4442, 33.9944] },
  },
  {
    title: "Sir Noman's Physics Hub",
    avatar: {
      filename: "avatar_37",
      url: "https://randomuser.me/api/portraits/men/70.jpg",
    },
    about:
      "I graduated with a BS in Physics and have spent the last six years teaching both at a private college and through independent home tuitions, focusing almost entirely on Intermediate and A-Level Physics. I believe most students struggle with Physics not because the concepts are inherently difficult but because they're taught as formulas to memorize rather than principles to understand, so my sessions spend real time on the 'why' behind each topic before moving to numerical problems. I place heavy emphasis on past paper practice in the final two months before exams, timed under real exam conditions, since time pressure is often what actually costs students marks rather than lack of knowledge. I also help a smaller number of students preparing for ECAT and NET entry tests, where Physics carries significant weight. Several of my past students have gone on to Engineering programs at UET and NUST, and I maintain informal contact with quite a few of them, which has helped me understand what actually mattered once they got to university versus what I over-emphasized in tuition.",
    profession: "tutor",
    status: "verified",
    availability: {
      days: [1, 2, 3, 4, 5, 6],
      startTime: "15:00",
      endTime: "20:00",
    },
    services: [
      "Intermediate Physics",
      "A-Level Physics",
      "ECAT/NET Preparation",
      "Past Paper Practice",
    ],
    price: 1900,
    location: "G-11, Islamabad",
    experience: "expert",
    responseTime: "1",
    geometry: { type: "Point", coordinates: [72.9647, 33.6789] },
  },
  {
    title: "Irfan Woodworks",
    avatar: {
      filename: "avatar_38",
      url: "https://randomuser.me/api/portraits/men/76.jpg",
    },
    about:
      "I've spent close to fifteen years in carpentry, starting as an apprentice cutting simple frames before eventually running my own small workshop. My specialty has become restoration and repair work — fixing antique or older wooden furniture that families want to keep rather than replace, re-caning chair seats, repairing joints that have loosened over decades, and refinishing surfaces that have lost their original polish. Alongside restoration, I still take on new furniture orders including dining tables, bed frames, and simple bookshelves, usually working from a photo or rough sketch a client provides rather than requiring detailed technical drawings. I source my own timber directly from the local timber market, which lets me offer clients a choice between different wood types and grades at prices below what larger furniture showrooms charge. I take real pride in matching old finishes when doing restoration work, often mixing my own stain shades by hand to get as close as possible to a piece's original color before it faded or wore down over the years.",
    profession: "carpenter",
    status: "verified",
    availability: {
      days: [0, 1, 2, 3, 4, 5, 6],
      startTime: "09:00",
      endTime: "18:00",
    },
    services: [
      "Antique Furniture Restoration",
      "Chair Re-caning",
      "Custom Furniture",
      "Wood Finishing",
    ],
    price: 1150,
    location: "Latifabad, Hyderabad, Sindh",
    experience: "expert",
    responseTime: "2",
    geometry: { type: "Point", coordinates: [68.3554, 25.3792] },
  },
  {
    title: "Kashif Electric Solutions",
    avatar: {
      filename: "avatar_39",
      url: "https://randomuser.me/api/portraits/men/81.jpg",
    },
    about:
      "I've been a licensed electrician in Hyderabad for close to seven years, having completed a formal apprenticeship before branching out on my own. My daily work covers general household electrical repair, new wiring for extensions or additional rooms being added to existing homes, and fault-finding for recurring circuit trips that other electricians sometimes struggle to diagnose without proper testing equipment. I carry an insulation resistance tester alongside a standard multimeter, which lets me identify insulation breakdown in older wiring before it becomes a fire hazard, something I consider especially important in homes built more than fifteen years ago. I also install and service UPS systems and battery banks, a near-constant requirement given how frequent load-shedding still is in parts of the city. For clients building new homes, I coordinate directly with their architect or contractor to plan conduit routing before walls are finished, which avoids the messy surface wiring you often see in retrofitted installations. I stand behind my work with a basic verbal guarantee — if something I installed causes an issue within three months, I return at no additional labor charge.",
    profession: "electrician",
    status: "pending",
    availability: {
      days: [1, 2, 3, 4, 5, 6],
      startTime: "09:00",
      endTime: "19:00",
    },
    services: [
      "New Home Wiring Coordination",
      "Insulation Resistance Testing",
      "UPS/Battery Bank Installation",
      "Fault Diagnosis",
    ],
    price: 950,
    location: "Qasimabad, Hyderabad, Sindh",
    experience: "expert",
    responseTime: "1",
    geometry: { type: "Point", coordinates: [68.3369, 25.4231] },
  },
  {
    title: "Mudassar Plumbing Services",
    avatar: {
      filename: "avatar_40",
      url: "https://randomuser.me/api/portraits/men/9.jpg",
    },
    about:
      "I've worked as a plumber in Sukkur for close to five years, primarily serving residential clients but also taking on smaller commercial jobs like shops and small clinics. My work covers the full range of everyday plumbing needs — fixing leaking taps and pipes, unclogging drains and sewer lines, installing and servicing water pumps, and setting up water tanks with proper float valve and overflow arrangements. Given how common water pressure issues are in older parts of the city with aging municipal supply lines, I've become fairly skilled at diagnosing whether a low-pressure complaint is coming from the home's internal plumbing or the external supply, which saves clients from paying for unnecessary internal repairs. I also do bathroom and kitchen sanitary fitting for both new construction and renovation projects, working with whatever fixtures the client has already purchased or helping them choose reliable options within their budget if needed. I try to be upfront when a repair is genuinely simple and doesn't require a callout fee versus when a job will take real time and materials, since I'd rather build a long relationship with a client than maximize a single visit.",
    profession: "plumber",
    status: "verified",
    availability: {
      days: [0, 1, 2, 3, 4, 5, 6],
      startTime: "08:00",
      endTime: "19:00",
    },
    services: [
      "Water Pump Installation",
      "Drain & Sewer Unclogging",
      "Bathroom Sanitary Fitting",
      "Water Pressure Diagnosis",
    ],
    price: 650,
    location: "Military Road, Sukkur, Sindh",
    experience: "intermediate",
    responseTime: "2",
    geometry: { type: "Point", coordinates: [68.8574, 27.7052] },
  },
  {
    title: "Waseem Paint Masters",
    avatar: {
      filename: "avatar_41",
      url: "https://randomuser.me/api/portraits/men/16.jpg",
    },
    about:
      "I've been painting professionally for nine years, and over that time I've worked on projects ranging from single bedrooms to entire multi-story homes for clients in Sargodha and nearby towns. I offer full interior and exterior services, and I always start by walking a client through their space to point out any dampness, cracking, or previous paint failure that needs addressing before new paint goes on, since painting over an unresolved moisture problem is a waste of everyone's money and time. My standard offering includes emulsion painting in a wide range of finishes from matte to satin, along with increasingly popular textured designs for accent walls, which I've taught myself through practice and online tutorials over the past three years. I also handle exterior weatherproofing and waterproof coating for rooftops, an important service in this region given the intensity of summer heat and monsoon rains on flat concrete roofs. I keep an informal portfolio of photos from past jobs on my phone, which I show new clients so they can get a realistic sense of my finish quality before agreeing to hire me.",
    profession: "painter",
    status: "pending",
    availability: {
      days: [1, 2, 3, 4, 5, 6],
      startTime: "09:00",
      endTime: "17:00",
    },
    services: [
      "Interior/Exterior Painting",
      "Textured Accent Walls",
      "Rooftop Waterproofing",
      "Damp Wall Treatment",
    ],
    price: 1000,
    location: "Satellite Town, Sargodha, Punjab",
    experience: "expert",
    responseTime: "2",
    geometry: { type: "Point", coordinates: [72.6711, 32.0836] },
  },
  {
    title: "Shahid's Home Cleaning",
    avatar: {
      filename: "avatar_42",
      url: "https://randomuser.me/api/portraits/men/24.jpg",
    },
    about:
      "I started offering cleaning services on a part-time basis while studying, and after graduating decided to turn it into a full-time business, which I've now run for two years with a rotating team of two to three helpers depending on booking volume. Our core service is thorough home cleaning covering floors, kitchens, bathrooms, and general dusting, but we've built a reputation locally for our attention to detail in areas people often forget — behind appliances, under furniture, inside window tracks, and along baseboards. We offer a monthly subscription option for regular clients at a discounted rate compared to one-off bookings, which has become the bulk of our business as families realize the value of consistent scheduling. For special occasions like weddings or guest visits, we also offer a same-day rush cleaning service, though we recommend booking at least a day in advance when possible to guarantee availability. I personally check in with clients after their first two bookings to make sure the service is meeting expectations and adjust our approach if needed.",
    profession: "cleaner",
    status: "verified",
    availability: {
      days: [1, 2, 3, 4, 5, 6],
      startTime: "08:00",
      endTime: "18:00",
    },
    services: [
      "Monthly Subscription Cleaning",
      "Detailed Deep Cleaning",
      "Same-Day Rush Cleaning",
      "Window Track Cleaning",
    ],
    price: 500,
    location: "Cantt, Sargodha, Punjab",
    experience: "beginner",
    responseTime: "1",
    geometry: { type: "Point", coordinates: [72.6911, 32.0654] },
  },
  {
    title: "Sir Junaid's Chemistry Corner",
    avatar: {
      filename: "avatar_43",
      url: "https://randomuser.me/api/portraits/men/48.jpg",
    },
    about:
      "I've been teaching Chemistry at the Matric and Intermediate level for over seven years, having originally started while pursuing my own Pharmacy degree and finding I genuinely enjoyed explaining reactions and concepts to younger students. My teaching leans heavily on practical demonstration wherever safely possible, since I've found students retain reaction mechanisms far better when they've actually seen a color change or precipitate form rather than only reading about it in a textbook. I cover the full board syllabus including Organic, Inorganic, and Physical Chemistry, with particular focus on numerical problems in Physical Chemistry, which tends to be where students lose the most marks despite otherwise strong conceptual understanding. I also prepare a smaller group of students for MDCAT, where Chemistry carries substantial weight, using targeted practice from past MDCAT papers rather than general textbook exercises alone. Group sizes are kept small, generally three to five students, so I can move at a pace that actually suits the group rather than a fixed lesson plan, and I maintain a WhatsApp group with each batch for quick doubt-clearing between sessions.",
    profession: "tutor",
    status: "verified",
    availability: {
      days: [1, 2, 3, 4, 5, 6],
      startTime: "16:00",
      endTime: "20:00",
    },
    services: [
      "Matric/Intermediate Chemistry",
      "MDCAT Chemistry Preparation",
      "Practical Demonstrations",
      "Numerical Problem Solving",
    ],
    price: 1750,
    location: "Cantt, Rawalpindi, Punjab",
    experience: "expert",
    responseTime: "1",
    geometry: { type: "Point", coordinates: [73.0479, 33.5981] },
  },
  {
    title: "Owais Custom Furniture",
    avatar: {
      filename: "avatar_44",
      url: "https://randomuser.me/api/portraits/men/55.jpg",
    },
    about:
      "I run a small carpentry setup out of a workshop in Rawalpindi, working alongside one full-time assistant, and between us we've completed custom furniture and interior woodwork for homes and small businesses over the past six years. My focus has shifted heavily toward modular kitchen units and walk-in closet systems, an area of demand that's grown substantially in newer housing societies over the last few years, where clients increasingly want organized, purpose-built storage rather than standard almirahs. I use both plywood and MDF depending on budget and moisture exposure in the intended location, and I always explain material trade-offs honestly rather than upselling a more expensive option that isn't actually necessary for the client's situation. I also take on smaller repair jobs — fixing broken drawer sliders, replacing worn cabinet hinges, and realigning doors that have started sagging — since I believe staying available for small maintenance work is what keeps clients coming back for bigger projects later. Every custom order comes with a hand-drawn layout and material list before I begin cutting, so there are no surprises about scope once work is underway.",
    profession: "carpenter",
    status: "pending",
    availability: {
      days: [1, 2, 3, 4, 5, 6],
      startTime: "09:00",
      endTime: "18:00",
    },
    services: [
      "Modular Kitchen Units",
      "Walk-in Closet Systems",
      "Cabinet Hinge Replacement",
      "Furniture Repair",
    ],
    price: 1250,
    location: "Bahria Town Phase 8, Rawalpindi, Punjab",
    experience: "intermediate",
    responseTime: "2",
    geometry: { type: "Point", coordinates: [73.2215, 33.5227] },
  },
  {
    title: "Rashid Electrical Contractors",
    avatar: {
      filename: "avatar_45",
      url: "https://randomuser.me/api/portraits/men/60.jpg",
    },
    about:
      "I've been in the electrical trade for twelve years, and over that time I've moved from doing small residential jobs to taking on contracts for entire housing blocks and small commercial plazas in Gujranwala. My team of two assistants and I handle complete electrical fit-outs for new construction, including main distribution board setup, floor-wise sub-distribution wiring, and coordination with civil contractors on conduit placement before walls are finished. For existing properties, I offer full rewiring services for homes whose electrical systems have aged past a safe point, along with generator and UPS integration for properties that need seamless backup power switching. I'm also certified to handle basic fire alarm and smoke detector wiring for small commercial spaces, a service that's become more commonly requested as building codes have started to be enforced more strictly. I provide a written estimate breaking down labor and material costs separately before any large job, since I've found this transparency builds far more trust than a single lump-sum quote, particularly for clients spending significant amounts on a full property rewire.",
    profession: "electrician",
    status: "verified",
    availability: {
      days: [1, 2, 3, 4, 5, 6],
      startTime: "08:00",
      endTime: "18:00",
    },
    services: [
      "Full Property Rewiring",
      "Generator/UPS Integration",
      "Fire Alarm Wiring",
      "New Construction Electrical Fit-out",
    ],
    price: 1100,
    location: "Satellite Town, Gujranwala, Punjab",
    experience: "expert",
    responseTime: "1",
    geometry: { type: "Point", coordinates: [74.1883, 32.1614] },
  },
  {
    title: "Waqar Plumbing Works",
    avatar: {
      filename: "avatar_46",
      url: "https://randomuser.me/api/portraits/men/68.jpg",
    },
    about:
      "I've been working as a plumber for four years in Abbottabad, an area where the hilly terrain and older housing stock bring plumbing challenges that are a bit different from flat urban areas — water pressure and gravity-fed systems in particular require a different approach than what's standard in the plains. I handle general plumbing repair including leaking pipes and fittings, blocked drains, and toilet cistern issues, along with installation work for new bathrooms and kitchens in homes under construction or renovation. I've developed a particular focus on solving low water pressure complaints related to elevation differences between water tanks and taps, often recommending booster pump placement rather than simply replacing fixtures, which is a common but ineffective fix I see other plumbers apply. I also service and repair water heaters and geysers, including gas-fired units which are still widely used in this region despite the shift toward electric geysers elsewhere. Being based locally with a small van of tools and common fittings means I can usually respond same-day for urgent issues like burst pipes rather than requiring a next-day appointment.",
    profession: "plumber",
    status: "verified",
    availability: {
      days: [0, 1, 2, 3, 4, 5, 6],
      startTime: "08:00",
      endTime: "19:00",
    },
    services: [
      "Gravity-Fed System Repair",
      "Booster Pump Installation",
      "Gas Geyser Servicing",
      "Emergency Burst Pipe Repair",
    ],
    price: 700,
    location: "Mandian, Abbottabad, KPK",
    experience: "intermediate",
    responseTime: "1",
    geometry: { type: "Point", coordinates: [73.2215, 34.1688] },
  },
  {
    title: "Sami Paint & Design",
    avatar: {
      filename: "avatar_47",
      url: "https://randomuser.me/api/portraits/men/73.jpg",
    },
    about:
      "I've been a professional painter for six years, working across residential projects in Abbottabad and nearby hill-station towns where clients often want warmer, richer color palettes suited to cooler weather and wood-heavy interior finishes common in this region. My core services include full interior and exterior painting, wood staining and varnish work for the timber trim and doors found in many older local homes, and rooftop and boundary wall coating to handle the heavier rainfall this area sees compared to the plains. I take particular care with exterior work here, since homes at elevation face more extreme temperature swings that can cause standard paints to crack faster than in warmer cities. I also do textured interior finishes on request, though demand for this is a bit less common locally compared to bigger cities, and clients here more often prefer classic matte or satin emulsion finishes in warm, earthy tones. I always test paint colors on an actual wall section under the home's natural lighting before finalizing, since color often reads very differently once applied at scale compared to a small sample card.",
    profession: "painter",
    status: "pending",
    availability: {
      days: [1, 2, 3, 4, 5, 6],
      startTime: "09:00",
      endTime: "17:00",
    },
    services: [
      "Interior/Exterior Painting",
      "Wood Staining & Varnish",
      "Rooftop Coating",
      "Boundary Wall Painting",
    ],
    price: 1050,
    location: "Supply Bazaar, Abbottabad, KPK",
    experience: "intermediate",
    responseTime: "2",
    geometry: { type: "Point", coordinates: [73.2117, 34.1463] },
  },
  {
    title: "Fawad's Cleaning Company",
    avatar: {
      filename: "avatar_48",
      url: "https://randomuser.me/api/portraits/men/80.jpg",
    },
    about:
      "I founded this cleaning company three years ago after working for a larger cleaning contractor in Islamabad and deciding I could offer more personalized, reliable service on a smaller scale. My team of four covers homes, small offices, and guesthouses across the twin cities, with services ranging from standard weekly maintenance cleaning to full deep-cleaning packages for spring cleaning or pre-guest preparation. We pay particular attention to kitchen appliance cleaning — the inside of ovens, refrigerators, and range hoods — since these are areas that build up grease over time and are often skipped in routine cleaning visits. For guesthouse and short-term rental clients, we offer a fast turnaround service between guest checkouts and new check-ins, including fresh linen arrangement if requested. All staff go through a short training session with me personally before their first solo assignment, covering both cleaning technique and basic etiquette when working inside someone else's home or property. We also carry our own cleaning supplies so clients don't need to stock products themselves, though we're happy to use client-provided products if they have specific preferences.",
    profession: "cleaner",
    status: "verified",
    availability: {
      days: [0, 1, 2, 3, 4, 5, 6],
      startTime: "07:00",
      endTime: "19:00",
    },
    services: [
      "Guesthouse/Rental Cleaning",
      "Kitchen Appliance Deep Cleaning",
      "Weekly Maintenance Cleaning",
      "Pre-Guest Preparation",
    ],
    price: 620,
    location: "I-8, Islamabad",
    experience: "intermediate",
    responseTime: "1",
    geometry: { type: "Point", coordinates: [73.0842, 33.6663] },
  },
  {
    title: "Sir Zubair's Biology Institute",
    avatar: {
      filename: "avatar_49",
      url: "https://randomuser.me/api/portraits/men/85.jpg",
    },
    about:
      "I hold a degree in Zoology and have dedicated the last nine years entirely to teaching Biology at the Intermediate and MDCAT preparation level, which I consider my true specialization rather than a general subject tutor covering multiple sciences. My classes emphasize diagram-based learning and labeled illustration practice, since Biology exams heavily reward accurate labeling and clear diagrams, an area students often underestimate compared to written answers. I run structured MDCAT batches that begin nearly a year before the exam, building from foundational Intermediate concepts up through intensive past-paper practice in the final months, with regular mock tests under timed conditions to build exam stamina. For students not aiming for MDCAT, I still ensure a strong grasp of board exam requirements, focusing on the specific answer format and marking scheme examiners look for. Over the years, a meaningful number of my MDCAT students have secured admission to government medical colleges, and I keep informal statistics on batch performance each year to refine which topics need heavier repetition in the following year's sessions.",
    profession: "tutor",
    status: "verified",
    availability: {
      days: [1, 2, 3, 4, 5, 6],
      startTime: "14:00",
      endTime: "20:00",
    },
    services: [
      "Intermediate Biology",
      "MDCAT Biology Preparation",
      "Diagram-Based Learning",
      "Timed Mock Testing",
    ],
    price: 2100,
    location: "F-8, Islamabad",
    experience: "expert",
    responseTime: "1",
    geometry: { type: "Point", coordinates: [73.0169, 33.7128] },
  },
  {
    title: "Naeem Solar & Electric",
    avatar: {
      filename: "avatar_50",
      url: "https://randomuser.me/api/portraits/men/91.jpg",
    },
    about:
      "I've been working in the electrical trade for ten years, and over the last three I've focused almost exclusively on solar installations as demand across Faisalabad has grown sharply with rising grid electricity costs. My work covers full system design based on a household's actual consumption pattern rather than a one-size-fits-all package, including panel selection, inverter sizing, and battery backup configuration for clients who want protection during load-shedding rather than just daytime savings. I handle the complete process from initial site survey and roof assessment through to final net-metering application with the local electricity supply company, which involves paperwork many clients find confusing and are relieved to have handled for them. Outside of solar, I still take on general electrical repair and household wiring jobs, since I believe staying connected to everyday electrical work keeps my troubleshooting skills sharp and gives me a steady stream of work between larger solar projects. I provide a written system performance estimate before installation and follow up with clients three months after commissioning to confirm the system is performing as expected.",
    profession: "electrician",
    status: "verified",
    availability: {
      days: [1, 2, 3, 4, 5, 6],
      startTime: "09:00",
      endTime: "18:00",
    },
    services: [
      "Solar System Design",
      "Net-Metering Application",
      "Battery Backup Configuration",
      "General Electrical Repair",
    ],
    price: 1200,
    location: "Jinnah Colony, Faisalabad, Punjab",
    experience: "expert",
    responseTime: "1",
    geometry: { type: "Point", coordinates: [73.0879, 31.4504] },
  },
];

module.exports = sampleListings.map((element) => {
  return { ...element, owner: "6a78acd6228872235319b8c1" };
});
