# Astro Donate Button

A modern, animated donate button component for Astro.js with multi-language support and beautiful SCSS styling.

## Features

- 🎨 Modern gradient designs with smooth animations
- 🌍 Multi-language support (EN, AR, ES, FR, HI, ZH)
- 📱 Responsive design with multiple sizes
- 🎭 Four style variants (primary, secondary, outline, ghost)
- ♿ Accessible with proper focus states
- 🔄 Smooth hover and click animations
- 💝 Beautiful heart icon that pulses on hover

## Installation

```bash
npm install @yourorg/astro-donate-button
```

## Usage

### In Astro Components

```astro
---
import { DonateButton } from '@yourorg/astro-donate-button';
import '@yourorg/astro-donate-button/styles';
---

<DonateButton 
  href="checkout/?subscription=donate"
  size="lg"
  variant="primary"
  lang="en"
  client:load
/>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `href` | string | `"checkout/?subscription=donate"` | The link destination |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl'` | `'lg'` | Button size |
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost'` | `'primary'` | Button style variant |
| `target` | string | `'_self'` | Link target attribute |
| `lang` | `'en' \| 'ar' \| 'es' \| 'fr' \| 'hi' \| 'zh'` | `'en'` | Language for button text |
| `className` | string | `''` | Additional CSS classes |

### Supported Languages

- `en` - English: "Donate"
- `ar` - Arabic: "تبرع"
- `es` - Spanish: "Donar"
- `fr` - French: "Faire un don"
- `hi` - Hindi: "दान करें"
- `zh` - Chinese: "捐赠"

### Style Variants

- **Primary**: Pink to rose gradient
- **Secondary**: Purple to indigo gradient  
- **Outline**: Transparent with pink border
- **Ghost**: Minimal style with hover effect

## Customization

You can override the default styles by importing your own SCSS file after the component styles:

```astro
---
import '@yourorg/astro-donate-button/styles';
import './custom-donate-styles.scss';
---
```

## Development

```bash
# Install dependencies
npm install

# Build the package
npm run build

# Watch for changes during development
npm run dev
```

## License

MIT