FROM node:14.15

# dockerfile이 있는 곳의 package.json을 복사한다.
# COPY package.json ./

# package.json만 복사하는게 아니라 server.js 등 다른 파일들도 복사해야 하므로 다음과 같이 해준다.
COPY ./ ./

RUN npm install

CMD ["npm", "run", "start"]
