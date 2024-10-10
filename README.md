# Starterpack Laravel 11 + React

Welcome to the **Starterpack Laravel + React** project! This starter pack provides a robust foundation for building applications with custom authentication using Breeze, along with essential features like user management, profile editing, and a dashboard interface. It leverages the latest technologies, including Laravel 11, Inertia.js, React.js, and TailwindCSS.

## Table of Contents

-   [Features](#features)
-   [Technologies Used](#technologies-used)
-   [Installation](#installation)
-   [Usage](#usage)
-   [Folder Structure](#folder-structure)
-   [License](#license)

## Features

-   **Custom Authentication**: Implement user authentication using Laravel Breeze with the flexibility to customize the frontend.
-   **User Management**: Manage user accounts, including creating, editing, and deleting users.
-   **Profile Editing**: Users can update their profile information easily.
-   **Dashboard**: A user-friendly dashboard for displaying any application information.
-   **Responsive Design**: Built with TailwindCSS, ensuring a modern and responsive UI across devices.

## Technologies Used

-   **Laravel 11**: A powerful PHP framework for web application development.
-   **Inertia.js**: A framework that allows you to build modern single-page applications using classic server-side routing and controllers.
-   **React.js**: A popular JavaScript library for building user interfaces.
-   **TailwindCSS**: A utility-first CSS framework for creating custom designs without leaving your HTML.
-   **Remixcon**: A icon library.

## Installation

To get started with the Starterpack Laravel + React project, follow these steps:

### Prerequisites

Ensure you have the following installed on your machine:

-   [PHP](https://www.php.net/downloads) (version 8.1 or higher)
-   [Composer](https://getcomposer.org/download/)
-   [Node.js](https://nodejs.org/) (version 14 or higher)
-   [npm](https://www.npmjs.com/get-npm) (comes with Node.js)

### Step 1: Clone the Repository

```bash
git clone <url repo>
cd starterpack-laravel-react
```

### Step 2: Install PHP Dependencies

Run the following command to install the PHP dependencies:

```bash
composer install
```

### Step 3: Set Up Environment Variables

Copy the .env.example file to create your .env file:

```bash
cp .env.example .env
```

Generate the application key:

```bash
php artisan key:generate
```

Configure your database settings in the .env file.

Setting smtp email credentials in .env file, for workin email verification

### Step 4: Run Database Migrations & Seeder

Defautl database using sqlite.

Update your .env file if you want with this before with your database credentials:

```bash
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=starterpack-laravel-reactjs
DB_USERNAME=your_database_user
DB_PASSWORD=your_database_password
```

Set up your database tables by running the migrations:

```bash
php artisan migrate --seed
```

### Step 5: Install JavaScript Dependencies

Navigate to the frontend directory and install the JavaScript dependencies:

```bash
npm install
```

### Step 6: Build Assets

Build the frontend assets using:

```bash
npm run build
```

or You can run the development server using the following command:

```bash
npm run dev
```

### Step 7: Serve the Application

Open new terminal and go to the root directory this project and serve the Laravel application:

```bash
cd ..
php artisan serve
```

Your application will be accessible at http://localhost:8000.

### Usage

Access the Application: Open your browser and go to http://localhost:8000.

-   User Registration: You can register a new user through the authentication forms.
-   Profile Editing: Once logged in, navigate to the profile page to update your information.
-   Dashboard: Access the dashboard to view logged/dashboard for displaying any application information.
-   Login: If you have already registered, you can use the login form to access the application.
-   Login with dummy account: You can use the following credentials to login without registration:
    **role: user**

    -   Email: `user@mail.com`
    -   Password: `user`

    **role: admin**

    -   Email: `admin@mail.com`
    -   Password: `admin`

### Folder Structure

```bash
starterpack-laravel-react/
├── app/                   # Application logic
├── bootstrap/             # Framework bootstrap files
├── config/                # Application configuration
├── database/              # Database migrations and seeds
├── public/                # Publicly accessible files
├── resources/             # Views and frontend assets
│   ├── js/                # JavaScript files (React components)
│   └── css/               # CSS files (TailwindCSS)
├── routes/                # Application routes
├── storage/               # Logs and generated files
└── tests/                 # Automated tests
```

### License

This project is open-source and available under the MIT License.

Feel free to modify any section as per your project requirements or preferences. Enjoy building with your Starterpack Laravel + React!
