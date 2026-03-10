import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "next-themes";
import NextTopLoader from "nextjs-toploader";
import Script from "next/script";

import { AppContextProvider } from "../context-api/PropertyContext";

import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

import Aoscompo from "@/utils/aos";

/* -------------------------------------
   FONT
------------------------------------- */
const dmsans = DM_Sans({ subsets: ["latin"] });

/* -------------------------------------
   METADATA — DIGITAL INCLUSION INITIATIVE
------------------------------------- */
export const metadata: Metadata = {
  title: {
    default: "Rensource Energy",
    template: "%s | Rensource Energy",
  },
  description:
    "RenSource Energy is Africa’s commercial and industrial energy partner delivering solar, hybrid, and fully financed power solutions to businesses. Proven in Nigeria and expanding across Africa.",
};

/* -------------------------------------
   ROOT LAYOUT
------------------------------------- */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={dmsans.className}>
        <AppContextProvider>
          <ThemeProvider
            attribute="class"
            enableSystem={false}
            defaultTheme="light"
          >
            <Aoscompo>
              <Header />

              <NextTopLoader />
              {children}

              <Footer />
          
            </Aoscompo>

            {/* Global Chatbase Chat Widget */}
            <Script id="chatbase-widget" strategy="afterInteractive">
              {`
                (function(){
                  if(!window.chatbase || window.chatbase("getState") !== "initialized"){
                    window.chatbase=(...arguments)=>{
                      if(!window.chatbase.q){window.chatbase.q=[]}
                      window.chatbase.q.push(arguments)
                    };
                    window.chatbase=new Proxy(window.chatbase,{
                      get(target,prop){
                        if(prop==="q"){return target.q}
                        return(...args)=>target(prop,...args)
                      }
                    })
                  }

                  const onLoad=function(){
                    const script=document.createElement("script");
                    script.src="https://www.chatbase.co/embed.min.js";
                    script.id="VBniTIj_QRnpWFyTRSZeX";
                    script.domain="www.chatbase.co";
                    document.body.appendChild(script);
                  };

                  if(document.readyState==="complete"){
                    onLoad();
                  } else {
                    window.addEventListener("load", onLoad);
                  }
                })();
              `}
            </Script>

          </ThemeProvider>
        </AppContextProvider>
      </body>
    </html>
  );
}