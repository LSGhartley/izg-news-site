# Requirements Document

## Introduction

The Izinja Ze Game FC news site is a Next.js application styled with Tailwind CSS. Currently, several pages and components have fixed or partially responsive layouts that do not adapt well to mobile and tablet screen sizes. This feature makes the entire site fully responsive across three breakpoints: mobile (< 640px), tablet (640px–1023px), and desktop (≥ 1024px). The scope covers the Navbar, all five pages (Home, News listing, Article detail, Fixtures, Lineup), and the three shared components (ArticleCard, PitchDisplay).

## Glossary

- **Site**: The Izinja Ze Game FC Next.js news site located in `news-site/`.
- **Navbar**: The top navigation bar rendered by `components/Navbar.tsx`.
- **ArticleCard**: The reusable card component in `components/ArticleCard.tsx` used on the Home and News pages.
- **PitchDisplay**: The football pitch visualisation component in `components/PitchDisplay.tsx` used on the Lineup page.
- **Mobile**: Viewport width below 640px (Tailwind default `sm` breakpoint).
- **Tablet**: Viewport width between 640px and 1023px (Tailwind `sm` to below `lg`).
- **Desktop**: Viewport width 1024px and above (Tailwind `lg` breakpoint and above).
- **Breakpoint**: A CSS viewport-width threshold at which the layout changes.
- **Touch Target**: An interactive element's tappable area.

---

## Requirements

### Requirement 1: Responsive Navbar

**User Story:** As a visitor on a mobile device, I want the navigation bar to be usable on a small screen, so that I can access all site sections without horizontal scrolling or overlapping elements.

#### Acceptance Criteria

1. THE Navbar SHALL display the club logo and abbreviated name ("IZG") on all screen sizes.
2. WHILE the viewport is at Mobile width, THE Navbar SHALL display the full club name ("Izinja Ze Game FC") hidden and show only the logo mark.
3. WHILE the viewport is at Tablet width or wider, THE Navbar SHALL display the full club name alongside the logo mark.
4. THE Navbar SHALL display all four navigation links (Home, News, Lineup, Fixtures) on all screen sizes without horizontal overflow.
5. WHILE the viewport is at Mobile width, THE Navbar SHALL render navigation links at a font size and spacing that keeps all four links visible within the viewport width.
6. WHEN a navigation link is tapped on a touch device, THE Navbar SHALL provide a touch target of at least 44×44 CSS pixels.
7. IF the combined width of the logo and navigation links exceeds the viewport width, THEN THE Navbar SHALL wrap or resize elements to prevent horizontal scrolling of the page.

---

### Requirement 2: Responsive Home Page

**User Story:** As a visitor on any device, I want the home page to present the next fixture banner, featured article, and news grid in a readable layout, so that I can quickly find the latest club content.

#### Acceptance Criteria

1. WHILE the viewport is at Mobile width, THE Home Page SHALL display the next fixture banner as a single-column stacked layout with the match details above the "View Lineup" button.
2. WHILE the viewport is at Tablet width or wider, THE Home Page SHALL display the next fixture banner as a row with match details on the left and the "View Lineup" button on the right.
3. WHILE the viewport is at Mobile width, THE Home Page SHALL display the latest news grid as a single column.
4. WHILE the viewport is at Tablet width, THE Home Page SHALL display the latest news grid as two columns.
5. WHILE the viewport is at Desktop width, THE Home Page SHALL display the latest news grid as three columns.
6. THE Home Page SHALL display the featured article spanning the full content width on all screen sizes.

---

### Requirement 3: Responsive News Listing Page

**User Story:** As a visitor browsing on a phone, I want the news listing page to show articles in a readable grid, so that I can scan headlines without zooming or scrolling horizontally.

#### Acceptance Criteria

1. WHILE the viewport is at Mobile width, THE News Page SHALL display articles in a single-column grid.
2. WHILE the viewport is at Tablet width, THE News Page SHALL display articles in a two-column grid.
3. WHILE the viewport is at Desktop width, THE News Page SHALL display articles in a three-column grid.
4. THE News Page SHALL display the page heading and subtitle at a font size that is legible without zooming on Mobile viewports.

---

### Requirement 4: Responsive Article Detail Page

**User Story:** As a reader on a mobile device, I want the article detail page to present the article title and body text in a comfortable reading width, so that I can read without horizontal scrolling.

#### Acceptance Criteria

1. THE Article Detail Page SHALL constrain the article content to a maximum readable width on Desktop viewports.
2. WHILE the viewport is at Mobile width, THE Article Detail Page SHALL display the article title at a font size no larger than fits within the viewport without overflow.
3. THE Article Detail Page SHALL display category badge, AI-generated badge, and publication date on a single line or wrapped gracefully without overflow on Mobile viewports.
4. THE Article Detail Page SHALL render the article body text with sufficient line height and font size for comfortable reading on Mobile viewports.

---

### Requirement 5: Responsive Fixtures Page

**User Story:** As a supporter checking fixtures on a phone, I want each match row to display the teams, date, and score in a layout that fits the screen, so that I can read all information without truncation or overflow.

#### Acceptance Criteria

1. THE Fixtures Page SHALL display each match row within the full viewport width on Mobile without horizontal overflow.
2. WHILE the viewport is at Mobile width, THE Fixtures Page SHALL truncate long team or venue names with an ellipsis rather than overflowing the row boundary.
3. THE Fixtures Page SHALL display the score on the right side of each match row on all screen sizes where a score is available.
4. WHILE the viewport is at Mobile width, THE Fixtures Page SHALL display the match date and supplementary details (venue, competition) at a reduced font size that fits within the row.
5. THE Fixtures Page SHALL display the section headings ("Upcoming Fixtures", "Results") at a legible size on all screen sizes.

---

### Requirement 6: Responsive Lineup Page

**User Story:** As a fan viewing the lineup on a mobile device, I want the pitch visualisation and player list to fit the screen, so that I can see the full formation and squad without zooming.

#### Acceptance Criteria

1. THE Lineup Page SHALL scale the PitchDisplay component to fill the available content width on all screen sizes while preserving the 7:10 aspect ratio.
2. WHILE the viewport is at Mobile width, THE Lineup Page SHALL display the player list below the pitch as a single column.
3. WHILE the viewport is at Tablet width or wider, THE Lineup Page SHALL display the player list as two columns.
4. THE Lineup Page SHALL display the match title and date information without text overflow on Mobile viewports.
5. WHILE the viewport is at Mobile width, THE PitchDisplay SHALL render player tokens at a size that remains legible (number and first name visible) within the scaled pitch.

---

### Requirement 7: Responsive ArticleCard Component

**User Story:** As a visitor on any device, I want article cards to display consistently and readably regardless of screen size, so that I can scan article previews comfortably.

#### Acceptance Criteria

1. THE ArticleCard SHALL adapt its internal padding to the available width on Mobile viewports.
2. WHILE the ArticleCard is rendered in featured mode on Desktop viewports, THE ArticleCard SHALL display content in a horizontal (row) layout.
3. WHILE the ArticleCard is rendered in featured mode on Mobile viewports, THE ArticleCard SHALL display content in a vertical (stacked column) layout.
4. THE ArticleCard SHALL truncate the article body preview to three lines on all screen sizes using a line-clamp.
5. THE ArticleCard SHALL display the category badge and AI-generated badge without overflow on Mobile viewports.

---

### Requirement 8: Responsive PitchDisplay Component

**User Story:** As a fan on a small screen, I want the pitch diagram to scale proportionally, so that I can see all player positions clearly without horizontal scrolling.

#### Acceptance Criteria

1. THE PitchDisplay SHALL use a fluid width that fills its parent container on all screen sizes.
2. THE PitchDisplay SHALL maintain the 7:10 aspect ratio at all viewport widths so pitch markings remain proportionally correct.
3. WHILE the viewport is at Mobile width, THE PitchDisplay SHALL render player number tokens at a minimum size of 28×28 CSS pixels to remain tappable and legible.
4. THE PitchDisplay SHALL position all player tokens using percentage-based coordinates so token positions scale correctly with the pitch size.
5. IF a player name is too long to display fully within the pitch at Mobile width, THEN THE PitchDisplay SHALL truncate the displayed name to the player's first name only.
