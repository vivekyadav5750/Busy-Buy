# Busy Buy

Busy Buy is a web application for customers of an e-commerce business. The application includes user authentication and authorization, product management, categorization, and a shopping cart system with real-time updates.

## Features

- User Authentication and Authorization
  - Sign-up
  - Sign-in
  - User Profile Management
- Product Management
  - Add Products
  - Delete Products
  - Update Products
  - Categorize Products
- Shopping Cart System
  - Real-Time Order Processing
- Product Filtering
  
## Project Setup

### Prerequisites

- Node.js and npm (or Yarn)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/vivekyadav5750/Busy-Buy.git
   cd Busy-Buy

2. **Install dependencies**
    - Using npm:
      ```bash
       npm install
    - Or using Yarn
      ```bash
       yarn install
     
3. **Configure Environment Variables**
   - Create a .env file in the root directory and add the necessary environment variables
     ```env
      REACT_APP_API_KEY=your_api_key
      REACT_APP_AUTH_DOMAIN=your_auth_domain
      REACT_APP_PROJECT_ID=your_project_id
      REACT_APP_STORAGE_BUCKET=your_storage_bucket
      REACT_APP_MESSAGING_SENDER_ID=your_messaging_sender_id
      REACT_APP_APP_ID=your_app_id
     
  4. **Run the application**
      - Using npm:
        ```bash
         npm start
      - Or using Yarn
        ```bash
         yarn start
      - The application should now be running at http://localhost:3000.  

  ## Tools and Technologies
  - React: Frontend library for building user interfaces.
  - Firebase: Backend services including authentication, Firestore for the database, and real-time updates.
  - Tailwind CSS: Utility-first CSS framework for styling.

  ## Live Demo

Check out the live version of Busy Buy [here](https://busy-buy-ashy.vercel.app/).

   


