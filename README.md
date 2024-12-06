# Silent Errors in React Native useEffect Cleanup

This repository demonstrates a bug where errors thrown within the cleanup function of a React Native `useEffect` hook are silently swallowed.  The provided code examples show the problematic behavior and a solution to reliably catch and handle these errors.

## Bug Description

The issue arises when an asynchronous operation within the `useEffect` cleanup function fails.  Traditional error handling mechanisms might not catch these errors, leading to unexpected application behavior or silent failures.

## Solution

The solution involves wrapping the cleanup function's logic in a `try...catch` block to explicitly handle potential errors.  This allows for logging the error or implementing more robust error management strategies. 

## Reproduction Steps

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npx react-native run-android` or `npx react-native run-ios` to run the app.
4. Observe that the error is not logged to the console, but causes silent errors.