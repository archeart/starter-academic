+++
title = "Courses"
date = 2026-03-08T00:00:00-04:00
draft = false
+++

<style>
  .courses-page {
    color: #1f2933;
  }

  .courses-intro {
    margin-bottom: 2rem;
    max-width: 46rem;
  }

  .courses-list {
    border-top: 1px solid rgba(0, 0, 0, 0.08);
    margin-top: 1.25rem;
  }

  .courses-row {
    align-items: start;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    display: grid;
    gap: 0.75rem 2rem;
    grid-template-columns: minmax(170px, 220px) minmax(0, 1fr);
    padding: 1.1rem 0;
  }

  .courses-label {
    color: #7a2e22;
    font-size: 0.86rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .courses-title {
    font-size: 1.08rem;
    font-weight: 600;
  }

  .courses-meta {
    color: #5c6773;
    margin-top: 0.15rem;
  }

  .courses-status {
    color: #7a2e22;
    font-size: 0.95rem;
    margin-top: 0.15rem;
  }

  @media (max-width: 768px) {
    .courses-row {
      grid-template-columns: 1fr;
      gap: 0.3rem;
    }
  }
</style>

<div class="courses-page">
  <div class="courses-intro">
    <p>This page collects course materials and related activities. Over time, it will include current and past course offerings, lecture notes, and the research reading group.</p>
  </div>
  <div class="courses-list">
  <div class="courses-row">
    <div class="courses-label">Course</div>
    <div>
      <div class="courses-title"><a href="/courses/cse-564/">CSE 565 Graduate Complexity (Spring 2026)</a></div>
      <div class="courses-meta">Syllabus, reading material, and lecture notes.</div>
    </div>
  </div>
  <div class="courses-row">
    <div class="courses-label">Reading Group</div>
    <div>
      <div class="courses-title"><a href="/reading-group/">Research Reading Group</a></div>
      <div class="courses-meta">Seminar-style reading discussions and shared references.</div>
    </div>
  </div>
  </div>
</div>
