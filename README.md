# Backend API Testing

## Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or later recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Setup

1. **Navigate to the backend folder:**
   ```sh
   cd backend
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

## Running Tests

The API is locally hosted on port **3000**. To run the test suite, execute:
```sh
npm test
```

## Additional Notes
- Ensure the backend server is running before running tests.
- Modify `.env` or configuration files if necessary.
- Check the `test` folder for test cases and add more if needed.

## Troubleshooting

If you encounter issues:
- Ensure all dependencies are installed (`npm install`).
- Verify that port **3000** is not being used by another process.
- Check for missing environment variables.
- Run tests with verbose output:
  ```sh
  npm test -- --verbose
  ```

Happy testing! 🚀
