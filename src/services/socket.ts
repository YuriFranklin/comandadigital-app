import io from 'socket.io-client';

export default (token: string) =>
  io.connect('http://192.168.1.7:5454', {
    query: `token=${token}`,
  });
