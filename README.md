# perdanakun.com — Interactive Portfolio

> **A code-first exploration of UX, design systems, and front-end implementation — turning a personal portfolio into an interactive desktop experience.**

🌐 **Live:** [perdanakun.com](https://perdanakun.com)
💻 **Source:** [GitHub Repository](https://github.com/perdanakun/win95portfolio-perdanakun.com)

---

## What is this?

This repository contains the source code for my personal portfolio website, **[perdanakun.com](https://perdanakun.com)**.

But this project is more than a portfolio website.

It is an ongoing experiment in **designing through code** — exploring how visual design, UX, interaction design, design systems, and front-end development can come together in a single experience.

Instead of building another traditional scrolling portfolio, I experimented with a different mental model:

> **What if my portfolio behaved more like a personal computer than a website?**

The result is an interactive desktop environment inspired by the visual language and interaction patterns of classic Windows interfaces.

---

## Why I Built This

My background is primarily in **visual design**, with years of experience working around visual systems, iconography, illustration, and interface aesthetics.

Recently, I've been exploring a transition toward:

**UX Design → Product Design → Design Engineering**

I'm still learning and experimenting with this direction.

Rather than only talking about that transition in a resume, I wanted to build something that could demonstrate it.

This portfolio became an opportunity to explore:

* How I structure information
* How I think about user flows
* How I design interaction patterns
* How I create reusable interface systems
* How visual decisions translate into components
* How design decisions change when working directly in code
* How AI can support a designer working with code

In other words:

> **This website is both my portfolio and an experiment in where my design practice is heading next.**

---

## The Concept

### Portfolio as a Personal Computer

Traditional portfolio:

```text
Home
  ↓
About
  ↓
Projects
  ↓
Experience
  ↓
Contact
```

This project explores a different structure:

```text
Desktop
│
├── About
├── Projects
├── Experience
├── Playground
├── AI Messenger
└── Contact
```

Information is represented through familiar desktop concepts:

* Windows
* Folders
* Files
* Applications
* Desktop icons
* Taskbar
* Dialog boxes
* Menus

The goal isn't to recreate Windows as accurately as possible.

The goal is to use a **familiar interface metaphor to create an unconventional but understandable portfolio experience**.

---

## UX Approach

The primary audience for the portfolio includes:

* Recruiters
* Hiring managers
* Design leads
* Product managers
* Designers and developers interested in the work

These users may only spend a few minutes exploring a portfolio.

So the challenge was balancing:

**Exploration**

with

**Clarity**

The desktop metaphor allows visitors to explore the portfolio spatially while still relying on interaction patterns that are already familiar to many users.

The intention is simple:

> **Let people understand who I am, what I do, and how I think without forcing them through a long conventional portfolio page.**

---

## AI as an Interface

The portfolio also experiments with an **AI Messenger**.

Instead of requiring visitors to manually search through my CV, experience, and portfolio content, the AI acts as a conversational representative of me.

Visitors can ask questions about:

* My background
* Experience
* Skills
* Design practice
* Projects
* Career direction

The idea comes from observing how people increasingly interact with information through conversational AI.

Rather than treating AI as a replacement for the portfolio, I wanted to explore:

> **What happens when conversation becomes another navigation layer for a personal portfolio?**

AI is therefore treated as an **interface for accessing information**, not as the core of the design itself.

---

## Design Direction

The visual language is inspired by classic Windows interfaces and personal computing.

The retro aesthetic is also personal.

My first experience with computers happened on an old, underpowered PC that was already outdated for its time. While newer versions of Windows were becoming common, the limitations of that machine shaped my early relationship with computers.

The portfolio reinterprets that memory through my current design practice.

The retro desktop represents where I started.

The code-driven interactive system represents where I'm exploring next.

---

## Design Principles

### 01 — Familiarity

Use recognizable desktop patterns so users can understand the interface without learning an entirely new interaction model.

### 02 — System Over Decoration

Windows, buttons, icons, menus, typography, spacing, states, and interactions are treated as parts of one interface system rather than isolated visual elements.

### 03 — Function Before Simulation

The goal is not to create a pixel-perfect Windows clone.

The visual language is adapted where necessary to support:

* UX
* Responsive behavior
* Accessibility
* Information architecture
* Portfolio content

### 04 — Interaction Has Meaning

The desktop metaphor should not exist only for visual novelty.

Windows represent content.

Folders represent navigation.

Files represent entry points.

The desktop represents the information architecture.

---

## Code-First Design

One of the main things I'm exploring through this project is a **code-first design workflow**.

A traditional workflow might look like:

```text
Design
  ↓
Prototype
  ↓
Handoff
  ↓
Development
```

This project explores:

```text
Problem
  ↓
UX / Information Architecture
  ↓
Design Decision
  ↓
Component
  ↓
Code
  ↓
Interaction
  ↓
Iteration
```

Working directly in the browser changes the design process.

Typography, spacing, component behavior, responsiveness, interaction states, and visual decisions can be evaluated together in the actual environment where they will exist.

This has become one of the main things I am learning from the project:

> **Code doesn't have to be only the final implementation layer. It can also be a design medium.**

---

## Design System

Because the portfolio behaves like a small operating system, reusable components are important.

The interface is built around patterns such as:

```text
Window
Taskbar
Desktop Icon
Folder
File
Dialog
Button
Menu
Input
Image Viewer
```

Components also need to communicate different states:

```text
Default
Hover
Active
Selected
Disabled
Focused
Open
Closed
Minimized
```

This has pushed me to think beyond individual screens and toward **systems, components, states, and behavior**.

---

## Technical Exploration

The project is built with:

* **React**
* **Vite**
* **JavaScript**
* **React95**
* **@react95/core**
* **@react95/icons**
* **react-rnd**
* **Resend**
* **AI / LLM integration**
* **Vercel**

The implementation explores several areas of front-end development, including:

* Component-based UI
* Window management
* Application state
* Responsive layouts
* Touch interaction
* Desktop interaction patterns
* Modal systems
* Form validation
* Email integration
* AI interaction
* Reusable UI abstractions

---

## Architecture Exploration

One of the recurring architectural challenges has been separating **window behavior** from **application content**.

The general direction is:

```text
App
│
├── Window Management
│
├── Desktop
│   └── Desktop Icons
│
├── Taskbar
│
└── Applications
    ├── About
    ├── Projects
    ├── Contact
    ├── AI Messenger
    ├── Image Viewer
    └── Other Experiences
```

This separation allows application content to remain relatively independent from the global desktop/window system.

It also makes it easier to experiment with:

* Minimize / restore behavior
* Window positioning
* Responsive windows
* Touch interaction
* Application states

---

## Responsive Interaction

A desktop metaphor creates an interesting responsive design problem.

On desktop:

```text
Double-click
     ↓
Open Application
```

On touch devices:

```text
Double-tap
     ↓
Open Application
```

Instead of creating an entirely separate mobile website, I explored how the same **computer experience** could adapt to different screen sizes and input methods.

This led to reusable interaction and responsive window abstractions.

The goal is:

> **Adapt the computer experience to the device rather than simply shrinking the desktop interface.**

---

## AI-Assisted Development

AI is also part of my development workflow.

I use AI as a development partner for things such as:

* Exploring implementation approaches
* Debugging
* Refactoring
* Understanding unfamiliar React patterns
* Exploring alternative solutions
* Reviewing implementation logic
* Accelerating repetitive development tasks

However, the core design direction remains mine.

I make the decisions around:

* Information architecture
* UX
* Interaction model
* Visual direction
* Design system
* Content structure
* Final implementation

This project is therefore also an experiment in:

> **How can AI help a designer become more comfortable working directly with code?**

---

## Development Log

This repository is intentionally being developed in iterations.

Rather than presenting the project as a finished product, I am documenting the process as I learn.

### v1.0 — Portfolio Foundation

Established:

* Interactive desktop concept
* Windows-style interface
* Window management architecture
* Application structure
* React95 integration
* Open / minimize / restore / close interaction model

### v2.0 — Mobile & Touch Interaction

Explored:

* Responsive application windows
* Mobile viewport constraints
* Desktop double-click
* Mobile double-tap
* Reusable `DesktopIcon`
* Touch interaction conflicts
* Responsive modal behavior

### v3.0 — Contact & Alert UI

Explored:

* Form validation
* Action states
* Submission feedback
* Custom alert windows
* Independent modal architecture
* Responsive alert behavior
* Resend email integration

### v4.0 — AI Messenger

Explored:

* AI Messenger interface
* AI desktop shortcut
* Taskbar integration
* Native window minimization
* AI Sphere interaction
* Chat state persistence
* Sound feedback

The project is still evolving.

Future experiments include improvements to mobile responsiveness, AI interaction, content presentation, and additional desktop experiences.

---

## What I'm Learning

This project is helping me explore several areas outside my original visual-design comfort zone.

### 01 — Designing in Code Changes the Process

When design decisions happen directly in the browser, implementation becomes part of the design process.

### 02 — Visual Metaphors Need Functional Reasons

A retro interface can easily become a gimmick.

The challenge is making the metaphor contribute to navigation, hierarchy, and interaction.

### 03 — Constraints Can Create Better Systems

Working within a defined visual language forces more deliberate decisions around:

* Components
* Typography
* Spacing
* Color
* States
* Interaction

### 04 — Code Can Be a Design Medium

The biggest lesson so far:

> **Code is not only where a design is implemented. It can also be where a design is discovered.**

---

## Current Position

I'm a **visual designer exploring the transition toward design engineering**.

I'm not presenting this project as proof that I've mastered front-end engineering.

Quite the opposite.

This repository is a record of me **learning, experimenting, building, breaking things, and figuring out how design and code can work together**.

The project represents the direction I'm interested in:

```text
Visual Design
      ↓
UX
      ↓
Product Thinking
      ↓
Design Systems
      ↓
Code
      ↓
Design Engineering
```

I'm still somewhere in that transition.

And this project is part of the exploration.

---

## Status

🚧 **Active personal project**

The portfolio is live, but the source code and interaction system continue to evolve.

New features, experiments, fixes, and design decisions are documented through the development process.

---

## License / Usage

This repository contains the source code of my personal portfolio.

If you use parts of the implementation or ideas from this project, please give appropriate credit.

---

<p align="center">
  Built while exploring the space between <strong>design and code</strong>.
</p>
