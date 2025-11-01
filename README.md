# Restaurant Menu App

A modern, responsive React application for displaying a restaurant menu with three sections: Kaak, Crepes, and Fresh Juices. The menu items are loaded from CSV files, making it easy to update the menu without touching any code.

## Features

- 📱 Fully responsive design
- 🎨 Modern and attractive UI with smooth animations
- 🖼️ Support for menu item images
- 📄 CSV-based menu management
- ⚡ Fast loading with Vite
- 🎯 Three menu sections: Kaak, Crepes, and Fresh Juices

## Getting Started

### Installation

1. Navigate to the project directory:
```bash
cd restaurant-menu
```

2. Install dependencies (if not already installed):
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit: `http://localhost:5173`

### Building for Production

To create a production build:
```bash
npm run build
```

To preview the production build:
```bash
npm run preview
```

## Managing Menu Items

### CSV File Structure

Menu items are stored in CSV files located in `public/data/`:
- `kaak.csv` - Kaak menu items
- `crepes.csv` - Crepes menu items
- `juice.csv` - Fresh juice items
- `template.csv` - Template for creating new menu items

### CSV Format

Each CSV file has the following columns:

```csv
name,description,price,image
```

- **name**: The name of the menu item (required)
- **description**: A brief description of the item (required)
- **price**: Price in USD (required, use format like 5.50)
- **image**: Path to the image file (optional, leave empty if no image)

### Adding New Menu Items

1. Open the appropriate CSV file in `public/data/`
2. Add a new line with the item details:

```csv
Chocolate Kaak,Rich chocolate filled kaak bread,4.25,/images/kaak/chocolate.jpg
```

3. If the item doesn't have an image, leave the image field empty:

```csv
Plain Kaak,Simple and delicious plain kaak,2.50,
```

4. Save the file - changes will appear when you refresh the page

### Adding Images

1. Create the appropriate folder in `public/images/`:
   - `public/images/kaak/` for kaak items
   - `public/images/crepes/` for crepe items
   - `public/images/juice/` for juice items

2. Add your image files (JPG, PNG, etc.)

3. Reference the image in the CSV file:
```csv
Item Name,Description,5.00,/images/category/filename.jpg
```

**Note**: If an image path is specified but the file doesn't exist, the app will gracefully hide the image placeholder and still display the item information.

## Project Structure

```
restaurant-menu/
├── public/
│   ├── data/           # CSV files for menu items
│   │   ├── kaak.csv
│   │   ├── crepes.csv
│   │   ├── juice.csv
│   │   └── template.csv
│   └── images/         # Menu item images (create as needed)
│       ├── kaak/
│       ├── crepes/
│       └── juice/
├── src/
│   ├── components/     # React components
│   │   ├── MenuItem.jsx
│   │   ├── MenuItem.css
│   │   ├── MenuSection.jsx
│   │   └── MenuSection.css
│   ├── utils/          # Utility functions
│   │   └── csvParser.js
│   ├── App.jsx         # Main app component
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── package.json
└── README.md
```

## Customization

### Changing Restaurant Name

Edit `src/App.jsx` and update the header section:

```jsx
<h1 className="restaurant-name">🍽️ Your Restaurant Name</h1>
<p className="restaurant-tagline">Your Tagline Here</p>
```

### Changing Colors

The main color scheme is defined in the CSS files. The primary gradient is:
- Primary: `#667eea` (purple-blue)
- Secondary: `#764ba2` (purple)

To change colors, search for these hex codes in:
- `src/App.css`
- `src/components/MenuSection.css`
- `src/components/MenuItem.css`

### Adding More Menu Sections

1. Create a new CSV file in `public/data/` (e.g., `desserts.csv`)
2. Add the new section in `src/App.jsx`:

```jsx
const [dessertItems, setDessertItems] = useState([]);

// In useEffect:
const [kaak, crepes, juice, desserts] = await Promise.all([
  fetchCSV('/data/kaak.csv'),
  fetchCSV('/data/crepes.csv'),
  fetchCSV('/data/juice.csv'),
  fetchCSV('/data/desserts.csv')
]);

setDessertItems(desserts);

// In the return statement:
<MenuSection 
  title="Desserts" 
  items={dessertItems} 
  icon="🍰"
/>
```

## Technologies Used

- **React 19** - UI library
- **Vite 7** - Build tool and dev server
- **CSS3** - Styling with modern features
- **CSV** - Data format for menu items

## Browser Support

This app works in all modern browsers that support ES6+ features:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## License

This project is open source and available for personal or commercial use.

## Support

For issues or questions, please check the code comments or create an issue in the repository.

---

**Enjoy your menu app! 🍽️**

