#!/usr/bin/env bash

set -u

site_url="${1:-http://127.0.0.1:1313}"
site_url="${site_url%/}"
scope="${2:-all}"
script_dir="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"
default_site_root="$(CDPATH= cd -- "$script_dir/.." && pwd)"
site_root="${3:-$default_site_root}"

home_routes=(
  "/"
  "/files/cv.pdf"
  "/files/research.pdf"
  "/files/dissertation.pdf"
)

all_routes=(
  "${home_routes[@]}"
  "/talks/"
  "/courses/"
  "/courses/cmpsc-360/"
  "/courses/cse-564/"
  "/reading-group/"
  "/files/argmax-dF.pdf"
  "/files/qprop.pdf"
  "/files/teaching/S26/1.%20Diagonalization.pdf"
  "/courses/cmpsc-360/games/euler-tracer/"
  "/courses/cmpsc-360/games/knights-and-knaves/"
  "/courses/cmpsc-360/games/night-sky/"
)

case "$scope" in
  home)
    routes=("${home_routes[@]}")
    ;;
  all)
    routes=("${all_routes[@]}")
    ;;
  *)
    printf 'Unknown verification scope: %s (expected "home" or "all")\n' "$scope"
    exit 2
    ;;
esac

failures=0

printf 'Checking %s\n' "$site_url"
for route in "${routes[@]}"; do
  status="$(curl --silent --output /dev/null --write-out '%{http_code}' "$site_url$route" || true)"
  if [[ "$status" == "200" ]]; then
    printf '  OK   %s\n' "$route"
  else
    printf '  FAIL %s (HTTP %s)\n' "$route" "${status:-000}"
    failures=$((failures + 1))
  fi
done

if [[ "$scope" == "home" ]]; then
  home_html="$(curl --silent "$site_url/" || true)"
  home_markers=(
    "Pei Wu"
    "Department of Computer Science and Engineering"
    "Biography"
    "Quantum proofs"
    "Query and communication complexity"
    "Sum-of-Squares optimization"
    "Selected publications"
    "Optimal Quantum de Finetti Theorems via Argmax Rounding"
    "Randomized and Quantum Lifting for One-Way Conservative NOF Model"
    "Coherence in Property Testing"
    "Dimension Independent Disentanglers from Unentanglement and Applications"
    "An Optimal “It Ain’t Over till It’s Over” Theorem"
    "Talk at IAS"
    "More papers, slides, and talks"
    "The Power of Unentangled Proofs with Non-negative Amplitudes"
    "Talk at Simons"
    "Black Cats, White Cats, and Schrödinger’s Cats"
    "Recent Results on Query Complexity"
    "Courses"
    "Contact"
  )

  for marker in "${home_markers[@]}"; do
    if [[ "$home_html" == *"$marker"* ]]; then
      printf '  OK   homepage content: %s\n' "$marker"
    else
      printf '  FAIL homepage content missing: %s\n' "$marker"
      failures=$((failures + 1))
    fi
  done

  if [[ "$home_html" == *"brand-mark"* ]]; then
    printf '  FAIL removed PW monogram is still present\n'
    failures=$((failures + 1))
  else
    printf '  OK   PW monogram removed from site header\n'
  fi

  if [[ "$home_html" == *"Let’s talk theory."* ]]; then
    printf '  FAIL old contact call-to-action is still present\n'
    failures=$((failures + 1))
  else
    printf '  OK   restrained contact heading is in use\n'
  fi

  if [[ "$home_html" == *"Email is the best way to reach me."* ]]; then
    printf '  FAIL removed contact sentence is still present\n'
    failures=$((failures + 1))
  else
    printf '  OK   contact sentence removed\n'
  fi

  if [[ "$home_html" == *"My research is broadly in complexity theory and related areas of"* ]]; then
    printf '  FAIL redundant research summary is still present\n'
    failures=$((failures + 1))
  else
    printf '  OK   redundant research summary removed\n'
  fi
fi

if [[ "$scope" == "all" ]]; then
  talks_html="$(curl --silent "$site_url/talks/" || true)"
  courses_html="$(curl --silent "$site_url/courses/" || true)"
  talk_markers=(
    "Black Cats, White Cats, and Schrödinger’s Cats"
    "Recent Results on Query Complexity"
  )

  for marker in "${talk_markers[@]}"; do
    if [[ "$talks_html" == *"$marker"* ]]; then
      printf '  OK   talk: %s\n' "$marker"
    else
      printf '  FAIL talk missing: %s\n' "$marker"
      failures=$((failures + 1))
    fi
  done

  if [[ "$courses_html" == *"CMPSC 464 Theory of Computation (Fall 2025)"* ]]; then
    printf '  OK   teaching history: CMPSC 464 Theory of Computation (Fall 2025)\n'
  else
    printf '  FAIL teaching history missing: CMPSC 464 Theory of Computation (Fall 2025)\n'
    failures=$((failures + 1))
  fi

  if [[ "$courses_html" == *"/courses/cmpsc-464/"* ]]; then
    printf '  FAIL CMPSC 464 should not link to a course page\n'
    failures=$((failures + 1))
  else
    printf '  OK   CMPSC 464 is listed without a course-page link\n'
  fi
fi

pdf_count="$(find "$site_root/static/files" -type f -iname '*.pdf' | wc -l | tr -d ' ')"
game_count="$(find "$site_root/static/courses/cmpsc-360/games" -mindepth 2 -maxdepth 2 -name index.html | wc -l | tr -d ' ')"

if [[ "$pdf_count" == "36" ]]; then
  printf '  OK   PDF inventory: %s\n' "$pdf_count"
else
  printf '  FAIL PDF inventory: expected 36, found %s\n' "$pdf_count"
  failures=$((failures + 1))
fi

if [[ "$game_count" == "3" ]]; then
  printf '  OK   course-game inventory: %s\n' "$game_count"
else
  printf '  FAIL course-game inventory: expected 3, found %s\n' "$game_count"
  failures=$((failures + 1))
fi

if (( failures > 0 )); then
  printf '\nVerification failed with %s problem(s).\n' "$failures"
  exit 1
fi

printf '\nAll baseline checks passed.\n'
