#!/bin/bash

# Clean mochawesome folder
REPORT_FOLDER=mochawesome-report
if [[ -d "${REPORT_FOLDER}" ]]
then
    rm -rfv "${REPORT_FOLDER}"
fi