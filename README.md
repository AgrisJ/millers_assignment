# Miller's Assignment

This project is structured into two main parts:

1. Frontend: Located in the `/app` directory.
2. Backend: Located in the `/api` directory.

Both parts of the project have `npm run dev` scripts included for easy setup and development.

## Environment Setup

For both frontend and backend, you need to create `.env.development` files with specific environment variables.

### Backend Environment Variables

Navigate to the `/api` directory and create a `.env.development` file. Add the following variable:

```env
POSTGRES_DATABASE_URL='...received seperately...'
```

This variable points to an external PostgreSQL database hosted on Vercel.

### Frontend Environment Variables

Navigate to the `/app` directory and create a `.env.development` file. Add the following variable:

```env
VITE_APP_API_URL=http://localhost:3000/api
```

This variable sets the base URL for API calls from the frontend application.

## Database Operations

Currently, the backend only supports GET operations. CRUD (Create, Read, Update, Delete) operations are not implemented at this stage.

# Technical Overview

## Backend

This backend is part of a demo single page application for a job interview assignment. The application allows users to create different styles (e.g., t-shirt, pants) with various colors and sizes.

## Scope:

The backend will focus on serving data to the front-end. It will be streamlined and efficient, focusing on the following areas:

- **Data Retrieval**: The primary operation supported by the backend will be Read operations. This will allow the front-end to access and display style data.

## Limits:

Certain features are deemed out of scope for this project due to specific reasons:

- **Create, Update, Delete Operations**: These operations are not included in order to maintain simplicity and focus on data retrieval. As this is a demo application, the need for these operations is minimal.

- **Authentication and Tokens**: As the backend only supports Read operations, there is no need for authentication or tokens. This simplifies the setup and maintenance of the backend.

- **Extended Logging**: Extended logging will not be implemented as it can add unnecessary complexity and overhead. Basic logging should suffice for troubleshooting and monitoring.

- **Testing (Integration or Unit)**: Due to the limited scope and functionality of the backend, comprehensive testing such as integration or unit tests will not be implemented. However, basic sanity checks and error handling mechanisms should be in place to ensure the backend functions correctly.

- **Internal Database**: An external database will be used instead of an internal one. This decision is made to reduce the number of setup steps and to separate concerns between data storage and data processing.

This approach ensures that the backend remains lightweight and easy to manage while still being able to effectively serve style data to the front-end.

# Frontend Scope and Limits

The frontend of this demo application is developed using Vue.js with Vite and Tailwindcss. This choice reflects the tech stack used by Millers, demonstrating adaptability and quick learning.

## Scope:

The frontend focuses on presenting style data fetched from the backend in an intuitive and user-friendly manner. Its main functions include:

- **Data Presentation**: Displaying the list of styles and their details.
- **Routing**: Navigation between different parts of the application.
- **Home View**: The home view showcases the `SizeButtons` component with demo data, along with a color button and its functionality.
- **Category Selection**: Two buttons in the header represent categories (T-shirts or Pants). When a category is selected, the view changes to the `/category` route which contains a list of styles within that category.
- **Style Details View**: Clicking on a style leads to the `/style` route with `StyleDetailsView`. This view represents data from the database, including a list of colors in the form of buttons. When a color button is clicked, the appropriate sizes appear. Sizes also show availability data from the database. If volume is 0, the relevant size button is grayed out.
- **Size and Length Buttons**: Additional size buttons for the Pants category are presented in the form of lengths. These should change based on database data when each size button is clicked.

## Limits:

Due to time constraints, several features were not fully implemented or omitted:

- **TypeScript Issues**: Not all TypeScript issues were fixed due to the time-consuming nature of this task.
- **Custom Fonts**: Google fonts were chosen over custom fonts for simplicity and speed.
- **Component Names and Hierarchy**: The naming and hierarchy of components were not optimized.
- **Routing for Styles**: The planned feature to include style-name in the route (e.g., '/style/:id') was not completed.
- **Component Refactoring**: More refactoring for components was planned but not carried out. The initial focus was on making the components work first.
- **Images from Database**: Images for both colors and styles were not linked from the database.
- **Size-Based Lengths Logic**: The logic to show lengths based on chosen size was not finished.

These limitations are primarily due to time constraints. However, the application is still functional and demonstrates the ability to learn and adapt to new technologies.
