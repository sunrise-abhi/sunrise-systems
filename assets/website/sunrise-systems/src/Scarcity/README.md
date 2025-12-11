# Scarcity System Setup Instructions

## Initial Setup

After deploying the scarcity system, you need to initialize it in the Payload admin panel:

1. **Access Admin Panel**: Navigate to `/admin` in your browser
2. **Go to Globals**: Click on "Scarcity" in the Globals section
3. **Configure Settings**:
   - Check "Enable Scarcity Display" to turn on the system
   - Set "Total Slots" (e.g., 10)
   - Set "Remaining Slots" (e.g., 3)
   - Optionally customize "Banner Text" and "CTA Tag Text"
4. **Click Save**

## Using Scarcity Tags in CTA Blocks

To display a scarcity tag on a specific Call to Action block:

1. Edit the page containing the CTA block
2. Find the CTA block you want to add scarcity to
3. Check the "Show Scarcity Tag" checkbox
4. Save the page

**Note**: The tag will only appear if:
- Scarcity is enabled globally (in the Scarcity global settings)
- "Show Scarcity Tag" is checked on the specific CTA block

## Customizing Text

You can customize the text displayed in both the banner and CTA tags using placeholders:

- `{remaining}` - Will be replaced with the remaining slots number
- `{total}` - Will be replaced with the total slots number

### Examples:

**Banner Text**: 
- `Only {remaining} spots left!`
- `Hurry! {remaining} of {total} slots available`

**CTA Tag Text**:
- `{remaining}/{total} slots available`
- `Limited time: {remaining} spots remaining`

## Troubleshooting

### Tag not appearing on CTA:
1. Verify scarcity is enabled in Globals → Scarcity
2. Check that "Show Scarcity Tag" is enabled on the specific CTA block
3. Clear your browser cache and refresh the page
4. Check server console logs for debug information

### Internal server error when saving:
1. Make sure you've run `pnpm payload generate:types` after updating the config
2. Restart your development server
3. Check that all required fields (totalSlots, remainingSlots) have valid values






