// import { appWithTranslation } from "next-i18next";
import Blogs from "./components/Blogs";
import ComingSoon from "./components/ComingSoon";
import Header from "./components/Header";

 function Home() {
  return (
    // <ComingSoon></ComingSoon>
    <>
      <Header></Header>
      <Blogs></Blogs>
    </>
  );
}

export default Home
// export default appWithTranslation(Home);