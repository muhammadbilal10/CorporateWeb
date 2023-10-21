import "@/styles/globals.css";

import NavBar from "@/components/NavBar";
import ThemeRegistry from "./ThemeRegistry";
// import Provider from "@components/Provider";

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      {/* <div className="main">
        <div className="gradient" />
      </div> */}
      <main>
        <ThemeRegistry options={{ key: "mui" }}>{children}</ThemeRegistry>
      </main>
    </body>
  </html>
);

export default RootLayout;
