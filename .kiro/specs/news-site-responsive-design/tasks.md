# Tasks

## Task List

- [x] 1. Set up testing infrastructure
  - [x] 1.1 Install Vitest, @testing-library/react, @testing-library/jest-dom, and fast-check as dev dependencies
  - [x] 1.2 Create vitest.config.ts with jsdom environment and path alias for @/
  - [x] 1.3 Create vitest.setup.ts importing @testing-library/jest-dom matchers
  - [x] 1.4 Add test script to package.json ("test": "vitest --run")

- [x] 2. Fix ArticleCard responsive layout
  - [x] 2.1 Replace `md:flex` with `lg:flex` on the featured article root element
  - [x] 2.2 Replace `md:p-8` with `lg:p-8` on the featured article inner padding
  - [x] 2.3 Add `flex-wrap gap-1` to the badge container inside ArticleCard

- [x] 3. Fix Navbar touch targets
  - [x] 3.1 Update nav link classes to ensure minimum 44×44px touch target (add `py-3` or `min-h-[44px]`)
  - [x] 3.2 Add `flex-wrap` to the nav container as overflow safety net

- [x] 4. Fix PitchDisplay token sizing
  - [x] 4.1 Replace fixed `w-9 h-9` token size with responsive `w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9`
  - [x] 4.2 Update token font size to `text-[10px] sm:text-xs` for the number label

- [x] 5. Fix Lineup page layout
  - [x] 5.1 Remove or widen the `max-w-lg mx-auto` wrapper so PitchDisplay fills mobile width (change to `max-w-2xl mx-auto` or remove)
  - [x] 5.2 Update player list grid from `grid-cols-2` to `grid-cols-1 sm:grid-cols-2`

- [x] 6. Fix Fixtures page heading size
  - [x] 6.1 Update `<h1>` from `text-3xl` to `text-2xl sm:text-3xl`
  - [x] 6.2 Add `truncate` to the sub-detail `<p>` in MatchRow to prevent overflow on long venue+competition strings

- [x] 7. Update root layout padding
  - [x] 7.1 Update `<main>` horizontal padding from `px-4` to `px-4 sm:px-6 lg:px-8`

- [-] 8. Write property-based tests for ArticleCard
  - [ ] 8.1 Write property test: featured ArticleCard has `lg:flex` and not `md:flex` (Property 1)
  - [ ] 8.2 Write property test: news grid container has `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` (Property 2)
  - [ ] 8.3 Write property test: ArticleCard body preview has `line-clamp-3` (Property from Req 7.4)
  - [ ] 8.4 Write property test: ArticleCard badge container has `flex-wrap` (Property from Req 7.5)

- [ ] 9. Write property-based tests for Navbar
  - [ ] 9.1 Write property test: full club name element has `hidden sm:block` class (Property 3)
  - [ ] 9.2 Write property test: all nav links have touch-target padding classes (Property 4)

- [ ] 10. Write property-based tests for PitchDisplay
  - [ ] 10.1 Write property test: pitch container has `w-full` and `aspectRatio: '7 / 10'` (Property 5)
  - [ ] 10.2 Write property test: player tokens have `w-7 h-7` as base mobile size class (Property 6)
  - [ ] 10.3 Write property test: player tokens use percentage-based inline styles for positioning (Property from Req 8.4)
  - [ ] 10.4 Write property test: player name display shows only first name for multi-word names (Property from Req 8.5)

- [ ] 11. Write property-based tests for page-level layout
  - [ ] 11.1 Write property test: fixture banner flex container has `flex-col sm:flex-row` (Property 8)
  - [ ] 11.2 Write property test: lineup player list grid has `grid-cols-1 sm:grid-cols-2` (Property 7)
  - [ ] 11.3 Write property test: article detail badge container has `flex-wrap` (Property from Req 4.3)
  - [ ] 11.4 Write property test: fixtures MatchRow team name has `truncate` class (Property from Req 5.2)
  - [ ] 11.5 Write property test: fixtures MatchRow sub-detail has `text-xs` class (Property from Req 5.4)

- [ ] 12. Verify build passes
  - [ ] 12.1 Run `next build` (or lint) to confirm no TypeScript or JSX errors introduced by class changes
