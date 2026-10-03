const lesson01 = {
  id: "data-ai-m05-l01",
  courseId: "data-ai-foundations",
  moduleId: "data-ai-foundations-module-05",
  moduleNumber: 5,
  lessonNumber: 1,
  slug: "python-types-control-flow-functions-and-modules",
  title: "Python Types, Control Flow, Functions, and Modules",
  shortTitle: "Python Types, Control Flow, Functions, and Modules",
  subtitle:
    "Build reliable data programs by choosing meaningful types, controlling execution, designing testable functions, organizing reusable modules, and making failures visible.",
  status: "available",
  duration: "4–5 hours",
  level: "Beginner to Professional",

  essentialQuestion:
    "How can we turn raw values and business rules into readable, reusable, and testable Python programs for data and AI work?",
  bigIdea:
    "A Python program is a sequence of explicit transformations: values have types, conditions choose paths, loops repeat controlled work, functions protect contracts, and modules organize reusable responsibilities. Reliability comes from making every assumption visible and testable.",

  whyThisLessonExists: {
    title: "Python Syntax Becomes Valuable When It Protects Meaning",
    introduction:
      "Data analysts and AI engineers rarely receive perfectly typed values. Sensor measurements may arrive as text, device identifiers can be missing, timestamps may be invalid, and a single special case can change an operational decision. Python gives us the tools to validate these inputs and turn them into trustworthy results.",
    centralProblem:
      "A maintenance script reads temperature and vibration values from device messages. It compares text to numbers, treats missing measurements as zero, repeats threshold logic in several places, stops on one malformed row, and cannot be imported safely because it runs immediately. The report looks complete but its decisions are inconsistent and difficult to test.",
    purpose:
      "This lesson develops a professional foundation: select types deliberately, convert at system boundaries, use truth values and comparisons correctly, express rules with control flow, iterate safely, design pure and impure functions, document contracts, handle expected exceptions, organize code into modules, and verify behavior with assertions and representative cases.",
  },

  problemFirst: {
    title: "Opening Investigation: Can This Sensor Script Be Trusted?",
    scenario:
      "A robot sends three messages: {robot_id: 'R-101', temperature_c: '78.4', vibration_mm_s: '4.1'}, {robot_id: 'R-102', temperature_c: '', vibration_mm_s: '9.2'}, and {robot_id: 'R-103', temperature_c: 'HOT', vibration_mm_s: '2.6'}. The plant rule says temperature at least 80°C or vibration above 8 mm/s requires review. A hurried script converts every blank to zero and crashes when it reaches 'HOT'.",
    questions: [
      "Which values are strings, numbers, missing values, identifiers, or invalid observations?",
      "Where should conversion occur, and what evidence should be retained when conversion fails?",
      "What is the difference between at least 80 and above 80?",
      "Should an invalid temperature automatically make the robot safe?",
      "Which work belongs in a reusable function?",
      "What should the function return so downstream code can distinguish OK, REVIEW, and INVALID?",
      "How can the program continue processing valid records without hiding failures?",
      "Which tests prove the threshold boundaries are implemented correctly?",
    ],
    expectedInsight:
      "Reliable Python separates parsing, validation, classification, aggregation, and reporting. Invalid data is an explicit outcome—not zero, not safe, and not silently discarded.",
  },

  visualModels: [
    {
      id: "python-reliability-pipeline",
      type: "lifecycle",
      title: "The Reliable Python Data-Program Cycle",
      description:
        "Move every record through a controlled path from untrusted input to tested output.",
      stages: [
        { label: "1. Receive", detail: "Read values from a file, API, database, sensor, form, or function argument without assuming they are valid." },
        { label: "2. Parse", detail: "Convert boundary text into intentional Python types while retaining identifiers and conversion errors." },
        { label: "3. Validate", detail: "Check required fields, ranges, categories, units, and cross-field rules before analysis." },
        { label: "4. Decide", detail: "Use explicit Boolean conditions and ordered branches to assign a governed outcome." },
        { label: "5. Transform", detail: "Use loops, comprehensions, and small functions to create consistent derived values and summaries." },
        { label: "6. Verify", detail: "Test normal, boundary, missing, invalid, and unexpected cases; report counts and exceptions." },
      ],
      feedback:
        "A failed record returns to parsing or validation with a reason code. A failed test returns to the smallest responsible function before any result is published.",
      interpretation:
        "Python reliability is not one try/except block. It is a visible contract across types, control flow, functions, modules, outputs, and tests.",
    },
    {
      id: "function-contract-model",
      type: "lifecycle",
      title: "A Function Is a Small Data Contract",
      description:
        "A well-designed function makes its inputs, transformation, output, and failure behavior understandable.",
      stages: [
        { label: "Inputs", detail: "Named parameters with expected types, units, allowed values, and defaults." },
        { label: "Rules", detail: "One focused responsibility expressed with readable operations and branches." },
        { label: "Output", detail: "A stable return type whose meaning and grain are documented." },
        { label: "Failure", detail: "A specific exception, validation result, or reason code—not an ambiguous silent value." },
        { label: "Evidence", detail: "Examples, assertions, tests, docstrings, and deterministic results for the same inputs." },
      ],
      feedback:
        "When a contract is unclear or a test fails, return to the smallest function boundary and clarify its input, rule, result, or failure behavior.",
      interpretation:
        "Small contracts make programs easier to test, reuse, review, and combine into data pipelines or AI services.",
    },
  ],

  learningObjectives: [
    "Distinguish Python objects, variables, values, types, mutability, identity, and equality.",
    "Use integers, floats, strings, Booleans, None, lists, tuples, dictionaries, and sets appropriately.",
    "Convert untrusted boundary values without replacing invalid or missing data with misleading defaults.",
    "Apply arithmetic, comparison, membership, identity, and Boolean operators with correct precedence.",
    "Use if, elif, and else to implement mutually understandable business rules and boundary conditions.",
    "Use for and while loops safely, including range, enumerate, zip, break, continue, and loop invariants.",
    "Choose comprehensions when they improve clarity and ordinary loops when logic or diagnostics are complex.",
    "Define functions with parameters, return values, type hints, docstrings, defaults, and keyword arguments.",
    "Distinguish local and global scope, pure and impure functions, and mutable from immutable arguments.",
    "Handle expected errors with narrow exception types and preserve useful diagnostic context.",
    "Organize constants, functions, tests, and executable entry points into import-safe modules.",
    "Use assertions and representative test cases to verify normal, boundary, missing, and invalid behavior.",
    "Build a complete sensor-classification program that produces results, exceptions, and control totals.",
  ],

  prerequisiteKnowledge: [
    "A computer with Python 3.11 or later, or a browser-based Python environment",
    "Basic understanding of rows, columns, data types, missing values, and validation",
    "Module 1: data meaning, unit of analysis, features, targets, actions, and governance",
    "Module 2: center, spread, unusual observations, uncertainty, and honest interpretation",
    "Module 4: row grain, keys, exceptions, reconciliation, and reproducibility",
    "No previous programming experience is required",
  ],

  vocabulary: [
    { term: "Python object", definition: "A value in memory with a type, identity, and behavior." },
    { term: "Variable", definition: "A name bound to an object; assignment connects the name to a value rather than placing the value inside the name." },
    { term: "Data type", definition: "A classification that determines a value's representation and permitted operations, such as int, float, str, or list." },
    { term: "Literal", definition: "A value written directly in code, such as 42, 3.5, True, None, or 'R-101'." },
    { term: "Expression", definition: "Code that evaluates to a value, such as temperature >= 80 or sum(values) / len(values)." },
    { term: "Statement", definition: "An instruction that performs an action, such as assignment, return, import, or an if statement." },
    { term: "Integer (int)", definition: "A whole-number type with arbitrary precision in standard Python." },
    { term: "Floating-point number (float)", definition: "A finite-precision approximation of a real number; many decimal fractions cannot be represented exactly." },
    { term: "String (str)", definition: "An immutable sequence of Unicode characters used for text, identifiers, and boundary data." },
    { term: "Boolean (bool)", definition: "The truth-value type with the values True and False." },
    { term: "None", definition: "Python's singleton value for the intentional absence of a value; it is not zero, False, or an empty string." },
    { term: "Collection", definition: "An object containing several values, such as a list, tuple, dictionary, or set." },
    { term: "List", definition: "An ordered, mutable collection that can contain repeated and differently typed values." },
    { term: "Tuple", definition: "An ordered, immutable collection often used for fixed records or multi-value returns." },
    { term: "Dictionary", definition: "A mutable mapping from unique hashable keys to values." },
    { term: "Set", definition: "An unordered collection of unique hashable values used for membership and set operations." },
    { term: "Mutable", definition: "Able to change in place after creation, as lists, dictionaries, and sets can." },
    { term: "Immutable", definition: "Unable to change in place after creation, as integers, floats, strings, and tuples are." },
    { term: "Type conversion", definition: "Creating a value of one type from another, such as float('78.4')." },
    { term: "Truthy and falsy", definition: "How objects are interpreted in Boolean contexts; empty collections, zero, None, and False are falsy." },
    { term: "Control flow", definition: "The order in which program statements execute based on conditions, repetition, function calls, and exceptions." },
    { term: "Conditional", definition: "An if/elif/else structure that selects a branch according to Boolean expressions." },
    { term: "Iteration", definition: "Repeatedly processing values from an iterable or while a condition remains true." },
    { term: "Iterable", definition: "An object that can provide values one at a time, such as a list, string, range, dictionary, or file." },
    { term: "Comprehension", definition: "Compact syntax for creating a list, dictionary, or set from an iterable with optional filtering." },
    { term: "Function", definition: "A named, reusable block of behavior that accepts inputs and returns an explicit result." },
    { term: "Parameter and argument", definition: "A parameter is a name in a function definition; an argument is a value supplied when calling the function." },
    { term: "Return value", definition: "The object sent back to the caller by return; a function without an explicit return yields None." },
    { term: "Scope", definition: "The region in which a name can be resolved, including local, enclosing, global, and built-in scopes." },
    { term: "Pure function", definition: "A function whose result depends only on inputs and that does not change external state." },
    { term: "Side effect", definition: "A change beyond returning a value, such as printing, writing a file, mutating an argument, or updating a database." },
    { term: "Exception", definition: "An object signaling that normal execution cannot continue at a point in the program." },
    { term: "Module", definition: "A Python file that groups related definitions and can be imported by other code." },
    { term: "Package", definition: "A structured collection of Python modules, commonly organized in a directory for distribution or reuse." },
    { term: "Import", definition: "The mechanism that loads a module and binds access to its definitions." },
    { term: "Entry point", definition: "The controlled starting location for executable behavior, commonly guarded by if __name__ == '__main__'." },
    { term: "Type hint", definition: "Optional annotation describing intended input and output types for readers and static tools; it does not automatically enforce values at runtime." },
    { term: "Docstring", definition: "A string attached to a module, class, or function that documents purpose, inputs, outputs, failures, and examples." },
    { term: "Assertion", definition: "A check that raises AssertionError when an expected internal condition is false; it is useful for tests, not user-input validation." },
    { term: "Reason code", definition: "A stable label explaining why a record was accepted, reviewed, rejected, or classified as invalid." },
  ],

  formulas: [
    { id: "assignment", name: "Assignment and rebinding", formula: "name = expression", meaning: "Evaluate the expression, then bind the name to the resulting object.", requirement: "Use descriptive snake_case names and do not confuse assignment (=) with equality comparison (==)." },
    { id: "boolean-precedence", name: "Boolean decision order", formula: "not A; then A and B; then A or B", meaning: "Python evaluates not before and, and and before or when parentheses do not override the order.", requirement: "Use parentheses whenever a mixed condition would be easier to audit." },
    { id: "threshold-rule", name: "Maintenance review rule", formula: "review = (temperature_c ≥ 80) OR (vibration_mm_s > 8)", meaning: "Either governed threshold is sufficient to require review.", requirement: "Keep ≥ versus > boundaries exact and treat missing or invalid inputs separately." },
    { id: "safe-rate", name: "Safe rate", formula: "rate = numerator / denominator if denominator ≠ 0 else None", meaning: "Avoids a division failure while preserving that the rate is undefined when no eligible observations exist.", requirement: "Do not silently replace an undefined rate with zero unless the business definition explicitly requires it." },
    { id: "validity-rate", name: "Validity rate", formula: "validity rate = valid records / received records", meaning: "Measures the share of received records that satisfy the data contract.", requirement: "Report both counts and handle an empty batch deliberately." },
    { id: "review-rate", name: "Review rate", formula: "review rate = review records / valid records", meaning: "Measures operational review workload among records eligible for classification.", requirement: "Exclude invalid records from the denominator and expose invalid count separately." },
    { id: "function-contract", name: "Function contract", formula: "output or documented exception = f(validated inputs)", meaning: "A function maps governed inputs to a stable result or an explicit failure.", requirement: "Document types, units, defaults, return meaning, side effects, and failure behavior." },
    { id: "row-balance", name: "Program row balance", formula: "received = OK + REVIEW + INVALID", meaning: "Confirms every input record reaches exactly one terminal classification.", requirement: "Outcomes must be mutually exclusive, collectively exhaustive, and counted at the same record grain." },
  ],

  workedExamples: [
    {
      id: "example-05-01-01",
      title: "Choose types that preserve business meaning",
      problem: "Represent robot_id R-101, temperature 78.4°C, three fault attempts, active status, an absent technician, and two fault codes.",
      solutionSteps: [
        "Keep robot_id as a string because it is an identifier, not a quantity.",
        "Use float for temperature_c and int for attempt_count.",
        "Use bool for is_active and None for the intentionally absent technician.",
        "Use a set for unique fault codes when order is unimportant, or a list when event order matters.",
      ],
      answer: "robot_id = 'R-101'; temperature_c = 78.4; attempt_count = 3; is_active = True; technician_id = None; fault_codes = {'F01', 'F03'}",
      interpretation: "A meaningful identifier should not become a number merely because it contains digits, and absence should not be disguised as an empty or zero value.",
    },
    {
      id: "example-05-01-02",
      title: "Parse boundary text without inventing data",
      problem: "Convert the strings '78.4', '', and 'HOT' to optional temperatures.",
      solutionSteps: [
        "Strip surrounding whitespace.",
        "Return None with reason MISSING_TEMPERATURE for a blank value.",
        "Attempt float conversion for nonblank text.",
        "Catch ValueError only and return INVALID_TEMPERATURE with the original value for review.",
      ],
      answer: "'78.4' becomes 78.4; '' remains missing; 'HOT' remains invalid. Neither missing nor invalid becomes 0.0.",
      interpretation: "Zero is a real measurement. Using it as a universal error code corrupts analysis and can produce a false safe classification.",
    },
    {
      id: "example-05-01-03",
      title: "Write an exact Boolean rule",
      problem: "A record requires review when temperature is at least 80°C or vibration is above 8 mm/s. Classify temperature 80.0 and vibration 8.0.",
      solutionSteps: [
        "Evaluate 80.0 >= 80, which is True.",
        "Evaluate 8.0 > 8, which is False.",
        "Combine the results with or: True or False is True.",
      ],
      answer: "REVIEW",
      interpretation: "Boundary language matters. Replacing >= with > would misclassify exactly 80°C.",
    },
    {
      id: "example-05-01-04",
      title: "Iterate with identifiers and diagnostics",
      problem: "Process sensor rows while retaining their original positions and continuing after invalid input.",
      solutionSteps: [
        "Use enumerate(records, start=1) to create a visible source row number.",
        "Call one parsing/classification function per record.",
        "Append accepted results and reason-coded exceptions to separate collections.",
        "Avoid a bare except that would hide programming errors such as misspelled names.",
      ],
      answer: "Each row receives a source_row identifier and exactly one terminal result, allowing row balance and error investigation.",
      interpretation: "A loop should preserve traceability, not merely produce values.",
    },
    {
      id: "example-05-01-05",
      title: "Design a focused, typed function",
      problem: "Create a reusable function for the review rule.",
      solutionSteps: [
        "Name the inputs temperature_c and vibration_mm_s so units remain visible.",
        "Annotate both as float and the result as bool.",
        "Keep parsing and printing outside the function.",
        "Return the Boolean expression directly.",
      ],
      answer: "def requires_review(temperature_c: float, vibration_mm_s: float) -> bool:\n    return temperature_c >= 80.0 or vibration_mm_s > 8.0",
      interpretation: "The pure function is easy to test at 79.9, 80.0, 8.0, and 8.1 without files, databases, or printed output.",
    },
    {
      id: "example-05-01-06",
      title: "Make a module safe to import",
      problem: "A file defines functions but also reads data and prints results immediately whenever another file imports it.",
      solutionSteps: [
        "Keep constants and function definitions at module level.",
        "Place orchestration in a main() function.",
        "Call main only under if __name__ == '__main__'.",
        "Import the module in a test and confirm that no report is produced automatically.",
      ],
      answer: "Definitions remain reusable during import; executable work occurs only when the file is run as the program entry point.",
      interpretation: "Import safety separates reusable logic from side effects and supports tests, notebooks, pipelines, and APIs.",
    },
  ],

  interactiveExploration: {
    title: "Trace the Program Before Running It",
    description:
      "Use three sensor records on paper or in a notebook. For each line of the pseudocode, record the current variable values, selected branch, output status, and exception count.",
    steps: [
      "Label every input with its current Python type and intended semantic type.",
      "Predict each conversion result before running the code.",
      "Evaluate threshold comparisons separately, then combine them.",
      "Trace the collections after every loop iteration.",
      "Change one boundary value at a time and predict the new result.",
      "Run the code and investigate every difference between prediction and execution.",
    ],
    questions: [
      "Which mistaken prediction came from type conversion?",
      "Which came from operator precedence or a boundary condition?",
      "Which program state would be hardest to understand without a small function or reason code?",
      "What control total proves no record disappeared?",
    ],
    expectedDiscovery:
      "Manual tracing reveals hidden assumptions about types, order, state, and branch coverage before those assumptions enter a larger data pipeline.",
  },

  realWorldApplications: [
    { field: "Manufacturing and Robotics", application: "Parse sensor messages, validate units and ranges, classify maintenance conditions, route exceptions, and produce counts that reconcile to received devices." },
    { field: "Finance", application: "Convert transaction fields carefully, distinguish identifiers from quantities, apply fraud or eligibility rules, and avoid binary floating-point for exact currency by using Decimal." },
    { field: "Education", application: "Validate scores and attendance, calculate support indicators, preserve missing evidence, and package reusable intervention rules in tested functions." },
    { field: "Healthcare Operations", application: "Validate measurements and coded values, apply escalation logic, preserve privacy, and require qualified human review for clinical decisions." },
    { field: "Retail and Supply Chain", application: "Validate quantities, dates, status transitions, and inventory rules; process batches while retaining rejected lines and reason codes." },
    { field: "AI and Machine Learning", application: "Implement deterministic preprocessing, label construction, feature checks, inference contracts, and monitoring rules that behave consistently in training and production." },
  ],

  aiConnection: {
    title: "AI Pipelines Are Python Programs Before They Are Models",
    explanation:
      "Machine-learning systems depend on ordinary programming decisions: types define usable inputs, branches define inclusion and labels, loops or vectorized operations transform observations, functions define feature logic, modules package reusable behavior, and exceptions determine whether failures are visible. A sophisticated model cannot repair a mislabeled target or a silent parsing rule.",
    example:
      "A predictive-maintenance model needs a binary label indicating whether a robot fails within seven days. A tested function must use event time, exclude future information from features, validate the observation window, and return an explicit result for insufficient follow-up instead of pretending the label is zero.",
    uses: [
      "Feature and label functions",
      "Training and inference preprocessing",
      "Typed API request and response contracts",
      "Batch scoring with exception routing",
      "Evaluation and monitoring controls",
      "Reproducible command-line and notebook workflows",
    ],
    caution:
      "Code generated by an AI assistant must be reviewed and tested. Plausible syntax can still contain wrong boundaries, broad exceptions, mutable defaults, data leakage, insecure input handling, or undocumented assumptions.",
    reflectionQuestion:
      "Which small Python rule in an AI pipeline could change who receives an intervention even if the model itself never changes?",
  },

  pythonLab: {
    title: "Build a Typed Sensor Classification Program",
    objective:
      "Parse raw robot messages, validate required values, classify records with governed threshold rules, summarize outcomes, and prove row balance using only the Python standard library.",
    code: `from __future__ import annotations

from collections import Counter
from dataclasses import dataclass
from typing import Any, Iterable

TEMPERATURE_REVIEW_C = 80.0
VIBRATION_REVIEW_MM_S = 8.0
VALID_PLANTS = {"A", "B", "C"}


@dataclass(frozen=True)
class SensorResult:
    source_row: int
    robot_id: str
    plant: str | None
    temperature_c: float | None
    vibration_mm_s: float | None
    status: str
    reason_code: str


def parse_required_float(value: Any, field_name: str) -> float:
    """Return a finite float or raise a reason-rich ValueError."""
    if value is None or str(value).strip() == "":
        raise ValueError(f"MISSING_{field_name.upper()}")

    try:
        number = float(value)
    except (TypeError, ValueError) as error:
        raise ValueError(f"INVALID_{field_name.upper()}") from error

    if number != number or number in (float("inf"), float("-inf")):
        raise ValueError(f"NONFINITE_{field_name.upper()}")

    return number


def requires_review(temperature_c: float, vibration_mm_s: float) -> bool:
    """Apply the approved maintenance threshold rule."""
    return (
        temperature_c >= TEMPERATURE_REVIEW_C
        or vibration_mm_s > VIBRATION_REVIEW_MM_S
    )


def classify_record(record: dict[str, Any], source_row: int) -> SensorResult:
    """Validate and classify one raw record at the sensor-message grain."""
    robot_id = str(record.get("robot_id", "")).strip()
    plant = str(record.get("plant", "")).strip().upper()

    if not robot_id:
        return SensorResult(source_row, "UNKNOWN", plant or None, None, None,
                            "INVALID", "MISSING_ROBOT_ID")

    if plant not in VALID_PLANTS:
        return SensorResult(source_row, robot_id, plant or None, None, None,
                            "INVALID", "INVALID_PLANT")

    try:
        temperature_c = parse_required_float(
            record.get("temperature_c"), "temperature_c"
        )
        vibration_mm_s = parse_required_float(
            record.get("vibration_mm_s"), "vibration_mm_s"
        )
    except ValueError as error:
        return SensorResult(source_row, robot_id, plant, None, None,
                            "INVALID", str(error))

    if not (-40 <= temperature_c <= 180):
        return SensorResult(source_row, robot_id, plant, temperature_c,
                            vibration_mm_s, "INVALID", "TEMPERATURE_OUT_OF_RANGE")

    if vibration_mm_s < 0:
        return SensorResult(source_row, robot_id, plant, temperature_c,
                            vibration_mm_s, "INVALID", "NEGATIVE_VIBRATION")

    status = "REVIEW" if requires_review(temperature_c, vibration_mm_s) else "OK"
    reason = "THRESHOLD_EXCEEDED" if status == "REVIEW" else "WITHIN_LIMITS"
    return SensorResult(source_row, robot_id, plant, temperature_c,
                        vibration_mm_s, status, reason)


def classify_batch(records: Iterable[dict[str, Any]]) -> list[SensorResult]:
    """Classify every received record and preserve source order."""
    return [
        classify_record(record, source_row)
        for source_row, record in enumerate(records, start=1)
    ]


def safe_rate(numerator: int, denominator: int) -> float | None:
    """Return a rate, or None when the denominator is zero."""
    return numerator / denominator if denominator else None


def summarize(results: list[SensorResult]) -> dict[str, Any]:
    counts = Counter(result.status for result in results)
    received = len(results)
    valid = counts["OK"] + counts["REVIEW"]

    return {
        "received": received,
        "ok": counts["OK"],
        "review": counts["REVIEW"],
        "invalid": counts["INVALID"],
        "validity_rate": safe_rate(valid, received),
        "review_rate": safe_rate(counts["REVIEW"], valid),
    }


def run_self_tests() -> None:
    assert requires_review(80.0, 8.0) is True
    assert requires_review(79.9, 8.0) is False
    assert requires_review(79.9, 8.1) is True
    assert safe_rate(0, 0) is None

    try:
        parse_required_float("HOT", "temperature_c")
    except ValueError as error:
        assert str(error) == "INVALID_TEMPERATURE_C"
    else:
        raise AssertionError("Invalid temperature should raise ValueError")


def main() -> None:
    raw_records = [
        {"robot_id": "R-101", "plant": "A", "temperature_c": "78.4", "vibration_mm_s": "4.1"},
        {"robot_id": "R-102", "plant": "A", "temperature_c": "80.0", "vibration_mm_s": "8.0"},
        {"robot_id": "R-103", "plant": "B", "temperature_c": "75.2", "vibration_mm_s": "9.2"},
        {"robot_id": "R-104", "plant": "B", "temperature_c": "", "vibration_mm_s": "5.0"},
        {"robot_id": "R-105", "plant": "C", "temperature_c": "HOT", "vibration_mm_s": "2.6"},
        {"robot_id": "R-106", "plant": "D", "temperature_c": "76.0", "vibration_mm_s": "3.0"},
        {"robot_id": "R-107", "plant": "C", "temperature_c": "72.0", "vibration_mm_s": "-1"},
        {"robot_id": "R-108", "plant": "C", "temperature_c": "81.5", "vibration_mm_s": "3.8"},
    ]

    run_self_tests()
    results = classify_batch(raw_records)
    profile = summarize(results)

    exceptions = [result for result in results if result.status == "INVALID"]
    review_queue = [result.robot_id for result in results if result.status == "REVIEW"]

    assert profile["received"] == 8
    assert profile["ok"] == 1
    assert profile["review"] == 3
    assert profile["invalid"] == 4
    assert profile["received"] == profile["ok"] + profile["review"] + profile["invalid"]
    assert review_queue == ["R-102", "R-103", "R-108"]
    assert {item.reason_code for item in exceptions} == {
        "MISSING_TEMPERATURE_C",
        "INVALID_TEMPERATURE_C",
        "INVALID_PLANT",
        "NEGATIVE_VIBRATION",
    }

    print("Summary:", profile)
    print("Review queue:", review_queue)
    print("Exceptions:", [(item.robot_id, item.reason_code) for item in exceptions])
    print("All type, boundary, function, exception, and row-balance tests passed.")


if __name__ == "__main__":
    main()`,
    questions: [
      "Why are robot_id and plant stored as strings rather than numbers?",
      "Which function owns parsing, which owns the business rule, and which owns orchestration?",
      "Why does parse_required_float catch only TypeError and ValueError?",
      "Why does an invalid record return status INVALID rather than False?",
      "Which two tests prove the threshold boundaries at 80.0°C and 8.0 mm/s?",
      "Why is SensorResult frozen, and what kind of mutation does that prevent?",
      "Which assertion proves the program did not lose any received record?",
      "Why does importing this file not execute main automatically?",
    ],
    reflectionQuestions: [
      "Would you raise exceptions or return reason-coded results at each layer of a production pipeline? Explain the boundary.",
      "Which thresholds should be configuration rather than hard-coded constants?",
      "What logging, timestamp, device, and unit fields would you add before using this program operationally?",
    ],
    extension:
      "Split the code into sensor_rules.py, sensor_pipeline.py, and test_sensor_pipeline.py. Add timestamp validation, a warning band, unit conversion from Fahrenheit, a command-line input file, JSON output, and automated tests proving identical results after the refactor.",
  },

  guidedPractice: [
    { id: "gp-05-01-01", question: "Why should a ZIP code or robot ID usually remain a string?", answer: "It identifies an entity rather than measuring quantity; leading zeros and nonnumeric characters may be meaningful, and arithmetic is inappropriate." },
    { id: "gp-05-01-02", question: "What is the difference between None, 0, False, and an empty string?", answer: "None represents intentional absence; 0 is a numeric value; False is a Boolean value; an empty string is present text of length zero. They may all be falsy but have different meanings." },
    { id: "gp-05-01-03", question: "What is the result of True or False and False?", answer: "True, because and is evaluated before or: True or (False and False). Parentheses should be added when the intended rule is not immediately clear." },
    { id: "gp-05-01-04", question: "When should you use a for loop instead of a while loop?", answer: "Use for when iterating over a known iterable; use while when repetition is governed by a changing condition and termination is explicitly controlled." },
    { id: "gp-05-01-05", question: "Why is return usually preferable to printing inside an analytical function?", answer: "Returned values can be tested, composed, stored, or presented by the caller; printing creates a side effect and provides no reusable result." },
    { id: "gp-05-01-06", question: "Why avoid except Exception or bare except around an entire program?", answer: "It can hide programming defects, interrupts, and unexpected failures. Catch the narrow exceptions expected at the smallest useful boundary." },
  ],

  independentPractice: [
    { id: "ip-05-01-01", difficulty: "Foundational", question: "Create appropriately typed values for order_id, quantity, unit_price, delivered, tags, and missing_delivery_date. Explain each choice.", sampleAnswer: "Use str, int, Decimal or float according to precision needs, bool, set or list according to order/uniqueness, and None for the missing date." },
    { id: "ip-05-01-02", difficulty: "Foundational", question: "Write a condition that is true only when a record is active, has a nonempty robot_id, and is not in the excluded set.", sampleAnswer: "is_active and bool(robot_id.strip()) and robot_id not in excluded_robot_ids" },
    { id: "ip-05-01-03", difficulty: "Applied", question: "Write a loop using enumerate that parses ten temperature strings and stores valid numbers separately from row-numbered errors.", sampleAnswer: "Iterate with enumerate(values, start=1), attempt float conversion, append numbers to valid, and append {row, value, reason} for ValueError." },
    { id: "ip-05-01-04", difficulty: "Applied", question: "Write a pure function that converts Celsius to Fahrenheit and rejects values below absolute zero.", sampleAnswer: "Validate celsius >= -273.15, raise ValueError otherwise, and return celsius * 9 / 5 + 32 without printing or changing external state." },
    { id: "ip-05-01-05", difficulty: "Analytical", question: "Refactor repeated loan-eligibility conditions into small functions and create tests at every threshold boundary.", sampleAnswer: "Separate parsing, field validation, and eligibility; use named constants and test just below, exactly at, and just above each threshold plus missing and invalid values." },
    { id: "ip-05-01-06", difficulty: "Advanced", question: "Design a three-module package for student support classification, including an import-safe entry point and tests.", sampleAnswer: "Use rules.py for pure classification, pipeline.py for parsing/batch processing, main.py for I/O under an entry-point guard, and tests for types, boundaries, exceptions, row balance, and imports." },
    { id: "ip-05-01-07", difficulty: "Professional", question: "Review an AI-generated Python script for production risks and propose a release checklist.", sampleAnswer: "Check type/units, missing and invalid policy, boundaries, precedence, mutable defaults, scope, side effects, exception specificity, secrets, input safety, determinism, logging, tests, dependency versions, privacy, and human review." },
  ],

  commonMistakes: [
    { mistake: "Using = when comparison requires ==.", correction: "Use = only for assignment and == for equality; choose is only for identity checks such as value is None." },
    { mistake: "Treating every falsy value as missing.", correction: "Check the business meaning explicitly because 0 and False may be valid observations." },
    { mistake: "Converting invalid text to zero.", correction: "Preserve missing and invalid states separately with exceptions or reason codes." },
    { mistake: "Comparing numeric strings lexicographically.", correction: "Validate and convert at the boundary before numeric comparison; '100' < '9' as text." },
    { mistake: "Using float for exact currency equality.", correction: "Use integer minor units or decimal.Decimal with an explicit rounding policy." },
    { mistake: "Writing overlapping if statements when only one category is allowed.", correction: "Use an ordered if/elif/else chain and test all boundaries when outcomes are mutually exclusive." },
    { mistake: "Creating an accidental infinite while loop.", correction: "State the termination condition, update the controlling state, and add operational safeguards when appropriate." },
    { mistake: "Mutating a list while iterating over it.", correction: "Create a new collection or iterate over a copy when elements must be removed or replaced." },
    { mistake: "Using a mutable default such as items=[] in a function.", correction: "Default to None, then create a new list inside the function." },
    { mistake: "Printing instead of returning from reusable functions.", correction: "Return stable data and let the orchestration layer decide how to display or persist it." },
    { mistake: "Using global variables as hidden function inputs.", correction: "Pass configuration explicitly or group it in a documented configuration object." },
    { mistake: "Catching every exception and continuing silently.", correction: "Catch expected exceptions narrowly, retain identifiers and causes, and fail loudly for unexpected defects." },
    { mistake: "Putting file reads and report generation at module import time.", correction: "Keep modules import-safe and place executable orchestration in main under the entry-point guard." },
    { mistake: "Believing type hints validate runtime data automatically.", correction: "Use runtime validation where boundaries are untrusted and type checkers for static feedback." },
  ],

  discussionQuestions: [
    "When should invalid data raise an exception, and when should it become a reason-coded record?",
    "Which business rules belong in pure functions, configuration, or database constraints?",
    "When does a concise comprehension become less readable than an ordinary loop?",
    "How should a team decide whether None, an exception, or a result object represents failure?",
    "What evidence is necessary before trusting Python code generated by an AI assistant?",
    "How can function and module design reduce the difference between notebook exploration and production execution?",
  ],

  formativeAssessment: {
    totalPoints: 50,
    passingScore: 40,
    questions: [
      { id: "check-05-01-01", type: "types", points: 5, prompt: "Select types for a device identifier, measured voltage, missing calibration date, unique fault codes, and ordered readings. Justify each.", sampleAnswer: "Use str, float, None or Optional date, set, and list respectively, based on identity, quantity, absence, uniqueness, and order." },
      { id: "check-05-01-02", type: "conversion", points: 5, prompt: "Explain why converting missing and invalid measurements to zero is unsafe.", sampleAnswer: "Zero is a legitimate value and can alter summaries and decisions; missing and invalid records require separate states and reason codes." },
      { id: "check-05-01-03", type: "boolean", points: 5, prompt: "Evaluate not False and False or True and explain the precedence.", sampleAnswer: "True: not False becomes True, both and operations are evaluated before or, producing (True and False) or True = True." },
      { id: "check-05-01-04", type: "control-flow", points: 5, prompt: "Write mutually exclusive branches for INVALID, REVIEW, and OK sensor outcomes.", sampleAnswer: "Validate first and return INVALID on failure; elif any approved threshold is reached return REVIEW; else return OK." },
      { id: "check-05-01-05", type: "iteration", points: 5, prompt: "Compare for, while, and a comprehension for batch validation.", sampleAnswer: "Use for for known records, while for condition-controlled repetition, and a comprehension only for simple transformations where diagnostics and branching remain clear." },
      { id: "check-05-01-06", type: "functions", points: 5, prompt: "Define the contract for a temperature-classification function.", sampleAnswer: "Specify parameter type and Celsius unit, valid range, named thresholds, one return type and meanings, exceptions or invalid policy, purity, and boundary examples." },
      { id: "check-05-01-07", type: "scope", points: 5, prompt: "Explain why hidden global state makes functions difficult to test.", sampleAnswer: "Outputs depend on values not visible in the call, so tests can interfere, ordering matters, and reuse requires recreating external state. Pass dependencies explicitly." },
      { id: "check-05-01-08", type: "exceptions", points: 5, prompt: "Design exception handling for parsing a batch without hiding programming errors.", sampleAnswer: "Catch expected conversion exceptions per record, retain row/key/value and reason, continue governed processing, and allow unexpected exceptions to fail with context." },
      { id: "check-05-01-09", type: "modules", points: 5, prompt: "Explain the purpose of if __name__ == '__main__'.", sampleAnswer: "It runs executable orchestration only when the file is launched directly, keeping function definitions reusable and side-effect free when imported." },
      { id: "check-05-01-10", type: "testing", points: 5, prompt: "Give a minimum test matrix for the maintenance review rule.", sampleAnswer: "Test normal OK, temperature just below/exactly at/above 80, vibration just below/exactly at/above 8, either threshold, both thresholds, missing, invalid, out-of-range, and row balance." },
    ],
  },

  researchExtension: {
    title: "Python Reliability and Program-Design Study",
    researchQuestion:
      "How do type strategy, function purity, exception policy, module boundaries, and tests affect correctness, maintainability, and reproducibility in a real data workflow?",
    applicationOptions: [
      "Robot sensor monitoring",
      "Financial transaction validation",
      "Student-support eligibility",
      "Healthcare operations escalation",
      "Retail inventory controls",
      "AI feature and label generation",
    ],
    task:
      "Build the same small data program first as one procedural script and then as typed, import-safe modules with pure domain functions, explicit I/O boundaries, reason-coded exceptions, and automated tests. Introduce boundary, missing, invalid, and unexpected cases; compare defect visibility, code duplication, testability, reuse, and measured execution behavior.",
    requiredEvidence: [
      "Problem, unit of analysis, users, decision, inputs, outputs, and risk",
      "Data contract with types, units, required fields, ranges, categories, and missing policy",
      "Original script and refactored module structure",
      "Function contracts, type hints, docstrings, and side-effect inventory",
      "Exception policy distinguishing expected data errors from programming defects",
      "Normal, boundary, missing, invalid, mutation, import, and row-balance tests",
      "Results comparing correctness, readability, duplication, reuse, and limitations",
      "Responsible-use and human-review statement for any consequential decision",
    ],
  },

  portfolioArtifact: {
    title: "Lesson 1 Portfolio Evidence: Reliable Python Rules Package",
    description:
      "Create a small professional Python package that converts raw records into tested decisions while preserving invalid data and reproducible evidence.",
    requiredSections: [
      "README with problem, audience, decision, setup, input contract, execution, outputs, tests, and limitations",
      "Domain module containing named constants and pure rule functions",
      "Pipeline module containing parsing, validation, batch processing, exception routing, and summaries",
      "Import-safe entry point for loading inputs and publishing outputs",
      "Typed result structure with stable statuses and reason codes",
      "Test file covering normal, boundary, missing, invalid, and unexpected cases",
      "Sample input and output using synthetic or approved data",
      "Decision brief explaining evidence, action, owner, caveats, and next measurement",
    ],
    requiredEvidence: [
      "At least four meaningful Python types and two collection types",
      "At least one exact multi-condition business rule",
      "At least four focused functions with parameters, returns, type hints, and docstrings",
      "At least one custom result structure or clearly documented dictionary contract",
      "Expected exceptions caught narrowly with original row identifiers retained",
      "Import-safe module behavior and no embedded secrets or private data",
      "At least twelve automated assertions including every threshold boundary",
      "Control totals proving received equals all terminal outcomes",
    ],
  },

  growthIndicators: [
    { title: "Type-Aware Programmer", description: "You choose types that preserve identifiers, quantities, absence, order, uniqueness, and precision." },
    { title: "Control-Flow Reviewer", description: "You translate business language into exact, mutually understandable branches and tested boundaries." },
    { title: "Function Designer", description: "You create small contracts with explicit inputs, outputs, side effects, failures, and evidence." },
    { title: "Reliable Module Builder", description: "You organize reusable, import-safe Python code with exception routing, tests, and reproducible execution." },
  ],

  reflection: [
    "Which value in your current work is stored as the wrong type?",
    "Which missing or invalid value is currently being converted to zero or an empty string?",
    "Which business rule contains an untested greater-than versus greater-than-or-equal boundary?",
    "Which repeated code should become one named function?",
    "Which function has hidden global inputs or unnecessary side effects?",
    "Which broad exception could hide a programming defect?",
    "Can another person import and test your logic without triggering files, databases, or reports?",
    "Which automated check proves that every input record reaches an explained outcome?",
  ],

  summary: [
    "Python variables are names bound to objects; objects have types, identities, values, and behavior.",
    "Choose types according to meaning: identifiers are often strings, quantities are numeric, and absence is distinct from zero or empty text.",
    "Lists preserve ordered mutable collections, tuples fixed ordered collections, dictionaries key-value mappings, and sets unique membership.",
    "Convert and validate values at untrusted boundaries while preserving missing and invalid states.",
    "Floating-point values are approximations; exact currency generally requires integer minor units or Decimal.",
    "Boolean rules require exact operators, understood precedence, clear parentheses, and boundary tests.",
    "Use if/elif/else for ordered mutually exclusive decisions and separate data validity from business classification.",
    "Use for loops for iterables, while loops for condition-controlled repetition, and comprehensions only when they remain readable.",
    "Functions should have one focused purpose, descriptive parameters, explicit returns, stable types, and documented failure behavior.",
    "Pure functions are easier to test and compose; keep I/O and other side effects near program boundaries.",
    "Avoid mutable default arguments and hidden global state.",
    "Catch expected exceptions narrowly, preserve diagnostic context, and do not silence unexpected programming defects.",
    "Modules separate responsibilities and become safely reusable when executable work is protected by an entry-point guard.",
    "Type hints communicate intent, docstrings communicate contracts, and assertions provide executable evidence.",
    "A reliable batch reconciles every received record to exactly one valid or invalid terminal outcome.",
    "AI systems inherit Python's data-type, boundary, function, and exception decisions before any model calculation begins.",
  ],

  previousLesson: {
    id: "data-ai-m04-l07",
    moduleNumber: 4,
    slug: "portfolio-project-analytical-sql-database-and-query-pack",
    title: "Portfolio Project: Analytical SQL Database and Query Pack",
  },
  nextLesson: null,

  lumineryGuidance: {
    message:
      "Make the type and contract visible first, then implement the smallest rule, test every boundary, and preserve every invalid record with a reason.",
    prompt:
      "Act as my senior Python data engineer, code reviewer, and learning coach. Help me complete Module 5 Lesson 1 one verified gate at a time. Require explicit types, units, missing and invalid policies, exact Boolean boundaries, readable control flow, focused functions, type hints, docstrings, pure domain logic, narrow exception handling, import-safe modules, representative fixtures, automated tests, and row-balance controls. Do not let me convert errors to zero, hide exceptions, use unexplained global state, mix I/O with domain rules, or call the program complete until normal, boundary, missing, invalid, and unexpected cases are verified.",
    coachingQuestions: [
      "What does this value mean, and which type preserves that meaning?",
      "Where does untrusted input enter the program?",
      "What are the exact boundary operators in the rule?",
      "What does this function accept, return, change, and raise?",
      "Can the rule be tested without reading a file or printing?",
      "Which expected exceptions should be caught here?",
      "Does importing the module cause any side effect?",
      "Which assertion proves every input reached one explained outcome?",
    ],
  },
};

export default lesson01;
