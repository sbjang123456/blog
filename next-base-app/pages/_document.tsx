import Document, { Html, Head, Main, NextScript } from "next/document";

class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head/>
        <body>
        <Main />
        <NextScript />
        <style jsx global>{`
        #__next { 
          height: 100vh;
          overflow: hidden;
        }
        `}
        </style>
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
