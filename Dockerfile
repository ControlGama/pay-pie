FROM node:18-alpine

#Crear el directorio de la app
WORKDIR app/

#Copiar archivos de configuracion
COPY ["package*.json","./"]
COPY ["next.config.js","./"]

#Instarlar dependencias
RUN npm install --production

#Copiar los archivos de la app
COPY ["app","./app"]
COPY ["public","./public"]
COPY ["styles","./styles"]

# Construye la aplicación
RUN npm run build

# Exponer el puerto de la aplicación
EXPOSE 3000

# Iniciar la aplicación
CMD ["npm", "start"]