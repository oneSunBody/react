import Index from "views/index";
import Home from "views/index/home";
import Search from "views/index/search";
import Car from "views/index/car";
import Mine from "views/index/mine";
import Login from "views/login";
export default [
  {
    path: "/index",
    component: Index,
    children: [
      {
        path: "/index/mine",
        component: Mine
      },
      {
        path: "/index/car",
        component: Car
      },
      {
        path: "/index/home",
        component: Home
      },
      {
        path: "/index/search",
        component: Search
      }
    ]
  },{
    path:"/login",
    component:Login
  }
];
