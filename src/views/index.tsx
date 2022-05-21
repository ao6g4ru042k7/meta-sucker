import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../containers/Banner";
import Content from "../containers/Content";

function App() {
  return (
    <div className=" overflow-hidden">
      <Header />
      <Banner
        mintedCount={"0888"}
        mintedLimitCount={"3000"}
        endDate={Date.now() + 5000000000}
        onClickMintNow={() => {
          alert("Click Mint Now");
        }}
      />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
