#!/bin/bash

# Debug mode
set -x

# Clean Results (if exists)
sh ./scripts/reports/clean_results.bash

# Run test
yarn run test --spec "${1}"

# Generate report
sh ./scripts/reports/generate_report.bash
