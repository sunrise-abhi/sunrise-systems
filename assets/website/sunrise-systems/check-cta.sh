#!/bin/bash
echo "Checking MongoDB for CTA blocks with showScarcity..."
echo ""
echo "Please run this MongoDB query in your database:"
echo ""
echo 'db.pages.find({}, { title: 1, slug: 1, "layout.blockType": 1, "layout.showScarcity": 1, "layout.headline": 1 }).pretty()'
echo ""
echo "Or use Payload admin to check: Go to any page > Edit CTA block > Check the showScarcity field value"
