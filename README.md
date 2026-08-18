# Virtual Chem Lab

CHEMLAB VIRTUAL — DESKTOP UI/UX DESIGN PROMPT

1. PROJECT OVERVIEW

Design a modern, professional desktop application UI/UX called ChemLab Virtual.

Project type: Virtual Chemistry Laboratory

Target users: Secondary school students and teachers

Platform: Windows Desktop Application

Development technology: VB.NET + Windows Forms in Visual Studio

Primary purpose: Provide students with an interactive virtual chemistry laboratory where they can perform simulated experiments using realistic 3D laboratory apparatus, chemicals, measurements, observations, quizzes, and results.

This is a final-year university defense project, so the interface must look polished, technically sophisticated, academic, and credible.

The application should feel like a real virtual laboratory simulation, not a school administration system.

The most important screen is the 3D Laboratory Workspace.

---

2. DESIGN OBJECTIVE

Create a professional desktop UI that communicates:

Select Experiment → Read Instructions → Prepare Apparatus → Perform Experiment → Observe Reaction → Record Results → Complete Quiz → Receive Score → Review Progress

The interface should be:

- Modern

- Scientific

- Professional

- Futuristic but academic

- Easy for secondary school students to understand

- Suitable for university project defense screenshots

- Designed primarily for desktop/laptop screens

- Optimized for approximately 1366×768 and 1440×900 resolutions

- Consistent across all screens

- Suitable for later implementation in VB.NET Windows Forms

Do NOT make it look like a generic web dashboard.

---

3. VISUAL DESIGN SYSTEM

Primary Theme

Use a sophisticated dark scientific theme.

Colors

Primary background:

- Deep Navy: #07111F

- Navy: #0B1628

- Dark Blue: #101D32

Secondary:

- Indigo: #243B73

- Blue: #2563EB

Accent:

- Cyan: #22D3EE

- Light Cyan: #67E8F9

Status colors:

- Success: #22C55E

- Warning: #F59E0B

- Error/Danger: #EF4444

Content:

- White: #FFFFFF

- Light Gray: #E5E7EB

- Muted Gray: #94A3B8

Use subtle gradients and soft shadows.

Avoid excessive neon effects.

---

4. TYPOGRAPHY

Use a professional modern sans-serif font such as:

- Inter

- Poppins

- Segoe UI

Recommended hierarchy:

Application title:

24–30px

Page title:

22–28px

Section title:

16–20px

Body:

13–15px

Small metadata:

11–12px

The typography must remain readable in a desktop Windows application.

---

5. APPLICATION WINDOW

Design the application as a true Windows desktop application.

Include:

- Custom dark title bar

- Application logo

- "ChemLab Virtual"

- Minimize button

- Maximize/restore button

- Close button

Main structure:

┌──────────────────────────────────────────────────────────────┐

│ ChemLab Virtual                         — □ X                │

├──────────────┬───────────────────────────────────────────────┤

│              │                                               │

│   SIDEBAR    │              MAIN CONTENT                     │

│              │                                               │

│              │                                               │

│              │                                               │

│              │                                               │

└──────────────┴───────────────────────────────────────────────┘

The interface should be easily convertible into VB.NET Panels, UserControls, Labels, Buttons, PictureBoxes, DataGridViews and custom drawing components.

---

6. APPLICATION LOGO

Create a professional scientific logo.

Concept:

A combination of:

- Flask

- Molecule/atom

- Cyan glow

- "C" or "CL" laboratory symbol

Text:

ChemLab Virtual

Subtitle:

Interactive Virtual Chemistry Laboratory

The logo should work on both the splash screen and sidebar.

---

7. COMPLETE SCREEN STRUCTURE

Create the following screens:

AUTHENTICATION

1. Splash Screen

2. Login / Sign In

3. Student Registration

4. Forgot Password

5. Reset Password

6. Logout Confirmation

STUDENT APPLICATION

7. Home Dashboard

8. Experiment Library

9. Experiment Details / Instructions

10. 3D Laboratory Workspace

11. Apparatus Library

12. Chemicals / Reagents

13. Safety Data Sheet

14. Lab Notebook

15. Quiz / Assessment

16. Experiment Results

17. Reports & Grades

18. Progress Tracking

19. Experiment History

20. Student Profile

21. Settings

TEACHER / ADMIN

22. Teacher Dashboard

23. Student Management

24. Experiment Management

25. Question Management

26. Results Management

27. Reports

28. Settings

---

8. SPLASH SCREEN

Create a premium scientific splash screen.

Center:

ChemLab Virtual

Subtitle:

Interactive Virtual Chemistry Laboratory

Description:

"Explore chemistry through realistic virtual experiments, interactive laboratory equipment and scientific simulations."

Visual:

A sophisticated 3D chemistry laboratory scene containing:

- Erlenmeyer flask

- Beakers

- Test tubes

- Burette

- Pipette

- Molecules

- Periodic table elements

- Floating particles

- Laboratory bench

Use subtle glowing cyan scientific elements.

Bottom:

Initializing Virtual Laboratory...

Include a progress bar.

After loading, transition smoothly to Login.

---

9. LOGIN SCREEN

Create a professional two-panel desktop login screen.

Left

Scientific visual:

3D laboratory environment.

Display:

Chemistry Without Limits

"Learn, experiment and discover in a safe virtual laboratory."

Right

Card:

Welcome Back

Fields:

- Student ID / Username

- Password

Controls:

- Show password

- Remember me

- Forgot password?

Buttons:

Sign In

Secondary:

Continue as Guest

Link:

"Don't have an account? Create one"

Also include:

Offline Mode Available

---

10. REGISTRATION SCREEN

Create a student registration interface.

Fields:

- Full Name

- Student ID

- Username

- Email

- Password

- Confirm Password

- School

- Class / Level

Button:

Create Account

Show inline validation.

Example:

✓ Password requirements satisfied

✕ Passwords do not match

---

11. FORGOT PASSWORD

Create:

Forgot Password?

Text:

"Enter your email or student ID and we will help you recover your account."

Input:

Email / Student ID

Button:

Continue

Provide a simple multi-step recovery interface.

---

12. MAIN SIDEBAR

Create a fixed vertical sidebar.

Logo:

ChemLab Virtual

Navigation:

Main

- Home

- Experiments

- Laboratory

Resources

- Apparatus

- Chemicals

- Safety Data

- Lab Notebook

Assessment

- Quizzes

- Results

- Progress

- History

Account

- Profile

- Settings

Bottom:

Student profile card

Eugenie Embolo

Student

Button:

Logout

Use Lucide-style icons.

Highlight the active menu item with cyan/blue accent.

---

13. HOME DASHBOARD

Title:

Good Morning, Student

Subtitle:

"Ready to continue your chemistry journey?"

Create a large hero card:

Continue Experiment

Acid-Base Neutralization

Progress: 65%

Button:

Continue Experiment

Statistics:

- Experiments Completed

- Experiments In Progress

- Average Score

- Learning Hours

Example:

12

Experiments Completed

3

In Progress

86%

Average Score

18.5h

Learning Time

---

14. RECENT EXPERIMENTS

Create a professional table.

Columns:

Experiment

Date

Score

Status

Action

Sample:

Acid-Base Neutralization | Aug 9 | 85% | Completed | View

Titration | Aug 8 | 92% | Completed | View

Redox Reaction | Aug 6 | 78% | Completed | View

Flame Test | Aug 4 | 88% | Completed | View

---

15. EXPERIMENT LIBRARY

Title:

Experiments

Subtitle:

"Choose an experiment and enter the virtual laboratory."

Search:

Search experiments...

Filters:

- All

- Beginner

- Intermediate

- Advanced

- Completed

- In Progress

Create experiment cards.

Each card contains:

3D experiment illustration

Experiment name

Difficulty

Estimated duration

Description

Progress

Button:

View Experiment

---

16. EXPERIMENTS TO INCLUDE

At minimum include:

Beginner

Acid-Base Neutralization

Flame Test

Solubility Test

Separation of Mixtures

Intermediate

Acid-Base Titration

Redox Reaction

Preparation of Solutions

Chemical Reaction Rates

Advanced

Electrochemistry

Equilibrium

Reaction Kinetics

---

17. EXPERIMENT DETAILS / INSTRUCTIONS

Before entering the laboratory, display a dedicated instruction screen.

Header:

Acid-Base Neutralization

Tags:

Chemistry

Beginner

15 minutes

Sections:

Learning Objectives

- Understand acid-base reactions

- Identify neutralization

- Measure pH

- Observe indicator color changes

Required Apparatus

- Burette

- Conical flask

- Pipette

- Beaker

- Measuring cylinder

- Dropper

Chemicals

- Hydrochloric acid

- Sodium hydroxide

- Phenolphthalein

- Distilled water

Procedure

Show numbered steps.

Safety Information

Use warning cards.

Button:

Enter Virtual Laboratory

---

18. MAIN 3D VIRTUAL LABORATORY

THIS IS THE MOST IMPORTANT SCREEN.

Design this screen to look like an actual scientific laboratory simulation.

Do not make it look like a dashboard.

Use a large central 3D laboratory viewport.

Layout:

┌──────────────┬───────────────────────────────┬─────────────────┐

│ APPARATUS    │                               │ INSTRUCTIONS    │

│              │                               │                 │

│ Equipment    │       3D LABORATORY          │ Step 1          │

│              │          WORKSPACE            │ Step 2          │

│ Beaker       │                               │ Step 3          │

│ Flask        │      Apparatus Models         │ Step 4          │

│ Burette      │                               │                 │

│ Pipette      │                               │ Parameters      │

│ Test Tube    │                               │                 │

│              │                               │                 │

├──────────────┴───────────────────────────────┴─────────────────┤

│ TOOLBAR / SIMULATION CONTROLS                                 │

└───────────────────────────────────────────────────────────────┘

---

19. 3D LABORATORY VIEWPORT

The central workspace should display realistic 3D apparatus.

Include:

- Laboratory bench

- Beaker

- Conical flask

- Burette

- Pipette

- Test tubes

- Measuring cylinder

- Thermometer

- Chemical bottles

- Digital balance

The user should visually understand that apparatus can eventually be:

- Selected

- Moved

- Rotated

- Positioned

- Filled

- Emptied

- Measured

- Connected

Use subtle selection outlines around selected equipment.

---

20. 3D VIEW CONTROLS

Floating toolbar:

- Select

- Move

- Rotate

- Zoom

- Reset View

- Undo

- Redo

- Fullscreen

- Sound

View presets:

3D | Front | Side | Top

Lighting:

Laboratory Lighting

Slider:

Low ───────── High

---

21. APPARATUS PANEL

Left panel:

Laboratory Equipment

Search equipment.

Categories:

- Glassware

- Measuring

- Heating

- Support

- Safety

Equipment cards:

Beaker

100 mL

Add to Bench

Conical Flask

250 mL

Add to Bench

Burette

50 mL

Add to Bench

Pipette

25 mL

Add to Bench

Test Tube

20 mL

Add to Bench

---

22. CHEMICALS PANEL

Create a chemical/reagent interface.

Example:

Chemical| Formula| Concentration| Hazard| Action

Hydrochloric Acid| HCl| 0.1 M| Corrosive| Add

Sodium Hydroxide| NaOH| 0.1 M| Corrosive| Add

Phenolphthalein| C20H14O4| Indicator| Low| Add

Distilled Water| H2O| —| Safe| Add

Use hazard icons and color-coded warning indicators.

---

23. INTERACTIVE CHEMISTRY SIMULATION

Demonstrate an acid-base neutralization experiment.

Central viewport:

Burette containing HCl

↓

Conical flask containing NaOH + indicator

Student interaction:

Add Solution

The UI should visually show:

- Liquid level decreasing in burette

- Liquid entering flask

- Liquid level increasing

- Indicator changing color

- Reaction animation

- pH value changing

Display:

pH: 7.0

Status:

Neutralization Point Reached

Add a simulation progress indicator.

---

24. EXPERIMENT CONTROL PANEL

Bottom toolbar:

Start

Pause

Reset

Undo

Redo

Record Observation

Submit Experiment

Simulation speed:

0.5x | 1x | 2x

---

25. EXPERIMENT PARAMETERS

Right panel:

Experiment Parameters

Volume:

50 mL

Concentration:

0.1 mol/L

Temperature:

25°C

pH:

7.0

Reaction Status:

Complete

---

26. INSTRUCTIONS PANEL

Right side:

Current Procedure

Step 3 of 5

"Add 25 mL of hydrochloric acid using the burette."

Progress:

████████░░ 60%

Buttons:

Previous Step

Next Step

Use visual highlighting to show the equipment the student should interact with.

---

27. OBSERVATION PANEL

At the bottom of the workspace:

Record Observation

Large text area:

"Describe what you observe during the experiment..."

Fields:

Observation

Result

Conclusion

Button:

Save Observation

---

28. SAFETY SYSTEM

Add safety notifications inside the laboratory.

Example:

⚠ Safety Warning

"Handle hydrochloric acid carefully. Avoid contact with skin and eyes."

Create safety indicators for dangerous chemicals.

Include:

- PPE reminder

- Chemical hazard warnings

- Spill warning

- Incorrect procedure warning

---

29. APPARATUS LIBRARY

Create a dedicated screen showing available 3D apparatus.

Grid:

Beaker

Conical Flask

Test Tube

Burette

Pipette

Measuring Cylinder

Thermometer

Balance

Tripod Stand

Bunsen Burner

Each card includes:

3D preview

Name

Capacity

Category

Status:

Selected

On Bench

Available

Button:

View Details

---

30. CHEMICAL LIBRARY

Create a dedicated reagent inventory.

Include:

- Chemical name

- Formula

- Concentration

- Quantity

- Hazard level

- Storage information

Buttons:

View

Add to Experiment

Safety Data

---

31. SAFETY DATA SHEET

Create an SDS viewer.

Display:

Chemical Name

Formula

Hazard Classification

Physical Properties

Handling

Storage

First Aid

Disposal

Safety Precautions

Use a professional warning-card design.

---

32. LAB NOTEBOOK

Create a digital laboratory notebook.

Left side:

Saved experiments.

Right side:

Experiment Report

Experiment:

Acid-Base Neutralization

Aim

Method

Observation

Result

Conclusion

Date

Score

Button:

Save Report

Button:

Export Report

---

33. QUIZ / ASSESSMENT

Create a professional assessment screen.

Header:

Experiment Assessment

Question:

Question 1 of 5

"What happens when an acid reacts with a base?"

Answers:

A. The solution becomes more acidic

B. A neutralization reaction occurs

C. The solution becomes solid

D. No reaction occurs

Progress:

20%

Timer:

09:42

Buttons:

Previous

Next

Submit Quiz

---

34. EXPERIMENT RESULTS

After completing an experiment, show:

Experiment Completed!

Score:

85%

Circular progress indicator.

Statistics:

Correct Answers: 17/20

Experiment Accuracy: 85%

Time Spent: 12 minutes

Feedback

"Good work! You demonstrated a good understanding of the neutralization process."

Sections:

What You Did Well

Areas to Improve

Buttons:

Try Again

View Report

Back to Dashboard

---

35. REPORTS & GRADES

Create a student performance report.

Display:

Overall Score

Chemistry Performance

Experiments Completed

Average Score

Learning Hours

Create charts for:

- Score progression

- Experiment completion

- Subject performance

- Quiz performance

Include:

Export Report

---

36. PROGRESS SCREEN

Title:

My Progress

Cards:

Experiments Completed

Average Score

Learning Time

Current Level

Subject progress:

Chemistry — 75%

Titration — 85%

Neutralization — 92%

Redox — 68%

Use progress bars and charts.

---

37. EXPERIMENT HISTORY

Create a professional data table.

Columns:

Experiment

Date

Duration

Score

Status

Action

Example:

Acid-Base Neutralization | Aug 9 | 12 min | 85% | Completed | View

Titration | Aug 8 | 18 min | 92% | Completed | View

Redox Reaction | Aug 6 | 15 min | 78% | Completed | View

---

38. PROFILE

Display:

Profile picture

Full Name

Student ID

Username

Email

School

Class

Statistics:

Experiments Completed

Average Score

Learning Hours

Buttons:

Edit Profile

Change Password

---

39. SETTINGS

Create categories:

Account

Profile information

Password

Laboratory

3D Rendering Quality

Low / Medium / High

Graphics Quality

Audio

Sound Effects

Background Audio

Notifications

Experiment notifications

Quiz reminders

Interface

Theme

Language

Animations

Data

Offline Data

Clear Cache

Reset Application

---

40. TEACHER DASHBOARD

Create a separate professional teacher interface.

Sidebar:

Dashboard

Students

Experiments

Questions

Results

Reports

Settings

Statistics:

Total Students

Experiments Completed

Average Score

Active Students

Charts:

Student Performance

Experiment Popularity

Average Scores

Completion Rate

---

41. STUDENT MANAGEMENT

Teacher can view:

Student Name

Student ID

Class

Experiments Completed

Average Score

Last Activity

Status

Actions:

View

Edit

Deactivate

---

42. EXPERIMENT MANAGEMENT

Teacher/Admin interface.

Buttons:

Add Experiment

Edit

Delete

View

Fields:

Experiment Name

Description

Difficulty

Duration

Learning Objectives

Required Apparatus

Required Chemicals

Procedure

Safety Information

Quiz Questions

---

43. QUESTION MANAGEMENT

Create question management interface.

Fields:

Question

Option A

Option B

Option C

Option D

Correct Answer

Explanation

Difficulty

Experiment

Button:

Save Question

---

44. REUSABLE COMPONENTS

Design reusable components that can later be implemented as VB.NET UserControls.

Components:

- Sidebar

- Header

- TitleBar

- NavigationButton

- StatCard

- ExperimentCard

- ApparatusCard

- ChemicalCard

- EquipmentToolbar

- LaboratoryViewport

- InstructionPanel

- ParameterPanel

- ProgressBar

- Chart

- DataTable

- Modal

- Notification

- SafetyAlert

- QuizQuestion

- ResultCard

- ProfileCard

---

45. VB.NET WINDOWS FORMS MAPPING

The design should be realistic for implementation using VB.NET Windows Forms.

Suggested architecture:

MainForm

│

├── SidebarPanel

│

├── TopBarPanel

│

└── ContentPanel

      │

      ├── DashboardUserControl

      ├── ExperimentsUserControl

      ├── InstructionsUserControl

      ├── LaboratoryUserControl

      ├── ApparatusUserControl

      ├── ChemicalsUserControl

      ├── NotebookUserControl

      ├── QuizUserControl

      ├── ResultsUserControl

      ├── ProgressUserControl

      ├── HistoryUserControl

      ├── ProfileUserControl

      └── SettingsUserControl

The 3D laboratory viewport should be designed as a dedicated component that can later be connected to a 3D engine/rendering system.

---

46. DATABASE-READY STRUCTURE

Design the interface around future database entities:

Users

Students

Teachers

Experiments

Apparatus

Chemicals

ExperimentSteps

Questions

Answers

Results

Observations

LabReports

Progress

ExperimentHistory

SafetyData

Settings

---

47. 3D APPARATUS REQUIREMENT

The 3D apparatus is a core feature.

Design realistic 3D models for:

- Beaker

- Erlenmeyer flask

- Volumetric flask

- Test tube

- Burette

- Pipette

- Measuring cylinder

- Thermometer

- Balance

- Bunsen burner

- Tripod

- Wire gauze

- Retort stand

- Funnel

- Dropper

The apparatus should have:

- Realistic proportions

- Glass transparency

- Liquid levels

- Shadows

- Highlighting

- Selection state

- Rotation

- Zoom

- Interactive positioning

---

48. USER EXPERIENCE PRINCIPLES

The application must always make it clear:

1. What experiment the student is performing.

2. What step they are currently on.

3. What equipment they need.

4. What action they must perform.

5. What result is expected.

6. Whether their action is correct.

7. What they have observed.

8. How well they performed.

Use visual feedback:

✓ Correct action

⚠ Warning

✕ Incorrect action

ℹ Information

---

49. INTERACTION DESIGN

Use subtle animations for:

- Page transitions

- Equipment selection

- Button hover

- Liquid movement

- Chemical reactions

- pH changes

- Progress updates

- Quiz transitions

- Result animations

Do not over-animate the interface.

The application should remain professional and educational.

---

50. FINAL USER JOURNEY

The complete user experience should follow:

SPLASH

   ↓

LOGIN

   ↓

DASHBOARD

   ↓

EXPERIMENT LIBRARY

   ↓

EXPERIMENT DETAILS

   ↓

INSTRUCTIONS

   ↓

3D VIRTUAL LABORATORY

   ↓

SELECT APPARATUS

   ↓

SELECT CHEMICAL

   ↓

PERFO

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/39ed653a-be03-4bb4-b1e4-1558ce232a9f).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
