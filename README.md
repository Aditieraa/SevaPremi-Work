# SevaPremi Internship Command Center

Project-management website for Aditi Talekar's SevaPremi internship coordination work.

## What It Tracks

- 500-hour progress for Aditi and every team member
- Daily task and time-log reports
- Editable member profiles, next steps, impact, and resource links
- Aditi's own work panel, calls, meetings, and reporting records
- Research ecosystem fields from the Excel workbook
- Solution repository and expert-verification status

## Run Locally

From this folder:

```powershell
& 'C:\Users\aditi\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe' -m http.server 4173 --bind 127.0.0.1
```

Then open:

```text
http://127.0.0.1:4173/index.html
```

## Supabase Setup

1. Open the Supabase SQL Editor for `https://sduajufbgitydrkrluob.supabase.co`.
2. Run everything in `supabase-schema.sql`.
3. Open the website. It will directly seed the Excel-based starting records and sync changes.

This setup intentionally has no login and no RLS. Anyone who has the website or publishable key can access and edit the Supabase tables, so use it only for non-private internship tracking data.
