<h3>Passo a passo docker com banco de dados:</h3>

- Instalação do [docker.](https://www.docker.com/products/docker-desktop/)

[- instalação da image postgres.](https://hub.docker.com/_/postgres/tags)

- Com o docker desktop aberto e conectado no terminal rodar o comando para criar o container :
- 
```bash
docker run -e POSTGRES_PASSWORD=admin -d -p 5432:5432 postgres
```

Para criar o conteiner postgre.

- Criar o banco de dados com [dbeaver.](https://dbeaver.com)
  
[Tutorial de referência](https://felixgilioli.medium.com/como-rodar-um-banco-de-dados-postgres-com-docker-6aecf67995e1)
[Tutorial CRUD Prisma](https://www.notion.so/Portugese-Workshop-8903b28aa9c14842bb746e2c9d1fe688)

