import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./LayoutMain.css";
const LayoutMain = ({ children }) => {
  return (
    <div className="layout-main">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default LayoutMain;