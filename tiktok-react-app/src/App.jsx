import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./Routes";
import DeafaultLayout from "./components/Layout/DefaultLayout";
import { Fragment } from "react";

function App() {
  return (
    <>
      <Router>
        <div className="app">
          <Routes>
            {/* duyệt qua từng phần tử của "./Routes" và lấy path và component */}

            {routes.map((route, index) => {
              // tạo biến là Page để có thể lấy componet được đặt mặc định trong file "./Routes"
              const Page = route.component;

              let Layout = DeafaultLayout;

              if(route.layout){
                Layout = route.layout
                
              } else if(route.layout === null){
                Layout = Fragment
              }


              // nếu không có layout thì mặc định sẽ lấy DeafaultLayOut
              // còn nếu có sẽ lấy là Fragment là một thẻ ko chứa gì hết nhưng vẫn hiện nội dung khác với thẻ "<> </>"
              // const Layout = route.layout === null ? Fragment: DeafaultLayout;


              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    //ta cho Layout khai báo ở trên ôm phần Page, thì Page sẽ là {children} đã được tạo trong "./components/Layout/DefaultLayout", cho nên nó sẽ là layout mặc định có header và side bar khi ta ko cấu hình route.layout
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
