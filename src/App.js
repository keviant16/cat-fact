import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import CatFact from './components/CatFact';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CatFact />
    </QueryClientProvider>
  );
}

export default App;
