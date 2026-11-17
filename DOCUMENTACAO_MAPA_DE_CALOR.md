# Análise de Mapa de Calor — LocadoraVeiculos (Versão Vencedora)

> **Página analisada:** `index.html` — Variante B (`test`, vencedora hipotética do Teste A/B)  
> **Período simulado:** 14 dias | **Sessões analisadas:** 1.510 sessões (920 Desktop · 590 Mobile) **[HIPOTÉTICO]**  
> **Metodologia:** Análise simulada de Mapa de Cliques (*Click Map*), Mapa de Rolagem (*Scroll Map*) e Mapa de Atenção (*Area/Attention Map*).

> ⚠️ **Nota sobre os dados:** Todos os números, percentuais e observações de mapa de calor apresentados neste documento são **hipotéticos (simulados para fins de exercício acadêmico)**, construídos a partir da estrutura real da interface da Variante B (`index.html`).

---

## 1. Objetivo

Mapear o comportamento visual e de interação dos usuários na **Variante B** (versão vencedora do Teste A/B para veículos de alta margem), respondendo aos 5 pontos-chave da análise de mapa de calor:
1. Quais áreas estão funcionando como deveriam;
2. Até onde os usuários rolam a página;
3. Quais informações importantes não estão sendo visualizadas;
4. Quais elementos estão roubando atenção e podem ser removidos;
5. Onde há maior impacto visual para adicionar novos pontos de conversão.

---

## 2. Distribuição Simulada do Mapa de Calor **[HIPOTÉTICO]**

| Zona da Página | Temperatura Visual | Concentração de Cliques | Alcance de Rolagem |
|---|---|---|---|
| **Header + Hero Esquerdo** (título e confiança) | Média | 6,4% (links do menu/login) | 100% |
| **Hero Direito — Card `DESTAQUE PREMIUM`** | **Muito Quente** | **28,5%** (CTA `"Explorar SUVs e Premium"`) | 100% |
| **Barra de Busca** (`Local`, `Retirada`, `Devolução`, `Buscar carros`) | **Quente** | **19,2%** | 94% Desktop · 81% Mobile |
| **Barra de Filtros** (`Todos`, `Econômicos`, `SUVs`, `Premium`) | Média-Quente | **14,8%** (inclui cliques sem retorno esperado) | 78% Desktop · 64% Mobile |
| **Vitrine — 1º e 2º Cards (`Jeep Compass` e `Honda City`)** | **Muito Quente** | **23,7%** (botões `Reservar` em verde-lima) | 71% Desktop · 52% Mobile |
| **Vitrine — 3º Card (`Toyota Corolla`)** | Fria-Média | **4,9%** | 68% Desktop · 39% Mobile |
| **Faixa de Benefícios** (`Sem surpresas`, `Retirada sem espera`, `Suporte`) | **Muito Fria** | **0,4%** | 41% Desktop · 22% Mobile |
| **Rodapé** | **Muito Fria** | **2,1%** | 29% Desktop · 14% Mobile |

---

## 3. Análise Detalhada

### 3.1 Áreas que estão funcionando como deveriam **[HIPOTÉTICO]**

| Área | Comportamento observado no mapa de calor | Evidência simulada |
|---|---|---|
| **Card Hero `DESTAQUE PREMIUM` (CTA verde-lima)** | Maior zona quente acima da dobra (*above the fold*). O fundo verde-escuro contrasta com o fundo claro da página e direciona o olhar para o botão `"Explorar SUVs e Premium"`. | **28,5%** dos cliques totais da página; **82%** dos cliques do hero vão direto para o botão CTA. |
| **Primeiros cards da vitrine (`Jeep Compass` e `Honda City`)** | A reordenação da Variante B colocou SUV e Premium no topo da leitura em F/Z. O selo escuro (`MAIS RECOMENDADO` / `MELHOR AVALIADO`) e o botão verde-lima concentram os cliques de reserva. | **23,7%** dos cliques totais; taxa de clique em `Reservar` **2,4× maior** nos dois primeiros cards do que no terceiro (`Toyota Corolla`). |
| **Barra de busca (`Buscar carros`)** | Funciona como âncora funcional logo abaixo do hero, com alta interação nos campos de data e cidade. | **19,2%** dos cliques da página, com baixa taxa de abandono durante o preenchimento. |

### 3.2 Até onde os usuários estão rolando a página (*Scroll Map*) **[HIPOTÉTICO]**

- **Profundidade média de rolagem:** **64% no Desktop** e **46% no Mobile**.
- **Linha da dobra (*above the fold*):** **100%** visualizam o Hero e a barra de busca no Desktop; no Mobile (`< 650px`), o card `DESTAQUE PREMIUM` empurra a barra de busca para o limite inferior da primeira tela (**81%** chegam até ela).
- **Vitrine de veículos (`#veiculos`):** **71% no Desktop** visualizam os 3 cards lado a lado; no **Mobile**, os cards ficam empilhados em 1 coluna, fazendo com que **52%** cheguem ao 2º card (`Honda City`) e apenas **39%** rolem até o 3º card (`Toyota Corolla`).
- **Faixa de benefícios (`#como-funciona`) e Rodapé:** apenas **41% (Desktop)** e **22% (Mobile)** chegam à faixa de benefícios; no rodapé, o alcance cai para **29% (Desktop)** e **14% (Mobile)**.

### 3.3 Informações importantes que não estão sendo visualizadas **[HIPOTÉTICO]**

| Informação | Por que passa despercebida | Evidência simulada |
|---|---|---|
| **Faixa de benefícios** (*Sem surpresas · Retirada sem espera · Suporte de verdade*) | Fica posicionada abaixo de toda a vitrine de carros, em uma zona com queda acentuada de rolagem. | Mais de **59% (Desktop)** e **78% (Mobile)** saem da página antes de enxergar esses argumentos de confiança. |
| **Linha de benefícios nos cards** (`✓ Seguro básico + KM livre inclusos`) | Fonte reduzida (`9px`) e pouco contraste em relação ao preço em destaque (`R$ 279` / `R$ 159`). | Zona fria no mapa de atenção: apenas **18%** do tempo de fixação visual nos cards passa por essa linha. |
| **Lista de 3 benefícios dentro do Hero Banner** | Os usuários leem o título e saltam direto para o botão verde-lima (`Explorar SUVs e Premium`), ignorando parcialmente o texto intermediário. | Menos de **25%** de fixação visual nos 3 bullets centrais em comparação com o título e o botão. |
| **Disponibilidade real da frota** | O texto `"8 veículos disponíveis"` e os contadores (`08`, `03`, `02`, `03`) não têm destaque visual e contradizem a exibição de apenas 3 cards. | **0% de cliques** e baixa atenção visual; gera dúvida em quem procura mais modelos. |

### 3.4 Pontos que estão "roubando a atenção" e podem ser retirados **[HIPOTÉTICO]**

| Elemento | Por que distrai / prejudica a conversão | Evidência simulada |
|---|---|---|
| **Links de saída no cabeçalho (`Entrar`, `Criar conta ↗`, `Como funciona`, `Ajuda`)** | Competem com o funil principal logo no topo da tela, tirando usuários da jornada de escolha do carro antes mesmo de verem a vitrine. | **6,4%** dos cliques vão para o cabeçalho (sendo **3,8%** para `Criar conta` / `Entrar`, com alto retorno sem reserva). |
| **Link redundante `"Ver todos os carros →"`** | Fica no canto direito do título da vitrine, mas aponta para `#veiculos` (a própria seção onde o usuário já está). | **3,1%** de cliques inúteis (*dead/redundant clicks*) que não levam a nenhum carro novo. |
| **Botões de filtro com contadores irreais (`08`, `03`, `02`, `03`)** | Atraem cliques pela aparência interativa, mas ao clicar em `SUVs 02` ou `Premium 03` aparece apenas 1 card por categoria, frustrando a expectativa. | **14,8%** de cliques concentrados nos filtros, seguidos de retorno rápido ao topo ou saída da página em **21%** dessas sessões. |
| **Selo `"Viaje do seu jeito"` (na versão A) e ícones decorativos não clicáveis** | Na versão B, o avatar stack (`R M A +`) e os ícones de ar-condicionado/lugares nos cards recebem cliques acidentais. | **4,2%** de *dead clicks* (cliques em áreas estáticas que parecem botões). |

### 3.5 Áreas de maior impacto visual onde podem ser adicionados novos pontos de conversão **[HIPOTÉTICO]**

Com base nas zonas mais quentes observadas no mapa de atenção e de cliques:

1. **Subir a Faixa de Benefícios para logo abaixo da Barra de Busca:** como **81%–94%** passam pela barra de busca e apenas **22%–41%** chegam ao fim da página, mover *"Sem surpresas · Retirada sem espera · Suporte de verdade"* para cima da vitrine aumenta a exposição sem exigir rolagem extra.
2. **Preço âncora + CTA secundário dentro do Hero Card:** a área do card `DESTAQUE PREMIUM` concentra **28,5%** dos cliques. Adicionar `"A partir de R$ 159/dia"` ao lado do botão `"Explorar SUVs e Premium"` reforça a conversão imediata.
3. **Micro-CTA na zona intermediária da vitrine (Mobile):** entre o 2º e o 3º card no mobile (onde o scroll cai para 39%), inserir uma faixa compacta `"Precisa de ajuda para escolher? Compare SUV vs. Sedan"` para reter quem não rolou até o fim.
4. **Reforço visual de prova social junto ao preço do card:** mover ou destacar `"✓ Seguro + KM livre"` logo acima do botão `Reservar` (com fonte `11px` e ícone mais visível), aproveitando que o olhar do usuário já pousa diretamente no bloco `Preço + Botão`.
5. **CTA de fechamento após a vitrine:** substituir a área fria do rodapé por uma chamada direta (`"Garanta seu SUV com cancelamento grátis →"`) conectada ao filtro de alta margem.

---

## 4. Quadro-Resumo da Análise **[HIPOTÉTICO]**

| Pergunta da Atividade | Diagnóstico Simulado | Ação Recomendada |
|---|---|---|
| **O que funciona como deveria?** | Card `DESTAQUE PREMIUM` (28,5% dos cliques), barra de busca (19,2%) e botões verde-lima dos 2 primeiros cards (23,7%). | Manter estrutura visual e destaque verde-lima. |
| **Até onde os usuários rolam?** | Média de 64% no Desktop e 46% no Mobile; queda brusca após o 2º card no celular. | Compactar espaçamentos no mobile e priorizar conteúdo-chave acima da dobra. |
| **O que não está sendo visto?** | Faixa de benefícios no rodapé (59%–78% não veem) e linha de benefícios em `9px` nos cards. | Subir a faixa de benefícios para cima da vitrine e aumentar contraste/tamanho nos cards. |
| **O que rouba atenção e pode sair?** | Link redundante `"Ver todos os carros"`, botões de filtro com contadores `08` irreais e links de conta no topo. | Remover `"Ver todos os carros"`, ajustar contadores reais (`03`, `01`, `01`, `01`) e simplificar o header. |
| **Onde adicionar conversão?** | Abaixo da barra de busca, dentro do card do Hero (ancoragem de preço) e entre cards no mobile. | Inserir micro-CTAs e argumentos de confiança exatamente nessas zonas quentes. |

---

## 5. Próximos Passos

1. Aplicar os ajustes priorizados no quadro-resumo (especialmente subir a faixa de benefícios e remover o link redundante).
2. Rodar um novo Teste A/B no PostHog comparando a Variante B atual contra a **Variante B2 (otimizada pelo mapa de calor)** para validar se as mudanças elevam o CTR final de `Reservar`.
3. Estender a medição até a conclusão do pedido em `checkout.html`.
