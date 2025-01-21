
# Eventify (Google Calendar Events Web Page)

This project is a web-based application that integrates Google SSO login to fetch and display a user's Google Calendar events. The application focuses on providing a seamless user experience with features like event filtering and a clean, responsive UI.







## Features

- SSO Login with Google: Users can securely log in using their Google accounts.
- Fetch and Display Events: All Google Calendar events are fetched and displayed in a table format, sorted by the most recent events at the top.
- Filter Events: A date filter allows users to refine and display events based on a selected date.
- User-Friendly Design: Intuitive UI designed for a great user experience.


## Technologies Used

- Frontend: React.js for building an interactive and dynamic user interface.
- Backend: Node.js and Express.js for handling API calls and data processing.
- Google APIs: Google OAuth 2.0 for SSO and Google Calendar API for fetching events.
- Styling: Tailwind CSS for a responsive and visually appealing design.
- Deployment: Hosted on Vercel for accessibility.## Prerequisites

- A Google Cloud Console project with the following enabled:
  - OAuth Consent Screen
  - Google Calendar API
- The following details from your Google Cloud Console:
  - Client ID
  - Client Secret

## Installation

### Steps to Run Locally

1. **Clone the Repository**
    ```bash
    git clone <repository-link>  
    ```
    Navigate to the project directory:
    ```bash
    cd Eventify
    ```  

2. **Set Up the Server**
    - Go to the server directory:
      ```bash
      cd server  
      ```
    - Install server dependencies:
      ```bash
      npm install  
      ```
    - Create a `.env` file in the server folder and add the following variables:
      ```env
      GOOGLE_CLIENT_ID=<your-google-client-id>  
      GOOGLE_CLIENT_SECRET=<your-google-client-secret>  
      PORT=5000
      GOOGLE_CALLBACK_URL=<https://your-backend-domain.com/auth/google/callback>
      SESSION_SECRET=your_session_secret

      ```
    - Start the server:
      ```bash
      npm start  
      ```
    - The server will run on the specified port (default: `http://localhost:5000`).

3. **Set Up the Client**
    - Navigate to the client directory:
      ```bash
      cd ../client  
      ```
    - Install client dependencies:
      ```bash
      npm install  
      ```
    - Create a `.env` file in the client folder and add the following variables:
      ```env 
      REACT_APP_BACKEND_URL=<http://localhost:5000>  
      ```
    - Start the client:
      ```bash
      npm start  
      ```
    - The client will run on `http://localhost:3000`.

4. **Access the Application**
    - Open your browser and visit `http://localhost:3000` to use the application.
    

## Deployment

The project is deployed on Vercel. You can access it at:

https://eventify-6msiwn79f-sumit-sagars-projects-3b03c4db.vercel.app/


## Usage
- **Login:** Click the "Login with Google" button to sign in using your Google account.
- **View Events:** After logging in, your Google Calendar events will be displayed in a table format.
- **Filter Events:** Use the date picker to filter and view events for a specific date.


## Contact
For any queries or suggestions, feel free to contact me:

Email: sagarsumit472@gmail.com

GitHub: https://github.com/Sumit45Sagar

Linkedin: https://www.linkedin.com/in/sumit-sagar-3813b5216/
