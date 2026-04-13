# The Immortal Yoga Academy - Website

A premium, responsive, single-page website for **The Immortal Yoga Academy**, Raipur. This website represents the official digital presence for the studio located at Tatibandh (Near AIIMS).

## 🚀 Key Features
- **Authentic Branding:** Uses real flyers and class photos from the academy.
- **Mobile-First Design:** Fully responsive across smartphones, tablets, and desktops.
- **Modern Wellness Aesthetic:** Earthy color palette (Sage Green, Gold, Ivory) tailored for a yoga sanctuary.
- **Dynamic Interaction:** Smooth scroll-reveal animations using `ScrollReveal.js`.
- **Integrated Booking:** Persistent WhatsApp button for direct communication with the studio.
- **Local SEO & Maps:** Integrated LocalBusiness JSON-LD schema and an updated Google Maps embed for precise location.

## 📂 File Structure
```
/project-root
├── index.html        # Core structure, SEO & Content
├── style.css         # Custom design system & responsiveness
├── script.js         # Navigation logic & animations
├── netlify.toml      # Deployment & form configuration
└── assets
    └── images
        ├── IMG-20260413-WA0137.jpg # Hero / General Yoga
        ├── IMG-20260309-WA0001.jpg # Main Academy Flyer
        ├── IMG-20260413-WA0135.jpg # Aerial Yoga Poster
        ├── IMG-20260413-WA0136.jpg # Advanced Batch Poster
        └── IMG-20260413-WA0138.jpg # Kids Special Poster
```

## 🛠️ Customization Guide
1. **Changing Images:**
   - Place your new image in `assets/images/`.
   - Update the `src` attribute in `index.html` to point to the new filename.
2. **Updating Schedules:**
   - Locate the `<section id="schedule">` in `index.html`.
   - The table is structured for Morning and Evening batches based on the academy's flyers.
3. **Primary Contact:**
   - Phone Numbers: `+91 74411 55307` and `+91 99929 05644`.
   - To change the WhatsApp link, update the `wa.me` URL in both the Hero section and the floating button at the bottom.

## 🌐 Deployment to Netlify
This site is pre-configured for **Netlify**:
1. **Netlify Drop:** Zip the entire folder and drag it onto the Netlify Drop dashboard.
2. **Netlify Forms:** The contact form is already set up to capture leads. Once live, submissions will appear in your Netlify "Forms" dashboard.

---
*Developed for The Immortal Yoga Academy, Raipur. Managed by Mr. Bhupendra Sahu.*
