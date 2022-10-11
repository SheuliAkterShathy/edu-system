import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main/Main';
import Home from './components/Home/Home';
import Topic from './components/Topic/Topic';
import Quiz from './components/Quiz/Quiz';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import ErrorPage from './components/ErrorPage/ErrorPage';


function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path:'/',
          loader:()=> fetch(' https://openapi.programming-hero.com/api/quiz'),
          element:<Home></Home>
        },
        {
          path:'/topic/:topicId',
          loader:({params})=> fetch(` https://openapi.programming-hero.com/api/quiz/${params.topicId}`),
          element:<Quiz></Quiz>
        },
        {
          path:'/statistics',
          element:<Statistics></Statistics>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        }
      ]
    }
  ])
  return (
    <div className="App">
    <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;