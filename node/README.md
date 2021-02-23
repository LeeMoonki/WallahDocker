# command
컨테이너에서 실행하기 위해 다음 프로세스 진행
* `docker build -t <docker id>/<repository name>[:tag] ./`
* (*ansrlansrl/node:14로* 만들었다고 가정) `docker run -p 5000:3000 -v /usr/src/app/node_modules -v $(pwd):/usr/src/app ansrlansrl/node:14`
* 이 과정은 작업 공간이 `Dockerfile`이 있는 곳이라는 걸 전제로 한다. (`pwd` 때문에 조심 !)

컨테이너가 실행된 이후에 호스트 디렉터리(로컬)에서 `server.js`를 변경하면 컨테이너에서도 변경이되고 서버가 갱신되는 걸 확인할 수 있다.