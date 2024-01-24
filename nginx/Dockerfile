FROM public.ecr.aws/nginx/nginx:1.24-alpine-slim

COPY ./default.conf /etc/nginx/conf.d/default.conf

RUN mkdir -p /var/www/gelguru

COPY ./index.html /var/www/gelguru

CMD ["nginx", "-g", "daemon off;"]
