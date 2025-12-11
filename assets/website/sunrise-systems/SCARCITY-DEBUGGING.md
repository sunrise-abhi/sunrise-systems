# Scarcity System Debugging Guide

## Issue 1: CTA Tag Not Showing

### Step 1: Check Server Console Logs

After making the changes, restart your development server and look for debug logs that say:

```
[Scarcity] Data fetched: { enabled: ..., remainingSlots: ..., totalSlots: ... }
CTA Block - Server Side: { showScarcity: ..., hasScarcityData: ..., scarcityEnabled: ..., shouldShowScarcity: ... }
```

These logs will tell us:
- Whether scarcity data is being fetched from the database
- Whether the CTA block is receiving the data
- Whether both the global `enabled` flag and block `showScarcity` flag are true

### Step 2: Verify Database Setup

1. Go to `/admin` in your browser
2. Click on "Scarcity" in the Globals section
3. Check that:
   - ✅ "Enable Scarcity Display" is checked
   - ✅ "Total Slots" has a value (e.g., 10)
   - ✅ "Remaining Slots" has a value (e.g., 3)
4. Click "Save"

### Step 3: Verify CTA Block Configuration

1. Edit the page with your CTA block
2. Open the CTA block settings
3. **Important**: Look for a checkbox called "Show Scarcity Tag"
4. Make sure it's checked
5. Save the page

### Step 4: Clear Cache

After making changes:
1. Hard refresh your browser (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
2. Or restart your development server
3. Check the page again

## Issue 2: Internal Server Error When Saving Globals

### Solution 1: Initialize the Global in Database

If you're getting errors when trying to save the Scarcity global, it might not exist in the database yet. Run this command:

```bash
cd /Users/abhi/Cursor/sunrise-systems/assets/website/sunrise-systems
node init-scarcity.mjs
```

This will create the initial scarcity global record in your database.

### Solution 2: Restart Development Server

After running `pnpm payload generate:types`, always restart your dev server:

```bash
# Stop the server (Ctrl+C)
# Then restart it
pnpm dev
```

### Solution 3: Check Database Connection

Make sure your `DATABASE_URI` environment variable is set correctly in your `.env` file.

## Common Issues

### CTA Tag Still Not Showing After All Steps

**Check 1**: Verify the tag is actually being rendered
- Open browser developer tools
- Inspect the CTA section
- Look for a `<div>` with classes `bg-white text-[#FF6000] font-mono`
- If it's there but empty, the text replacement isn't working
- If it's not there at all, the condition checks are failing

**Check 2**: Console Logs
Look for these specific logs in your terminal:

```
[Scarcity] Data fetched: { enabled: true, ... }
CTA Block - Server Side: { showScarcity: true, hasScarcityData: true, scarcityEnabled: true, shouldShowScarcity: true }
```

If `shouldShowScarcity` is `false`, one of the conditions isn't met.

**Check 3**: Field Names
Make sure in your CTA block settings, the checkbox is called exactly "Show Scarcity Tag" (not something else).

### Banner Not Showing

The banner should appear at the very top of the page, above the header. If it's not showing:

1. Check that `enabled` is `true` in the Scarcity global
2. Look in browser dev tools for a `<div>` with class `bg-[#FF6000]` at the top of the `<body>`
3. Check console logs for `[Scarcity] Data fetched`

## Testing Checklist

- [ ] Run `pnpm payload generate:types`
- [ ] Restart development server
- [ ] Go to `/admin` → Globals → Scarcity
- [ ] Enable scarcity and set slot numbers
- [ ] Save the global (should not error)
- [ ] Edit a page with a CTA block
- [ ] Check "Show Scarcity Tag" on the CTA block
- [ ] Save the page
- [ ] View the page in browser
- [ ] Check server console for debug logs
- [ ] See banner at top of page (if enabled)
- [ ] See tag above CTA headline (if enabled on block)
- [ ] Verify text is uppercase and monospace
- [ ] Verify orange color (#FF6000) is used

## Still Not Working?

Share the console logs that start with `[Scarcity]` and `CTA Block - Server Side:` - they will help diagnose the issue.





