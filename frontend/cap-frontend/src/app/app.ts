import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ChatService } from './chat.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  private chatService = inject(ChatService);

  message = '';

  response = '';

  send() {

    this.chatService
      .sendMessage(this.message)
      .subscribe({
        next: (result) => {
          this.response = result.response;
        }
      });
  }
}