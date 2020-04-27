FROM "cypress/base:10"

COPY cypress .
COPY package.json .
COPY cypress.json .
COPY yarn.lock .

RUN yarn install
ENTRYPOINT ["yarn", "run"]
CMD ["cy:sanity:prod:electron"]
