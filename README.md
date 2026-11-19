# Northern Ireland Escape 2026/27

A responsive, bilingual (Portuguese / English) travel microsite for the Northern Ireland New Year trip, built with plain HTML, CSS and JavaScript. No build step or framework is required.

## Features

- PT / EN language switch; the selected language is remembered in the browser.
- Destination carousel with photo lightbox.
- Four-day itinerary.
- Embedded map preview and Google Maps driving route link.
- Shared-cost calculator (accommodation in GBP; car rental and fuel in EUR).
- Interactive checklist saved in the current browser.
- Copy itinerary and share it through WhatsApp.
- Responsive layout for phones, tablets and desktop.

## Run locally

Open `index.html` in a modern browser. An internet connection is required for the remote photos, Google Fonts and embedded map.

## Publish with GitHub Pages

1. Create a GitHub repository, e.g. `northern-ireland-trip`.
2. Upload `index.html`, `styles.css`, `script.js` and `README.md` to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then save.
6. Wait for GitHub Pages to publish the site; the public URL will appear on the Pages settings screen.

## Notes before the trip

- Dates shown: 30 December 2026 to 2 January 2027.
- The starting budget values are estimates entered for planning. Accommodation is displayed in GBP, while rental car and fuel are displayed in EUR; the calculator deliberately does not convert currencies.
- Opening hours, admission, weather, bridge access, rental-car cross-border permission and any holiday schedules must be checked with the official providers before departure.
- The itinerary is a proposal, not a guaranteed timetable. The Causeway Coastal Route is weather-dependent and the order of stops may need to change.

## Images and licensing

Destination photographs are loaded from Wikimedia Commons using `Special:FilePath` links. Image availability and licence terms can change; check each original Commons file page before reusing or redistributing any image. The website also loads Google Fonts and a Google Maps embed from external services.

## Latest itinerary update

- 30 December: Limerick → Dunmurry, Titanic Belfast and central Belfast.
- 31 December: Carrick-a-Rede, Giant's Causeway, Dunluce Castle and Mussenden Temple; return for New Year's Eve.
- 1 January: outdoor walking visit to Derry~Londonderry (City Walls, Guildhall exterior, Peace Bridge and Bogside murals). Museum of Free Derry is listed as closed from 21 December 2026 to 2 January 2027.
- 2 January: return to Limerick.

The PT / EN selector uses a delegated click handler and safe local-storage access. If browser storage is disabled, the language can still be changed for the current page session.

Photo source pages added in this update:
- Titanic Belfast: https://commons.wikimedia.org/wiki/File:Titanic_Belfast.jpg
- Derry City Walls: https://commons.wikimedia.org/wiki/File:Derry_City_Walls_06.jpg
Please retain the source and licence information when reusing the images.

## Visual and content update

- Removed the cost-planning / budget section and its navigation link.
- Removed the final-preparations checklist section.
- Removed Bangor & Ballyholme Beach from the destination carousel.
- Replaced the Portuguese intro headline “Natureza selvagem” with “Paisagens incríveis” and the English equivalent with “Breathtaking views”.
- Redesigned the itinerary as image-led day cards, with a dedicated destination photo for each day and responsive layouts for mobile screens.
- Updated the Derry day label to describe the actual city visit rather than calling it a relaxed day.
