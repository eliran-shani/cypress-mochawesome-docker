#!/bin/bash

# Debug mode
set -x

# Clean Results (if exists)
sh ./scripts/reports/clean_results.bash

# Run sanity tests
yarn cy:sanity:prod:chrome:headless

# Generate report
sh ./scripts/reports/generate_report.bash
