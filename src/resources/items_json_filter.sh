#!/bin/bash

# Check for input and output arguments
if [ $# -ne 2 ]; then
    echo "Usage: $0 input.json output.json"
    exit 1
fi

INPUT_FILE="$1"
OUTPUT_FILE="$2"

# Check for jq
if ! command -v jq &> /dev/null; then
    echo "Error: jq is not installed. Please install jq to use this script."
    exit 1
fi

# Extract and write to output file
jq '[.[] | { "EN-US": .LocalizedNames["EN-US"], "UniqueName": .UniqueName }]' "$INPUT_FILE" > "$OUTPUT_FILE"

echo "Filtered JSON written to $OUTPUT_FILE"