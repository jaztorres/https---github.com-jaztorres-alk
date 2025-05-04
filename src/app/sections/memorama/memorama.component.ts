import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-memorama',
  standalone: true,
  imports: [ CommonModule,RouterModule,FormsModule],
  templateUrl: './memorama.component.html',
  styleUrl: './memorama.component.scss'
})
export class MemoramaComponent {

}
