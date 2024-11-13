import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';

type TCardFace = 'front' | 'back';
type TCardMode = 'basic' | 'advanced' | 'premium';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgSwitch, NgSwitchCase, NgSwitchDefault, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public activeFace: TCardFace = 'front';
  public selectedBackContent: FormControl<TCardMode | null> =
    new FormControl<TCardMode>('premium');

  ngOnInit(): void {
    switch (Math.round(Math.random() * 10) % 2 === 0) {
      case true:
        console.log('true');
        break;
      // @ts-ignore
      case false:
        console.log('false');
      default:
        console.log('default');
    }
  }

  public onCardFaceChange(face: TCardFace): void {
    this.activeFace = face;
  }
}
