import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { TestimonialCarousel } from "@/components/testimonial-carousel"

export default function FerramentasPage() {
  const products = [
    {
      title: "Aromaterapia Terapêutica: Guia Profissional + Calendário de 30 Dias",
      description: "Integre aromas terapêuticos com segurança e transforme o ambiente das suas sessões.",
      image: "/product-1-aromaterapia.png",
    },
    {
      title: "Cristais Ativos: Manual de Programação + Tabela de Poderes Terapêuticos",
      description: "Saiba exatamente como limpar, energizar e programar cristais para cada tipo de cura.",
      image: "/product-2-cristais.png",
    },
    {
      title: "Florais de Impacto: 38 Fórmulas Para Equilibrar Emoções em Minutos",
      description: "Protocolos prontos que aceleram o equilíbrio emocional.",
      image: "/product-3-florais.png",
    },
    {
      title: "Pacote Reiki Profissional – Formulários, Técnicas e Scripts",
      description: "Promover o bem-estar, equilibrar a energia vital e auxiliar no tratamento de sintomas de estresse.",
      image: "/product-4-reiki.png",
    },
    {
      title: "50 Meditações Prontas Para Sessões Poderosas",
      description: "Roteiros para relaxamentos, limpezas energéticas e curas emocionais profundas.",
      image: "/product-5-meditacoes.png",
    },
    {
      title: "Oráculo do Perdão: 65 Cartas de Ho'oponopono + Ritual de Cura Interior",
      description: "Oráculo exclusivo com mensagens curativas + guia prático para sessões de limpeza emocional.",
      image: "/product-6-hooponopono.png",
    },
    {
      title: "Numerologia Prática: Guia Prático + Calculadora Interativa",
      description:
        "Descubra padrões, bloqueios e potenciais ocultos com análise numérica em minutos com a planilha automática de cálculos no Google Sheets.",
      image: "/product-7-numerologia.png",
    },
    {
      title: "Guia de Leitura Rápida de Mapa Astral – Entenda Ciclos e Potenciais",
      description: "Interpretação fácil e direta dos principais pontos do mapa astral, sem complicações técnicas.",
      image: "/product-8-mapa-astral.png",
    },
    {
      title: "Tarô Terapêutico Pronto: Baralho Completo + Manual de Leituras Intuitivas",
      description:
        "As 78 cartas do Tarô Rider Waite em alta resolução em formato PDF + guia prático de leitura emocional e terapêutica.",
      image: "/product-9-taro.png",
    },
    {
      title: "Radiestesia Total: 90 Gráficos + Guia Prático Para Uso com Pêndulo",
      description: "Diagnóstico energético rápido com gráficos testados + instruções simples para aplicação imediata.",
      image: "/product-10-radiestesia.png",
    },
    {
      title: "Genograma Terapêutico Familiar – Modelos + Guia Prático de Aplicação",
      description:
        "Mapas visuais + passo a passo para construir o genograma familiar em sessões de constelação e terapia sistêmica.",
      image: "/bonus-genograma.png", // Updated to use the correct genogram image
    },
  ]

  const bonuses = [
    {
      title: "Stories Magnéticos – 10 Fórmulas de Stories Que Vendem Sem Parecer Venda",
      description:
        "Estratégia direta pra criar conexão e vender mais, mesmo com poucos seguidores — com técnicas prontas pra aplicar ainda hoje.",
      image: "/bonus-1-stories.png",
    },
    {
      title: "Mensagens Magnéticas: Roteiros de WhatsApp Para Conectar e Vender Sessões",
      description: "Textos prontos que criam conexão, despertam desejo e geram mais agendamentos direto no WhatsApp.",
      image: "/bonus-2-whatsapp.png",
    },
    {
      title: "Caderno Prático de TCC para Depressão: 10 Intervenções Imediatas Para Aplicar em Sessão",
      description: "Estratégias práticas para aplicar já na próxima sessão.",
      image: "/bonus-3-tcc.png",
    },
    {
      title: "Fichas Terapêuticas Editáveis no Canva: Modelos Profissionais Para Personalizar",
      description:
        "10 Fichas de Anamnese para você personalizar no Canva com sua logomarca, cores, etc. – Fichas de Aromaterapia, Florais, Tarô, Numerologia e mais.",
      image: "/bonus-4-fichas.png",
    },
    {
      title: "Recepção Terapêutica Premium: Kit de Boas-Vindas Para Novos Pacientes",
      description: "Encante novos pacientes desde o primeiro contato com cartões e mini-questionário emocional.",
      image: "/bonus-5-boas-vindas.png",
    },
  ]

  const faqs = [
    {
      question: "Para quem é indicado o Pacote de Ferramentas para Terapeutas Holísticos?",
      answer:
        "Este pacote é ideal para terapeutas holísticos de diversas especialidades, como Reiki, Numerologia, Aromaterapia, Terapia com Cristais, Meditação, entre outros. Ele atende tanto terapeutas iniciantes que buscam estruturar suas sessões quanto profissionais experientes que desejam aprimorar seu trabalho com materiais práticos e visuais.",
    },
    {
      question: "Como receberei o material após a compra?",
      answer:
        "Após a confirmação do pagamento, você receberá um link exclusivo para acessar a área de membros. Lá, todos os materiais em formato PDF estarão organizados de maneira intuitiva, permitindo que você visualize, imprima e utilize os conteúdos em suas sessões com máxima praticidade e rapidez.",
    },
    {
      question: "Os materiais são impressos ou digitais?",
      answer:
        "Todos os materiais são digitais e prontos para impressão, entregues em formato PDF através da área de membros. Isso permite que você personalize e imprima conforme a necessidade, usando em várias sessões ou adaptando para cada cliente.",
    },
    {
      question: "Preciso ter experiência para usar este pacote?",
      answer:
        "Não. As ferramentas foram criadas para serem de fácil aplicação, tornando-as adequadas para terapeutas de qualquer nível de experiência. Cada material vem com instruções claras, ajudando você a utilizar de maneira intuitiva e prática.",
    },
    {
      question: "Posso reutilizar os materiais com diferentes clientes?",
      answer:
        "Sim, as ferramentas são projetadas para serem reutilizáveis e adaptáveis para diversos clientes e sessões. Você poderá imprimir quantas cópias precisar e adaptar cada uma para atender às necessidades específicas de cada pessoa.",
    },
    {
      question: "Este pacote cobre que áreas terapêuticas?",
      answer:
        "Este kit completo foi criado para transformar a prática de terapeutas holísticos em várias áreas essenciais, como Aromaterapia, Cristais, Florais, Reiki, Meditações, Ho'oponopono, Numerologia, Mapa Astral, Tarô, Radiestesia e Genograma Familiar. Com ferramentas práticas, fáceis de aplicar e prontas para uso, você vai elevar o nível dos seus atendimentos, encantar seus pacientes e se destacar no mercado, ganhando mais autoridade e resultados reais!",
    },
    {
      question: "Há algum suporte caso eu tenha dúvidas sobre o uso das ferramentas?",
      answer:
        "Sim! Nossa equipe está disponível para ajudar você a aproveitar ao máximo cada recurso do pacote. Caso tenha alguma dúvida ou queira orientações específicas, entre em contato conosco pelo e-mail de suporte que estará disponível na página de confirmação de compra.",
    },
    {
      question: "E se eu não gostar do material? Há garantia?",
      answer:
        "Sim, oferecemos uma garantia incondicional de 14 dias. Se por qualquer motivo você não ficar satisfeito com o material, basta solicitar a devolução dentro desse prazo, e faremos o reembolso completo do seu investimento.",
    },
    {
      question: "Os Stories Magnéticos, com as 10 fórmulas de stories fazem parte do kit ou é um material à parte?",
      answer:
        "Não, o Stories Magnéticos é um bônus exclusivo que você recebe ao garantir o Coleção Premium para Terapeutas Holísticos. Ele foi criado para ajudar você a transformar seus stories em uma verdadeira vitrine de vendas — sem parecer que está vendendo. Com 10 fórmulas prontas, você vai conseguir gerar conexão e vender mais, mesmo que tenha poucos seguidores. É um presente estratégico para você aplicar ainda hoje e aumentar seus resultados no Instagram!",
    },
    {
      question: "Como o material pode me ajudar a atrair mais clientes?",
      answer:
        "O Kit de Ferramentas Essenciais vai muito além de recursos para suas sessões — ele inclui conteúdos estratégicos prontos para você usar nas redes sociais, como posts, roteiros de Reels e mensagens para WhatsApp que conectam, engajam e despertam o interesse do seu público ideal. Com essas ferramentas, você vai aumentar sua autoridade, gerar mais confiança e criar um fluxo constante de novos clientes, enchendo sua agenda de forma prática e sem complicação!",
    },
  ]

  return (
    <main className="min-h-screen">
      {/* SEÇÃO MECANISMO */}
      <section className="bg-[#763a5b] py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 text-balance leading-tight">
            <span className="text-white">Conheça as </span>
            <span className="text-[#FA4279]">FERRAMENTAS HOLÍSTICAS ANTI-STRESS</span>
            <span className="text-white"> e por que elas são um diferencial!</span>
          </h2>
          <p className="text-white text-center text-lg md:text-xl mt-4 font-semibold">
            ✅Aplicação imediata - ✅Acesso Vitalício - ✅Suporte no Whatsapp
          </p>
          <p className="text-white text-lg mt-6 md:text-2xl leading-7 font-normal text-center">
            São mais de 350 ferramentas reunidas em um ecossistema pronto para você utilizar! São Oráculos, Florais,
            Taro, Gráficos e Mesas de Radiestesia, Meditações, Reiki e muito mais… Confira tudo abaixo.
          </p>
        </div>
      </section>

      {/* SEÇÃO AMOSTRA */}
      <section className="bg-[#FFF8E7] py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-[#763a5b] text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16">
            Explore as Ferramentas UMA a UMA:
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {products.map((product, index) => (
              <Card
                key={index}
                className="relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow border-2 border-[#763a5b]/20"
              >
                <div className="absolute top-3 right-3 z-10 bg-green-500 rounded-full p-2 shadow-md">
                  <Check className="w-5 h-5 md:w-6 md:h-6 text-white" strokeWidth={3} />
                </div>
                <CardContent className="p-0">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    className="w-full h-48 md:h-56 object-cover"
                  />
                  <div className="p-4 md:p-6">
                    <h3 className="font-bold text-base md:text-lg mb-2 text-gray-900 leading-tight">{product.title}</h3>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">{product.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO BÔNUS */}
      <section className="bg-[#763a5b] py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-balance leading-tight">
            <span className="text-white">E pra quem quiser ajudar propagar a cura… Temos mais alguns </span>
            <span className="text-[#FA4279]">BÔNUS</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {bonuses.map((bonus, index) => (
              <Card
                key={index}
                className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow border-2 border-[#FA4279]/30"
              >
                <CardContent className="p-0">
                  <img
                    src={bonus.image || "/placeholder.svg"}
                    alt={bonus.title}
                    className="w-full h-48 md:h-56 object-cover"
                  />
                  <div className="p-4 md:p-6">
                    <h3 className="font-bold text-base md:text-lg mb-2 text-gray-900 leading-tight">{bonus.title}</h3>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">{bonus.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-center text-lg md:text-xl mt-8 md:mt-12 font-semibold">
            <span className="text-white">Todos os </span>
            <span className="text-[#FA4279]">bônus</span>
            <span className="text-white"> são disponibilizados de forma </span>
            <span className="text-[#FA4279]">gratuita</span>
            <span className="text-white"> ao adquirir as </span>
            <span className="text-[#FA4279]">ferramentas holísticas anti-stress</span>
          </p>
        </div>
      </section>

      {/* SEÇÃO DEPOIMENTO */}
      <section className="bg-[#FFF8E7] py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-[#763a5b] text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16">
            Veja o que outros terapeutas falam sobre as ferramentas:
          </h2>

          <TestimonialCarousel />
        </div>
      </section>

      {/* SEÇÃO OFERTA */}
      <section className="bg-[#763a5b] py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-[#FA4279] text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16">
            Adquira Suas Ferramentas Agora!
          </h2>

          <Card className="shadow-2xl border-4 border-[#FA4279]">
            <CardContent className="p-6 md:p-10">
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 text-gray-900">Resumo Geral</h3>

              <div className="space-y-3 md:space-y-4 mb-8 md:mb-10">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 md:w-6 md:h-6 text-green-500 flex-shrink-0 mt-1" strokeWidth={3} />
                  <p className="text-sm md:text-base text-gray-800">
                    Aromaterapia Terapêutica: Guia Profissional + Calendário de 30 Dias
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 md:w-6 md:h-6 text-green-500 flex-shrink-0 mt-1" strokeWidth={3} />
                  <p className="text-sm md:text-base text-gray-800">
                    Cristais Ativos: Manual de Programação + Tabela de Poderes Terapêuticos
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 md:w-6 md:h-6 text-green-500 flex-shrink-0 mt-1" strokeWidth={3} />
                  <p className="text-sm md:text-base text-gray-800">
                    Florais de Impacto: 38 Fórmulas Para Equilibrar Emoções em Minutos
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 md:w-6 md:h-6 text-green-500 flex-shrink-0 mt-1" strokeWidth={3} />
                  <p className="text-sm md:text-base text-gray-800">
                    Pacote Reiki Profissional – Formulários, Técnicas e Scripts de Pós-Sessão
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 md:w-6 md:h-6 text-green-500 flex-shrink-0 mt-1" strokeWidth={3} />
                  <p className="text-sm md:text-base text-gray-800">50 Meditações Prontas Para Sessões Poderosas</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 md:w-6 md:h-6 text-green-500 flex-shrink-0 mt-1" strokeWidth={3} />
                  <p className="text-sm md:text-base text-gray-800">
                    Oráculo do Perdão: 65 Cartas de Ho'oponopono + Ritual de Cura Interior
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 md:w-6 md:h-6 text-green-500 flex-shrink-0 mt-1" strokeWidth={3} />
                  <p className="text-sm md:text-base text-gray-800">
                    Numerologia Prática: Calculadora Emocional + Planilha Interativa
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 md:w-6 md:h-6 text-green-500 flex-shrink-0 mt-1" strokeWidth={3} />
                  <p className="text-sm md:text-base text-gray-800">
                    Guia de Leitura Rápida de Mapa Astral – Entenda os Ciclos e Potenciais do Seu Cliente
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 md:w-6 md:h-6 text-green-500 flex-shrink-0 mt-1" strokeWidth={3} />
                  <p className="text-sm md:text-base text-gray-800">
                    Tarô Terapêutico Pronto: Baralho Completo + Manual de Leituras Intuitivas
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 md:w-6 md:h-6 text-green-500 flex-shrink-0 mt-1" strokeWidth={3} />
                  <p className="text-sm md:text-base text-gray-800">
                    Radiestesia Total: 90 Gráficos + Guia Prático Para Uso com Pêndulo
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 md:w-6 md:h-6 text-green-500 flex-shrink-0 mt-1" strokeWidth={3} />
                  <p className="text-sm md:text-base text-gray-800">
                    Genograma Terapêutico Familiar – Modelos + Guia Prático de Aplicação
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 md:w-6 md:h-6 text-green-500 flex-shrink-0 mt-1" strokeWidth={3} />
                  <p className="text-sm md:text-base text-gray-800">
                    Stories Magnéticos – 10 Fórmulas de Stories Que Vendem Sem Parecer Venda
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 md:w-6 md:h-6 text-green-500 flex-shrink-0 mt-1" strokeWidth={3} />
                  <p className="text-sm md:text-base text-gray-800">
                    Mensagens Magnéticas: Roteiros de WhatsApp Para Conectar e Vender Sessões
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 md:w-6 md:h-6 text-green-500 flex-shrink-0 mt-1" strokeWidth={3} />
                  <p className="text-sm md:text-base text-gray-800">
                    Caderno Prático de TCC para Depressão: 10 Intervenções Imediatas Para Aplicar em Sessão
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 md:w-6 md:h-6 text-green-500 flex-shrink-0 mt-1" strokeWidth={3} />
                  <p className="text-sm md:text-base text-gray-800">
                    Fichas Terapêuticas Editáveis: Modelos Profissionais Para Personalizar
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 md:w-6 md:h-6 text-green-500 flex-shrink-0 mt-1" strokeWidth={3} />
                  <p className="text-sm md:text-base text-gray-800">
                    Recepção Terapêutica Premium: Kit de Boas-Vindas Para Novos Pacientes
                  </p>
                </div>
              </div>

              <div className="flex justify-center mb-8">
                <a href="https://go.pepperpay.com.br/zjsrf" target="_blank" rel="noopener noreferrer">
                  
                </a>
              </div>

              <div className="text-center mb-8">
                <p className="text-red-600 font-bold text-base md:text-lg">
                EXTRA - Suporte pessoal no WHATSAPP para quem adiquirir hoje!
                </p>
              </div>

              <p className="text-center text-lg md:text-2xl font-bold text-gray-900 mb-6 md:mb-8 leading-relaxed px-2">
                São ferramentas holísticas premium! Um kit completo entregue para acabar com qualquer desequilíbrio.
                Tudo separado e explicado pra você, e sem contar os bônus. Adquira agora por…
              </p>

              <div className="text-center mb-6 md:mb-8">
                <p className="text-4xl md:text-6xl font-bold text-[#00FF00] mb-2">APENAS R$37,90</p>
                <p className="text-xl md:text-2xl font-semibold text-[#00FF00]">ou 4X R$9,47</p>
              </div>

              <div className="flex justify-center mb-8">
                <a href="https://go.pepperpay.com.br/zjsrf" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="2xl"
                    className="bg-green-500 hover:bg-green-600 text-white font-bold text-base md:text-xl px-8 md:px-16 py-5 md:py-7 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    QUERO MINHAS FERRAMENTAS
                  </Button>
                </a>
              </div>

              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg">
                <p className="text-gray-900 text-center text-xl md:text-2xl mb-6 font-bold">
                  Se preferir, entre em contato conosco agora mesmo. Teremos o prazer de te atender pessoalmente!
                </p>
                <div className="flex justify-center">
                  <a
                    href="https://wa.me/5548992050264?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20as%20Ferramentas%20Holísticas%20Anti-Stress"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button
                      size="lg"
                      className="bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold text-xl md:text-2xl px-12 md:px-16 py-7 md:py-9 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-4"
                    >
                      <svg
                        className="w-10 h-10 md:w-12 md:h-12"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                      ENTRAR EM CONTATO
                    </Button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* SEÇÃO GARANTIA */}
      <section className="bg-[#FFF8E7] py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="shadow-xl">
            <CardContent className="p-6 md:p-10 text-center">
              <div className="flex justify-center mb-6">
                <img
                  src="/garantia-7-dias.png"
                  alt="Garantia de 7 Dias"
                  className="w-48 h-48 md:w-56 md:h-56 object-contain"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Garantia Incondicional de 7 Dias</h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Experimente sem riscos! Se em 7 dias as ferramentas não agregarem o valor desejado, basta solicitar o
                reembolso diretamente em nosso whatsapp. Sem enrolação!
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* SEÇÃO FAQ */}
      <section className="bg-[#763a5b] py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-[#FA4279] text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16">
            Perguntas Frequentes
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <AccordionTrigger className="px-4 md:px-6 py-4 md:py-5 text-left hover:no-underline hover:bg-gray-50 transition-colors">
                  <span className="font-semibold text-base md:text-lg text-gray-900 pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-4 md:px-6 py-4 text-sm md:text-base text-gray-700 leading-relaxed border-t">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* SEÇÃO COPYRIGHT */}
      <section className="bg-gray-900 py-6 md:py-8 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-gray-400 text-sm md:text-base">
            Ferramentas Holísticas Anti-Stress 2025 - Todos Direitos Reservados
          </p>
        </div>
      </section>
    </main>
  )
}
