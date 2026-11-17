/**
 * =========================================================================
 * EXPERIMENTO A/B: ALTA MARGEM DE CONTRIBUIÇÃO (SUVs & Premium)
 * LocadoraVeiculos — Front-end CRO & Experimentation Engine
 * =========================================================================
 * Feature Flag PostHog: 'teste-ab-alta-margem'
 * Variantes:
 *   - 'control': Versão Original (Layout clássico, estrada decorativa, Toyota em 1º)
 *   - 'test': Variante B Otimizada (Banner alta margem, SUVs/Premium em 1º, Prova Social, CTA verde-lima)
 */

(function () {
  'use strict';

  // Configurações do Experimento
  const CONFIG = {
    FLAG_KEY: 'teste-ab-alta-margem',
    TIMEOUT_MS: 800, // Timeout de segurança antes de aplicar o fallback
    PARAM_OVERRIDE: 'ab_variant' // Permite testar via URL: ?ab_variant=test ou ?ab_variant=control
  };

  const experimentState = {
    initialized: false,
    variant: 'control' // Fallback seguro inicial
  };

  /**
   * Remove o estado de anti-flicker e restaura a opacidade suavemente
   */
  function dismissAntiFlicker() {
    document.documentElement.classList.remove('ph-loading');
    const antiFlickerStyle = document.getElementById('ph-anti-flicker');
    if (antiFlickerStyle) {
      antiFlickerStyle.remove();
    }
  }

  /**
   * Reordena os veículos na vitrine para destacar SUVs e Premium em primeiro lugar
   */
  function reorderCarGridForVariantB() {
    const grid = document.querySelector('.car-grid');
    if (!grid) return;

    const cards = Array.from(grid.querySelectorAll('.car-card'));
    // Prioridade da Variante B: SUV (1º), Premium (2º) e Econômico (3º)
    const priority = {
      'SUV': 1,
      'Premium': 2,
      'Economico': 3
    };

    cards.sort((a, b) => {
      const catA = a.dataset.category || '';
      const catB = b.dataset.category || '';
      return (priority[catA] || 99) - (priority[catB] || 99);
    });

    // Reanexa os cards no DOM na nova ordem (garante acessibilidade e ordem semântica)
    cards.forEach(card => grid.appendChild(card));
  }

  /**
   * Aplica visualmente a variante selecionada e dispara os eventos necessários
   * @param {'control' | 'test'} variant
   */
  function applyVariant(variant) {
    if (experimentState.initialized) return;
    experimentState.initialized = true;
    experimentState.variant = variant;

    if (variant === 'test') {
      document.body.classList.add('variant-test');
      reorderCarGridForVariantB();
      console.info('[PostHog CRO] Variante B ("test") aplicada com sucesso.');
    } else {
      document.body.classList.remove('variant-test');
      console.info('[PostHog CRO] Variante A ("control") aplicada (Original).');
    }

    // Clarity: permite filtrar heatmaps/gravações por variante
    if (typeof window.clarity === 'function') {
      window.clarity('set', 'variante', variant);
    }

    // Libera a tela (anti-flicker)
    dismissAntiFlicker();

    // Evento 1: visualizou_variante_ab
    trackImpression(variant);

    // Instrumenta os listeners de clique (Hero e Botões de Reserva)
    setupTrackingListeners();
  }

  /**
   * Captura no PostHog a visualização da variante do experimento
   * @param {'control' | 'test'} variant
   */
  function trackImpression(variant) {
    if (window.posthog && typeof window.posthog.capture === 'function') {
      window.posthog.capture('visualizou_variante_ab', {
        variante: variant,
        experimento: CONFIG.FLAG_KEY,
        origem: 'homepage_hero'
      });
    }
  }

  /**
   * Instrumenta os eventos de clique da página para funil do PostHog
   */
  function setupTrackingListeners() {
    // Evento 2: clicou_hero_alta_margem (exclusivo da Variante B)
    const heroCta = document.getElementById('hero-cta-ab');
    if (heroCta) {
      heroCta.addEventListener('click', function (e) {
        if (window.posthog && typeof window.posthog.capture === 'function') {
          window.posthog.capture('clicou_hero_alta_margem', {
            variante: experimentState.variant,
            elemento: 'hero_cta_banner',
            alvo: '#veiculos'
          });
        }
        // Rolagem suave até a vitrine de veículos
        const fleetSection = document.getElementById('veiculos');
        if (fleetSection) {
          e.preventDefault();
          fleetSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }

    // Evento 3: clicou_reservar_veiculo (disparado em qualquer card de veículo)
    const reserveButtons = document.querySelectorAll('.car-card .reserve-button');
    reserveButtons.forEach(button => {
      button.addEventListener('click', function () {
        const card = this.closest('.car-card');
        const categoria = card ? card.dataset.category : 'Desconhecida';
        const modelo = card ? card.dataset.model : 'Desconhecido';

        if (window.posthog && typeof window.posthog.capture === 'function') {
          window.posthog.capture('clicou_reservar_veiculo', {
            categoria: categoria,
            modelo: modelo,
            variante: experimentState.variant
          });
        }
      });
    });

    // Interatividade dos filtros de categoria da vitrine
    setupFilterButtons();
  }

  /**
   * Suporte a cliques nas abas de filtros da vitrine (Todos / Econômicos / SUVs / Premium)
   */
  function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-row .filter');
    const cards = document.querySelectorAll('.car-grid .car-card');

    filterButtons.forEach(btn => {
      btn.addEventListener('click', function () {
        filterButtons.forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        const label = this.textContent.toLowerCase();
        let targetCategory = 'todos';
        if (label.includes('econômicos') || label.includes('economicos')) targetCategory = 'Economico';
        else if (label.includes('suv')) targetCategory = 'SUV';
        else if (label.includes('premium')) targetCategory = 'Premium';

        cards.forEach(card => {
          if (targetCategory === 'todos' || card.dataset.category === targetCategory) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  /**
   * Ponto de entrada: resolve a variante com fallback e integração com PostHog
   */
  function initExperiment() {
    // 1. Verificação de URL Override para testes manuais e QA
    // Ex: index.html?ab_variant=test ou index.html?ab_variant=control
    const urlParams = new URLSearchParams(window.location.search);
    const forcedVariant = urlParams.get(CONFIG.PARAM_OVERRIDE);
    if (forcedVariant === 'test' || forcedVariant === 'control') {
      console.info(`[PostHog CRO] Variante ativada via URL Override (?${CONFIG.PARAM_OVERRIDE}=${forcedVariant}).`);
      applyVariant(forcedVariant);
      return;
    }

    // 2. Timer de segurança (fallback seguro para 'control' caso PostHog demore ou falhe)
    const fallbackTimer = setTimeout(() => {
      if (!experimentState.initialized) {
        console.warn('[PostHog CRO] Timeout da Feature Flag atingido. Ativando fallback ("control").');
        applyVariant('control');
      }
    }, CONFIG.TIMEOUT_MS);

    // 3. Consulta da Feature Flag via SDK do PostHog
    if (window.posthog && typeof window.posthog.onFeatureFlags === 'function') {
      window.posthog.onFeatureFlags(() => {
        clearTimeout(fallbackTimer);
        const flagValue = window.posthog.getFeatureFlag(CONFIG.FLAG_KEY);
        // Avalia se o retorno é 'test' ou booleano ativo
        const chosenVariant = (flagValue === 'test' || flagValue === true) ? 'test' : 'control';
        applyVariant(chosenVariant);
      });
    } else {
      // Caso o PostHog tenha sido bloqueado por AdBlocker ou não inicializado
      clearTimeout(fallbackTimer);
      applyVariant('control');
    }
  }

  // Inicializa quando o DOM estiver pronto
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initExperiment);
  } else {
    initExperiment();
  }
})();

