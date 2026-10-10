const slugify = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const palettes = [
  "from-blue-950 via-indigo-900 to-slate-950",
  "from-emerald-950 via-teal-900 to-slate-950",
  "from-violet-950 via-purple-900 to-slate-950",
  "from-amber-950 via-orange-900 to-slate-950",
  "from-rose-950 via-red-900 to-slate-950",
  "from-cyan-950 via-sky-900 to-slate-950",
  "from-fuchsia-950 via-pink-900 to-slate-950",
  "from-slate-950 via-blue-950 to-black",
];

const sharedVocabulary = [
  ["Representation", "A symbolic, graphical, numerical, verbal, or physical description of an idea."],
  ["Model", "A mathematical description used to explain, predict, or decide."],
  ["Constraint", "A condition that limits possible values or solutions."],
  ["Equivalent", "Different forms that have the same mathematical value or meaning."],
  ["Domain", "The set of permitted input values."],
  ["Parameter", "A value that controls a mathematical model or family of objects."],
  ["Assumption", "A condition accepted while constructing or interpreting a model."],
  ["Verification", "Evidence that a result satisfies the original conditions."],
];

function createLesson(course, module, title, lessonIndex) {
  const lessonNumber = lessonIndex + 1;
  const projectLesson = lessonNumber === 8;
  const formula = module.formulas[lessonIndex % module.formulas.length];
  const vocabulary = [...module.vocabulary, ...sharedVocabulary].slice(0, 10).map(([term, definition]) => ({ term, definition }));
  const example = module.examples[lessonIndex % module.examples.length];

  return {
    id: `${course.id}-m${module.id}-l${lessonNumber}`,
    courseId: course.id,
    courseTitle: course.title,
    moduleNumber: module.id,
    moduleTitle: module.title,
    lessonNumber,
    title,
    slug: slugify(title),
    duration: projectLesson ? "75–120 minutes" : "50–65 minutes",
    level: module.level || course.level,
    essentialQuestion: `How can ${title.toLowerCase()} help us reason, model, and verify a mathematical result?`,
    bigIdea: `${module.focus} This lesson connects meaning, representation, procedure, and evidence rather than treating mathematics as isolated rules.`,
    whyItMatters: `${title} supports accurate reasoning in ${course.title}. It helps learners move between equations, graphs, tables, diagrams, data, or code and communicate what a result means.`,
    objectives: [
      `Define and interpret the central ideas in ${title}.`,
      "Represent the mathematics in at least two ways.",
      "Complete a worked calculation with justified steps.",
      "Check a result using substitution, estimation, a graph, data, or technology.",
      `Apply the lesson to the ${module.project} project.`,
    ],
    vocabulary,
    formulas: [formula, ...module.formulas.filter((item) => item !== formula)].slice(0, 6),
    visualType: module.visualType,
    reasoningCycle: [
      ["1. Understand", "Identify known quantities, the question, units, and constraints."],
      ["2. Represent", "Choose an equation, graph, table, diagram, data model, or algorithm."],
      ["3. Solve", "Carry out justified steps while preserving equivalence and precision."],
      ["4. Verify", "Use a second representation, substitution, bounds, or technology."],
      ["5. Interpret", "State the result in context and explain limitations."],
    ],
    workedExamples: [
      {
        title: `Core example — ${title}`,
        problem: example.problem,
        steps: example.steps,
        answer: example.answer,
      },
      {
        title: "Compare two representations",
        problem: `Represent the core idea from ${title} symbolically and visually. Explain what remains unchanged between the representations.`,
        steps: ["Name the mathematical objects and units.", `Use ${formula} as the symbolic reference.`, "Create a graph, table, diagram, or data representation.", "Compare corresponding features and verify one value."],
        answer: "A correct comparison identifies matching quantities, preserves the same domain and assumptions, and provides a numerical or logical check.",
      },
      {
        title: "Applied reasoning extension",
        problem: `Build a realistic situation where ${title.toLowerCase()} is needed, solve it, and test whether the answer is reasonable.`,
        steps: ["Define variables with units.", "State assumptions and constraints.", "Select and apply the relevant relationship.", "Check boundaries and interpret the result."],
        answer: "Answers vary. Full credit requires a valid model, transparent work, verification, and a contextual conclusion.",
      },
    ],
    technology: module.technology,
    guidedPractice: [
      `Explain ${title} in your own words and give one non-example.`,
      `Identify each quantity in ${formula} and state any restrictions.`,
      "Complete the core example with one step intentionally omitted, then justify the missing step.",
      "Use the supporting figure to predict how changing one quantity changes the result.",
      "Check a partner solution and identify the first incorrect or unsupported step.",
    ],
    independentPractice: [
      `Solve a routine problem involving ${title}.`,
      "Solve a second problem using a different representation or method.",
      "Create and solve a problem with a boundary or special case.",
      "Use technology to verify a result, then explain what the technology does not prove.",
      `Add one polished artifact to ${module.project}.`,
    ],
    commonMistakes: module.mistakes,
    project: projectLesson ? {
      title: module.project,
      description: module.projectDescription,
      requirements: [
        "A clear question, audience, and mathematical goal",
        "At least two connected representations",
        "Accurate calculations with units and defined variables",
        "A graph, diagram, data display, or coded visualization",
        "Independent verification and an error analysis",
        "A conclusion explaining assumptions, limitations, and next steps",
      ],
    } : null,
    assessment: Array.from({ length: 10 }, (_, index) => ({
      id: `${course.id}-m${module.id}-l${lessonNumber}-q${index + 1}`,
      points: 10,
      prompt: [
        `Define the main idea in ${title}.`,
        `Interpret every quantity in ${formula}.`,
        "Complete and justify a representative calculation.",
        "Connect an equation to a graph, table, diagram, or data display.",
        "Find and correct a plausible mathematical error.",
        "Verify a result using an independent method.",
        "Analyze a boundary, special, or counterexample case.",
        "Apply the concept to a new real-world situation.",
        "Explain an assumption and how it affects the conclusion.",
        "Communicate the solution clearly enough for another learner to reproduce it.",
      ][index],
    })),
    summary: [module.focus, `The key reference for this lesson is ${formula}.`, "Strong mathematical work connects representations and preserves meaning.", "A result is incomplete until it has been checked and interpreted."],
    reflection: ["Which representation made the idea clearest?", "Where was an error most likely, and how did you check it?", "What assumption mattered most?", "How could this idea support a future course, career, or project?"],
  };
}

function createModule(course, raw, index) {
  const module = { ...raw, id: index + 1, color: palettes[index % palettes.length], lessonCount: 8, level: raw.level || course.level };
  module.lessons = raw.lessons.map((title, lessonIndex) => createLesson(course, module, title, lessonIndex));
  return module;
}

function createCourse(raw) {
  const course = { ...raw, moduleCount: 8, lessonCount: 64, projectCount: 8 };
  course.modules = raw.modules.map((module, index) => createModule(course, module, index));
  return course;
}

const m = (title, focus, visualType, formulas, lessons, project, vocabulary, examples, technology, mistakes) => ({
  title, focus, description: focus, visualType, formulas, lessons, project,
  projectDescription: `Create a polished ${project} that integrates every major idea in this module and presents verifiable mathematical evidence.`,
  vocabulary, examples, technology, mistakes,
});

const algebraVocabulary = [["Variable", "A symbol representing a quantity."], ["Expression", "A mathematical phrase with numbers, variables, and operations."], ["Equation", "A statement that two expressions are equal."], ["Function", "A relation assigning each input exactly one output."], ["Solution", "A value that makes a statement true."], ["Rate of change", "The change in output per unit change in input."]];
const geometryVocabulary = [["Congruent", "Equal in size and shape."], ["Similar", "Same shape with proportional corresponding lengths."], ["Transformation", "A rule that maps points to image points."], ["Proof", "A logical argument establishing a claim."], ["Theorem", "A statement proved from definitions and accepted results."], ["Locus", "The set of points satisfying a condition."]];
const calculusVocabulary = [["Limit", "The value a function approaches."], ["Derivative", "Instantaneous rate of change."], ["Integral", "Net accumulation over an interval."], ["Continuity", "Unbroken local behavior defined through limits."], ["Tangent", "A line with slope equal to the derivative at a point."], ["Accumulation", "A total formed from continuously changing contributions."]];
const probabilityVocabulary = [["Outcome", "A possible result of a random process."], ["Event", "A set of outcomes."], ["Probability", "A measure of likelihood from 0 to 1."], ["Random variable", "A numerical function of outcomes."], ["Distribution", "The pattern of possible values and probabilities."], ["Inference", "A conclusion about a population based on sample evidence."]];
const linearVocabulary = [["Vector", "An ordered quantity with magnitude and direction or components."], ["Matrix", "A rectangular array representing data or a linear map."], ["Span", "All linear combinations of selected vectors."], ["Basis", "An independent spanning set."], ["Transformation", "A mapping that preserves vector addition and scalar multiplication."], ["Eigenvector", "A nonzero vector whose direction is preserved by a linear map."]];
const aiVocabulary = [["Feature", "A measurable input used by a model."], ["Weight", "A learned coefficient controlling influence."], ["Loss", "A quantity measuring prediction error."], ["Gradient", "A vector of partial derivatives pointing toward steepest increase."], ["Embedding", "A vector representation of an object."], ["Optimization", "The process of finding parameters that minimize or maximize an objective."]];

const algebraExample = { problem: "A service charges a $12 fee plus $4 per hour. Write a model and find the cost for 5 hours.", steps: ["Define h as hours and C as cost.", "Model C = 4h + 12.", "Substitute h = 5: C = 4(5) + 12.", "Compute and check units."], answer: "C = $32." };
const geometryExample = { problem: "A right triangle has legs 6 cm and 8 cm. Find and verify the hypotenuse.", steps: ["Identify a = 6 and b = 8.", "Use a² + b² = c².", "Compute 36 + 64 = 100.", "Take the positive square root and verify 10 is the longest side."], answer: "The hypotenuse is 10 cm." };
const functionExample = { problem: "For f(x) = (x - 2)² + 1, identify the vertex and evaluate f(5).", steps: ["Read vertex form f(x) = (x - h)² + k.", "Identify vertex (2, 1).", "Substitute x = 5.", "Compute 3² + 1 = 10."], answer: "Vertex (2, 1); f(5) = 10." };
const trigExample = { problem: "A right triangle has hypotenuse 10 and an angle of 30°. Find the opposite side.", steps: ["Use sin θ = opposite/hypotenuse.", "Substitute sin 30° = x/10.", "Use sin 30° = 1/2.", "Solve x = 5 and check units."], answer: "The opposite side is 5 units." };
const calculusExample = { problem: "For f(x) = x², find the instantaneous rate of change at x = 3.", steps: ["Use f'(x) = lim[h→0] ((x+h)²-x²)/h.", "Expand and simplify to 2x + h.", "Take the limit to obtain f'(x) = 2x.", "Evaluate f'(3) = 6."], answer: "The instantaneous rate of change is 6." };
const probabilityExample = { problem: "A fair die is rolled. Find P(even or greater than 4).", steps: ["List even outcomes {2,4,6}.", "List outcomes greater than 4: {5,6}.", "Take the union {2,4,5,6}.", "Divide 4 favorable outcomes by 6 total outcomes."], answer: "P = 4/6 = 2/3." };
const matrixExample = { problem: "Compute [[1,2],[3,4]][[2],[1]] and interpret the result.", steps: ["Match dimensions: 2×2 times 2×1.", "First entry: 1(2)+2(1)=4.", "Second entry: 3(2)+4(1)=10.", "Report the resulting vector."], answer: "The product is [4, 10]ᵀ." };
const aiExample = { problem: "A model predicts ŷ = 0.6x₁ + 0.4x₂. Find the prediction for x₁=80 and x₂=50.", steps: ["Identify features and weights.", "Compute 0.6(80)=48.", "Compute 0.4(50)=20.", "Add contributions and interpret."], answer: "The prediction is 68." };

const commonTechnology = "Use Desmos, GeoGebra, a graphing calculator, or a short Python notebook to visualize the relationship and verify selected values.";
const commonMistakes = ["Applying a rule without checking its conditions", "Dropping units or restrictions", "Rounding too early", "Trusting a graph or calculator without an independent check"];

const rawCourses = [
  {
    id: "algebra-1", slug: "algebra-1", title: "Algebra I", pathway: "High School Mathematics", grade: "Grades 8–9", level: "Foundation", duration: "32–36 weeks", accent: "from-blue-800 via-indigo-800 to-slate-950", basePath: "/library/high-school/algebra-1", capstone: "Community Algebra Modeling Portfolio",
    description: "Build confident algebraic reasoning through expressions, equations, inequalities, functions, systems, exponents, quadratics, data, and authentic modeling.",
    outcomes: ["Reason with variables and expressions", "Solve equations and inequalities", "Analyze functions", "Model linear and exponential change", "Solve systems", "Interpret quadratics and data"],
    modules: [
      m("Foundations of Algebra", "Variables and expressions describe quantities, structure, and relationships.", "linear", ["a(b + c) = ab + ac", "PEMDAS", "ax + bx = (a+b)x"], ["Variables and Expressions", "Properties of Real Numbers", "Order of Operations", "Combining Like Terms", "The Distributive Property", "Evaluating Expressions", "Translating Words and Symbols", "Project: Algebra Foundations Model"], "Algebra Foundations Model", algebraVocabulary, [algebraExample], commonTechnology, commonMistakes),
      m("Solving Linear Equations", "Equation solving preserves equality through reversible operations.", "balance", ["ax + b = c", "x = (c-b)/a", "A = P(1+rt)"], ["One-Step Equations", "Two-Step Equations", "Multi-Step Equations", "Variables on Both Sides", "Equations with Fractions", "Literal Equations", "Linear Equation Applications", "Project: Equation Design Challenge"], "Equation Design Challenge", algebraVocabulary, [algebraExample], commonTechnology, commonMistakes),
      m("Linear Inequalities", "Inequalities describe ranges of values and constraints.", "linear", ["ax+b < c", "-x < a ⇒ x > -a", "a < x ≤ b"], ["Understanding Inequalities", "Solving One-Step Inequalities", "Multi-Step Inequalities", "Graphing Solution Sets", "Compound Inequalities", "Absolute Value Inequalities", "Constraint Modeling", "Project: Feasible Decision Plan"], "Feasible Decision Plan", algebraVocabulary, [algebraExample], commonTechnology, commonMistakes),
      m("Functions and Relations", "Functions connect each permitted input to one output and can be represented in many ways.", "mapping", ["y = f(x)", "average rate = Δy/Δx", "domain → range"], ["Relations and Functions", "Function Notation", "Domain and Range", "Tables and Mapping Diagrams", "Graphing Functions", "Rate of Change", "Comparing Functions", "Project: Function Storybook"], "Function Storybook", algebraVocabulary, [functionExample], commonTechnology, commonMistakes),
      m("Linear Functions", "Linear functions have a constant rate of change.", "linear", ["y = mx+b", "m = (y₂-y₁)/(x₂-x₁)", "y-y₁=m(x-x₁)"], ["Slope as Rate of Change", "Slope from Tables and Graphs", "Slope-Intercept Form", "Point-Slope Form", "Standard Form", "Parallel and Perpendicular Lines", "Linear Regression and Modeling", "Project: Local Cost Model"], "Local Cost Model", algebraVocabulary, [algebraExample], commonTechnology, commonMistakes),
      m("Systems of Equations", "A system solution satisfies multiple relationships simultaneously.", "linear", ["y=m₁x+b₁", "y=m₂x+b₂", "Ax=b"], ["Systems as Intersections", "Solving by Graphing", "Solving by Substitution", "Solving by Elimination", "No Solution and Infinite Solutions", "Systems of Inequalities", "Systems Applications", "Project: Break-Even Analysis"], "Break-Even Analysis", algebraVocabulary, [algebraExample], commonTechnology, commonMistakes),
      m("Exponents and Exponential Functions", "Exponents describe repeated multiplication and exponential functions model multiplicative change.", "exponential", ["aᵐaⁿ=aᵐ⁺ⁿ", "(aᵐ)ⁿ=aᵐⁿ", "y=a(1+r)ᵗ"], ["Integer Exponents", "Product and Quotient Rules", "Power Rules", "Scientific Notation", "Exponential Functions", "Growth and Decay", "Comparing Linear and Exponential Models", "Project: Growth Forecast"], "Growth Forecast", algebraVocabulary, [algebraExample], commonTechnology, commonMistakes),
      m("Polynomials, Quadratics, and Data", "Polynomial structure and quadratic models describe curved relationships, while data tests model quality.", "quadratic", ["y=ax²+bx+c", "x=(-b±√(b²-4ac))/(2a)", "r = correlation"], ["Polynomial Vocabulary and Operations", "Factoring Common Factors", "Factoring Trinomials", "Quadratic Graphs", "Solving Quadratic Equations", "The Quadratic Formula", "Scatter Plots and Regression", "Capstone: Community Algebra Portfolio"], "Community Algebra Modeling Portfolio", algebraVocabulary, [functionExample], commonTechnology, commonMistakes),
    ],
  },
  {
    id: "geometry", slug: "geometry", title: "Geometry", pathway: "High School Mathematics", grade: "Grades 9–10", level: "High School", duration: "32–36 weeks", accent: "from-emerald-800 via-teal-800 to-slate-950", basePath: "/library/mathematics/course/geometry", capstone: "Accessible Community Space Design",
    description: "Develop visual reasoning and proof through transformations, congruence, similarity, coordinate geometry, circles, measurement, and design.",
    outcomes: ["Write logical proofs", "Use transformations", "Apply congruence and similarity", "Solve coordinate geometry", "Analyze circles", "Model area and volume"],
    modules: [
      m("Foundations, Definitions, and Proof", "Geometry builds valid conclusions from definitions, diagrams, postulates, and logical reasoning.", "geometry", ["if p→q", "converse: q→p", "segment addition: AB+BC=AC"], ["Points, Lines, and Planes", "Segments and Distance", "Angles and Measurement", "Patterns and Conjectures", "Conditional Statements", "Definitions and Counterexamples", "Introduction to Proof", "Project: Geometry Reasoning Portfolio"], "Geometry Reasoning Portfolio", geometryVocabulary, [geometryExample], commonTechnology, commonMistakes),
      m("Transformations and Symmetry", "Rigid motions preserve distance and angle while other transformations change scale predictably.", "transformation", ["(x,y)→(x+a,y+b)", "(x,y)→(-x,y)", "(x,y)→(kx,ky)"], ["Translations", "Reflections", "Rotations", "Compositions", "Symmetry", "Dilations", "Coordinate Rules", "Project: Transformation Art"], "Transformation Art", geometryVocabulary, [geometryExample], commonTechnology, commonMistakes),
      m("Triangles and Congruence", "Triangle congruence establishes equal corresponding parts from sufficient evidence.", "geometry", ["SSS", "SAS", "ASA/AAS", "a+b>c"], ["Triangle Classification", "Triangle Angle Theorems", "Congruence by SSS", "Congruence by SAS", "Congruence by ASA and AAS", "Isosceles Triangles", "CPCTC and Proof", "Project: Truss Design"], "Truss Design", geometryVocabulary, [geometryExample], commonTechnology, commonMistakes),
      m("Similarity and Right Triangles", "Similarity preserves angle and proportional structure.", "geometry", ["a/b=c/d", "a²+b²=c²", "sin θ=opp/hyp"], ["Similarity Transformations", "Triangle Similarity", "Proportional Segments", "Right Triangle Similarity", "Pythagorean Theorem", "Special Right Triangles", "Trigonometric Ratios", "Project: Indirect Measurement"], "Indirect Measurement Investigation", geometryVocabulary, [geometryExample, trigExample], commonTechnology, commonMistakes),
      m("Coordinate Geometry", "Algebraic coordinates make geometric relationships measurable and testable.", "linear", ["d=√((x₂-x₁)²+(y₂-y₁)²)", "M=((x₁+x₂)/2,(y₁+y₂)/2)", "m=(y₂-y₁)/(x₂-x₁)"], ["Distance and Midpoint", "Slope and Parallel Lines", "Perpendicular Lines", "Equations of Lines", "Coordinate Proof", "Partitioning Segments", "Classifying Polygons", "Project: Coordinate Map"], "Coordinate Map", geometryVocabulary, [geometryExample], commonTechnology, commonMistakes),
      m("Polygons and Quadrilaterals", "Polygon properties follow from angle structure, parallelism, symmetry, and diagonals.", "geometry", ["interior sum=(n-2)180°", "exterior sum=360°", "A=bh"], ["Polygon Angle Sums", "Parallelograms", "Rectangles and Rhombi", "Squares", "Trapezoids and Kites", "Quadrilateral Proofs", "Tessellations", "Project: Structural Pattern"], "Structural Pattern", geometryVocabulary, [geometryExample], commonTechnology, commonMistakes),
      m("Circles", "Circles connect radius, angle, chord, arc, tangent, and sector relationships.", "circle", ["C=2πr", "A=πr²", "arc=(θ/360)2πr"], ["Circle Vocabulary", "Central and Inscribed Angles", "Chords and Arcs", "Tangents", "Secants", "Circle Equations", "Arc Length and Sector Area", "Project: Circular Design"], "Circular Design", geometryVocabulary, [geometryExample], commonTechnology, commonMistakes),
      m("Measurement, Solids, and Modeling", "Measurement formulas arise from decomposition, scaling, and accumulation.", "solid", ["A=πr²", "V=Bh", "V=(1/3)Bh"], ["Perimeter and Area", "Composite Figures", "Surface Area", "Prisms and Cylinders", "Pyramids and Cones", "Spheres", "Scale and Density", "Capstone: Community Space Design"], "Accessible Community Space Design", geometryVocabulary, [geometryExample], commonTechnology, commonMistakes),
    ],
  },
  {
    id: "algebra-2", slug: "algebra-2", title: "Algebra II", pathway: "High School Mathematics", grade: "Grades 10–11", level: "Intermediate", duration: "32–36 weeks", accent: "from-violet-800 via-purple-800 to-slate-950", basePath: "/library/high-school/algebra-2", capstone: "Multi-Model Decision System",
    description: "Extend function reasoning through systems, quadratics, polynomials, rational expressions, radicals, exponentials, logarithms, sequences, and trigonometry.",
    outcomes: ["Transform and compose functions", "Solve linear and nonlinear systems", "Analyze polynomial behavior", "Use rational and radical models", "Model exponential change", "Connect sequences and trigonometry"],
    modules: [
      m("Functions and Transformations", "Function families share structural features that transformations change predictably.", "mapping", ["g(x)=af(b(x-h))+k", "(f∘g)(x)=f(g(x))", "f⁻¹(f(x))=x"], ["Function Behavior", "Domain and Range", "Parent Functions", "Translations", "Reflections and Scaling", "Function Composition", "Inverse Functions", "Project: Function Transformation Gallery"], "Function Transformation Gallery", algebraVocabulary, [functionExample], commonTechnology, commonMistakes),
      m("Systems and Matrices", "Systems express interacting constraints and matrices organize efficient solution methods.", "linear", ["Ax=b", "det([[a,b],[c,d]])=ad-bc", "A⁻¹b=x"], ["Linear Systems Review", "Three-Variable Systems", "Systems of Inequalities", "Linear and Quadratic Systems", "Matrices and Dimensions", "Matrix Operations", "Solving Systems with Matrices", "Project: Resource Allocation Model"], "Resource Allocation Model", algebraVocabulary, [matrixExample], commonTechnology, commonMistakes),
      m("Quadratic Functions and Equations", "Equivalent quadratic forms reveal roots, vertex, symmetry, and rate of change.", "quadratic", ["y=ax²+bx+c", "y=a(x-h)²+k", "x=(-b±√(b²-4ac))/(2a)"], ["Quadratic Graphs", "Factoring Quadratics", "Completing the Square", "Quadratic Formula", "The Discriminant", "Complex Solutions", "Quadratic Modeling", "Project: Projectile Analysis"], "Projectile Analysis", algebraVocabulary, [functionExample], commonTechnology, commonMistakes),
      m("Polynomial Functions", "Polynomial degree, factors, zeros, and end behavior connect algebraic and graphical structure.", "polynomial", ["f(x)=a∏(x-rᵢ)", "remainder=f(c)", "aⁿ-bⁿ"], ["Polynomial Operations", "Graphs and End Behavior", "Polynomial Division", "Remainder and Factor Theorems", "Finding Zeros", "Multiplicity", "Fundamental Theorem of Algebra", "Project: Polynomial Shape Designer"], "Polynomial Shape Designer", algebraVocabulary, [functionExample], commonTechnology, commonMistakes),
      m("Rational and Radical Functions", "Restrictions, asymptotes, and extraneous solutions are essential when working with rational and radical expressions.", "rational", ["f(x)=p(x)/q(x)", "q(x)≠0", "ⁿ√(aᵐ)=aᵐ⁄ⁿ"], ["Rational Expressions", "Rational Equations", "Rational Function Graphs", "Asymptotes and Holes", "Radical Expressions", "Radical Equations", "Extraneous Solutions", "Project: Rate and Variation Model"], "Rate and Variation Model", algebraVocabulary, [functionExample], commonTechnology, commonMistakes),
      m("Exponential and Logarithmic Functions", "Logarithms invert exponentials and both model multiplicative processes.", "exponential", ["y=abˣ", "log_b(x)=y ⇔ bʸ=x", "A=P(1+r/n)ⁿᵗ"], ["Exponential Growth and Decay", "The Number e", "Logarithm Meaning", "Logarithm Properties", "Solving Exponential Equations", "Solving Logarithmic Equations", "Financial and Scientific Models", "Project: Growth and Risk Report"], "Growth and Risk Report", algebraVocabulary, [algebraExample], commonTechnology, commonMistakes),
      m("Sequences, Series, and Probability", "Sequences are functions on integer domains, and series accumulate their terms.", "sequence", ["aₙ=a₁+(n-1)d", "aₙ=a₁rⁿ⁻¹", "Sₙ=a₁(1-rⁿ)/(1-r)"], ["Arithmetic Sequences", "Geometric Sequences", "Recursive Rules", "Arithmetic Series", "Geometric Series", "Sigma Notation", "Binomial Theorem and Probability", "Project: Savings Sequence Plan"], "Savings Sequence Plan", algebraVocabulary, [algebraExample], commonTechnology, commonMistakes),
      m("Trigonometry and Mathematical Modeling", "Trigonometric functions model angle, periodicity, rotation, and oscillation.", "trig", ["sin²θ+cos²θ=1", "y=A sin(B(x-C))+D", "a/sin A=b/sin B"], ["Angles and Radians", "Unit Circle", "Sine and Cosine Graphs", "Trigonometric Identities", "Trigonometric Equations", "Laws of Sines and Cosines", "Periodic Modeling", "Capstone: Multi-Model Decision System"], "Multi-Model Decision System", algebraVocabulary, [trigExample], commonTechnology, commonMistakes),
    ],
  },
  {
    id: "precalculus", slug: "precalculus", title: "Precalculus", pathway: "High School Mathematics", grade: "Grades 11–12", level: "Advanced High School", duration: "32–36 weeks", accent: "from-amber-800 via-orange-800 to-slate-950", basePath: "/library/mathematics/course/precalculus", capstone: "Dynamic Systems Modeling Portfolio",
    description: "Prepare for calculus through advanced functions, trigonometry, analytic geometry, sequences, vectors, polar coordinates, limits, and modeling.",
    outcomes: ["Analyze advanced functions", "Model polynomial and rational behavior", "Use exponential and logarithmic models", "Master trigonometric reasoning", "Work with vectors and polar systems", "Reason about limits"],
    modules: [
      m("Functions and Their Behavior", "Functions encode relationships through domain, range, transformations, composition, and inverses.", "mapping", ["g(x)=af(b(x-h))+k", "(f∘g)(x)", "f⁻¹(x)"], ["Function Review and Notation", "Domain and Range", "Transformations", "Composition", "Inverse Functions", "Piecewise Functions", "Average Rate of Change", "Project: Function Behavior Atlas"], "Function Behavior Atlas", algebraVocabulary, [functionExample], commonTechnology, commonMistakes),
      m("Polynomial and Rational Models", "Zeros, multiplicity, asymptotes, and end behavior determine global function shape.", "polynomial", ["f(x)=a∏(x-rᵢ)", "f(x)=p(x)/q(x)", "end behavior from leading term"], ["Polynomial Structure", "Zeros and Multiplicity", "Polynomial Graphs", "Division and Synthetic Division", "Rational Zeros", "Rational Functions", "Asymptotes and Limits", "Project: Function Model Selection"], "Function Model Selection", algebraVocabulary, [functionExample], commonTechnology, commonMistakes),
      m("Exponential and Logarithmic Models", "Exponential functions model proportional change and logarithms recover exponents.", "exponential", ["A=A₀eᵏᵗ", "t₁/₂=ln2/k", "log_b(xy)=log_bx+log_by"], ["Exponential Functions", "Natural Exponential Function", "Logarithmic Functions", "Logarithm Laws", "Exponential Equations", "Logarithmic Equations", "Growth and Decay Modeling", "Project: Population or Finance Model"], "Population or Finance Model", algebraVocabulary, [algebraExample], commonTechnology, commonMistakes),
      m("Trigonometric Foundations", "The unit circle unifies angle, coordinates, periodicity, and trigonometric functions.", "trig", ["x=cosθ, y=sinθ", "sin²θ+cos²θ=1", "s=rθ"], ["Angles and Radian Measure", "Unit Circle", "Sine and Cosine", "Other Trigonometric Functions", "Trigonometric Graphs", "Transforming Periodic Functions", "Inverse Trigonometric Functions", "Project: Periodic Motion Model"], "Periodic Motion Model", algebraVocabulary, [trigExample], commonTechnology, commonMistakes),
      m("Trigonometric Identities and Equations", "Identities express invariant relationships and support equation solving.", "trig", ["sin(α±β)", "cos2θ=cos²θ-sin²θ", "1+tan²θ=sec²θ"], ["Fundamental Identities", "Sum and Difference Identities", "Double-Angle Identities", "Half-Angle Identities", "Verifying Identities", "Solving Trigonometric Equations", "Modeling Harmonic Motion", "Project: Identity Proof Collection"], "Identity Proof Collection", algebraVocabulary, [trigExample], commonTechnology, commonMistakes),
      m("Analytic Trigonometry", "Triangle laws and vector methods solve oblique geometry and direction problems.", "geometry", ["a/sin A=b/sin B", "c²=a²+b²-2ab cos C", "area=(1/2)ab sin C"], ["Right Triangle Applications", "Law of Sines", "Ambiguous Case", "Law of Cosines", "Triangle Area", "Bearings and Navigation", "Harmonic Applications", "Project: Navigation Plan"], "Navigation Plan", geometryVocabulary, [trigExample], commonTechnology, commonMistakes),
      m("Sequences, Series, and Combinatorics", "Discrete patterns, finite sums, and infinite behavior prepare learners for limits and probability.", "sequence", ["aₙ=a₁+(n-1)d", "S∞=a₁/(1-r)", "C(n,r)=n!/(r!(n-r)!)"], ["Sequences and Recursive Rules", "Arithmetic Sequences and Series", "Geometric Sequences and Series", "Infinite Geometric Series", "Mathematical Induction", "Binomial Theorem", "Counting Principles", "Project: Recursive Growth Study"], "Recursive Growth Study", algebraVocabulary, [algebraExample], commonTechnology, commonMistakes),
      m("Conics, Parametric, Polar, Vectors, and Limits", "Alternate coordinate systems and vectors describe geometry and motion, while limits introduce instantaneous behavior.", "polar", ["(x-h)²+(y-k)²=r²", "x=r cosθ, y=r sinθ", "f'(a)=lim[h→0](f(a+h)-f(a))/h"], ["Circles and Parabolas", "Ellipses and Hyperbolas", "Parametric Equations", "Polar Coordinates and Graphs", "Vectors and Dot Product", "Limits and Continuity", "Difference Quotient and Derivative Preview", "Capstone: Dynamic Systems Portfolio"], "Dynamic Systems Modeling Portfolio", linearVocabulary, [trigExample, calculusExample], commonTechnology, commonMistakes),
    ],
  },
  {
    id: "calculus-1", slug: "calculus-1", title: "Calculus I", pathway: "College Mathematics", grade: "College / AP Calculus AB", level: "College Foundation", duration: "15–18 weeks", accent: "from-rose-800 via-red-800 to-slate-950", basePath: "/library/mathematics/course/calculus-1", capstone: "Calculus Modeling and Optimization Study",
    description: "Understand limits, derivatives, applications of differentiation, integrals, differential equations, and the Fundamental Theorem of Calculus.",
    outcomes: ["Evaluate and interpret limits", "Differentiate major function families", "Analyze motion and change", "Solve optimization problems", "Compute and interpret integrals", "Connect derivatives and accumulation"],
    modules: [
      m("Functions, Models, and Rates", "Calculus begins with functions, units, average change, and multiple representations.", "linear", ["average rate=(f(b)-f(a))/(b-a)", "Δy/Δx", "secant slope"], ["Functions and Models", "Representations of Functions", "Transformations and Inverses", "Exponential and Logarithmic Review", "Trigonometric Review", "Average Rate of Change", "Modeling with Data", "Project: Rate-of-Change Report"], "Rate-of-Change Report", calculusVocabulary, [calculusExample], commonTechnology, commonMistakes),
      m("Limits and Continuity", "Limits describe local behavior and define continuity, derivatives, and integrals.", "limit", ["lim[x→a]f(x)=L", "lim(f±g)=limf±limg", "continuous: lim[x→a]f(x)=f(a)"], ["Limit Intuition", "Limits from Graphs and Tables", "Limit Laws", "Algebraic Limit Techniques", "One-Sided and Infinite Limits", "Continuity", "Intermediate Value Theorem", "Project: Continuity Investigation"], "Continuity Investigation", calculusVocabulary, [calculusExample], commonTechnology, commonMistakes),
      m("The Derivative", "The derivative is a limit measuring instantaneous change and tangent slope.", "derivative", ["f'(x)=lim[h→0](f(x+h)-f(x))/h", "d/dx(xⁿ)=nxⁿ⁻¹", "tangent: y-f(a)=f'(a)(x-a)"], ["Derivative from First Principles", "Derivative as a Function", "Power Rule", "Product and Quotient Rules", "Derivatives of Trigonometric Functions", "Chain Rule", "Implicit Differentiation", "Project: Derivative Rule Map"], "Derivative Rule Map", calculusVocabulary, [calculusExample], commonTechnology, commonMistakes),
      m("Applications of Derivatives", "Derivatives reveal motion, monotonicity, extrema, curvature, and approximation.", "derivative", ["v=s'", "a=s''", "L(x)=f(a)+f'(a)(x-a)"], ["Motion Along a Line", "Related Rates", "Critical Points", "Increasing and Decreasing", "Concavity and Inflection", "Curve Sketching", "Linearization", "Project: Motion Analysis"], "Motion Analysis", calculusVocabulary, [calculusExample], commonTechnology, commonMistakes),
      m("Optimization and Modeling", "Optimization combines a contextual objective, constraints, derivatives, and verification.", "optimization", ["f'(c)=0", "closed interval test", "marginal cost=C'(x)"], ["Optimization Framework", "Geometric Optimization", "Business Optimization", "Scientific Optimization", "Constraints and Feasible Domains", "Newton's Method", "Sensitivity and Error", "Project: Optimization Proposal"], "Optimization Proposal", calculusVocabulary, [calculusExample], commonTechnology, commonMistakes),
      m("Antiderivatives and Accumulation", "Antiderivatives reverse differentiation and definite integrals measure net accumulation.", "integral", ["∫xⁿdx=xⁿ⁺¹/(n+1)+C", "∫ₐᵇf(x)dx", "Riemann sum=Σf(xᵢ*)Δx"], ["Antiderivatives", "Area and Accumulation", "Riemann Sums", "Definite Integral", "Properties of Integrals", "Net Change", "Numerical Integration", "Project: Accumulation Study"], "Accumulation Study", calculusVocabulary, [calculusExample], commonTechnology, commonMistakes),
      m("Fundamental Theorem and Integration", "The Fundamental Theorem connects local rates to total change.", "integral", ["d/dx∫ₐˣf(t)dt=f(x)", "∫ₐᵇf'(x)dx=f(b)-f(a)", "u-substitution"], ["Fundamental Theorem Part I", "Fundamental Theorem Part II", "Accumulation Functions", "Substitution", "Area Between Curves", "Average Value", "Displacement and Distance", "Project: FTC Visual Explanation"], "FTC Visual Explanation", calculusVocabulary, [calculusExample], commonTechnology, commonMistakes),
      m("Differential Equations and Capstone", "Differential equations describe how quantities change and connect formulas to dynamic systems.", "slopefield", ["dy/dx=f(x,y)", "y'=ky", "Euler: yₙ₊₁=yₙ+h f(xₙ,yₙ)"], ["Slope Fields", "Separable Differential Equations", "Exponential Growth and Decay", "Euler's Method", "Initial Value Problems", "Model Validation", "Calculus Communication", "Capstone: Modeling and Optimization Study"], "Calculus Modeling and Optimization Study", calculusVocabulary, [calculusExample], commonTechnology, commonMistakes),
    ],
  },
  {
    id: "linear-algebra", slug: "linear-algebra", title: "Linear Algebra: Foundations to AI", pathway: "College Mathematics", grade: "College / Applied Mathematics", level: "College Foundation", duration: "14–18 weeks", accent: "from-cyan-800 via-sky-800 to-slate-950", basePath: "/library/college/linear-algebra", capstone: "Matrix Intelligence Toolkit",
    description: "Move from vectors and systems to transformations, determinants, vector spaces, eigenvalues, least squares, SVD, and AI applications.",
    outcomes: ["Reason with vectors and matrices", "Solve linear systems", "Understand vector spaces", "Analyze linear transformations", "Use eigenvalues and orthogonality", "Apply least squares and SVD"],
    modules: [
      m("Vectors and Geometry", "Vectors represent direction, magnitude, features, forces, and states.", "vector", ["||v||=√Σvᵢ²", "u·v=Σuᵢvᵢ", "cosθ=(u·v)/(||u||||v||)"], ["Vector Meaning and Notation", "Magnitude and Distance", "Vector Addition", "Scalar Multiplication", "Linear Combinations", "Dot Product", "Angles and Similarity", "Project: Vector Navigation"], "Vector Navigation", linearVocabulary, [matrixExample], commonTechnology, commonMistakes),
      m("Matrices and Matrix Operations", "Matrices organize data and represent transformations and interacting systems.", "matrix", ["A+B", "cA", "(AB)ᵢⱼ=Σaᵢₖbₖⱼ"], ["Matrix Structure", "Special Matrices", "Matrix Addition", "Scalar Multiplication", "Matrix Multiplication", "Transpose", "Block and Data Matrices", "Project: Image Matrix Lab"], "Image Matrix Lab", linearVocabulary, [matrixExample], commonTechnology, commonMistakes),
      m("Systems and Row Reduction", "Row operations preserve solution sets and expose the structure of linear systems.", "linear", ["Ax=b", "RREF(A|b)", "rank(A)"], ["Linear Systems", "Augmented Matrices", "Row Operations", "Gaussian Elimination", "Reduced Row-Echelon Form", "Solution Classification", "Applications", "Project: Constraint Solver"], "Constraint Solver", linearVocabulary, [matrixExample], commonTechnology, commonMistakes),
      m("Determinants, Inverses, and Transformations", "Determinants measure signed scaling and invertibility, while matrices enact linear transformations.", "transformation", ["det([[a,b],[c,d]])=ad-bc", "AA⁻¹=I", "T(x)=Ax"], ["Determinant Meaning", "Computing Determinants", "Cofactor Expansion", "Invertibility", "Inverse Matrices", "Linear Transformations", "Composition and Geometry", "Project: Transformation Studio"], "Transformation Studio", linearVocabulary, [matrixExample], commonTechnology, commonMistakes),
      m("Vector Spaces, Basis, and Dimension", "Basis coordinates reveal the independent directions needed to describe a space.", "vector", ["span{v₁,…,vₖ}", "c₁v₁+…+cₖvₖ=0", "dim(V)=number of basis vectors"], ["Vector Space Axioms", "Subspaces", "Span", "Linear Independence", "Basis", "Dimension", "Column, Row, and Null Spaces", "Project: Basis Explorer"], "Basis Explorer", linearVocabulary, [matrixExample], commonTechnology, commonMistakes),
      m("Eigenvalues and Dynamical Systems", "Eigenvectors preserve direction under a transformation and eigenvalues describe scaling.", "vector", ["Av=λv", "det(A-λI)=0", "A=PDP⁻¹"], ["Invariant Directions", "Characteristic Equation", "Finding Eigenvectors", "Eigenspaces", "Diagonalization", "Powers of Matrices", "Markov and Dynamical Systems", "Project: Long-Term Behavior Model"], "Long-Term Behavior Model", linearVocabulary, [matrixExample], commonTechnology, commonMistakes),
      m("Orthogonality and Least Squares", "Orthogonal decomposition produces stable coordinates, projections, and best-fit solutions.", "vector", ["projᵥu=(u·v)/(v·v)v", "AᵀAx=Aᵀb", "A=QR"], ["Orthogonal Vectors", "Orthogonal Complements", "Projections", "Gram–Schmidt", "QR Factorization", "Least Squares", "Linear Regression", "Project: Best-Fit Data Model"], "Best-Fit Data Model", linearVocabulary, [matrixExample], commonTechnology, commonMistakes),
      m("SVD, PCA, and AI Applications", "Matrix decompositions reveal low-dimensional structure in data, images, embeddings, and models.", "matrix", ["A=UΣVᵀ", "Aₖ≈UₖΣₖVₖᵀ", "variance along eigenvectors"], ["Singular Values and Vectors", "Singular Value Decomposition", "Low-Rank Approximation", "Image Compression", "Principal Component Analysis", "Embeddings and Similarity", "Neural Network Matrix Operations", "Capstone: Matrix Intelligence Toolkit"], "Matrix Intelligence Toolkit", linearVocabulary, [matrixExample, aiExample], commonTechnology, commonMistakes),
    ],
  },
  {
    id: "probability-statistics", slug: "probability-statistics", title: "Probability and Statistics", pathway: "College Mathematics", grade: "AP Statistics / College", level: "College Preparatory", duration: "14–18 weeks", accent: "from-fuchsia-800 via-pink-800 to-slate-950", basePath: "/library/mathematics/probability-foundations", capstone: "Evidence-Based Probability and Statistics Investigation",
    description: "Model uncertainty, design studies, analyze distributions, conduct simulations, estimate parameters, test claims, and communicate evidence responsibly.",
    outcomes: ["Model probability rigorously", "Use counting and conditional probability", "Analyze random variables", "Describe data distributions", "Design valid studies", "Estimate and test population claims"],
    modules: [
      m("Foundations of Probability", "Probability connects sample spaces, events, long-run behavior, and mathematical models.", "probability", ["P(A)=|A|/|S|", "P(Aᶜ)=1-P(A)", "0≤P(A)≤1"], ["Experiments and Outcomes", "Sample Spaces", "Events", "Theoretical Probability", "Experimental Probability", "Complements", "Simulation", "Project: Probability Experiment"], "Probability Experiment", probabilityVocabulary, [probabilityExample], commonTechnology, commonMistakes),
      m("Counting Techniques", "Systematic counting measures complex sample spaces without listing every outcome.", "tree", ["n₁n₂…nₖ", "P(n,r)=n!/(n-r)!", "C(n,r)=n!/(r!(n-r)!)"], ["Organized Lists", "Tree Diagrams", "Fundamental Counting Principle", "Factorials", "Permutations", "Combinations", "Counting with Repetition", "Project: Counting Strategy Guide"], "Counting Strategy Guide", probabilityVocabulary, [probabilityExample], commonTechnology, commonMistakes),
      m("Compound and Conditional Probability", "Unions, intersections, dependence, and conditional information change event probability.", "tree", ["P(A∪B)=P(A)+P(B)-P(A∩B)", "P(A|B)=P(A∩B)/P(B)", "P(A∩B)=P(A)P(B|A)"], ["Unions and Intersections", "Addition Rule", "Multiplication Rule", "Independent Events", "Dependent Events", "Conditional Probability", "Bayes Reasoning", "Project: Decision Tree Analysis"], "Decision Tree Analysis", probabilityVocabulary, [probabilityExample], commonTechnology, commonMistakes),
      m("Random Variables and Distributions", "Random variables map outcomes to values and distributions organize probability and expectation.", "distribution", ["E(X)=ΣxP(x)", "Var(X)=E[(X-μ)²]", "z=(x-μ)/σ"], ["Discrete Random Variables", "Probability Distributions", "Expected Value", "Variance and Standard Deviation", "Binomial Distribution", "Geometric Distribution", "Normal Distribution", "Project: Risk Distribution Model"], "Risk Distribution Model", probabilityVocabulary, [probabilityExample], commonTechnology, commonMistakes),
      m("Exploring Data", "Data displays and summary statistics reveal distribution shape, center, spread, outliers, and association.", "distribution", ["mean=Σx/n", "IQR=Q₃-Q₁", "z=(x-μ)/σ"], ["Categorical Data", "Quantitative Displays", "Center", "Spread", "Outliers", "Standardized Values", "Scatterplots and Correlation", "Project: Exploratory Data Report"], "Exploratory Data Report", probabilityVocabulary, [probabilityExample], commonTechnology, commonMistakes),
      m("Collecting Data", "Valid conclusions depend on sampling, randomization, control, replication, and ethical design.", "sampling", ["random sample", "random assignment", "bias ≠ variability"], ["Populations and Samples", "Sampling Methods", "Sources of Bias", "Observational Studies", "Experiments", "Random Assignment", "Ethics and Scope of Inference", "Project: Study Design Proposal"], "Study Design Proposal", probabilityVocabulary, [probabilityExample], commonTechnology, commonMistakes),
      m("Sampling Distributions and Estimation", "Sampling distributions quantify natural sample-to-sample variability and support interval estimates.", "distribution", ["SE(x̄)=σ/√n", "estimate±critical·SE", "SE(p̂)=√(p(1-p)/n)"], ["Sampling Variability", "Sampling Distribution of a Proportion", "Sampling Distribution of a Mean", "Central Limit Theorem", "Confidence Intervals for Proportions", "Confidence Intervals for Means", "Margin of Error and Sample Size", "Project: Estimation Study"], "Estimation Study", probabilityVocabulary, [probabilityExample], commonTechnology, commonMistakes),
      m("Hypothesis Testing, Regression, and Research", "Inference weighs observed evidence against a null model while accounting for variability and error.", "distribution", ["test statistic=(estimate-null)/SE", "p-value=P(result as extreme|null)", "ŷ=a+bx"], ["Hypotheses and Errors", "Significance and P-Values", "Tests for Proportions", "Tests for Means", "Chi-Square Tests", "Regression Inference", "Responsible Statistical Communication", "Capstone: Evidence Investigation"], "Evidence-Based Probability and Statistics Investigation", probabilityVocabulary, [probabilityExample], commonTechnology, commonMistakes),
    ],
  },
  {
    id: "mathematics-for-ai", slug: "mathematics-for-ai", title: "Mathematics for AI", pathway: "AI Mathematics", grade: "College / Career", level: "Intermediate to Advanced", duration: "16–20 weeks", accent: "from-slate-950 via-blue-900 to-violet-950", basePath: "/library/mathematics/course/mathematics-for-ai", capstone: "Transparent Machine Learning Mathematics Portfolio",
    description: "Connect linear algebra, calculus, probability, statistics, optimization, information theory, and numerical computing to transparent machine-learning systems.",
    outcomes: ["Represent data as vectors and tensors", "Differentiate model objectives", "Reason probabilistically", "Optimize model parameters", "Measure information and performance", "Explain mathematical foundations of modern AI"],
    modules: [
      m("Mathematical Language for AI", "Sets, functions, notation, proof, summation, and computational precision support reliable AI reasoning.", "mapping", ["f:X→Y", "Σᵢxᵢ", "O(n)"], ["Sets and Logic", "Functions and Composition", "Summation and Product Notation", "Sequences and Limits", "Proof and Counterexample", "Complexity and Scale", "Precision and Numerical Error", "Project: AI Math Reference Guide"], "AI Math Reference Guide", aiVocabulary, [aiExample], commonTechnology, commonMistakes),
      m("Vectors, Matrices, and Tensors", "AI data and parameters are organized as vectors, matrices, and higher-dimensional tensors.", "matrix", ["y=Wx+b", "A=UΣVᵀ", "cosθ=(u·v)/(||u||||v||)"], ["Feature Vectors", "Matrix Data", "Tensor Shapes", "Dot Products and Similarity", "Matrix Multiplication", "Broadcasting", "Decompositions", "Project: Embedding Similarity Explorer"], "Embedding Similarity Explorer", aiVocabulary, [aiExample, matrixExample], commonTechnology, commonMistakes),
      m("Calculus for Learning", "Derivatives and gradients measure sensitivity and guide parameter updates.", "gradient", ["∂L/∂w", "∇L", "chain rule: dz/dx=(dz/dy)(dy/dx)"], ["Rates and Partial Derivatives", "Gradients", "Chain Rule", "Jacobians", "Directional Derivatives", "Hessians and Curvature", "Automatic Differentiation", "Project: Gradient Visualizer"], "Gradient Visualizer", aiVocabulary, [calculusExample, aiExample], commonTechnology, commonMistakes),
      m("Probability for AI", "Probability represents uncertainty in data, labels, parameters, predictions, and decisions.", "distribution", ["P(y|x)", "P(A|B)=P(B|A)P(A)/P(B)", "E[X]"], ["Random Variables", "Common Distributions", "Conditional Probability", "Bayes Theorem", "Likelihood", "Maximum Likelihood", "Calibration and Uncertainty", "Project: Bayesian Classifier"], "Bayesian Classifier", aiVocabulary, [probabilityExample, aiExample], commonTechnology, commonMistakes),
      m("Statistics and Generalization", "Statistical reasoning distinguishes learned signal from sampling noise and data leakage.", "distribution", ["risk=E[L(y,f(x))]", "bias-variance", "CI=estimate±critical·SE"], ["Samples and Populations", "Estimation", "Bias and Variance", "Training and Test Error", "Cross-Validation", "Regularization", "Experiment Design", "Project: Model Evaluation Report"], "Model Evaluation Report", aiVocabulary, [aiExample], commonTechnology, commonMistakes),
      m("Optimization for Machine Learning", "Training searches parameter space for values that minimize a defined objective under constraints.", "optimization", ["θₜ₊₁=θₜ-η∇L(θₜ)", "argminθ L(θ)", "L+λR"], ["Objectives and Loss Functions", "Gradient Descent", "Learning Rate", "Stochastic Gradient Descent", "Momentum and Adaptive Methods", "Convexity", "Constraints and Regularization", "Project: Optimizer Comparison"], "Optimizer Comparison", aiVocabulary, [aiExample], commonTechnology, commonMistakes),
      m("Information, Metrics, and Responsible Decisions", "Information measures and evaluation metrics determine what a model learns and how performance is judged.", "classification", ["H(p)=-Σp log p", "CE=-Σy log ŷ", "F1=2PR/(P+R)"], ["Entropy", "Cross-Entropy", "Information Gain", "Confusion Matrix", "Precision and Recall", "ROC and Thresholds", "Fairness Metrics", "Project: Responsible Metric Dashboard"], "Responsible Metric Dashboard", aiVocabulary, [aiExample], commonTechnology, commonMistakes),
      m("Neural Networks, Attention, and Capstone", "Modern AI composes linear maps, nonlinear activations, optimization, embeddings, and probability.", "network", ["z=Wx+b", "a=σ(z)", "attention(Q,K,V)=softmax(QKᵀ/√d)V"], ["Perceptrons and Linear Units", "Activation Functions", "Multilayer Networks", "Backpropagation", "Convolution Mathematics", "Embeddings", "Attention and Transformers", "Capstone: Transparent ML Portfolio"], "Transparent Machine Learning Mathematics Portfolio", aiVocabulary, [aiExample], commonTechnology, commonMistakes),
    ],
  },
];

export const mathematicsCourses = rawCourses.map(createCourse);

export function getMathematicsCourse(courseSlug) {
  const alias = courseSlug === "probability-foundations" ? "probability-statistics" : courseSlug === "linear-algebra-foundations" ? "linear-algebra" : courseSlug;
  return mathematicsCourses.find((course) => course.id === alias || course.slug === alias);
}

export function getMathematicsModule(courseSlug, moduleNumber) {
  return getMathematicsCourse(courseSlug)?.modules.find((module) => module.id === Number(moduleNumber));
}

export function getMathematicsLesson(courseSlug, moduleNumber, lessonSlugOrNumber) {
  const module = getMathematicsModule(courseSlug, moduleNumber);
  if (!module) return undefined;
  return module.lessons.find((lesson) => lesson.slug === lessonSlugOrNumber || lesson.lessonNumber === Number(lessonSlugOrNumber));
}

export function getAllMathematicsLessons(course) {
  return course?.modules.flatMap((module) => module.lessons) || [];
}

export function getMathematicsLessonPath(course, lesson) {
  return `${course.basePath}/module/${lesson.moduleNumber}/lesson/${lesson.slug}`;
}
