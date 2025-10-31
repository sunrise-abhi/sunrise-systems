#!/bin/bash

# Array of block component files to update
BLOCKS=(
  "TestimonialBlock"
  "StatementBlock"
  "FeatureGridBlock"
  "ProcessBlock"
  "CalendlyBlock"
  "CaseStudySummaryBlock"
  "ServiceSummaryBlock"
)

for block in "${BLOCKS[@]}"; do
  FILE="src/blocks/${block}/Component.tsx"
  
  if [ -f "$FILE" ]; then
    echo "Updating $FILE..."
    
    # Create temp file
    TEMP_FILE="${FILE}.tmp"
    
    # Check if file already has 'use client'
    if ! grep -q "'use client'" "$FILE"; then
      # Add 'use client' at the top and update imports
      awk '
        NR==1 {
          print "'\''use client'\''"
          print ""
        }
        /^import.*from '\''@\/components\/layout'\''/ {
          gsub(/}/, ", AnimatedSection }")
        }
        { print }
      ' "$FILE" > "$TEMP_FILE"
      
      mv "$TEMP_FILE" "$FILE"
      echo "  - Added 'use client' and updated imports"
    else
      echo "  - Already has 'use client', skipping"
    fi
  fi
done

echo "Done!"

