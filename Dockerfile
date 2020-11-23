FROM cypress/browsers:node12.14.1-chrome83-ff77

COPY cypress .
COPY package.json .
COPY cypress.json .
COPY yarn.lock .

RUN yarn install
ENTRYPOINT ["yarn", "run"]
CMD ["cy:sanity:prod:chrome:headless"]
