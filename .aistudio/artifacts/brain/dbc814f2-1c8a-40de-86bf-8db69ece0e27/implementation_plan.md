# Taptik — Premium NFC Business Card E-Commerce Platform

A refined, high-conversion e-commerce platform for **Taptik**, an NFC business card brand designed for students, freelancers, executives, and modern enterprises. The site explains the practical value of tap-to-share networking, showcases real card craftsmanship (Matte Black PVC, Eco Bamboo Wood, and Brushed Steel Metal), provides an interactive smartphone profile preview simulator, and delivers a frictionless shopping cart and checkout experience.

---

## User Review & Critical Decisions

> [!IMPORTANT]
> The platform is architected around honest, trustworthy e-commerce principles for the Turkish market:

- **Brand Identity**: Selected **Taptik** ("Tek dokunuşla profesyonel kimliğinizi paylaşın"). Clean, modern, memorable Turkish-first brand wordmark with universal appeal.
- **Card Variants & Craftsmanship**: Three flagship product lines with distinct tactile finishes:
  1. *Taptik Klasik (Matte Black PVC)* — Waterproof, durable, lightweight, accessible entry for students and freelancers.
  2. *Taptik Bambu (Doğal Bambu Ahşap)* — Eco-friendly, organic wood grain, laser-etched precision.
  3. *Taptik Metal (Fırçalanmış Paslanmaz Çelik)* — Heavyweight, premium luxury finish for executives and founders.
- **Interactive Experience**: Includes an interactive phone tap demo (showing what recipients actually see when an NFC card taps iOS/Android) plus a live card visualizer where buyers see their name and title on the card in real-time.
- **Payment & Checkout Boundary**: Fully functional client-side checkout calculation (subtotal, shipping threshold at 500₺, tax breakdown, delivery address validation, order review, and mock order confirmation with generated order tracking ID). Clear notice of payment gateway integration readiness (Iyzico / Stripe / PayTR webhook boundary).
- **Corporate & Bulk Orders**: Dedicated B2B inquiry flow with volume pricing tiers, custom company logo printing options, and client-validated quotation requests.

---

## 1. Overview & Core Concept

- **What It Does**: Visitors discover, customize, and purchase physical NFC business cards. The site provides clear education on NFC compatibility (no app required for recipients), demonstrates the digital profile tap experience, allows instant card personalization, and processes orders smoothly.
- **Target Audience**: University students & fresh graduates, entrepreneurs & founders, creative freelancers, sales professionals, and corporate enterprise teams.
- **Key Value**: *"Kartvizit yığınlarına ve kağıt israfına son. Tek bir dokunuşla telefon rehberine kaydedilin, sosyal ve profesyonel bağlantılarınızı anında aktarın."*

---

## 2. User Experience & Visual Design

### Key User Flows
1. **Home & Education**: Hero visual $\to$ "Nasıl Çalışır?" 3-step tactile walkthrough $\to$ Interactive Smartphone Tap Simulator $\to$ Featured Product Catalog $\to$ Target Audience Persona Tabs $\to$ Real FAQ & Transparency Guide $\to$ Footer with verified legal/support links.
2. **Product Catalog & Filtering**: Browse by material (Tümü, PVC, Ahşap, Metal) and sort by price / popularity. Dynamic search filter.
3. **Product Detail Page (PDP)**: Contiguous purchase module with multi-angle photo gallery, material finish selection, real-time custom name/title preview on card mockup, quantity selector, compatibility checklist, and instant add-to-cart.
4. **Shopping Cart & Checkout**: Slide-over cart drawer with live subtotal, free shipping progress bar ($\ge 500$ ₺ free shipping), quantity adjustments, item removal, and persistent local storage. Smooth checkout view with delivery address form, order summary, and order success receipt.
5. **Corporate & B2B Inquiries**: Bulk order estimator (10 - 500+ cards), volume discount breakdown, and quotation form.

### Visual Identity & Theme
- **Aesthetic Direction**: Minimalist architectural luxury and tactile industrial design. Deep charcoal, warm off-white, and disciplined brushed steel tones.
- **Color Palette (60-30-10)**:
  - `Canvas (60%)`: Crisp off-white (`#FBFBFB`) and clean pure white surfaces (`#FFFFFF`).
  - `Structural (30%)`: Deep charcoal ink text (`#111827`), hairline neutral dividers (`#E5E7EB`), slate secondary text (`#6B7280`).
  - `Accent (10%)`: Cobalt / Petrol Blue (`#1E3A8A` / `#2563EB`) reserved strictly for primary purchase CTAs, active filters, and interactive tap highlights.
- **Typography**: Refined modern pairing: *Plus Jakarta Sans* for clean, authoritative geometric headings and navigation; *Inter / DM Sans* for legible body copy; *tabular numerals* for all prices in TRY (₺).
- **Anti-Slop Discipline**: No decorative pulsing green dots, no code-comment titles (`// 01`), no fake testimonials or fabricated metrics, no rounded pill metadata badges, and clean hairline container boundaries.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Interactive Phone Tap Simulator on Homepage**
  - *Chosen Approach*: Build a live interactive iPhone/Android mockup where users tap an NFC card trigger to see a real digital profile animate into view (with clickable vCard download, LinkedIn, phone call, and portfolio links).
  - *Why*: The #1 hesitation for NFC card buyers is "what does the other person actually see?". Showing this interactively converts skeptics into buyers.
- **Decision 2: Realistic Studio Imagery via `generate_image`**
  - *Chosen Approach*: Generate high-fidelity studio product photography of matte black PVC, natural bamboo wood, and brushed stainless steel NFC cards using the image generation tool.
  - *Why*: Eliminates broken external placeholders and provides a tangible, tactile brand experience.
- **Decision 3: Persistent Cart & Realistic Checkout State**
  - *Chosen Approach*: Persist cart and active customizations in `localStorage`. Checkout includes full shipping form validation, order summary calculation, and a clear "Payment Sandbox Mode" badge documenting where Iyzico/PayTR credentials slot in.
  - *Why*: Provides a 100% testable e-commerce transaction from cart to confirmed order receipt without dead buttons.

---

## 4. Technical Architecture & Data Strategy

```
┌────────────────────────────────────────────────────────────────────────────┐
│                             Taptik App (React 19)                          │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│  ┌──────────────────────────────────────────────────────────────────────┐  │
│  │                Top Navigation Bar (3-Zone Contract)                  │  │
│  │   [ Taptik ]   —   [ Ürünler | Nasıl Çalışır? | Kurumsal | SSS ]   — │  │
│  │   [ Arama + Sepet (Item Badge) ]                                     │  │
│  └──────────────────────────────────────────────────────────────────────┘  │
│                                                                            │
│  ┌──────────────────────────────────────────────────────────────────────┐  │
│  │                        Active View Router                            │  │
│  │                                                                      │  │
│  │  [ Home View ]           [ Catalog View ]        [ Product Detail ]  │  │
│  │  • Hero Section          • Category Tabs         • Interactive PDP   │  │
│  │  • Value Proposition     • Search & Sort         • Live Card Custom  │  │
│  │  • Tap Phone Simulator   • Responsive Grid       • Gallery & Specs   │  │
│  │  • Audience Persona      • Empty States          • Add to Cart       │  │
│  │  • Real FAQ Accordion                                                │  │
│  │                                                                      │  │
│  │  [ Cart Drawer ]         [ Checkout View ]       [ Corporate B2B ]   │  │
│  │  • Quantity Steppers     • Address & Delivery    • Bulk Tier Calc    │  │
│  │  • Free Ship Bar         • Order Breakdown       • RFQ Form          │  │
│  │  • Persistent Storage    • Order Confirmation    • Validation        │  │
│  └──────────────────────────────────────────────────────────────────────┘  │
│                                                                            │
│  ┌──────────────────────────────────────────────────────────────────────┐  │
│  │                     Shared State & Data Stores                       │  │
│  │  • useCartStore (Cart items, quantities, subtotal, localStorage sync)│  │
│  │  • productsData (Structured catalog: PVC, Bamboo, Steel Metal, etc.) │  │
│  │  • activeNavigation (Page / modal / drawer route state)              │  │
│  └──────────────────────────────────────────────────────────────────────┘  │
│                                                                            │
│  ┌──────────────────────────────────────────────────────────────────────┐  │
│  │               Footer & Compliance (Turkish Legal Stubs)              │  │
│  │   • Mesafeli Satış Sözleşmesi · İade & Teslimat · Gizlilik Politikası │  │
│  └──────────────────────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────────────────────┘
```

### Component & State Mapping
- `src/types/index.ts`: Product, CartItem, Order, Category, and CorporateInquiry interfaces.
- `src/data/products.ts`: Structured products list with realistic Turkish lira pricing, technical specs (NTAG216 chip, 888 bytes memory, 100k read/write cycles, universal iOS/Android compatibility).
- `src/context/CartContext.tsx`: Full cart reducer with local storage persistence, item count, promo discount logic, and toast notifications.
- `src/components/Navbar.tsx`: 3-zone clean top bar with cart toggle and mobile drawer.
- `src/components/PhoneSimulator.tsx`: Interactive tap animation showing what digital contact profile pops up.
- `src/components/CardVisualizer.tsx`: Interactive live SVG/Canvas card customizer for user's name & company.
- `src/components/ProductCard.tsx` & `ProductDetail.tsx`: Fluid product showcase with image gallery and variant options.
- `src/components/CartDrawer.tsx` & `CheckoutModal.tsx`: Complete e-commerce order completion flow.
- `src/components/CorporateInquiry.tsx`: B2B wholesale quotation form.
- `src/components/Footer.tsx`: Full legal compliance links, FAQ, and contact info.
