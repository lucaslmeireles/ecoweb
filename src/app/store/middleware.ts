import  createMiddleware  from 'zustand';

const apiStateMiddleware = createMiddleware((store) => {
  // Fetch the API state and set it to the store
  const fetchApiState = async () => {
    const apiState = await fetch('https://api.example.com/state');
    store.setState({ apiState });
  };

  // Fetch the API state when the store is initialized
  fetchApiState();
});