import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private http = inject(HttpClient);

  sendMessage(message: string) {

    return this.http.post<any>(
      'http://localhost:8000/api/chat',
      {
        message
      }
    );
  }
}