import {
  Component,
  ChangeDetectorRef,
  inject,
  ElementRef,
  ViewChild
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ChatService } from './chat.service';

import { Message } from './models/message.model';

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

  @ViewChild('chatWindow')
  chatWindow!: ElementRef;

  private chatService = inject(ChatService);

  private cdr = inject(ChangeDetectorRef);

  message = '';

  loading = false;

  messages: Message[] = [];

  send(): void {

    if (!this.message.trim()) {
      return;
    }

    const question = this.message;

    this.messages.push({
      role: 'user',
      content: question,
      timestamp: new Date()
    });

    this.message = '';

    this.loading = true;

    this.scrollToBottom();

    this.chatService
      .sendMessage(question)
      .subscribe({

        next: (result) => {

          this.messages.push({
            role: 'assistant',
            content: result.response,
            timestamp: new Date()
          });

          this.loading = false;

          this.cdr.detectChanges();

          this.scrollToBottom();
        },

        error: (error) => {

          console.error(error);

          this.messages.push({
            role: 'assistant',
            content: 'Error communicating with AI.',
            timestamp: new Date()
          });

          this.loading = false;

          this.cdr.detectChanges();

          this.scrollToBottom();
        }
      });
  }

  private scrollToBottom(): void {

    setTimeout(() => {

      if (this.chatWindow) {

        this.chatWindow.nativeElement.scrollTop =
          this.chatWindow.nativeElement.scrollHeight;
      }

    }, 50);
  }
}