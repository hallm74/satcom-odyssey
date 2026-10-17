# Customer reviews page — prepared preview

Route: `/customer-reviews/`. Production canonical is `https://1satcom.com/customer-reviews/`.
The main navigation and Company footer link to it. The existing shared SmileBack
widget is embedded AFTER the five curated comments. It retains its existing
public widget app identifier; no API credentials are added to the website.

## Data and consent

The initial five comments come from the complete, user-authenticated SmileBack
API export observed October 17, 2026 at 16:20:59 UTC. The server/build-side import
copies only five fixed source IDs, quote, date, approved attribution and consent
boolean into `src/data/customer-reviews.json`. No raw 59/524-review export,
email, client secret, password or token is copied into the website.

The initial allowlist is CSAT 46611097 (Judge Amy McCartney) and NPS 527248
(Natalie Hurd), 527283 (Lisa Butler), 527320 (Ginger Rice), 552929 (Lori Wheat).
Judge Amy's display attribution is the user's correction: Judge Amy McCartney /
42nd Judicial District. Other attributions were corroborated with ConnectWise
source IDs and current company/contact names.

Run from the website checkout after a new complete, private API export:

```
node scripts/import-smileback-reviews.mjs /private/path/complete-export.json
node scripts/test-customer-reviews.mjs
npm run build
```

No authentication occurs in the importer or build. A partial/source-specific
export is refused. Literal consent true, nonblank comment, and known nondeleted
status are required. The cache is replaced atomically; absent/revoked/deleted or
emptied selected reviews disappear on the next import/build. NPS requires a full
snapshot because its API schema has no modification timestamp/deletion flag.
The static page does NOT poll SmileBack or automatically see future revocations.
Consent must be refreshed before publication and future reuse. Changing the
allowlist is deliberate; no auto-selection of additional comments is enabled.

Provider contract checked at https://app.smileback.io/api/docs/?format=openapi.
The CSAT and NPS boolean describes permission for marketing use of the COMMENT.
It does not separately establish full-name/title/company attribution permission
or authority to endorse an organization. The actual customer-facing consent
prompt was not accessible without new authenticated survey/account access and
was not guessed. Review attribution/publication permission before going live.
No stars, ratings, customer logos, altered quotes or review structured data added.

## Authentication / production status

Linux ConnectWise holds a private client pair after user-run setup. The completed
export was obtained by the user's one-shot authentication. Access/refresh tokens
were not retained. This delivery therefore uses an API-export SNAPSHOT, not live
or scheduled synchronization. The existing website is a static Astro build.

For the current five, the user-run Linux export -> private import -> reviewed
build/deploy workflow works without new persistent credentials or grants.
Unattended API refresh needs an explicitly approved supported token storage,
refresh/expiration handling and server-only build/deploy handoff (or a provider
supported equivalent). None is configured. Never put a native/SSO password into
Netlify build variables, website source, public JSON or browser scripts.

The user explicitly approved publication of the five testimonials and their
customer/organization attributions on the testimonials page. Production follows
the existing GitHub-main/Netlify workflow. No new credentials, grants, hosting
settings or schedule are configured.

## Sharing image

`public/assets/images/customer-reviews/judge-amy-og.jpg` is a purpose-designed
1200x630 landscape adaptation of the approved Judge Amy graphic. It retains the
authentic SatCom logo, full verbatim quote, Judge Amy McCartney / 42nd Judicial
District and SatCom & Computers | 318-256-1213 | 1satcom.com footer. The portrait
ad is not cropped. Existing BaseHead emits absolute OG/Twitter image URLs, image
alt text and width/height metadata. Image metadata does not assure platform cache
refresh; after deployment use the platform's normal sharing preview tools.

## Completed validation

Canonical Astro build passed (71 static routes). Cache fixtures verify strict
consent, five-source-ID allowlisting, minimal fields, deletion/revocation/absence
replacement and partial-export refusal. Isolated desktop/mobile browser checks
passed: HTTP200, five exact quotes, semantic blockquotes/attributions, one h1,
absolute canonical/OG metadata and no horizontal overflow at390px. Public
SmileBack assets and Typekit dependencies returned200; widget finished loading
and displayed beneath selected reviews. Headless QA used a separate profile and
did not touch the user Chrome audit session. The preexisting BBB footer seal
request was intentionally blocked during QA; its baseline was not changed.
