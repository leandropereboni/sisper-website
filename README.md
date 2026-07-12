# SISPER Consultoria e Projetos - Site Institucional Estático

Este repositório contém o código-fonte estático e premium do site institucional da **SISPER Consultoria e Projetos**, desenvolvido com foco em autoridade técnica, precisão e facilidade de visualização.

O site foi simplificado para funcionar de forma puramente cliente-side (HTML5, CSS3, JavaScript), sem a necessidade de servidores complexos, Node.js ou bancos de dados (como o Supabase), permitindo uma análise rápida e modificação direta dos conteúdos.

---

## 📁 Estrutura de Arquivos

- `index.html` - Página Inicial estruturada para conversão.
- `sobre-a-sisper.html` - História, valores e posicionamento estratégico da empresa.
- `setores-atendidos.html` - Mapeamento de riscos e atuações por segmento B2B.
- `consultoria-grupos-geradores.html` - Serviço prioritário (Auditoria e Manutenção).
- `projetos-grupos-geradores.html` - Serviço 02 (Projetos e Dimensionamento).
- `laudo-nr20.html` - Serviço 03 (Laudos NR-20).
- `inspecao-termografica-nr10.html` - Serviço 04 (Inspeção Elétrica e Termografia).
- `contato.html` - Página de contato com formulário de lead.
- `politica-de-privacidade.html` - Termos em conformidade com a LGPD.
- `obrigado.html` - Redirecionamento pós-lead com CTA personalizado para WhatsApp.
- `Sisper_DS.html` - Painel de documentação do Design System oficial (cores, botões, etc.).
- `js/components.js` - Script compartilhado que renderiza dinamicamente o cabeçalho (Header), rodapé (Footer), botão de WhatsApp, banner de cookies LGPD e a lógica de validação/envio local do formulário de contato.
- `assets/` - Pasta contendo imagens e logotipos da SISPER.

---

## 🚀 Como Visualizar e Testar

Não é necessário rodar comandos de terminal (`npm install`, `npm run dev`) ou configurar conexões externas. 

1. **Abrir no Navegador**: Dê um duplo-clique no arquivo `index.html` ou arraste-o diretamente para uma aba do Google Chrome.
2. **Navegação**: Os links foram configurados com caminhos relativos (ex: `href="sobre-a-sisper.html"`), permitindo clicar e navegar por todas as páginas localmente.
3. **Teste do Formulário de Lead**:
   - Vá até a página de Contato ou algum Serviço e preencha o formulário.
   - Ao clicar em "Enviar", o JavaScript (`js/components.js`) validará os campos, registrará os dados localmente no `localStorage` do seu navegador (para simulação de banco de dados) e redirecionará para a página `obrigado.html`.
   - Na página de agradecimento, o site lerá as informações salvas e gerará um botão personalizado para iniciar uma conversa no WhatsApp com o nome do lead e o serviço preenchidos automaticamente.

---

## 🛠️ Como Personalizar

### 1. Alterar Links ou Textos do Cabeçalho e Rodapé
Abra o arquivo `js/components.js` e localize as funções `injectHeader()` e `injectFooter()`. Alterações feitas nos templates HTML contidos nessas funções se refletirão instantaneamente em todas as páginas do site.

### 2. Alterar Informações de Contato Fixas (Telefone, E-mail, CNPJ)
Toda a informação de contato institucional (e-mail, celular, WhatsApp) está unificada em `js/components.js` e nas páginas de contato individuais. Basta editar o arquivo `js/components.js` nas constantes:
- `whatsappNumber` (número para envio de mensagens)
- Links de correio eletrônico `mailto:sisper.consultoria@gmail.com`
