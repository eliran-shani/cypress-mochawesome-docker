#!/bin/bash

## Report Generation
OUTPUT_FOLDER=mochawesome-report
OUTPUT_JSON="${OUTPUT_FOLDER}"/output_merged.json

# Gives writing permissions to the output folder
chmod -R a+rwx "${OUTPUT_FOLDER}"

# Merge all json outputs
npx mochawesome-merge "${OUTPUT_FOLDER}"/*.json > "${OUTPUT_JSON}"

# Generate HTML from the merged json output
npx marge "${OUTPUT_JSON}" --reportDir "${OUTPUT_FOLDER}" --inline

# Open report
open "${OUTPUT_FOLDER}"/output_merged.html