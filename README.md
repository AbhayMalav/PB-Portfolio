# 🐦 Pesky Birds Portfolio

A modern, responsive portfolio website for **Pesky Birds** - a game development studio specializing in Minecraft Bedrock addons and DLC.

![HTML](https://img.shields.io/badge/HTML-66.5%25-orange)
![CSS](https://img.shields.io/badge/CSS-26.5%25-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-7.0%25-yellow)

## 🎮 About Pesky Birds

Founded in 2023 by **"Luciosinferno"**, Pesky Birds is a small game development studio creating engaging Minecraft Bedrock addons and DLC. What began as a hobby in 2017 has grown into a dedicated studio, releasing custom gameplay experiences, skins, and textures enjoyed by players worldwide.

### 📊 Studio Stats
- **17+** Published Assets
- **83.3K+** Total Downloads
- **4.9 ★** Average Rating
- Active on multiple platforms (MCPEDL, CurseForge, PlanetMinecraft)

## 🌟 Features

- **Modern Glassmorphism Design** - Beautiful backdrop filters and gradient effects
- **Responsive Layout** - Works seamlessly across desktop, tablet, and mobile devices
- **Dynamic Statistics** - JSON-driven stats system for real-time data updates
- **Smooth Animations** - Intersection Observer API for engaging scroll animations
- **Project Showcase** - Featured portfolio of Minecraft addons with thumbnails
- **Contact Form** - Built-in contact functionality for commissions and collaborations

## 🎯 Featured Projects

Our portfolio includes diverse Minecraft addon categories:

### 🎌 Anime-Themed Content
- Anime Maids
- Dragon Ball Z
- One Piece
- Goblin Slayer

### 🎮 Gaming Content
- Power Rangers
- High Noon Heroes

### 🎄 Seasonal Addons
- Winter Wardrobe
- Christmas Spirit
- Spooky Skins

### 🔧 Utility Addons
- City Streets Plus
- Cooking Magic
- Fuel Bits
- Secrets of Sands

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- Basic understanding of HTML/CSS/JavaScript (for modifications)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AbhayMalav/PB-Portfolio.git
   cd PB-Portfolio
   ```

2. **Open the website**
   - Simply open `index.html` in your preferred web browser
   - Or serve it using a local development server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (with http-server)
   npx http-server
   ```

3. **Access the website**
   - Open your browser and navigate to `http://localhost:8000`

## 📁 Project Structure

```
PB-Portfolio/
├── Assets/
│   ├── Icons/           # Social media and platform icons
│   ├── Images/          # Project thumbnails and screenshots
│   └── data/
│       └── data.json    # Dynamic statistics data
├── Scripts/
│   └── script.js        # JavaScript functionality
├── Styles/
│   └── style.css        # Main stylesheet
├── index.html           # Main HTML file
├── CNAME               # Domain configuration
└── .gitattributes      # Git configuration
```

## ⚙️ Customization

### Updating Statistics
Modify the `Assets/data/data.json` file to update portfolio statistics:

```json
{
  "totalDownloads": "83.3k +",
  "publishedAssets": "17+",
  "latestAddonDownloads": "10.5K +",
  "latestAddonRating": "4.9 ★"
}
```

### Adding New Projects
1. Add project images to `Assets/Images/`
2. Update the HTML in `index.html` to include new project cards
3. Ensure proper image naming and alt text

### Styling Changes
The CSS uses custom properties for easy theming. Modify the root variables in `Styles/style.css`:

```css
:root {
  --bg1: #0f172a;        /* Deep navy background */
  --bg2: #071124;        /* Darker background */
  --accent: #ff4438;     /* Primary accent color */
  --accent-2: #f6c85f;   /* Secondary accent color */
  --glass: rgba(255,255,255,0.06);  /* Glass effect */
}
```

## 🌐 Live Website

Visit our live portfolio at: **[dlconix.shop](https://dlconix.shop)**

## 📱 Social Media & Links

Stay connected with Pesky Birds:

- 🎥 [YouTube](https://youtube.com)
- 💬 [Discord](https://discord.com)
- 📸 [Instagram](https://instagram.com)
- 🔥 [CurseForge](https://curseforge.com)
- 📱 [MCPEDL](https://mcpedl.com)
- 🌍 [PlanetMinecraft](https://planetminecraft.com)

## 💼 Services

### Available for:
- **Custom Addon Development** - Tailored Minecraft Bedrock experiences
- **Skin Pack Creation** - Character customization content
- **Texture Pack Design** - Visual enhancement packages
- **Collaborations** - Partner projects and joint ventures
- **Commissions** - Custom work for specific requirements

## 🤝 Contributing

We welcome contributions to improve the portfolio website!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
## 📞 Contact

**Pesky Birds Studio**
- 💌 Contact form available on the website
- 🐦 Available for commissions & collaborations

---

<div align="center">

**Built with ❤️ by Pesky Birds Studio**

*Creating immersive Minecraft Bedrock experiences since 2017*

</div>