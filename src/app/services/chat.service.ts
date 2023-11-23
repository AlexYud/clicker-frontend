import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private spectators: any[] = [];
  
  private messages: String[] = [
    "Conteúdo incrível! 👏",
    "Adorando essa live! 😄",
    "Melhor TikTok!",
    "Oi pra geral! 👋",
    "Dica sensacional!",
    "Engraçade hahaha!",
    "Viciade aqui!",
    "Criatividade!",
    "Carismátice?",
    "Oi pessoal!",
    "Bora lá!",
    "Oi, galera! Bem-vindos!",
    "Vem comigo na diversão!",
    "Tô animado, e vocês?",
    "Like, por favor! Curtam!",
    "Sorrisos aqui no TikTok!",
    "Chegou a hora da live!",
    "Que vibe incrível hoje!",
    "Música boa rolando!",
    "É só alegria por aqui!",
    "Diversão garantida pra todos!",
    "Bora dançar juntos!",
    "Compartilha com os amigos!",
    "Amando cada momento!",
    "Vocês são demais, obrigado!",
    "Curte muito essa live!",
    "História sendo feita agora!",
    "Tô no repeat, e vocês?",
    "Quem tá chegando agora?",
    "Sejam todos bem-vindos!",
    "Vibes positivas sempre!",
    "Partiu diversão total!",
    "Que energia boa, hein!",
    "Saudades de todos vocês!",
    "Bate palmas comigo!",
    "TikTok é vida, concordam?",
    "Tô emocionado aqui!",
    "Deixa o coraçãozinho!",
    "Aquele close perfeito!",
    "Rindo muito, se divirtam!",
    "Tá incrível aqui!",
    "Até a próxima, galera!",

  ];
  private recentMessages: String[] = [];
  private recentSpectators: any[] = [];
  
  private images: String[] = [
    "../../assets/profileIcons/account.png",
    "../../assets/profileIcons/girl.png",
    "../../assets/profileIcons/human.png",
    "../../assets/profileIcons/man (1).png",
    "../../assets/profileIcons/man.png",
    "../../assets/profileIcons/profile (1).png",
    "../../assets/profileIcons/profile.png",
    "../../assets/profileIcons/user (1).png",
    "../../assets/profileIcons/user.png",
    "../../assets/profileIcons/woman.png"
  ];
  private names: String[] = [
  "Harry","Ross",
  "Bruce","Cook",
  "Carolyn","Morgan",
  "Albert","Walker",
  "Randy","Reed",
  "Larry","Barnes",
  "Lois","Wilson",
  "Jesse","Campbell",
  "Ernest","Rogers",
  "Theresa","Patterson",
  "Henry","Simmons",
  "Michelle","Perry",
  "Frank","Butler",
  "Shirley"];
  
  constructor() { }

  createSpectators() {
    for (let i = this.names.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.names[i], this.names[j]] = [this.names[j], this.names[i]];
    }
    for (let index = 0; index < this.images.length; index++) {
      const image = this.images[index];
      const spectator = {
        id: index,
        img: image,
        name: this.names[index],
      }
      this.spectators.push(spectator);
    }
  }

  getRandomSpectator() {
    return this.spectators[Math.floor(Math.random() * this.spectators.length)];
  }

  getRandomComment() {
    const filteredMessages = this.messages.filter(message => !this.recentMessages.includes(message));
    const message = filteredMessages[Math.floor(Math.random() * filteredMessages.length)];

    if (this.recentMessages.length === 4) this.recentMessages.shift();
    this.recentMessages.push(message);

    const filteredSpectators = this.spectators.filter(spectator => !this.recentSpectators.some(recentSpectator => recentSpectator.id === spectator.id));
    const spectator = filteredSpectators[Math.floor(Math.random() * filteredSpectators.length)];

    if (this.recentSpectators.length === 4) this.recentSpectators.shift();
    this.recentSpectators.push(spectator);
    
    return {
      id: spectator.id,
      img: spectator.img,
      name: spectator.name,
      comment: message,    
    };
  }

  createProfileArray() {
  }
}
