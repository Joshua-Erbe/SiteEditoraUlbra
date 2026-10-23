# Documentação – Projeto Web com Bootstrap 5

## 1. Tema escolhido

O projeto é o site da **Editora**, uma editora fictícia de livros. O site apresenta o catálogo organizado por categorias (Romance, Ficção e Não ficção), destaques em carrossel, detalhes de cada obra e informações institucionais sobre a editora.

## 2. Estrutura do projeto

```
editora-pagina-aberta/
├── index.html        # Página inicial (carousel, destaques)
├── catalogo.html     # Catálogo de livros com modal e toast
├── sobre.html        # Página institucional com estatísticas
├── css/
│   └── style.css     # Ajustes visuais complementares ao Bootstrap
├── js/
│   └── script.js     # Lógica do modal e do toast
└── docs/
    └── Documentacao.md
```

O site tem três páginas HTML interligadas pela navbar, que aparece em todas elas. Os estilos principais vêm do Bootstrap 5 (via CDN). O arquivo `style.css` define a paleta da marca e pequenos ajustes, como altura de imagens e efeitos de hover. O `script.js` faz duas coisas: preenche o modal com os dados do livro clicado e exibe o toast ao marcar um livro como "Quero ler".

## 3. Decisões de layout e design

- **Paleta:** bordô (`#7a1f3d`) e tons de creme, inspirados em editoras tradicionais, com destaque em dourado claro na navbar e no logotipo.
- **Responsividade:** o layout usa as colunas do grid com breakpoints (`col-12`, `col-sm-6`, `col-lg-4`). No celular, os cards ficam em uma coluna; no tablet, em duas; no desktop, em três. O carousel reduz a altura de 480px para 260px em telas pequenas, e a legenda é simplificada.
- **Hierarquia:** títulos de `h1` a `h3` seguem a ordem do conteúdo, facilitando a leitura e a acessibilidade.
- **Interatividade:** os cards de livro têm uma leve elevação ao passar o mouse, indicando que são clicáveis.
- **Âncoras:** a classe `scroll-margin-top` impede que a navbar fixa esconda a seção ao clicar em uma categoria do dropdown.

## 4. Utilização do display flex

O Flexbox foi usado na seção "Destaques da semana" da página inicial (`index.html`). A classe `.destaques` define `display: flex`, e o Bootstrap complementa com `flex-wrap` e `justify-content-center`. Assim, os três cards ficam lado a lado em telas grandes e se reorganizam em linhas quando o espaço diminui.

Também são usados `d-flex` nas áreas de botões dos cards, com `mt-auto`, para alinhar os botões na base de cada card, mesmo quando as descrições têm tamanhos diferentes.

## 5. Observações relevantes sobre o desenvolvimento

- Os livros, autores e textos são fictícios..
