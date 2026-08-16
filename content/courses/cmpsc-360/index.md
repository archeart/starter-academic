+++
title = "CMPSC 360: Discrete Mathematics"
subtitle = "Fall 2026"
summary = "A public overview and tentative schedule for CMPSC 360."
date = 2026-08-16T00:00:00-04:00
draft = false
type = "page"
share = false
+++

<style>
  .dm-course {
    --dm-ink: #27324f;
    --dm-muted: #5a5a63;
    --dm-line: #d9dce6;
    color: #222;
    font-family: "Palatino Linotype", Palatino, Georgia, serif;
    font-size: 1.03rem;
    line-height: 1.68;
  }

  .dm-course section + section {
    margin-top: 3rem;
  }

  .dm-course h2 {
    color: var(--dm-ink);
    font-family: inherit;
    font-size: 1.55rem;
    margin: 0 0 1rem;
  }

  .dm-about {
    max-width: 52rem;
  }

  .dm-about p {
    margin: 0 0 1rem;
  }

  .dm-reference-list {
    display: grid;
    gap: 0.55rem;
    list-style: none;
    margin: 0;
    max-width: 52rem;
    padding: 0;
  }

  .dm-reference-list li {
    align-items: baseline;
    display: grid;
    gap: 0.75rem;
    grid-template-columns: 4rem minmax(0, 1fr);
  }

  .dm-reference-key {
    color: var(--dm-muted);
    font-size: 0.9rem;
    font-weight: 700;
  }

  .dm-reference-list a {
    color: var(--dm-ink);
    text-decoration-thickness: 1px;
    text-underline-offset: 0.16em;
  }

  .dm-reference-list a:hover,
  .dm-reference-list a:focus {
    color: #3b5ba5;
  }

  .dm-schedule-intro {
    color: var(--dm-muted);
    font-style: italic;
    margin: -0.35rem 0 1.35rem;
  }

  .dm-module {
    background: var(--module-bg);
    border-left: 5px solid var(--module-color);
    margin: 0 0 1.1rem;
    padding: 0.8rem 1rem 0.85rem;
  }

  .dm-module-header {
    align-items: baseline;
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem 0.55rem;
    margin-bottom: 0.25rem;
  }

  .dm-module h3 {
    color: var(--module-color);
    font-family: inherit;
    font-size: 1.15rem;
    font-weight: 700;
    margin: 0;
  }

  .dm-duration {
    color: #6b6f78;
    font-size: 0.92rem;
  }

  .dm-module p {
    color: #333;
    margin: 0;
  }

  .dm-game-list {
    display: grid;
    gap: 0.4rem;
    margin: 0.55rem 0 0;
    padding-left: 1.35rem;
  }

  .dm-game-list a {
    color: var(--dm-ink);
    font-weight: 700;
    text-decoration-color: #9a6514;
    text-decoration-thickness: 2px;
    text-underline-offset: 0.16em;
  }

  .dm-game-list a:hover,
  .dm-game-list a:focus {
    color: #9a6514;
  }

  .dm-lecture-label {
    color: var(--dm-muted);
    font-size: 0.88rem;
    font-weight: 400;
    margin-left: 0.5rem;
  }

  .dm-language {
    --module-bg: #eef1fb;
    --module-color: #3b5ba5;
  }

  .dm-proofs {
    --module-bg: #e6f3f0;
    --module-color: #2a7f72;
  }

  .dm-counting {
    --module-bg: #f9e9f0;
    --module-color: #b03a6e;
  }

  .dm-probability {
    --module-bg: #f9f0e4;
    --module-color: #c07a2b;
  }

  .dm-graphs {
    --module-bg: #e7f2f4;
    --module-color: #2c7b8c;
  }

  .dm-number-theory {
    --module-bg: #f0ecf8;
    --module-color: #6b4e9b;
  }

  .dm-review {
    --module-bg: #efefef;
    --module-color: #6e6e6e;
  }

  .dm-note {
    border-top: 1px solid var(--dm-line);
    color: var(--dm-muted);
    font-size: 0.86rem;
    margin-top: 1.5rem;
    padding-top: 0.9rem;
  }

  @media (max-width: 640px) {
    .dm-course {
      font-size: 0.98rem;
    }

    .dm-course section + section {
      margin-top: 2.3rem;
    }

    .dm-module {
      padding: 0.7rem 0.8rem 0.75rem;
    }

    .dm-reference-list li {
      gap: 0.15rem;
      grid-template-columns: 1fr;
    }
  }
</style>

<div class="dm-course">
<section class="dm-about">
<h2>About this course</h2>
<p>CMPSC 360 is an introduction to the mathematics that underpins computer science: the art of reasoning precisely about <em>discrete structures</em>&mdash;the finite, countable objects that computation is built from. The course has two aims. The first is to make you fluent in the language mathematicians and computer scientists use to state ideas exactly. The second is to give you the reasoning tools to establish when those ideas are true.</p>
<p>We begin by setting up that language&mdash;<strong>sets, logic, functions, and relations</strong>&mdash;and the core toolkit for establishing truth: <strong>proof techniques and mathematical induction</strong>. With the language and the toolkit in hand, we spend the rest of the term in four substantial modules where those tools are put to work: <strong>counting and combinatorics</strong>, <strong>probability</strong>, <strong>graph theory</strong>, and <strong>number theory</strong>. Each module revisits the language in a new setting, so the foundations are reinforced rather than left behind.</p>
<p>By the end of the course you should be able to translate informal statements into precise mathematical language, choose and carry out an appropriate proof strategy, count and reason about complex arrangements, model problems with graphs, and reason quantitatively about uncertainty. These are the habits of thought that later courses in algorithms, theory, and systems assume&mdash;and that make you a sharper problem-solver anywhere in computing.</p>
</section>

<section class="dm-references">
<h2>Reference books</h2>
<ul class="dm-reference-list">
<li><span class="dm-reference-key">[Asp]</span><span><a href="https://pld.cs.luc.edu/courses/163/spr20/aspnes.pdf" target="_blank" rel="noopener">Notes on Discrete Math</a></span></li>
<li><span class="dm-reference-key">[DMOI]</span><span><a href="https://discrete.openmathbooks.org/dmoi4.html" target="_blank" rel="noopener">Discrete Math: An Open Introduction, 4th ed.</a></span></li>
<li><span class="dm-reference-key">[Ham]</span><span><a href="https://richardhammack.github.io/BookOfProof/Main.pdf" target="_blank" rel="noopener">Book of Proof, 3rd ed.</a></span></li>
<li><span class="dm-reference-key">[LPV]</span><span><em>Discrete Mathematics: Elementary and Beyond</em>, Springer</span></li>
</ul>
</section>

<section class="dm-welcome-games">
<h2>Welcome games <span class="dm-lecture-label">Lecture 1</span></h2>
<ol class="dm-game-list">
<li><a href="/courses/cmpsc-360/games/knights-and-knaves/" target="_blank" rel="noopener">Game 1: Knights &amp; Knaves</a></li>
<li><a href="/courses/cmpsc-360/games/euler-tracer/" target="_blank" rel="noopener">Game 2: Trace It in One Stroke</a></li>
<li><a href="/courses/cmpsc-360/games/night-sky/" target="_blank" rel="noopener">Game 3: A Sky Full of Shapes</a></li>
</ol>
</section>

<section class="dm-schedule">
<h2>Tentative schedule</h2>
<p class="dm-schedule-intro">Fifteen weeks, organized as six modules. Weeks are approximate and subject to change.</p>

<div class="dm-module dm-language">
<div class="dm-module-header">
<h3>The Language</h3>
<span class="dm-duration">&middot; 2 weeks</span>
</div>
<p>Sets and set operations; propositional and predicate logic with quantifiers; functions (injective, surjective, bijective, composition, inverse); relations, equivalence relations, and partial orders.</p>
</div>

<div class="dm-module dm-proofs">
<div class="dm-module-header">
<h3>Proofs &amp; the Toolkit</h3>
<span class="dm-duration">&middot; 2 weeks</span>
</div>
<p>Reading and writing proofs; direct proof, contrapositive, contradiction, and proof by cases; reasoning with definitions and quantifiers; mathematical induction (weak and strong) and recurrences.</p>
</div>

<div class="dm-module dm-counting">
<div class="dm-module-header">
<h3>Counting &amp; Combinatorics</h3>
<span class="dm-duration">&middot; 3 weeks</span>
</div>
<p>The product and sum rules; permutations and combinations; the pigeonhole principle; the binomial theorem and combinatorial identities; inclusion&ndash;exclusion; solving recurrences.</p>
</div>

<div class="dm-module dm-probability">
<div class="dm-module-header">
<h3>Probability</h3>
<span class="dm-duration">&middot; 2 weeks</span>
</div>
<p>Discrete sample spaces and events; conditional probability and independence; the union bound; random variables and expectation; linearity of expectation and indicator variables; variance and basic concentration.</p>
</div>

<div class="dm-module dm-graphs">
<div class="dm-module-header">
<h3>Graph Theory</h3>
<span class="dm-duration">&middot; 3 weeks</span>
</div>
<p>Graphs, degree, and the handshake lemma; paths, cycles, connectivity, and isomorphism; trees and spanning trees; bipartite graphs and matchings; Eulerian and Hamiltonian paths; planarity and graph coloring.</p>
</div>

<div class="dm-module dm-number-theory">
<div class="dm-module-header">
<h3>Number Theory</h3>
<span class="dm-duration">&middot; 2 weeks</span>
</div>
<p>Divisibility, primes, and the division algorithm; modular arithmetic and congruences; the Euclidean algorithm and Bezout's identity; modular inverses and linear congruences; the Chinese Remainder Theorem and Fermat's little theorem.</p>
</div>

<div class="dm-module dm-review">
<div class="dm-module-header">
<h3>Synthesis &amp; Review</h3>
<span class="dm-duration">&middot; 1 week</span>
</div>
<p>Connections across the modules, and review.</p>
</div>

<p class="dm-note">This schedule is tentative and may be adjusted as the term progresses.</p>
</section>
</div>
