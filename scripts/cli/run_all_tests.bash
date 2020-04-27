#!/bin/bash

# Debug mode
set -x

# Clean Results (if exists)
sh clean_results.bash

# Run test
yarn run test

# Generate report
sh generate_report.bash