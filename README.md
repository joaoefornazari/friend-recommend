# friend-recommend
API em Node.js para criação e leitura de pessoas, criação de 'amizades' e recomendação de amigos.

Para rodar esse projeto, primeiro instale os seguintes programas:
- [Node.js](https://nodejs.org/en/download/)
- [Postman](https://www.postman.com/downloads/)

Depois, siga os passos:

1. Faça o [download do ZIP](https://github.com/joaoefornazari/friend-recommend/archive/refs/heads/master.zip) deste projeto ou faça um [git clone dele.](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)

2. No seu terminal / bash / prompt de comando, rode o seguinte comando:

```
npm install
```

  Isso instalará todas as dependências do projeto (a saber, `express` e `nodemon`).
  
3. Ainda no terminal, digite este comando para rodar o servidor:

```
npm start
```

4. Abra o Postman.
5. No Postman, clique em _Collections_ e depois em _Import_, como ilustrado na foto:

![image](https://user-images.githubusercontent.com/28909189/190509686-dab9cf30-2181-47d0-a144-f245782bd0dc.png)

6. Na janela de _Import_, importe a _collection_ da API para o Postman, enviando o arquivo `friend-recommendatios-api-collection-postman.json` localizado na pasta raiz desse projeto.
Exemplo no GIF abaixo:

![Untitled_ Sep 15, 2022 7_11 PM](https://user-images.githubusercontent.com/28909189/190518068-674d0079-e073-4e46-a2e2-8c7a993f383a.gif)

Após isso, consuma as APIs usando as requisições que desejar. Exemplo:

![Untitled Video](https://user-images.githubusercontent.com/28909189/190518789-cf2665fd-fd6d-403a-b20d-601814fcded1.gif)
