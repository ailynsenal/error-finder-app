# Error Finder App - Client

![image](https://github.com/ailynsenal/error-finder-app/assets/76389907/e042bd8d-1fa0-4167-a17c-7b64dc00ab16)

This folder contains the client code artifacts of the app.

## How to install and run

In the `/client` folder, run `npm install` to install the necessary dependencies.

Run `npm start` to start the app.

This will open a browser window to http://localhost:3000.

The initial call of the application to the API results in a message 'Failed to load activities' when it loads as we are not running the server.

To use the mock data located in `/src/mock_data.ts`:

1. Navigate to `/src/context/Context.tsx`
2. Change Line 15, activities: `mockData` then save -> ensure to import mockData from `src/mock_data.ts`
3. Then, navigate to `src/views/Home/Home.tsx`
4. In line 14, comment ( either add `//` before the function or `click + /`) `getActivities` method to prevent fetching the API then save.

That's it! You may now be able to explore the game and find the mistakes in the highlighted text through mock_data.

## Technologies

- React
- Typescript
- Context API
- styled-components
- axios
