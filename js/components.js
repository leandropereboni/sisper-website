// SISPER - Shared components and layouts script
// Manages Header, Footer, WhatsApp floating button, Cookie Consent and Animations dynamically.

document.addEventListener('DOMContentLoaded', () => {
    // 1. Injetar componentes comuns
    injectHeader();
    injectFooter();
    injectWhatsApp();
    injectCookieConsent();
    
    // 2. Inicializar ícones do Lucide
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    // 3. Inicializar animações ao rolar a página
    initScrollAnimations();
    
    // 4. Inicializar formulários de lead (se existirem na página)
    initLeadForms();
});

// Helper para obter a página atual
function getCurrentPage() {
    const path = window.location.pathname;
    let page = path.substring(path.lastIndexOf('/') + 1);
    if (page === '' || page === 'index.html') {
        return 'index.html';
    }
    return page;
}

// Injetar cabeçalho
function injectHeader() {
    const headerContainer = document.getElementById('site-header');
    if (!headerContainer) return;
    
    const currentPage = getCurrentPage();
    const isServiceActive = ['consultoria-grupos-geradores.html', 'projetos-grupos-geradores.html', 'laudo-nr20.html', 'inspecao-termografica-nr10.html'].includes(currentPage);
    
    headerContainer.className = "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/80 backdrop-blur-sm border-b border-white/40 py-5";
    
    // Monitorar scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            headerContainer.className = "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-zinc-200/80 shadow-md py-3";
        } else {
            headerContainer.className = "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/80 backdrop-blur-sm border-b border-white/40 py-5";
        }
    });

    const headerHTML = `
      <div class="max-w-[1300px] mx-auto px-6 flex items-center justify-between">
        
        <!-- LOGO -->
        <a href="index.html" class="flex items-center group">
          <img
            src="assets/image/Logo_definitiva_br_transparente.png"
            alt="SISPER Consultoria e Projetos"
            class="h-12 md:h-14 w-auto object-contain"
            onerror="this.src='assets/image/Logo_definitiva_br.png';"
          />
        </a>

        <!-- NAVEGAÇÃO DESKTOP -->
        <nav class="hidden lg:flex items-center gap-8">
          <a
            href="index.html"
            class="text-sm font-medium tracking-wide transition-colors ${
              currentPage === 'index.html' ? 'text-brand-green font-bold' : 'text-zinc-600 hover:text-brand-green'
            }"
          >
            Início
          </a>

          <!-- DROPDOWN DE SERVIÇOS -->
          <div class="relative group/dropdown">
            <button
              class="text-sm font-medium tracking-wide flex items-center gap-1.5 transition-colors ${
                isServiceActive ? 'text-brand-green font-bold' : 'text-zinc-600 hover:text-brand-green'
              }"
            >
              Serviços
              <i data-lucide="chevron-down" class="w-4 h-4 transition-transform duration-300 group-hover/dropdown:rotate-180"></i>
            </button>

            <!-- PAINEL DROPDOWN -->
            <div
              class="absolute top-full -left-16 mt-2 w-80 bg-white border border-zinc-200 rounded-2xl shadow-xl py-4 opacity-0 -translate-y-2 pointer-events-none group-hover/dropdown:opacity-100 group-hover/dropdown:translate-y-0 group-hover/dropdown:pointer-events-auto transition-all duration-300 before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-3 z-50"
            >
              <div class="px-4 py-2 border-b border-zinc-100 mb-2">
                <span class="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                  Engenharia e Consultoria
                </span>
              </div>
              <div class="flex flex-col gap-1 px-2">
                <a
                  href="consultoria-grupos-geradores.html"
                  class="flex items-start gap-3 p-3 rounded-xl transition-all ${
                    currentPage === 'consultoria-grupos-geradores.html' ? 'bg-brand-light text-brand-green' : 'hover:bg-zinc-50 text-zinc-700 hover:text-brand-green'
                  }"
                >
                  <div class="p-1.5 rounded-lg shrink-0 ${currentPage === 'consultoria-grupos-geradores.html' ? 'bg-brand-green/10 text-brand-green' : 'bg-zinc-100 text-zinc-500'}">
                    <i data-lucide="activity" class="w-4 h-4"></i>
                  </div>
                  <div>
                    <div class="text-xs font-bold leading-tight">Auditoria na manutenção preventiva</div>
                    <div class="text-[10px] text-zinc-400 leading-normal mt-0.5">Auditoria independente do plano de manutenção preventiva.</div>
                  </div>
                </a>
                <a
                  href="projetos-grupos-geradores.html"
                  class="flex items-start gap-3 p-3 rounded-xl transition-all ${
                    currentPage === 'projetos-grupos-geradores.html' ? 'bg-brand-light text-brand-green' : 'hover:bg-zinc-50 text-zinc-700 hover:text-brand-green'
                  }"
                >
                  <div class="p-1.5 rounded-lg shrink-0 ${currentPage === 'projetos-grupos-geradores.html' ? 'bg-brand-green/10 text-brand-green' : 'bg-zinc-100 text-zinc-500'}">
                    <i data-lucide="zap" class="w-4 h-4"></i>
                  </div>
                  <div>
                    <div class="text-xs font-bold leading-tight">Projetos & Dimensionamento</div>
                    <div class="text-[10px] text-zinc-400 leading-normal mt-0.5">Projetos elétricos, mecânicos e dimensionamento de geradores.</div>
                  </div>
                </a>
                <a
                  href="laudo-nr20.html"
                  class="flex items-start gap-3 p-3 rounded-xl transition-all ${
                    currentPage === 'laudo-nr20.html' ? 'bg-brand-light text-brand-green' : 'hover:bg-zinc-50 text-zinc-700 hover:text-brand-green'
                  }"
                >
                  <div class="p-1.5 rounded-lg shrink-0 ${currentPage === 'laudo-nr20.html' ? 'bg-brand-green/10 text-brand-green' : 'bg-zinc-100 text-zinc-500'}">
                    <i data-lucide="shield" class="w-4 h-4"></i>
                  </div>
                  <div>
                    <div class="text-xs font-bold leading-tight">Laudos NR-20</div>
                    <div class="text-[10px] text-zinc-400 leading-normal mt-0.5">Avaliação técnica de tanques de diesel e bacias de contenção.</div>
                  </div>
                </a>
                <a
                  href="inspecao-termografica-nr10.html"
                  class="flex items-start gap-3 p-3 rounded-xl transition-all ${
                    currentPage === 'inspecao-termografica-nr10.html' ? 'bg-brand-light text-brand-green' : 'hover:bg-zinc-50 text-zinc-700 hover:text-brand-green'
                  }"
                >
                  <div class="p-1.5 rounded-lg shrink-0 ${currentPage === 'inspecao-termografica-nr10.html' ? 'bg-brand-green/10 text-brand-green' : 'bg-zinc-100 text-zinc-500'}">
                    <i data-lucide="file-text" class="w-4 h-4"></i>
                  </div>
                  <div>
                    <div class="text-xs font-bold leading-tight">Inspeção Termográfica & NR-10</div>
                    <div class="text-[10px] text-zinc-400 leading-normal mt-0.5">Inspeção termográfica em painéis elétricos e laudo NR-10.</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <a
            href="setores-atendidos.html"
            class="text-sm font-medium tracking-wide transition-colors ${
              currentPage === 'setores-atendidos.html' ? 'text-brand-green font-bold' : 'text-zinc-600 hover:text-brand-green'
            }"
          >
            Setores
          </a>
          <a
            href="sobre-a-sisper.html"
            class="text-sm font-medium tracking-wide transition-colors ${
              currentPage === 'sobre-a-sisper.html' ? 'text-brand-green font-bold' : 'text-zinc-600 hover:text-brand-green'
            }"
          >
            Sobre a SISPER
          </a>
          <a
            href="contato.html"
            class="text-sm font-medium tracking-wide transition-colors ${
              currentPage === 'contato.html' ? 'text-brand-green font-bold' : 'text-zinc-600 hover:text-brand-green'
            }"
          >
            Contato
          </a>
        </nav>

        <!-- CTA BUTTON -->
        <div class="hidden lg:block">
          <a href="contato.html">
            <button class="relative btn-beam-container group w-full sm:w-auto">
              <span class="relative z-10 flex items-center justify-center bg-brand-green text-white px-5 py-2.5 rounded-full text-xs font-semibold shadow-lg shadow-brand-green/30 hover:bg-green-800 transition-colors gap-2 w-full">
                Solicitar Avaliação
              </span>
            </button>
          </a>
        </div>

        <!-- BOTAO MENU MOBILE -->
        <button
          id="mobile-menu-toggle"
          class="lg:hidden p-2 rounded-xl border border-zinc-200 text-zinc-600 hover:text-brand-green hover:bg-zinc-50 transition-colors"
          aria-label="Abrir Menu"
        >
          <i data-lucide="menu" class="w-6 h-6" id="mobile-menu-icon"></i>
        </button>
      </div>

      <!-- DRAWER MENU MOBILE -->
      <div
        id="mobile-drawer"
        class="fixed inset-y-0 right-0 z-40 w-full max-w-sm bg-white shadow-2xl border-l border-zinc-200 p-6 flex flex-col justify-between transition-transform duration-300 lg:hidden translate-x-full"
        style="top: 80px; height: calc(100vh - 80px);"
      >
        <div class="flex flex-col gap-6 overflow-y-auto py-4">
          <div class="flex flex-col gap-3">
            <span class="text-[10px] font-bold text-zinc-400 uppercase tracking-widest px-2">
              Navegação Principal
            </span>
            <a
              href="index.html"
              class="text-base font-semibold px-2 py-1.5 rounded-lg ${
                currentPage === 'index.html' ? 'text-brand-green bg-brand-light/40' : 'text-zinc-700 hover:text-brand-green'
              }"
            >
              Início
            </a>
            <a
              href="setores-atendidos.html"
              class="text-base font-semibold px-2 py-1.5 rounded-lg ${
                currentPage === 'setores-atendidos.html' ? 'text-brand-green bg-brand-light/40' : 'text-zinc-700 hover:text-brand-green'
              }"
            >
              Setores Atendidos
            </a>
            <a
              href="sobre-a-sisper.html"
              class="text-base font-semibold px-2 py-1.5 rounded-lg ${
                currentPage === 'sobre-a-sisper.html' ? 'text-brand-green bg-brand-light/40' : 'text-zinc-700 hover:text-brand-green'
              }"
            >
              Sobre a SISPER
            </a>
            <a
              href="contato.html"
              class="text-base font-semibold px-2 py-1.5 rounded-lg ${
                currentPage === 'contato.html' ? 'text-brand-green bg-brand-light/40' : 'text-zinc-700 hover:text-brand-green'
              }"
            >
              Contato
            </a>
          </div>

          <div class="flex flex-col gap-3 border-t border-zinc-100 pt-4">
            <span class="text-[10px] font-bold text-zinc-400 uppercase tracking-widest px-2">
              Serviços de Engenharia
            </span>
            <a
              href="consultoria-grupos-geradores.html"
              class="flex items-center gap-3 px-2 py-2 rounded-lg transition-colors ${
                currentPage === 'consultoria-grupos-geradores.html' ? 'text-brand-green bg-brand-light/40' : 'text-zinc-700 hover:text-brand-green'
              }"
            >
              <div class="p-1 bg-zinc-100 rounded-md text-zinc-500 shrink-0">
                <i data-lucide="activity" class="w-4 h-4"></i>
              </div>
              <span class="text-sm font-semibold">Auditoria na manutenção preventiva</span>
            </a>
            <a
              href="projetos-grupos-geradores.html"
              class="flex items-center gap-3 px-2 py-2 rounded-lg transition-colors ${
                currentPage === 'projetos-grupos-geradores.html' ? 'text-brand-green bg-brand-light/40' : 'text-zinc-700 hover:text-brand-green'
              }"
            >
              <div class="p-1 bg-zinc-100 rounded-md text-zinc-500 shrink-0">
                <i data-lucide="zap" class="w-4 h-4"></i>
              </div>
              <span class="text-sm font-semibold">Projetos & Dimensionamento</span>
            </a>
            <a
              href="laudo-nr20.html"
              class="flex items-center gap-3 px-2 py-2 rounded-lg transition-colors ${
                currentPage === 'laudo-nr20.html' ? 'text-brand-green bg-brand-light/40' : 'text-zinc-700 hover:text-brand-green'
              }"
            >
              <div class="p-1 bg-zinc-100 rounded-md text-zinc-500 shrink-0">
                <i data-lucide="shield" class="w-4 h-4"></i>
              </div>
              <span class="text-sm font-semibold">Laudos NR-20</span>
            </a>
            <a
              href="inspecao-termografica-nr10.html"
              class="flex items-center gap-3 px-2 py-2 rounded-lg transition-colors ${
                currentPage === 'inspecao-termografica-nr10.html' ? 'text-brand-green bg-brand-light/40' : 'text-zinc-700 hover:text-brand-green'
              }"
            >
              <div class="p-1 bg-zinc-100 rounded-md text-zinc-500 shrink-0">
                <i data-lucide="file-text" class="w-4 h-4"></i>
              </div>
              <span class="text-sm font-semibold">Inspeção Termográfica & NR-10</span>
            </a>
          </div>
        </div>

        <div class="border-t border-zinc-100 pt-6 flex flex-col gap-4">
          <a href="contato.html" class="w-full">
            <button class="w-full bg-brand-green text-white py-3 rounded-full font-semibold text-sm hover:bg-green-800 transition-colors shadow-lg">
              Solicitar Avaliação Técnica
            </button>
          </a>
          <a
            href="https://wa.me/5511988949290?text=Ol%C3%A1%2C%20gostaria%20de%20uma%20avalia%C3%A7%C3%A3o%20técnica%20de%20geradores."
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-center gap-2 text-zinc-600 font-semibold border border-zinc-200 rounded-full py-3 hover:bg-zinc-50 text-sm"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    `;
    
    headerContainer.innerHTML = headerHTML;
    
    // Toggle menu mobile
    const toggleBtn = document.getElementById('mobile-menu-toggle');
    const drawer = document.getElementById('mobile-drawer');
    const icon = document.getElementById('mobile-menu-icon');
    
    if (toggleBtn && drawer) {
        toggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = drawer.classList.contains('translate-x-0');
            if (isOpen) {
                drawer.classList.remove('translate-x-0');
                drawer.classList.add('translate-x-full');
                icon.setAttribute('data-lucide', 'menu');
            } else {
                drawer.classList.remove('translate-x-full');
                drawer.classList.add('translate-x-0');
                icon.setAttribute('data-lucide', 'x');
            }
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        });
        
        // Fechar ao clicar fora
        document.addEventListener('click', (e) => {
            if (!drawer.contains(e.target) && !toggleBtn.contains(e.target)) {
                drawer.classList.remove('translate-x-0');
                drawer.classList.add('translate-x-full');
                icon.setAttribute('data-lucide', 'menu');
                if (typeof lucide !== 'undefined') {
                    lucide.createIcons();
                }
            }
        });
    }
}

// Injetar rodapé
function injectFooter() {
    const footerContainer = document.getElementById('site-footer');
    if (!footerContainer) return;
    
    const currentYear = new Date().getFullYear();
    
    footerContainer.className = "bg-zinc-900 border-t border-white/10 text-zinc-400 pt-16 pb-12 relative overflow-hidden";
    
    const footerHTML = `
      <!-- Luz de Fundo Decorativa -->
      <div class="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-brand-green/5 blur-[120px] pointer-events-none"></div>

      <div class="max-w-[1300px] mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-16">
        
        <!-- Coluna 1 - Identidade -->
        <div class="lg:col-span-4 flex flex-col items-start gap-6">
          <a href="index.html" class="flex items-center group">
            <img
              src="assets/image/Logo_definitiva_br_transparente.png"
              alt="SISPER Consultoria e Projetos"
              class="h-12 w-auto object-contain brightness-0 invert -ml-[13px]"
              onerror="this.src='assets/image/Logo_definitiva_br.png';"
            />
          </a>
          <p class="text-sm text-zinc-400 max-w-sm leading-relaxed">
            Fundada em 2020, a SISPER conta com engenheiro responsável com mais de 25 anos de experiência em infraestrutura elétrica, grupos geradores, inspeção termográfica e laudos NR-16 e NR-20.
          </p>
          <div class="flex items-center gap-3">
            <!-- LinkedIn -->
            <a
              href="https://linkedin.com/company/sisper-consultoria"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center hover:bg-brand-green hover:text-white transition-colors group"
              title="LinkedIn"
            >
              <svg viewBox="0 0 24 24" class="w-4 h-4 fill-current transition-transform group-hover:scale-110" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <!-- Instagram -->
            <a
              href="https://instagram.com/sisper.consultoria"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center hover:bg-brand-green hover:text-white transition-colors group"
              title="Instagram"
            >
              <svg viewBox="0 0 24 24" class="w-4 h-4 stroke-current fill-none transition-transform group-hover:scale-110" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <!-- WhatsApp -->
            <a
              href="https://wa.me/5511988949290?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20avalia%C3%A7%C3%A3o%20técnica."
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center hover:bg-brand-green hover:text-white transition-colors group"
              title="WhatsApp"
            >
              <svg viewBox="0 0 24 24" class="w-4 h-4 fill-current transition-transform group-hover:scale-110" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
              </svg>
            </a>
            <!-- Telegram -->
            <a
              href="https://t.me/sisperconsultoria"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center hover:bg-brand-green hover:text-white transition-colors group"
              title="Telegram"
            >
              <svg viewBox="0 0 24 24" class="w-4 h-4 fill-current transition-transform group-hover:scale-110" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.56 8.61l-1.91 9.01c-.14.63-.52.79-1.05.49l-2.92-2.15-1.41 1.36c-.16.16-.29.29-.59.29l.21-2.99 5.44-4.92c.24-.21-.05-.33-.37-.11L8.3 14.15l-2.9-.91c-.63-.2-.64-.63.13-.93l11.35-4.38c.52-.19.98.12.68.68z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Coluna 2 - Serviços -->
        <div class="lg:col-span-3 flex flex-col gap-4 lg:pt-[72px]">
          <h4 class="font-heading font-bold text-xs text-white uppercase tracking-widest border-l-2 border-brand-neon pl-3 mt-0">
            Serviços
          </h4>
          <ul class="flex flex-col gap-3.5 text-sm">
            <li>
              <a href="consultoria-grupos-geradores.html" class="hover:text-white transition-colors flex items-center gap-1">
                Auditoria de Manutenção
              </a>
            </li>
            <li>
              <a href="projetos-grupos-geradores.html" class="hover:text-white transition-colors">
                Projetos & Dimensionamento
              </a>
            </li>
            <li>
              <a href="laudo-nr20.html" class="hover:text-white transition-colors">
                Conformidade NR-20
              </a>
            </li>
            <li>
              <a href="inspecao-termografica-nr10.html" class="hover:text-white transition-colors">
                Inspeção Elétrica & NR-10
              </a>
            </li>
          </ul>
        </div>

        <!-- Coluna 3 - Links Úteis -->
        <div class="lg:col-span-2 flex flex-col gap-4 lg:pt-[72px]">
          <h4 class="font-heading font-bold text-xs text-white uppercase tracking-widest border-l-2 border-brand-neon pl-3 mt-0">
            Institucional
          </h4>
          <ul class="flex flex-col gap-3.5 text-sm">
            <li>
              <a href="sobre-a-sisper.html" class="hover:text-white transition-colors">
                Sobre Nós
              </a>
            </li>
            <li>
              <a href="setores-atendidos.html" class="hover:text-white transition-colors">
                Setores Atendidos
              </a>
            </li>
            <li>
              <a href="contato.html" class="hover:text-white transition-colors">
                Fale Conosco
              </a>
            </li>
          </ul>
        </div>

        <!-- Coluna 4 - Contato / Local -->
        <div class="lg:col-span-3 flex flex-col gap-4 lg:pt-[72px]">
          <h4 class="font-heading font-bold text-xs text-white uppercase tracking-widest border-l-2 border-brand-neon pl-3 mt-0">
            Contato
          </h4>
          <ul class="flex flex-col gap-4 text-xs">
            <li class="flex items-start gap-3">
              <i data-lucide="mail" class="w-4 h-4 text-brand-neon shrink-0 mt-0.5"></i>
              <a href="mailto:sisper.consultoria@gmail.com" class="hover:text-white transition-colors whitespace-nowrap">
                sisper.consultoria@gmail.com
              </a>
            </li>
            <li class="flex items-start gap-3">
              <i data-lucide="phone" class="w-4 h-4 text-brand-neon shrink-0 mt-0.5"></i>
              <a href="tel:+5511988949290" class="hover:text-white transition-colors">
                +55 (11) 98894-9290
              </a>
            </li>
            <li class="flex items-start gap-3">
              <i data-lucide="map-pin" class="w-4 h-4 text-brand-neon shrink-0 mt-0.5"></i>
              <span>São Paulo - SP</span>
            </li>
          </ul>
        </div>

      </div>

      <div class="max-w-[1300px] mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-zinc-500">
        <div class="text-center md:text-left">
          <p>© ${currentYear} SISPER Consultoria e Projetos. Todos os direitos reservados.</p>
        </div>
        <div class="flex items-center gap-6">
          <a href="politica-de-privacidade.html" class="hover:text-white transition-colors flex items-center gap-1">
            <i data-lucide="shield" class="w-3.5 h-3.5 text-zinc-600"></i>
            Política de Privacidade (LGPD)
          </a>
        </div>
      </div>
    `;
    
    footerContainer.innerHTML = footerHTML;
}

// Injetar botão do WhatsApp
function injectWhatsApp() {
    // Evitar duplicar
    if (document.getElementById('whatsapp-floating-btn')) return;
    
    const div = document.createElement('div');
    div.id = 'whatsapp-floating-btn';
    div.className = "fixed bottom-6 right-6 z-50 flex items-center gap-3";
    
    const leadName = sessionStorage.getItem('sisper_lead_name') || '';
    const leadService = sessionStorage.getItem('sisper_lead_service') || 'Consultoria';
    
    const whatsappNumber = "5511988949290";
    let defaultText = "Olá. Gostaria de solicitar uma avaliação técnica da SISPER.";
    if (leadName) {
        defaultText = `Olá, meu nome é ${leadName} e acabei de enviar uma solicitação no site para o serviço de ${leadService}. Gostaria de agilizar o contato.`;
    }
    const encodedText = encodeURIComponent(defaultText);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
    
    div.innerHTML = `
      <div id="wa-text-balloon" class="hidden bg-white text-zinc-800 text-xs md:text-sm font-semibold py-2.5 px-4 rounded-xl shadow-xl border border-zinc-100 max-w-xs animate-[fade-in_0.3s_ease-out] relative">
        <div class="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-white"></div>
        Fale com nosso Engenheiro
      </div>
      
      <a
        href="${whatsappUrl}"
        target="_blank"
        rel="noopener noreferrer"
        class="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 relative group border border-green-400"
        aria-label="Fale conosco no WhatsApp"
        id="wa-icon-link"
      >
        <span class="absolute inset-0 rounded-full bg-green-500 opacity-20 animate-ping pointer-events-none"></span>
        <svg viewBox="0 0 24 24" class="w-7 h-7 fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
        </svg>
      </a>
    `;
    
    document.body.appendChild(div);
    
    const balloon = document.getElementById('wa-text-balloon');
    const waLink = document.getElementById('wa-icon-link');
    
    // Mostrar balão com delay
    setTimeout(() => {
        if (balloon) balloon.classList.remove('hidden');
    }, 4000);
    
    // Esconder balão após 10 segundos
    setTimeout(() => {
        if (balloon) balloon.classList.add('hidden');
    }, 12000);
    
    if (waLink && balloon) {
        waLink.addEventListener('mouseenter', () => {
            balloon.classList.remove('hidden');
        });
    }
}

// Injetar consentimento de cookies
function injectCookieConsent() {
    const consent = localStorage.getItem('sisper_cookie_consent');
    if (consent) return;
    
    const div = document.createElement('div');
    div.id = 'cookie-consent-container';
    div.className = "fixed bottom-6 left-6 right-6 md:left-auto md:right-24 md:max-w-md z-[100] animate-[slide-up_0.5s_ease-out]";
    
    div.innerHTML = `
      <div class="bg-zinc-900 border border-white/10 text-white rounded-2xl p-6 shadow-2xl backdrop-blur-md">
        <div class="flex items-start gap-4">
          <div class="p-2.5 bg-brand-green/20 text-brand-neon rounded-xl shrink-0">
            <i data-lucide="shield-check" class="w-6 h-6"></i>
          </div>
          <div class="flex-1">
            <div class="flex items-center justify-between">
              <h4 class="font-heading font-bold text-sm text-white uppercase tracking-wider">
                Privacidade & LGPD
              </h4>
              <button 
                id="close-cookie-btn"
                class="text-zinc-400 hover:text-white transition-colors"
                aria-label="Fechar"
              >
                <i data-lucide="x" class="w-4 h-4"></i>
              </button>
            </div>
            <p class="text-zinc-300 text-xs md:text-sm mt-2 leading-relaxed font-sans">
              Utilizamos cookies essenciais para o funcionamento do site e para melhorar sua experiência em nossa consultoria de acordo com a LGPD. Ao continuar navegando, você concorda com nossa
              <a href="politica-de-privacidade.html" class="text-brand-neon hover:underline">
                Política de Privacidade
              </a>.
            </p>
            <div class="flex items-center gap-3 mt-4 justify-end">
              <button 
                id="decline-cookie-btn"
                class="text-xs text-zinc-400 hover:text-white font-medium px-3 py-2 transition-all"
              >
                Recusar
              </button>
              <button 
                id="accept-cookie-btn"
                class="bg-brand-neon hover:bg-green-400 text-brand-lead text-xs font-bold px-4 py-2 rounded-full transition-colors shadow-lg"
              >
                Aceitar Cookies
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
    
    // Adicionar após pequeno delay
    setTimeout(() => {
        document.body.appendChild(div);
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
        
        // Listeners
        document.getElementById('accept-cookie-btn').addEventListener('click', () => {
            localStorage.setItem('sisper_cookie_consent', 'accepted');
            div.remove();
        });
        document.getElementById('decline-cookie-btn').addEventListener('click', () => {
            localStorage.setItem('sisper_cookie_consent', 'declined');
            div.remove();
        });
        document.getElementById('close-cookie-btn').addEventListener('click', () => {
            div.remove();
        });
    }, 2000);
}

// Iniciar animações de Scroll
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// Inicializar formulários de lead (captura de dados B2B)
function initLeadForms() {
    const leadForms = document.querySelectorAll('.lead-form');
    if (leadForms.length === 0) return;
    
    leadForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Campos
            const nameInput = form.querySelector('[name="nome"]');
            const emailInput = form.querySelector('[name="email"]');
            const phoneInput = form.querySelector('[name="telefone"]');
            const companyInput = form.querySelector('[name="empresa"]');
            const serviceSelect = form.querySelector('[name="servico"]');
            const messageInput = form.querySelector('[name="mensagem"]');
            
            // Validação simples
            if (!nameInput.value || !emailInput.value || !phoneInput.value || !companyInput.value) {
                alert('Por favor, preencha todos os campos obrigatórios.');
                return;
            }
            
            // Mostrar estado de envio (Desabilitar botão e mostrar loading)
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalBtnHTML = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = `
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processando...
            `;
            
            // Simular chamada de API com delay de 1.5s
            setTimeout(() => {
                // Registrar localmente no localStorage como "leads" salvos para análise posterior
                const leads = JSON.parse(localStorage.getItem('sisper_local_leads') || '[]');
                const newLead = {
                    id: Date.now(),
                    nome: nameInput.value,
                    email: emailInput.value,
                    telefone: phoneInput.value,
                    empresa: companyInput.value,
                    servico: serviceSelect ? serviceSelect.value : 'Contato Geral',
                    mensagem: messageInput ? messageInput.value : '',
                    data: new Date().toISOString()
                };
                leads.push(newLead);
                localStorage.setItem('sisper_local_leads', JSON.stringify(leads));
                
                // Salvar dados na sessão para a página de Obrigado ler
                sessionStorage.setItem('sisper_lead_name', newLead.nome);
                sessionStorage.setItem('sisper_lead_service', newLead.servico);
                
                // Redirecionar
                window.location.href = 'obrigado.html';
            }, 1500);
        });
    });
}
