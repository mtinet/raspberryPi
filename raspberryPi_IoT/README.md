# raspberryPi

## 라즈베리파이와 자바스크립트로 시작하는 IoT 예제

* node.js, express, socket.io 를 사용함  
* sample4, sample5는 express 프레임워크를 사용하는 예제임  
* sample6, sample7은 express 프레임워크와, socket.io 를 활용함  
* cannot find module 'socket.io'라고 나오는 현상은 socket.io를 링크시키지않아서나타나는현상  
* socket.io는 설치를 했다고 그냥 사용할 수 있는 것이 아니라 실행용 js파일과 동일선상에 node_modules 를 포함한 링크를 만들어줘야 함  
  <code> # npm link socket.io  </code>
