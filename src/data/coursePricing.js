export const individualCoursePrices = [
  {
    id: "algebra-1",
    aliases: ["algebra i", "advanced algebra i", "advanced algebra 1"],
    school: "Mathematics",
    title: "Algebra I",
    description: "Expressions, equations, functions, modeling, and a real-world capstone.",
    launchPrice: 29,
    regularPrice: 49,
    path: "/library/high-school/algebra-1",
  },
  {
    id: "algebra-2",
    aliases: ["algebra ii", "advanced algebra ii", "advanced algebra 2"],
    school: "Mathematics",
    title: "Algebra II",
    description: "Advanced functions, equations, systems, polynomials, and applied modeling.",
    launchPrice: 29,
    regularPrice: 49,
    path: "/library/high-school/algebra-2",
  },
  {
    id: "precalculus",
    aliases: ["precalculus", "pre-calculus"],
    school: "Mathematics",
    title: "Precalculus",
    description: "Functions, trigonometry, conics, vectors, sequences, and preparation for calculus.",
    launchPrice: 39,
    regularPrice: 69,
    path: "/library/mathematics",
    developing: true,
  },
  {
    id: "probability-foundations",
    aliases: ["probability foundations", "probability"],
    school: "Mathematics",
    title: "Probability Foundations",
    description: "Probability models, counting, simulation, uncertainty, and applied investigations.",
    launchPrice: 39,
    regularPrice: 69,
    path: "/library/mathematics/probability-foundations",
  },
  {
    id: "linear-algebra-foundations",
    aliases: ["linear algebra foundations", "linear algebra foundations to ai"],
    school: "Mathematics",
    title: "Linear Algebra Foundations",
    description: "Vectors, matrices, transformations, determinants, eigenvalues, and AI connections.",
    launchPrice: 49,
    regularPrice: 79,
    path: "/library/college/linear-algebra",
  },
  {
    id: "mathematics-data-science-ai",
    aliases: ["mathematics for data science and ai"],
    school: "Mathematics",
    title: "Mathematics for Data Science and AI",
    description: "Linear algebra, calculus, probability, statistics, and optimization in one pathway.",
    launchPrice: 79,
    regularPrice: 129,
    path: "/library/mathematics",
  },
  {
    id: "python-beginners",
    aliases: ["python for beginners", "python foundations"],
    school: "Computer Science",
    title: "Python Foundations",
    description: "Programming fundamentals, problem solving, reliable code, and a complete application.",
    launchPrice: 49,
    regularPrice: 89,
    path: "/library/python/python-foundations",
  },
  {
    id: "power-bi-data-analytics",
    aliases: ["power bi data analytics"],
    school: "Data Analytics",
    title: "Power BI Data Analytics",
    description: "Power Query, semantic models, DAX, visualization, and decision-focused reports.",
    launchPrice: 59,
    regularPrice: 99,
    path: "/library/data-ai",
    developing: true,
  },
  {
    id: "sql-microsoft-fabric",
    aliases: ["sql and microsoft fabric foundations"],
    school: "Data Engineering",
    title: "SQL and Microsoft Fabric Foundations",
    description: "SQL, data modeling, warehouses, Lakehouses, pipelines, and Microsoft Fabric.",
    launchPrice: 69,
    regularPrice: 119,
    path: "/library/data-ai",
    developing: true,
  },
  {
    id: "robotics-python",
    aliases: ["robotics with python"],
    school: "Engineering",
    title: "Robotics with Python",
    description: "Python control, GPIO, sensors, motors, testing, and an obstacle-avoiding robot.",
    launchPrice: 79,
    regularPrice: 129,
    path: "/courses/robotics-python",
    note: "Hardware is not included.",
    developing: true,
  },
  {
    id: "ai-project-portfolio-builder",
    aliases: ["ai project portfolio builder"],
    school: "Artificial Intelligence",
    title: "AI Project Portfolio Builder",
    description: "Build, evaluate, document, deploy, and present professional AI portfolio projects.",
    launchPrice: 89,
    regularPrice: 149,
    path: "/courses/ai-project-portfolio-builder",
    developing: true,
  },
  {
    id: "data-ai-foundations",
    aliases: [
      "data and artificial intelligence",
      "data and ai: foundations to production",
    ],
    school: "Data and AI",
    title: "Data and AI: Foundations to Production",
    description: "A 10-module professional pathway from decision framing to production AI systems.",
    launchPrice: 149,
    regularPrice: 249,
    path: "/library/data-ai",
    featured: true,
  },
];

export const membershipPrices = [
  {
    id: "explorer",
    name: "Free Explorer",
    price: 0,
    cadence: "forever",
    description: "Explore selected lessons before choosing a complete learning path.",
    features: [
      "Course previews",
      "Selected lessons",
      "Basic practice",
      "Progress tracking",
    ],
  },
  {
    id: "monthly",
    name: "Monthly All Access",
    price: 19,
    cadence: "month",
    description: "Flexible access to every available self-paced course.",
    features: [
      "All available courses",
      "Projects and assessments",
      "Eligible certificates",
      "Cancel before renewal",
    ],
    featured: true,
  },
  {
    id: "annual",
    name: "Annual All Access",
    price: 149,
    cadence: "year",
    description: "The best self-paced value for learners building several skills.",
    features: [
      "Everything in Monthly",
      "One full year of access",
      "Portfolio pathways",
      "Founding-member price",
    ],
  },
  {
    id: "career-accelerator",
    name: "Career Accelerator",
    price: 399,
    cadence: "year",
    description: "Structured learning plus professional feedback on your evidence of capability.",
    features: [
      "Annual All Access",
      "Three project reviews",
      "Portfolio feedback",
      "Career-planning session",
    ],
  },
];

export const courseBundles = [
  {
    name: "Mathematics Foundations",
    courses: "Algebra I, Algebra II, and Precalculus",
    price: 99,
  },
  {
    name: "Advanced Mathematics",
    courses: "Probability, Linear Algebra, and Mathematics for Data Science and AI",
    price: 149,
  },
  {
    name: "Data Analyst Career Path",
    courses: "Python, SQL/Fabric, Power BI, and Mathematics for Data Science and AI",
    price: 249,
  },
  {
    name: "AI Engineer Career Path",
    courses: "Python, Mathematics, AI Portfolio Builder, and Data and AI",
    price: 349,
  },
];

function normalize(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

export function formatPrice(price) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
}

export function getCoursePricing(course) {
  const id = normalize(course?.id || course?.slug);
  const title = normalize(course?.title);

  return (
    individualCoursePrices.find((item) => {
      if (normalize(item.id) === id) return true;

      return item.aliases.some((alias) => normalize(alias) === title);
    }) ?? null
  );
}

export default individualCoursePrices;
