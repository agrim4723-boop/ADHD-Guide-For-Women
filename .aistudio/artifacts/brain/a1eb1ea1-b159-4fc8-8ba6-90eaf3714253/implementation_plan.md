# Streamline Free Sample Preview to 2-Part Tabbed Interface

Refine Section 6 (Free Sample Opt-In) to feature exactly two high-value parts from *Missed, Not Broken* in a clean, 2-tab segmented interface with zero visual clutter.

## User Review & Critical Decisions

> [!IMPORTANT]
> The user confirmed the two sample sections to retain and the preferred presentation style:
> - **Selected 2 Sample Sections**: **Part 1 (Chapter 1 Excerpt)** and **Part 2 (Interactive 16-Symptom Checklist)**. The third section (Pocket Card) is removed from the tab bar to keep the focus laser-sharp and organized.
> - **Layout Choice**: **Clean 2-tab switch** between the two parts within a unified editorial preview card.

- **Confirmed Decision 1**: Limit tabs to exactly 2: `Chapter 1 Excerpt` and `16-Symptom Audit`.
- **Confirmed Decision 2**: Retain the integrated, calm email delivery bar below the active tab for users who want the offline PDF download.

---

## 1. Overview & Core Concept

- **What It Does**: Presents visitors with a clean, low-friction preview of the digital guide *Missed, Not Broken* in two focused steps:
  1. **Chapter 1**: The full introductory essay (*"You’re not lazy. You might be undiagnosed"*), establishing immediate empathy and neurological context.
  2. **Chapter 3 Symptom Checklist**: An interactive self-audit across 4 categories (Attention/Memory, Organization/Time, Emotions, Inner Restlessness) with a live counter and clinical disclaimer.
- **Target Audience**: Adult women seeking clarity on suspected ADHD traits who want to sample the writing tone and validate their symptoms before purchasing the full $19.99 guide.
- **Key Value**: Replaces multi-tab clutter with an uncluttered, balanced two-choice reader that eliminates decision paralysis.

---

## 2. User Experience & Visual Design

### Key User Flows
1. **Browse Preview Section**: Visitor arrives at Section 6 (*"Free Sample Preview"*) below the buy button.
2. **Toggle Between 2 Tabs**: 
   - Tab 1: `Chapter 1 Excerpt` (default active state, amber accent indicator).
   - Tab 2: `Symptom Audit (X/16)` (pink accent indicator, interactive checkboxes).
3. **Interactive Engagement**:
   - In Tab 1: Clean reading experience with authentic layout matching Page 3 of the PDF.
   - In Tab 2: Clicking any of the 16 symptoms updates the live counter (`Ticked: X of 16`) and triggers visual feedback without page jump.
4. **Offline PDF Capture**: Single-line email field at the base of the container delivers the sample PDF with instant confirmation message.

### Visual Identity & Theme
- **Theme Palette**: Deep obsidian backdrop (`#07060a`), hairline borders (`#27272a`), muted text (`#a1a1aa`), warm amber for Chapter 1 and vivid pink/purple for the Checklist.
- **Segmented Control**: Symmetric 2-button pill container with clear active/inactive visual weight, generous touch targets ($\ge 44\text{px}$), and smooth state transitions.
- **Typography**: Editorial serif headings (`font-editorial`), crisp sans body text (`Plus Jakarta Sans`), and monospace figures for tabular checklist counts.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Removal of Emergency Pocket Card from Sample Tabs**
  - *Chosen Approach*: Omit the Pocket Card tab and keep it exclusively as an incentive in the full guide and downloadable PDF bundle.
  - *Why*: Reduces cognitive load and adheres strictly to the user's directive for "only 2 parts for samples".
- **Decision 2: Retaining the Integrated Email Capture Bar**
  - *Chosen Approach*: Keep the clean email delivery form anchored at the bottom of the 2-part reader container.
  - *Why*: Gives visitors both instant on-page access and an asynchronous delivery option without creating two competing UI blocks.

---

## 4. Technical Architecture & Data Strategy

```
┌───────────────────────────────────────────────────────────┐
│ Section 6: Free Sample Area                               │
│                                                           │
│  ┌─────────────────────────────────────────────────────┐  │
│  │ 2-Tab Segmented Switcher                            │  │
│  │ [ Tab 1: Chapter 1 Excerpt ] [ Tab 2: Symptom Audit]│  │
│  └─────────────────────────────────────────────────────┘  │
│                                                           │
│  ┌─────────────────────────────────────────────────────┐  │
│  │ Active Content Viewport                             │  │
│  │  • If Tab 1: Chapter 1 Prose & "What You'll Get"    │  │
│  │  • If Tab 2: 16-Symptom 4-Category Grid & Counter   │  │
│  └─────────────────────────────────────────────────────┘  │
│                                                           │
│  ┌─────────────────────────────────────────────────────┐  │
│  │ Integrated Offline PDF Delivery Bar                 │  │
│  │ [ Email Input ] -> [ Send Free Sample ] -> Feedback │  │
│  └─────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────┘
```

### State Mapping
- `sampleTab`: State union `'chapter1' | 'checklist'` toggled by the 2 tab buttons.
- `checkedSymptoms`: Key-value map `Record<number, boolean>` driving the live `Ticked: X of 16` counter.
- `sampleEmail` & `sampleSubmitted`: Controls email validation and instant success confirmation.
