# Design Evaluation Report

Project evaluated: `kiesha-portfolio`  
Evaluation focus: visual design, usability, navigation, responsiveness, content presentation, and accessibility  
Date evaluated: May 8, 2026

## Executive Summary

The project has a clear visual direction: soft colors, elegant serif headings, smooth motion, large personal photography, and a calm travel-journal atmosphere. It fits the subject of an educational tour portfolio well and gives the site a personal identity rather than feeling like a plain documentation page.

The strongest design areas are the welcoming tone, consistent use of cards and galleries, destination-based navigation, and the use of real tour images. The main design problems are mobile overflow, inconsistent content framing between "internship" and "educational tour" wording, some weak affordances for clickable elements, and performance risk caused by many large image assets.

Overall design rating: **8 / 10**

## Evaluation Method Used

This review uses design-focused heuristic evaluation and a light cognitive walkthrough:

- Can a first-time user understand what the site is about?
- Can the user move from the welcome screen to the destination pages easily?
- Are visual hierarchy, spacing, typography, and imagery consistent?
- Are interactive elements clear before the user hovers or clicks?
- Does the layout remain readable on desktop and mobile?
- Are accessibility and performance concerns visible from the design implementation?

The project was also verified in the browser using a desktop home screenshot and a mobile Cebu route screenshot. A production build was run successfully.

## Design Strengths

### 1. Clear Mood and Visual Identity

The site uses a gentle pink, cream, and muted green palette with large editorial serif typography. This gives the portfolio a soft, reflective, and personal style that matches an educational travel journal.

The home hero is minimal and focused. The "Welcome" headline, short description, and down-arrow create a calm first impression without overwhelming the user.

### 2. Strong Personal Branding

The About Me section presents the student identity clearly through:

- Name and course/year level
- Profile photo carousel
- GitHub link
- Short personal introduction
- Technology stack marquee

This helps the project feel like a portfolio, not only a gallery.

### 3. Good Use of Real Visual Assets

The project uses actual location, tour, certificate, and journal images. This is a major design advantage because the site is about documenting a real experience.

The Cebu and Bohol pages also use location-specific hero images, which improves context and makes the destination choice feel meaningful.

### 4. Consistent Section Structure

Most sections follow a predictable pattern:

- Small uppercase label
- Large serif heading
- Short supporting description
- Grid or gallery content

This consistency makes the page easy to scan.

### 5. Interactive Galleries Add Engagement

The destination cards, profile card, day galleries, journal modal, and lightbox interactions make the site feel more complete than a static portfolio.

Hover states, image scaling, modal previews, and carousel controls support exploration and make the content more memorable.

## Design Issues

### 1. Mobile Layout Has Horizontal Cropping

Severity: **High**

In the mobile Cebu screenshot, some content extends beyond the right edge of the viewport. The visible examples include:

- The location hero paragraph being cut off on the right
- The "Photo Gallery" supporting text being cut off
- The top mobile label only showing partial text, such as "EDUC T..."

This is a major responsive design issue because mobile users cannot read the full content.

Recommended fixes:

- Add `overflow-x-hidden` to the page wrapper or body only after fixing the cause.
- Review fixed-width containers, long flex rows, and text blocks inside `LocationHero` and `PhotoCarousel`.
- Use `min-w-0`, `flex-wrap`, and safer responsive text widths where needed.
- Check all routes at 375px, 390px, and 430px widths.

### 2. Some Text Content Is Inconsistent With the Project Theme

Severity: **Medium**

The site is mainly about the Cebu-Bohol Educational Tour, but some sections still use internship-related language, such as:

- "Portfolio & Internship Journal"
- "Internship Days"
- "First day at the office"
- "Hands-on development work"

This weakens the storytelling because users may wonder whether the project is about an internship or an educational tour.

Recommended fixes:

- Rename "Internship Days" to "Tour Highlights" or "Educational Tour Days".
- Replace internship descriptions with actual day summaries from Cebu and Bohol.
- Keep all hero, gallery, certificate, and journal copy aligned around the educational tour.

### 3. The Welcome Hero Is Visually Clean but Sparse

Severity: **Medium**

The first screen is elegant, but it does not show a photo, map, location hint, or personal image. For a travel-documentation portfolio, the first viewport could communicate the subject more quickly.

Recommended fixes:

- Add a subtle full-width travel image, blurred map texture, or location-based visual cue.
- Keep the minimal typography, but include a stronger first-viewport signal that this is about Cebu and Bohol.
- Consider showing "Cebu + Bohol Educational Tour" more prominently than only "EDUC TOUR 2025".

### 4. Clickable Elements Need Clearer Affordance

Severity: **Medium**

Some interactive elements rely heavily on hover states. This works on desktop but is weaker on mobile, where hover does not exist.

Examples:

- Destination cards reveal the "Explore" cue mainly on hover.
- The profile card says "Click to see next photo" only on hover.
- Certificate details appear only on hover and are not connected to an actual lightbox action.

Recommended fixes:

- Show a persistent icon or short label for tappable cards.
- Add visible "View photos", "Open journal", or "View certificate" actions.
- Make the certificate card clickable if it visually behaves like an interactive object.

### 5. Navigation Is Useful but Mobile Could Be Clearer

Severity: **Medium**

The desktop navigation is understandable. On mobile destination pages, the home icon and Cebu/Bohol switcher are useful, but the right-side label is partially cut off in the screenshot. The section links are also hidden on mobile.

Recommended fixes:

- Remove or shorten the mobile "EDUC TOUR 2025" label if space is limited.
- Add a compact menu or anchor buttons for "Gallery" and "Companies" on mobile.
- Ensure the active destination switcher does not crowd the header.

### 6. Visual Hierarchy Is Good, but Some Sections Feel Repetitive

Severity: **Low to Medium**

The section pattern is consistent, but repeated large headings, centered subtitles, and card grids can start to feel similar across the page.

Recommended fixes:

- Vary one or two sections with a timeline, map-based layout, or day-by-day narrative.
- Use company visit cards with more specific learning outcomes or company logos if available.
- Make the journal section feel more academic by highlighting reflection, not only images.

### 7. Accessibility Needs More Attention

Severity: **Medium**

The site includes useful `aria-label` values in some areas, but there are still design-accessibility concerns:

- Hover-only details are not equally available to keyboard and touch users.
- Some image alt text is generic, such as "Day 1 - Photo 1".
- Modal focus management is limited.
- Animated effects do not fully account for users who prefer reduced motion.

Recommended fixes:

- Use descriptive alt text for key images.
- Add keyboard focus styles to all cards and modal controls.
- Ensure modals trap focus and return focus after closing.
- Respect `prefers-reduced-motion` for animated entrances, bouncing arrows, card swaps, and carousels.

### 8. Image Performance May Affect the User Experience

Severity: **Medium**

The production build succeeded, but many generated image assets are large. Several images are above 1 MB, and the largest is about 2.3 MB. Since the site is image-heavy, slow loading can make the design feel less polished.

Recommended fixes:

- Compress large PNG/JPG files.
- Convert gallery images to WebP or AVIF where possible.
- Use responsive image sizes for thumbnails and full-screen previews.
- Lazy-load below-the-fold images.

## Page-by-Page Notes

### Welcome Page

Strengths:

- Strong first impression through typography and spacing.
- The About Me section gives useful personal context.
- Destination selection is simple and easy to understand.

Issues:

- First screen could show a stronger travel or Cebu-Bohol visual signal.
- Some footer text displays encoding artifacts, such as `Â©` and `Â·`.
- Hover-only cues weaken mobile usability.

### Cebu and Bohol Pages

Strengths:

- Location-specific hero images support the destination theme.
- Gallery grouping by day makes sense for tour documentation.
- Company visit section gives academic/professional context.

Issues:

- Mobile text overflow is the most serious design defect found.
- Company cards are visually clean but could include richer content.
- Mobile navigation hides useful section links.

### Gallery and Journal Experience

Strengths:

- Gallery cards are visually engaging.
- Journal modal gives users a way to inspect documentation.
- Page indicators help users understand progress.

Issues:

- Some image labels are generic.
- Journal pages are image-only, so the content is not searchable or accessible.
- Modal behavior should be improved for keyboard users.

### Certificate Section

Strengths:

- Certificate image is prominent and visually framed.
- The animated border draws attention to achievement content.

Issues:

- Hover overlay is not enough for mobile users.
- A `Lightbox` component is included but configured as always closed.
- The certificate should either be clearly static or fully clickable.

## Recommended Priority Fixes

1. Fix mobile horizontal overflow on the Cebu and Bohol pages.
2. Replace internship wording with educational tour wording throughout the site.
3. Add persistent tap/click affordances for destination cards, gallery cards, profile card, certificate, and journal cards.
4. Compress and optimize large gallery images.
5. Improve accessibility for modals, keyboard navigation, alt text, and reduced motion.
6. Strengthen the first viewport with a Cebu-Bohol visual cue.
7. Add richer reflection content to company and journal sections.

## Final Assessment

The project is visually appealing and already communicates a thoughtful, personal educational tour experience. Its design direction is strong: elegant typography, soft colors, real images, and interactive galleries make the portfolio feel memorable.

The biggest design weakness is responsiveness. The mobile cropping issue should be fixed before presentation or deployment because it directly affects readability. After that, the project would benefit most from clearer educational-tour copy, stronger mobile affordances, and image optimization.

Final score: **8 / 10**

