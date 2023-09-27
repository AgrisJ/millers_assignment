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
