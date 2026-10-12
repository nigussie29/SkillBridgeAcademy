export const courseBase = '/library/robotics/robotics-foundations';
export const roboticsSources = [
  ['Raspberry Pi GPIO electrical guidance', 'https://www.raspberrypi.com/documentation/computers/raspberry-pi.html'],
  ['GPIO Zero distance sensor and level conversion', 'https://gpiozero.readthedocs.io/en/stable/api_input.html#distancesensor'],
  ['GPIO Zero robot and motor recipes', 'https://gpiozero.readthedocs.io/en/stable/recipes.html#robot']
];
export const foundationsLessons = [
{
 slug: 'robot-systems-and-feedback', title: 'Robot Systems and Feedback', duration: '60–75 minutes',
 objectives: ['Distinguish sensing, decision making, actuation, and power.', 'Explain open-loop and closed-loop control.', 'Write measurable requirements for a mobile robot.'],
 vocabulary: [['Sensor','A device that measures a physical property.'],['Actuator','A device that converts supplied energy into physical action.'],['Controller','Logic that selects actions from goals and observations.'],['Feedback','Measured consequences returned to the controller.']],
 formulas: ['error = target − measurement', 'success rate = successful trials / total trials × 100%'],
 sections: [
 ['The robot as a system','A robot is more than its computer. A mobile robot needs a structure, a power path, sensors, a controller, and actuators. The sensor sends information; the motor driver supplies controlled electrical power to the motors. Keeping those paths separate helps diagnose a robot that senses correctly but cannot move.'],
 ['Open-loop and closed-loop behavior','Driving for two seconds without measuring the outcome is open-loop. It can work on a predictable surface but will drift when battery voltage or wheel friction changes. Measuring distance and stopping at a threshold closes a feedback loop. Feedback reduces some uncertainty, but a faulty measurement can still produce a faulty decision.'],
 ['A requirement can be tested','“Avoid obstacles well” is too vague. A classroom requirement could be: on a flat indoor test track, at a measured speed no greater than 0.2 m/s, detect a rigid obstacle and stop with at least 10 cm clearance in ten trials. Define the surface, object, speed, and pass criterion before building.']
 ],
 diagram: {title:'Information and energy are different paths', nodes:['Distance sensor','Controller','Motor driver','Wheels'], feedback:'New position changes the next sensor observation'},
 examples: [
 ['Classify components','An ultrasonic sensor measures distance; Python compares it with a threshold; an H-bridge powers two motors; a battery supplies energy. The battery is a power source, not a distance sensor.'],
 ['Compute control error','Target clearance = 30 cm and measured clearance = 22 cm. Error = 30 − 22 = 8 cm. The robot is closer than the target, so moving forward would increase the problem.'],
 ['Evaluate a prototype','Nine acceptable stops out of ten trials give 9/10 × 100 = 90%. Report the failed trial too; a percentage alone hides how dangerous that failure was.']
 ],
 lab: ['Draw your robot with separate arrows for information and power.', 'Annotate one measurable input and one commanded output.', 'Write a ten-trial test with a stop-clearance requirement.', 'Swap one assumed sensor reading for an invalid reading and explain the required response.'],
 pass: 'Your diagram contains all five subsystems, separates motor power from GPIO signals, and your test specifies measurable conditions and a failure response.',
 practice: ['Classify a camera, wheel encoder, battery, and servo.', 'Explain why a timed turn changes when wheel friction changes.', 'Create a measurable requirement for carrying a small object.'],
 mistake: 'A controller command is not proof of physical movement. An encoder or external measurement is needed to verify the outcome.',
 quiz: [
 ['Which component converts energy into movement?', ['Actuator','Sensor','Data log'],0,'Motors and servos are actuators.'],
 ['Which action uses feedback?', ['Drive for exactly two seconds','Stop when measured clearance reaches a limit','Assume the floor is unchanged'],1,'A measurement changes the decision.'],
 ['What is the error for a 30 cm target and 22 cm measurement?', ['−8 cm','52 cm','8 cm'],2,'Target minus measurement is 8 cm.'],
 ['What belongs in a testable requirement?', ['Only a slogan','Conditions and a numerical pass criterion','Only a photograph'],1,'Conditions make the result reproducible.'],
 ['What does a motor command prove?', ['The wheel moved as expected','The command was requested','The battery is full'],1,'Actuation must be measured separately.']
 ]
},
{
 slug: 'safe-power-and-electrical-design', title: 'Safe Power and Electrical Design', duration: '75–90 minutes',
 objectives: ['Calculate current, power, and a resistor-divider voltage.', 'Separate logic signals from motor power.', 'Explain why a 5 V echo signal needs level conversion.'],
 vocabulary: [['Voltage','Electrical potential difference, measured in volts.'],['Current','Flow of charge, measured in amperes.'],['Resistance','Opposition to current, measured in ohms.'],['Common ground','A shared reference potential for connected signal circuits.']],
 formulas: ['V = I × R', 'P = V × I', 'Vout = Vin × Rbottom / (Rtop + Rbottom)'],
 sections: [
 ['Plan before connecting','Work with low-voltage educational equipment. Disconnect power before rewiring, verify polarity, and inspect exposed conductors. Use a suitable regulated supply for the Pi and a motor supply sized for the motor driver and motor stall current. GPIO sends logic signals; it must not directly power a motor.'],
 ['Logic-level compatibility','Raspberry Pi GPIO uses 3.3 V logic. A standard HC-SR04 can return a 5 V echo, so direct connection can damage the input. Use a properly designed voltage divider or level shifter; verify the actual voltage before connecting the Pi input. The HC-SR04P is a different variant: confirm its specifications rather than assuming every similar-looking sensor is compatible.'],
 ['Signals need a reference','For a non-isolated motor driver, connect controller ground and driver signal ground according to the driver documentation. Separate power rails do not imply unrelated ground references. Never connect a motor supply positive rail to a GPIO signal. Check the driver truth table and voltage limits before using it.'],
 ['Ideal calculation versus verification','A resistor-divider calculation is a starting point. Supply tolerance, resistor tolerance, and loading affect the output. Use margin below the GPIO maximum and measure with appropriate test equipment. This foundation lesson uses calculations and a paper diagram; physical wiring belongs in the later hardware track.']
 ],
 diagram: {title:'Power separation: signals control the driver',nodes:['Pi: logic signal','Driver input','Motor power stage','Motor'],feedback:'Motor supply powers the driver stage; ground is the signal reference'},
 examples: [
 ['Ohm’s law','A 1,000 Ω resistor across 3.3 V carries I = 3.3/1000 = 0.0033 A = 3.3 mA in the ideal model. This is not a blanket GPIO current rating.'],
 ['Divider with margin','With Vin = 5 V, Rtop = 2.2 kΩ and Rbottom = 3.3 kΩ, Vout = 5 × 3.3/(2.2 + 3.3) = 3.0 V nominal. Check tolerances and actual voltage before use.'],
 ['Power budget','A 6 V motor drawing 0.5 A uses 3 W. Two such motors use 6 W while running; startup/stall demand can be much higher and must come from their specifications.']
 ],
 lab: ['Keep all circuits unpowered for this paper exercise.', 'Draw separate Pi and motor power rails and the required signal ground reference.', 'Calculate a nominal 5 V to 3 V divider.', 'List the motor rated voltage, stall current, driver rating, and supply rating you would need before assembly.'],
 pass:'The drawing has no motor powered by GPIO, no direct 5 V echo-to-GPIO connection, and a complete list of component limits to verify.',
 practice:['Compute 6 V × 0.8 A.', 'Explain why motor startup can reset a shared supply.', 'Explain why a divider must be measured before it protects a Pi input.'],
 mistake:'A 5 V power pin is not a 5 V-tolerant GPIO input. Power rails and logic inputs have different electrical contracts.',
 quiz:[
 ['What is the Raspberry Pi GPIO logic voltage?', ['3.3 V','6 V','12 V'],0,'GPIO uses 3.3 V logic.'],
 ['Can a GPIO pin directly supply a drive motor?', ['Yes, always','No; use a suitable driver and motor supply','Only when Python is used'],1,'GPIO controls the driver, not the motor power.'],
 ['What is 6 V × 0.5 A?', ['0.5 W','12 W','3 W'],2,'P = VI = 3 W.'],
 ['What should happen before rewiring?', ['Disconnect power','Increase speed','Disable logging'],0,'Unpowered rewiring reduces accidental shorts.'],
 ['A standard HC-SR04 echo usually needs what?', ['Direct 5 V GPIO input','Verified level conversion','A motor connection'],1,'Protect the 3.3 V input from the echo voltage.']
 ]
},
{
 slug:'mechanics-wheels-and-motion',title:'Mechanics, Wheels, and Motion',duration:'60–75 minutes',
 objectives:['Convert wheel rotation into approximate travel.', 'Calculate ideal differential-drive speed and turning rate.', 'Identify slip and mechanical sources of error.'],
 vocabulary:[['Chassis','The supporting frame of the robot.'],['Torque','Rotational effect of a force.'],['Wheelbase','Here, the distance between left and right wheel contact lines.'],['Slip','Wheel motion that does not fully translate into ground travel.']],
 formulas:['circumference = 2πr','v = (vright + vleft) / 2','angular rate = (vright − vleft) / wheelbase'],
 sections:[
 ['Start with geometry','A wheel with radius r travels one circumference per revolution under ideal rolling. Keep radius and distance in compatible units. Radius is half the diameter: confusing them doubles the predicted travel. A caster supports the chassis but can add friction and alter turning.'],
 ['Differential drive','Two independently driven wheels steer by changing their speeds. Equal speeds give straight motion in the ideal model. Unequal speeds curve the path; equal and opposite speeds rotate the robot about its center. These equations describe an ideal planar robot, not a guarantee on a carpet or uneven floor.'],
 ['Measure the real system','Payload, wheel slip, uneven alignment, and battery state change performance. Mark a short test track and compare predicted distance with measured distance. Record surface and payload so another learner can repeat the experiment. Lift wheels for initial motor direction tests in the later hardware course.']
 ],diagram:{title:'Differential-drive components',nodes:['Left speed','Chassis center','Right speed','Ground travel'],feedback:'Different wheel speeds change heading; slip changes actual travel'},
 examples:[['Wheel distance','Radius 0.03 m gives 2π × 0.03 ≈ 0.1885 m per revolution. Ten ideal revolutions produce about 1.885 m.'],['Straight speed','Left and right speeds are both 0.2 m/s. Center speed = (0.2 + 0.2)/2 = 0.2 m/s and angular rate is zero.'],['Turning','Left = 0.1 m/s, right = 0.3 m/s, and wheelbase = 0.2 m. Center speed = 0.2 m/s; angular rate = (0.3 − 0.1)/0.2 = 1 rad/s.']],
 lab:['Measure or specify wheel radius and wheelbase.', 'Predict travel for five revolutions.', 'Use a toy wheel or a paper model to compare circumference and diameter.', 'Make a table of equal, unequal, and opposite wheel-speed commands with predicted behavior.'],
 pass:'All units are consistent, radius is distinguished from diameter, and your table correctly predicts straight, curved, and rotating motion.',
 practice:['Predict travel for radius 4 cm and three revolutions.', 'Explain a curved path despite equal motor commands.', 'State one limitation of the ideal rolling model.'],
 mistake:'Equal PWM duty cycles do not guarantee equal ground speeds. Mechanical and electrical differences require measurement.',
 quiz:[['Circumference uses which expression?',['πr','2πr','r/2'],1,'One revolution covers 2πr.'],['Equal wheel speeds ideally produce what?',['Straight motion','A spin','No motion'],0,'The ideal heading change is zero.'],['What is average speed for 0.1 and 0.3 m/s?',['0.4 m/s','0.1 m/s','0.2 m/s'],2,'Average the two wheel speeds.'],['Which can invalidate ideal travel?',['Wheel slip','Consistent units','A recorded radius'],0,'Slip breaks ideal rolling.'],['If diameter is 6 cm, radius is?',['12 cm','3 cm','6 cm'],1,'Radius is half of diameter.']]
},
{
 slug:'distance-sensing-and-measurement',title:'Distance Sensing and Measurement',duration:'75–90 minutes',
 objectives:['Convert echo time into distance.', 'Distinguish precision, bias, outliers, and timeouts.', 'Interpret a distance graph and apply a fail-safe rule.'],
 vocabulary:[['Echo time','Round-trip travel time of the emitted pulse.'],['Bias','A systematic measurement offset.'],['Outlier','A reading unusually far from nearby observations.'],['Timeout','No valid response within a specified time limit.']],
 formulas:['distance = sound speed × echo time / 2','343 m/s × t × 100 = round-trip centimetres','absolute error = |measured − reference|'],
 sections:[
 ['Time of flight','An ultrasonic pulse travels to a reflecting object and back. Divide total travel by two to obtain one-way distance. For a simplified room-temperature example use sound speed 343 m/s. Temperature, target angle, surface material, and nearby objects affect real readings.'],
 ['Validate before filtering','Reject missing, non-finite, stale, and out-of-range readings before a median or average. Do not turn a timeout into a huge distance: that would tell the robot to advance when it has no evidence of clearance. A median reduces isolated spikes, but it cannot make a stale reading current or correct every systematic bias.'],
 ['Use a reference experiment','Place a rigid target at several known distances, record repeated measurements, and compare each with the reference. Plot raw measurements over time and show missing data as missing. A graph should identify units and the decision threshold, not simply connect unknown values.']
 ],diagram:{title:'Measurement quality gate',nodes:['Echo duration','Unit conversion','Validity check','Distance decision'],feedback:'A missing or stale reading requests STOP, not “clear path”'},
 graph:true,
 examples:[['Echo conversion','Echo time = 0.002 s. Distance = 343 × 0.002/2 = 0.343 m = 34.3 cm.'],['Median filter','Readings 20, 21, 200, 19, 20 cm sort to 19, 20, 20, 21, 200. The median is 20 cm; the mean is 56 cm, badly affected by the spike.'],['Bias','At a 50 cm reference, readings 53, 53, 54 cm are consistent but biased high. Repeatability does not prove accuracy.']],
 lab:['Create a table containing 60, 50, 40, 30, 25, 20, and a missing value.', 'Plot the valid distances and a 25 cm threshold.', 'Calculate 2 ms echo distance and the five-reading median.', 'For each missing or stale reading, record STOP and explain why filtering cannot replace validation.'],
 pass:'The echo calculation is 34.3 cm, the median is 20 cm, and invalid or stale data never authorizes forward movement.',
 practice:['Convert 1 ms echo time to centimetres.', 'Explain why an angled target can cause a timeout.', 'Distinguish a repeated bias from a single outlier.'],mistake:'A large numeric reading is not automatically a clear path; it may be outside the configured sensor range.',
 quiz:[['Why divide echo travel by two?',['It is a round trip','There are two wheels','Voltage is doubled'],0,'The pulse travels out and back.'],['What is the median of 19, 20, 20, 21, 200?',['56','200','20'],2,'The middle sorted reading is 20.'],['What should a missing reading authorize?',['Forward','STOP','Full speed turn'],1,'No valid clearance means no forward motion.'],['Consistent readings can still have what?',['Bias','Perfect accuracy','No error'],0,'Precision and accuracy differ.'],['At 343 m/s, 2 ms echo gives?',['68.6 cm','34.3 cm','343 cm'],1,'343 × 0.002 / 2 × 100 = 34.3.']]
},
{
 slug:'actuators-drivers-and-speed',title:'Actuators, Drivers, and Speed',duration:'60–75 minutes',
 objectives:['Explain an H-bridge and PWM.', 'Distinguish duty cycle from measured speed.', 'Specify startup, braking, and emergency-stop tests.'],
 vocabulary:[['H-bridge','A switching circuit that controls motor polarity.'],['PWM','Pulse-width modulation: repeated on/off switching with adjustable duty.'],['Duty cycle','Fraction of one switching period spent on.'],['Stall current','Current when a powered motor cannot rotate.']],
 formulas:['duty = on time / period × 100%','frequency = 1 / period','ideal average voltage ≈ duty fraction × supply voltage'],
 sections:[['Control the power stage','The motor driver accepts logic inputs and switches a separate motor supply. Direction depends on the specific driver truth table and motor wiring. Know the permitted input states; braking, coasting, and standby differ between drivers. A software stop must be verified physically.'],['PWM is an input, not a speed reading','At 40% duty, an ideal 6 V supply has a simplified average of 2.4 V. This is not a full motor model: torque, losses, loading, startup friction, and driver drops affect actual motion. Low duty may fail to start a motor. Measure speed rather than labeling a duty slider in metres per second.'],['Test conservatively','Before moving on the ground, verify direction with wheels supported clear of contact and secure the chassis. Use a compatible driver, adequate supply, and a reachable power disconnect. Ramp commands gradually and stop on sensor or software faults. Never deliberately stall a motor for a classroom test without a rated test setup.']],
 diagram:{title:'Command versus measured outcome',nodes:['Duty command','Motor driver','Motor rotation','Encoder reading'],feedback:'Measured speed can be compared with the target'},
 examples:[['Duty calculation','On for 2 ms in a 5 ms period gives 2/5 = 0.4 = 40% duty.'],['Frequency','A 5 ms period equals 0.005 s; frequency = 1/0.005 = 200 Hz. Choose an actual driver frequency from its documentation.'],['Simplified voltage','At 40% duty and 6 V supply, ideal average voltage ≈ 0.4 × 6 = 2.4 V. Do not infer speed without calibration.']],
 lab:['Use a paper waveform with a 5 ms period and 2 ms on time.', 'Compute duty, frequency, and simplified average voltage.', 'Write a direction-verification procedure for a future hardware build.', 'Define fault-stop and accessible power-disconnect checks.'],pass:'The calculations give 40%, 200 Hz, and 2.4 V, and your procedure distinguishes commanded duty from measured speed.',
 practice:['Compute duty for 1 ms on in 4 ms.', 'Explain why one motor starts later than another.', 'Describe coasting versus braking without assuming a driver truth table.'],mistake:'Do not equate 50% duty with 50% of maximum speed; a real motor response is load dependent.',
 quiz:[['PWM duty is what?',['On-time fraction','Wheel radius','Battery age'],0,'Duty is on time divided by period.'],['2 ms on / 5 ms period equals?',['25%','40%','60%'],1,'2/5 = 0.4.'],['A 5 ms period corresponds to?',['5 Hz','20 Hz','200 Hz'],2,'1/0.005 = 200.'],['What determines actual speed?',['Duty alone','Load and hardware plus command','Text label'],1,'Real speed requires measurement.'],['Where is motor power supplied?',['GPIO signal directly','A suitable motor supply through the driver','The sensor echo'],1,'The driver switches motor supply power.']]
},
{
 slug:'state-machines-and-fail-safe-control',title:'State Machines and Fail-Safe Control',duration:'90 minutes',
 objectives:['Implement explicit STOP and FORWARD states.', 'Use hysteresis and data freshness.', 'Test boundary, invalid, and emergency-stop inputs.'],
 vocabulary:[['State','A named operating condition with defined behavior.'],['Transition','A change from one state to another.'],['Hysteresis','Different enter and leave thresholds to reduce oscillation.'],['Watchdog','A mechanism that detects missed updates or stalled execution.']],
 formulas:['STOP if distance ≤ 25 cm','Resume only if distance ≥ 35 cm','stale if reading age > 0.5 seconds'],
 sections:[['Start with a small controller','A conservative foundation controller has STOP and FORWARD states. It does not turn or reverse automatically: one front sensor cannot prove side or rear clearance. After a close obstacle, remain stopped until fresh evidence shows enough forward clearance. The later robot project can add supervised scanning and turning.'],['Hysteresis creates memory','Stopping at 25 cm and resuming at 35 cm prevents repeated switching near a single threshold. Between these values, retain the previous state. The thresholds are teaching examples, not a certified safe distance. Real clearance must exceed reaction travel, braking travel, and uncertainty.'],['Faults take priority','Emergency stop, invalid data, stale data, and an unhealthy controller request STOP before normal threshold logic. Software can request a stop but cannot guarantee power removal if its process freezes. A physical disconnect and, for a real system, an independent watchdog address different failure modes.'],['Make the logic testable','Keep decision logic as a pure function with no GPIO operations. Feed recorded scenarios into it on any computer. Only later connect the tested output to a hardware adapter that defaults to stopped and issues stop during cleanup. Simulation verifies policy, not electrical wiring or physical stopping distance.']],
 diagram:{title:'State transition contract',nodes:['Fresh distance ≥35','FORWARD','Distance ≤25 or fault','STOP'],feedback:'25–35 cm retains state; invalid data and emergency stop override every state'},
 simulator:true,
 examples:[['Close obstacle','State FORWARD and distance 25 cm gives STOP. The equality boundary belongs in the stop condition.'],['Hysteresis','State STOP at 30 cm remains STOP; state FORWARD at 30 cm remains FORWARD. The previous state matters in the band.'],['Stale reading','Distance 100 cm with age 0.7 s gives STOP because it exceeds the 0.5 s freshness limit. A large stale distance is not clearance.']],
 lab:['Run the displayed Python on a computer without hardware.', 'Confirm every embedded assertion passes.', 'Change the near-obstacle sequence and explain every transition.', 'Use the simulator to check 25 cm, 30 cm, 35 cm, timeout, stale data, and emergency stop.'],
 pass:'All embedded assertions pass; the simulator and Python agree at both thresholds, in the hysteresis band, and for faults.',
 practice:['Explain the different result at 30 cm for two previous states.', 'Add a test for negative distance.', 'Explain why a frozen process needs protection beyond a pure function.'],mistake:'A state machine is not itself a safety certification. It only handles the failure modes explicitly modeled.',
 quiz:[['Which condition takes priority?',['A large distance','Emergency stop','Previous FORWARD state'],1,'Emergency stop overrides normal logic.'],['STOP at 30 cm should become?',['FORWARD','TURN','STOP'],2,'It has not reached the 35 cm resume threshold.'],['FORWARD at 25 cm should become?',['STOP','FORWARD','REVERSE'],0,'At the stop threshold, stop.'],['A 0.7 s old reading is?',['Fresh','Stale under this policy','Automatically correct'],1,'0.7 exceeds the 0.5 s limit.'],['What does the simulation verify?',['All hardware safety','The modeled decision policy','Motor wiring'],1,'Physical behavior needs separate testing.']]
},
{
 slug:'testing-logs-and-stopping-distance',title:'Testing, Logs, and Stopping Distance',duration:'75–90 minutes',
 objectives:['Calculate a simplified stopping-clearance budget.', 'Design repeatable tests and fault injections.', 'Write an honest evidence log.'],
 vocabulary:[['Latency','Delay between an event and the resulting action.'],['Braking distance','Travel while slowing after the stop action begins.'],['Fault injection','Deliberately simulating a failure to test the response.'],['Regression test','A repeated check that a change did not break expected behavior.']],
 formulas:['reaction distance = speed × latency','ideal braking distance = speed² / (2 × deceleration)','clearance budget = reaction + braking + uncertainty margin'],
 sections:[['Budget the distance','A sensor threshold must leave room for movement during processing delay and braking. For a simple constant-deceleration model, braking distance is v²/(2a). The model omits slip and changing deceleration, so measure physical stops and add a justified uncertainty margin. Doubling speed quadruples ideal braking distance.'],['Test the boundaries','A useful controller test matrix includes just below, exactly at, and just above each threshold; a missing reading; NaN; a negative value; stale data; and an emergency stop. Also test sequences, because hysteresis depends on state. Label synthetic inputs as synthetic.'],['Log evidence instead of a verdict alone','Record timestamp, software version, state before, distance, reading age, stop request, state after, and measured outcome if hardware is used. A command log does not prove a physical stop. Preserve failed trials and explain corrective action.'],['Separate test levels','Unit tests check a pure decision. Integration tests check sensor-to-controller-to-driver behavior. Physical track tests measure motion with supervision. Passing the first level does not imply the next two have passed. A foundations learner can finish using simulations and a clearly labeled hardware test plan.']],
 diagram:{title:'Evidence ladder',nodes:['Decision tests','Adapter tests','Supervised track','Release evidence'],feedback:'A failure returns to diagnosis and another recorded test'},
 examples:[['Reaction travel','At 0.2 m/s with 0.25 s latency, reaction distance = 0.05 m = 5 cm.'],['Clearance budget','At v = 0.2 m/s and a = 0.4 m/s², braking distance = 0.04/0.8 = 0.05 m. Add 5 cm reaction and 10 cm margin: total = 20 cm. These are assumed parameters, not measured safety evidence.'],['Speed effect','At 0.4 m/s with the same deceleration, braking distance = 0.16/0.8 = 0.2 m = 20 cm, four times the 0.2 m/s case.']],
 lab:['Create a test matrix with threshold boundaries and faults.', 'Run the controller lab from Lesson 6.', 'Compute the example clearance budget and then double speed.', 'Prepare a log template that separates requested STOP from observed physical stop.'],pass:'Your budget gives 20 cm for the stated assumptions, includes units and model limits, and your test matrix covers invalid, stale, and emergency inputs.',
 practice:['Compute reaction travel at 0.3 m/s and 0.2 s.', 'Explain why ten clean trials cannot prove every future stop.', 'List evidence needed before claiming a hardware robot is safe.'],mistake:'Do not remove failed tests from a portfolio. A reproducible failure and a verified correction are valuable engineering evidence.',
 quiz:[['0.2 m/s × 0.25 s equals?',['5 cm','50 cm','0.5 cm'],0,'0.05 m = 5 cm.'],['Doubling speed changes ideal braking distance by?',['Two times','Four times','No change'],1,'Braking distance depends on speed squared.'],['Which test exercises a missing reading?',['Fault injection','Only a speed test','A logo review'],0,'Simulate missing data to check the stop response.'],['Does a STOP log prove the wheels stopped?',['Yes','No, measure the outcome','Only if it is printed'],1,'Command and physical outcome differ.'],['What belongs in an honest test report?',['Only successes','Failed trials and corrections','No version number'],1,'Preserve failures and identify the tested version.']]
},
{
 slug:'portfolio-robot-design-and-validation',title:'Portfolio Project: Robot Design and Validation',duration:'2–3 hours',
 objectives:['Produce a complete foundation design dossier.', 'Demonstrate tested fail-safe control in simulation.', 'Present limitations and the next hardware milestone.'],
 vocabulary:[['Bill of materials','A list of components and relevant specifications.'],['Traceability','A link from a requirement to its implementation and evidence.'],['Acceptance criterion','A measurable condition for approving a result.'],['Design dossier','An organized collection of design decisions, diagrams, and tests.']],
 formulas:['rubric total = requirements + architecture + calculations + tests + reflection','course mastery = all lesson quizzes ≥80% plus project evidence'],
 sections:[['Project brief','Design a small indoor obstacle-stopping robot for a supervised classroom. This foundation project produces a design and simulation, not a claim that a physical autonomous robot is finished. Use a Raspberry Pi 4, compatible sensor, two motors and a suitable driver as a proposed platform, or document equivalent components.'],['Deliverables','Create a one-page requirement sheet; a subsystem and power diagram; a component specification table; wheel and clearance calculations; the tested Lesson 6 Python policy; a test log; and a reflection. Identify any unverified specification. A placeholder specification is a blocker for physical assembly, not evidence of compatibility.'],['Acceptance and scoring','Requirements and operating conditions: 20 points. Architecture and GPIO/power protection: 20. Worked calculations with units and assumptions: 20. Reproducible simulation and boundary/fault evidence: 30. Honest limitations and next milestone: 10. Earn at least 80/100 and fix all critical electrical or control errors before requesting instructor review.'],['Present the result','Show the design diagram, demonstrate the stop behavior at thresholds and faults, and explain one failure that your tests caught. Clearly separate simulated results from measured hardware results. Your next milestone is an unpowered wiring review followed by a supervised sensor-only measurement station in Electronics and Sensors.']],
 diagram:{title:'Portfolio traceability',nodes:['Requirement','Design choice','Reproducible test','Evidence and limitation'],feedback:'Every acceptance claim points to a real result, not an untested assumption'},
 examples:[['Trace a requirement','Requirement: stale measurements must not authorize forward. Design: reject age >0.5 s. Test: distance=100, age=0.7. Evidence: controller returns STOP. This proves the policy for that input, not physical braking.'],['Score a dossier','Requirements 18, architecture 18, calculations 16, tests 26, reflection 9 gives 87/100. A critical direct 5 V GPIO connection must still be corrected regardless of the total.'],['Choose the next milestone','If logic is tested but sensor compatibility is unverified, the next task is verify model and level conversion, then measure the sensor alone. Do not skip straight to full motor operation.']],
 lab:['Create the seven deliverables listed above.', 'Run and save the exact simulation output with the tested version.', 'Self-score each rubric category with evidence references.', 'Ask an instructor to review critical electrical and control assumptions before physical assembly.'],pass:'The dossier reaches 80/100, all simulation tests pass, every claim is labeled simulated or measured, and no unresolved critical power or logic issue is presented as approved.',
 practice:['Explain your largest uncertainty.', 'Write a one-minute demonstration script.', 'Identify a change that would require repeating your tests.'],mistake:'A completion record is a browser-local learning record, not an independently verified hardware qualification.',
 quiz:[['What does this project deliver?',['A certified industrial robot','A design and tested simulation','Guaranteed obstacle avoidance'],1,'Hardware validation is a later stage.'],['What is the rubric total?',['50','80','100'],2,'The five categories total 100 points.'],['Which evidence label is necessary?',['Simulated versus measured','Only the brand color','Only a filename'],0,'Readers need to know what was actually tested.'],['A critical wiring error with score 90 should be?',['Ignored','Corrected before approval','Hidden'],1,'A score cannot override a critical defect.'],['What follows this course?',['Immediate unsupervised driving','Sensor-only validation and electronics','Skip specifications'],1,'Validate hardware one subsystem at a time.']]
}
];

export function robotDecision({distance, age=0, previous='STOP', emergency=false}) {
 if (emergency || !['STOP','FORWARD'].includes(previous) || !Number.isFinite(distance) || distance < 2 || distance > 400 || !Number.isFinite(age) || age < 0 || age > 0.5) return 'STOP';
 if (distance <= 25) return 'STOP';
 if (distance >= 35) return 'FORWARD';
 return previous;
}
export const controllerLab = `"""Simulation only: no GPIO, motor driver, or physical motion."""
import math

def decide(distance, age=0, previous="STOP", emergency=False):
    if (emergency or previous not in ("STOP", "FORWARD")
        or not isinstance(distance, (int, float))
        or isinstance(distance, bool) or not math.isfinite(distance)
        or distance < 2 or distance > 400
        or not isinstance(age, (int, float)) or isinstance(age, bool)
        or not math.isfinite(age) or age < 0 or age > 0.5):
        return "STOP"
    if distance <= 25:
        return "STOP"
    if distance >= 35:
        return "FORWARD"
    return previous

cases = [
    (25, 0, "FORWARD", False, "STOP"),
    (35, 0, "STOP", False, "FORWARD"),
    (30, 0, "STOP", False, "STOP"),
    (30, 0, "FORWARD", False, "FORWARD"),
    (100, 0.7, "FORWARD", False, "STOP"),
    (100, 0, "FORWARD", True, "STOP"),
    (None, 0, "FORWARD", False, "STOP"),
    (float("nan"), 0, "FORWARD", False, "STOP"),
    (-1, 0, "FORWARD", False, "STOP"),
    (805, 0, "FORWARD", False, "STOP"),
    (100, -1, "FORWARD", False, "STOP"),
    (100, float("inf"), "FORWARD", False, "STOP"),
    (100, 0, "UNKNOWN", False, "STOP"),
    (100, 0.5, "STOP", False, "FORWARD"),
    (100, 0.5001, "STOP", False, "STOP"),
]
for distance, age, previous, emergency, expected in cases:
    assert decide(distance, age, previous, emergency) == expected

state = "STOP"
trace = []
for reading in [60, 30, 25, 30, 35, None]:
    state = decide(reading, previous=state)
    trace.append(state)
assert trace == ["FORWARD", "FORWARD", "STOP", "STOP", "FORWARD", "STOP"]
print(f"Passed {len(cases)} boundary/fault cases and one sequence test.")
print("Sequence:", " -> ".join(trace))
`;
