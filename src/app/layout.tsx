import { Providers } from "./providers";
import "./ui/globals.css";
import Footer from "@/components/sup/Footer";
import AdviserContextProvider from "./context/AdviserContext";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { raleway } from "./ui/fonts";
import { Metadata } from "next";
import Promo from "@/components/top/Promo";
import CookieConsent from "@/components/ui/CookieConsent";
import Script from "next/script";
import { Navbar } from "@/components/top/Navbar";

// Metadata para SEO
export const metadata: Metadata = {
  metadataBase: new URL("https://www.casateconmigo.ec"),
  title: {
    default: "Joyería Cásate Conmigo",
    template: "%s | Cásate Conmigo",
  },
  description: "Encuentra el anillo perfecto para tu momento especial",
  keywords: ["anillos", "compromiso", "matrimonio", "joyas", "oro", "plata"],
  openGraph: {
    title: "Joyería Cásate Conmigo",
    description: "Encuentra el anillo perfecto para tu momento especial",
    url: "https://www.casateconmigo.ec",
    siteName: "Cásate Conmigo",
    images: [
      {
        url: "/og-image.jpg", // Esta imagen debe estar en la carpeta public
        width: 1200,
        height: 630,
        alt: "Cásate Conmigo - Anillos de boda",
      },
    ],
    locale: "es_EC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joyería Cásate Conmigo",
    description: "Encuentra el anillo perfecto para tu momento especial",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "tu-codigo-de-verificacion-de-google",
  },
};

// RootLayout con optimización SEO
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        {/* Script de EmailJS para envío de correos */}
        <Script
          id="emailjs-init"
          strategy="beforeInteractive"
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
        />
        <Script
          id="emailjs-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function initEmailJS() {
                  if (typeof window.emailjs !== 'undefined') {
                    try {
                      window.emailjs.init('7g9Eo75qyHjgNk4Ai');
                      console.log('EmailJS inicializado correctamente');
                    } catch (err) {
                      console.error('Error al inicializar EmailJS:', err);
                    }
                  } else {
                    console.error('EmailJS no está disponible al inicializar');
                  }
                }
                
                // Intentar inicializar inmediatamente
                initEmailJS();
                
                // Como respaldo, intentar de nuevo cuando la ventana esté completamente cargada
                window.addEventListener('load', function() {
                  if (typeof window.emailjs === 'undefined') {
                    console.error('EmailJS no se cargó correctamente, intentando cargar de nuevo');
                    
                    // Intentar cargar el script manualmente
                    const script = document.createElement('script');
                    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
                    script.onload = function() {
                      console.log('Script de EmailJS cargado manualmente');
                      initEmailJS();
                    };
                    document.head.appendChild(script);
                  } else {
                    console.log('EmailJS está disponible a nivel global');
                  }
                });
              })();
            `,
          }}
        />
        <Script
          id="gtm-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              
              // Verificar el consentimiento almacenado
              const hasConsent = localStorage.getItem('cookieConsent');
              
              // Configurar el consentimiento predeterminado
              gtag('consent', 'default', {
                'analytics_storage': hasConsent === 'true' ? 'granted' : 'denied',
                'ad_storage': hasConsent === 'true' ? 'granted' : 'denied',
                'functionality_storage': hasConsent === 'true' ? 'granted' : 'denied',
                'security_storage': 'granted', // Siempre concedido para funcionalidad básica
                'personalization_storage': hasConsent === 'true' ? 'granted' : 'denied',
                'wait_for_update': 500
              });
            `,
          }}
        />
      </head>
      <AdviserContextProvider>
        <body className={`${raleway.className} antialiased bg-myWhite`}>
          <CookieConsent />
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtm.js?id=GTM-PVV3DFSP`}
          />
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-PVV3DFSP"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
          <Script
            id="ga-config"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window['ga-disable-${process.env.NEXT_PUBLIC_GA_ID}'] = !localStorage.getItem('cookieConsent');
                
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                
                gtag('consent', 'default', {
                  'analytics_storage': 'denied',
                  'ad_storage': 'denied',
                  'wait_for_update': 500
                });
                
                // Reducir la frecuencia de eventos
                let throttleTimer;
                const throttleDelay = 2000; // 2 segundos entre eventos
                
                const originalPush = dataLayer.push;
                dataLayer.push = function (...args) {
                  if (!throttleTimer) {
                    throttleTimer = setTimeout(() => {
                      throttleTimer = null;
                    }, throttleDelay);
                    return originalPush.apply(this, args);
                  }
                  return undefined;
                };
              `,
            }}
          />
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ""} />
          <header className="relative">
            <title>Cásate Conmigo</title>
            <div className="relative z-30">
              <Promo />
            </div>
            <div className="relative z-40">
              <Navbar />
            </div>
          </header>
          <main className="relative z-30">
            <Providers>{children}</Providers>
          </main>
          <footer className="relative z-30">
            <Footer />
          </footer>
        </body>
      </AdviserContextProvider>
    </html>
  );
}
