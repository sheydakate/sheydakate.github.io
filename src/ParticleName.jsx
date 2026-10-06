import { useEffect, useRef } from "react"

function ParticleName() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext("2d", { willReadFrequently: true })

        let animationId
        let revealProgress = 0
        let revealed = false

        let mouseX = -1000
        let mouseY = -1000

        canvas.width = window.innerWidth
        canvas.height = window.innerHeight

        // =========================================
        // CREATE HIDDEN TEXT
        // =========================================

        ctx.fillStyle = "white"
        ctx.textAlign = "center"

        ctx.font = "italic 76px Georgia"
        ctx.fillText(
            "SHEYDA KATE",
            canvas.width / 2,
            canvas.height * 0.58
        )

        ctx.font = "30px Georgia"
        ctx.fillText(
            "CS @ UCF",
            canvas.width / 2,
            canvas.height * 0.58 + 62
        )

        const textPixels = ctx.getImageData(
            0,
            0,
            canvas.width,
            canvas.height
        )

        const targets = []

        for (let y = 0; y < canvas.height; y += 2) {
            for (let x = 0; x < canvas.width; x += 2) {

                const index = (y * canvas.width + x) * 4

                if (textPixels.data[index + 3] > 128) {
                    targets.push({ x, y })
                }
            }
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height)

        // =========================================
        // TEXT PARTICLES
        // =========================================

        const textParticles = targets.map((target) => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,

            speedX: (Math.random() - 0.5) * 0.22,
            speedY: (Math.random() - 0.5) * 0.22,

            targetX: target.x,
            targetY: target.y,

            size: Math.random() * 0.45 + 0.25,
            brightness: Math.random() * 0.4 + 0.55,

            // Each particle begins forming at a different time
            delay: Math.random() * 0.65,

            // Each particle moves at a slightly different speed
            formationSpeed:
                Math.random() * 0.018 + 0.018,

            // Positive or negative = curve different directions
            curve:
                (Math.random() - 0.5) * 0.7,

            phase:
                Math.random() * Math.PI * 2
        }))

        // =========================================
        // BACKGROUND FAIRY DUST
        // =========================================

        const backgroundParticles = []

        for (let i = 0; i < 1100; i++) {
            backgroundParticles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,

                speedX: (Math.random() - 0.5) * 0.18,
                speedY: (Math.random() - 0.5) * 0.18,

                size: Math.random() * 0.6 + 0.2,
                brightness: Math.random() * 0.5 + 0.3,

                twinkleSpeed:
                    Math.random() * 0.025 + 0.005,

                twinkleOffset:
                    Math.random() * Math.PI * 2
            })
        }

        // =========================================
        // MOUSE
        // =========================================

        function handleMouseMove(event) {
            mouseX = event.clientX
            mouseY = event.clientY
        }

        window.addEventListener(
            "mousemove",
            handleMouseMove
        )

        // =========================================
        // WRAP PARTICLES
        // =========================================

        function wrapParticle(particle) {

            if (particle.x < 0)
                particle.x = canvas.width

            if (particle.x > canvas.width)
                particle.x = 0

            if (particle.y < 0)
                particle.y = canvas.height

            if (particle.y > canvas.height)
                particle.y = 0
        }

        // =========================================
        // DRAW FAIRY PARTICLE
        // =========================================

        function drawParticle(particle, alpha = 1) {

            ctx.beginPath()

            ctx.arc(
                particle.x,
                particle.y,
                particle.size,
                0,
                Math.PI * 2
            )

            ctx.fillStyle =
                `rgba(255,255,255,${alpha})`

            ctx.shadowBlur =
                particle.size > 0.55 ? 14 : 7

            ctx.shadowColor =
                "rgba(255,255,255,1)"

            ctx.fill()
        }

        // =========================================
        // ANIMATION
        // =========================================

        function animate(time = 0) {

            ctx.clearRect(
                0,
                0,
                canvas.width,
                canvas.height
            )

            const nameX = canvas.width / 2
            const nameY = canvas.height * 0.58

            const distance = Math.hypot(
                mouseX - nameX,
                mouseY - nameY
            )

            // Cursor starts influencing particles
            // from a large area of the screen
            const mouseInfluence = Math.max(
                0,
                Math.min(
                    1,
                    1 - distance / 1100
                )
            )

            // Slowly advance the reveal
            if (!revealed) {

                revealProgress +=
                    mouseInfluence * 0.009

                if (revealProgress >= 1) {
                    revealProgress = 1
                    revealed = true
                }
            }

            // =====================================
            // BACKGROUND PARTICLES
            // =====================================

            for (const particle of backgroundParticles) {

                particle.x += particle.speedX
                particle.y += particle.speedY

                wrapParticle(particle)

                const twinkle =
                    0.65 +
                    Math.sin(
                        time * particle.twinkleSpeed +
                        particle.twinkleOffset
                    ) * 0.3

                drawParticle(
                    particle,
                    particle.brightness * twinkle
                )
            }

            // =====================================
            // TEXT PARTICLES
            // =====================================

            for (const particle of textParticles) {

                // Every particle has its own reveal progress
                const personalProgress = Math.max(
                    0,
                    Math.min(
                        1,
                        (revealProgress - particle.delay) /
                        (1 - particle.delay)
                    )
                )

                if (personalProgress <= 0) {

                    // Still ordinary floating fairy dust
                    particle.x += particle.speedX
                    particle.y += particle.speedY

                    wrapParticle(particle)

                } else {

                    const dx =
                        particle.targetX - particle.x

                    const dy =
                        particle.targetY - particle.y

                    const distanceToTarget =
                        Math.hypot(dx, dy)

                    // Sideways force creates curved paths
                    const curveStrength =
                        particle.curve *
                        Math.min(
                            distanceToTarget / 250,
                            1
                        )

                    particle.x +=
                        dx *
                        particle.formationSpeed *
                        (0.3 + personalProgress)

                    particle.y +=
                        dy *
                        particle.formationSpeed *
                        (0.3 + personalProgress)

                    // Perpendicular movement makes
                    // particles sweep instead of collapse
                    particle.x +=
                        -dy *
                        0.004 *
                        curveStrength *
                        (1 - personalProgress)

                    particle.y +=
                        dx *
                        0.004 *
                        curveStrength *
                        (1 - personalProgress)

                    // Tiny magical wandering while traveling
                    particle.x +=
                        Math.sin(
                            time * 0.002 +
                            particle.phase
                        ) *
                        0.18 *
                        (1 - personalProgress)

                    particle.y +=
                        Math.cos(
                            time * 0.002 +
                            particle.phase
                        ) *
                        0.18 *
                        (1 - personalProgress)
                }

                // Once extremely close, lock exactly in place
                if (
                    revealed &&
                    Math.abs(
                        particle.targetX - particle.x
                    ) < 0.5 &&
                    Math.abs(
                        particle.targetY - particle.y
                    ) < 0.5
                ) {
                    particle.x = particle.targetX
                    particle.y = particle.targetY
                }

                if (revealed) {
                    particle.size = Math.max(particle.size, 0.8)
                }

                drawParticle(
                    particle,
                    revealed
                        ? 1
                        : particle.brightness +
                        personalProgress * 0.35
                )
            }

            // =====================================
            // LITTLE STAR FLASHES
            // =====================================

            for (
                let i = 0;
                i < backgroundParticles.length;
                i += 110
            ) {

                const particle =
                    backgroundParticles[i]

                const sparkle =
                    Math.sin(
                        time * 0.003 + i
                    ) > 0.92

                if (sparkle) {

                    ctx.save()

                    ctx.translate(
                        particle.x,
                        particle.y
                    )

                    ctx.strokeStyle =
                        "rgba(255,255,255,0.95)"

                    ctx.lineWidth = 0.6

                    ctx.shadowBlur = 14
                    ctx.shadowColor = "white"

                    ctx.beginPath()

                    ctx.moveTo(-3.5, 0)
                    ctx.lineTo(3.5, 0)

                    ctx.moveTo(0, -3.5)
                    ctx.lineTo(0, 3.5)

                    ctx.stroke()

                    ctx.restore()
                }
            }

            animationId =
                requestAnimationFrame(animate)
        }

        animate()

        // =========================================
        // CLEANUP
        // =========================================

        return () => {

            cancelAnimationFrame(animationId)

            window.removeEventListener(
                "mousemove",
                handleMouseMove
            )
        }

    }, [])

    return <canvas ref={canvasRef} />
}

export default ParticleName