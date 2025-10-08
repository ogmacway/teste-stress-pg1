"use client"

import type React from "react"

import { useEffect, useState, useRef, useCallback } from "react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  "/testimonial-1-amanda.png",
  "/testimonial-2-rafael.png",
  "/testimonial-3-renata.png",
  "/testimonial-4-fernanda.png",
  "/testimonial-5-juliana.png",
  "/testimonial-6-marina.png",
  "/testimonial-7-gabriel.png",
  "/testimonial-8-paulo.png",
]

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(testimonials.length)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [translateX, setTranslateX] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  const infiniteTestimonials = [...testimonials, ...testimonials, ...testimonials]

  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    autoPlayRef.current = setInterval(() => {
      handleNext()
    }, 4000)
  }, [])

  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
      autoPlayRef.current = null
    }
  }

  const handleNext = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => prev + 1)
  }

  const handlePrev = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => prev - 1)
  }

  useEffect(() => {
    if (!isTransitioning) return

    const timer = setTimeout(() => {
      setIsTransitioning(false)

      // Reset to middle section for infinite loop
      if (currentIndex >= testimonials.length * 2) {
        setCurrentIndex(testimonials.length)
      } else if (currentIndex <= 0) {
        setCurrentIndex(testimonials.length)
      }
    }, 500)

    return () => clearTimeout(timer)
  }, [currentIndex, isTransitioning])

  const handleDragStart = (clientX: number) => {
    stopAutoPlay()
    setIsDragging(true)
    setStartX(clientX)
  }

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return
    const diff = clientX - startX
    setTranslateX(diff)
  }

  const handleDragEnd = () => {
    if (!isDragging) return
    setIsDragging(false)

    const threshold = 50
    if (translateX > threshold) {
      handlePrev()
    } else if (translateX < -threshold) {
      handleNext()
    }

    setTranslateX(0)
    startAutoPlay()
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    handleDragStart(e.clientX)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    handleDragMove(e.clientX)
  }

  const handleMouseUp = () => {
    handleDragEnd()
  }

  const handleMouseLeave = () => {
    if (isDragging) handleDragEnd()
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    handleDragStart(e.touches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    handleDragMove(e.touches[0].clientX)
  }

  const handleTouchEnd = () => {
    handleDragEnd()
  }

  useEffect(() => {
    startAutoPlay()
    return () => stopAutoPlay()
  }, [startAutoPlay])

  const getDisplayIndex = () => {
    let index = currentIndex % testimonials.length
    if (index < 0) index = testimonials.length + index
    return index
  }

  return (
    <div className="relative overflow-hidden">
      <div
        ref={carouselRef}
        className={`flex ${isTransitioning ? "transition-transform duration-500 ease-out" : ""} cursor-grab active:cursor-grabbing select-none`}
        style={{
          transform: `translateX(calc(-${currentIndex * 100}% + ${translateX}px))`,
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {infiniteTestimonials.map((testimonial, index) => (
          <div key={index} className="min-w-full flex justify-center px-4">
            <Card className="max-w-md shadow-xl pointer-events-none">
              <CardContent className="p-0">
                <img
                  src={testimonial || "/placeholder.svg"}
                  alt={`Depoimento ${(index % testimonials.length) + 1}`}
                  className="w-full h-auto rounded-lg"
                  draggable={false}
                />
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              stopAutoPlay()
              setIsTransitioning(true)
              setCurrentIndex(testimonials.length + index)
              startAutoPlay()
            }}
            className={`w-3 h-3 rounded-full transition-all ${
              index === getDisplayIndex() ? "bg-[#FA4279] w-8" : "bg-gray-400"
            }`}
            aria-label={`Ver depoimento ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
