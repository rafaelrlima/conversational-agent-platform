import {
  Component,
  ChangeDetectorRef,
  inject
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ChatService } from './chat.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  private chatService = inject(ChatService);
  private cdr = inject(ChangeDetectorRef);

  message = '';

  response = '';

  loading = false;

  send(): void {

    if (!this.message.trim()) {
      return;
    }

    const question = this.message;

    this.message = '';

    this.loading = true;

    this.chatService
      .sendMessage(question)
      .subscribe({
        next: (result) => {

          this.response = result.response;

          this.loading = false;

          this.cdr.detectChanges();
        },

        error: (error) => {

          console.error(error);

          this.response =
            'An error occurred while communicating with the AI model.';

          this.loading = false;

          this.cdr.detectChanges();
        }
      });
  }
}