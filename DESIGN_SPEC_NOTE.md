# MFIN48 multipage parity rule

This repository treats `mfin48_gov_portal.html` as the **single source of truth** for:

- block structure;
- visual logic;
- dropdown menus;
- web-budget sign-in entry;
- client scenarios;
- "Бюджет для граждан";
- leadership;
- structure;
- documents;
- card composition;
- filters;
- animations;
- hover states.

## Non-negotiable constraints

When editing route pages in `src/pages/*` and shared UI in `src/components/*`:

- do not replace existing prototype blocks with new concepts;
- do not simplify content;
- do not change section semantics;
- do not remove dropdown interactions;
- do not replace rich blocks with simplified cards;
- do not rewrite content "as it seems better".

## Implementation intent

The multipage app must preserve the prototype content and visual behavior while splitting by routes.
