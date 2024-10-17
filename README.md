# Document Auto Scroll with JavaScript

This project demonstrates an automatic table of contents (TOC) generator for HTML documents using JavaScript. It highlights the current section of the document as you scroll and allows smooth navigation to different sections by clicking the TOC items.

## Features

- **Dynamic Table of Contents:** The TOC is auto-generated based on the heading tags (`<h1>`, `<h2>`, etc.) in your document.
- **Smooth Scroll: Clicking on any TOC item smoothly scrolls to the respective section.
- **Active Section Highlighting:** As you scroll through the document, the corresponding TOC item is highlighted.
- **Intersection Observer API:** Utilizes the modern Intersection Observer API for efficient DOM interaction and performance.
- **Responsive Design:** Works well on different screen sizes, with the TOC fixed to the right side of the page.

## Demo

You can try out a live demo of the project here: [Live Demo](https://basemax.github.io/document-auto-scroll-javascript/document.html)

## Installation

Clone the repository:

```bash
git clone https://github.com/BaseMax/document-auto-scroll-javascript.git
cd document-auto-scroll-javascript
```

Then open the `index.html` file in a browser:

```bash
open index.html
```

Or simply deploy it to any web server or local environment that supports HTML and JavaScript.

### Browser Compatibility

This project uses the Intersection Observer API, which is supported in most modern browsers (Chrome, Firefox, Edge, and Safari). For older browsers, consider adding a polyfill.

### Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue for any bugs or feature requests.

### License

This project is licensed under the GPL-3.0 License. See the LICENSE file for details.

This is open-source so feel free to customize it to fit for your project!

Copyright 2024, Max Base
