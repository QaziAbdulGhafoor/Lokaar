// sampleListings2.js
// 10 sample Listing documents for Lokaar — all profession: "tutor".
// `owner` and `reviews` are intentionally omitted — assign these yourself
// (e.g. loop through and set owner: someUserId before insertMany).
//
// "about" sections are written longer / resume-style since the details
// page is meant to read like a profile, not a one-liner.
//
// geometry.coordinates format is [longitude, latitude] (GeoJSON order).

const sampleListings = [
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
    title: "Miss Sana's Computer Science Academy",
    avatar: {
      filename: "avatar_51",
      url: "https://randomuser.me/api/portraits/women/34.jpg",
    },
    about:
      "I completed my BS in Computer Science and have spent the past four years teaching O-Level and A-Level Computer Science alongside introductory programming to younger students who are curious about coding outside of school syllabus requirements. My sessions balance the theoretical content examiners expect — data representation, algorithms, and system architecture — with hands-on practice, since I've found students genuinely understand a concept like sorting only once they've written and traced through the code themselves. For O-Level students I focus heavily on the practical programming component, usually in Python, walking through past paper style problems until the logic becomes second nature rather than memorized syntax. I also run a small weekend batch introducing web development basics to older students who want a head start before university, covering HTML, CSS, and simple JavaScript projects. I keep session notes and code samples organized in a shared drive folder for each student so they can revisit material between classes rather than relying purely on memory of what was covered.",
    profession: "tutor",
    status: "verified",
    availability: {
      days: [0, 1, 2, 3, 4, 5],
      startTime: "16:00",
      endTime: "20:00",
    },
    services: [
      "O-Level Computer Science",
      "A-Level Computer Science",
      "Python Programming Basics",
      "Intro Web Development",
    ],
    price: 1850,
    location: "DHA Phase 5, Lahore, Punjab",
    experience: "intermediate",
    responseTime: "1",
    geometry: { type: "Point", coordinates: [74.4152, 31.4762] },
  },
  {
    title: "Sir Tariq's English Grammar School",
    avatar: {
      filename: "avatar_52",
      url: "https://randomuser.me/api/portraits/men/12.jpg",
    },
    about:
      "I've been teaching English for eleven years, starting out at a private school before moving fully into home tuitions to work more closely with individual students. My focus is primary and middle-school level English — grammar fundamentals, comprehension, and creative writing — since I believe the habits formed at this stage decide how comfortable a student is with the language for the rest of their academic life. I spend a good portion of every session on reading aloud and vocabulary building, correcting pronunciation and sentence structure in the moment rather than only through written feedback later. For students preparing for entrance tests to better schools, I also cover verbal reasoning and comprehension passages in the style typically used in admission exams. Parents often ask me to also help with handwriting and spelling consistency for younger children, which I'm happy to fold into regular sessions since these skills tend to improve together with reading fluency. I keep a simple notebook per student tracking recurring mistakes so I can target revision toward what actually needs the most attention.",
    profession: "tutor",
    status: "verified",
    availability: {
      days: [1, 2, 3, 4, 5, 6],
      startTime: "15:00",
      endTime: "19:00",
    },
    services: [
      "Primary/Middle School English",
      "Grammar & Comprehension",
      "Creative Writing",
      "School Admission Test Prep",
    ],
    price: 1400,
    location: "Satellite Town, Rawalpindi, Punjab",
    experience: "expert",
    responseTime: "1",
    geometry: { type: "Point", coordinates: [73.0551, 33.6478] },
  },
  {
    title: "Miss Hina's Accounting & Commerce Tuitions",
    avatar: {
      filename: "avatar_53",
      url: "https://randomuser.me/api/portraits/women/40.jpg",
    },
    about:
      "I hold an ACCA qualification and have been tutoring Accounting, Business Studies, and Economics at the O-Level and A-Level for the past six years, alongside working part-time in finance. My tutoring style draws on real workplace examples rather than only textbook scenarios, which I've found helps students see why double-entry bookkeeping or cost concepts actually matter rather than treating them as abstract rules to memorize. I place strong emphasis on past paper practice for Accounting, since the subject rewards a consistent method and presentation style that examiners are specifically looking for, and I drill this repeatedly with students in the months leading up to exams. For Business Studies and Economics, I focus on case study analysis and structured essay technique, helping students build arguments that actually address the command word in a question rather than writing everything they know on a topic. I run small group batches of up to five students, which keeps sessions interactive, and I share a bank of practice questions with each batch that I've built up and refined over several years of teaching.",
    profession: "tutor",
    status: "pending",
    availability: {
      days: [0, 1, 2, 3, 4, 5],
      startTime: "17:00",
      endTime: "21:00",
    },
    services: [
      "O/A-Level Accounting",
      "Business Studies",
      "Economics",
      "Past Paper Technique",
    ],
    price: 1950,
    location: "Clifton, Karachi, Sindh",
    experience: "expert",
    responseTime: "2",
    geometry: { type: "Point", coordinates: [67.0299, 24.8138] },
  },
  {
    title: "Sir Adeel's Urdu & Islamiat Academy",
    avatar: {
      filename: "avatar_54",
      url: "https://randomuser.me/api/portraits/men/58.jpg",
    },
    about:
      "I've been teaching Urdu and Islamiat for Matric and Intermediate students for nine years, working out of a small study room attached to my home where I take students both individually and in small batches of three or four. My approach to Urdu focuses heavily on essay and letter-writing technique, since board exams reward a specific structure and vocabulary range that many students never get explicit guidance on in school. For Islamiat, I emphasize understanding the context and reasoning behind topics rather than pure memorization, though I also drill commonly repeated question patterns closer to exam time since I know familiarity helps reduce exam-day anxiety. I've noticed many students treat these subjects as easy marks to be picked up last-minute, and part of my job is convincing them to start earlier so the depth of their answers actually stands out rather than reading as generic. I also help a smaller number of students with Pakistan Studies, since the three subjects often overlap in exam scheduling and students find it convenient to prepare them together with one tutor.",
    profession: "tutor",
    status: "verified",
    availability: {
      days: [1, 2, 3, 4, 5, 6],
      startTime: "16:00",
      endTime: "20:00",
    },
    services: [
      "Matric/Intermediate Urdu",
      "Islamiat",
      "Pakistan Studies",
      "Essay & Letter Writing",
    ],
    price: 1300,
    location: "Iqbal Town, Lahore, Punjab",
    experience: "expert",
    responseTime: "1",
    geometry: { type: "Point", coordinates: [74.2938, 31.5122] },
  },
  {
    title: "Miss Mahnoor's Early Learning Studio",
    avatar: {
      filename: "avatar_55",
      url: "https://randomuser.me/api/portraits/women/47.jpg",
    },
    about:
      "I have a background in Early Childhood Education and have spent the past three years tutoring pre-school and early primary students, focusing on foundational literacy and numeracy rather than exam-driven subjects. My sessions are deliberately activity-based, using flashcards, simple games, and short worksheets rather than long periods of sitting still, since younger children learn far better through repetition wrapped in play than through direct instruction alone. I work closely with parents to identify specific gaps — a child mixing up similar letters, struggling with number sequencing, or falling behind peers in reading fluency — and build a short, achievable weekly goal rather than an overwhelming long-term plan. I also help prepare children for interviews and assessment tests required for admission into better primary schools, which has become a more requested service as competition for good school seats has increased in the city. I keep parents updated after every few sessions with a short note on progress, since I've found consistent communication matters as much as the teaching itself at this age group.",
    profession: "tutor",
    status: "verified",
    availability: {
      days: [1, 2, 3, 4, 5],
      startTime: "10:00",
      endTime: "14:00",
    },
    services: [
      "Early Literacy & Numeracy",
      "Pre-School Foundations",
      "School Admission Interview Prep",
      "Parent Progress Reporting",
    ],
    price: 1200,
    location: "Bahria Town, Rawalpindi, Punjab",
    experience: "intermediate",
    responseTime: "1",
    geometry: { type: "Point", coordinates: [73.2477, 33.5289] },
  },
];

module.exports = sampleListings.map((element) => {
  return { ...element, owner: "6a78acd6228872235319b8c1" };
});
