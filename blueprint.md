# Project Blueprint

## Overview

This document outlines the project structure, dependencies, and planned changes.

## Current State

- Styling: CSS
- Main component: `src/App.tsx`
- Entry point: `src/main.tsx`

## Plan: Migrate to SCSS

1.  **Install Sass:** Add the `sass` package to dev dependencies.
2.  **Rename CSS to SCSS:**
    -   `src/App.css` -> `src/App.scss`
    -   `src/index.css` -> `src/index.scss`
3.  **Update Imports:** Modify `src/App.tsx` and `src/main.tsx` to import the new `.scss` files.
