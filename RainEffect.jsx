import { useEffect } from 'react'

const RainEffect = () => {
  useEffect(() => {
    const canvas = document.getElementById('rain')
    const ctx = canvas.getContext('2d')
    
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    
    const raindrops = []
    const maxDrops = 100
    
    class Raindrop {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height - canvas.height
        this.length = Math.random() * 20 + 10
        this.speed = Math.random() * 4 + 4
        this.opacity = Math.random() * 0.5 + 0.3
      }
      
      fall() {
        this.y += this.speed
        if (this.y > canvas.height) {
          this.y = -this.length
          this.x = Math.random() * canvas.width
        }
      }
      
      draw() {
        ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity})`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(this.x, this.y)
        ctx.lineTo(this.x, this.y + this.length)
        ctx.stroke()
      }
    }
    
    for (let i = 0; i < maxDrops; i++) {
      raindrops.push(new Raindrop())
    }
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      raindrops.forEach(drop => {
        drop.fall()
        drop.draw()
      })
      requestAnimationFrame(animate)
    }
    
    animate()
    
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  return <canvas id="rain" />
}

export default RainEffect