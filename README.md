# Ebook Store

Uma loja online de ebooks clássicos com integração PayPal para pagamentos.

## 🚀 Deploy no Render

### Configuração Automática

1. **Conecte seu repositório GitHub ao Render:**
   - Acesse [render.com](https://render.com)
   - Faça login e clique em "New +"
   - Selecione "Static Site"
   - Conecte seu repositório GitHub

2. **Configurações do Deploy:**
   - **Name:** ebook-store
   - **Branch:** main (ou sua branch principal)
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `dist`
   - **Node Version:** 18.x (ou superior)

3. **Deploy:**
   - Clique em "Create Static Site"
   - O Render irá automaticamente fazer o build e deploy
   - Sua aplicação estará disponível em uma URL como: `https://ebook-store.onrender.com`

### Configuração Manual (se necessário)

Se preferir configurar manualmente, use as seguintes configurações:

- **Build Command:** `npm install && npm run build`
- **Publish Directory:** `dist`
- **Environment:** Static Site

## 🛠️ Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 📦 Tecnologias

- **React 19** - Framework frontend
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **React Router** - Roteamento
- **PayPal SDK** - Processamento de pagamentos
- **CSS3** - Estilização

## 💰 Preços dos Ebooks

- **$20** - Pride and Prejudice, The Yellow Wallpaper, Moby-Dick, Treasure Island
- **$25** - Alice's Adventures in Wonderland, Metamorphosis, Frankenstein
- **$30** - The Adventures of Sherlock Holmes, A Tale of Two Cities, The Picture of Dorian Gray, Beowulf

## 🔧 Estrutura do Projeto

```
src/
├── components/     # Componentes reutilizáveis
├── context/        # Context API para estado global
├── data/          # Dados dos ebooks
├── pages/         # Páginas da aplicação
└── assets/        # Imagens e recursos estáticos
```

## 📝 Notas Importantes

- Os ebooks são de domínio público (Project Gutenberg)
- Integração com PayPal para processamento de pagamentos
- Design responsivo para mobile e desktop
- Build otimizado para produção