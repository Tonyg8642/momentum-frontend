# Momentum Frontend

Momentum is a React front-end clothing and outfit planning application. It lets users browse clothing items, add new items, sign in through a front-end modal flow, and interact with a clean responsive interface.

## Features

- Responsive layout for desktop, tablet, and mobile
- Header, hero section, item grid, and footer
- Sign In modal
- Add Item modal
- Dynamic item rendering with React state
- Add to Cart functionality
- Show More button for loading more visible items
- Fetches clothing items from a third-party API
- Fallback data if the API fails
- Clean component-based architecture

## Tech Stack

- React
- JavaScript
- JSX
- HTML
- CSS

## How It Works

The app fetches clothing items from an external API and displays them in a responsive grid. If the API request fails, fallback item data is used so the UI still works properly. Users can also sign in through a front-end modal, add new clothing items, and add items to the cart.

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
