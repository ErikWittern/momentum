# https://intercityup.com/blog/how-i-build-a-docker-image-for-my-rails-app.html

# https://github.com/phusion/passenger-docker
FROM phusion/passenger-ruby22
MAINTAINER Christopher Young "krsyoung@gmail.com"

# Set correct environment variables.
ENV HOME /root

# Use baseimage-docker's init system.
CMD ["/sbin/my_init"]

RUN apt-get update && \
  apt-get upgrade -y && \
  apt-get install -y build-essential nodejs && \
  apt-get install -y ruby2.3 ruby2.3-dev && \
  ruby-switch --set ruby2.3 && \
  apt-get autoremove -y && apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Start Nginx / Passenger
RUN rm -f /etc/service/nginx/down

# Remove the default site
RUN rm /etc/nginx/sites-enabled/default

# Add the nginx info
ADD docker/production/nginx.conf /etc/nginx/sites-enabled/webapp.conf
ADD docker/production/rails_env.conf /etc/nginx/main.d/rails_env.conf

# Add init scripts
# RUN mkdir -p /etc/my_init.d
# ADD docker/scripts/40_init_db.sh /etc/my_init.d/40_init_db.sh

# Prepare folders
ENV APP_HOME /home/app/webapp
RUN mkdir $APP_HOME

# React stuff
WORKDIR /home
COPY front-end/package.json /home/package.json
RUN npm install -g webpack
RUN npm install

# Run Bundle in a cache efficient way
WORKDIR /tmp
COPY Gemfile Gemfile
COPY Gemfile.lock Gemfile.lock

RUN gem install bundler
RUN bundle install

# Add the rails app
COPY . $APP_HOME

WORKDIR $APP_HOME/front-end
RUN webpack

WORKDIR $APP_HOME

ENV SECRET_KEY_BASE=01461ced5e2f54d233e2b5ae3e9c5b4aef79c1d057be741f6b3f146d1a9568bbf919cab27a589a0b369064622b211c49f0e2b6fe3ca7f680cb13f5a489d71bb9

# Precompile the rails assets for production (only!  breaks development)
RUN RAILS_ENV=production bundle exec rake assets:precompile --trace
RUN chown -R app $APP_HOME/tmp
RUN chown -R app $APP_HOME/log
