import { Injectable } from '@angular/core';
// import { io } from 'socket.io-client';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocketioService {

  socket: any;

  constructor() { }

  setupSocketConnection() {
    // this.socket = io(environment.SOCKET_URL);
  }

  disconnect() {
    if (this.socket) {
        this.socket.disconnect();
    }
  }

}
