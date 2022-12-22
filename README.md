# PokedexBackEnd
Para inicializar la aplicación:
-Clonar repositorio
-Crear una database en Postgres llamada "pokedex"
-Configurar .env (PGHOST, PGUSER, PGPASSWORD, PGDATABASE, PGPORT)
-Ejecutar comando npm install
-Ejecutar comando npx sequelize-cli db:migrate
-Ejecutar comando npx sequelize-cli db:seed:all
-Ejecutar comando npm run start
-El servidor correrá en el puerto 8080