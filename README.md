# Frontend - Movie Library

Este é o frontend do projeto Movie Library, uma aplicação de biblioteca de filmes.

## Tecnologias Utilizadas
 
- **Bibliotecas:**
  - React
  - Axios: Para realizar requisições HTTP.
  - PrimeReact: Uma biblioteca de componentes React com temas do PrimeNG.
  - React Router Dom: Para navegação entre páginas.

## Como Executar o Frontend

1. **Instalação de Dependências:**
   - Navegue até o diretório do frontend.
   - Execute o comando para instalar as dependências.
     ```bash
     npm install
     ```

2. **Execução do Aplicativo:**
   - Execute o aplicativo React.
     ```bash
     npm run dev
     ```
   - O frontend estará disponível em http://localhost:5173.

## Movie Library - Visão Geral do Projeto
Bem-vindo à Movie Library, sua plataforma personalizada para gerenciar e explorar o emocionante mundo do cinema. Nossa aplicação oferece uma série de recursos projetados para tornar a experiência cinematográfica ainda mais envolvente. Aqui está uma visão geral das principais funcionalidades:

## Menu Inicial
No menu inicial, oferecemos uma variedade de opções para explorar e interagir com a biblioteca de filmes:

## Catálogo de Filmes:

Explore a coleção completa de filmes disponíveis.
Visualize detalhes sobre cada filme e clique nos posters para obter informações mais detalhadas.
## Adicionar Filmes:
Ao adicionar uma imagem de um filme, pegue um poster do site https://www.movieposters.com/ de preferencia
Acrescente novos títulos à biblioteca para mantê-la sempre atualizada e diversificada.
## Editar Filmes:

Acesse o modo de edição para fazer ajustes nos detalhes de qualquer filme existente.
Utilize o modal de edição, acionado pelo botão verde abaixo do poster do filme.
## Lista de Usuários:

Visualize a lista de usuários cadastrados na plataforma.
Encontre informações sobre os usuários e suas avaliações.
## Cadastrar Usuário:

Registre-se na aplicação para ter acesso a funcionalidades exclusivas, como avaliações de filmes.
## Funcionalidades Especiais
Avaliações Personalizadas:
Com um usuário logado, você pode avaliar os filmes.
Suas avaliações são privadas e visíveis apenas para você, proporcionando uma experiência personalizada.
## Navegação
**Header da Página:**
Acesse rapidamente as funcionalidades principais a partir do cabeçalho da página.
Faça login para desbloquear recursos exclusivos.

## Estrutura do Projeto
O projeto do frontend está organizado da seguinte forma:

- Controller: Contém todas as requisições à API, garantindo uma separação clara entre a lógica de negócios e a comunicação com o backend.
- Pages: Inclui todas as páginas do projeto. Cada página representa uma visualização específica da aplicação, como a lista de filmes, a página de detalhes de um filme, etc.
- Components: Agrupa todos os componentes reutilizáveis da aplicação, como modais e a barra de navegação (AppBar). Essa estrutura facilita a modularização e manutenção do código, permitindo que componentes específicos sejam facilmente reutilizados em diferentes partes da aplicação.
