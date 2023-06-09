# Bundle static assets with nginx
FROM v8fg/nginx:1.20.0-alpine as production
ENV NODE_ENV production

# Copy built assets
COPY ./build /usr/share/nginx/html

# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
ENV PORT 8080
EXPOSE 8080
# Start nginx
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
