# Site — Nutricionista (React + Tailwind)

## Como colocar no GitHub e publicar

### 1. Subir os arquivos para o repositório
Se o repositório `nutri-gisellemoretti` já existe (github.com/rmoretti28/nutri-gisellemoretti),
apague os arquivos antigos (index.html, css/, js/) e coloque todos estes no lugar,
mantendo a mesma estrutura de pastas. Depois faça commit e push para a branch `main`.

Se preferir, pelo próprio site do GitHub: abra o repositório → "Add file" →
"Upload files" → arraste todos os arquivos e pastas mantendo a hierarquia → Commit.

### 2. Ativar o GitHub Pages via Actions
No repositório: **Settings → Pages → Build and deployment → Source → "GitHub Actions"**.
(Antes provavelmente estava configurado como "Deploy from a branch" — precisa trocar para "GitHub Actions".)

### 3. Aguardar o build
A cada push na branch `main`, a aba **Actions** do repositório vai mostrar o workflow
"Deploy para o GitHub Pages" rodando. Quando terminar (ícone verde ✅), o site estará
publicado no mesmo endereço de sempre.

### 4. Conferir o endereço (base path)
O arquivo `vite.config.js` está configurado com:
```js
base: "/nutri-gisellemoretti/"
```
Se o nome do repositório for diferente, troque esse valor para `/nome-do-repositorio/`
antes de subir — senão as imagens e estilos não carregam corretamente.

## Como editar depois (duas formas)

**Sem instalar nada (mais simples):**
Edite `src/App.jsx` direto pelo github.dev (aperte `.` com o repositório aberto no GitHub)
e dê commit. O GitHub Actions builda e publica sozinho.

**No computador (opcional, para testar antes de publicar):**
```bash
npm install
npm run dev      # abre em localhost pra pré-visualizar
npm run build    # gera a versão final na pasta dist/
```

## Sobre as fotos
As fotos enviadas pelo painel "Editar site" (botão no canto inferior esquerdo) ficam
apenas na sessão do navegador — não são salvas no repositório automaticamente.
Para fotos permanentes, o caminho mais simples é: colocar os arquivos de imagem numa
pasta `public/fotos/` do projeto e trocar `image: null` no `src/App.jsx` pelo caminho
da imagem, ex: `image: "/fotos/hero.jpg"`.
