"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface QuizModalProps {
  isOpen: boolean
  onClose: () => void
  onComplete: () => void
}

export function QuizModal({ isOpen, onClose, onComplete }: QuizModalProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showEffect, setShowEffect] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)

  if (!isOpen) return null

  const triggerConfetti = () => {
    const duration = 2000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 }

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min
    }

    const interval: any = setInterval(() => {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        return clearInterval(interval)
      }

      const particleCount = 50 * (timeLeft / duration)

      // Create confetti from different positions
      createConfetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
          colors: ["#FA4279", "#763a5b", "#FFD700", "#FF69B4", "#9370DB"],
        }),
      )
      createConfetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
          colors: ["#FA4279", "#763a5b", "#FFD700", "#FF69B4", "#9370DB"],
        }),
      )
    }, 250)
  }

  const createConfetti = (options: any) => {
    const container = document.createElement("div")
    container.style.position = "fixed"
    container.style.top = "0"
    container.style.left = "0"
    container.style.width = "100%"
    container.style.height = "100%"
    container.style.pointerEvents = "none"
    container.style.zIndex = "9999"
    document.body.appendChild(container)

    for (let i = 0; i < options.particleCount; i++) {
      const confetti = document.createElement("div")
      const color = options.colors[Math.floor(Math.random() * options.colors.length)]
      const startX = options.origin.x * window.innerWidth
      const startY = options.origin.y * window.innerHeight

      confetti.style.position = "absolute"
      confetti.style.left = startX + "px"
      confetti.style.top = startY + "px"
      confetti.style.width = "10px"
      confetti.style.height = "10px"
      confetti.style.backgroundColor = color
      confetti.style.borderRadius = Math.random() > 0.5 ? "50%" : "0%"
      confetti.style.opacity = "1"

      container.appendChild(confetti)

      const angle = Math.random() * Math.PI * 2
      const velocity = options.startVelocity + Math.random() * 10
      const vx = Math.cos(angle) * velocity
      const vy = Math.sin(angle) * velocity - 5

      animateConfetti(confetti, vx, vy, container)
    }

    setTimeout(() => {
      document.body.removeChild(container)
    }, 3000)
  }

  const animateConfetti = (element: HTMLElement, vx: number, vy: number, container: HTMLElement) => {
    let x = Number.parseFloat(element.style.left)
    let y = Number.parseFloat(element.style.top)
    const velocityX = vx
    let velocityY = vy
    let opacity = 1

    const animate = () => {
      velocityY += 0.5 // gravity
      x += velocityX
      y += velocityY
      opacity -= 0.01

      element.style.left = x + "px"
      element.style.top = y + "px"
      element.style.opacity = opacity.toString()
      element.style.transform = `rotate(${x + y}deg)`

      if (opacity > 0 && y < window.innerHeight) {
        requestAnimationFrame(animate)
      }
    }

    animate()
  }

  const playSuccessSound = () => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
    const oscillator = audioContext.createOscillator()
    const gainNode = audioContext.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(audioContext.destination)

    oscillator.frequency.value = 800
    oscillator.type = "sine"

    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5)

    oscillator.start(audioContext.currentTime)
    oscillator.stop(audioContext.currentTime + 0.5)

    // Second note for harmony
    setTimeout(() => {
      const oscillator2 = audioContext.createOscillator()
      const gainNode2 = audioContext.createGain()

      oscillator2.connect(gainNode2)
      gainNode2.connect(audioContext.destination)

      oscillator2.frequency.value = 1000
      oscillator2.type = "sine"

      gainNode2.gain.setValueAtTime(0.3, audioContext.currentTime)
      gainNode2.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5)

      oscillator2.start(audioContext.currentTime)
      oscillator2.stop(audioContext.currentTime + 0.5)
    }, 100)
  }

  const handleAnswerClick = (answerIndex: number) => {
    setSelectedAnswer(answerIndex)
    setShowEffect(true)

    triggerConfetti()
    playSuccessSound()

    // Wait for animation to complete before proceeding
    setTimeout(() => {
      setShowEffect(false)
      setSelectedAnswer(null)

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
      } else {
        setShowThankYou(true)
      }
    }, 1500)
  }

  const questions = [
    {
      question: "Você atua ou já atuou como terapeuta holístico?",
      answers: [
        "Sim! Já atuei/atuo.",
        "Nunca atuei mas conheço do assunto!",
        "Nunca vi, e nem sei de nada sobre isso!",
      ],
    },
    {
      question:
        "Tarô, Aromaterapia, Cristais, Florais, Reiki, Oráculo, Numerologia, Radiestesia e Genograma. Esse nomes são familiares pra você?",
      answers: ["Claro! Conheço todos.", "Conheço uns e outros não.", "Nunca ouvi falar de nenhum."],
    },
    {
      question: "Você acredita que o estresse crônico é uma doença?",
      answers: [
        "Acredito! E reconheço sua gravidade.",
        "Acredito que seja mas não me informo muito sobre.",
        "Estresse não é doença!",
      ],
    },
  ]

  const currentQuestionData = questions[currentQuestion]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      {/* Light Effect Overlay */}
      {showEffect && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 animate-pulse-fast">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-400/30 rounded-full blur-3xl animate-ping" />
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-pink-400/40 rounded-full blur-2xl animate-bounce" />
            <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-purple-400/40 rounded-full blur-2xl animate-bounce delay-100" />
            <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-blue-400/40 rounded-full blur-xl animate-ping delay-200" />
          </div>
        </div>
      )}

      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {showThankYou ? (
          <div className="p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-[#763a5b] mb-4 leading-tight">Obrigado pela atenção.</h2>
            <h2 className="text-3xl md:text-5xl font-bold text-[#FA4279] mb-8 leading-tight">
              Isso fez toda a diferença!💜
            </h2>

            <div className="flex justify-center mt-12">
              <Button
                size="lg"
                onClick={onComplete}
                className="bg-green-500 hover:bg-green-600 text-white font-bold text-sm md:text-lg lg:text-xl px-6 md:px-10 lg:px-14 py-4 md:py-5 lg:py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full md:w-auto max-w-full text-center leading-normal whitespace-normal break-words"
              >
                SEGUIR PARA AS FERRAMENTAS SECRETAS
              </Button>
            </div>
          </div>
        ) : (
          <div className="p-8 md:p-12">
            {currentQuestion === 0 && (
              <h2 className="text-2xl md:text-3xl font-bold text-center text-[#763a5b] mb-8 leading-tight">
                Para entendermos um pouco sobre seu perfil, responda essas 3 perguntinhas:
              </h2>
            )}

            <div className="text-center mb-6">
              <span className="inline-block px-4 py-2 bg-[#763a5b] text-white rounded-full text-sm font-semibold">
                Pergunta {currentQuestion + 1} de {questions.length}
              </span>
            </div>

            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-semibold text-[#763a5b] mb-6 text-center">
                {currentQuestionData.question}
              </h3>

              <div className="space-y-4">
                {currentQuestionData.answers.map((answer, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerClick(index)}
                    disabled={selectedAnswer !== null}
                    className={`w-full p-4 md:p-6 text-left text-base md:text-lg font-medium rounded-xl border-2 transition-all duration-300 ${
                      selectedAnswer === index
                        ? "bg-[#FA4279] border-[#FA4279] text-white scale-105 shadow-lg"
                        : "bg-white border-[#763a5b] text-[#763a5b] hover:border-[#FA4279] hover:bg-[#FA4279] hover:text-white hover:scale-102"
                    } ${selectedAnswer !== null && selectedAnswer !== index ? "opacity-50" : ""}`}
                  >
                    <span className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-current flex items-center justify-center font-bold">
                        {index + 1}
                      </span>
                      <span>{answer}</span>
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
