import { Outlet, useNavigation } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer.jsx/Footer";
import Nav from "./components/Nav/Nav";
import { DNA } from "react-loader-spinner";

function App() {
  const navigation = useNavigation();
  return (
    <>
      <div className="">
        <Nav></Nav>

        {navigation.state === "loading" ? (
          <div className="flex items-center justify-center">
            <DNA
              visible={true}
              height="80"
              width="80"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
            />
          </div>
        ) : (
          <Outlet></Outlet>
        )}
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
