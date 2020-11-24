#!/bin/bash

# Debug mode
set -x

# Clean Results (if exists)
sh ./scripts/reports/clean_results.bash

# Build Docker image
TAG_NAME="cypress_image"
docker build -t ${TAG_NAME} .

# Run test
docker run --rm --shm-size 1G \
-v "${PWD}":/e2e \
-w /e2e \
-e cypress_username="${1}" \
-e cypress_password="${2}" \
-e CYPRESS_KEY="${CYPRESS_KEY}" \
${TAG_NAME} "cy:sanity:prod:chrome:headless:record"

# Generate report
sh ./scripts/reports/generate_report.bash
