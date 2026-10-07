import { useEffect, useRef } from 'react'
import Box from '@mui/material/Box'

function ParticleBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    const particles = []

    function resizeCanvas() {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight

        for (const particle of particles) {
            particle.x = Math.random() * canvas.width
            particle.y = Math.random() * canvas.height
        }
    }
    
    resizeCanvas()

    window.addEventListener('resize', resizeCanvas)


    for (let i = 0; i < 500; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: (Math.random() - 0.5) * 0.2,
      })
    }

    let animationId

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const particle of particles) {
        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, 0.6, 0, Math.PI * 2)
        ctx.fillStyle = 'white'
        ctx.shadowBlur = 6
        ctx.shadowColor = 'white'
        ctx.fill()
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
        cancelAnimationFrame(animationId)
        window.removeEventListener('resize', resizeCanvas)
    }

  }, [])

    return (
    <Box
        component="canvas"
        ref={canvasRef}
        sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        pointerEvents: 'none',
        }}
    />
    )
}

export default ParticleBackground