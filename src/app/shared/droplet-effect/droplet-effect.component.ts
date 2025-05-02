import { Component, OnInit, ElementRef, OnDestroy, Input } from '@angular/core';
import { gsap } from 'gsap';

interface Droplet {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
}

@Component({
  selector: 'app-droplet-effect',
  templateUrl: './droplet-effect.component.html',
  styleUrls: ['./droplet-effect.component.scss']
})
export class DropletEffectComponent implements OnInit, OnDestroy {
  @Input() color: string = 'rgba(255, 255, 255, 0.3)';
  @Input() count: number = 30;
  
  private droplets: Droplet[] = [];
  private canvasContext!: CanvasRenderingContext2D;
  private canvasWidth: number = 0;
  private canvasHeight: number = 0;
  private animationId: number = 0;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.initCanvas();
    this.createDroplets();
    this.animate();
    
    window.addEventListener('resize', this.handleResize);
  }

  private handleResize = (): void => {
    this.resizeCanvas();
  }

  private initCanvas(): void {
    const canvas = this.elementRef.nativeElement.querySelector('canvas');
    this.canvasContext = canvas.getContext('2d');
    this.resizeCanvas();
  }

  private resizeCanvas(): void {
    const canvas = this.elementRef.nativeElement.querySelector('canvas');
    canvas.width = window.innerWidth;
    canvas.height = this.elementRef.nativeElement.parentElement.offsetHeight;
    this.canvasWidth = canvas.width;
    this.canvasHeight = canvas.height;
    
    // Recreate droplets when canvas resizes
    this.droplets = [];
    this.createDroplets();
  }

  private createDroplets(): void {
    for (let i = 0; i < this.count; i++) {
      this.droplets.push({
        x: Math.random() * this.canvasWidth,
        y: Math.random() * this.canvasHeight,
        size: Math.random() * 8 + 2,
        speed: Math.random() * 3 + 1,
        opacity: Math.random() * 0.6 + 0.3
      });
    }
  }

  private animate(): void {
    this.animationId = requestAnimationFrame(() => this.animate());
    this.canvasContext.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    
    this.droplets.forEach((droplet, index) => {
      // Draw droplet
      this.canvasContext.beginPath();
      this.drawDroplet(droplet.x, droplet.y, droplet.size);
      this.canvasContext.fillStyle = this.color;
      this.canvasContext.globalAlpha = droplet.opacity;
      this.canvasContext.fill();
      this.canvasContext.globalAlpha = 1;
      
      // Move droplet
      droplet.y += droplet.speed;
      
      // Reset droplet position when it moves out of the canvas
      if (droplet.y - droplet.size * 2 > this.canvasHeight) {
        droplet.y = -droplet.size * 2;
        droplet.x = Math.random() * this.canvasWidth;
      }
    });
  }

  private drawDroplet(x: number, y: number, size: number): void {
    // Create a teardrop shape
    this.canvasContext.moveTo(x, y);
    this.canvasContext.bezierCurveTo(
      x - size, y - size * 2,
      x + size, y - size * 2,
      x, y
    );
    this.canvasContext.moveTo(x, y);
    this.canvasContext.arc(x, y, size / 2, 0, Math.PI * 2);
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.animationId);
    window.removeEventListener('resize', this.handleResize);
  }
}