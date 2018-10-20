FROM node:10

RUN mkdir /code
WORKDIR /code

ADD package.json /code
ADD package-lock.json /code

RUN npm install

ADD . /code

EXPOSE 3000

CMD npm run start
