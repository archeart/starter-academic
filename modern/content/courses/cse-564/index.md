+++
title = "CSE 564: Complexity of Combinatorial Problems"
subtitle = "Complexity of Combinatorial Problems"
summary = "Graduate complexity course page with syllabus, reading material, and lecture notes."
description = "CSE 564 Complexity of Combinatorial Problems at Penn State: syllabus, reading material, and lecture notes from Spring 2026."
date = 2026-03-08T00:00:00-04:00
draft = false
type = "page"
layout = "course"
share = false
+++


<div class="course-shell">
  <section class="course-hero">
    <p class="course-kicker">Graduate Course</p>
    <h1 class="course-title">CSE 564</h1>
    <p class="course-subtitle">Complexity of combinatorial problems through the lens of intractability, randomness, interaction, and lower bounds.</p>
    <p class="course-meta"><strong>Prerequisite</strong> CMPSC 464 &nbsp;&middot;&nbsp; <strong>Assessment</strong> 30% attendance, 70% final project</p>
  </section>

  <section class="course-section">
    <h2>1. Course Description</h2>
    <p>This graduate course studies <strong>computational complexity</strong> from a modern viewpoint centered on <strong>intractability</strong>. Starting with hard problems such as satisfiability, the course asks how computational difficulty should be measured and how the power of computation changes once we add resources such as <strong>randomness, alternation, and interaction</strong>.</p>
    <p>Topics include complexity classes, randomized computation, interactive proofs, the theorem <em>IP = PSPACE</em>, probabilistically checkable proofs, hardness of approximation, and selected themes in circuit complexity. The exact emphasis can shift with the interests of the class and available time.</p>
    <div class="course-grid">
      <div class="course-card">
        <h3>What the course emphasizes</h3>
        <ul>
          <li>Foundational proof techniques in complexity theory</li>
          <li>Connections between randomness, interaction, and verification</li>
          <li>Modern examples of lower bounds and hardness phenomena</li>
        </ul>
      </div>
      <div class="course-card">
        <h3>Course format</h3>
        <ul>
          <li>Lecture-driven discussions</li>
          <li>Reading from textbook chapters and selected papers</li>
          <li>A final project based on independent reading</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="course-section">
    <h2>2. Reading Material</h2>
    <div class="course-grid">
      <div class="course-card">
        <h3>Primary text</h3>
        <p>[AB] Sanjeev Arora and Boaz Barak, <a href="https://theory.cs.princeton.edu/complexity/book.pdf"><em>Computational Complexity: A Modern Approach</em></a>.</p>
      </div>
      <div class="course-card">
        <h3>Additional references</h3>
        <ul>
          <li>[W] Avi Wigderson, <a href="https://www.math.ias.edu/files/mathandcomp.pdf"><em>Mathematics and Computation</em></a></li>
          <li>[O'D] Ryan O'Donnell, <a href="https://www.cs.cmu.edu/~odonnell/papers/Analysis-of-Boolean-Functions-by-Ryan-ODonnell.pdf"><em>Analysis of Boolean Functions</em></a></li>
          <li>[BS] Boaz Barak and David Steurer, <a href="https://www.sumofsquares.org/public/index.html">Proofs, beliefs, and algorithms through the lens of sum-of-squares</a></li>
        </ul>
      </div>
    </div>
  </section>

  <section class="course-section">
    <h2>3. Syllabus Table and Lecture Notes</h2>
    <p class="course-note">The schedule below is based on the current Canvas syllabus and is intended as a working plan.</p>
    <div class="course-table-wrap">
      <table class="course-table">
        <caption class="visually-hidden">CSE 564 Spring 2026 syllabus and lecture-note schedule</caption>
        <thead>
          <tr>
            <th>Date</th>
            <th>Topic</th>
            <th>Reading</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jan 13</td>
            <td>Review of Turing machines, diagonalization, time hierarchy theorem</td>
            <td>AB 1-3</td>
            <td></td>
          </tr>
          <tr>
            <td>Jan 15</td>
            <td>Ladner's theorem and the relativizing barrier</td>
            <td>AB 3</td>
            <td><a href="/files/teaching/S26/1.%20Diagonalization.pdf">Note</a></td>
          </tr>
          <tr>
            <td>Jan 20</td>
            <td>Polynomial hierarchy</td>
            <td>AB 5</td>
            <td><a href="/files/teaching/S26/2.%20Polynomial%20hierarchy.pdf">Note</a></td>
          </tr>
          <tr>
            <td>Jan 22</td>
            <td>Interactive proofs and graph non-isomorphism in IP</td>
            <td>AB 8</td>
            <td></td>
          </tr>
          <tr>
            <td>Jan 27</td>
            <td>AM[k] = AM, graph non-isomorphism in AM, and IP[k] subsets of AM[k+2]</td>
            <td>AB 8</td>
            <td><a href="/files/teaching/S26/3.%20Interative%20proofs.pdf">Note</a></td>
          </tr>
          <tr>
            <td>Jan 29</td>
            <td>Sum-check protocol</td>
            <td>AB 8</td>
            <td><a href="/files/teaching/S26/4.%20Sumcheck.pdf">Note</a></td>
          </tr>
          <tr>
            <td>Feb 3</td>
            <td>IP = PSPACE and counting classes</td>
            <td>AB 17</td>
            <td></td>
          </tr>
          <tr>
            <td>Feb 5</td>
            <td>Toda's theorem</td>
            <td>AB 17</td>
            <td><a href="/files/teaching/S26/5.%20Counting.pdf">Note</a></td>
          </tr>
          <tr>
            <td>Feb 10</td>
            <td>PCP and hardness of approximation</td>
            <td>AB 17, AB 22</td>
            <td></td>
          </tr>
          <tr>
            <td>Feb 12</td>
            <td>Hadamard-based PCP</td>
            <td>AB 22</td>
            <td><a href="/files/teaching/S26/6.%20Exp%20PCP.pdf">Note</a></td>
          </tr>
          <tr>
            <td>Feb 17</td>
            <td>Linearity test and combinatorial proof</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Feb 19</td>
            <td>Linearity test and Fourier-analytic proof</td>
            <td>O'D 1</td>
            <td><a href="/files/teaching/S26/7.%20Linearity%20test.pdf">Note</a></td>
          </tr>
          <tr>
            <td>Feb 24</td>
            <td>Polynomial-size PCP</td>
            <td></td>
            <td><a href="/files/teaching/S26/8.%20Poly-size%20PCP.pdf">Note</a></td>
          </tr>
          <tr>
            <td>Feb 26</td>
            <td>Low-degree test</td>
            <td><a href="https://www.wisdom.weizmann.ac.il/~oded/PDF/pt-low.pdf">Goldreich's note</a></td>
            <td><a href="/files/teaching/S26/9.%20Low-degree%20test.pdf">Note</a></td>
          </tr>
          <tr>
            <td>Mar 3</td>
            <td>Hastad's inapproximability result for MAX-3XOR</td>
            <td><a href="https://dl.acm.org/doi/10.1145/502090.502098">Hastad's paper</a></td>
            <td></td>
          </tr>
          <tr>
            <td>Mar 5</td>
            <td>MAX-3XOR inapproximability, continuation</td>
            <td></td>
            <td><a href="/files/teaching/S26/10.%20Inapproximability%20of%20MAX-3XOR.pdf">Note</a></td>
          </tr>
          <tr>
            <td>Mar 17</td>
            <td>Parallel repetition, part I</td>
            <td><a href="https://theoryofcomputing.org/articles/v005a008/">Holenstein's paper</a></td>
            <td></td>
          </tr>
          <tr>
            <td>Mar 19</td>
            <td>Parallel repetition, part II</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Mar 24</td>
            <td>Parallel repetition, part III</td>
            <td></td>
            <td><a href="/files/teaching/S26/11.%20Parallel%20repetition.pdf">Note</a></td>
          </tr>
          <tr>
            <td>Mar 26</td>
            <td>Goemans-Williamson algorithms</td>
            <td></td>
            <td><a href="/files/teaching/S26/12.%20GW.pdf">Note</a></td>
          </tr>
          <tr>
            <td>Mar 31</td>
            <td>Sum-of-Squares algorithms, intro</td>
            <td>[BS] Ch. 1.2. </td>
            <td></td>
          </tr>
          <tr>
            <td>Apr 2</td>
            <td>Degree-2 SoS algorithms and Grothendieck's inequality</td>
            <td>[BS] Ch. 2.3. </td>
            <td><a href="/files/teaching/S26/13.%20SoS%20and%20quadratic%20optimization.pdf">Note</a></td>
          </tr>
          <tr>
            <td>Apr 7</td>
            <td>Rounding global correlation</td>
            <td></td>
            <td><a href="/files/teaching/S26/14.%20rounding%20global%20correlation.pdf">Note</a></td>
          </tr>
          <tr>
            <td>Apr 9</td>
            <td>Sum-of-Squares lower bound, part I</td>
            <td>[BS] Ch. 3.2.</td>
            <td></td>
          </tr>
          <tr>
            <td>Apr 14</td>
            <td>Sum-of-Squares lower bound, part II</td>
            <td>[BS] Ch. 3.2.</td>
            <td></td>
          </tr>
          <tr>
            <td>Apr 16</td>
            <td>Unique games conjecture and max cut, part I</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Apr 21</td>
            <td>Unique games conjecture and max cut, part II</td>
            <td></td>
            <td><a href="/files/teaching/S26/16.%20UGC%20and%20max%20cut.pdf">Note</a></td>
          </tr>
          <tr>
            <td>Apr 23</td>
            <td>Invariance principle</td>
            <td></td>
            <td><a href="/files/teaching/S26/17.%20Invariance%20principle%20and%20MIS.pdf">Note</a></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="course-grid">
      <div class="course-card">
        <h3>Lecture Notes</h3>
        <ul>
          <li><a href="/files/teaching/S26/1.%20Diagonalization.pdf">Lecture 1: Diagonalization</a></li>
          <li><a href="/files/teaching/S26/2.%20Polynomial%20hierarchy.pdf">Lecture 2: Polynomial hierarchy</a></li>
          <li><a href="/files/teaching/S26/3.%20Interative%20proofs.pdf">Lecture 3: Interactive proofs</a></li>
          <li><a href="/files/teaching/S26/4.%20Sumcheck.pdf">Lecture 4: Sumcheck</a></li>
          <li><a href="/files/teaching/S26/5.%20Counting.pdf">Lecture 5: Counting</a></li>
          <li><a href="/files/teaching/S26/6.%20Exp%20PCP.pdf">Lecture 6: Exp PCP</a></li>
          <li><a href="/files/teaching/S26/7.%20Linearity%20test.pdf">Lecture 7: Linearity test</a></li>
          <li><a href="/files/teaching/S26/8.%20Poly-size%20PCP.pdf">Lecture 8: Poly-size PCP</a></li>
          <li><a href="/files/teaching/S26/9.%20Low-degree%20test.pdf">Lecture 9: Low-degree test</a></li>
          <li><a href="/files/teaching/S26/10.%20Inapproximability%20of%20MAX-3XOR.pdf">Lecture 10: Inapproximability of MAX-3XOR</a></li>
          <li><a href="/files/teaching/S26/11.%20Parallel%20repetition.pdf">Lecture 11: Parallel repetition</a></li>
          <li><a href="/files/teaching/S26/12.%20GW.pdf">Lecture 12: Goemans-Williamson algorithms</a></li>
          <li><a href="/files/teaching/S26/13.%20SoS%20and%20quadratic%20optimization.pdf">Lecture 13: SoS and quadratic optimization</a></li>
          <li><a href="/files/teaching/S26/14.%20rounding%20global%20correlation.pdf">Lecture 14: Rounding global correlation</a></li>
          <li><a href="/files/teaching/S26/16.%20UGC%20and%20max%20cut.pdf">Lecture 16: UGC and max cut</a></li>
          <li><a href="/files/teaching/S26/17.%20Invariance%20principle%20and%20MIS.pdf">Lecture 17: Invariance principle and MIS</a></li>
        </ul>
      </div>
      <div class="course-card">
        <h3>Project expectation</h3>
        <p>Students are expected to work toward a final reading-based project that synthesizes one theme from the course with an outside paper or set of notes.</p>
      </div>
    </div>
  </section>
</div>
