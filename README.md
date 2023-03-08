#### - Execute o projeto rodando:

<p>$ yarn install</p>
<p>$ yarn dev</p>

#### - Rotas para testes

<p>(GET) / -> (Rota raiz)</p>
<p>(POST) /login -> (Exige provider ORM)</p>

#### - Middlewares configurados

1. JWT (Caso deseja realizar a autenticação de alguma rota, basta adicionar a sua rota o middleware *core/middlewares/Auth.ts*)

#### - Testes unitários

- Em cada *useCase* é possível realizar o teste unitário para testar qualquer regra de negócio.
Use o comando *yarn test*

