export const courseBase='/library/robotics/python-and-raspberry-pi';
export const roboticsSources=[
 ['Raspberry Pi OS setup','https://www.raspberrypi.com/documentation/computers/getting-started.html'],
 ['GPIO Zero pin factories and mock pins','https://gpiozero.readthedocs.io/en/stable/api_pins.html'],
 ['GPIO Zero LEDs, PWM and motors','https://gpiozero.readthedocs.io/en/stable/api_output.html'],
 ['GPIO Zero robot API','https://gpiozero.readthedocs.io/en/stable/api_boards.html#robot'],
 ['Python virtual environments','https://docs.python.org/3/library/venv.html'],
 ['Python monotonic clock','https://docs.python.org/3/library/time.html#time.monotonic']
];
const make=(slug,title,objectives,vocabulary,formulas,sections,diagram,examples,lab,pass,practice,mistake,quiz,extra={})=>({slug,title,duration:'75–90 minutes',objectives,vocabulary,formulas,sections,diagram,examples,lab,pass,practice,mistake,quiz,...extra});
export const piLessons=[
make('pi-os-python-and-project-setup','Pi OS, Python, and Project Setup',
 ['Prepare a reproducible project workspace.','Distinguish OS packages from Python environments.','Record hardware and software versions before integration.'],
 [['Raspberry Pi OS','An operating system for Raspberry Pi computers.'],['Virtual environment','An isolated Python package environment.'],['Dependency','A library a program needs.'],['Reproducibility','Enough information to repeat a result under stated conditions.']],
 ['python3 --version','python3 -m venv .venv','one environment + recorded versions → reproducible run'],
 [['Begin without motor power','Use a Raspberry Pi 4 or a desktop computer for the simulation path. On a Pi, use the official Raspberry Pi Imager and the current supported Raspberry Pi OS for your board; verify the correct storage device before writing because imaging replaces its contents. Configure your own account rather than assuming an old default username/password. Keep motor power disconnected during software preparation.'],['Keep packages intentional','Create a named project folder and a Python virtual environment. Use your distribution’s package instructions for hardware dependencies; do not use sudo pip to overwrite the system Python. The standard-library controller lab runs with Python 3 alone. The separate GPIO mock exercise needs gpiozero; it is demonstrated and tested with version 2.0.1. A desktop can simulate pins but cannot thereby drive a real Pi header.'],['Record the environment','Your README should state board model, OS release, Python version, package versions, numbering convention, run command and whether results are simulated or measured. Avoid storing passwords, tokens or wireless credentials in a public repository. Record failures and fixes so another learner can follow the same path.']],
 {title:'From environment to reproducible evidence',nodes:['Board and OS record','Project environment','Simulation run','Versioned test evidence'],feedback:'Environment success does not approve physical wiring or motor power'},
 [['Create a folder','mkdir robot_project; then enter it and create .venv with python3 -m venv .venv. These are sequential terminal steps, not Python statements.'],['Different run modes','python3 controller_lab.py needs only the standard library. python3 gpio_mock_lab.py additionally needs gpiozero installed in the selected environment.'],['Version evidence','A report saying Python 3.x plus gpiozero 2.0.1 and a source commit is more repeatable than “latest code worked.” Record your actual Python version, not a guessed one.']],
 ['Write a project README with platform and run mode.','Create a folder and, if supported, a virtual environment.','Record python3 --version and package versions.','Keep motor power disconnected and list unresolved hardware prerequisites.'],
 'Another learner can identify the environment and run mode from the README; no private credentials are committed.',
 ['Explain why sudo pip can damage an OS-managed Python.','Name the destructive step when imaging storage.','List what a desktop GPIO mock cannot validate.'],
 'A package import succeeding does not demonstrate a real hardware interface. Simulation, sensor-only integration and motion tests need separate evidence.',
 [['What does imaging a storage device do?',['Replaces its contents','Only adds a folder','Tests a motor'],0,'Verify the target before imaging.'],['What should stay out of a public repo?',['Run command','Credentials','Source version'],1,'Do not commit passwords or tokens.'],['What isolates Python packages?',['A wheel diameter','A GPIO wire','Virtual environment'],2,'A venv isolates packages.'],['The portable controller lab needs?',['Python standard library','Motor power','A camera'],0,'It controls no hardware.'],['Which record supports reproduction?',['Only “worked”','Versions and run command','Only a photo'],1,'State the actual environment.']]),
make('gpiozero-and-mock-pins','GPIO Zero and Mock Pins',
 ['Use BCM numbers explicitly.','Run a GPIO Zero exercise with a mock pin factory.','Distinguish library-state checks from electrical checks.'],
 [['Pin factory','A backend that provides the pin operations used by GPIO Zero.'],['Mock pin','An in-memory pin used for software testing.'],['Context manager','A Python construct that manages setup and cleanup.'],['Active-low','An input convention where low voltage indicates activation.']],
 ['BCM18 ≠ physical18','Button.value: pressed → 1','MockFactory tests software, not voltage'],
 [['Choose the backend explicitly','GPIO Zero normally uses BCM numbering. The mock exercise passes a MockFactory to every device, so it cannot fall through to a real GPIO backend. The LED uses BCM17 and the button BCM27 as simulated identities. These names are not a wiring instruction: board orientation, physical mapping, resistors and voltage compatibility must be reviewed independently before hardware use.'],['Understand the library abstraction','A button with a pull-up and a switch-to-ground circuit is electrically active-low, while its Button.value is 1 when pressed. This is an intentional abstraction. Drive the mock pin low and high to observe the logical states. Setting bounce_time=None makes the small deterministic exercise check state interpretation rather than timing-dependent debounce.'],['Close devices deterministically','A with block closes devices at the end even when an exception occurs. Device closure releases software resources, but it is not proof of power isolation on a real circuit. The published mock lab checks pin activity and logical values only; a real LED needs a current-limiting resistor and a reviewed electrical plan.']],
 {title:'Mock backend boundary',nodes:['Application API','Explicit MockFactory','In-memory pin values','Assertions and cleanup'],feedback:'No physical GPIO is selected; mock success says nothing about wiring, voltage or motor direction'},
 [['LED state','Call led.on(), assert led.is_lit and assert factory.pin(17).state. Then led.off() should clear the logical and mock-pin states.'],['Button polarity','A pull-up mock input starts high and released. drive_low() makes Button.value equal 1; drive_high() restores released state.'],['Cleanup','After the with block, led.closed and button.closed are true. This verifies resource closure, not a physical power disconnect.']],
 ['Install gpiozero in your chosen test environment if absent.','Run the displayed mock program.','Confirm all 10 assertions and the single PASS message.','Explain why every device receives the explicit mock factory.'],
 'Ten GPIO Zero mock assertions pass, and your report labels the results simulated rather than physically measured.',
 ['Explain a library logical value versus a raw pin state.','Why pass the pin factory explicitly?','What else must be checked before an LED is physically connected?'],
 'MockFactory does not emulate motor current, noise, Linux timing or damaged wiring. It only models the pin behavior relevant to the software test.',
 [['MockFactory uses?',['In-memory pins','Physical power rails','Motor current measurements'],0,'The backend is simulated.'],['GPIO Zero defaults to which numbering?',['Physical only','BCM','Cable colors'],1,'Use BCM identifiers explicitly.'],['A pull-up button pressed to ground has Button.value?',['0 always','Undefined','1'],2,'The abstraction reports pressed as 1.'],['What should an actual LED include?',['Current-limiting resistor','Direct motor power','5 V GPIO input'],0,'Review electrical limits and resistor sizing.'],['What does device.closed prove?',['Physical power isolation','Software resource closure','Sensor calibration'],1,'Closure is a software property.']],{code:'gpio'}),
make('functions-types-and-hardware-adapters','Functions, Types, and Hardware Adapters',
 ['Separate decision logic from I/O.','Use a measurement record with explicit units and timestamps.','Validate types and configuration before use.'],
 [['Pure function','A function whose result is determined by its inputs without I/O effects.'],['Adapter','Code that connects an application interface to a concrete device.'],['Dataclass','A Python class supporting structured records with generated utility methods.'],['Contract','Declared conditions for accepted input and promised output.']],
 ['age_s = now_s − acquired_s','distance_cm = distance_m × 100','valid numeric excludes Boolean and non-finite values'],
 [['Make data explicit','A Sample record contains distance_cm, acquired_s and emergency. Names carry units; timestamps use a consistent time source. Validate these fields at the boundary rather than allowing a string like "30" or a Boolean to become a usable distance accidentally. Python’s bool is a subclass of int, so isinstance(value, (int, float)) alone accepts True.'],['Keep the policy independent','A decision function selects STOP or FORWARD from a sample, the evaluation time and previous state. It performs no GPIO calls, sleeps or file writes. The runner sends the resulting command to an adapter. You can therefore test malformed data without a connected robot. A fake adapter records commands rather than moving anything.'],['Translate only at the adapter','A real distance adapter must convert library metres into centimetres, handle device faults, and preserve acquisition timing rather than assigning a fresh timestamp to a cached value. A real motor adapter must use the exact driver’s permitted states and tested direction. The course demonstrates a fake implementation; hardware integration remains supervised and driver-specific.']],
 {title:'Separation of decision and physical I/O',nodes:['Sensor adapter','Sample with units/time','Pure decision','Actuator adapter'],feedback:'Fake adapters record evidence; real adapters need their own verified hardware tests'},
 [['Unit conversion','A sensor reporting 0.42 m is translated to 42 cm at the adapter. The core policy receives centimetres only.'],['Boolean trap','isinstance(True,int) is True in Python. Reject bool explicitly when validating distance and time fields.'],['Adapter substitution','FakeMotor.apply("FORWARD") appends a record. A real motor implementation may call a reviewed hardware API. Both implement the same requested command interface, but their evidence is different.']],
 ['Draw interfaces for Sample, decision and actuator adapter.','Identify which functions should be pure.','List malformed distance and timestamp cases.','Run the integrated portable lab in Lesson 6 and identify the fake adapter boundary.'],
 'The diagram separates policy from I/O and carries units and acquisition time; Boolean, string and non-finite inputs are not treated as valid distances.',
 ['Explain why a cached sample cannot get a new acquisition timestamp.','What should a unit conversion belong to?','Name one driver-specific actuator assumption.'],
 'A real adapter is not obtained merely by replacing a class name. Device errors, timestamps, safe stop states and electrical compatibility need explicit integration tests.',
 [['A pure decision function should do what?',['Choose a state from inputs','Write GPIO directly','Sleep indefinitely'],0,'Keep I/O outside policy.'],['0.42 m equals?',['4.2 cm','42 cm','420 cm'],1,'Multiply metres by 100.'],['Python True is also an instance of?',['str','None','int'],2,'Reject bool explicitly.'],['Where should device-specific conversion occur?',['Adapter','Quiz title','Browser storage'],0,'The boundary translates to the application contract.'],['A cached sample should retain what?',['Its acquisition timestamp','A newly invented acquisition time','No units'],0,'Retain provenance and freshness.']]),
make('timing-freshness-and-bounded-loops','Timing, Freshness, and Bounded Loops',
 ['Use a monotonic time base for elapsed time.','Budget loop work and sensor freshness.','Explain why a bounded iteration count does not bound blocking I/O.'],
 [['Monotonic clock','A clock suited to elapsed-time comparisons that does not go backward.'],['Period','Time between planned loop starts.'],['Deadline','Latest acceptable time for a required result.'],['Blocking call','An operation that prevents the caller from continuing until it returns.']],
 ['period_s = 1 / frequency_hz','remaining = max(0, period − work_time)','stale if age_s > 0.5; future sample also invalid'],
 [['Use the right clock','A wall clock is useful for human-readable logs but can change after synchronization. A monotonic clock is suitable for loop duration and freshness when acquisition and evaluation share its time base. Do not subtract timestamps from unrelated clocks. The portable lab uses supplied synthetic seconds so tests do not depend on machine scheduling.'],['Account for work','A target loop of 10 Hz has a 100 ms period. If reading and decision work take 30 ms, about 70 ms remains before the next planned iteration. sleep(0.1) after work instead makes the overall period about 130 ms. Scheduling and acquisition delays mean a nominal rate is not a guaranteed safety response. Measure worst-case behavior separately.'],['Bound failure paths','A loop limited to ten iterations can still hang on its first sensor call. Real acquisition needs a device-level timeout or appropriately isolated cancellable work; an outer try/finally cannot execute until a blocking call returns or an exception unwinds it. A frozen process also needs independent stop protection. The lab models returning samples and exceptions, not real deadline enforcement.']],
 {title:'Loop timing budget',nodes:['Acquire with deadline','Evaluate sample age','Decide and apply','Wait remaining period'],feedback:'A blocking operation must be bounded separately; software cleanup cannot guarantee action during a process freeze'},
 [['Loop period','1/10 = 0.1 s = 100 ms. With 30 ms work, nominal remaining time is 70 ms.'],['Stale sample','Evaluation at 1.0 s minus acquisition at 0.3 s gives age 0.7 s: reject under the 0.5 s contract.'],['Future timestamp','Evaluation at 1.0 s and acquisition at 1.1 s gives −0.1 s: reject as invalid clock data rather than accepting it as fresh.']],
 ['Build a loop budget table with read, decide, act and wait durations.','Calculate age for fresh, stale and future-dated samples.','Write a sensor-timeout requirement for a real adapter.','Identify a failure that an ordinary try/finally cannot handle.'],
 'The table accounts for work inside a 100 ms period, stale/future samples stop, and the report distinguishes modeled exceptions from true blocking-timeout protection.',
 ['What if work exceeds the period?','Why not use wall-clock changes to calculate elapsed time?','Explain the difference between timeout and missing data.'],
 'A fast loop in simulation does not establish real worst-case latency. Device acquisition, scheduling and driver execution need measured integration evidence.',
 [['Ten Hz gives a period of?',['100 ms','10 seconds','1 ms'],0,'1/10 second is 100 ms.'],['A sample from the future is?',['Automatically fresh','Invalid time data','A calibration result'],1,'Negative age is rejected.'],['Which clock supports elapsed timing?',['Unrelated wall clocks','A page title','Monotonic clock'],2,'Use one consistent elapsed-time base.'],['Can a fixed loop count prevent a hanging sensor call?',['No','Always','Only if count is ten'],0,'Acquisition needs its own bound.'],['30 ms work in a 100 ms period leaves nominally?',['130 ms','70 ms','30 ms'],1,'Subtract the work budget.']]),
make('motor-commands-speed-and-stop-contracts','Motor Commands, Speed, and Stop Contracts',
 ['Distinguish duty requests from measured speed.','Design a default-stopped actuator interface.','Record motion prerequisites and stop-mode differences.'],
 [['Duty request','A normalized command supplied to a PWM/driver interface.'],['Coast','Allowing rotation to slow with little active braking.'],['Brake','A driver-dependent action opposing rotation.'],['Interlock','A condition that prevents operation until prerequisites are met.']],
 ['0 ≤ forward duty ≤ 1','PWM request 0.2 ≠ measured speed 0.2 m/s','STOP request → driver-specific verified stop action'],
 [['Read the actuator contract','GPIO Zero Robot exposes logical movement operations such as forward and stop, but actual electrical control depends on the selected motor/driver setup. A duty or speed argument is normalized; it is not a measured ground speed. Use a compatible H-bridge and appropriately rated motor supply, never a motor directly on GPIO. This course’s portable fake uses a fixed 0.2 duty label solely for simulation.'],['Stop behavior is device specific','A logical stop can mean a hardware-dependent coast, brake, standby or disabled output. Read the exact driver documentation and measure the outcome. Default state should be stopped at startup, on invalid data and during normal shutdown. Do not infer physical stopping distance from a log containing the word STOP.'],['Gate the physical milestone','Before motion, review pin mapping, voltage/current limits, protected echo input, driver truth table and accessible motor-power disconnect. Test direction with the chassis secured and wheels clear; then use a supervised low-speed track with measured clearance and stopping distance. A front distance sensor does not prove side/rear clearance, so the beginner policy does not auto-turn or reverse.']],
 {title:'Command-to-motion evidence',nodes:['Validated state','Normalized command','Reviewed driver action','Measured physical result'],feedback:'Motion approval requires hardware evidence; simulation records requested commands only'},
 [['Duty versus speed','A forward request at 0.2 duty means an input ratio. Without calibration, calling it 0.2 m/s is incorrect.'],['Stop trace','The fake records STOP after a missing reading. A hardware test must additionally measure the wheels and verify the driver stop mode.'],['Sensor field of view','One front ultrasonic sensor detects some forward targets. It cannot authorize reversing into an unseen obstacle, so invalid or close readings request STOP instead.']],
 ['Write an actuator interface with apply(state) and stop(reason).','List the exact driver specifications required for a real adapter.','Explain startup, fault and shutdown stop behavior.','Keep motor power disconnected while running all portable examples.'],
 'The actuator design starts stopped, treats duty as a command, and never describes unmeasured physical speed or side/rear clearance as verified.',
 ['Compare braking and coasting.','Why test wheel direction before driving on the floor?','What physical test distinguishes a stop request from a successful stop?'],
 'Replacing a simulated adapter with a real Robot object without reviewing driver states can change startup, stop and direction behavior.',
 [['A normalized duty of0.2 proves what?',['A command ratio','Ground speed0.2 m/s','Guaranteed braking'],0,'It is an input command.'],['A drive motor should get power through?',['GPIO directly','Suitable driver and motor supply','Sensor echo'],1,'Use the reviewed power stage.'],['One forward sensor verifies rear clearance?',['Yes','Only at full duty','No'],2,'Rear clearance is outside its field.'],['What state should startup request?',['STOP','Full FORWARD','Unconditional REVERSE'],0,'Begin stopped.'],['Physical stop proof requires?',['Only printed text','Measured hardware outcome','Only a source filename'],1,'Verify what the wheels actually do.']]),
make('integrated-controller-and-fault-injection','Integrated Controller and Fault Injection',
 ['Run a modular controller using fake sensor/actuator adapters.','Test boundaries, state history and exceptions.','Verify cleanup without claiming physical stop guarantees.'],
 [['Fault injection','A controlled simulated failure used to check a response.'],['Hysteresis','Different stop and resume limits retaining state between them.'],['Cleanup','Release and stop requests during exit.'],['Regression','Checking prior behavior after a code change.']],
 ['distance ≤25 cm →STOP','distance ≥35 cm →FORWARD','25–35 cm retains state; invalid/emergency →STOP'],
 [['Use explicit policy precedence','The pure policy validates type, range and time, then checks emergency before ordinary movement. Accept distances2–400 cm and age0–0.5 s inclusive. Stop at25 cm or closer, resume at35 cm or farther, and retain state in the band. These are teaching limits; physical thresholds must be derived from measured motion and uncertainty. The initial state isSTOP.'],['Exercise the orchestration','The runner starts with a stop request, evaluates returning synthetic samples, records the requested state, and always requests STOP and close in a finally block. A synthetic sensor RuntimeError produces a sensor-fault stop and propagates to the caller, preserving evidence rather than pretending the run succeeded. Apply exceptions are also exercised with a one-shot failing fake actuator.'],['State the tested limits','The simulation tests policy decisions and software cleanup when calls return or raise. It does not test a hung call, hardware braking, electrical faults, an operating-system crash or failure of the stop method itself. A real system needs independent protection appropriate to its risk. Read the exact lab and retain the trace with the tested source version.']],
 {title:'Controller fault path',nodes:['Sample or exception','Validate and decide','Apply or fault stop','Finally stop and close'],feedback:'Exceptions are re-raised after cleanup; hanging calls and failed physical stop mechanisms need separate protection'},
 [['State history','60,30,25,30,35 cm gives FORWARD,FORWARD,STOP,STOP,FORWARD. The same30 cm value has different results depending on state.'],['Stale clearance','100 cm with age0.7 s givesSTOP. Hysteresis cannot override a freshness fault.'],['Fault injection','Raise RuntimeError during synthetic acquisition. The test expects it to propagate and checks that the fake’s last command isSTOP and closed=True.']],
 ['Run the displayed standard-library controller_lab.py.','Verify20 policy cases plus sequence, sensor-fault and actuator-fault cleanup checks.','Inspect the exported trace and identify every reason field.','Add a scenario without changing the policy and explain its expected transition.'],
 'The program passes20 policy tests and all orchestration checks; the6-sample trace is followed by a finalSTOP request. Faults are labeled simulated, not measured hardware outcomes.',
 ['Why re-raise an exception after requesting stop?','What happens if stop itself fails?','Explain why a blocked sensor call is outside this lab’s tested contract.'],
 'try/finally is essential software cleanup but cannot guarantee action after power loss, process termination or an uninterruptible hardware call.',
 [['At25 cm, FORWARD becomes?',['STOP','FORWARD','REVERSE'],0,'The stop boundary is inclusive.'],['STOP at30 cm becomes?',['FORWARD','STOP','TURN'],1,'Retain state inside hysteresis band.'],['A stale100 cm reading gives?',['FORWARD','REVERSE','STOP'],2,'Freshness takes priority.'],['Injected sensor exception should be?',['Preserved after cleanup','Hidden as success','Used as clearance'],0,'Stop and retain failure evidence.'],['Does finally guarantee physical stop after a freeze?',['Yes','No','Only on a desktop'],1,'A process freeze can prevent cleanup.']],{code:'controller',graph:true}),
make('robot-logs-replay-and-regression','Robot Logs, Replay, and Regression',
 ['Separate requested commands from observed outcomes in logs.','Replay synthetic events deterministically.','Explain what changing a policy requires retesting.'],
 [['Replay','Feeding recorded events into a policy again.'],['Trace','An ordered record of execution events.'],['Reason code','A category explaining a decision or fault.'],['Observed outcome','A measured physical result rather than a request.']],
 ['sample count = valid samples + invalid samples','trace = startup + samples + cleanup','same inputs + same policy →same decisions'],
 [['Log the decision boundary','A useful record includes sequence, acquisition and evaluation time, raw distance with units, previous state, requested state, reason and provenance. Keep observed hardware outcome in a separate field rather than copying a command into it. The portable trace records observed_outcome="not_measured" for every command.'],['Replay without live hardware','Feed a frozen synthetic scenario into the same pure policy and compare states. For faithful hardware replay, preserve the original evaluation times, emergency flags, conversion rules and policy version. A timestamp alone is not enough if you change the clock convention. Recording only accepted rows hides exactly the faults a regression needs.'],['Compare after a change','If you change thresholds, freshness limit, range or adapter behavior, rerun policy boundaries and orchestration failures. A changed expected result needs a reason linked to the requirement. Do not change a failing expected value simply to make tests green. Preserve the previous trace and identify the source version.']],
 {title:'Evidence and replay loop',nodes:['Raw event trace','Policy version','Deterministic replay','Compared decisions'],feedback:'Commands and measured outcomes stay separate; failed/invalid events remain available for regression'},
 [['Trace accounting','The nominal lab has one startup request,6 sample requests and one final cleanup request:8 recorded commands. It does not claim8 physical movements.'],['Replay identity','Running the fixed6-sample scenario twice produces the same requested state sequence. The test compares states and reasons, not human wall-clock timestamps.'],['Regression trigger','Changing the resume threshold from35 to40 cm changes the35 cm test. Document why and update all related lesson/test evidence rather than quietly altering one assertion.']],
 ['Run the integrated lab and inspect robot_trace.json.','Count startup, samples and cleanup separately.','Replay the scenario and compare states/reasons.','Write one justified policy-change proposal and name the tests it affects.'],
 'The trace contains8 commands with not_measured outcomes, retains invalid-sample evidence, and deterministic replay agrees under the same policy version.',
 ['Why retain a missing-distance record?','Which fields are needed to replay freshness?','Explain why command counts are not collision-free trial counts.'],
 'A pretty command chart is not evidence of physical success. Label the source, simulation status and unmeasured outcomes beside the graph.',
 [['The nominal trace contains how many commands?',['8','6','1'],0,'Startup+6 samples+cleanup=8.'],['Requested FORWARD means wheels certainly moved?',['Yes','No','Only with JSON'],1,'Measure the outcome separately.'],['Same policy and scenario should give?',['Random states','A hardware certificate','Same decisions'],2,'Deterministic replay checks logic.'],['Should invalid events remain in a regression trace?',['Yes','No','Only the last one'],0,'Faults are valuable evidence.'],['A changed expected result needs?',['A documented requirement reason','Only a greener screenshot','No explanation'],0,'Explain the behavior change.']]),
make('portfolio-pi-robot-control-system','Portfolio Project: Pi Robot Control System',
 ['Produce a modular robot-control evidence package.','Distinguish simulation, sensor-only and motion milestones.','Plan a supervised obstacle-stopping prototype.'],
 [['Integration dossier','A package connecting requirements, interfaces and test evidence.'],['Acceptance gate','A criterion that must pass before advancing.'],['Hardware milestone','A bounded stage validated on actual equipment.'],['Operating envelope','Conditions under which tested behavior is claimed.']],
 ['rubric=20+20+20+30+10=100','project≥80/100; resolve critical defects','policy evidence ≠physical motion qualification'],
 [['Define the project precisely','Build a simulated Pi robot-control system with optional supervised hardware follow-up. The beginner movement policy stops for obstacles rather than automatically turning or reversing. This is a foundation for a later obstacle-avoiding robot, not a completed navigation system. Use the tested controller and mocked GPIO exercise as distinct evidence sets.'],['Seven deliverables','Submit1) operating-envelope requirements;2) board/driver/sensor specification and pin table;3) power, level-conversion and adapter architecture;4) timing/clearance calculations;5) versioned code with mock and policy results;6) raw trace, graph, replay and fault report;7) limitations and next gated milestone. Use actual verified specifications for physical claims; mark proposed or unknown values explicitly.'],['Rubric and gates','Requirements20; architecture and interface review20; calculations20; reproducible tests and fault evidence30; reflection/next milestone10. Reach80/100 and correct all critical control/electrical issues before hardware approval. Gate1 is the simulation. Gate2 is reviewed sensor-only measurement. Gate3 is secured-wheel direction/stop verification. Gate4 is a supervised low-speed track with measured latency, braking and clearance.'],['Choose the next step from evidence','A passing simulation with unverified driver limits should move to specification review, not powered driving. A verified sensor interface with reversed wheel direction needs actuator correction before a track test. Intelligent Robotics is the next course and remains in development. Its perception/planning work builds on a validated stop policy rather than replacing it.']],
 {title:'Portfolio release gates',nodes:['Simulation and replay','Reviewed sensor-only test','Secured-wheel verification','Supervised track evidence'],feedback:'Each physical gate requires its own measured evidence; browser completion is self-recorded learning progress'},
 [['Score the dossier','18+18+16+27+9=88/100. A critical unprotected5 V GPIO signal still blocks physical approval regardless of score.'],['Honest demonstration','Show the fake command trace and state clearly that observed_outcome is not_measured. Then show separate sensor-only results if you actually collected them.'],['Next milestone','If all portable tests pass but the driver truth table is unknown, the next task is identify the exact driver and confirm compatible stop/direction states with a reviewed plan.']],
 ['Assemble all seven deliverables.','Run both labs and retain their original outputs.','Self-score the five rubric categories with evidence references.','Describe the next physical gate and its pass/fail test without claiming it already passed.'],
 'The dossier reaches80/100, portable/mock tests pass, simulation and physical claims are clearly distinguished, and unresolved critical hardware issues are not presented as approved.',
 ['State the largest unverified physical assumption.','Explain why the project does not yet auto-avoid by turning.','Write a stop-distance test within a stated operating envelope.'],
 'Course completion is a self-recorded learning result, not an independently verified hardware safety credential or autonomous-navigation certification.',
 [['The beginner project handles close obstacles by?',['Stopping','Blind reversing','Unsupervised full-speed turning'],0,'Avoid unseen-space motion.'],['Which gate comes before motion?',['Only a quiz','Sensor/interface and secured-wheel checks','A logo review'],1,'Validate subsystems first.'],['Which evidence can claim physical motion success?',['Fake commands','A source filename','Measured supervised outcomes'],2,'Simulation does not measure hardware.'],['An88-point project with a critical voltage error is?',['Blocked until corrected','Automatically safe','Ready for any speed'],0,'A rubric cannot override critical defects.'],['Next robotics course is?',['Intelligent Robotics','Repeat setup only','No further validation'],0,'It follows validated interfaces and stop control.']],{duration:'2–3 hours'})
];
export const gpioLab=`"""GPIO Zero2.0.1 mock-only exercise. No physical pins selected."""
from gpiozero import LED, Button
from gpiozero.pins.mock import MockFactory
factory = MockFactory()
with LED(17, pin_factory=factory) as led, Button(27, pin_factory=factory, bounce_time=None) as button:
    assert not led.is_lit
    led.on()
    assert led.is_lit
    assert factory.pin(17).state
    led.off()
    assert not led.is_lit
    assert not factory.pin(17).state
    assert not button.is_pressed
    factory.pin(27).drive_low()
    assert button.value == 1
    factory.pin(27).drive_high()
    assert not button.is_pressed
assert led.closed
assert button.closed
print("PASS:10 mock assertions; no physical wiring tested.")
`;
export function piDecision(distance,age,previous,emergency=false){
 if(emergency||!['STOP','FORWARD'].includes(previous)||!Number.isFinite(distance)||distance<2||distance>400||!Number.isFinite(age)||age<0||age>0.5)return 'STOP';
 if(distance<=25)return 'STOP';if(distance>=35)return 'FORWARD';return previous;
}
export const controllerLab=`"""Portable simulation: no GPIO, real motors or physical stop claims."""
import json
import math
from dataclasses import dataclass

@dataclass(frozen=True)
class Sample:
    distance_cm: object
    acquired_s: object
    emergency: bool = False

def number(value):
    return isinstance(value, (int, float)) and not isinstance(value, bool) and math.isfinite(value)

def decide(sample, now, previous="STOP"):
    if not isinstance(sample.emergency, bool):
        return "STOP", "bad_emergency_flag"
    if sample.emergency:
        return "STOP", "emergency"
    if previous not in ("STOP", "FORWARD"):
        return "STOP", "bad_state"
    if not number(sample.distance_cm) or not 2 <= sample.distance_cm <= 400:
        return "STOP", "bad_distance"
    if not number(sample.acquired_s) or not number(now):
        return "STOP", "bad_clock"
    age = now - sample.acquired_s
    if age < 0 or age > 0.5:
        return "STOP", "stale_or_future"
    if sample.distance_cm <= 25:
        return "STOP", "obstacle"
    if sample.distance_cm >= 35:
        return "FORWARD", "clear"
    return previous, "hysteresis"

class FakeMotor:
    def __init__(self, fail_once=False):
        self.trace = []
        self.closed = False
        self.fail_once = fail_once
    def stop(self, reason):
        self.trace.append(dict(state="STOP", reason=reason, provenance="simulated", observed_outcome="not_measured"))
    def apply(self, state, reason, metadata):
        if self.fail_once:
            self.fail_once = False
            raise RuntimeError("injected actuator fault")
        self.trace.append(dict(state=state, reason=reason, provenance="simulated", observed_outcome="not_measured", **metadata))
    def close(self):
        self.closed = True

def json_safe(value):
    if value is None or isinstance(value, (str, bool)):
        return value
    if number(value):
        return value
    return repr(value)

def run(events, motor):
    previous = "STOP"
    try:
        motor.stop("startup")
        for event in events:
            if isinstance(event, Exception):
                raise event
            sample, now = event
            before = previous
            previous, reason = decide(sample, now, previous)
            metadata = dict(sequence=len(motor.trace), raw_distance_cm=json_safe(sample.distance_cm),
                            acquired_s=json_safe(sample.acquired_s), evaluated_s=json_safe(now),
                            previous_state=before, emergency=json_safe(sample.emergency))
            motor.apply(previous, reason, metadata)
    except Exception:
        motor.stop("fault")
        raise
    finally:
        try:
            motor.stop("shutdown")
        finally:
            motor.close()
    return motor.trace

cases = [
    (25,0,"FORWARD",False,"STOP"), (35,0,"STOP",False,"FORWARD"),
    (30,0,"STOP",False,"STOP"), (30,0,"FORWARD",False,"FORWARD"),
    (100,0.7,"FORWARD",False,"STOP"), (100,0,"FORWARD",True,"STOP"),
    (None,0,"FORWARD",False,"STOP"), (float("nan"),0,"FORWARD",False,"STOP"),
    (float("inf"),0,"FORWARD",False,"STOP"), (True,0,"FORWARD",False,"STOP"),
    ("30",0,"FORWARD",False,"STOP"), (1.9,0,"FORWARD",False,"STOP"),
    (400.1,0,"FORWARD",False,"STOP"), (2,0,"STOP",False,"STOP"),
    (400,0.5,"STOP",False,"FORWARD"), (100,0.5001,"STOP",False,"STOP"),
    (100,-0.1,"FORWARD",False,"STOP"), (100,float("nan"),"FORWARD",False,"STOP"),
    (100,0,"UNKNOWN",False,"STOP"), (805,0,"FORWARD",False,"STOP"),
]
for distance, age, previous, emergency, expected in cases:
    assert decide(Sample(distance, -age, emergency), 0, previous)[0] == expected
for acquired, now in [(None,0),(True,0),(0,None),(0,float("inf"))]:
    assert decide(Sample(100, acquired), now)[0] == "STOP"

events = [(Sample(value, index*0.1), index*0.1) for index,value in enumerate([60,30,25,30,35,None])]
expected = ["STOP","FORWARD","FORWARD","STOP","STOP","FORWARD","STOP","STOP"]
motor = FakeMotor()
trace = run(events, motor)
assert [row["state"] for row in trace] == expected
assert motor.closed
assert all(row["observed_outcome"] == "not_measured" for row in trace)
assert run(events, FakeMotor()) == trace
for fault_events, target in [([RuntimeError("injected sensor fault")], FakeMotor()), (events, FakeMotor(fail_once=True))]:
    try:
        run(fault_events, target)
    except RuntimeError:
        pass
    else:
        raise AssertionError("fault must propagate")
    assert target.closed and target.trace[-1]["state"] == "STOP"
    assert any(row["reason"] == "fault" for row in target.trace)
with open("robot_trace.json", "w", encoding="utf-8") as f:
    json.dump(trace, f, indent=2, allow_nan=False)
with open("robot_trace.json", encoding="utf-8") as f:
    assert json.load(f) == trace
print("PASS:20 policy cases,4 clock guards,sequence,replay and2 fault-cleanup tests.")
print("Command trace:", " -> ".join(expected))
print("Wrote robot_trace.json with8 simulated commands; physical outcomes not measured.")
`;
