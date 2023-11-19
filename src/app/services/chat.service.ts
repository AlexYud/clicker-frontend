import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private spectator: any[] = [];
  
  private messages: String[] = [];
  private recentMessages: String[] = [];
  
  private images: String[] = [];
  private names: String[] = [];
  
  constructor() { }
}
