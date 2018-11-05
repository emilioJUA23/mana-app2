# # # base image
# FROM node:9.6.1

# # set working directory
# RUN mkdir /usr/src/app
# WORKDIR /usr/src/app

# # add `/usr/src/app/node_modules/.bin` to $PATH
# ENV PATH /usr/src/app/node_modules/.bin:$PATH

# # install and cache app dependencies
# COPY package.json /usr/src/app/package.json
# RUN npm install
# RUN npm install -g @angular/cli@1.7.1

# # add app
# COPY . /usr/src/app

# # start app
# CMD ng serve --host 0.0.0.0

# FROM nginx:1.15

# COPY nginx.conf /etc/nginx/conf.d/default.conf

# WORKDIR /usr/share/nginx/html
# COPY ./dist /usr/share/nginx/html
# EXPOSE 80 4200
# STEP 1 build static website
FROM nginx:latest
COPY ./dist/mana-app /var/www/html
COPY ./dist/mana-app /usr/share/nginx/html
# CMD ["/usr/sbin/nginx"]