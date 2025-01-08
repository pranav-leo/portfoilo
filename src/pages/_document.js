import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html  lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/TweenLite.min.js"></script>
        <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/EasePack.min.js"></script>
        <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/demo.js"></script>
      </Head>
      <body style={{
        scrollbarWidth: "none", // Firefox
        msOverflowStyle: "none", // IE and Edge
        "&::-webkit-scrollbar": {
          display: "none", // Chrome and Safari
        },
        WebkitOverflowScrolling: "touch", 
      }} >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
