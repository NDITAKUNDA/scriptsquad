import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import gsap from 'gsap';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  email = 'info@scriptsquad.com';

  ngOnInit(): void {
    this.animatedWords();
  }

  animatedWords() {
    gsap.to('#my-header', {
      scrollTrigger: '#header-container', // start the animation when ".box" enters the viewport (once)
      y: 50
    });
  }



}
