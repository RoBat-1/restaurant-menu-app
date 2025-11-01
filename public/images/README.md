# Images Directory

This directory contains placeholder folders for menu item images.

## Structure

- `kaak/` - Images for kaak menu items
- `crepes/` - Images for crepe menu items  
- `juice/` - Images for juice menu items

## Adding Images

1. Place your image files (JPG, PNG, etc.) in the appropriate category folder
2. Reference them in the CSV files using paths like: `/images/kaak/zaatar.jpg`
3. The app will automatically display images if they exist, or gracefully hide them if not found

## Image Guidelines

- **Recommended size**: 800x600 pixels or similar aspect ratio
- **Format**: JPG or PNG
- **File size**: Keep under 500KB for best performance
- **Naming**: Use lowercase with hyphens (e.g., `banana-nutella.jpg`)

## Example

If you add a file at `public/images/kaak/zaatar.jpg`, reference it in `kaak.csv` as:

```csv
Za'atar Kaak,Traditional Lebanese flatbread,3.50,/images/kaak/zaatar.jpg
```

The app will handle missing images gracefully - items without images will still display properly.
