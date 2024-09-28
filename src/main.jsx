import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './Config/Redux/Store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Addtocart from './pages/Addtocart.jsx'

const router = createBrowserRouter([
    {
        path: '',
        element: <App />,
    },
    {
        path: 'addtoCart',
        element: <Addtocart />
    }
])

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <RouterProvider router={router}>
            <App />
        </RouterProvider>
    </Provider>
)
