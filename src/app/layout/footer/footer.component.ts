import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  currentYear = new Date().getFullYear();
  
  openBases() {
    window.open('url-to-bases', '_blank');
  }
  
  openAviso() {
    window.open('url-to-aviso', '_blank');
  }
  
  openContacto() {
    window.open('url-to-contacto', '_blank');
  }


}
