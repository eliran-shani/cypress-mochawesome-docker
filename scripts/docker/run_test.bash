#!/bin/bash

# Debug mode
set -x

# Clean Results (if exists)
sh .scripts/reports/clean_results.bash

# Build Docker image
TAG_NAME="base_cypress_image"
docker build -t ${TAG_NAME} .

# Run test
docker run --rm --shm-size 1G \
-v "${PWD}":/e2e \
-w /e2e \
${TAG_NAME} cypress run test --spec "${1}"

# Generate report
sh ./scripts/reports/generate_report.bash