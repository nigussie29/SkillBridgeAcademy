const lesson02 = {
  id: "data-ai-m05-l02",
  courseId: "data-ai-foundations",
  moduleId: "data-ai-foundations-module-05",
  moduleNumber: 5,
  lessonNumber: 2,
  slug: "numpy-arrays-and-vectorized-computation",
  title: "NumPy Arrays and Vectorized Computation",
  shortTitle: "NumPy Arrays and Vectorized Computation",
  subtitle:
    "Represent numerical data with explicit shape and dtype, then use indexing, broadcasting, vectorized conditions, reductions, and linear algebra to create fast and verifiable analytical computations.",
  status: "available",
  duration: "4–5 hours",
  level: "Beginner to Professional",

  essentialQuestion:
    "How can NumPy transform a collection of measurements into efficient, correctly aligned, and testable numerical evidence?",
  bigIdea:
    "An array is not merely a faster list. It is a typed numerical object with shape, axes, strides, and broadcasting rules. Correct vectorized analysis begins by declaring what each dimension represents and verifying that every operation preserves that meaning.",

  whyThisLessonExists: {
    title: "Numerical Speed Is Useful Only When Dimensions Still Mean the Right Thing",
    introduction:
      "Data analysis, scientific computing, computer vision, and machine learning depend on operations over many values at once. NumPy provides the array foundation beneath pandas, scikit-learn, SciPy, and much of the Python AI ecosystem.",
    centralProblem:
      "A maintenance analyst stores robot readings in nested lists and writes several loops for calibration, threshold checks, averages, and risk scores. The code is slow, but the greater danger is semantic: rows and columns are undocumented, incompatible shapes broadcast unexpectedly, missing values contaminate summaries, and a slice changes the source array because it is a view.",
    purpose:
      "This lesson teaches array construction, dtype, shape, axes, indexing, slicing, views, copies, Boolean masks, vectorized arithmetic, broadcasting, aggregation, matrix operations, random generation, numerical precision, memory, and performance measurement. Every technique is connected to explicit dimension meaning and validation tests.",
  },

  problemFirst: {
    title: "Opening Investigation: What Does This 8 × 4 Matrix Mean?",
    scenario:
      "Eight robots each provide four readings in the order temperature °C, vibration mm/s, motor current A, and cycle time s. One row contains NaN, one contains a current of 250 A, and one contains negative vibration. Leadership wants a valid-data profile and a maintenance review queue without writing one condition per robot.",
    questions: [
      "What does axis 0 represent, and what does axis 1 represent?",
      "Why must all four columns use one numeric dtype in the matrix?",
      "How can one operation test every value for finiteness?",
      "How can column-specific range rules be applied without eight explicit loops?",
      "Which shape should a four-column threshold or calibration vector have?",
      "How does broadcasting align that vector with an 8 × 4 matrix?",
      "Which rows should be excluded from summary statistics, and where should their reasons be retained?",
      "Which assertions prove that no robot disappeared and the valid rows preserve their identifiers?",
    ],
    expectedInsight:
      "Vectorization replaces repeated Python-level operations with array operations, but correctness still depends on shape, axis, dtype, alignment, missing-value policy, and explicit controls.",
  },

  visualModels: [
    {
      id: "numpy-array-reasoning-cycle",
      type: "lifecycle",
      title: "The NumPy Array Reasoning Cycle",
      description:
        "Interpret dimensions before computing, and verify the resulting shape and population after every important transformation.",
      stages: [
        { label: "1. Declare", detail: "Name the unit represented by each row, column, and higher-dimensional axis." },
        { label: "2. Construct", detail: "Create an array with an intentional dtype, shape, units, and missing-value representation." },
        { label: "3. Select", detail: "Use positions, slices, integer indices, or Boolean masks while preserving identifier alignment." },
        { label: "4. Compute", detail: "Apply vectorized arithmetic, comparisons, broadcasting, reductions, or matrix operations." },
        { label: "5. Validate", detail: "Check shape, dtype, finiteness, ranges, row balance, expected values, and tolerances." },
        { label: "6. Interpret", detail: "Translate the numerical result back to robots, dates, variables, units, and decisions." },
      ],
      feedback:
        "When a result looks surprising, stop and inspect shape, axis, dtype, mask length, broadcast alignment, and whether a slice shares memory with its source.",
      interpretation:
        "Vectorized code is trustworthy when the array geometry and business meaning remain visible together.",
    },
    {
      id: "broadcasting-alignment-cycle",
      type: "lifecycle",
      title: "Broadcasting: Align from the Trailing Dimensions",
      description:
        "NumPy compares shapes from right to left; corresponding dimensions must be equal or one of them must be 1.",
      stages: [
        { label: "Matrix", detail: "Sensor readings have shape (8, 4): eight robot rows and four measurement columns." },
        { label: "Vector", detail: "A calibration or threshold vector has shape (4,), one value for each measurement column." },
        { label: "Align", detail: "The trailing dimension 4 matches 4, so the vector is conceptually reused across all eight rows." },
        { label: "Operate", detail: "Elementwise addition, multiplication, or comparison produces an (8, 4) result." },
        { label: "Reduce", detail: "Use all(..., axis=1) or any(..., axis=1) to create one governed Boolean result per robot." },
      ],
      feedback:
        "If alignment is ambiguous, reshape deliberately—for example, (8, 1) for one value per row or (1, 4) for one value per column.",
      interpretation:
        "Broadcasting is a shape rule, not a guarantee of semantic alignment; a technically compatible operation can still apply the wrong values to the wrong dimension.",
    },
  ],

  learningObjectives: [
    "Explain how NumPy arrays differ from Python lists in dtype, memory organization, operations, and performance.",
    "Construct arrays from Python sequences and choose intentional numeric, Boolean, string, and datetime dtypes.",
    "Interpret ndim, shape, size, itemsize, nbytes, and axis meaning.",
    "Reshape, transpose, flatten, concatenate, and stack arrays without losing the declared observation structure.",
    "Select values using scalar indices, slices, integer-array indexing, and Boolean masks.",
    "Distinguish views from copies and test whether transformations can mutate shared data.",
    "Apply universal functions and vectorized arithmetic without Python loops.",
    "Predict broadcasting compatibility and reshape arrays deliberately for row-wise or column-wise operations.",
    "Use any, all, where, clip, isnan, isfinite, and logical operations to implement vectorized validation rules.",
    "Compute reductions along the correct axis and handle missing values according to a documented policy.",
    "Use dot products, matrix multiplication, and weighted combinations with dimension checks.",
    "Generate reproducible random arrays with numpy.random.default_rng and a recorded seed.",
    "Compare floating-point arrays with tolerances and recognize overflow, underflow, and invalid calculations.",
    "Measure vectorized and loop implementations fairly while prioritizing correctness and readability.",
    "Build and test a vectorized robot-sensor quality and maintenance pipeline.",
  ],

  prerequisiteKnowledge: [
    "Module 5 Lesson 1: Python values, collections, conditions, loops, functions, modules, exceptions, and assertions",
    "Basic arithmetic, averages, standard deviation, inequalities, and coordinate-style row-column notation",
    "Module 2: center, spread, unusual observations, and standardized values",
    "Module 4: row grain, identifiers, reason-coded exceptions, and reconciliation",
    "Python with NumPy installed; the computational lab uses import numpy as np",
  ],

  vocabulary: [
    { term: "NumPy", definition: "The foundational Python library for efficient n-dimensional arrays and numerical computation." },
    { term: "ndarray", definition: "NumPy's homogeneous n-dimensional array object." },
    { term: "Scalar", definition: "A single value with no array axes, represented by an array with shape () or a scalar object." },
    { term: "Vector", definition: "A one-dimensional array, often representing one observation or one variable depending on context." },
    { term: "Matrix", definition: "A two-dimensional array whose rows and columns must be assigned explicit meaning." },
    { term: "Tensor", definition: "A general multidimensional numerical array; in modern AI it often refers to an array with hardware-aware computation and automatic differentiation." },
    { term: "Dimension", definition: "One direction of an array, such as robot, timestamp, sensor, image height, or feature." },
    { term: "Axis", definition: "A numbered array dimension along which indexing, aggregation, or transformation occurs." },
    { term: "Shape", definition: "A tuple giving the length of every array axis, such as (8, 4)." },
    { term: "ndim", definition: "The number of axes in an array." },
    { term: "Size", definition: "The total number of elements in an array, equal to the product of its shape dimensions." },
    { term: "dtype", definition: "The fixed element data type used by an array, such as float64, int32, bool, or datetime64." },
    { term: "itemsize", definition: "The number of bytes used by one array element." },
    { term: "nbytes", definition: "The total bytes occupied by array elements, approximately size multiplied by itemsize." },
    { term: "Homogeneous", definition: "Using one dtype for all elements in an ndarray, even when source values originally had different Python types." },
    { term: "Type coercion", definition: "Automatic conversion to a common dtype when array values have different source types." },
    { term: "Upcasting", definition: "Conversion to a dtype capable of representing the combined operands, such as integers becoming floats." },
    { term: "Vectorization", definition: "Expressing repeated elementwise or array-level work as NumPy operations rather than explicit Python loops." },
    { term: "Universal function (ufunc)", definition: "A NumPy function that operates elementwise with broadcasting, such as add, sqrt, or exp." },
    { term: "Elementwise operation", definition: "An operation applied independently to aligned array elements." },
    { term: "Broadcasting", definition: "NumPy's rule for applying operations to compatible shapes by conceptually expanding dimensions of length one." },
    { term: "Reduction", definition: "An operation that summarizes values by removing or retaining axes, such as sum, mean, min, or all." },
    { term: "keepdims", definition: "A reduction option that retains reduced axes with length one to support clear later broadcasting." },
    { term: "Indexing", definition: "Selecting array elements or subsets using positions, slices, integer arrays, or Boolean masks." },
    { term: "Slice", definition: "A start:stop:step selection that commonly returns a view of basic array data." },
    { term: "Boolean mask", definition: "A Boolean array used to select values or observations where the condition is True." },
    { term: "Fancy indexing", definition: "Selection with integer or Boolean arrays, which generally returns a copy rather than a basic slicing view." },
    { term: "View", definition: "An array object that shares underlying data with another array; mutation can affect both." },
    { term: "Copy", definition: "An independent array with its own data buffer." },
    { term: "Stride", definition: "The byte step required to move along each axis in memory." },
    { term: "Contiguous array", definition: "An array whose elements follow a standard uninterrupted memory order suitable for efficient access." },
    { term: "Reshape", definition: "Changing array dimensions without changing element count; it returns a view when possible and a copy otherwise." },
    { term: "Transpose", definition: "Permuting axes, such as exchanging rows and columns in a matrix." },
    { term: "NaN", definition: "A floating-point not-a-number marker often used for missing or invalid numerical values." },
    { term: "Inf", definition: "Positive or negative infinity produced or stored in floating-point computation." },
    { term: "Finite value", definition: "A number that is neither NaN nor positive or negative infinity." },
    { term: "Tolerance", definition: "An allowed absolute or relative numerical difference used when comparing floating-point results." },
    { term: "Dot product", definition: "The sum of pairwise products between aligned vectors, widely used for weighted scores and linear models." },
    { term: "Matrix multiplication", definition: "A row-by-column operation written with @ whose inner dimensions must agree." },
    { term: "Random generator", definition: "A stateful object such as np.random.default_rng used to create reproducible pseudo-random values from a seed." },
  ],

  formulas: [
    { id: "array-size", name: "Array size", formula: "size = d₁ × d₂ × … × dₙ", meaning: "The total element count equals the product of every shape dimension.", requirement: "A reshape is valid only when the new dimension product equals the original size." },
    { id: "array-memory", name: "Element-buffer memory", formula: "nbytes = size × itemsize", meaning: "Estimates the bytes occupied by the array's element buffer.", requirement: "This does not include all Python object, metadata, temporary-array, or downstream library overhead." },
    { id: "vectorized-transform", name: "Elementwise transform", formula: "yᵢ = f(xᵢ) for every aligned element i", meaning: "A ufunc or vectorized expression applies one rule across many elements.", requirement: "Inputs must have compatible shapes, dtypes, units, and missing-value treatment." },
    { id: "broadcasting", name: "Broadcast compatibility", formula: "For each trailing axis: dimensions are equal, or one dimension is 1", meaning: "Compatible arrays can participate in elementwise operations without physically repeating all values.", requirement: "Confirm the semantic dimension represented by every aligned position." },
    { id: "axis-mean", name: "Column mean", formula: "x̄ⱼ = (1/n) Σᵢ xᵢⱼ", meaning: "For an observation-by-feature matrix, mean(axis=0) summarizes each feature across observations.", requirement: "Define the eligible population and missing-value policy before reduction." },
    { id: "z-score", name: "Standardized array", formula: "zᵢⱼ = (xᵢⱼ − μⱼ) / σⱼ", meaning: "Centers and scales each feature using column parameters broadcast across rows.", requirement: "Handle zero standard deviations and prevent training-test leakage by fitting μ and σ only on the approved training population." },
    { id: "dot-product", name: "Weighted score", formula: "sᵢ = xᵢ · w = Σⱼ xᵢⱼwⱼ", meaning: "Combines each observation's features using a weight vector.", requirement: "Feature order, weight order, units, scale, and matrix inner dimensions must match." },
    { id: "row-balance", name: "Vectorized row balance", formula: "received rows = valid rows + invalid rows = OK + REVIEW + INVALID", meaning: "Proves each received observation reaches one explained outcome.", requirement: "Masks must be the same length, mutually exclusive, collectively exhaustive, and aligned to the identifier array." },
  ],

  workedExamples: [
    {
      id: "example-05-02-01",
      title: "Create an intentional numerical array",
      problem: "Convert three temperature strings into a numerical array suitable for calculations.",
      solutionSteps: [
        "Validate or parse boundary text before creating the analytical array.",
        "Use np.array([78.4, 80.0, 75.2], dtype=np.float64).",
        "Inspect dtype, shape, ndim, and size.",
        "Keep robot identifiers in a separate aligned string array rather than mixing text into the numeric matrix.",
      ],
      answer: "dtype=float64, shape=(3,), ndim=1, size=3",
      interpretation: "Mixing identifiers and measurements in one array can coerce every value to strings and make numerical intent less safe.",
    },
    {
      id: "example-05-02-02",
      title: "Choose the correct aggregation axis",
      problem: "A readings array has shape (8, 4), with robot rows and measurement columns. What do mean(axis=0) and mean(axis=1) return?",
      solutionSteps: [
        "axis=0 reduces the robot dimension and leaves four column means.",
        "axis=1 reduces the measurement dimension and leaves eight row means.",
        "A row mean mixes °C, mm/s, A, and seconds, so it has no defensible physical interpretation.",
      ],
      answer: "mean(axis=0) has shape (4,) and can be meaningful by sensor; mean(axis=1) has shape (8,) but is semantically invalid unless features are made comparable for a defined purpose.",
      interpretation: "A calculable aggregation is not automatically a meaningful metric.",
    },
    {
      id: "example-05-02-03",
      title: "Detect a view before mutating it",
      problem: "temperatures = readings[:, 0] selects the first column. What happens when temperatures[0] = 999?",
      solutionSteps: [
        "Basic slicing commonly creates a view that shares data with readings.",
        "Use np.shares_memory(temperatures, readings) to investigate sharing.",
        "If isolation is required, use readings[:, 0].copy().",
        "Test the source after mutation in controlled code rather than assuming independence.",
      ],
      answer: "The source may change because the slice can share memory. An explicit copy protects the source buffer.",
      interpretation: "Views improve efficiency but create mutation risk when ownership is unclear.",
    },
    {
      id: "example-05-02-04",
      title: "Build a vectorized validation mask",
      problem: "Mark rows valid only when every reading is finite, vibration is nonnegative, current is between 0 and 100, and cycle time is positive.",
      solutionSteps: [
        "Compute finite_rows = np.isfinite(readings).all(axis=1).",
        "Compute separate one-dimensional range conditions for the governed columns.",
        "Combine them with & and parentheses, not Python's scalar and operator.",
        "Verify the mask shape is (8,) and aligns with robot_ids.",
      ],
      answer: "valid_rows = finite_rows & (readings[:, 1] >= 0) & readings[:, 2].between-equivalent & (readings[:, 3] > 0), expressed with NumPy comparisons.",
      interpretation: "Vectorized masks turn data contracts into inspectable arrays while retaining every invalid row for exception reporting.",
    },
    {
      id: "example-05-02-05",
      title: "Standardize columns through broadcasting",
      problem: "Standardize a valid matrix X with shape (5, 4) using one mean and standard deviation per column.",
      solutionSteps: [
        "Compute means = X.mean(axis=0, keepdims=True) with shape (1, 4).",
        "Compute stds = X.std(axis=0, keepdims=True) with shape (1, 4).",
        "Reject or specially handle any zero standard deviation.",
        "Calculate Z = (X - means) / stds; both parameter arrays broadcast down five rows.",
        "Verify Z.mean(axis=0) is approximately zero and Z.std(axis=0) approximately one.",
      ],
      answer: "Z has shape (5, 4), with column means near 0 and population standard deviations near 1.",
      interpretation: "In machine learning, fit these parameters on training data only and reuse them unchanged for validation, testing, and production.",
    },
    {
      id: "example-05-02-06",
      title: "Compute a weighted score with matrix multiplication",
      problem: "Combine standardized temperature, vibration, and current using weights [0.45, 0.35, 0.20].",
      solutionSteps: [
        "Select the three feature columns to form X with shape (n, 3).",
        "Create weights with shape (3,).",
        "Compute scores = X @ weights, which returns shape (n,).",
        "Confirm X.shape[1] equals weights.shape[0] and document feature order.",
      ],
      answer: "Each score is 0.45·z_temperature + 0.35·z_vibration + 0.20·z_current.",
      interpretation: "A dot product is compact, but its result is wrong when feature order or scaling differs from weight order or design.",
    },
  ],

  interactiveExploration: {
    title: "Predict Shape, Dtype, Sharing, and Values",
    description:
      "Before executing each NumPy expression, write the expected output shape, dtype, whether memory may be shared, and what one representative value should be.",
    steps: [
      "Create a 3 × 4 array with np.arange(12).reshape(3, 4).",
      "Predict results for a[1], a[:, 2], a[0:2, 1:3], a[[0, 2]], and a[a % 2 == 0].",
      "Add vectors with shapes (4,), (3, 1), and (3,) and predict which operations broadcast.",
      "Compare sum(axis=0), sum(axis=1), and sum(keepdims=True).",
      "Change a basic slice and an advanced-indexed selection, then inspect the source.",
      "Compare equality using == with np.array_equal and np.allclose for floating-point results.",
    ],
    questions: [
      "Which expression changed dimensionality unexpectedly?",
      "Which selection returned a copy rather than a view?",
      "Which technically valid broadcast was semantically questionable?",
      "When is keeping a length-one axis clearer than removing it?",
      "Why is exact equality unsafe for many floating-point calculations?",
    ],
    expectedDiscovery:
      "Shape reasoning can be practiced independently of large datasets; predicting array behavior prevents many silent analytical errors.",
  },

  realWorldApplications: [
    { field: "Manufacturing and Robotics", application: "Represent robot-by-sensor or time-by-sensor matrices, calibrate columns, validate physical ranges, detect threshold combinations, and compute reproducible risk features." },
    { field: "Finance", application: "Calculate scenario matrices, portfolio exposures, returns, covariances, and simulations while controlling precision and excluding invalid values." },
    { field: "Education", application: "Analyze student-by-skill matrices, normalize assessment evidence, compare cohorts, and construct transparent feature arrays for support models." },
    { field: "Healthcare Operations", application: "Process patient-time measurement arrays under privacy governance, validate ranges, and aggregate operational capacity without interpreting mixed units as one metric." },
    { field: "Images and Audio", application: "Represent pixels and signals as multidimensional arrays, normalize channels, apply masks, and transform batches efficiently." },
    { field: "AI and Machine Learning", application: "Store observation-feature matrices, apply preprocessing parameters, compute linear scores, and understand the tensor shapes passed into models." },
  ],

  aiConnection: {
    title: "NumPy Shape Reasoning Transfers Directly to AI Tensors",
    explanation:
      "Training data is commonly organized as observations by features, while images, sequences, and batches add more axes. Broadcasting, vectorized transformations, masking, reductions, dot products, and matrix multiplication are the mathematical operations behind linear models, neural networks, attention, and evaluation metrics.",
    example:
      "A batch of 32 RGB images with height and width 224 can use shape (32, 224, 224, 3). A three-value channel mean broadcasts across batch, height, and width only when placed on the correct channel axis. A channel-first framework may expect (32, 3, 224, 224), so the same numbers require a different axis interpretation.",
    uses: [
      "Observation-feature matrices",
      "Image, audio, and sequence tensors",
      "Feature normalization and clipping",
      "Batch inference and metric calculation",
      "Linear algebra for model prediction",
      "Masking padded or ineligible observations",
    ],
    caution:
      "Compatible shapes do not prove correct semantics. Training-serving skew, data leakage, axis swaps, dtype overflow, and misaligned identifiers can produce plausible numbers while changing model behavior.",
    reflectionQuestion:
      "Which axis in your planned AI dataset represents observations, features, time, channels, or repeated measurements, and how will you test that ordering?",
  },

  pythonLab: {
    title: "Vectorized Robot-Sensor Quality and Maintenance Analysis",
    objective:
      "Use NumPy to validate an 8 × 4 sensor matrix, retain reason-coded invalid rows, classify valid robots, standardize features, calculate a weighted risk score, and prove shape and row-balance controls.",
    code: `import numpy as np

np.set_printoptions(precision=3, suppress=True)

robot_ids = np.array([
    "R-101", "R-102", "R-103", "R-104",
    "R-105", "R-106", "R-107", "R-108",
])

# Columns: temperature_c, vibration_mm_s, motor_current_a, cycle_time_s
readings = np.array([
    [78.4,  4.1,  18.2, 42.0],
    [80.0,  8.0,  19.5, 45.0],
    [75.2,  9.2,  18.9, 43.0],
    [np.nan, 5.0, 17.4, 44.0],
    [76.0,  2.6, 250.0, 41.0],
    [72.0, -1.0,  16.1, 46.0],
    [81.5,  3.8,  20.2, 40.0],
    [74.5,  6.2,  21.0, 39.0],
], dtype=np.float64)

feature_names = np.array([
    "temperature_c", "vibration_mm_s", "motor_current_a", "cycle_time_s"
])

assert readings.shape == (8, 4)
assert robot_ids.shape == (8,)
assert feature_names.shape == (4,)
assert readings.dtype == np.float64
assert readings.size == 32
assert readings.nbytes == readings.size * readings.itemsize

# One calibration offset per column; shape (4,) broadcasts over eight rows.
calibration_offset = np.array([0.0, 0.0, 0.1, 0.0])
calibrated = readings + calibration_offset
assert calibrated.shape == readings.shape

# Data-contract masks at one Boolean value per robot row.
finite_rows = np.isfinite(calibrated).all(axis=1)
temperature_ok = (calibrated[:, 0] >= -40.0) & (calibrated[:, 0] <= 180.0)
vibration_ok = calibrated[:, 1] >= 0.0
current_ok = (calibrated[:, 2] >= 0.0) & (calibrated[:, 2] <= 100.0)
cycle_time_ok = calibrated[:, 3] > 0.0

valid_mask = (
    finite_rows
    & temperature_ok
    & vibration_ok
    & current_ok
    & cycle_time_ok
)

reason_code = np.full(robot_ids.shape, "VALID", dtype="<U32")
reason_code[~finite_rows] = "NONFINITE_READING"
reason_code[finite_rows & ~temperature_ok] = "TEMPERATURE_OUT_OF_RANGE"
reason_code[finite_rows & ~vibration_ok] = "NEGATIVE_VIBRATION"
reason_code[finite_rows & ~current_ok] = "CURRENT_OUT_OF_RANGE"
reason_code[finite_rows & ~cycle_time_ok] = "INVALID_CYCLE_TIME"

# Apply maintenance rules only to rows that passed the data contract.
review_mask = valid_mask & (
    (calibrated[:, 0] >= 80.0)
    | (calibrated[:, 1] > 8.0)
)
ok_mask = valid_mask & ~review_mask
invalid_mask = ~valid_mask

status = np.full(robot_ids.shape, "INVALID", dtype="<U7")
status[ok_mask] = "OK"
status[review_mask] = "REVIEW"

valid_readings = calibrated[valid_mask]
valid_ids = robot_ids[valid_mask]
column_means = valid_readings.mean(axis=0, keepdims=True)
column_stds = valid_readings.std(axis=0, keepdims=True)

assert np.all(column_stds > 0)
z_scores = (valid_readings - column_means) / column_stds
assert z_scores.shape == valid_readings.shape
assert np.allclose(z_scores.mean(axis=0), 0.0, atol=1e-12)
assert np.allclose(z_scores.std(axis=0), 1.0, atol=1e-12)

# Weighted risk uses standardized temperature, vibration, and current only.
weights = np.array([0.45, 0.35, 0.20])
risk_scores = z_scores[:, :3] @ weights
priority_order = np.argsort(-risk_scores, kind="stable")
priority_table = list(zip(
    valid_ids[priority_order].tolist(),
    risk_scores[priority_order].round(3).tolist(),
))

# Reconciliation and expected-result tests.
received = robot_ids.size
valid = int(valid_mask.sum())
invalid = int(invalid_mask.sum())
ok = int(ok_mask.sum())
review = int(review_mask.sum())

assert received == 8
assert valid == 5
assert invalid == 3
assert ok == 2
assert review == 3
assert received == valid + invalid
assert received == ok + review + invalid
assert robot_ids[review_mask].tolist() == ["R-102", "R-103", "R-107"]
assert robot_ids[invalid_mask].tolist() == ["R-104", "R-105", "R-106"]
assert reason_code[invalid_mask].tolist() == [
    "NONFINITE_READING",
    "CURRENT_OUT_OF_RANGE",
    "NEGATIVE_VIBRATION",
]
assert np.allclose(
    column_means.ravel(),
    np.array([77.92, 6.26, 19.66, 41.8]),
)
assert np.all(np.diff(risk_scores[priority_order]) <= 0)

print("Shape / dtype:", readings.shape, readings.dtype)
print("Received = valid + invalid:", received, "=", valid, "+", invalid)
print("Received = OK + REVIEW + INVALID:", received, "=", ok, "+", review, "+", invalid)
print("Review queue:", robot_ids[review_mask].tolist())
print("Exceptions:", list(zip(
    robot_ids[invalid_mask].tolist(), reason_code[invalid_mask].tolist()
)))
print("Valid column means:", dict(zip(
    feature_names.tolist(), column_means.ravel().round(2).tolist()
)))
print("Risk priority:", priority_table)
print("All NumPy shape, dtype, mask, broadcast, reduction, and reconciliation tests passed.")`,
    questions: [
      "What business entity and measurement does each axis represent?",
      "Why are robot identifiers stored separately from the float matrix?",
      "Why does calibration_offset with shape (4,) broadcast correctly?",
      "What is the shape of finite_rows, valid_mask, and review_mask?",
      "Why must review_mask include valid_mask?",
      "How does Boolean indexing preserve alignment between valid_ids and valid_readings?",
      "Why are column means and standard deviations calculated only on valid rows?",
      "What do keepdims=True and the resulting (1, 4) shapes make easier?",
      "Which assertion proves every robot received exactly one terminal status?",
      "Why is allclose used for standardized numerical results instead of ==?",
    ],
    reflectionQuestions: [
      "Should a robot with one invalid measurement be excluded entirely, partially summarized, or routed to immediate review? Who should define that policy?",
      "Which calibration parameters should be versioned by device, sensor, and effective date?",
      "How would you fit standardization parameters on training data and reuse them without leakage?",
    ],
    extension:
      "Add 60 timestamped readings per robot to create a robot × time × sensor tensor. Compute rolling-window features without crossing robot boundaries, create a prior-only risk matrix, compare loop and vectorized implementations for equality and timing, and retain invalid values with robot and timestamp identifiers.",
  },

  guidedPractice: [
    { id: "gp-05-02-01", question: "What are shape, ndim, and size for an array with shape (10, 5, 3)?", answer: "shape is (10, 5, 3), ndim is 3, and size is 10 × 5 × 3 = 150." },
    { id: "gp-05-02-02", question: "For an observation-by-feature matrix, what does sum(axis=0) calculate?", answer: "It reduces the observation axis and returns one sum per feature; the result shape is the number of columns." },
    { id: "gp-05-02-03", question: "Can shapes (8, 4) and (4,) broadcast? Why?", answer: "Yes. Comparing from the trailing dimension, 4 equals 4; the vector is applied across all eight rows." },
    { id: "gp-05-02-04", question: "Why can array_slice = array[:, 0] be risky before mutation?", answer: "Basic slicing commonly returns a view sharing the source data, so mutation may change the original array. Use copy when independent ownership is required." },
    { id: "gp-05-02-05", question: "Why use & rather than and between NumPy comparison arrays?", answer: "& combines Boolean arrays elementwise; and expects one truth value for each whole operand and raises an ambiguous-truth error for multi-element arrays." },
    { id: "gp-05-02-06", question: "When should np.allclose replace exact equality?", answer: "When floating-point calculations may differ by small rounding error; choose justified relative and absolute tolerances based on scale and risk." },
  ],

  independentPractice: [
    { id: "ip-05-02-01", difficulty: "Foundational", question: "Create a 4 × 3 float array and report ndim, shape, size, itemsize, and nbytes.", sampleAnswer: "Use np.array(..., dtype=np.float64); ndim=2, shape=(4, 3), size=12, itemsize is commonly 8 bytes, and nbytes is commonly 96." },
    { id: "ip-05-02-02", difficulty: "Foundational", question: "Select the first row, last column, center 2 × 2 block, and rows 0 and 3 from a 4 × 4 array. State each output shape.", sampleAnswer: "Use a[0], a[:, -1], a[1:3, 1:3], and a[[0, 3]]; shapes are (4,), (4,), (2, 2), and (2, 4)." },
    { id: "ip-05-02-03", difficulty: "Applied", question: "Convert Fahrenheit readings to Celsius with one vectorized expression and preserve NaN values.", sampleAnswer: "celsius = (fahrenheit - 32.0) * 5.0 / 9.0; floating-point NaN values propagate and should be profiled explicitly." },
    { id: "ip-05-02-04", difficulty: "Applied", question: "Validate a student-by-assessment matrix so scores must be finite and between 0 and 100, producing one valid flag per student.", sampleAnswer: "valid = np.isfinite(scores).all(axis=1) & ((scores >= 0) & (scores <= 100)).all(axis=1)." },
    { id: "ip-05-02-05", difficulty: "Analytical", question: "Standardize each feature column and prove the transformed means and standard deviations are correct.", sampleAnswer: "Compute mean/std on the eligible population, reject zero std, broadcast the transformation, and use np.allclose on axis=0 means and stds." },
    { id: "ip-05-02-06", difficulty: "Advanced", question: "Compare a Python loop and vectorized weighted-score implementation for values, shape, dtype, and runtime.", sampleAnswer: "Verify equivalent outputs first with allclose, warm up, use repeated timing on sufficiently large arrays, report environment and distribution, and include temporary-memory cost." },
    { id: "ip-05-02-07", difficulty: "Professional", question: "Design validation tests for an image batch expected to have shape (N, 224, 224, 3).", sampleAnswer: "Test ndim, spatial and channel dimensions, N policy, dtype, finite/range constraints, identifier alignment, channel ordering, memory limits, normalization parameters, empty batches, and unexpected shapes." },
  ],

  commonMistakes: [
    { mistake: "Treating an ndarray as only a faster Python list.", correction: "Document its dtype, shape, axis meanings, units, memory behavior, and missing-value policy." },
    { mistake: "Mixing identifiers and measurements in one array.", correction: "Keep identifiers in an aligned array or structured table so the numerical matrix retains a useful dtype." },
    { mistake: "Assuming axis=0 always means rows semantically.", correction: "Axis numbers refer to array dimensions; explicitly declare the meaning of each axis for every dataset." },
    { mistake: "Averaging mixed-unit columns across axis=1.", correction: "Do not combine °C, mm/s, amperes, and seconds without a defined scaling and decision model." },
    { mistake: "Expecting Python and/or/not to combine Boolean arrays.", correction: "Use &, |, and ~ with parentheses or NumPy logical functions for elementwise conditions." },
    { mistake: "Relying on compatible broadcasting without checking semantics.", correction: "Write expected shapes and reshape explicitly for per-row versus per-column parameters." },
    { mistake: "Mutating a slice believed to be independent.", correction: "Test sharing and use .copy() when the transformed array must not change its source." },
    { mistake: "Using reshape when the element count changes.", correction: "The product of new dimensions must equal the original size; use padding, selection, or concatenation for changed populations." },
    { mistake: "Using == for calculated floating-point arrays.", correction: "Use np.allclose or np.isclose with documented tolerances while still testing exact integers and categories exactly." },
    { mistake: "Ignoring integer overflow or dtype limits.", correction: "Choose dtypes from required ranges and precision; test boundary arithmetic before large-scale computation." },
    { mistake: "Using np.nanmean to hide unexplained missingness.", correction: "Profile and explain missing values first, then use a governed eligible-population rule." },
    { mistake: "Standardizing the entire dataset before train-test separation.", correction: "Fit mean and standard deviation on training data only, then reuse those parameters unchanged." },
    { mistake: "Vectorizing into unreadable temporary expressions.", correction: "Use named intermediate arrays, verify shapes, and consider chunking or clearer staged operations." },
    { mistake: "Claiming a speed improvement from one tiny timing run.", correction: "Prove equal outputs, use representative sizes and repeated measurements, and report memory and environment." },
  ],

  discussionQuestions: [
    "When is a Python loop clearer or safer than a vectorized expression?",
    "Should invalid rows be removed, imputed, clipped, or routed to exceptions in a maintenance system?",
    "When does float32 provide an acceptable precision-memory tradeoff compared with float64?",
    "How can broadcasting produce a numerically plausible but semantically wrong result?",
    "What ownership rules should a team use for array views and mutable shared memory?",
    "How should training, validation, testing, and production share preprocessing parameters without leakage or drift?",
  ],

  formativeAssessment: {
    totalPoints: 50,
    passingScore: 40,
    questions: [
      { id: "check-05-02-01", type: "structure", points: 5, prompt: "Explain dtype, ndim, shape, size, itemsize, and nbytes for one array.", sampleAnswer: "dtype defines element representation; ndim counts axes; shape gives axis lengths; size is their product; itemsize is bytes per element; nbytes is size × itemsize for the element buffer." },
      { id: "check-05-02-02", type: "axes", points: 5, prompt: "For shape (100, 12), compare mean(axis=0) and mean(axis=1) and interpret each.", sampleAnswer: "axis=0 returns 12 feature means across observations; axis=1 returns 100 means across features, which is meaningful only if combining those features is justified." },
      { id: "check-05-02-03", type: "indexing", points: 5, prompt: "Compare basic slicing, integer indexing, and Boolean masking, including copy/view behavior.", sampleAnswer: "Basic slicing often returns a view; integer and Boolean advanced indexing generally return copies; every selection must retain identifier alignment and expected shape." },
      { id: "check-05-02-04", type: "broadcasting", points: 5, prompt: "Determine whether (6, 1, 4) and (3, 4) broadcast, and give the result shape.", sampleAnswer: "Yes: trailing 4 matches 4, 1 broadcasts to 3, and the leading 6 remains; result shape is (6, 3, 4)." },
      { id: "check-05-02-05", type: "masking", points: 5, prompt: "Write a vectorized valid-row rule requiring all values finite and each column within its governed range.", sampleAnswer: "Combine np.isfinite(X).all(axis=1) with parenthesized per-column comparisons using &, producing one Boolean per observation." },
      { id: "check-05-02-06", type: "reduction", points: 5, prompt: "Explain why NaN-aware aggregation does not by itself solve a missing-data problem.", sampleAnswer: "It calculates over available values but does not explain missingness, population changes, bias, quality thresholds, or whether omission is allowed." },
      { id: "check-05-02-07", type: "linear-algebra", points: 5, prompt: "Define the shapes required for X @ w when X has n observations and p features.", sampleAnswer: "X must have shape (n, p), w shape (p,) or (p, k), and the result is (n,) or (n, k); feature and weight order must agree." },
      { id: "check-05-02-08", type: "numerics", points: 5, prompt: "Explain when to use array_equal versus allclose.", sampleAnswer: "Use array_equal for exact value/shape equality where appropriate; use allclose for floating-point calculations with justified relative and absolute tolerances." },
      { id: "check-05-02-09", type: "ai", points: 5, prompt: "Explain how full-dataset standardization creates leakage.", sampleAnswer: "Validation and test values influence preprocessing parameters used for training, allowing future held-out distribution information into the model-building process." },
      { id: "check-05-02-10", type: "validation", points: 5, prompt: "Give eight tests required before publishing a vectorized sensor analysis.", sampleAnswer: "Test shape, dtype, identifier alignment, finite/range rules, mask lengths, outcome exclusivity, row balance, boundary membership, reduction values, broadcast parameter order, tolerance-based results, and expected exceptions; any eight earn full credit." },
    ],
  },

  researchExtension: {
    title: "Vectorization, Numerical Reliability, and Resource Study",
    researchQuestion:
      "How do array dtype, memory layout, vectorization strategy, temporary arrays, and chunk size affect correctness, speed, memory, and reproducibility?",
    applicationOptions: [
      "Robot sensor batches",
      "Financial scenario simulation",
      "Student assessment matrices",
      "Image preprocessing",
      "Audio feature extraction",
      "Machine-learning feature matrices",
    ],
    task:
      "Implement one numerical workflow with a transparent Python loop, a staged NumPy vectorization, and a memory-aware chunked vectorization. Prove equivalent eligible populations and outputs, then compare execution time, peak memory, dtype effects, numerical error, readability, and failure handling across representative data sizes.",
    requiredEvidence: [
      "Declared array dimensions, units, identifiers, dtypes, and missing-value policy",
      "Loop, vectorized, and chunked implementations with the same contract",
      "Normal, boundary, invalid, empty, zero-variance, and extreme-value fixtures",
      "Exact or tolerance-based equivalence tests selected by output type",
      "Repeated timing method, environment, data sizes, and warm-up policy",
      "Memory estimate plus measured or carefully observed temporary-array behavior",
      "Correctness-first conclusion with performance and maintainability tradeoffs",
      "Reproducible seed, package version, code, and captured results",
    ],
  },

  portfolioArtifact: {
    title: "Lesson 2 Portfolio Evidence: Audited Vectorized Sensor Engine",
    description:
      "Create a reusable NumPy module that converts a typed sensor matrix into validated profiles, exceptions, classifications, standardized features, and ranked priorities.",
    requiredSections: [
      "README with decision, observation grain, axis map, feature order, units, dtypes, setup, outputs, tests, and limitations",
      "Input-contract function validating shape, dtype, identifiers, finiteness, ranges, and empty batches",
      "Calibration and transformation functions with explicit broadcast shapes",
      "Reason-coded validation masks retaining source identifiers",
      "Vectorized classification and reconciliation summary",
      "Training-safe standardization function returning fitted parameters and transformed values",
      "Weighted-score function with feature-order and dimension validation",
      "Automated tests and one measured loop-versus-vectorized comparison",
    ],
    requiredEvidence: [
      "At least one 2D matrix and one 3D extension with documented axes",
      "At least four deliberate dtypes or a justified focused numeric dtype design",
      "Basic slicing, Boolean masking, and advanced indexing with copy/view explanation",
      "At least two documented broadcasting operations",
      "At least four axis-aware reductions",
      "Exact and tolerance-based tests used appropriately",
      "Received, valid, invalid, OK, and REVIEW counts that reconcile",
      "Reproducible environment, NumPy version, seed where randomness is used, and no private data",
    ],
  },

  growthIndicators: [
    { title: "Array Structure Interpreter", description: "You connect every shape and axis to its observation, feature, time, channel, or batch meaning." },
    { title: "Vectorization Designer", description: "You replace repeated numerical loops with readable array operations and explicit broadcast alignment." },
    { title: "Numerical Quality Reviewer", description: "You test dtypes, finiteness, ranges, tolerances, overflow, missingness, and row reconciliation." },
    { title: "AI Tensor Foundation Builder", description: "You prepare aligned numerical matrices and transfer shape reasoning to model tensors and preprocessing pipelines." },
  ],

  reflection: [
    "Can you state the meaning of every axis in your current numerical dataset?",
    "Which array currently mixes identifiers, categories, and numerical measurements?",
    "Which aggregation uses the wrong axis or combines incompatible units?",
    "Which slice may share memory with data you intended to protect?",
    "Which broadcast works technically but may align the wrong business dimension?",
    "Which missing-value reduction changes the eligible population without reporting it?",
    "Which transformation parameters might leak validation or test information?",
    "Which test proves every observation remains aligned with its identifier after masking or sorting?",
  ],

  summary: [
    "NumPy arrays are homogeneous typed numerical objects with explicit shape, axes, size, memory layout, and vectorized behavior.",
    "Declare what every axis represents before selecting, reshaping, reducing, or multiplying arrays.",
    "Shape dimensions multiply to size; element-buffer memory is size multiplied by itemsize.",
    "Choose dtypes according to value range, precision, memory, interoperability, and numerical-risk requirements.",
    "Keep identifiers and mixed semantic fields separate from homogeneous numerical matrices unless using a deliberate structured representation.",
    "Basic slicing often returns views; advanced indexing generally returns copies; use explicit copies when ownership requires isolation.",
    "Boolean masks must align exactly with the observation axis and should retain exception identifiers and reasons.",
    "Vectorization expresses elementwise work through NumPy operations and ufuncs, improving speed and often clarity.",
    "Broadcasting compares trailing dimensions and permits equal lengths or dimensions of one.",
    "Broadcast compatibility does not prove semantic alignment; document whether parameters apply by row, column, channel, or another axis.",
    "Reductions remove axes unless keepdims retains them; axis choice determines the population and meaning of each result.",
    "NaN-aware functions require an explicit missing-data policy and eligible-population report.",
    "Standardization broadcasts column parameters across observations and must avoid zero variance and train-test leakage.",
    "Dot products and matrix multiplication require aligned inner dimensions and documented feature order.",
    "Floating-point results often require tolerance-based comparison rather than exact equality.",
    "Performance claims require equivalent outputs, representative data, repeated measurement, environment details, and memory consideration.",
    "NumPy shape, mask, broadcasting, reduction, and matrix reasoning form a direct foundation for machine-learning tensors.",
  ],

  previousLesson: {
    id: "data-ai-m05-l01",
    moduleNumber: 5,
    slug: "python-types-control-flow-functions-and-modules",
    title: "Python Types, Control Flow, Functions, and Modules",
  },
  nextLesson: {
    id: "data-ai-m05-l03",
    moduleNumber: 5,
    slug: "dataframes-series-indexing-and-filtering",
    title: "DataFrames, Series, Indexing, and Filtering",
  },

  lumineryGuidance: {
    message:
      "Name every axis, verify every shape, preserve identifier alignment, and test numerical results before celebrating vectorized speed.",
    prompt:
      "Act as my senior NumPy engineer, numerical reviewer, and AI data coach. Help me complete Module 5 Lesson 2 one verified gate at a time. Require observation grain, axis map, feature order, units, dtype, shape, mask alignment, copy/view ownership, broadcasting explanation, missing-value policy, axis-aware reductions, matrix-dimension checks, train-safe preprocessing, numerical tolerances, row reconciliation, performance equivalence, and reproducibility. Do not let me combine incompatible units, silently discard invalid rows, mutate shared views accidentally, rely on semantically wrong broadcasting, fit transformations on held-out data, or optimize before correctness tests pass.",
    coachingQuestions: [
      "What does each axis represent?",
      "What shape and dtype should enter and leave this operation?",
      "Does this selection preserve identifier alignment?",
      "Is this result a view or an independent copy?",
      "Which dimensions are broadcasting, and do they mean the same thing?",
      "Which population remains after this mask?",
      "Should this comparison be exact or tolerance-based?",
      "Which reconciliation proves every observation reached one explained outcome?",
    ],
  },
};

export default lesson02;
