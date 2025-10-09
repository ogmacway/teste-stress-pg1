import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script" // Importar o componente Script
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Ferramentas Holísticas Anti-Stress",
  description: "Conheça o segredo dos terapeutas para a cura da doença do século",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans">
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
        {/* Script 1 da Utmify */}
        <Script
          id="utmify-pixel-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.pixelId = "68e71f912aafa736d80d8a33";
              var a = document.createElement("script");
              a.setAttribute("async", "");
              a.setAttribute("defer", "");
              a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
              document.head.appendChild(a);
            `,
          }}
        />
        {/* Script 2 da Utmify */}
        <Script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          strategy="afterInteractive"
          data-utmify-prevent-xcod-sck
          data-utmify-prevent-subids
          async
          defer
        />
      </body>
    </html>
  )
}
