# Quick Start Guide - Restaurant Menu App

## 🚀 Get Started in 3 Steps

### 1. Start the App
```bash
cd restaurant-menu
npm run dev
```

### 2. Open in Browser
Navigate to: **http://localhost:5173**

### 3. View Your Menu!
You'll see three sections with demo items:
- 🥖 **Kaak** - 8 items
- 🥞 **Crepes** - 12 items  
- 🧃 **Fresh Juices** - 12 items

---

## 📝 Editing Menu Items

### Simple 3-Column CSV Format

All menu items are in `public/data/` folder:
- `kaak.csv`
- `crepes.csv`
- `juice.csv`

### CSV Template
```csv
name,description,price,image
Item Name,Item description here,5.50,/images/category/photo.jpg
Another Item,Leave image blank if no photo,3.00,
```

### Quick Edit Example

Open `public/data/kaak.csv` and add:
```csv
Chocolate Kaak,Sweet kaak with chocolate,4.00,
```

Save and refresh - your new item appears instantly! ✨

---

## 🖼️ Adding Photos (Optional)

### Where to Put Images
```
public/images/
├── kaak/       ← Put kaak photos here
├── crepes/     ← Put crepe photos here
└── juice/      ← Put juice photos here
```

### How to Reference
In your CSV file:
```csv
Za'atar Kaak,Traditional flatbread,3.50,/images/kaak/zaatar.jpg
```

**No photo?** Just leave the image field empty:
```csv
Plain Kaak,Simple and delicious,2.50,
```

The app handles missing images gracefully! 😊

---

## ✏️ Customization

### Change Restaurant Name
Edit `src/App.jsx`, line 51:
```jsx
<h1 className="restaurant-name">🍽️ Your Restaurant Name</h1>
<p className="restaurant-tagline">Your Tagline Here</p>
```

### Change Colors
Search and replace these colors in CSS files:
- `#667eea` - Primary purple-blue
- `#764ba2` - Secondary purple

---

## 🎯 Tips

✅ **CSV Tips:**
- Use commas to separate columns
- No commas in descriptions (or use quotes)
- Price format: `5.50` (no currency symbol)
- Image path starts with `/images/`

✅ **Image Tips:**
- Recommended size: 800x600 pixels
- Format: JPG or PNG
- Keep under 500KB
- Use descriptive names: `banana-nutella.jpg`

✅ **Performance:**
- App loads all 3 CSVs simultaneously
- Gracefully handles missing images
- Fully responsive on mobile

---

## 🏗️ Build for Production

```bash
npm run build
npm run preview
```

The `dist/` folder contains your production-ready files!

---

## 📁 What You Got

```
restaurant-menu/
├── public/
│   ├── data/          # ← Edit CSV files here
│   │   ├── kaak.csv
│   │   ├── crepes.csv
│   │   ├── juice.csv
│   │   └── template.csv
│   └── images/        # ← Add photos here
│       ├── kaak/
│       ├── crepes/
│       └── juice/
├── src/
│   ├── components/    # React components
│   ├── utils/         # CSV parser
│   ├── App.jsx        # Main app
│   └── *.css          # Styles
└── README.md          # Full documentation
```

---

## 🆘 Common Questions

**Q: How do I add a new menu section?**  
A: See the "Adding More Menu Sections" in README.md

**Q: Can I use other currencies?**  
A: Yes! Just update the footer in `src/App.jsx`

**Q: Do I need to restart after editing CSV?**  
A: No! Just refresh the browser

**Q: What if an image doesn't load?**  
A: The app hides it automatically - the item still displays

---

**Need more details?** Check out the full **README.md** file! 📚

**Enjoy your menu app! 🎉**
