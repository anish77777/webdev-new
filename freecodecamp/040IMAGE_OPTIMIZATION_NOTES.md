# Image Optimization for Web Pages

## Overview

When using images on a website, there are three main factors to consider:

- **Image Size** (Resolution)
- **Image Format**
- **Image Compression**

These directly affect page load speed, data usage, and user experience.

---

## 1. Image Size (Resolution)

### Definition

Image size refers to the width and height in pixels.

### Example

```
640 × 480
├── 640 → width
└── 480 → height
```

### Why Size Matters

If your website displays an image at 640×480, but you serve an image that is 1920×1080:

- The browser still downloads the larger file
- Extra data is wasted
- Page loads slower

### Best Practice

✅ **Always resize images to the exact size they will be displayed on the page.**

**Result:** Smaller resolution → smaller file size → faster loading

---

## 2. Image Format

### Common Formats (Traditional)

- PNG
- JPG

These formats are widely used but not the most efficient today.

### Modern Optimized Formats

- **WEBP**
- **AVIF**

### Why WEBP / AVIF Are Better

✅ Smaller file sizes
✅ Better quality at lower sizes
✅ Faster page loads

**Recommendation:** Unless you need to support very old browsers, modern formats are recommended.

---

## 3. Image Compression

### Definition

Compression reduces the file size of an image.

### Compression Tools

- Local tools (e.g., `pngcrush`)
- Online image compressors

### Important Concept: Lossless vs Lossy

#### Lossless Compression

- Original image can be perfectly restored
- No quality loss
- Larger file size

#### Lossy Compression

- Some quality is permanently lost
- Smaller file size
- Better for photos

### ⚠️ JPG Warning

**JPG is not lossless**

Compressing JPG multiple times will reduce image quality. Avoid re-compressing JPG files.

---

## Summary Checklist

- [ ] Resize images to display size
- [ ] Use WEBP or AVIF format when possible
- [ ] Apply appropriate compression (lossless for graphics, lossy for photos)
- [ ] Test page load speed
- [ ] Monitor data usage
