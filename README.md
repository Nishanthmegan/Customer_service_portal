# Customer_service_portal

## Description
A platform for customer support with Google OAuth authentication.

## Setup

### Backend
1. Navigate to the `backend` directory.
2. Create a `.env` file and add your environment variables:

    MONGO_URI=your_mongodb_connection_string
    GOOGLE_CLIENT_ID=your_google_client_id
    GOOGLE_CLIENT_SECRET=your_google_client_secret

3. Install dependencies and start the server:
```bash
   npm install
   npm start

### Frontend
1. Navigate to the frontend directory.
2. Install dependencies and start the React app:
    npm install
    npm start

Usage

    Open your browser and go to http://localhost:3000.
    Use the Google OAuth button to log in.
    Submit customer service requests through the form.
    Use the Intercom widget for live chat support.
