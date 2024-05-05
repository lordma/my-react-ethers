import { Route, Routes, BrowserRouter} from "react-router-dom"
import routes from "./router"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          {routes.map((route)=>(
            <Route 
              key={route.path} 
              path={route.path}
              element={route.component}
            />))
          }
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
