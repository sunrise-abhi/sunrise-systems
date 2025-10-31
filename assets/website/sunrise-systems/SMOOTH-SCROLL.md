# Smooth Scroll Implementation

This site uses [Lenis](https://lenis.darkroom.engineering/) for buttery-smooth scrolling throughout the entire website.

## Features

### ✅ Automatic Smooth Scrolling
- Works on all pages across the site
- Smooth, eased scrolling motion when using mouse wheel or trackpad
- Premium, high-end feel similar to luxury brand websites

### ✅ Smart Behavior
- **Respects User Preferences**: Automatically disabled for users with `prefers-reduced-motion` setting
- **Mobile Optimized**: Disabled on mobile devices for better performance and native feel
- **Desktop Only**: Smooth scroll only applies to desktop users for optimal experience

### ✅ Performance
- Lightweight (~3KB)
- Uses requestAnimationFrame for optimal performance
- No impact on mobile performance

## Configuration

The smooth scroll is configured in `src/components/SmoothScroll/index.tsx`:

```typescript
duration: 1.2,           // Scroll duration
easing: (t) => ...,      // Custom easing function
smoothWheel: true,       // Smooth mouse wheel scrolling
smoothTouch: false,      // Disabled for touch (mobile)
```

## How It Works

1. **Initialization**: SmoothScroll component is added to root layout
2. **Device Detection**: Checks if user is on mobile device
3. **Motion Preference Check**: Respects `prefers-reduced-motion`
4. **Conditional Loading**: Only initializes Lenis on desktop with no motion preference
5. **Animation Loop**: Uses RAF to smoothly interpolate scroll position

## Disabling for Specific Elements

If you need to disable smooth scroll for specific elements (like modals or fixed elements), add the `data-lenis-prevent` attribute:

```html
<div data-lenis-prevent>
  <!-- This element will use native scrolling -->
</div>
```

## Compatibility

- Works alongside existing anchor link smooth scrolling
- Compatible with all modern browsers
- Gracefully degrades to native scrolling on unsupported devices

## Performance Notes

- No performance impact on mobile (disabled)
- Minimal overhead on desktop (~60fps)
- Respects user preferences for accessibility
- Clean cleanup on component unmount

