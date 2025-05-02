import { Component, ElementRef, Input, OnInit, } from '@angular/core';
import {gsap} from 'gsap';

interface Bubble {
  x:number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
}

@Component({
  selector: 'app-bubble-effect',
  //standalone: true,
  //imports: [],
  templateUrl: './bubble-effect.component.html',
  styleUrl: './bubble-effect.component.scss'
})
export class BubbleEffectComponent implements OnInit {
  @Input() color1: string ='rgba (110,44,168, 0.7)'; // Morado por defecto
  @Input() color2: string ='rgba (0,179,131, 0.7)'; // Azul agua por defecto
  @Input() count: number = 20;

  private bubbles: Bubble[] = [];
  private canvasContext!: CanvasRenderingContext2D;
  private canvasWidth: number = 0;
  private canvasHeight: number = 0;
  private animationId: number = 0;

  constructor (private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.initCanvas();
    this.createBubbles();
    this.animate();

    window.addEventListener('resize', () => {
      this.resizeCanvas();
    });
  }

  private initCanvas(): void {
    const canvas = this.elementRef.nativeElement.querySelector('canvas');
    this.canvasContext = canvas.getContext('2d');
    this.resizeCanvas();
  }

  private resizeCanvas(): void {
    const canvas = this.elementRef.nativeElement.querySelector('canvas');
    canvas.width = window.innerWidth;
    canvas.height = this.elementRef.nativeElement.offsetHeight;
    this.canvasWidth = canvas.width;
    this.canvasHeight = canvas.height;
    
    // Recreate bubbles when canvas resizes
    this.bubbles = [];
    this.createBubbles();
  }

  private createBubbles(): void {
    for (let i = 0; i < this.count; i++) {
      this.bubbles.push({
        x: Math.random() * this.canvasWidth,
        y: Math.random() * this.canvasHeight,
        size: Math.random() * 40 + 10,
        opacity: Math.random() * 0.5 + 0.1,
        speed: Math.random() * 1 + 0.5
      });
    }
  }

  private animate(): void {
    this.animationId = requestAnimationFrame(() => this.animate());
    this.canvasContext.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    
    this.bubbles.forEach((bubble, index) => {
      // Create gradient for each bubble
      const gradient = this.canvasContext.createRadialGradient(
        bubble.x, bubble.y, 0,
        bubble.x, bubble.y, bubble.size
      );
      
      gradient.addColorStop(0, this.color1);
      gradient.addColorStop(1, this.color2);
      
      // Draw bubble
      this.canvasContext.beginPath();
      this.canvasContext.arc(bubble.x, bubble.y, bubble.size, 0, Math.PI * 2);
      this.canvasContext.fillStyle = gradient;
      this.canvasContext.globalAlpha = bubble.opacity;
      this.canvasContext.fill();
      this.canvasContext.globalAlpha = 1;
      
      // Move bubble
      bubble.y -= bubble.speed;
      
      // Reset bubble position when it moves out of the canvas
      if (bubble.y + bubble.size < 0) {
        bubble.y = this.canvasHeight + bubble.size;
        bubble.x = Math.random() * this.canvasWidth;
      }
    });
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.animationId);
    window.removeEventListener('resize', () => {
      this.resizeCanvas();
    });
  }
}

