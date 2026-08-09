# Language Routing Implementation Guide

## Overview

The NipponMboa Consulting website now supports URL-based language routing, allowing users to access the site in their preferred language directly via the URL path. This enables you to share language-specific links with users based on their language preference.

## Supported Languages

- **French (fr)**: Default language - `nipponmboa.com/fr`
- **English (en)**: English version - `nipponmboa.com/en`
- **Japanese (ja)**: Japanese version - `nipponmboa.com/ja`

## URL Structure

All pages now follow this pattern:
```
https://nipponmboa.com/{language-code}/
```

### Examples

- `https://nipponmboa.com/fr/` - French homepage
- `https://nipponmboa.com/en/` - English homepage
- `https://nipponmboa.com/ja/` - Japanese homepage
- `https://nipponmboa.com/fr/#about` - French homepage with anchor navigation
- `https://nipponmboa.com/en/#contact` - English homepage with anchor navigation

## How It Works

### 1. Language Detection

The website automatically detects the language code from the URL path:
- Checks if the path starts with `/en`, `/fr`, or `/ja`
- If a valid language is found, applies that language
- If no valid language is found, redirects to French (default)

### 2. Language Switching

When users click the language buttons:
- The current URL path is preserved
- Only the language prefix changes
- Hash fragments (e.g., `#about`) are maintained

Example: If a user is viewing `/en/#services` and clicks the French button, they'll be redirected to `/fr/#services`

### 3. Default Behavior

- Accessing the root URL (`nipponmboa.com`) automatically redirects to `/fr/`
- Invalid language codes redirect to `/fr/`
- The selected language persists as long as the user stays on language-specific URLs

## Implementation Details

### Files Created/Modified

1. **script.js** - Updated with URL-based language routing logic:
   - `getLangFromURL()` - Extracts language from URL path
   - `getCleanPath()` - Gets path without language prefix
   - `navigateToLang()` - Navigates to specific language
   - `initLanguage()` - Initializes language on page load

2. **404.html** - GitHub Pages SPA routing handler:
   - Intercepts 404 errors
   - Redirects to index.html with path parameter
   - Maintains URL structure

3. **.htaccess** - Apache server configuration:
   - Redirects root to `/fr/`
   - Routes language-specific paths to index.html
   - Fallback for unmatched paths

## Usage Examples

### Sharing Links

#### For French Speakers
```
https://nipponmboa.com/fr/
```

#### For English Speakers
```
https://nipponmboa.com/en/
```

#### For Japanese Speakers
```
https://nipponmboa.com/ja/
```

### Deep Linking

You can also share links to specific sections:

```
https://nipponmboa.com/fr/#poles   - French poles section
https://nipponmboa.com/en/#services - English services section
https://nipponmboa.com/ja/#contact  - Japanese contact section
```

## Testing

### Local Testing

1. Ensure you have a local server running (e.g., Live Server in VS Code)
2. Navigate to different language URLs
3. Verify language content updates correctly
4. Test language switching buttons
5. Confirm hash navigation works

### Production Testing

After deploying to GitHub Pages:

1. Test all three language URLs
2. Verify root URL redirects to `/fr/`
3. Test invalid language codes redirect properly
4. Confirm language switching maintains current section
5. Test deep linking with hash fragments

## Deployment Notes

### GitHub Pages

GitHub Pages uses the `404.html` file to handle client-side routing:
- When a language-specific URL is accessed, GitHub Pages serves `404.html`
- The 404 page redirects to `index.html` with a query parameter
- The script.js then restores the correct URL and applies the language

### Custom Domain

If using a custom domain with Apache/Nginx:
- Use the `.htaccess` file for Apache servers
- For Nginx, convert the rules to Nginx configuration format
- Ensure URL rewriting is enabled on your server

## Benefits

1. **SEO Friendly**: Search engines can index language-specific URLs
2. **User Friendly**: Users can bookmark their preferred language version
3. **Shareable**: Easy to share links for specific language audiences
4. **Persistent**: Language selection persists across navigation
5. **Professional**: Clean URLs without query parameters

## Troubleshooting

### Issue: Page shows default language instead of URL language
**Solution**: Clear browser cache and reload. Ensure JavaScript is enabled.

### Issue: 404 errors on language-specific URLs
**Solution**: For GitHub Pages, ensure `404.html` is deployed. For custom servers, verify `.htaccess` or server configuration.

### Issue: Language switching doesn't work
**Solution**: Check browser console for JavaScript errors. Verify `script.js` is properly loaded.

### Issue: Root URL doesn't redirect
**Solution**: Check server configuration. For GitHub Pages, this is handled by client-side redirect in `initLanguage()`.

## Future Enhancements

Potential improvements for the future:

1. **Browser Language Detection**: Automatically detect user's browser language on first visit
2. **Language Persistence**: Store user's language preference in localStorage
3. **Subdomain Approach**: Use `fr.nipponmboa.com`, `en.nipponmboa.com`, etc.
4. **Language Selector Menu**: Add dropdown menu for language selection
5. **Automatic Translation**: Integrate with translation services for dynamic content

## Support

For questions or issues with the language routing implementation, contact the development team or refer to the main project documentation.
