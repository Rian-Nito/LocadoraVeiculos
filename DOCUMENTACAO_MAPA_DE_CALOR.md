# Análise de Mapa de Calor — LocadoraVeiculos (versão vencedora)

> **Ferramenta:** Microsoft Clarity | **Página analisada:** `index.html` | **Versão analisada:** _[B (`test`) se vencer o teste A/B; senão A]_
> **Período:** _[dd/mm a dd/mm]_ | **Sessões analisadas:** _[n]_ | **Dispositivos:** _[desktop / mobile]_

> ⚠️ Os itens em _itálico entre colchetes_ devem ser preenchidos com o que você observar no Clarity. As **hipóteses** abaixo vêm do layout e precisam ser confirmadas ou refutadas com os dados.

---

## 1. Objetivo
Mapear como os usuários interagem com a versão vencedora do teste A/B e achar melhorias: o que funciona, até onde rolam, o que não é visto, o que distrai e onde pôr novos pontos de conversão.

## 2. Configuração do Clarity
1. Criar conta em https://clarity.microsoft.com e um projeto com a URL do site publicado.
2. Copiar o **Project ID** em *Settings → Overview*.
3. Colar no `index.html`, no lugar de `SEU_CLARITY_ID`.
4. O `script.js` envia a tag `variante` (`control`/`test`) ao Clarity. Em *Filters → Custom tags* dá para filtrar os mapas por variante.
5. Publicar o site (GitHub Pages) e gerar sessões. Os heatmaps levam algumas horas para aparecer e precisam de volume de sessões para ter sentido.
6. Em *Heatmaps*, escolher a URL e ver os três modos: **Click**, **Scroll** e **Area**.

## 3. Resultados e Análise

### 3.1 Áreas que funcionam como deveriam
| Área | Hipótese | O que o Clarity mostrou |
|---|---|---|
| Card hero (CTA "Explorar SUVs e Premium") | Concentra cliques por contraste e posição | _[% de cliques, print]_ |
| Primeiros cards da vitrine (Jeep e Honda) | Recebem mais cliques por estarem no início | _[...]_ |
| Botões "Reservar" em verde-lima | Atraem mais cliques que os escuros | _[...]_ |
| Barra de busca ("Buscar carros") | Uso alto pela posição | _[...]_ |

### 3.2 Até onde os usuários rolam (Scroll map)
- Profundidade média: _[ex.: 62%]_
- Percentual que chega à vitrine: _[%]_
- Percentual que chega à faixa de benefícios ("Sem surpresas…"): _[%]_
- Percentual que chega ao rodapé: _[%]_
- **Hipótese:** a vitrine começa depois da barra de busca, então parte dos usuários pode não passar dela em telas pequenas. Verificar o mobile.

### 3.3 Informações importantes que não estão sendo vistas
| Informação | Hipótese | Evidência |
|---|---|---|
| Linha "Seguro básico + KM livre inclusos" | Texto pequeno (9px) e baixo contraste, pode passar despercebido | _[zonas frias no heatmap]_ |
| Faixa de benefícios (Sem surpresas, Retirada, Suporte) | Fica no fim da página, abaixo da vitrine | _[% de scroll até ela]_ |
| Disponibilidade ("8 veículos disponíveis") | Contador não bate com os 3 cards exibidos | _[...]_ |
| Cards fora da tela no mobile | Terceiro card pode ficar abaixo da dobra | _[...]_ |

### 3.4 O que "rouba atenção" e pode ser retirado
| Elemento | Por que pode distrair | Dado |
|---|---|---|
| Filtros "Todos / Econômicos / SUVs / Premium" | Têm cliques, mas filtros que não mostram nada mudam a expectativa | _[cliques e dead clicks]_ |
| Link "Ver todos os carros" | Leva ao mesmo lugar (`#veiculos`) | _[...]_ |
| Cabeçalho ("Entrar", "Criar conta") | Competem com a reserva | _[...]_ |
| Elementos não clicáveis que recebem cliques | Indicam falsa expectativa de link (dead clicks) | _[Clarity → Dead clicks]_ |

> No Clarity, também vale olhar **Rage clicks**, **Quick backs** e **Excessive scrolling**.

### 3.5 Áreas de maior impacto visual para novos pontos de conversão
Use o **Area map** e o **Click map** para ver onde o olhar e o clique se concentram. Sugestões a validar:
1. **Abaixo do card hero** (zona mais quente): adicionar uma segunda chamada, como "Ver oferta de SUV".
2. **Entre os dois primeiros cards**: banner "Reserve hoje com cancelamento grátis".
3. **Após a vitrine**: CTA final "Ainda em dúvida? Fale com a gente".
4. **Faixa de benefícios**: levar para mais cima, perto da barra de busca, se o scroll mostrar que poucos chegam até ela.
5. **Cards**: preço e botão "Reservar" já são pontos de conversão. Reforçar a prova social (avaliações) perto deles.

## 4. Quadro-resumo

| Pergunta da atividade | Conclusão | Ação proposta |
|---|---|---|
| O que funciona? | _[...]_ | Manter |
| Até onde rolam? | _[...]_ | Subir conteúdo-chave acima da dobra |
| O que não é visto? | _[...]_ | Aumentar contraste e tamanho |
| O que distrai? | _[...]_ | Remover ou rebaixar |
| Onde converter mais? | _[...]_ | Adicionar CTAs nas zonas quentes |

## 5. Próximos passos
1. Implementar as melhorias priorizadas.
2. Rodar um novo teste A/B (PostHog) com as mudanças.
3. Reavaliar com o Clarity após 2 semanas.

## 6. Limitações
- Poucas sessões deixam os mapas pouco confiáveis. Declarar o volume analisado.
- Heatmap mostra **onde**, não **por quê**. Complementar com as gravações de sessão.
- O Clarity precisa de tráfego real; sessões só suas distorcem o mapa.

## 7. Anexos (a preencher)
- [ ] Print: Click heatmap (desktop)
- [ ] Print: Scroll heatmap (desktop)
- [ ] Print: Area heatmap
- [ ] Print: Heatmap mobile
- [ ] Print: Dashboard (dead clicks, rage clicks, scroll depth)
- [ ] Trecho de uma gravação de sessão

