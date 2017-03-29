import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
// import { io } from 'socket.io';

@Injectable()
export class MessagesSocketService {
    socket;
    constructor() {
        this.socket = io.connect('ws://front-camp-chat.herokuapp.com/socket.io/');
    }
    getMessages() {
    
        this.socket.on('message', msg => {
            console.log(msg);
        });

        this.socket.on('join', msg => {
            console.log(msg);
        });

        this.socket.on('leave', msg => {
            console.log(msg);
        })
    }

    joinGroup() {
        this.socket.emit('join', {username: 'name'})
    }
}