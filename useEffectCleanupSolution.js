To solve this issue, wrap the cleanup function's logic in a `try...catch` block:

```javascript
useEffect(() => {
  const subscription = someAsyncFunction().subscribe(data => {});

  return () => {
    try {
      subscription.unsubscribe();
    } catch (error) {
      console.error('Error in useEffect cleanup:', error);
      // Add more sophisticated error handling here if needed
    }
  };
}, []);
```

This ensures that any errors thrown during the cleanup process are caught and logged to the console, making them easier to identify and address.