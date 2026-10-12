export const courseBase = '/library/robotics/electronics-and-sensors';
export const roboticsSources = [
 ['Raspberry Pi GPIO hardware and electrical limits','https://www.raspberrypi.com/documentation/computers/raspberry-pi.html'],
 ['GPIO Zero input devices and HC-SR04 level conversion','https://gpiozero.readthedocs.io/en/stable/api_input.html#distancesensor'],
 ['GPIO Zero SPI analog-to-digital converters','https://gpiozero.readthedocs.io/en/stable/api_spi.html']
];
const lesson = (slug,title,objectives,vocabulary,formulas,sections,diagram,examples,lab,pass,practice,mistake,quiz,extra={}) => ({slug,title,duration:'75–90 minutes',objectives,vocabulary,formulas,sections,diagram,examples,lab,pass,practice,mistake,quiz,...extra});
export const sensorsLessons = [
lesson('circuit-contracts-and-measurements','Circuit Contracts and Measurements',
 ['Identify signal, power and ground connections.','Use units correctly in voltage/current/power calculations.','Plan an unpowered wiring inspection.'],
 [['Circuit','A connected electrical path.'],['Reference ground','The potential against which a signal voltage is measured.'],['Supply rating','Specified voltage and current capability.'],['Continuity','An electrical connection between two points.']],
 ['V = I × R','P = V × I','1 mA = 0.001 A'],
 [['Write an electrical contract','Before assembly, identify each device model, supply voltage, maximum signal voltage, current demand and interface. A connector shape or wire color does not establish compatibility. Record unknown values as unresolved rather than guessing. Keep all motors disconnected throughout this sensor course.'],['Measure without creating a short','Inspect wiring with power removed. Use continuity mode only on an unpowered circuit. For a voltage measurement, connect the meter in parallel across the named points and select a suitable voltage range. Do not place a meter in current mode across a power supply: that can short the supply. Current measurement requires a correctly rated series arrangement and appropriate supervision.'],['Separate arithmetic from a rating','A 3.3 V signal across a hypothetical resistor can be modeled using Ohm’s law, but the result does not authorize drawing that current from any GPIO pin. Read the device electrical limits. Begin with paper calculations and unpowered breadboard inspection; hardware work requires an instructor-reviewed plan and low-voltage equipment.']],
 {title:'Electrical contract before connection',nodes:['Exact device model','Supply and signal limits','Unpowered inspection','Supervised measurement'],feedback:'An unresolved limit blocks powered testing; motors remain disconnected'},
 [['Unit conversion','8 mA = 0.008 A. A 3.3 V device at that assumed current consumes 3.3 × 0.008 = 0.0264 W.'],['Resistor current','An ideal 1 kΩ resistor across 3 V carries 3/1000 = 0.003 A = 3 mA. This is a circuit calculation, not a GPIO current specification.'],['Compatibility check','A sensor powered at 5 V may have a 5 V output or a 3.3 V-compatible output. Supply voltage alone cannot decide compatibility; inspect the output specification.']],
 ['Create a specification table for your proposed Pi, sensor and supply.','Draw power, ground and signal paths separately.','Inspect a disconnected breadboard or paper diagram.','Describe the meter mode and connection used for a voltage measurement.'],
 'The table distinguishes supply voltage from signal voltage, identifies unresolved limits, and the meter plan does not connect current mode across a supply.',
 ['Convert 12 mA into amperes.','Calculate 5 V × 0.02 A.','Explain why wire color cannot prove a pin function.'],
 'A current meter is not connected like a voltage meter. Do not experiment by shorting a supply through a meter.',
 [['How is voltage measured?',['In parallel across the points','By shorting the supply in current mode','With an unpowered continuity reading only'],0,'Voltage is measured across two points.'],['8 mA equals?',['8 A','0.008 A','0.08 A'],1,'Divide milliamperes by 1000.'],['What establishes sensor signal compatibility?',['Wire color','Connector shape','Output voltage specification'],2,'Verify the signal electrical contract.'],['Continuity should be checked when?',['Power is removed','Motors run','Current mode is across supply'],0,'Continuity testing uses an unpowered circuit.'],['An unknown electrical limit should be?',['Guessed','Marked unresolved','Ignored'],1,'Resolve limits before powered assembly.']]),
lesson('breadboards-resistors-and-dividers','Breadboards, Resistors, and Dividers',
 ['Trace breadboard connections.','Calculate a divider output with margin.','Explain tolerance and resistor power.'],
 [['Breadboard','A reusable board with internally connected contact groups.'],['Divider','Two series resistors producing a fraction of input voltage.'],['Tolerance','Allowed variation from a nominal value.'],['Power rating','Permitted resistor dissipation under specified conditions.']],
 ['Vout = Vin × Rbottom/(Rtop + Rbottom)','I = Vin/(Rtop + Rbottom)','Presistor = I²R'],
 [['Map the board first','Breadboards contain connected groups and often split power rails. Check the actual layout with unpowered continuity; do not assume a rail continues across a gap. Connect the two divider resistors in series, take the output at their junction, and connect the bottom resistor to the signal ground reference.'],['Reduce a 5 V signal with margin','For Rtop = 2.2 kΩ and Rbottom = 3.3 kΩ, a 5 V input gives 3.0 V nominal. GPIO inputs on the Raspberry Pi use 3.3 V logic and must not receive a standard 5 V HC-SR04 echo directly. A divider or suitable level shifter must be verified, including loaded voltage and logic-high compatibility. This calculation is not a complete hardware approval.'],['Check tolerances','The highest divider output occurs when the bottom resistor is larger, the top resistor is smaller and the supply is higher. With 5% resistors and a 5.25 V supply, the example gives about 3.275 V. That approaches the limit; use appropriately tight tolerances and a reviewed design. Measure the output without connecting the Pi input first.']],
 {title:'Divider junction and reference',nodes:['5 V signal input','Top resistor','Output junction','Bottom resistor to GND'],feedback:'Pi input connects to the verified junction; this conceptual diagram does not identify physical header pins'},
 [['Nominal divider','5 × 3300/(2200 + 3300) = 3.0 V.'],['Current and power','Divider current is 5/5500 ≈ 0.909 mA. Top resistor power is I² × 2200 ≈ 1.82 mW. Compare with the actual component rating.'],['Worst-case output','With 5.25 V, Rtop=2090 Ω and Rbottom=3465 Ω: Vout ≈ 5.25 × 3465/5555 ≈ 3.275 V. Tolerances matter.']],
 ['Draw a junction-level divider schematic with all resistances labeled.','Calculate nominal voltage, current and worst-case voltage.','Inspect a paper or unpowered breadboard layout for a misplaced junction.','Write a supervisor-reviewed output-voltage verification procedure before any GPIO connection.'],
 'Nominal output is 3.0 V, worst-case arithmetic is about 3.275 V, and no unverified signal is connected to the Pi input.',
 ['Explain a split rail fault.','Find the nominal output for equal resistors and 5 V input.','Explain why a divider must share the correct reference ground.'],
 'A resistor in series alone is not the same as a two-resistor divider. The bottom resistor and reference ground define the output fraction.',
 [['Where is divider output taken?',['Across the supply','At the resistor junction','At an arbitrary rail'],1,'The junction is the output node.'],['Equal resistors with 5 V give?',['5 V','3.3 V','2.5 V'],2,'Equal resistors divide by two.'],['What can a split breadboard rail cause?',['An unexpected open circuit','Guaranteed grounding','Perfect voltage regulation'],0,'A gap breaks the assumed connection.'],['For the given divider, nominal Vout is?',['3.0 V','5.0 V','0 V'],0,'5 × 3300/5500 = 3.0.'],['Why check tolerance?',['It changes the output voltage','It changes Python spelling','It certifies all wiring'],0,'Real resistances differ from nominal values.']],{divider:true}),
lesson('gpio-numbering-and-digital-inputs','GPIO Numbering and Digital Inputs',
 ['Distinguish BCM numbers from physical pin positions.','Explain pull-ups and active-low inputs.','Identify switch bounce and suitable debouncing.'],
 [['BCM number','A chip GPIO identifier used by GPIO Zero by default.'],['Physical pin','Position on the board header.'],['Pull-up','A resistance that biases an undriven input high.'],['Debounce','Logic that suppresses repeated transitions from one mechanical action.']],
 ['active-low pressed → logic 0','sample interval = 1/sample rate','50 Hz → 20 ms interval'],
 [['Name the numbering system','GPIO Zero uses BCM numbering by default. On the Raspberry Pi 4 40-pin header, BCM GPIO18 is physical pin 12; physical pin 18 is BCM GPIO24. These are different signal names. Verify the board model, orientation and an official pinout before wiring. Label plans with both systems to prevent a silent mismatch.'],['Avoid a floating input','An unconnected input can pick up interference and change unpredictably. A pull-up makes the released state high; a switch connected to ground makes the pressed state low. The software can still report pressed=True through its abstraction. Never connect a switch so that closing it shorts a power rail to ground.'],['Debounce with intent','One physical press may create several fast edges. A debounce interval can reject repeated transitions, but a long interval can also hide legitimate rapid presses. Choose a value appropriate to the switch and task, then test recorded sequences. A software button is not an independently rated emergency-stop circuit.']],
 {title:'Active-low button interpretation',nodes:['Released: pull-up HIGH','Press connects to GND','Input becomes LOW','Software pressed=True'],feedback:'Verify the BCM/physical mapping before connecting; only compatible logic levels belong on GPIO'},
 [['Pin naming','BCM18 maps to physical12 on Pi4. A request for “pin18” is ambiguous until the numbering system is specified.'],['Polling','50 samples/s gives 1/50 = 0.02 s = 20 ms. A short pulse can fall between samples.'],['Bounce trace','Edges at 0, 2, 5 and 8 ms can belong to one press. A 20 ms lockout counts the first edge, but must be evaluated against the real task.']],
 ['Make a two-column BCM/physical pin mapping using the official Pi4 pinout.','Draw a switch-to-ground input with a pull-up.','Use a paper timeline to classify repeated edges.','State the distinction between a software stop button and independent power removal.'],
 'The plan distinguishes physical18 from BCM18, defines released/pressed logic, and explains the tradeoff in debounce timing.',
 ['Why can an unconnected input change state?','Convert a 100 Hz rate into milliseconds.','Describe an edge that a 50 Hz polling loop could miss.'],
 '“Pin 18” without a numbering system is ambiguous. Never infer a power or signal connection from that phrase alone.',
 [['GPIO Zero normally uses?',['BCM numbering','Only physical numbering','Wire colors'],0,'BCM is the default.'],['BCM18 on the Pi4 header is physical?',['18','12','24'],1,'BCM18 is physical12.'],['A pull-up with switch to ground is pressed at?',['High','Floating','Low'],2,'Grounding the input makes it low.'],['50 Hz sample interval is?',['20 ms','50 seconds','2 ms'],0,'1/50 = 0.02 seconds.'],['Debounce can also hide what?',['Legitimate fast events','Voltage specifications','Board orientation'],0,'Timing choices trade noise rejection for event resolution.']]),
lesson('ultrasonic-distance-and-timeouts','Ultrasonic Distance and Timeouts',
 ['Convert pulse duration into range.','Plan a protected sensor-only interface.','Handle timeouts and out-of-range readings.'],
 [['Time of flight','Pulse travel time used to estimate distance.'],['Level conversion','Conversion between electrical logic voltage ranges.'],['Timeout','No valid response before a deadline.'],['Reference target','An object at a known distance used for comparison.']],
 ['distance_cm = 343 × echo_seconds × 100 / 2','2 ms echo → 34.3 cm','fault → invalid, not clear'],
 [['Verify the sensor variant','A standard HC-SR04 uses a 5 V supply and a 5 V echo, requiring level conversion before a Pi GPIO input. A similar-looking sensor can have different specifications. Review the exact model, verified divider/level shifter, signal reference ground and trigger/echo mapping before sensor-only testing. Motors remain disconnected.'],['Use the correct units','The echo duration represents a round trip. A simplified model uses 343 m/s at approximately room temperature. Divide by two and convert metres to centimetres. GPIO Zero DistanceSensor.distance is in metres; do not treat it as centimetres. max_distance is a configuration parameter, not an assurance that every target will reflect correctly at that distance.'],['Do not turn failure into clearance','An angled, soft or out-of-range target may produce no reliable echo. Assign an invalid status to a timeout, retain the raw evidence and request no movement. Apply freshness and range gates before filtering. Never reuse a previous good value indefinitely when new readings fail.']],
 {title:'Sensor-only measurement workflow',nodes:['Protected echo signal','Bounded pulse timing','Distance with units','Validity and freshness gate'],feedback:'Missing/timeout samples remain faults; this course never commands motors'},
 [['Short echo','1 ms gives 343 × 0.001 × 100/2 = 17.15 cm.'],['Library units','A DistanceSensor reading of 0.5 m equals 50 cm, not 0.5 cm.'],['805 cm example','If the configured classroom contract is 2–400 cm, an 805 cm computed value is rejected as range. Investigate timing, units and reflections instead of declaring a clear path.']],
 ['Complete the exact-model electrical review on paper.','Convert 1 ms and 2 ms echoes.','Record a synthetic timeout and an 805 cm outlier as invalid.','Draft a supervised sensor-only test at known target distances, with motors disconnected.'],
 'Conversions are 17.15 and 34.3 cm; timeout and out-of-range values remain invalid, and the interface plan includes reviewed level conversion.',
 ['Explain why pulse travel is divided by two.','Convert 0.75 m to cm.','List two target properties that can affect reflections.'],
 'A missing echo is not evidence that no obstacle exists. Do not substitute a maximum distance for a timeout.',
 [['Echo duration measures?',['One-way travel','Round-trip travel','Motor duty'],1,'The pulse goes to the target and back.'],['0.5 m equals?',['0.5 cm','5 cm','50 cm'],2,'Multiply metres by 100.'],['A standard 5 V HC-SR04 echo needs?',['Verified level conversion','Direct unprotected GPIO','Motor connection'],0,'Protect the Pi input.'],['A timeout is recorded as?',['Clear path','Invalid measurement','Perfect zero error'],1,'No reliable echo is a fault.'],['An 805 cm reading under a 2–400 contract is?',['Valid','A measured proof of clearance','Out of range'],2,'It exceeds the configured contract.']]),
lesson('analog-light-and-environmental-sensors','Analog, Light, and Environmental Sensors',
 ['Distinguish analog, digital and bus-based devices.','Calculate ADC voltage from a code.','Choose an interface using a device data sheet.'],
 [['ADC','Analog-to-digital converter.'],['Reference voltage','Voltage defining an ADC’s input conversion scale.'],['SPI','A synchronous serial interface often used by ADCs.'],['I²C','A two-wire addressed serial interface used by many sensors.']],
 ['10-bit ADC codes: 0–1023','approximate V = code/1023 × reference_V','normalized value = code/1023'],
 [['Choose the interface first','A standard Pi4 GPIO digital input is not an analog voltage measurement channel. An analog-output sensor needs a compatible external ADC; a digital-output module may only indicate a threshold; an I²C/SPI module transfers structured digital data. These are different contracts even when they measure the same physical property.'],['Understand a conversion scale','For the simplified 10-bit endpoint model with a 3.3 V reference, code 512 represents approximately 1.652 V. Real ADC transfer functions, reference tolerance, quantization and input limits come from the device data sheet. GPIO Zero’s MCP3008 abstraction offers normalized readings; converting a ratio into a physical quantity requires calibration.'],['Light and motion are context dependent','A light-dependent resistor changes resistance, so it normally needs a divider and ADC for a voltage measurement. A comparator module offers a threshold output whose active polarity must be verified. PIR motion is not a distance measurement or proof of an empty space. Environmental modules may have warm-up, response-time and calibration requirements. Never assume every 5 V module uses 3.3 V-safe bus pull-ups.']],
 {title:'Analog sensing chain',nodes:['Physical quantity','Analog signal','Compatible ADC','Calibrated physical value'],feedback:'Supply, reference and bus levels must all be verified for the exact devices'},
 [['ADC midpoint','512/1023 × 3.3 ≈ 1.652 V using the simplified endpoint model.'],['Normalized value','Code 256 gives 256/1023 ≈ 0.2502, a ratio rather than a temperature or distance.'],['Interface choice','An analog light signal needs a compatible ADC. A bus temperature sensor needs its specified protocol, address and safe signal levels. Neither is read by assuming GPIO HIGH means a numerical temperature.']],
 ['Classify three proposed sensors by analog, digital threshold or bus interface.','Calculate voltages for codes 0, 512 and 1023.','List ADC input and reference limits to verify.','Write a calibration plan for converting a light reading into a meaningful comparison.'],
 'The plan uses an external ADC for analog input, gives approximately 0, 1.652 and 3.3 V, and distinguishes ratios from physical units.',
 ['Why is a normalized value not automatically a physical quantity?','Explain why PIR cannot measure distance.','Name one I²C electrical compatibility check.'],
 'A module that shares a bus protocol can still have incompatible electrical levels. Protocol agreement does not replace a voltage check.',
 [['An analog voltage on Pi4 should use?',['A compatible ADC','Any digital GPIO as a voltmeter','Only a button'],0,'A compatible external ADC measures analog input.'],['10-bit codes normally range from?',['0–10','0–1023','0–10000'],1,'Ten bits provide 1024 codes.'],['Code512 at 3.3 V reference is approximately?',['3.3 V','0 V','1.652 V'],2,'512/1023 × 3.3.'],['PIR is mainly evidence of?',['Motion-related infrared change','Exact distance','Guaranteed absence of obstacles'],0,'It is not a range measurement.'],['Bus pull-ups should be?',['Ignored','Checked for compatible voltage','Always assumed 5 V safe'],1,'Verify signal levels.']]),
lesson('calibration-noise-and-sampling','Calibration, Noise, and Sampling',
 ['Compute bias and a two-point calibration.','Compare median and mean under an outlier.','Explain sampling and filter delay.'],
 [['Bias','Systematic offset from a reference.'],['Precision','Repeatability under specified conditions.'],['Calibration','A documented relation between reading and reference.'],['Aliasing','Different changing signals producing indistinguishable sampled observations.']],
 ['corrected = slope × raw + offset','slope = (reference2 − reference1)/(raw2 − raw1)','mean = sum/n; median = middle sorted value'],
 [['Compare with reference values','Repeat readings at known distances and record conditions. Repeatable readings can still have systematic bias. A two-point linear calibration needs distinct raw values and an appropriate physical model; it should be checked at an independent third point. Do not extrapolate beyond the validated range or hide raw values.'],['Filter after validation','Readings 20, 21, 200, 19, 20 cm have mean 56 cm and median 20 cm. A median suppresses an isolated spike, but it can delay a genuine change. Keep a separate current reading validity flag; a good historical median must not mask a current timeout. Filter windows should respect timestamps and expire.'],['Sample fast enough for the task','Ten samples/s gives 100 ms nominal spacing. That is not the same as guaranteed 100 ms response time because scheduling, acquisition and filtering add delay. For reconstructing a band-limited signal, sample faster than twice its maximum frequency and control aliasing; robot events also require worst-case latency tests, not only this theoretical rate.']],
 {title:'Calibrate without hiding faults',nodes:['Raw timestamped reading','Validity gate','Reference calibration','Filtered value plus status'],feedback:'A current invalid sample stays invalid; historical smoothing does not authorize motion'},
 [['Offset correction','A true 20 cm target reads 22 cm consistently. Under an offset-only model, corrected = raw − 2 cm. Verify at other distances.'],['Two-point line','Raw22 corresponds to reference20; raw42 to reference40. Slope=(40−20)/(42−22)=1; offset=20−22=−2. Raw32 predicts30 cm.'],['Mean versus median','The five readings total280 cm, so mean=56 cm; sorted middle=20 cm. Neither arithmetic result verifies current freshness.']],
 ['Build a synthetic two-point calibration table and a third check point.','Compute slope, offset, mean and median.','Mark a missing newest sample invalid despite old valid samples.','Choose a sample interval and state the expected latency sources.'],
 'The example slope is1 and offset−2; mean56 and median20; the current timeout remains invalid even if the history looks stable.',
 ['Distinguish precision from accuracy.','What if both calibration raw values are equal?','Explain one filter-delay risk near an obstacle.'],
 'Averaging repeated biased measurements does not remove systematic bias. Correct the model and validate against a reference.',
 [['Repeated but shifted values indicate?',['Possible bias','Guaranteed accuracy','No uncertainty'],0,'Repeatability does not eliminate bias.'],['The example offset is?',['+2','−2','20'],1,'Correct the +2 raw offset by subtracting2.'],['The outlier set median is?',['56','200','20'],2,'The middle sorted reading is20.'],['A new timeout should be?',['Masked by old median','Kept invalid','Reported as maximum range'],1,'Preserve current fault status.'],['Ten samples/s gives spacing of?',['100 ms','10 seconds','1 ms'],0,'1/10 second =100ms.']]),
lesson('sensor-data-contract-and-python-logger','Sensor Data Contract and Python Logger',
 ['Implement explicit measurement statuses.','Reject stale and impossible data.','Export a reproducible sensor log and summary.'],
 [['Data contract','Defined units, range, time and validity rules.'],['Freshness','Age of a measurement relative to its use.'],['Quarantine','Retention of rejected records with reasons.'],['Provenance','Evidence of where a record and its transformations came from.']],
 ['age = evaluation_time − acquisition_time','accepted rate = accepted/total × 100%','median over last3 consecutive valid samples'],
 [['Define status before smoothing','This simulation accepts real numeric distances2–400 cm and reading age0–0.5 s inclusive. It rejects missing, non-finite, Boolean, out-of-range and stale values with explicit reasons. The limits are the teaching contract, not universal sensor specifications. A real adapter must capture acquisition time and compute age with a suitable monotonic clock; the exercise provides age values directly.'],['Retain rejected rows','The logger writes every synthetic input with raw value, age, status and output. Rejected rows are not silently dropped. NaN and infinite values are converted to JSON-safe text or null in the exported evidence. JSON encoding uses allow_nan=False so malformed non-standard values cannot slip through.'],['Reset smoothing on a fault','Accepted samples enter a three-reading median window. Any fault clears the window and produces no filtered value. This conservative reset prevents a post-fault sample from mixing with pre-fault history. Physical elapsed-time windows are a further hardware integration task. Every row is labeled simulated; this program operates no GPIO and commands no motors.']],
 {title:'Logger pipeline and fault path',nodes:['Synthetic distance and age','Contract status','Median or null','CSV log and JSON summary'],feedback:'All rejected rows retain a reason; faults reset the window rather than reusing old clearance'},
 [['Boundary case','2 cm at age0.5 s is accepted. Age0.5001 s is stale. These exact inequalities belong in tests.'],['Fault reset','60,59,61 cm have median60. A timeout clears history; a subsequent25 cm reading has filtered value25, not59.'],['Summary','The provided10-row dataset has5 accepted and5 rejected samples: accepted rate50%. Three follow-up consecutive valid values25,26,24 yield median25.']],
 ['Copy the displayed program to sensor_station.py and run Python3.','Verify all assertions and both exported files.','Inspect rejected rows and reasons instead of reading only the summary.','Add a recorded scenario of your own, label it synthetic and update its expected result.'],
 'The exact program passes18 contract boundary/fault tests and exports10 rows,5 accepted,5 rejected, and a final median25 cm. Every evidence row is labeled simulated.',
 ['Why reject Boolean values as distances?','How would a hardware adapter compute reading age?','Explain why fault rows must remain in the log.'],
 'A filtered number without status and age is not a trustworthy sensor interface. Preserve current faults and acquisition evidence.',
 [['The example valid age limit is?',['0.5 seconds inclusive','5 minutes','Unlimited'],0,'The contract accepts age≤0.5.'],['Why retain rejected rows?',['For diagnosis and audit','To pretend they are accepted','Only to inflate counts'],0,'They explain failure reasons.'],['What happens to history on a fault?',['It is trusted forever','It is cleared','It becomes maximum range'],1,'The simulation resets the window.'],['How many accepted rows in the given dataset?',['10','8','5'],2,'Five of ten pass the contract.'],['Does the logger move a robot?',['Yes','No, simulation only','Only during a timeout'],1,'There is no GPIO or motor control.']],{code:true,graph:true}),
lesson('portfolio-sensor-measurement-station','Portfolio Project: Sensor Measurement Station',
 ['Create a sensor-station design and evidence package.','Reconcile raw, accepted and rejected counts.','Plan a supervised sensor-only hardware milestone.'],
 [['Measurement station','A system that records physical observations and quality status.'],['Reconciliation','Checking that counts or totals agree across stages.'],['Validation report','Documented tests, results and limitations.'],['Acceptance gate','A requirement that must pass before advancing.']],
 ['raw rows = accepted + rejected','rubric =20 +20 +20 +30 +10 =100','project target ≥80/100; critical defects must be resolved'],
 [['Project brief and boundaries','Create a measurement-station dossier using the tested Python simulation. Hardware is optional and only follows an instructor-reviewed exact-model plan. Use no motor power or motion. A synthetic project can satisfy course learning requirements if its evidence is clearly labeled; it cannot be claimed as a physically verified station.'],['Seven deliverables','Submit:1) measurable requirements and sensor contract;2) exact-model component/voltage table;3) reviewed schematic or proposed unverified schematic;4) divider and calibration calculations;5) source code and tested version;6) raw CSV and summary with reconciliation and graph;7) report distinguishing synthetic and measured results, faults and next milestone. Do not fill unknown electrical specifications with guesses.'],['Assessment rubric','Requirements20; electrical/interface architecture20; calculations/calibration20; reproducible logging and fault tests30; limitations and next milestone10. Reach80/100 and resolve critical errors regardless of total score. A peer or instructor reviews the dossier separately from browser self-confirmation.'],['Hardware follow-up','If pursuing hardware, first verify model, pin numbering, power limits and protected signal levels with appropriate supervision. Then perform a sensor-only reference-distance experiment with motors disconnected. Compare the actual outcomes with the simulation assumptions and document discrepancies. Python and Raspberry Pi is the next course, still in development.']],
 {title:'Measurement evidence package',nodes:['Specification and schematic','Simulation or supervised readings','Quality log and graph','Review and next milestone'],feedback:'Every result is labeled synthetic or measured; browser completion is not independent hardware approval'},
 [['Population check','10 raw rows =5 accepted +5 rejected. If a chart shows only5 valid points, explain the other5 rather than reporting zero faults.'],['Rubric calculation','18 +18 +16 +26 +9 =87/100. A direct5 V echo-to-GPIO mistake still blocks approval until corrected.'],['Next milestone','A simulation that passes with unverified sensor voltage should advance to the voltage/interface review, not motor integration. The evidence dictates the next step.']],
 ['Create all seven dossier deliverables.','Run Lesson7’s exact logger and retain both outputs.','Create a graph with missing/invalid samples marked as gaps.','Self-score each rubric category and record all unverified hardware claims.'],
 'The dossier scores≥80/100, reconciles all rows, includes reproducible tests and fault evidence, and clearly separates simulation from measured hardware results.',
 ['Name your largest unverified assumption.','Explain your worst rejected sample.','Write one pass/fail test for a supervised sensor-only follow-up.'],
 'A browser learning record is self-recorded course progress, not certification of electrically safe hardware or calibrated measurement accuracy.',
 [['What is required for all rows?',['Accepted/rejected reconciliation','Dropping faults silently','Only a pretty chart'],0,'Account for every raw observation.'],['A synthetic dossier can claim?',['Verified physical wiring','Labeled simulation results','Certified calibration'],1,'Be explicit about what was tested.'],['What is the portfolio target?',['20/100','50/100','At least80/100'],2,'The target is80 with critical issues resolved.'],['Hardware tests keep what disconnected?',['Motor power','Reference ground required by plan','All record keeping'],0,'This course is sensor-only.'],['What course follows?',['Python and Raspberry Pi','Repeat Mathematics only','No further validation'],0,'The next robotics track integrates Python and the Pi.']],{duration:'2–3 hours'})
];

export const sensorLab = `"""Synthetic sensor station. No GPIO or motors. Python 3 standard library."""
import csv
import json
import math
from collections import deque
from statistics import median

def status(distance, age):
    if distance is None:
        return "missing"
    if (not isinstance(distance, (int, float)) or isinstance(distance, bool)
        or not math.isfinite(distance)):
        return "non_numeric_or_non_finite"
    if distance < 2 or distance > 400:
        return "range"
    if (not isinstance(age, (int, float)) or isinstance(age, bool)
        or not math.isfinite(age) or age < 0):
        return "bad_age"
    if age > 0.5:
        return "stale"
    return "accepted"

checks = [
    (2, 0, "accepted"), (400, 0.5, "accepted"),
    (1.9, 0, "range"), (400.1, 0, "range"),
    (100, 0.5001, "stale"), (None, 0, "missing"),
    (float("nan"), 0, "non_numeric_or_non_finite"),
    (float("inf"), 0, "non_numeric_or_non_finite"),
    (True, 0, "non_numeric_or_non_finite"),
    ("30", 0, "non_numeric_or_non_finite"),
    (100, -1, "bad_age"), (100, None, "bad_age"),
    (100, True, "bad_age"), (100, float("nan"), "bad_age"),
    (100, float("inf"), "bad_age"), (805, 0, "range"),
    (0, 0, "range"), (100, 0.5, "accepted"),
]
for distance, age, expected in checks:
    assert status(distance, age) == expected

inputs = [(60,0), (59,0.1), (None,0), (805,0),
          (50,0.7), (float("nan"),0), (25,0),
          (26,0.1), (24,0.2), (True,0)]
window = deque(maxlen=3)
rows = []
for sequence, (distance, age) in enumerate(inputs, start=1):
    quality = status(distance, age)
    if quality == "accepted":
        window.append(distance)
        filtered = median(window)
    else:
        window.clear()
        filtered = None
    raw = distance
    if isinstance(distance, float) and not math.isfinite(distance):
        raw = str(distance)
    rows.append(dict(sequence=sequence, raw_cm=raw, age_s=age,
                     status=quality, filtered_cm=filtered,
                     provenance="simulated"))
accepted = sum(row["status"] == "accepted" for row in rows)
summary = dict(total=len(rows), accepted=accepted,
               rejected=len(rows)-accepted, accepted_rate_pct=100*accepted/len(rows),
               provenance="simulated")
assert summary == dict(total=10, accepted=5, rejected=5,
                       accepted_rate_pct=50.0, provenance="simulated")
assert rows[6]["filtered_cm"] == 25  # fault reset removes old history
assert rows[8]["filtered_cm"] == 25  # median of 25, 26, 24
assert all(row["filtered_cm"] is None for row in rows if row["status"] != "accepted")
with open("sensor_readings.csv", "w", newline="", encoding="utf-8") as f:
    writer = csv.DictWriter(f, fieldnames=list(rows[0]))
    writer.writeheader()
    writer.writerows(rows)
with open("sensor_summary.json", "w", encoding="utf-8") as f:
    json.dump(summary, f, indent=2, allow_nan=False)
with open("sensor_readings.csv", newline="", encoding="utf-8") as f:
    assert len(list(csv.DictReader(f))) == 10
with open("sensor_summary.json", encoding="utf-8") as f:
    assert json.load(f) == summary
print(f"Passed {len(checks)} contract tests and export checks.")
print(summary)
print("Wrote sensor_readings.csv and sensor_summary.json")
`;
export function dividerVoltage(input, top, bottom) {
 return input * bottom / (top + bottom);
}
