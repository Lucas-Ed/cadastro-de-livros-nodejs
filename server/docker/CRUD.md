<h3>CRUD COM PRISMA</h3>


[referência.](https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#model-queries)
## GET
```bash
fastify.get("/users", async (req, res) => {
  const result = await prisma.user.findMany();
  res.json(result);
});
```

## POST
```bash
fastify.post(`/signup`, async (req, res) => {
  const { name, email } = req.body;

  const result = await prisma.user.create({
    data: {
      name,
      email,
    },
  });

  res.json(result);
});
```

