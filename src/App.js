import { Routes, Route } from 'react-router-dom'
import { publicRoute } from '~/routes/routes';

function App() {
  return (
    <div className="App">
      <Routes>
        {
          publicRoute.length > 0 &&
          publicRoute.map(route => (
            <Route key={route.id} path={route.url} element={route.page}></Route>
          ))
        }
      </Routes>
    </div>
  );
}

export default App;
