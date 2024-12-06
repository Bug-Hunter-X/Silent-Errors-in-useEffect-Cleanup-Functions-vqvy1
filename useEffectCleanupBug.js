This bug occurs when using the `useEffect` hook in React Native with a cleanup function that throws an error.  The error is silently swallowed, making it difficult to debug.

```javascript
useEffect(() => {
  const subscription = someAsyncFunction().subscribe(data => {});

  return () => {
    //This line throws an error sometimes.
    subscription.unsubscribe(); 
  };
}, []);
```