const lesson02 = {
  id: "data-ai-m06-l02",
  courseId: "data-ai-foundations",
  moduleId: "data-ai-foundations-module-06",
  moduleNumber: 6,
  lessonNumber: 2,
  slug: "visual-hierarchy-accessibility-and-honest-communication",
  title: "Visual Hierarchy, Accessibility, and Honest Communication",
  shortTitle: "Hierarchy, Accessibility, and Honesty",
  subtitle:
    "Guide attention without manipulating evidence, design for people with varied abilities and devices, and communicate data with clear structure, sufficient contrast, non-color cues, honest scales, and usable alternatives.",
  status: "available",
  duration: "4–5 hours",
  level: "Beginner to Professional",

  essentialQuestion:
    "How can a report guide attention to the most important evidence while remaining accessible, truthful, and independently understandable?",
  bigIdea:
    "Visual hierarchy should reflect decision importance—not designer preference. Accessible and honest communication aligns reading order, emphasis, labels, contrast, interaction, alternative text, and scale with the evidence so more people can reach the correct conclusion without hidden assistance.",

  whyThisLessonExists: {
    title: "If the Evidence Is Difficult to Access, It Is Difficult to Trust",
    introduction:
      "A correct calculation can still fail when important evidence is visually buried, color carries the only meaning, labels are unreadable, keyboard order is confusing, or the chart exaggerates differences. Accessibility and honesty are core analytical quality requirements.",
    centralProblem:
      "An executive dashboard uses tiny gray text, red-versus-green status colors, decorative shapes in the keyboard order, hover-only explanations, competing KPI cards, a truncated bar axis, and an unexplained alert. Sighted mouse users may struggle; keyboard and screen-reader users may miss the decision entirely.",
    purpose:
      "This lesson applies current WCAG 2.2 concepts and Microsoft Power BI authoring guidance to visual hierarchy, color and contrast, typography, layout, titles, annotations, alternative text, keyboard order, accessible data tables, tooltips, honest scales, uncertainty, and reader testing.",
  },

  problemFirst: {
    title: "Opening Audit: Who Can Use This Dashboard—and What Will They Conclude?",
    scenario:
      "A maintenance dashboard shows Plant C in bright red because it has 117 downtime minutes, but operating hours are missing. A green arrow means 'improved,' though no text says so. The most important exception is available only by hovering, and the screen reader announces decorative shapes before the chart title.",
    questions: [
      "What should a reader notice first, second, and third?",
      "Does visual emphasis match decision importance and evidence confidence?",
      "Can the status be understood without distinguishing red from green?",
      "Do text and essential graphical objects have sufficient contrast?",
      "Can a keyboard user reach every meaningful object in a logical order?",
      "Does alternative text communicate the purpose, finding, context, and limitation?",
      "What information is hidden behind hover or interaction?",
      "Which scale, denominator, or wording choice could exaggerate the conclusion?",
    ],
    expectedInsight:
      "An accessible report is not a simplified report. It preserves analytical meaning through multiple coordinated channels and makes the same decision evidence available through visual, textual, keyboard, and tabular paths.",
  },

  visualModels: [
    {
      id: "accessible-attention-ladder",
      type: "lifecycle",
      title: "The Accessible Attention Ladder",
      description:
        "Build hierarchy from decision meaning rather than adding emphasis after the page is complete.",
      stages: [
        { label: "1. Orientation", detail: "State page purpose, population, time, and current filter context in a descriptive heading." },
        { label: "2. Decision", detail: "Place the primary finding, status, or action near the start of visual and keyboard reading order." },
        { label: "3. Evidence", detail: "Show the comparison, distribution, or trend supporting the finding with units and denominators." },
        { label: "4. Explanation", detail: "Annotate the important change, record, threshold, uncertainty, or limitation." },
        { label: "5. Detail", detail: "Provide accessible data tables, drill paths, definitions, and secondary measures without competing for attention." },
        { label: "6. Verification", detail: "Test contrast, color independence, keyboard order, screen-reader meaning, zoom, mobile size, and reader accuracy." },
      ],
      feedback:
        "If every card is large, bright, bold, and bordered, the page has no hierarchy; if the strongest emphasis is not the strongest evidence, the design can mislead.",
      interpretation:
        "Hierarchy is a promise about importance. Accessibility ensures that promise is available through more than one sensory or interaction channel.",
    },
    {
      id: "honest-communication-review",
      type: "lifecycle",
      title: "The Honest Communication Review",
      description:
        "Pass every gate before publishing an analytical visual or Power BI report page.",
      stages: [
        { label: "Meaning", detail: "Verify population, grain, measure, denominator, comparison, time, and uncertainty." },
        { label: "Scale", detail: "Check zero baselines for bars, comparable axes, appropriate transforms, complete intervals, and visible gaps." },
        { label: "Language", detail: "Separate finding from interpretation; avoid causal, absolute, or alarmist wording beyond the evidence." },
        { label: "Perception", detail: "Use position and length for priority comparisons; limit competing color, size, borders, and motion." },
        { label: "Access", detail: "Add descriptive titles, sufficient contrast, non-color cues, alt text, logical tab order, and supporting tables." },
        { label: "Test", detail: "Ask diverse readers to identify the finding, evidence, uncertainty, and action without coaching." },
      ],
      feedback:
        "Passing a contrast checker does not make a report fully accessible, and an accessible interface can still communicate a misleading calculation.",
      interpretation:
        "Accessibility and analytical integrity must be reviewed together because both determine whether the audience can reach the justified conclusion.",
    },
  ],

  learningObjectives: [
    "Create a visual and keyboard reading order that matches decision priority.",
    "Use position, whitespace, size, weight, contrast, and grouping to create restrained hierarchy.",
    "Distinguish preattentive emphasis from decorative competition.",
    "Apply WCAG 2.2 contrast concepts to normal text, large text, controls, focus, and essential graphics.",
    "Calculate relative luminance and contrast ratio for color pairs.",
    "Avoid using color as the only means of communicating category, state, direction, or action.",
    "Design charts with direct labels, markers, line styles, patterns, icons, and text alternatives.",
    "Write descriptive titles that communicate purpose, evidence, scope, and units.",
    "Write concise alternative text describing function, main finding, relevant values, and limitation.",
    "Configure Power BI alt text, tab order, high-contrast behavior, titles, markers, and accessible data tables.",
    "Keep essential information out of hover-only tooltips and inaccessible interactions.",
    "Use honest baselines, axes, sorting, aggregation, annotations, and uncertainty language.",
    "Separate factual finding, interpretation, recommendation, and limitation.",
    "Test keyboard navigation, screen-reader sequence, zoom, reflow, mobile readability, and color-vision resilience.",
    "Build and validate an accessible maintenance decision brief in Python.",
  ],

  prerequisiteKnowledge: [
    "Module 6 Lesson 1: choosing charts by analytical purpose",
    "Understanding of population, grain, measure, dimension, denominator, and filter context",
    "Ability to interpret common chart types and identify misleading scales",
    "Basic hexadecimal color notation and RGB channels",
    "Python with pandas, NumPy, Matplotlib, JSON, and pathlib for the lab",
  ],

  vocabulary: [
    { term: "Visual hierarchy", definition: "The intentional ordering of attention and reading based on information importance and task sequence." },
    { term: "Reading order", definition: "The sequence in which visual or assistive-technology users encounter content." },
    { term: "Information architecture", definition: "The organization, labeling, grouping, and navigation structure of information." },
    { term: "Preattentive attribute", definition: "A visual property such as position, size, orientation, or contrast noticed rapidly before focused reading." },
    { term: "Gestalt grouping", definition: "Perceptual organization through proximity, similarity, enclosure, continuity, or connection." },
    { term: "Whitespace", definition: "Intentional empty space used to separate, group, and prioritize content." },
    { term: "Emphasis", definition: "A controlled increase in visual prominence justified by decision importance." },
    { term: "Visual noise", definition: "Marks, decoration, repetition, or competing signals that consume attention without improving understanding." },
    { term: "Progressive disclosure", definition: "Showing essential information first and revealing additional detail when requested." },
    { term: "Accessibility", definition: "The quality of being usable by people with varied vision, hearing, motor, cognitive, language, and device needs." },
    { term: "Inclusive design", definition: "A design process that considers diverse users and contexts from the beginning rather than adding accommodations later." },
    { term: "WCAG", definition: "Web Content Accessibility Guidelines published by W3C for perceivable, operable, understandable, and robust digital content." },
    { term: "Relative luminance", definition: "A linearized measure from 0 for black to 1 for white used in WCAG contrast calculations." },
    { term: "Contrast ratio", definition: "The luminance relationship between lighter and darker colors, ranging from 1:1 to 21:1." },
    { term: "Color-vision deficiency", definition: "A reduced ability to distinguish certain color relationships; experiences vary by person and condition." },
    { term: "Non-color cue", definition: "A label, shape, pattern, position, icon, marker, or line style that communicates meaning in addition to color." },
    { term: "Alternative text", definition: "A concise text equivalent describing the purpose and meaningful content of a non-text object." },
    { term: "Dynamic alt text", definition: "Alternative text generated from current filters and measures so the description matches the displayed state." },
    { term: "Screen reader", definition: "Assistive technology that announces interface structure, names, roles, states, values, and descriptions." },
    { term: "Keyboard navigation", definition: "Operating and exploring content without requiring a mouse or touch gesture." },
    { term: "Tab order", definition: "The configured sequence in which keyboard focus moves through interactive and meaningful objects." },
    { term: "Focus indicator", definition: "A visible outline or other signal showing which interactive object currently receives keyboard input." },
    { term: "Keyboard trap", definition: "A condition where keyboard focus enters an element or region and cannot move away normally." },
    { term: "Accessible name", definition: "The programmatic label assistive technology uses to identify an interface object." },
    { term: "Accessible data table", definition: "A structured tabular representation with meaningful headers, order, values, and relationships." },
    { term: "High-contrast mode", definition: "A user display setting that substitutes strongly contrasting system colors to improve visibility." },
    { term: "Reflow", definition: "Content adapting to zoom or narrow width without requiring two-dimensional scrolling for ordinary reading." },
    { term: "Tooltip", definition: "Supplementary information appearing on hover or focus; it must not contain the only access to critical evidence." },
    { term: "Annotation", definition: "A text or graphical explanation attached to a decision-relevant value, event, threshold, or limitation." },
    { term: "Descriptive title", definition: "A title communicating the question or finding together with necessary scope, time, units, or filter context." },
    { term: "Direct labeling", definition: "Placing category or value labels near their marks rather than requiring repeated legend lookup." },
    { term: "Honest scale", definition: "An axis or encoding whose baseline, range, transformation, and intervals do not exaggerate or conceal evidence." },
    { term: "Uncertainty communication", definition: "Visible and textual expression of sampling, measurement, model, or forecast limitations." },
    { term: "Finding", definition: "A factual result supported by the declared data population and calculation." },
    { term: "Interpretation", definition: "A reasoned explanation of what a finding may mean without exceeding the evidence." },
    { term: "Recommendation", definition: "A proposed action connected to evidence, ownership, risk, and monitoring." },
    { term: "Limitation", definition: "A condition reducing scope, certainty, generalizability, accessibility, or causal interpretation." },
    { term: "Reader test", definition: "A structured evaluation of whether representative users identify the intended finding, evidence, uncertainty, and action." },
    { term: "Accessibility audit", definition: "A documented review using automated checks, keyboard and assistive-technology testing, and human evaluation." },
    { term: "Visual integrity", definition: "Faithful communication of quantities, populations, relationships, uncertainty, and exclusions." },
  ],

  formulas: [
    { id: "contrast", name: "WCAG contrast ratio", formula: "CR = (Llighter + 0.05) ÷ (Ldarker + 0.05)", meaning: "Compares the relative luminance of foreground and background colors.", requirement: "Use the lighter color in the numerator; 1:1 is identical and 21:1 is maximum black-white contrast." },
    { id: "luminance", name: "Relative luminance", formula: "L = 0.2126Rlin + 0.7152Glin + 0.0722Blin", meaning: "Weights linearized RGB channels according to human visual sensitivity.", requirement: "Convert sRGB channels from 0–255 to 0–1 and linearize them before applying the weights." },
    { id: "srgb", name: "sRGB channel linearization", formula: "Clin = C/12.92 if C ≤ 0.04045; otherwise ((C+0.055)/1.055)^2.4", meaning: "Transforms a normalized nonlinear sRGB channel for luminance calculation.", requirement: "Apply separately to red, green, and blue channels." },
    { id: "task-success", name: "Reader task success rate", formula: "success rate = correct task completions ÷ attempted tasks", meaning: "Measures whether readers can obtain the intended answer or action.", requirement: "Use predeclared questions and record results by access method when appropriate." },
    { id: "interpretation-error", name: "Interpretation error rate", formula: "error rate = incorrect conclusions ÷ completed interpretations", meaning: "Measures misleading or unclear communication outcomes.", requirement: "Define correctness before testing and record the reason for each error." },
    { id: "percentage-point-gap", name: "Percentage-point gap", formula: "gap = rateA − rateB", meaning: "Reports the absolute difference between two percentages.", requirement: "Do not label a percentage-point difference as percent change." },
    { id: "relative-change", name: "Relative change", formula: "relative change = (new − old) ÷ |old| × 100%", meaning: "Expresses change relative to a nonzero baseline.", requirement: "State the baseline and handle zero, negative, missing, or incomparable values explicitly." },
    { id: "evidence-coverage", name: "Accessible evidence coverage", formula: "coverage = meaningful visuals with alt text and data path ÷ meaningful visuals", meaning: "Tracks whether each meaningful visual has both a description and accessible value path.", requirement: "Coverage is necessary but not sufficient; descriptions and tables must also be accurate and usable." },
  ],

  workedExamples: [
    {
      id: "example-06-02-01",
      title: "Create hierarchy from the decision",
      problem: "A page contains eight equally sized KPI cards, three charts, and five slicers.",
      solutionSteps: [
        "Name the primary decision: investigate the plant exceeding the downtime threshold.",
        "Use one evidence headline and one primary comparison near the start of reading order.",
        "Group secondary KPIs and place filters consistently without equal visual weight.",
        "Use whitespace and restrained typography before adding color or borders.",
      ],
      answer: "Lead with the exception and supporting plant comparison, then trend, drivers, filters, and detail.",
      interpretation: "Hierarchy should mirror the reasoning path from orientation to decision to evidence to detail.",
    },
    {
      id: "example-06-02-02",
      title: "Calculate and audit text contrast",
      problem: "Body text has relative luminance 0.033 and the background luminance is 1.0.",
      solutionSteps: [
        "Identify the lighter luminance as 1.0 and darker as 0.033.",
        "Calculate (1.0 + 0.05) ÷ (0.033 + 0.05).",
        "Obtain approximately 12.65:1.",
        "Compare with the applicable text-size requirement and still test real rendering and user settings.",
      ],
      answer: "The contrast ratio is approximately 12.65:1.",
      interpretation: "Strong numerical contrast supports readability but does not replace typography, zoom, spacing, and user testing.",
    },
    {
      id: "example-06-02-03",
      title: "Replace red-versus-green status",
      problem: "Red means critical and green means normal in a plant-status chart.",
      solutionSteps: [
        "Retain an accessible palette only if it supports the design.",
        "Add explicit text labels: Critical, Review, and Within target.",
        "Use shape or icon differences and direct labels.",
        "Verify grayscale, color-vision simulations, and high-contrast mode.",
      ],
      answer: "Encode status through text plus shape or pattern; color becomes reinforcement rather than the sole signal.",
      interpretation: "Red and green can remain brand accents, but the decision must survive when hue is unavailable.",
    },
    {
      id: "example-06-02-04",
      title: "Write decision-quality alternative text",
      problem: "A sorted bar chart shows Plant C at 32.5, B at 17.7, and A at 8.5 downtime minutes per 1,000 operating hours.",
      solutionSteps: [
        "State the visual purpose and current scope.",
        "Report the main finding and relevant values in reading order.",
        "Name the unit and denominator.",
        "Add the limitation that the page does not establish cause.",
      ],
      answer: "Plant downtime rate, Jan–Jul 2026: C is highest at 32.5 minutes per 1,000 operating hours, followed by B at 17.7 and A at 8.5. Rates indicate burden, not cause.",
      interpretation: "Alternative text should communicate analytical meaning, not list visual appearance alone.",
    },
    {
      id: "example-06-02-05",
      title: "Repair Power BI tab order",
      problem: "Keyboard focus visits the logo, four decorative rectangles, footer, slicers, and finally the page heading.",
      solutionSteps: [
        "Remove decorative shapes and images from tab order.",
        "Place the page heading and primary decision evidence first.",
        "Follow the visible logical sequence through filters, supporting visuals, and detail.",
        "Test forward and reverse navigation without a mouse.",
      ],
      answer: "The keyboard sequence should match the meaningful visual reading order and exclude decorative objects.",
      interpretation: "A visually clear page can remain unusable when its programmatic order is unrelated to the layout.",
    },
    {
      id: "example-06-02-06",
      title: "Rewrite an exaggerated conclusion",
      problem: "A truncated bar chart is titled 'Plant C performance collapses' based on one month of downtime.",
      solutionSteps: [
        "Restore an honest baseline or use a position-based chart with a clearly labeled range.",
        "State the one-month population and operating-hour denominator.",
        "Separate the factual rate from an unverified causal explanation.",
        "Use calibrated language and request a longer-period investigation.",
      ],
      answer: "Plant C recorded the highest downtime rate this month; confirm the incident driver and review a longer period before concluding sustained deterioration.",
      interpretation: "Honest communication preserves urgency while matching certainty and scope to the available evidence.",
    },
  ],

  interactiveExploration: {
    title: "Accessibility and Integrity Red-Team Review",
    description:
      "Review one report as a decision maker, low-vision reader, color-blind reader, keyboard-only user, screen-reader user, mobile reader, and skeptical analyst.",
    steps: [
      "State the intended finding, evidence, uncertainty, and action before reviewing design.",
      "Blur or squint at the page and record what dominates attention.",
      "View in grayscale and confirm every status and series remains identifiable.",
      "Navigate by keyboard in both directions and record the focus sequence.",
      "Read titles, alt text, and the accessible data table without looking at the chart.",
      "Zoom or narrow the viewport and check labels, clipping, reflow, and target size.",
      "Audit axes, denominators, sorting, filters, suppressed categories, and uncertainty.",
      "Ask an independent reader to explain the decision in their own words.",
    ],
    questions: [
      "What receives attention first, and is that justified?",
      "Which meaning disappears without color, hover, or a mouse?",
      "Which object has an unclear accessible name or tab position?",
      "Which statement is stronger than the evidence?",
      "Which change most improves both access and analytical clarity?",
    ],
    expectedDiscovery:
      "Many accessibility improvements—clear titles, direct labels, logical order, reduced clutter, and supporting tables—also improve speed and accuracy for every reader.",
  },

  realWorldApplications: [
    { field: "Manufacturing and Robotics", application: "Design control-room and maintenance reports with visible alarms, text status, non-color cues, readable trends, exact incident IDs, and accessible response instructions." },
    { field: "Business Intelligence", application: "Create Power BI pages with intentional hierarchy, descriptive titles, alt text, tab order, data tables, high-contrast resilience, and governed metric language." },
    { field: "Finance", application: "Communicate exposure, return, risk, and uncertainty without alarmist language, decorative gains/losses, hidden baselines, or color-only signals." },
    { field: "Education", application: "Present learner evidence without stigmatizing labels, tiny subgroup comparisons, inaccessible color scales, or unsupported causal claims." },
    { field: "Healthcare Operations", application: "Use privacy-aware annotations, accessible wait-time and capacity evidence, calibrated urgency, and multiple paths to critical status information." },
    { field: "AI and Machine Learning", application: "Make model performance, error disparities, calibration, thresholds, explanations, drift, and uncertainty accessible to technical and nontechnical reviewers." },
  ],

  aiConnection: {
    title: "Accessible AI Communication Requires More Than an Automatically Generated Chart",
    explanation:
      "AI can draft titles, alt text, summaries, themes, and layout alternatives, but it may describe stale filter states, omit denominators, overstate causality, use inaccessible color, or prioritize statistically dramatic results over decision relevance. Every generated communication artifact needs evidence and accessibility validation.",
    example:
      "A dynamic Power BI alt-text measure can announce the currently selected plant and rate. The measure must also handle multiple selections, no data, suppressed small groups, refreshed values, and the limitation that rate differences do not identify cause.",
    uses: [
      "Draft concise chart titles and alternative text",
      "Generate accessible palette candidates for testing",
      "Suggest non-color encodings and plain-language definitions",
      "Review causal and certainty language",
      "Create keyboard and screen-reader test cases",
      "Summarize reader-test defects and revisions",
    ],
    caution:
      "Never publish AI-generated alt text or narrative without checking it against current filter context, exact evidence, privacy rules, accessibility limits, and the intended decision.",
    reflectionQuestion:
      "How will you prove that an automatically generated description remains accurate after filters, refreshes, missing data, and changing report states?",
  },

  pythonLab: {
    title: "Build an Accessible and Audited Maintenance Decision Brief",
    objective:
      "Calculate WCAG-style contrast ratios, create a restrained visual hierarchy, encode categories through color plus markers and line styles, generate alternative text and tab order, export accessible evidence, and validate every artifact.",
    code: `from pathlib import Path
import json

import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

OUTPUT_DIR = Path("outputs")
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

def hex_to_rgb(hex_color):
    value = hex_color.lstrip("#")
    return tuple(int(value[i:i + 2], 16) / 255 for i in (0, 2, 4))

def linearize(channel):
    return channel / 12.92 if channel <= 0.04045 else ((channel + 0.055) / 1.055) ** 2.4

def relative_luminance(hex_color):
    r, g, b = (linearize(c) for c in hex_to_rgb(hex_color))
    return 0.2126 * r + 0.7152 * g + 0.0722 * b

def contrast_ratio(color_a, color_b):
    l1, l2 = sorted([relative_luminance(color_a), relative_luminance(color_b)], reverse=True)
    return (l1 + 0.05) / (l2 + 0.05)

WHITE = "#FFFFFF"
NAVY = "#0F172A"
BODY = "#334155"
BLUE = "#1D4ED8"
ORANGE = "#92400E"
TEAL = "#0F766E"
PURPLE = "#6D28D9"

contrast_pairs = pd.DataFrame([
    {"role": "heading text", "foreground": NAVY, "background": WHITE, "minimum": 4.5},
    {"role": "body text", "foreground": BODY, "background": WHITE, "minimum": 4.5},
    {"role": "Plant A graphic", "foreground": BLUE, "background": WHITE, "minimum": 3.0},
    {"role": "Plant B graphic", "foreground": ORANGE, "background": WHITE, "minimum": 3.0},
    {"role": "Plant C graphic", "foreground": TEAL, "background": WHITE, "minimum": 3.0},
    {"role": "focus/highlight", "foreground": PURPLE, "background": WHITE, "minimum": 3.0},
])
contrast_pairs["ratio"] = contrast_pairs.apply(
    lambda row: contrast_ratio(row["foreground"], row["background"]), axis=1
)
contrast_pairs["pass"] = contrast_pairs["ratio"] >= contrast_pairs["minimum"]

plant_summary = pd.DataFrame({
    "plant": ["A", "B", "C"],
    "downtime_total": [35, 69, 117],
    "operating_hours": [4100, 3900, 3600],
    "incident_count": [4, 5, 5],
})
plant_summary["downtime_per_1000h"] = (
    plant_summary["downtime_total"] / plant_summary["operating_hours"] * 1000
)
plant_summary = plant_summary.sort_values("downtime_per_1000h", ascending=True)

months = pd.date_range("2026-02-01", periods=6, freq="MS")
trend = pd.DataFrame({
    "month": np.tile(months, 3),
    "plant": np.repeat(["A", "B", "C"], 6),
    "downtime_rate": [9, 8, 10, 7, 8, 8.5, 15, 18, 16, 19, 17, 17.7, 25, 28, 31, 29, 34, 32.5],
})

style_map = {
    "A": {"color": BLUE, "marker": "o", "linestyle": "-", "hatch": ""},
    "B": {"color": ORANGE, "marker": "s", "linestyle": "--", "hatch": "//"},
    "C": {"color": TEAL, "marker": "^", "linestyle": ":", "hatch": "xx"},
}

fig = plt.figure(figsize=(13, 8), facecolor=WHITE, constrained_layout=True)
grid = fig.add_gridspec(2, 2, height_ratios=[1, 1.35])
ax_headline = fig.add_subplot(grid[0, 0])
ax_rank = fig.add_subplot(grid[0, 1])
ax_trend = fig.add_subplot(grid[1, :])

# First attention level: one finding and its limitation.
ax_headline.axis("off")
ax_headline.text(0, 0.88, "DECISION SIGNAL", color=BLUE, fontsize=11, fontweight="bold")
ax_headline.text(0, 0.62, "Plant C has the highest downtime rate", color=NAVY, fontsize=20, fontweight="bold")
ax_headline.text(0, 0.40, "32.5 minutes per 1,000 operating hours", color=BODY, fontsize=15)
ax_headline.text(0, 0.16, "Investigate the 58-minute incident before assigning cause.", color=BODY, fontsize=11)

# Second attention level: ranked evidence with color + pattern + direct labels.
for y, (plant, row) in enumerate(plant_summary.iterrows()):
    name = row["plant"]
    value = row["downtime_per_1000h"]
    style = style_map[name]
    ax_rank.barh(y, value, color=style["color"], hatch=style["hatch"], edgecolor=NAVY, linewidth=0.7)
    ax_rank.text(value + 0.5, y, f"Plant {name}: {value:.1f}", va="center", color=NAVY, fontsize=10)
ax_rank.set_yticks([])
ax_rank.set_xlabel("Downtime minutes per 1,000 operating hours", color=BODY)
ax_rank.set_title("Exposure-adjusted plant ranking", loc="left", color=NAVY, fontweight="bold")
ax_rank.spines[["top", "right", "left"]].set_visible(False)
ax_rank.grid(axis="x", color="#CBD5E1", linewidth=0.6)

# Third attention level: supporting time evidence with color + marker + line style.
for plant, style in style_map.items():
    subset = trend.loc[trend["plant"].eq(plant)]
    ax_trend.plot(
        subset["month"], subset["downtime_rate"], label=f"Plant {plant}",
        color=style["color"], marker=style["marker"], linestyle=style["linestyle"], linewidth=2.2,
    )
ax_trend.set_title("Monthly downtime rate remains highest for Plant C", loc="left", color=NAVY, fontweight="bold")
ax_trend.set_ylabel("Minutes per 1,000 operating hours", color=BODY)
ax_trend.set_xlabel("Month", color=BODY)
ax_trend.legend(title="Plant", ncol=3, frameon=False)
ax_trend.grid(axis="y", color="#CBD5E1", linewidth=0.6)
ax_trend.spines[["top", "right"]].set_visible(False)

fig.suptitle("Accessible maintenance decision brief — Feb–Jul 2026", color=NAVY, fontsize=16, fontweight="bold")

alt_text = (
    "Feb–Jul 2026 maintenance: Plant C has the highest downtime rate at 32.5 minutes per "
    "1,000 operating hours; B is 17.7 and A is 8.5. C remains highest across the trend. "
    "Investigate the 58-minute incident before assigning cause."
)

tab_order = [
    {"order": 1, "object": "page_heading", "meaningful": True},
    {"order": 2, "object": "decision_signal", "meaningful": True},
    {"order": 3, "object": "plant_ranking", "meaningful": True},
    {"order": 4, "object": "monthly_trend", "meaningful": True},
    {"order": None, "object": "decorative_background", "meaningful": False},
]

qa = pd.DataFrame([
    {"check": "all contrast pairs pass", "pass": bool(contrast_pairs["pass"].all())},
    {"check": "every plant has non-color cue", "pass": all(style_map[p]["marker"] and style_map[p]["linestyle"] for p in style_map)},
    {"check": "alt text is concise", "pass": 1 <= len(alt_text) <= 250},
    {"check": "meaningful tab order is sequential", "pass": [x["order"] for x in tab_order if x["meaningful"]] == [1, 2, 3, 4]},
    {"check": "decorative object excluded", "pass": next(x for x in tab_order if x["object"] == "decorative_background")["order"] is None},
    {"check": "ranking uses exposure denominator", "pass": plant_summary["operating_hours"].gt(0).all()},
])

figure_path = OUTPUT_DIR / "accessible_maintenance_brief.png"
contrast_path = OUTPUT_DIR / "contrast_audit.csv"
evidence_path = OUTPUT_DIR / "accessible_evidence_table.csv"
manifest_path = OUTPUT_DIR / "accessibility_manifest.json"

fig.savefig(figure_path, dpi=150, bbox_inches="tight", facecolor=WHITE)
plt.close(fig)
contrast_pairs.to_csv(contrast_path, index=False)
plant_summary.to_csv(evidence_path, index=False)
manifest_path.write_text(json.dumps({
    "status": "PASS" if qa["pass"].all() else "FAIL",
    "alt_text": alt_text,
    "tab_order": tab_order,
    "non_color_encodings": {p: {"marker": s["marker"], "linestyle": s["linestyle"], "hatch": s["hatch"]} for p, s in style_map.items()},
    "checks": qa.to_dict("records"),
}, indent=2), encoding="utf-8")

assert contrast_pairs["pass"].all()
assert qa["pass"].all()
assert plant_summary.iloc[-1]["plant"] == "C"
assert np.isclose(plant_summary.iloc[-1]["downtime_per_1000h"], 32.5)
for path in [figure_path, contrast_path, evidence_path, manifest_path]:
    assert path.exists() and path.stat().st_size > 0

print("Contrast audit:")
print(contrast_pairs[["role", "ratio", "minimum", "pass"]].round(2))
print("Accessibility checks:", qa.to_dict("records"))
print("Alt text characters:", len(alt_text))
print("Artifacts:", [figure_path.name, contrast_path.name, evidence_path.name, manifest_path.name])
print("All hierarchy, contrast, non-color, tab-order, denominator, and artifact tests passed.")`,
    questions: [
      "What should a reader notice first, second, and third in the generated brief?",
      "How is Plant C identified without relying on color?",
      "Why are text and essential chart marks tested against different minimums in the audit?",
      "What does the alternative text communicate beyond visual appearance?",
      "Why is the decorative background removed from tab order?",
      "How does the operating-hour denominator protect the plant comparison?",
      "Which information remains visible rather than hidden in a tooltip?",
      "What additional keyboard and screen-reader tests require Power BI or a browser rather than Python?",
      "How should the alt text change when filters change?",
      "Which assertion would fail first if a low-contrast color were introduced?",
    ],
    reflectionQuestions: [
      "Which accessibility check also produced the largest clarity improvement?",
      "Which automated check could pass while a real user still cannot complete the task?",
      "What evidence supports the action, and what limitation prevents a causal claim?",
    ],
    extension:
      "Recreate the page in Power BI, add dynamic alt-text measures, configure tab order, remove decorative items, test high-contrast mode and Show Data, complete keyboard and screen-reader walkthroughs, and record defects in a publish-blocking accessibility log.",
  },

  guidedPractice: [
    { id: "gp-06-02-01", question: "What is the purpose of visual hierarchy?", answer: "To guide attention and reading order according to decision importance, evidence, and task sequence—not decoration." },
    { id: "gp-06-02-02", question: "What is the WCAG contrast-ratio formula?", answer: "(Llighter + 0.05) ÷ (Ldarker + 0.05), using relative luminance values." },
    { id: "gp-06-02-03", question: "Why can color not be the only status signal?", answer: "Hue may be unavailable or ambiguous because of color-vision differences, grayscale, high-contrast mode, poor displays, or assistive technology; add text, shape, pattern, or position." },
    { id: "gp-06-02-04", question: "What belongs in good chart alternative text?", answer: "Purpose, scope, main finding, relevant values and units, filter context when needed, and a decision-relevant limitation." },
    { id: "gp-06-02-05", question: "How should Power BI tab order be configured?", answer: "Match the logical visual reading order, include meaningful and interactive content, exclude decorative objects, and test forward and reverse keyboard navigation." },
    { id: "gp-06-02-06", question: "Why should critical evidence not appear only in a tooltip?", answer: "Hover may be unavailable to keyboard, touch, motor-impaired, or screen-reader users; critical evidence must be visible or available through an accessible path." },
  ],

  independentPractice: [
    { id: "ip-06-02-01", difficulty: "Foundational", question: "Create an attention map for an existing dashboard.", sampleAnswer: "Number the intended first five items, compare with what size, position, color, and borders currently emphasize, and document mismatches." },
    { id: "ip-06-02-02", difficulty: "Foundational", question: "Audit five foreground-background color pairs.", sampleAnswer: "Calculate relative luminance and contrast ratio, compare with the applicable requirement, and record pass/fail plus replacement colors." },
    { id: "ip-06-02-03", difficulty: "Applied", question: "Redesign a red-green status report without removing useful color.", sampleAnswer: "Add status words, shapes/icons, patterns or markers, direct labels, sufficient contrast, and a usable high-contrast/grayscale state." },
    { id: "ip-06-02-04", difficulty: "Applied", question: "Write alt text for four chart purposes.", sampleAnswer: "For each, state purpose, scope, main evidence, values and units, current filter state, and a limitation; keep wording concise and current." },
    { id: "ip-06-02-05", difficulty: "Analytical", question: "Compare visual order and keyboard order for one report page.", sampleAnswer: "List both sequences, remove decoration, repair programmatic order, test reverse navigation, and record any focus or naming defects." },
    { id: "ip-06-02-06", difficulty: "Advanced", question: "Run an honesty audit on titles, scales, filters, annotations, and uncertainty.", sampleAnswer: "Trace each claim to evidence, test alternate scales and denominators, expose filters and omissions, calibrate language, and document what changes the conclusion." },
    { id: "ip-06-02-07", difficulty: "Professional", question: "Conduct an accessibility reader test and publish a defect log.", sampleAnswer: "Use keyboard, zoom, grayscale, high contrast, alt text, data table, and representative-user tasks; record severity, owner, repair, retest, and remaining limitation." },
  ],

  commonMistakes: [
    { mistake: "Making every card large, bright, and bordered.", correction: "Use one clear decision signal, restrained secondary emphasis, whitespace, and consistent typography." },
    { mistake: "Equating accessibility with color contrast alone.", correction: "Also test meaning, keyboard access, order, names, alt text, tables, zoom, reflow, interactions, and real users." },
    { mistake: "Using red and green as the only status encoding.", correction: "Add words, icons, shape, line style, pattern, or direct labels." },
    { mistake: "Writing alt text that only says 'bar chart.'", correction: "Describe purpose, main finding, values, scope, units, and limitation." },
    { mistake: "Using static alt text for a dynamically filtered report.", correction: "Create and test context-aware descriptions or provide an accessible data path that reflects current state." },
    { mistake: "Leaving decorative objects in keyboard order.", correction: "Exclude them and align focus order with meaningful reading order." },
    { mistake: "Placing critical evidence only in a tooltip.", correction: "Keep essential meaning visible or accessible through labels, alt text, and data tables." },
    { mistake: "Using tiny labels to fit too much information.", correction: "Reduce content, use progressive disclosure, enlarge text, and test zoom and mobile layouts." },
    { mistake: "Using low-contrast gray for secondary but necessary evidence.", correction: "Secondary importance may use hierarchy, but required information must remain readable." },
    { mistake: "Using an alarm color for an unverified anomaly.", correction: "Label the evidence and verification state; do not imply confirmed failure before investigation." },
    { mistake: "Truncating a bar axis to create urgency.", correction: "Use a zero baseline or a position-based chart with an explicit scale and honest title." },
    { mistake: "Claiming causation in the headline.", correction: "Separate the observed finding from interpretation and causal investigation." },
    { mistake: "Publishing an inaccessible data table order.", correction: "Set intentional sort order and verify row and column headers and values." },
    { mistake: "Assuming a theme guarantees accessibility.", correction: "Audit every visual state, conditional format, label, interaction, and export." },
    { mistake: "Treating automated checks as final proof.", correction: "Combine automation with keyboard, screen-reader, zoom, device, and representative-user testing." },
  ],

  discussionQuestions: [
    "When does visual emphasis become manipulation?",
    "Should accessibility defects block publication in the same way as incorrect calculations?",
    "How can a report remain concise while providing sufficient context and alternatives?",
    "What should dynamic alt text say when multiple filters or no data are selected?",
    "How can teams include disabled users in report testing ethically and respectfully?",
    "When does urgent language help a decision, and when does it exceed the evidence?",
  ],

  formativeAssessment: {
    totalPoints: 50,
    passingScore: 40,
    questions: [
      { id: "check-06-02-01", type: "hierarchy", points: 5, prompt: "Explain how to build visual hierarchy from a decision question.", sampleAnswer: "Order orientation, decision signal, evidence, explanation, and detail; use position, whitespace, typography, restrained contrast, and logical keyboard order." },
      { id: "check-06-02-02", type: "contrast", points: 5, prompt: "State and explain the contrast-ratio formula.", sampleAnswer: "CR = (Llighter + 0.05)/(Ldarker + 0.05), where luminance values are calculated from linearized sRGB channels." },
      { id: "check-06-02-03", type: "color", points: 5, prompt: "Give four alternatives to color-only encoding.", sampleAnswer: "Direct labels, shape, pattern, marker, line style, icon, position, or text status; any four earn full credit." },
      { id: "check-06-02-04", type: "alt-text", points: 5, prompt: "Write the structure of useful analytical alt text.", sampleAnswer: "Purpose and scope, main finding, relevant values and units, current context, action or function, and decision-relevant limitation." },
      { id: "check-06-02-05", type: "keyboard", points: 5, prompt: "What makes tab order usable?", sampleAnswer: "It matches logical reading and interaction order, excludes decoration, exposes visible focus, avoids traps, and works forward and backward." },
      { id: "check-06-02-06", type: "power-bi", points: 5, prompt: "List six Power BI accessibility configurations or tests.", sampleAnswer: "Alt text, tab order, titles/labels, markers, contrast/theme, high contrast, keyboard test, Show Data, sort order, and tooltip review; any six earn full credit." },
      { id: "check-06-02-07", type: "honesty", points: 5, prompt: "Give five visual communication choices that can mislead.", sampleAnswer: "Truncated axes, hidden filters, missing denominators, selective time ranges, arbitrary dual axes, distorted areas, unsupported causal titles, or hidden uncertainty; any five earn full credit." },
      { id: "check-06-02-08", type: "language", points: 5, prompt: "Distinguish finding, interpretation, recommendation, and limitation.", sampleAnswer: "Finding is observed evidence; interpretation explains possible meaning; recommendation proposes action; limitation states what restricts certainty or scope." },
      { id: "check-06-02-09", type: "testing", points: 5, prompt: "Why are automated accessibility checks insufficient?", sampleAnswer: "They cannot fully judge reading order, description quality, task meaning, cognitive clarity, assistive-technology behavior, or real-user success." },
      { id: "check-06-02-10", type: "ai", points: 5, prompt: "How should AI-generated visual narratives and alt text be validated?", sampleAnswer: "Check current filters, exact values, denominators, scope, causal language, privacy, accessibility, stale states, missing data behavior, and independent reader understanding." },
    ],
  },

  researchExtension: {
    title: "Accessible Hierarchy and Decision Accuracy Study",
    researchQuestion:
      "How do hierarchy, color independence, alternative text, and interaction design affect decision accuracy, reading time, confidence, and inclusion?",
    applicationOptions: [
      "Manufacturing operations",
      "Financial dashboards",
      "Student-support reporting",
      "Healthcare operations",
      "Public-sector services",
      "AI model monitoring",
    ],
    task:
      "Create a baseline report and an accessibility-first redesign using identical evidence. Test both with visual reading, keyboard navigation, alt-text-only interpretation, grayscale, and zoom conditions.",
    requiredEvidence: [
      "Identical governed population, measures, denominators, and questions",
      "Documented hierarchy and attention map",
      "Contrast audit and non-color encoding inventory",
      "Alt text, keyboard order, focus, and accessible data-table evidence",
      "Predeclared decision tasks and success criteria",
      "Accuracy, time, confidence, and error-type results",
      "Participant consent, privacy, and respectful recruitment plan",
      "Revised design, remaining limitations, and publish recommendation",
    ],
  },

  portfolioArtifact: {
    title: "Lesson 2 Portfolio Evidence: Accessible Executive Report Page",
    description:
      "Redesign one decision page so its visual hierarchy, text, contrast, non-color encodings, programmatic order, accessible alternatives, scales, and claims pass a documented publication review.",
    requiredSections: [
      "Stakeholder, decision, audience, population, grain, time, measures, and limitations",
      "Before-and-after hierarchy and attention analysis",
      "Accessible palette and contrast calculations",
      "Non-color encoding, typography, spacing, title, and annotation specifications",
      "Alt text, tab order, focus, keyboard, and accessible data-table design",
      "Honest scale, denominator, filters, uncertainty, and language review",
      "Power BI or Python implementation with reproducible evidence",
      "Reader test, defect log, revisions, retest, and remaining risks",
    ],
    requiredEvidence: [
      "Every meaningful visual has accurate alternative text and an accessible data path",
      "No critical meaning depends on color, hover, sound, or mouse input alone",
      "Text and essential graphical objects pass documented contrast checks",
      "Keyboard order matches logical reading order and excludes decoration",
      "Exact values, units, denominators, filters, and time are available",
      "Finding, interpretation, recommendation, and limitation are separated",
      "At least one representative-reader task succeeds after revision",
      "A publish-blocking checklist records owner, status, and retest evidence",
    ],
  },

  growthIndicators: [
    { title: "Hierarchy Architect", description: "You align attention, reading order, and layout with decision priority." },
    { title: "Accessibility Reviewer", description: "You validate contrast, non-color meaning, alternative text, keyboard use, and data paths." },
    { title: "Evidence Communicator", description: "You match titles, annotations, scales, and language to the strength and limits of evidence." },
    { title: "Inclusive Researcher", description: "You test with diverse users, record defects, retest repairs, and acknowledge remaining barriers." },
  ],

  reflection: [
    "What receives the strongest attention on my page, and is it the most decision-relevant evidence?",
    "Which content becomes unreadable when contrast, zoom, or device conditions change?",
    "Which meaning disappears when color is removed?",
    "Which important fact exists only in a tooltip or interaction?",
    "Does keyboard order match the visible reasoning path?",
    "Does the alternative text communicate the finding or only name the chart?",
    "Which decorative object competes with evidence or assistive navigation?",
    "Which title implies more certainty or causality than the data supports?",
    "Which filter, denominator, time range, or missing category is easy to overlook?",
    "What did a real reader misunderstand, and how will I repair and retest it?",
  ],

  summary: [
    "Visual hierarchy orders attention according to decision importance, evidence, and task sequence.",
    "Begin with orientation, decision signal, supporting evidence, explanation, and accessible detail.",
    "Use position, whitespace, grouping, typography, and restrained contrast before decorative effects.",
    "Accessibility is a complete user experience, not only a contrast score.",
    "WCAG contrast calculations use relative luminance and the lighter-plus-0.05 over darker-plus-0.05 ratio.",
    "Do not use color as the only carrier of category, status, direction, or action.",
    "Direct labels, markers, line styles, patterns, icons, and text preserve meaning across varied viewing conditions.",
    "Alternative text should explain purpose, scope, finding, values, units, context, and limitation concisely.",
    "Power BI authors must configure alt text, tab order, titles, labels, markers, themes, high contrast, sort order, and accessible data paths.",
    "Decorative objects should not interrupt keyboard or screen-reader navigation.",
    "Critical evidence must not exist only in hover tooltips or mouse-dependent interactions.",
    "Honest communication requires valid populations, denominators, scales, filters, annotations, uncertainty, and calibrated language.",
    "Separate finding, interpretation, recommendation, and limitation.",
    "Automated checks must be combined with keyboard, screen-reader, zoom, device, and representative-user testing.",
    "AI can assist with accessible communication, but every generated description and design requires evidence validation.",
  ],

  previousLesson: {
    id: "data-ai-m06-l01",
    moduleNumber: 6,
    slug: "choosing-charts-by-analytical-purpose",
    title: "Choosing Charts by Analytical Purpose",
  },
  nextLesson: {
    id: "data-ai-m06-l03",
    moduleNumber: 6,
    slug: "power-bi-star-schema-semantic-modeling",
    title: "Power BI Star-Schema Semantic Modeling",
  },

  lumineryGuidance: {
    message:
      "Guide attention with evidence, make every critical meaning available through multiple channels, and block publication when accessibility or integrity defects remain.",
    prompt:
      "Act as my senior data-visualization educator, accessibility specialist, Power BI architect, analytical-integrity reviewer, and research mentor. Help me complete Module 6 Lesson 2 one verified gate at a time. Require stakeholder, decision, reading order, visual hierarchy, accessible typography, WCAG contrast calculation, non-color encoding, descriptive titles, direct labels, alt text, dynamic filter handling, logical tab order, visible focus, keyboard access, high-contrast resilience, accessible data tables, zoom, mobile layout, honest axes, denominators, filter transparency, uncertainty, calibrated language, reader testing, defect tracking, and retesting. Do not approve color-only status, hover-only evidence, decorative focus stops, tiny low-contrast text, static alt text for changing data, truncated bars, hidden denominators, causal overclaim, or AI-generated narrative without current evidence validation.",
    coachingQuestions: [
      "What should the reader notice first, second, and third?",
      "Does emphasis match decision importance and evidence confidence?",
      "Which meaning depends on color, hover, sound, or a mouse?",
      "Do contrast, typography, spacing, zoom, and device size preserve readability?",
      "Does the keyboard and screen-reader order match the visible reasoning path?",
      "Does alternative text communicate purpose, finding, values, context, and limitation?",
      "Which scale, denominator, filter, omission, or wording could mislead?",
      "What did representative readers misunderstand?",
      "Which defects block publication, and what evidence proves the repair?",
    ],
  },
};

export default lesson02;
