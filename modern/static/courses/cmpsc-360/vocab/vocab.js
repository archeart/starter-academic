/* ===========================================================================
   CMPSC 360 — vocabulary, Lectures 1–3
   SINGLE SOURCE OF TRUTH. Edit this file, then run:  node sync.mjs
   That copies this array into glossary.html and cards.html, which stay
   standalone (no external files, no CDN, nothing to load).

   Fields
     id     anchor + card key. lowercase, hyphenated. Do not change once
            published — links elsewhere may point at it.
     term   display name
     sym    notation, or "" — small HTML allowed
     topic  must match one of the TOPICS list in the HTML files
     lec    1, 2 or 3
     def    the definition. 1–2 sentences. This is also the card back.
     ex     example, or "" — shown in the dictionary only
     note   the thing students get wrong, or "" — dictionary only
     see    related ids, or []

   Small HTML is allowed in sym/def/ex/note: <i> for variables,
   <sup>/<sub>, <b>, and <span class="ovl">A</span> for a set complement.
   =========================================================================== */

/* VOCAB:BEGIN */
const CS360_VOCAB = [

  /* ---------------------------------------------------------- L1 · Sets -- */
  {
    id: 'set', term: 'Set', sym: '<i>A</i> = {…}', topic: 'Sets', lec: 1,
    def: 'An <b>unordered</b> collection of <b>distinct</b> objects, called its elements.',
    ex: '<i>V</i> = {a, e, i, o, u}',
    note: 'Order and repetition record nothing: {a,b,c} = {c,a,b} = {a,a,b,c}. A set says only <i>which</i> elements are present.',
    see: ['element', 'set-equality']
  },
  {
    id: 'element', term: 'Element (member)', sym: '<i>a</i> ∈ <i>A</i>,&nbsp; <i>a</i> ∉ <i>A</i>', topic: 'Sets', lec: 1,
    def: 'An object belonging to a set. <i>a</i> ∈ <i>A</i> reads “<i>a</i> is an element of <i>A</i>”; <i>a</i> ∉ <i>A</i> is its denial.',
    ex: 'For <i>V</i> = {a, e, i, o, u}: e ∈ <i>V</i> but b ∉ <i>V</i>.',
    note: '', see: ['set']
  },
  {
    id: 'roster-method', term: 'Roster method', sym: '{1, 3, 5, 7, 9}', topic: 'Sets', lec: 1,
    def: 'Describing a set by listing its elements between braces, using “…” when the pattern is clear.',
    ex: '<i>O</i> = {1, 3, 5, 7, 9},&nbsp;&nbsp; <i>S</i> = {1, 2, 3, …, 99},&nbsp;&nbsp; <i>O</i> = {…, −3, −1, 1, 3, 5, …}',
    note: '', see: ['set-builder']
  },
  {
    id: 'set-builder', term: 'Set-builder notation', sym: '{ <i>x</i> ∣ condition on <i>x</i> }', topic: 'Sets', lec: 1,
    def: 'Describing a set by a condition its elements satisfy — read “the set of all <i>x</i> such that …”.',
    ex: '{ <i>x</i> ∈ ℤ<sup>+</sup> ∣ <i>x</i> &lt; 10 and <i>x</i> is odd } = {1,3,5,7,9};&nbsp;&nbsp; {3<i>k</i> ∣ <i>k</i> ∈ ℤ} = {…, −6, −3, 0, 3, 6, …}',
    note: 'Use it when the roster is infinite or awkward — it names the <i>rule</i>, not the members.',
    see: ['roster-method']
  },
  {
    id: 'interval', term: 'Interval notation', sym: '[<i>a</i>,<i>b</i>],&nbsp; (<i>a</i>,<i>b</i>),&nbsp; [<i>a</i>,<i>b</i>),&nbsp; (<i>a</i>,<i>b</i>]', topic: 'Sets', lec: 1,
    def: 'Sets of reals between two endpoints. A <b>square</b> bracket includes the endpoint; a <b>round</b> bracket excludes it.',
    ex: '[<i>a</i>,<i>b</i>] = {<i>x</i> ∣ <i>a</i> ≤ <i>x</i> ≤ <i>b</i>},&nbsp;&nbsp; (<i>a</i>,<i>b</i>) = {<i>x</i> ∣ <i>a</i> &lt; <i>x</i> &lt; <i>b</i>}. So 0 ∈ [0,1) but 1 ∉ [0,1).',
    note: '', see: ['set-builder']
  },
  {
    id: 'number-sets', term: 'Standard number sets', sym: 'ℕ, ℤ, ℚ, ℝ, ℂ', topic: 'Sets', lec: 1,
    def: 'ℕ naturals {1,2,3,…} · ℕ<sub>0</sub> naturals with zero {0,1,2,…} · ℤ integers · ℤ<sup>+</sup> positive integers · ℚ rationals · ℝ reals · ℂ complex numbers.',
    ex: '−3 ∈ ℤ,&nbsp; 5/2 ∈ ℚ,&nbsp; √2 ∈ ℝ \\ ℚ.&nbsp; And ℕ ⊆ ℤ ⊆ ℚ ⊆ ℝ ⊆ ℂ.',
    note: '', see: ['subset']
  },
  {
    id: 'set-equality', term: 'Set equality', sym: '<i>A</i> = <i>B</i>', topic: 'Sets', lec: 1,
    def: 'Two sets are equal exactly when they contain the same elements — everything in <i>A</i> is in <i>B</i>, and everything in <i>B</i> is in <i>A</i>. (The axiom of extension.)',
    ex: '{<i>a</i>,<i>b</i>,<i>c</i>,<i>d</i>} = {<i>b</i>,<i>c</i>,<i>a</i>,<i>d</i>}',
    note: 'Sets can contain sets: <i>S</i> = {{1,2,3}, <i>a</i>, {<i>b</i>,<i>c</i>}} has <i>three</i> elements.',
    see: ['set', 'cardinality']
  },
  {
    id: 'empty-set', term: 'Empty set', sym: '∅&nbsp; (or { })', topic: 'Sets', lec: 1,
    def: 'The set with no elements.',
    ex: '∣∅∣ = 0',
    note: '∅ ≠ {∅}. The right-hand side is a box containing an empty box — it has <i>one</i> element, so ∣{∅}∣ = 1.',
    see: ['singleton', 'subset']
  },
  {
    id: 'singleton', term: 'Singleton', sym: '{<i>a</i>}', topic: 'Sets', lec: 1,
    def: 'A set with exactly one element.',
    ex: '{∅} is a singleton — its one element is the empty set.',
    note: '', see: ['empty-set']
  },
  {
    id: 'universal-set', term: 'Universal set', sym: '<i>U</i>', topic: 'Sets', lec: 1,
    def: 'The set of everything under discussion in the current context.',
    ex: 'For a problem about single digits, <i>U</i> = {0,1,…,9}.',
    note: 'A complement only makes sense once <i>U</i> is fixed.',
    see: ['complement']
  },
  {
    id: 'subset', term: 'Subset · proper subset', sym: '<i>A</i> ⊆ <i>B</i>,&nbsp; <i>A</i> ⊊ <i>B</i>', topic: 'Sets', lec: 1,
    def: '<i>A</i> ⊆ <i>B</i> means every element of <i>A</i> is also an element of <i>B</i>. If in addition <i>A</i> ≠ <i>B</i>, then <i>A</i> is a <b>proper</b> subset, written <i>A</i> ⊊ <i>B</i>.',
    ex: '{1,3} ⊆ {1,2,3,4};&nbsp;&nbsp; {−1,2} ⊄ {0,1,2,3} because −1 ∉ {0,1,2,3}.',
    note: 'To show <i>A</i> ⊆ <i>B</i>: take an arbitrary <i>x</i> ∈ <i>A</i> and check it lands in <i>B</i>. For <i>any</i> set: ∅ ⊆ <i>A</i> and <i>A</i> ⊆ <i>A</i>.',
    see: ['power-set', 'set-equality']
  },
  {
    id: 'cardinality', term: 'Cardinality', sym: '∣<i>A</i>∣', topic: 'Sets', lec: 1,
    def: 'For a finite set, the number of <b>distinct</b> elements in it.',
    ex: '∣∅∣ = 0, ∣{∅}∣ = 1, ∣{1,1,2,3,5,7,7,11}∣ = 6.',
    note: 'Count the boxes at the <i>top level</i>: ∣{{1,2,3}, <i>a</i>, {<i>b</i>,<i>c</i>}}∣ = 3, not 6.',
    see: ['power-set', 'bijective']
  },
  {
    id: 'power-set', term: 'Power set', sym: '𝒫(<i>A</i>)', topic: 'Sets', lec: 1,
    def: 'The set of <b>all subsets</b> of <i>A</i> — including ∅ and <i>A</i> itself.',
    ex: 'For <i>A</i> = {<i>a</i>,<i>b</i>}: 𝒫(<i>A</i>) = { ∅, {<i>a</i>}, {<i>b</i>}, {<i>a</i>,<i>b</i>} }.',
    note: 'Each element is either in or out of a subset — two choices each — so ∣𝒫(<i>A</i>)∣ = 2<sup>∣<i>A</i>∣</sup>. If ∣<i>A</i>∣ = 5 then ∣𝒫(<i>A</i>)∣ = 32, not 10.',
    see: ['subset', 'cardinality']
  },
  {
    id: 'ordered-pair', term: 'Ordered pair', sym: '(<i>a</i>, <i>b</i>)', topic: 'Sets', lec: 1,
    def: 'Two objects in a fixed order. In general (<i>a</i>,<i>b</i>) ≠ (<i>b</i>,<i>a</i>).',
    ex: '(1,<i>x</i>) ∈ <i>A</i> × <i>B</i> while (<i>x</i>,1) ∈ <i>B</i> × <i>A</i>.',
    note: '', see: ['cartesian-product', 'relation']
  },
  {
    id: 'cartesian-product', term: 'Cartesian product', sym: '<i>A</i> × <i>B</i>', topic: 'Sets', lec: 1,
    def: 'The set of all ordered pairs with first entry from <i>A</i> and second from <i>B</i>: <i>A</i> × <i>B</i> = { (<i>a</i>,<i>b</i>) ∣ <i>a</i> ∈ <i>A</i>, <i>b</i> ∈ <i>B</i> }.',
    ex: '<i>A</i> = {<i>a</i>,<i>b</i>}, <i>B</i> = {1,2,3}: <i>A</i> × <i>B</i> = {(<i>a</i>,1),(<i>a</i>,2),(<i>a</i>,3),(<i>b</i>,1),(<i>b</i>,2),(<i>b</i>,3)}.',
    note: 'Size rule: ∣<i>A</i> × <i>B</i>∣ = ∣<i>A</i>∣·∣<i>B</i>∣. The Cartesian product is not commutative in general: <i>A</i> × <i>B</i> need not equal <i>B</i> × <i>A</i>.',
    see: ['ordered-pair', 'relation']
  },
  {
    id: 'union', term: 'Union', sym: '<i>A</i> ∪ <i>B</i>', topic: 'Sets', lec: 1,
    def: 'Everything in <i>A</i> <b>or</b> <i>B</i>: <i>A</i> ∪ <i>B</i> = {<i>x</i> ∣ <i>x</i> ∈ <i>A</i> or <i>x</i> ∈ <i>B</i>}.',
    ex: '{1,2,3} ∪ {3,4,5} = {1,2,3,4,5}',
    note: '“Or” is <b>inclusive</b> — 3 is in both, and appears once.',
    see: ['intersection', 'de-morgan-sets']
  },
  {
    id: 'intersection', term: 'Intersection', sym: '<i>A</i> ∩ <i>B</i>', topic: 'Sets', lec: 1,
    def: 'Everything in <i>A</i> <b>and</b> <i>B</i>: <i>A</i> ∩ <i>B</i> = {<i>x</i> ∣ <i>x</i> ∈ <i>A</i> and <i>x</i> ∈ <i>B</i>}.',
    ex: '{1,2,3} ∩ {3,4,5} = {3}',
    note: '', see: ['union', 'disjoint', 'de-morgan-sets']
  },
  {
    id: 'difference', term: 'Difference', sym: '<i>A</i> − <i>B</i>', topic: 'Sets', lec: 1,
    def: 'Everything in <i>A</i> but not in <i>B</i>: <i>A</i> − <i>B</i> = {<i>x</i> ∣ <i>x</i> ∈ <i>A</i> and <i>x</i> ∉ <i>B</i>}.',
    ex: '<i>A</i> = {2,4,6}, <i>B</i> = {4,5}: <i>A</i> − <i>B</i> = {2,6}.',
    note: 'Order matters: <i>A</i> − <i>B</i> ≠ <i>B</i> − <i>A</i> in general. The same operation is often written <i>A</i> \\ <i>B</i> — as in ℝ \\ ℚ, the irrationals.',
    see: ['complement', 'symmetric-difference']
  },
  {
    id: 'complement', term: 'Complement', sym: '<span class="ovl"><i>A</i></span> = <i>U</i> − <i>A</i>', topic: 'Sets', lec: 1,
    def: 'Everything in the universe <i>U</i> that is outside <i>A</i>: <span class="ovl"><i>A</i></span> = {<i>x</i> ∈ <i>U</i> ∣ <i>x</i> ∉ <i>A</i>}.',
    ex: '<i>U</i> = {1,…,6}, <i>A</i> = {2,4,6}: <span class="ovl"><i>A</i></span> = {1,3,5}.',
    note: 'Meaningless until <i>U</i> is fixed.',
    see: ['universal-set', 'difference', 'de-morgan-sets']
  },
  {
    id: 'symmetric-difference', term: 'Symmetric difference', sym: '<i>A</i> ⊕ <i>B</i>', topic: 'Sets', lec: 1,
    def: 'Everything in exactly one of <i>A</i>, <i>B</i>: <i>A</i> ⊕ <i>B</i> = (<i>A</i> − <i>B</i>) ∪ (<i>B</i> − <i>A</i>) = (<i>A</i> ∪ <i>B</i>) − (<i>A</i> ∩ <i>B</i>).',
    ex: '{1,2,3} ⊕ {3,4,5} = {1,2,4,5} — 3 is in both, so it drops out.',
    note: 'Unlike <i>A</i> − <i>B</i>, order does not matter: <i>A</i> ⊕ <i>B</i> = <i>B</i> ⊕ <i>A</i>. It answers “what changed?”.',
    see: ['difference', 'xor']
  },
  {
    id: 'disjoint', term: 'Disjoint', sym: '<i>A</i> ∩ <i>B</i> = ∅', topic: 'Sets', lec: 1,
    def: 'Two sets are disjoint when they share no elements. A family is <b>pairwise disjoint</b> when every two of its sets are disjoint.',
    ex: 'The classes of congruence mod 3 are pairwise disjoint.',
    note: '', see: ['intersection', 'partition']
  },
  {
    id: 'de-morgan-sets', term: 'De Morgan’s laws (sets)', sym: '<span class="ovl"><i>A</i> ∪ <i>B</i></span> = <span class="ovl"><i>A</i></span> ∩ <span class="ovl"><i>B</i></span>', topic: 'Sets', lec: 1,
    def: 'Complementing a union gives the intersection of the complements, and vice versa: <span class="ovl"><i>A</i> ∩ <i>B</i></span> = <span class="ovl"><i>A</i></span> ∪ <span class="ovl"><i>B</i></span>.',
    ex: 'Shade both sides of a Venn diagram and you get the same region.',
    note: 'This is the same law as ¬(<i>P</i> ∧ <i>Q</i>) ≡ ¬<i>P</i> ∨ ¬<i>Q</i> in Lecture 3, and as the quantifier swap — one law, three costumes.',
    see: ['de-morgan-logic', 'negating-quantifiers', 'set-laws']
  },
  {
    id: 'set-laws', term: 'Set identity laws', sym: '', topic: 'Sets', lec: 1,
    def: 'The standard algebra of ∪, ∩ and complement: identity, domination, idempotent, complement, double complement, commutative, associative, distributive, absorption, De Morgan.',
    ex: '<i>A</i> ∪ ∅ = <i>A</i>,&nbsp;&nbsp; <i>A</i> ∩ <i>U</i> = <i>A</i><br><i>A</i> ∪ <i>U</i> = <i>U</i>,&nbsp;&nbsp; <i>A</i> ∩ ∅ = ∅<br><i>A</i> ∩ (<i>B</i> ∪ <i>C</i>) = (<i>A</i> ∩ <i>B</i>) ∪ (<i>A</i> ∩ <i>C</i>)',
    note: '<b>Duality:</b> swap ∪ ↔ ∩ and ∅ ↔ <i>U</i>, and every law on the list turns into another law on the list.',
    see: ['de-morgan-sets', 'equivalences']
  },

  /* ----------------------------------------------------- L1 · Relations -- */
  {
    id: 'relation', term: 'Relation', sym: '<i>R</i> ⊆ <i>A</i> × <i>B</i>', topic: 'Relations', lec: 1,
    def: 'A <b>set of ordered pairs</b>. A relation <i>from A to B</i> is a subset of <i>A</i> × <i>B</i>; a relation <i>on A</i> is a subset of <i>A</i> × <i>A</i>.',
    ex: '<i>R</i> = {(1,2),(1,3),(3,0)} is a relation on {0,1,2,3}.',
    note: 'You keep some pairs of the Cartesian product and discard the rest. If ∣<i>A</i>∣ = <i>m</i> and ∣<i>B</i>∣ = <i>n</i>, there are 2<sup><i>mn</i></sup> different relations from <i>A</i> to <i>B</i>.',
    see: ['cartesian-product', 'relation-notation', 'function']
  },
  {
    id: 'relation-notation', term: 'Relation notation', sym: '<i>x</i> <i>R</i> <i>y</i>', topic: 'Relations', lec: 1,
    def: '(<i>x</i>,<i>y</i>) ∈ <i>R</i> means “<i>x</i> is related to <i>y</i>”, usually written <i>x R y</i>. (<i>x</i>,<i>y</i>) ∉ <i>R</i> is its denial.',
    ex: 'For <i>R</i> = {(1,2),(1,3),(3,0)}: 1<i>R</i>2 is true, (5,6) ∉ <i>R</i>.',
    note: 'You already write relations this way. =, ≤, ⊆ and “divides” are relations — nobody writes (3,5) ∈ ≤, we write 3 ≤ 5, putting the symbol <i>between</i> the two things.',
    see: ['relation']
  },
  {
    id: 'arrow-diagram', term: 'Arrow diagram', sym: '', topic: 'Relations', lec: 1,
    def: 'A picture of a relation on a set: one node per element, an arrow from <i>x</i> to <i>y</i> whenever <i>x R y</i>.',
    ex: 'For <i>R</i> = {(1,3),(3,3),(5,2),(2,5),(4,2)}: 3 → 3 is a self-loop, and 2, 5 point both ways.',
    note: 'This is exactly a <b>directed graph</b>. An element in no pair is an isolated node.',
    see: ['matrix-rep', 'hasse']
  },
  {
    id: 'matrix-rep', term: 'Matrix representation', sym: '<i>M</i>[<i>i</i>,<i>j</i>] = 1 ⟺ (<i>i</i>,<i>j</i>) ∈ <i>R</i>', topic: 'Relations', lec: 1,
    def: 'A relation stored as a grid of 0s and 1s: entry (<i>i</i>,<i>j</i>) is 1 exactly when <i>i R j</i>.',
    ex: 'Row <i>i</i> lists everything <i>i</i> points to; column <i>j</i> lists everything pointing at <i>j</i>.',
    note: 'This is the <b>adjacency matrix</b> of the directed graph. Reflexive ⇒ the whole diagonal is 1; symmetric ⇒ the matrix equals its transpose.',
    see: ['arrow-diagram', 'reflexive', 'symmetric']
  },
  {
    id: 'inverse-relation', term: 'Inverse relation', sym: '<i>R</i><sup>−1</sup>', topic: 'Relations', lec: 1,
    def: 'The relation with every ordered pair reversed: <i>R</i><sup>−1</sup> = { (<i>y</i>,<i>x</i>) ∣ (<i>x</i>,<i>y</i>) ∈ <i>R</i> }.',
    ex: '<i>R</i> = {(1,5),(2,6),(3,7),(3,8)} ⟹ <i>R</i><sup>−1</sup> = {(5,1),(6,2),(7,3),(8,3)}.',
    note: 'The inverse of “is a parent of” is “is a child of”; the inverse of ≤ is ≥. In the matrix it is the transpose; in the arrow diagram it flips every arrow.',
    see: ['inverse-function', 'matrix-rep']
  },
  {
    id: 'reflexive', term: 'Reflexive', sym: '∀<i>a</i> ∈ <i>A</i>,&nbsp; <i>a R a</i>', topic: 'Relations', lec: 1,
    def: 'Every element relates to itself.',
    ex: '= and ≤ are reflexive on ℤ; &lt; is not.',
    note: 'In the matrix: the whole diagonal is 1.',
    see: ['symmetric', 'antisymmetric', 'transitive', 'equivalence-relation', 'partial-order']
  },
  {
    id: 'symmetric', term: 'Symmetric', sym: '<i>a R b</i> ⟹ <i>b R a</i>', topic: 'Relations', lec: 1,
    def: 'Whenever <i>a</i> relates to <i>b</i>, <i>b</i> relates back to <i>a</i>.',
    ex: '= is symmetric on ℤ; ≤ and “divides” are not.',
    note: 'Symmetry is a property you must <i>check</i>, not assume. In the matrix: the matrix equals its transpose.',
    see: ['antisymmetric', 'equivalence-relation']
  },
  {
    id: 'antisymmetric', term: 'Antisymmetric', sym: '(<i>a R b</i> ∧ <i>b R a</i>) ⟹ <i>a</i> = <i>b</i>', topic: 'Relations', lec: 1,
    def: 'The only way to have the relation hold both ways is for the two elements to be the same one.',
    ex: '≤ and ⊆ are antisymmetric; = is both symmetric and antisymmetric.',
    note: 'Antisymmetric is <b>not</b> “the opposite of symmetric”. A relation can be both (=), or neither.',
    see: ['symmetric', 'partial-order']
  },
  {
    id: 'transitive', term: 'Transitive', sym: '(<i>a R b</i> ∧ <i>b R c</i>) ⟹ <i>a R c</i>', topic: 'Relations', lec: 1,
    def: 'Relating in two steps means relating in one.',
    ex: '=, ≤, &lt; and “divides” are all transitive on ℤ.',
    note: '', see: ['reflexive', 'equivalence-relation', 'partial-order']
  },

  /* ---------------------------------------------- L2 · Equivalence -- */
  {
    id: 'equivalence-relation', term: 'Equivalence relation', sym: 'reflexive + symmetric + transitive', topic: 'Equivalence', lec: 2,
    def: 'A relation on <i>A</i> that is reflexive, symmetric and transitive. It says “alike in some respect” and gathers elements into groups.',
    ex: 'Equality on any set · congruence mod <i>n</i> on ℤ · “same absolute value” on ℤ · parallel lines.',
    note: 'Non-examples: ≤ and “divides” fail symmetry; &lt; fails reflexivity too. Those rank rather than group.',
    see: ['equivalence-class', 'partition', 'partial-order', 'congruence']
  },
  {
    id: 'congruence', term: 'Congruence modulo <i>n</i>', sym: '<i>a</i> ≡ <i>b</i> (mod <i>n</i>) ⟺ <i>n</i> ∣ (<i>a</i> − <i>b</i>)', topic: 'Equivalence', lec: 2,
    def: 'For a fixed integer <i>n</i> ≥ 1, <i>a</i> and <i>b</i> are congruent mod <i>n</i> when <i>n</i> divides <i>a</i> − <i>b</i> — equivalently, when they leave the <b>same remainder</b> on division by <i>n</i>.',
    ex: '17 ≡ 2 (mod 3) since 3 ∣ 15;&nbsp; −1 ≡ 2 (mod 3);&nbsp; 4 ≢ 0 (mod 3).',
    note: 'It is an equivalence relation: reflexive (<i>n</i> ∣ 0), symmetric, transitive (add two multiples of <i>n</i>).',
    see: ['equivalence-relation', 'equivalence-class', 'zn', 'divides']
  },
  {
    id: 'equivalence-class', term: 'Equivalence class', sym: '[<i>a</i>] = { <i>x</i> ∈ <i>A</i> ∣ <i>x R a</i> }', topic: 'Equivalence', lec: 2,
    def: 'For an equivalence relation <i>R</i> on <i>A</i>, the class of <i>a</i> is everything related to <i>a</i> — including <i>a</i> itself, since <i>R</i> is reflexive.',
    ex: 'Mod 3 on ℤ: [0] = {…,−3,0,3,…}, [1] = {…,−2,1,4,…}, [2] = {…,−1,2,5,…}.',
    note: 'A class has <b>many names</b>, one per member: [3] = [0] and [7] = [1]. Two classes are either identical or disjoint — never partly overlapping — and <i>x R y</i> ⟺ [<i>x</i>] = [<i>y</i>].',
    see: ['equivalence-relation', 'partition', 'zn']
  },
  {
    id: 'partition', term: 'Partition', sym: '', topic: 'Equivalence', lec: 2,
    def: 'A collection of <b>nonempty</b>, <b>pairwise disjoint</b> subsets (blocks) of <i>A</i> whose union is <b>all</b> of <i>A</i>.',
    ex: 'ℤ splits into the three classes of congruence mod 3.',
    note: '<b>The correspondence:</b> equivalence relations on <i>A</i> and partitions of <i>A</i> are the same information. The classes of an equivalence relation form a partition, and any partition defines “same block” as an equivalence relation.',
    see: ['equivalence-class', 'disjoint']
  },
  {
    id: 'zn', term: 'Integers modulo <i>n</i>', sym: 'ℤ<sub><i>n</i></sub> = {[0], [1], …, [<i>n</i>−1]}', topic: 'Equivalence', lec: 2,
    def: 'The <i>n</i> classes of congruence mod <i>n</i>, added and multiplied by representatives: [<i>a</i>] + [<i>b</i>] = [<i>a</i>+<i>b</i>] and [<i>a</i>]·[<i>b</i>] = [<i>ab</i>].',
    ex: 'Clock arithmetic, <i>n</i> = 12: [9] + [5] = [14] = [2],&nbsp; [7]·[4] = [28] = [4].',
    note: 'The answer does not depend on which representative you pick ([9] = [21], and 21 + 5 = 26 ≡ 2 too) — the operation is <b>well-defined on classes</b>.',
    see: ['congruence', 'equivalence-class']
  },

  /* --------------------------------------------------- L2 · Order -- */
  {
    id: 'partial-order', term: 'Partial order', sym: 'reflexive + antisymmetric + transitive', topic: 'Order', lec: 2,
    def: 'A relation on <i>A</i> that is reflexive, antisymmetric and transitive. It <i>ranks</i> rather than groups.',
    ex: '(ℝ, ≤) · (𝒫(<i>S</i>), ⊆) · (ℤ<sup>+</sup>, ∣) — the three to carry in your head.',
    note: 'Antisymmetry is what makes it an order and not an equivalence: it forbids two-way ties, so nothing loops back.',
    see: ['poset', 'total-order', 'equivalence-relation', 'antisymmetric']
  },
  {
    id: 'poset', term: 'Poset', sym: '(<i>A</i>, <i>R</i>)', topic: 'Order', lec: 2,
    def: 'A set together with a partial order on it — “partially ordered set”.',
    ex: '({1,2,3,4,6,12}, ∣) is a poset.',
    note: '', see: ['partial-order', 'hasse']
  },
  {
    id: 'comparable', term: 'Comparable · incomparable', sym: '<i>a R b</i> or <i>b R a</i>', topic: 'Order', lec: 2,
    def: 'Two elements are comparable if the order relates them in one direction or the other; otherwise they are incomparable.',
    ex: 'Under divisibility, 2 and 3 are incomparable. Under ⊆, {1} and {2} are incomparable.',
    note: '“Partial” is not a defect — it is honest. Prerequisites and build dependencies genuinely leave some pairs unordered.',
    see: ['total-order', 'partial-order']
  },
  {
    id: 'total-order', term: 'Total order (chain)', sym: '', topic: 'Order', lec: 2,
    def: 'A partial order in which <b>every</b> pair of elements is comparable.',
    ex: '(ℝ, ≤) is total — any two reals compare. (ℤ<sup>+</sup>, ∣) is not: 4 ∤ 6 and 6 ∤ 4.',
    note: '', see: ['comparable', 'partial-order']
  },
  {
    id: 'hasse', term: 'Hasse diagram', sym: '', topic: 'Order', lec: 2,
    def: 'A drawing of a poset: <i>a</i> sits <b>below</b> <i>b</i> when <i>a R b</i>, with an edge only for <b>direct</b> steps (covers).',
    ex: 'For ({1,2,3,4,6,12}, ∣): 1 at the bottom divides everything, 12 at the top, 2 and 3 side by side and incomparable.',
    note: 'Reflexive loops and transitive shortcuts are left implied, not drawn — that is why there is no edge from 1 to 12.',
    see: ['poset', 'arrow-diagram']
  },
  {
    id: 'minimal-maximal', term: 'Minimal · maximal · least · greatest', sym: '', topic: 'Order', lec: 2,
    def: '<i>m</i> is <b>minimal</b> if nothing is strictly below it, <b>maximal</b> if nothing is strictly above. A <b>least</b> (resp. <b>greatest</b>) element sits below (above) <i>everything</i>.',
    ex: 'In ({1,2,3,4,6,12}, ∣), 1 is least and 12 is greatest. In ({2,3,4,6}, ∣), both 2 and 3 are minimal — so there is no least element.',
    note: 'A partial order can have several minimal elements at once, which is exactly why “run these tasks first” can have more than one right answer.',
    see: ['poset', 'total-order']
  },
  {
    id: 'divides', term: 'Divides', sym: '<i>a</i> ∣ <i>b</i>', topic: 'Order', lec: 2,
    def: '<i>a</i> divides <i>b</i> when <i>b</i> = <i>ak</i> for some integer <i>k</i>. Written <i>a</i> ∤ <i>b</i> when it fails.',
    ex: '3 ∣ 15;&nbsp; 4 ∤ 6.',
    note: 'Divisibility is reflexive, antisymmetric (on ℤ<sup>+</sup>) and transitive — a partial order, not an equivalence, because it fails symmetry.',
    see: ['partial-order', 'congruence']
  },

  /* ----------------------------------------------- L2 · Functions -- */
  {
    id: 'function', term: 'Function', sym: '<i>f</i> : <i>A</i> → <i>B</i>', topic: 'Functions', lec: 2,
    def: 'A relation <i>f</i> ⊆ <i>A</i> × <i>B</i> in which <b>every</b> <i>a</i> ∈ <i>A</i> appears in <b>exactly one</b> pair. We write <i>f</i>(<i>a</i>) = <i>b</i> for that unique <i>b</i>.',
    ex: '<i>f</i> = {(1,2),(2,3),(3,3)} on {1,2,3} is a function. <i>g</i> = {(1,2),(1,4),(2,3)} is not — input 1 has two outputs. <i>h</i> = {(1,2),(2,3)} on {1,2,3} is not — input 3 has none.',
    note: 'Every input gets exactly one output. Two inputs may share an output, and some codomain values may go unused — but no input is left out, and none is sent to two places. Drawn: the <b>vertical line test</b>.',
    see: ['relation', 'domain', 'injective', 'surjective']
  },
  {
    id: 'domain', term: 'Domain · codomain · image', sym: 'im <i>f</i> = { <i>f</i>(<i>a</i>) ∣ <i>a</i> ∈ <i>A</i> } ⊆ <i>B</i>', topic: 'Functions', lec: 2,
    def: 'For <i>f</i> : <i>A</i> → <i>B</i>, the <b>domain</b> is <i>A</i>, the <b>codomain</b> is <i>B</i>, and the <b>image</b> (range) is what is actually hit.',
    ex: '<i>f</i> : ℝ → ℝ, <i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup>: domain ℝ, codomain ℝ, image [0, ∞).',
    note: 'The codomain is a <i>declared</i> target; the image is the <i>achieved</i> one. Always im <i>f</i> ⊆ <i>B</i>, and the gap between them is exactly what “surjective” measures.',
    see: ['function', 'surjective']
  },
  {
    id: 'injective', term: 'Injective (one-to-one)', sym: '<i>f</i>(<i>a</i>) = <i>f</i>(<i>a</i>′) ⟹ <i>a</i> = <i>a</i>′', topic: 'Functions', lec: 2,
    def: 'Different inputs give different outputs — no two arrows collide.',
    ex: '<i>f</i>(<i>x</i>) = 3<i>x</i> + 4 on ℝ is injective. <i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> on ℝ is not: <i>f</i>(2) = <i>f</i>(−2) = 4.',
    note: 'Never a property of the formula alone — it is the formula <i>together with</i> its domain and codomain. <i>x</i><sup>2</sup> is not injective on ℝ but is on [0, ∞).',
    see: ['surjective', 'bijective', 'domain']
  },
  {
    id: 'surjective', term: 'Surjective (onto)', sym: '∀<i>b</i> ∈ <i>B</i>, ∃<i>a</i> ∈ <i>A</i>, <i>f</i>(<i>a</i>) = <i>b</i>', topic: 'Functions', lec: 2,
    def: 'Every codomain value is hit — that is, im <i>f</i> = <i>B</i>.',
    ex: '<i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> as ℝ → ℝ is not onto (negatives unhit); as ℝ → [0, ∞) it is onto.',
    note: 'The codomain is what matters — change it and the answer changes. Note the shape: ∀ then ∃, and the order is not negotiable.',
    see: ['injective', 'bijective', 'domain', 'quantifier-order']
  },
  {
    id: 'bijective', term: 'Bijective', sym: 'injective + surjective', topic: 'Functions', lec: 2,
    def: 'Both injective and surjective — every codomain value is hit <b>exactly once</b>. A bijection is a perfect pairing of <i>A</i> with <i>B</i>.',
    ex: '<i>f</i>(<i>x</i>) = 3<i>x</i> + 4 as ℝ → ℝ · <i>f</i>(<i>n</i>) = <i>n</i> + 1 as ℤ → ℤ · <i>f</i>(<i>x</i>) = <i>x</i><sup>3</sup> as ℝ → ℝ.',
    note: 'For finite sets, a bijection <i>A</i> → <i>B</i> exists <b>iff</b> ∣<i>A</i>∣ = ∣<i>B</i>∣. “Counting a set” <i>means</i> building a bijection to {1,2,…,<i>n</i>}.',
    see: ['injective', 'surjective', 'inverse-function', 'countable']
  },
  {
    id: 'inverse-function', term: 'Inverse function', sym: '<i>f</i><sup>−1</sup>(<i>b</i>) = <i>a</i> ⟺ <i>f</i>(<i>a</i>) = <i>b</i>', topic: 'Functions', lec: 2,
    def: 'For a bijection <i>f</i> : <i>A</i> → <i>B</i>, the function <i>f</i><sup>−1</sup> : <i>B</i> → <i>A</i> sending each <i>b</i> back to the unique <i>a</i> with <i>f</i>(<i>a</i>) = <i>b</i>.',
    ex: '<i>f</i>(<i>x</i>) = 3<i>x</i> + 4 ⟹ <i>f</i><sup>−1</sup>(<i>y</i>) = (<i>y</i> − 4)/3.',
    note: '<b>Exactly the bijections are invertible.</b> Not injective? Some <i>b</i> has two pre-images and the inverse could not choose. Not surjective? Some <i>b</i> has none.',
    see: ['bijective', 'inverse-relation', 'composition']
  },
  {
    id: 'composition', term: 'Composition', sym: '(<i>g</i> ∘ <i>f</i>)(<i>x</i>) = <i>g</i>(<i>f</i>(<i>x</i>))', topic: 'Functions', lec: 2,
    def: 'For <i>f</i> : <i>A</i> → <i>B</i> and <i>g</i> : <i>B</i> → <i>C</i>, the composite <i>g</i> ∘ <i>f</i> : <i>A</i> → <i>C</i> — do <i>f</i> first, then <i>g</i>.',
    ex: '<i>f</i>(<i>x</i>) = <i>x</i> + 1, <i>g</i>(<i>x</i>) = <i>x</i><sup>2</sup>: (<i>g</i> ∘ <i>f</i>)(<i>x</i>) = (<i>x</i>+1)<sup>2</sup> but (<i>f</i> ∘ <i>g</i>)(<i>x</i>) = <i>x</i><sup>2</sup> + 1.',
    note: 'Order matters: <i>g</i> ∘ <i>f</i> ≠ <i>f</i> ∘ <i>g</i> in general. Composition <i>is</i> associative, and <i>f</i><sup>−1</sup> ∘ <i>f</i> = id<sub><i>A</i></sub> for a bijection.',
    see: ['identity-function', 'inverse-function']
  },
  {
    id: 'identity-function', term: 'Identity function', sym: 'id<sub><i>A</i></sub>(<i>x</i>) = <i>x</i>', topic: 'Functions', lec: 2,
    def: 'The function on <i>A</i> that returns its input unchanged. It is neutral for composition: <i>f</i> ∘ id<sub><i>A</i></sub> = <i>f</i> = id<sub><i>B</i></sub> ∘ <i>f</i>.',
    ex: 'For a bijection <i>f</i> : <i>A</i> → <i>B</i>, <i>f</i><sup>−1</sup> ∘ <i>f</i> = id<sub><i>A</i></sub>.',
    note: '', see: ['composition', 'inverse-function']
  },
  {
    id: 'countable', term: 'Countably infinite · countable', sym: '∣<i>A</i>∣ = ∣ℕ∣', topic: 'Functions', lec: 2,
    def: 'A set is <b>countably infinite</b> when there is a bijection ℕ → <i>A</i> — exactly the size of ℕ. It is <b>countable</b> when it is finite <i>or</i> countably infinite, and <b>uncountable</b> when it is infinite with no such bijection.',
    ex: 'ℕ, ℤ and ℚ are all countably infinite. <b>No</b> bijection ℕ → ℝ exists, so ℝ is uncountable — strictly larger.',
    note: 'Keep the two words apart: a finite set is countable but not countably infinite. One idea — <i>is there a bijection?</i> — reaches from counting a finite menu to proving there are different infinities.',
    see: ['bijective', 'cardinality']
  },

  /* ------------------------------------------------------- L3 · Logic -- */
  {
    id: 'statement', term: 'Statement', sym: '', topic: 'Logic', lec: 3,
    def: 'A sentence or mathematical expression that is definitely true or definitely false — not both, and not neither.',
    ex: '“The square of every real number is non-negative” (true) · “π ∈ ℚ” (false).<br>Not statements: “<i>x</i><sup>2</sup> = 4” (not until we say what <i>x</i> is) · “Add 3 to both sides” (not a statement at all) · “This sentence is false” (it can be <i>neither</i>).',
    note: 'Being a statement is about <b>form</b>, not about our knowledge. “There are aliens” is a perfectly good statement — true or false — and nobody alive knows which.',
    see: ['open-sentence', 'five-connectives']
  },
  {
    id: 'five-connectives', term: 'The five connectives', sym: '¬&nbsp; ∧&nbsp; ∨&nbsp; ⟹&nbsp; ⟺', topic: 'Logic', lec: 3,
    def: 'The whole vocabulary of propositional logic. Each takes statements and builds a new statement; only ¬ takes a single statement, the other four take two. Also called the <b>Boolean operations</b>, after Boole.',
    ex: '¬<i>P</i> true when <i>P</i> is false · <i>P</i> ∧ <i>Q</i> when both are true · <i>P</i> ∨ <i>Q</i> when at least one is · <i>P</i> ⟹ <i>Q</i> when <i>not</i> (<i>P</i> true and <i>Q</i> false) · <i>P</i> ⟺ <i>Q</i> when the two agree.',
    note: '“True exactly when …” is the <b>entire</b> meaning of a connective: a rule that reads the truth values of its parts and returns one. Nothing else about the statements matters — which is why a finite table pins each one down. They work the same way on an <b>open sentence</b>, one value of the variable at a time — which is what lets us write ¬(<i>x</i> &gt; 5) before we have quantifiers.',
    see: ['negation', 'conjunction', 'disjunction', 'conditional', 'biconditional', 'truth-table']
  },
  {
    id: 'open-sentence', term: 'Open sentence (predicate)', sym: '<i>P</i>(<i>x</i>)', topic: 'Logic', lec: 3,
    def: 'A sentence containing a <b>free</b> variable <i>x</i> from some set. It has no truth value of its own: give <i>x</i> a value, or bind it with a quantifier, and it becomes a statement.',
    ex: 'Over ℤ, <i>P</i>(<i>x</i>): “<i>x</i> is odd”. <i>P</i>(3) is true and <i>P</i>(4) is false, while <i>P</i>(<i>x</i>) by itself is neither. Two or more variables are allowed: over ℝ, <i>Q</i>(<i>x</i>,<i>y</i>): “<i>x</i> &lt; <i>y</i>”.',
    note: 'What makes it open is the <b>free variable</b>, not whether the answer varies. “<i>x</i><sup>2</sup> ≥ 0” over ℝ is true at every <i>x</i> and is still open — just as a constant function is still a function. The statement is ∀<i>x</i> ∈ ℝ, <i>x</i><sup>2</sup> ≥ 0.',
    see: ['statement', 'quantifiers']
  },
  {
    id: 'negation', term: 'Negation', sym: '¬<i>P</i>', topic: 'Logic', lec: 3,
    def: '¬<i>P</i> — “not <i>P</i>” — is true exactly when <i>P</i> is false, and false exactly when <i>P</i> is true. The only connective that takes a single statement.',
    ex: '¬(π ∈ ℚ) is true, and it is a hard theorem.<br>¬(<i>x</i> &gt; 5) is <i>x</i> ≤ 5 — <b>not</b> <i>x</i> &lt; 5.',
    note: 'English stacks negatives for emphasis where logic cancels them: “I didn’t say nothing” is meant to insist nothing was said; read as logic, the two negations cancel. ¬¬<i>P</i> is just <i>P</i>.',
    see: ['five-connectives', 'double-negation', 'de-morgan-logic']
  },
  {
    id: 'conjunction', term: 'Conjunction', sym: '<i>P</i> ∧ <i>Q</i>', topic: 'Logic', lec: 3,
    def: '<i>P</i> ∧ <i>Q</i> — “<i>P</i> and <i>Q</i>” — is true exactly when <b>both</b> are true, and false as soon as either one fails.',
    ex: '(2 is prime) ∧ (2 is even) — true, both halves hold.',
    note: 'One true row out of four: ∧ is the demanding one.',
    see: ['disjunction', 'five-connectives', 'de-morgan-logic']
  },
  {
    id: 'disjunction', term: 'Disjunction', sym: '<i>P</i> ∨ <i>Q</i>', topic: 'Logic', lec: 3,
    def: '<i>P</i> ∨ <i>Q</i> is true exactly when <b>at least one</b> of <i>P</i>, <i>Q</i> is true — <i>including</i> when both are.',
    ex: '“<i>x</i> is even or <i>x</i> is prime” is true at <i>x</i> = 2 — where both hold. That first row is the one that matters.',
    note: 'Everyday “or” is unreliable, which is why we pinned it down. “Free shipping over $50 <i>or</i> for members” — a member spending $70 still ships free, so inclusive. “Soup <i>or</i> salad” — pick one, exclusive. ∨ is inclusive <b>always</b>; the exclusive one gets its own symbol, ⊕.',
    see: ['conjunction', 'xor', 'five-connectives', 'de-morgan-logic']
  },
  {
    id: 'xor', term: 'Exclusive or', sym: '<i>P</i> ⊕ <i>Q</i>', topic: 'Logic', lec: 3,
    def: 'True when exactly one of <i>P</i>, <i>Q</i> holds — one but not both.',
    ex: 'The waiter’s “soup or salad, but not both” is (<i>P</i> ∨ <i>Q</i>) ∧ ¬(<i>P</i> ∧ <i>Q</i>) — built out of ∨, ∧ and ¬.',
    note: 'The set-theory version of the same idea is the symmetric difference <i>A</i> ⊕ <i>B</i>.',
    see: ['disjunction', 'symmetric-difference', 'truth-table']
  },
  {
    id: 'conditional', term: 'Conditional', sym: '<i>P</i> ⟹ <i>Q</i>', topic: 'Logic', lec: 3,
    def: '“If <i>P</i>, then <i>Q</i>” is <b>false</b> in exactly one case — <i>P</i> true and <i>Q</i> false — and true in the other three.',
    ex: '“If 71 is prime, then 3 ∤ 71” — both halves true, so true.<br>“If 71 is prime, then 3 ∣ 71” — false.<br>“If 0 = 1, then 2 &lt; 1000” — true.<br>“If 0 = 1, then 2 &gt; 1000” — both false, and <i>still true</i>.',
    note: 'One false row. That is the whole definition.',
    see: ['vacuous-truth', 'biconditional', 'contrapositive', 'necessary-sufficient', 'five-connectives']
  },
  {
    id: 'vacuous-truth', term: 'Vacuous truth', sym: '', topic: 'Logic', lec: 3,
    def: '<i>P</i> ⟹ <i>Q</i> is <b>vacuously true</b> when <i>P</i> is false. A conditional promises nothing once its hypothesis fails, so it holds whatever <i>Q</i> says.',
    ex: 'In a world as crazy as 0 = 1, anything can happen — “if 0 = 1, then 2 &gt; 1000” is true.<br>A parent says “if you clean your room, I’ll give you $5”. The promise is broken in exactly one row — room cleaned, no $5 — which is exactly the row where <i>C</i> ⟹ <i>M</i> is false. <b>Not cleaning the room does not break the promise</b>; it releases the parent, whether or not the $5 appears anyway.',
    note: 'Not a convention — it is forced. Any other choice makes true claims come out false: we need “∀<i>x</i> ∈ ℝ, <i>x</i> ≥ 2 ⟹ <i>x</i><sup>2</sup> ≥ 4” to be true, and the instance at <i>x</i> = 0 must not be allowed to break it.',
    see: ['conditional']
  },
  {
    id: 'necessary-sufficient', term: 'Necessary · sufficient · “only if”', sym: '', topic: 'Logic', lec: 3,
    def: 'Seven ways to say the same <i>P</i> ⟹ <i>Q</i>: “if <i>P</i>, then <i>Q</i>” · “<i>Q</i> if <i>P</i>” · “<i>Q</i> whenever <i>P</i>” · “<i>Q</i>, provided that <i>P</i>” · “<i>P</i> is <b>sufficient</b> for <i>Q</i>” · “<i>Q</i> is <b>necessary</b> for <i>P</i>” · “<i>P</i> <b>only if</b> <i>Q</i>”.',
    ex: 'With <i>P</i> = “<i>n</i> is divisible by 4” and <i>Q</i> = “<i>n</i> is even”: divisibility by 4 is <i>sufficient</i> for evenness, evenness is <i>necessary</i> for divisibility by 4, and <i>n</i> is divisible by 4 <i>only if</i> <i>n</i> is even.',
    note: '<b>“Only if” points forward.</b> The multiples of 4 sit <i>inside</i> the evens: you cannot be the first without being the second. It does not say the converse — and the converse is false, since 6 is even and not divisible by 4. Necessary is not sufficient.',
    see: ['conditional', 'converse']
  },
  {
    id: 'biconditional', term: 'Biconditional', sym: '<i>P</i> ⟺ <i>Q</i>', topic: 'Logic', lec: 3,
    def: 'True exactly when <i>P</i> and <i>Q</i> have the <b>same</b> truth value. Read “<i>P</i> if and only if <i>Q</i>”.',
    ex: '“<i>n</i> is even” ⟺ “<i>n</i> = 2<i>k</i> for some <i>k</i> ∈ ℤ”. Every definition is secretly a biconditional.',
    note: '<i>P</i> ⟺ <i>Q</i> is (<i>P</i> ⟹ <i>Q</i>) ∧ (<i>Q</i> ⟹ <i>P</i>) — which is why an iff-proof is <b>two</b> proofs, and skipping one direction skips half the theorem.',
    see: ['conditional', 'equivalences', 'five-connectives']
  },
  {
    id: 'truth-table', term: 'Truth table', sym: '2<sup><i>n</i></sup> rows for <i>n</i> statements', topic: 'Logic', lec: 3,
    def: 'A table listing every combination of truth values for the basic statements, with a <b>helper column</b> for each sub-expression. It settles the meaning of any propositional statement in finitely many rows.',
    ex: 'For (<i>P</i> ∨ <i>Q</i>) ∧ ¬(<i>P</i> ∧ <i>Q</i>): build <i>P</i> ∨ <i>Q</i>, then <i>P</i> ∧ <i>Q</i>, then ¬(<i>P</i> ∧ <i>Q</i>), then combine. Only the <i>shape</i> matters, so write it with <i>P</i> and <i>Q</i> rather than with soup and salad.',
    note: 'A complete <b>decision procedure</b> — and meaning reduced to finitely many rows is meaning a machine can check. Shannon saw in 1937 that Boole’s algebra <i>is</i> a circuit of switches: two in series pass current only if both are closed (∧), in parallel if at least one is (∨).',
    see: ['logical-equivalence', 'five-connectives', 'xor']
  },
  {
    id: 'logical-equivalence', term: 'Logical equivalence', sym: '<i>P</i> ≡ <i>Q</i>', topic: 'Logic', lec: 3,
    def: 'Two statements are logically equivalent when they have the same truth value in <b>every</b> row of the truth table — identical tables.',
    ex: '¬(¬<i>P</i>) ≡ <i>P</i>&nbsp;&nbsp;and&nbsp;&nbsp;(<i>P</i> ⟹ <i>Q</i>) ≡ (¬<i>P</i> ∨ <i>Q</i>) — the two to know by tonight.',
    note: 'Written ≡ rather than =, so that “equal” stays reserved for objects, not sentences. (Hammack writes =.)',
    see: ['equivalences', 'truth-table', 'de-morgan-logic']
  },
  {
    id: 'de-morgan-logic', term: 'De Morgan’s laws (logic)', sym: '¬(<i>P</i> ∧ <i>Q</i>) ≡ ¬<i>P</i> ∨ ¬<i>Q</i>', topic: 'Logic', lec: 3,
    def: 'Negation turns ∧ into ∨ and ∨ into ∧ — for any number of them, not just two. Also ¬(<i>P</i> ∨ <i>Q</i>) ≡ ¬<i>P</i> ∧ ¬<i>Q</i>.',
    ex: '“I don’t drink coffee <i>or</i> tea” — not <i>at least one</i> of them, but <i>neither</i>: ¬(<i>C</i> ∨ <i>T</i>) ≡ ¬<i>C</i> ∧ ¬<i>T</i>.<br>“Grades, sleep, a social life — you cannot have all three”: ¬(<i>G</i> ∧ <i>S</i> ∧ <i>L</i>) ≡ ¬<i>G</i> ∨ ¬<i>S</i> ∨ ¬<i>L</i> — at least one of the three is missing.',
    note: 'Notice what the second one does <i>not</i> tell you: something gives, but never which. And it is the <b>same law</b> as the set identity from Lecture 1 — “<i>x</i> ∈ <i>A</i> ∩ <i>B</i>” <i>is</i> “(<i>x</i> ∈ <i>A</i>) ∧ (<i>x</i> ∈ <i>B</i>)”. A third costume, ∀/∃, arrives in Part B.',
    see: ['de-morgan-sets', 'negating-quantifiers', 'equivalences']
  },
  {
    id: 'double-negation', term: 'Double negation', sym: '¬(¬<i>P</i>) ≡ <i>P</i>', topic: 'Logic', lec: 3,
    def: 'Negating twice returns the original statement.',
    ex: '',
    note: '', see: ['negation', 'equivalences']
  },
  {
    id: 'contrapositive', term: 'Contrapositive', sym: '¬<i>Q</i> ⟹ ¬<i>P</i>', topic: 'Logic', lec: 3,
    def: 'The contrapositive of <i>P</i> ⟹ <i>Q</i>. It is <b>logically equivalent</b> to the original.',
    ex: 'From “if <i>n</i> is divisible by 4, then <i>n</i> is even” (true): “if <i>n</i> is odd, then <i>n</i> is not divisible by 4” — also true.',
    note: 'A conditional is equivalent to its contrapositive and to nothing else here. That is a licence: prove ¬<i>Q</i> ⟹ ¬<i>P</i> whenever it is easier. It is the whole content of proof by contrapositive.',
    see: ['converse', 'inverse-conditional', 'conditional', 'two-pairs']
  },
  {
    id: 'converse', term: 'Converse', sym: '<i>Q</i> ⟹ <i>P</i>', topic: 'Logic', lec: 3,
    def: 'The conditional with hypothesis and conclusion swapped. A <b>different statement</b> — not equivalent to the original.',
    ex: 'From “if <i>n</i> is divisible by 4, then <i>n</i> is even” (true): “if <i>n</i> is even, then <i>n</i> is divisible by 4” — <b>false</b>, take <i>n</i> = 6.',
    note: 'Half the wrong proofs in a term are someone proving the converse and not noticing.',
    see: ['contrapositive', 'inverse-conditional', 'two-pairs', 'necessary-sufficient']
  },
  {
    id: 'inverse-conditional', term: 'Inverse (of a conditional)', sym: '¬<i>P</i> ⟹ ¬<i>Q</i>', topic: 'Logic', lec: 3,
    def: 'The conditional with both parts negated. Like the converse, not equivalent to the original.',
    ex: 'From “if <i>n</i> is divisible by 4, then <i>n</i> is even”: “if <i>n</i> is not divisible by 4, then <i>n</i> is odd” — <b>false</b>, and <i>n</i> = 6 again.',
    note: 'Do not confuse this with the inverse of a relation or of a function.',
    see: ['converse', 'contrapositive', 'two-pairs']
  },
  {
    id: 'two-pairs', term: 'Two pairs, not four statements', sym: '', topic: 'Logic', lec: 3,
    def: 'Of the conditional and its three rearrangements, only two are distinct: <i>P</i> ⟹ <i>Q</i> ≡ its contrapositive, and the converse ≡ the inverse.',
    ex: 'In the truth table, columns for <i>P</i> ⟹ <i>Q</i> and ¬<i>Q</i> ⟹ ¬<i>P</i> agree in every row; so do the columns for <i>Q</i> ⟹ <i>P</i> and ¬<i>P</i> ⟹ ¬<i>Q</i>.',
    note: 'Which is why one counterexample was always going to kill both of the false ones at once — <i>n</i> = 6 disposes of the converse and the inverse together.',
    see: ['contrapositive', 'converse', 'inverse-conditional']
  },
  {
    id: 'negated-conditional', term: 'Negated conditional', sym: '¬(<i>P</i> ⟹ <i>Q</i>) ≡ <i>P</i> ∧ ¬<i>Q</i>', topic: 'Logic', lec: 3,
    def: 'To deny “if <i>P</i> then <i>Q</i>” you must produce a case where <i>P</i> holds <b>and</b> <i>Q</i> fails.',
    ex: '<i>P</i> ⟹ <i>Q</i> is false in exactly one row, so its negation is true in exactly that row.',
    note: 'This is the shape a proof by contradiction assumes, and the shape a counterexample must have.',
    see: ['conditional', 'counterexample', 'equivalences']
  },
  {
    id: 'equivalences', term: 'The working equivalences', sym: '', topic: 'Logic', lec: 3,
    def: 'The legal moves — rewrite either side as the other, anywhere, unchanged meaning: double negation · De Morgan · conditional as “or” (<i>P</i> ⟹ <i>Q</i> ≡ ¬<i>P</i> ∨ <i>Q</i>) · contrapositive · negated conditional · biconditional as two conditionals · distributive · commutative.',
    ex: '<i>P</i> ∧ (<i>Q</i> ∨ <i>R</i>) ≡ (<i>P</i> ∧ <i>Q</i>) ∨ (<i>P</i> ∧ <i>R</i>),&nbsp;&nbsp; <i>P</i> ∨ (<i>Q</i> ∧ <i>R</i>) ≡ (<i>P</i> ∨ <i>Q</i>) ∧ (<i>P</i> ∨ <i>R</i>).',
    note: 'Nothing here is convention — verify any of them by writing both truth tables and comparing. Two moves are enough to unpack a sentence nobody can read by eye: ¬(<i>L</i> ⟹ (<i>U</i> ∨ ¬<i>A</i>)) ≡ <i>L</i> ∧ ¬<i>U</i> ∧ <i>A</i>.',
    see: ['logical-equivalence', 'de-morgan-logic', 'set-laws']
  },
  {
    id: 'validity', term: 'Valid vs. true', sym: '', topic: 'Logic', lec: 3,
    def: 'An argument can be checked by its <b>shape</b>, with the content stripped out. A <b>valid</b> argument combines its premises correctly; whether the conclusion is <b>true</b> also depends on whether the premises were.',
    ex: '“Circle <i>X</i> has radius 3” plus “a circle of radius <i>r</i> has area π<i>r</i><sup>2</sup>” gives “its area is 9π”. Had the radius really been 4, the conclusion would be false and the argument still valid.',
    note: 'Aristotle’s move, c. 350 BC: “all <i>A</i> are <i>B</i>; all <i>B</i> are <i>C</i>; therefore all <i>A</i> are <i>C</i>” is valid whatever <i>A</i>, <i>B</i>, <i>C</i> stand for — visibly valid <i>without knowing</i> what they stand for. A proof needs true premises <b>and</b> valid steps.',
    see: ['logical-equivalence', 'conditional']
  },

  /* ------------------------------------------------- L3 · Quantifiers -- */
  {
    id: 'quantifiers', term: 'Quantifiers', sym: '∀,&nbsp; ∃', topic: 'Quantifiers', lec: 3,
    def: '∀ stands for “for all”, “for every”, “for each”; ∃ for “there exists a”, “there is a”. ∀<i>x</i> ∈ <i>X</i>, <i>P</i>(<i>x</i>) says <i>P</i> holds at <b>every</b> <i>x</i> in <i>X</i>; ∃<i>x</i> ∈ <i>X</i>, <i>P</i>(<i>x</i>) says it holds at <b>at least one</b>.',
    ex: '∀<i>x</i> ∈ ℝ, ∃<i>y</i> ∈ ℝ, <i>y</i><sup>3</sup> = <i>x</i> — every real has a real cube root (true). ∃<i>n</i> ∈ ℤ, <i>n</i><sup>2</sup> = 2 (false).',
    note: '∀ is an infinitely long ∧; ∃ is an infinitely long ∨ — packed into finitely many symbols. <b>Always name the set:</b> “∃<i>x</i>, <i>x</i><sup>2</sup> = −1” is false over ℝ and true over ℂ — same sentence, different domain, opposite truth value. A quantifier without a domain is not yet a statement.',
    see: ['quantifier-order', 'negating-quantifiers', 'open-sentence']
  },
  {
    id: 'quantifier-order', term: 'Quantifier order', sym: '∀∃ ≠ ∃∀', topic: 'Quantifiers', lec: 3,
    def: 'A variable quantified <b>later</b> may depend on one quantified <b>earlier</b> — never the reverse. Reading left to right is reading the order of choice.',
    ex: '∀<i>x</i> ∈ ℝ, ∃<i>y</i> ∈ ℝ, <i>y</i><sup>3</sup> = <i>x</i> is <b>true</b> (take <i>y</i> = ∛<i>x</i>). ∃<i>y</i> ∈ ℝ, ∀<i>x</i> ∈ ℝ, <i>y</i><sup>3</sup> = <i>x</i> is <b>false</b> — it claims one number whose cube is every real at once.',
    note: 'Same three symbols, opposite truth values, only the order changed. “Surjective” is a ∀∃ definition — swap it and you have changed the definition.',
    see: ['quantifiers', 'surjective']
  },
  {
    id: 'negating-quantifiers', term: 'Negating a quantified statement', sym: '¬(∀<i>x</i>, <i>P</i>(<i>x</i>)) ≡ ∃<i>x</i>, ¬<i>P</i>(<i>x</i>)', topic: 'Quantifiers', lec: 3,
    def: 'Negation swaps the quantifiers: also ¬(∃<i>x</i> ∈ <i>X</i>, <i>P</i>(<i>x</i>)) ≡ ∀<i>x</i> ∈ <i>X</i>, ¬<i>P</i>(<i>x</i>).',
    ex: '<i>R</i>: ∀<i>x</i> ∈ ℝ, <i>x</i><sup>2</sup> ≥ 0. Then ¬<i>R</i>: ∃<i>x</i> ∈ ℝ, <i>x</i><sup>2</sup> &lt; 0.',
    note: '<b>De Morgan for the third time.</b> ∀ is a long ∧ and ∃ is a long ∨, so negation trades one for the other exactly as it does for ∧/∨ and for ∩/∪. One law, three costumes.',
    see: ['negating-mechanically', 'de-morgan-logic', 'de-morgan-sets']
  },
  {
    id: 'negating-mechanically', term: 'Negating, mechanically', sym: '', topic: 'Quantifiers', lec: 3,
    def: 'Push ¬ inward: every ∀ becomes ∃, every ∃ becomes ∀, the innermost predicate is negated last, and along the way ¬(<i>P</i> ⟹ <i>Q</i>) ≡ <i>P</i> ∧ ¬<i>Q</i>.',
    ex: '¬(∀<i>x</i> ∈ ℤ, (<i>x</i> odd) ⟹ (<i>x</i><sup>2</sup> odd)) ≡ ∃<i>x</i> ∈ ℤ, (<i>x</i> odd) ∧ (<i>x</i><sup>2</sup> even).',
    note: 'The negation of a ∀-statement is <b>one object, with its properties spelled out</b>. That is why disproving a claim means exhibiting a single counterexample — and it says in advance exactly what that counterexample must satisfy.',
    see: ['negating-quantifiers', 'counterexample', 'negated-conditional']
  },
  {
    id: 'counterexample', term: 'Counterexample', sym: '∃<i>x</i>, ¬<i>P</i>(<i>x</i>)', topic: 'Quantifiers', lec: 3,
    def: 'A single object witnessing that a ∀-statement fails. Producing one <i>is</i> the disproof.',
    ex: 'The negation of “every prime is odd” is “some prime is not odd” — and <i>p</i> = 2 supplies it.',
    note: 'The negation tells you in advance exactly what the counterexample must satisfy.',
    see: ['negating-mechanically', 'negating-quantifiers']
  }

];

/* VOCAB:END */

/* ---------------------------------------------------------------------------
   PARKED 2026-09-12, not deleted — mirrors the \iffalse block in lec3.tex.

   Part C (Inference) and the "A Warning about English" slide are parked in
   lec3.tex, so these seven terms are no longer taught in Lectures 1–3 and are
   out of both the dictionary and the card deck. The inference rules are
   expected to resurface in Week 3 where there are proofs to spend them on;
   when they do, move these into the array above with the right `lec` and a
   topic that exists in the TOPICS list of both HTML files.

   NOTE: "Valid vs. true" is NOT parked. Pei kept it and relocated it to the
   closing slide, so it lives in the array above under Logic.

   To restore: cut any of these back into the array and re-run `node sync.mjs`.
   --------------------------------------------------------------------------- */
/*
  {
    id: 'inference', term: 'Inference', sym: '', topic: 'Inference', lec: 3,
    def: 'A step producing a <b>new</b> statement from ones already accepted. (An equivalence only <i>rewrites</i> a statement.)',
    ex: '',
    note: '', see: ['validity', 'modus-ponens', 'logical-equivalence']
  },
  {
    id: 'modus-ponens', term: 'Modus ponens', sym: 'from <i>P</i> ⟹ <i>Q</i> and <i>P</i>, infer <i>Q</i>', topic: 'Inference', lec: 3,
    def: 'The basic inference rule: a conditional plus its hypothesis yields its conclusion.',
    ex: 'From “if <i>n</i> is divisible by 4 then <i>n</i> is even” and “<i>n</i> is divisible by 4”, conclude “<i>n</i> is even”.',
    note: '', see: ['modus-tollens', 'validity', 'affirming-consequent']
  },
  {
    id: 'modus-tollens', term: 'Modus tollens', sym: 'from <i>P</i> ⟹ <i>Q</i> and ¬<i>Q</i>, infer ¬<i>P</i>', topic: 'Inference', lec: 3,
    def: 'A conditional plus the denial of its conclusion yields the denial of its hypothesis.',
    ex: 'From “if <i>n</i> is divisible by 4 then <i>n</i> is even” and “<i>n</i> is not even”, conclude “<i>n</i> is not divisible by 4”.',
    note: 'It is the contrapositive in action: rewrite <i>P</i> ⟹ <i>Q</i> as ¬<i>Q</i> ⟹ ¬<i>P</i>, then fire modus ponens.',
    see: ['modus-ponens', 'contrapositive']
  },
  {
    id: 'other-rules', term: 'Elimination · conjunction · simplification · addition', sym: '', topic: 'Inference', lec: 3,
    def: '<b>Elimination:</b> from <i>P</i> ∨ <i>Q</i> and ¬<i>P</i>, infer <i>Q</i>. <b>Conjunction:</b> from <i>P</i> and <i>Q</i>, infer <i>P</i> ∧ <i>Q</i>. <b>Simplification:</b> from <i>P</i> ∧ <i>Q</i>, infer <i>P</i>. <b>Addition:</b> from <i>P</i>, infer <i>P</i> ∨ <i>Q</i>.',
    ex: '',
    note: 'Almost every rule is one equivalence plus modus ponens. The names are not worth memorising — the patterns are.',
    see: ['modus-ponens', 'modus-tollens']
  },
  {
    id: 'affirming-consequent', term: 'Affirming the consequent', sym: 'from <i>P</i> ⟹ <i>Q</i> and <i>Q</i>, conclude <i>P</i>', topic: 'Inference', lec: 3,
    def: '<b>Invalid.</b> This is the converse, not the original conditional.',
    ex: '“If it rained, the ground is wet. The ground is wet. Therefore it rained.” — the sprinkler was on.',
    note: 'Together with denying the antecedent, this is the same mistake: treating <i>P</i> ⟹ <i>Q</i> as if it were <i>P</i> ⟺ <i>Q</i>.',
    see: ['converse', 'denying-antecedent', 'modus-ponens']
  },
  {
    id: 'denying-antecedent', term: 'Denying the antecedent', sym: 'from <i>P</i> ⟹ <i>Q</i> and ¬<i>P</i>, conclude ¬<i>Q</i>', topic: 'Inference', lec: 3,
    def: '<b>Invalid.</b> This is the inverse, not the contrapositive.',
    ex: '“It did not rain, so the ground is dry.” — same sprinkler.',
    note: 'Of the three rearrangements of a conditional, the contrapositive is the only one you may use.',
    see: ['inverse-conditional', 'affirming-consequent', 'contrapositive']
  },
  {
    id: 'quantifier-english', term: '“All … not” vs. “not all …”', sym: '', topic: 'Quantifiers', lec: 3,
    def: 'Casual English lets the negation drift past the quantifier; mathematics does not, because their order <b>is</b> the meaning.',
    ex: '“All students do not pay full tuition” = ∀<i>x</i>, ¬<i>P</i>(<i>x</i>) — nobody pays. “Not all students pay full tuition” = ¬∀<i>x</i>, <i>P</i>(<i>x</i>) = ∃<i>x</i>, ¬<i>P</i>(<i>x</i>) — somebody doesn’t.',
    note: '“All integers are not even” literally says there are no even integers. When in doubt, write the symbols and read them back.',
    see: ['negating-quantifiers']
  },
*/
