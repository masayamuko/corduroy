#!/bin/bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
MODE="${1:-full}"

cd "$ROOT"

case "$MODE" in
  --quick|quick)
    echo "[blog-check] Running strict blog audit only..."
    npm run blog:audit:strict
    ;;
  --audit|audit)
    echo "[blog-check] Running full blog audit report..."
    npm run blog:audit
    ;;
  --full|full)
    echo "[blog-check] Running strict blog audit, build, and typecheck..."
    npm run blog:audit:strict
    npm run build
    npm run typecheck
    ;;
  *)
    echo "Usage: npm run blog:check [-- --quick|--audit|--full]"
    echo "  --quick  strict audit only"
    echo "  --audit  full audit report"
    echo "  --full   strict audit + build + typecheck"
    exit 2
    ;;
esac
