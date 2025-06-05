import { HeaderOnly } from "../components/Layout";
import Search from "../page/Search";

import Home from "../page/Home";
import Following from "../page/Following";
import Profile from "../page/Profile";
import Upload from "../page/Upload";

export const routes = [
  { path: "/", component: Home },
  { path: "/Following", component: Following },
  { path: "/Profile", component: Profile },
  { path: "/Upload", component: Upload, layout: HeaderOnly },
  { path: "/Search", component: Search, layout: null },
];
