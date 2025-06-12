import routesConfig from "../config/routes";


//Layouts

import { HeaderOnly } from "../components/Layout";
import Search from "../page/Search";

import Home from "../page/Home";
import Following from "../page/Following";
import Profile from "../page/Profile";
import Upload from "../page/Upload";
import Live from "../page/Live";

export const routes = [
  { path: routesConfig.home, component: Home },
  { path: routesConfig.following, component: Following },
  { path: routesConfig.profile, component: Profile },
  { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
  { path: routesConfig.search, component: Search, layout: null },
  { path: routesConfig.live, component: Live },
];
