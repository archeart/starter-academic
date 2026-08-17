#!/usr/bin/env bash

set -euo pipefail

script_dir="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"
site_root="$(CDPATH= cd -- "$script_dir/.." && pwd)"
output_root="${1:-/tmp/academic-modern-production}"

"$site_root/bin/hugo" \
  --source "$site_root/modern" \
  --destination "$output_root" \
  --cleanDestinationDir

python3 "$script_dir/check-build.py" "$output_root"
