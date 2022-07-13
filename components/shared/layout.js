import Footer from "./footer";
import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="bg-background-primary h-screen">
        <div className="max-w-5xl mx-auto">
          <Navbar />
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
