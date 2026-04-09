# Momentum Frontend

Momentum is a React front-end clothing and outfit planning application. It allows users to browse clothing items, sign in through a modal interface, add new items dynamically, and interact with a responsive shopping-style layout.

## Features

- Responsive layout for desktop, tablet, and mobile
- Reusable React components
- Header, hero section, item grid, and footer
- Sign In modal
- Add Item modal
- Dynamic item rendering with React state
- Add to Cart functionality
- Show More button for progressive item display
- Third-party API integration
- Fallback data support if the API request fails
- Clean component-based architecture

## Tech Stack

- React
- JavaScript
- JSX
- HTML
- CSS

## How It Works

The application fetches clothing items from an external API and displays them in a responsive grid layout. If the API request fails, fallback item data is loaded so the interface continues to function properly. Users can sign in through a front-end modal, add new clothing items, and add items to the cart.

## Project Structure

```txt
src/
  components/
    Header.jsx
    Hero.jsx
    Main.jsx
    ItemCard.jsx
    Footer.jsx
    LoginModal.jsx
    AddItemModal.jsx
    Modal.jsx
  utils/
    ThirdPartyApi.js
    api.js
    auth.js
  App.jsx
  index.css
```

## Stage 1.2 Submission

This project includes third-party API integration, loading states, error handling, progressive rendering with the Show More button, and simulated frontend auth behavior for review.


<!--1. Make a folder inside of Components. Example: Header then inside it would be Header.jsx, and Header.css. Do for all files. Follow BEM structure.

    2. Add an additional media quere so it fits in a column when shinking page.
    
    3. Add a protected route so information is protected in card route. -->
