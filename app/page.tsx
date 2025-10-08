"use client"

import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { QuizModal } from "@/components/quiz-modal"
import { useRouter } from "next/navigation"

export default function Home() {
  const [isQuizOpen, setIsQuizOpen] = useState(false)
  const router = useRouter()

  const handleQuizComplete = () => {
    setIsQuizOpen(false)
    router.push("/ferramentas")
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#763a5b] py-12 px-4 md:py-24">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-center mb-8 md:mb-12">
            <span className="block text-[#FA4279] text-4xl md:text-7xl font-bold mb-2 md:mb-4 tracking-tight leading-tight">
              Ferramentas Holísticas
            </span>
            <span className="block text-[#FA4279] text-4xl md:text-7xl font-bold mb-4 md:mb-6 tracking-tight leading-tight">
              Anti-Stress
            </span>
          </h1>

          <div className="flex justify-center mb-8">
            <img
              src="/hero3.png"
              alt="A Cura do Século"
              className="w-full max-w-md md:max-w-lg rounded-lg shadow-2xl"
            />
          </div>

          <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm border-2 border-[#FA4279] rounded-2xl p-6 md:p-8 shadow-2xl">
            <p className="text-white text-xl md:text-3xl text-center font-bold leading-relaxed">
              Conheça o segredo dos terapeutas para a cura da{" "}
              <span className="text-[#FA4279] text-2xl md:text-4xl font-extrabold">DOENÇA DO SÉCULO</span>
            </p>
          </div>
        </div>
      </section>

      {/* CNN-Style News Section */}
      <section className="bg-white py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* CNN Header Bar */}
          <div className="flex items-center justify-between bg-red-600 px-4 md:px-6 py-3 mb-8">
            <div className="flex items-center gap-2">
              <div className="bg-white text-red-600 font-bold text-lg md:text-xl px-3 py-1 rounded">CNN</div>
            </div>
            <button className="text-white hover:text-gray-200 transition-colors">
              <Search className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>

          {/* Headline */}
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            OMS DECLARA A "DOENÇA DO SÉCULO" E 8 EM CADA 10 BRASILEIROS ESTÃO EM RISCO!
          </h2>

          {/* Subheadline */}
          <p className="text-base md:text-xl text-gray-700 mb-8 leading-relaxed">
            Descubra como o <strong>stress crônico</strong> está silenciosamente destruindo sua saúde, relacionamentos e
            carreira, e a solução milenar que está escondida entre os maiores terapeutas
          </p>

          <div className="mb-8 aspect-video rounded-lg overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/pFZCXGecOhM?si=x0T8r5PeVjeQ9Jod"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full"
            />
          </div>

          {/* Article Copy */}
          <div className="space-y-6 text-gray-800 leading-relaxed">
            <p className="text-sm md:text-lg">
              O estresse, definido pela <strong>Organização Mundial de Saúde (OMS)</strong> como um estado de
              preocupação ou tensão mental em situações de adversidade, preocupa por possivelmente ter{" "}
              <strong>atividade transmissível</strong> entre os seres vivos, incluindo os humanos.
            </p>

            <blockquote className="border-l-4 border-red-600 pl-4 md:pl-6 py-4 bg-gray-50 italic text-gray-700 text-sm md:text-base">
              "Se considerarmos o estresse como um fenômeno que pode ser transmitido de uma pessoa para outra, a
              convivência próxima com indivíduos estressados pode amplificar o problema em grupos sociais. O resultado é
              um ciclo vicioso, no qual o estresse é constantemente alimentado e retransmitido, criando uma espécie de
              contágio emocional que afeta grandes porções da sociedade"
            </blockquote>

            <p className="text-sm md:text-lg">
              Se você quer se proteger e proteger quem você ama, você precisa do conhecimento e das ferramentas certas.
              O que muitos terapeutas não revelam é que, o estresse, nada mais é do que um desequilíbrio emocional, um
              balanço energético e a desestabilização interna. Abaixo, você vai conhecer o segredo dos terapeutas
              holísticos para acabar com seu estresse ou de seus pacientes.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#763a5b] py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-xl md:text-3xl font-bold mb-8 leading-relaxed text-balance px-2">
            <span className="text-[#FA4279]">CLIQUE E DESCUBRA A CURA!</span>{" "}
            <span className="text-white">
              O estresse está crescendo cada vez mais no mundo, e o segredo dos terapeutas holísticos está nas
              ferramentas que eles utilizam para combater essa doença que atinge a maior parte da população
            </span>
          </p>

          <Button
            size="lg"
            onClick={() => setIsQuizOpen(true)}
            className="bg-green-500 hover:bg-green-600 text-white font-bold text-base md:text-lg px-6 md:px-12 py-5 md:py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full max-w-md mx-auto"
          >
            <span className="text-center leading-tight">DESCOBRIR SEGREDO DOS TERAPEUTAS</span>
          </Button>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-black text-xl md:text-3xl font-bold mb-8 text-balance">
            Se preferir, entre em contato conosco agora mesmo. Teremos o prazer de te atender pessoalmente!
          </p>

          <Link href="https://wa.me/5548992050264" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold text-base md:text-lg px-8 md:px-12 py-5 md:py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-3 mx-auto"
            >
              <svg
                className="w-8 h-8 md:w-10 md:h-10"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              ENTRAR EM CONTATO
            </Button>
          </Link>
        </div>
      </section>

      <QuizModal isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} onComplete={handleQuizComplete} />
    </main>
  )
}
