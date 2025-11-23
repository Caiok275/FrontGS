# Turnos Bem - Sistema de Bem-Estar e Acompanhamento

Projeto desenvolvido para a Global Solution, com foco em criar um projeto Front-end que permite avaliar o bem-estar diário do usuário por meio de um pequeno formulário, além de apresentar informações do grupo, contato, FAQ e outras páginas básicas. 

## Status do projeto - Concluído

## Link Projeto Github e deploy no Vercel
https://github.com/Caiok275/FrontGS
frontgs-iota.vercel.app

---
Sumário
- [Sobre o Projeto](#-sobre-o-projeto)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Instalação](#-instalação)
- [Como Usar](#-como-usar)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Rotas Principais](#-rotas-principais)
- [Autores](#-autores)
- [Screenshots](#-screenshots)
- [Contato](#-contato)
---

## Sobre o Projeto
O Turno Bem é um site criado para facilitar a autoavaliação de bem-estar dos colaboradores, onde o usuário pode registrar uma conta no site, fazer login e acessar um formulário com 5 perguntas avaliativas, indo de 1 (pior opção) a 5 (melhor opção). O sistema também possui um botão para alternar o tema do site entre claro/escuro, páginas informativas e navegação simples. O objetivo é apresentar um projeto organizado e funcional, sem complicações.

---
Tecnologias utilizadas
- **React + Vite**
- **TypeScript**
- **React Router DOM**
- **Context API (tema e autenticação)**
- **TailwindCSS**
- **LocalStorage (simular login e registro)**
---

# Instalação
1. Clone o repositório:
```
git clone https://github.com/Caiok275/FrontGS.git C:\1TDSPI\front_end_design_engineering\global-front\FrontGS (exemplo de caminho )
```
2. Abra a pasta onde o projeto foi clonado

3. Instale as depedências
```
npm install
```
4. Rode o projeto:
```
npm run dev
```
---
# Como Usar
1. Acesse o site através do Link do Vite ou do Vercel;
2. Clique em Registrar para criar uma conta;
3. Após registrar, faça login na página de Login;
4. Depois de logado, a rota /formulario é liberada, e o usuário pode preenche-lo;
5. Responda as perguntas dando notas de 1 a 5 e envie;
6. O tema do site pode ser trocado entre claro e escuro com botão da navbar.
---

# Estrutura do projeto
<img width="217" height="483" alt="image" src="https://github.com/user-attachments/assets/135e9e97-394f-4e12-8999-898591b07b45" />
<img width="300" height="459" alt="image" src="https://github.com/user-attachments/assets/6f41048b-f05e-4c6f-8fad-e6917d669ddf" />
<img width="172" height="198" alt="image" src="https://github.com/user-attachments/assets/25afaa12-a4f1-4e80-805f-4e50e22289a2" />

---
## Rotas Principais

| **Rota**        | **Descrição**                              |
|-----------------|---------------------------------------------|
| `/`             | Redireciona para Home                       |
| `/home`         | Página inicial                              |
| `/sobre`        | Informações do projeto                      |
| `/integrantes`  | Fotos e dados dos membros                   |
| `/contato`      | Formulário simples de contato               |
| `/faq`          | Perguntas frequentes                        |
| `/registrar`    | Criação de conta                            |
| `/login`        | Login                                       |
| `/formulario`   | Formulário de bem-estar (rota protegida)    |

# Autores 
- Caio Kenzo Tayra – RM: 562979
- Enzo Vieira Bernardini – RM: 563000
- Nicolas Mota Cândido – RM: 561857

# Screenshots
## Tema Claro
<img width="1358" height="612" alt="image" src="https://github.com/user-attachments/assets/ec7338f9-3817-46d8-8dde-ca06dd960560" />
<img width="1358" height="612" alt="image" src="https://github.com/user-attachments/assets/3220e928-2592-47d6-a11b-e16736d75700" />
<img width="1358" height="612" alt="image" src="https://github.com/user-attachments/assets/9a8b8197-714d-4977-a8ff-2d9f9cdf0eda" />
<img width="1358" height="612" alt="image" src="https://github.com/user-attachments/assets/4732c65a-2f15-45ad-a0ad-11328316728b" />
<img width="1358" height="612" alt="image" src="https://github.com/user-attachments/assets/b1c0d111-2c2d-4240-babf-102078f2fd90" />
<img width="1358" height="612" alt="image" src="https://github.com/user-attachments/assets/b30fcc1d-468e-4ecf-aee5-adb07f349b6a" />
<img width="1358" height="612" alt="image" src="https://github.com/user-attachments/assets/a188a601-e102-4f81-b35e-f652adb4c7c5" />
<img width="1358" height="612" alt="image" src="https://github.com/user-attachments/assets/7f7c3bf8-f00d-4f8a-b070-43d18fd99204" />

## Tema Escuro
<img width="1358" height="612" alt="image" src="https://github.com/user-attachments/assets/cc27a65c-5567-46a6-9497-95062b372542" />
<img width="1358" height="612" alt="image" src="https://github.com/user-attachments/assets/fec3848f-c461-4bdc-a10f-25f9749d8f36" />
<img width="1358" height="612" alt="image" src="https://github.com/user-attachments/assets/7f9185a0-b66c-4b96-ae95-b296dfe0aa7f" />
<img width="1358" height="612" alt="image" src="https://github.com/user-attachments/assets/a7d44614-9c1c-45cf-bc25-7aad9eb93cc3" />
<img width="1358" height="612" alt="image" src="https://github.com/user-attachments/assets/fde0de35-e030-4e8d-9280-4b4e36fc312b" />
<img width="1358" height="612" alt="image" src="https://github.com/user-attachments/assets/e625659e-1a0c-4e53-8e73-22f0809803f9" />
<img width="1358" height="612" alt="image" src="https://github.com/user-attachments/assets/e355c262-a2b9-44c0-85b8-5d5e1bb81c5a" />
<img width="1358" height="612" alt="image" src="https://github.com/user-attachments/assets/fa0eb5ca-4991-4d8a-bbef-60d369720304" />

# Contato
Em caso de dúvidas ou sugestões entre em contato com o grupo:
rm562979@fiap.com.br
rm563000@fiap.com.br
rm561857@fiap.com.br
