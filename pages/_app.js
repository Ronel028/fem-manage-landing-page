import { Be_Vietnam_Pro } from "next/font/google";
import "@/styles/globals.scss";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function App({ Component, pageProps }) {
  return (
    <div className={beVietnamPro.className}>
      <Component {...pageProps} />
    </div>
  );
}
