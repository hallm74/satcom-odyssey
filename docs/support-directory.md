# Trusted support directory

The `/trusted-support` route is a U.S. client resource inside the existing SatCom Astro site. The first eight companies were researched on August 31, 2026. No calls were placed. This is a manually curated directory, not an automated guarantee that a number still works.

## Content and evidence

Edit `src/data/support-directory.ts`. Each phone has a purpose, a scope note, and the company-owned source that publishes it. The page renders those sources and the company’s manual review date. Never update a review date merely because the site rebuilt or a URL returned HTTP 200.

- Apple: official country-specific support directory.
- Dell: U.S. consumer in-home hardware service agreement, October 2023 edition, page 1. The public device-identification page is the fallback for other coverage. The agreement’s age is why the number is labeled narrowly.
- HP: U.S. Care Pack FAQ, consumer service-support section. This does not establish a universal printer, scanner, or business-support number. Direct other products to HP’s support portal.
- Intuit: official support page, Account Support section. Do not relabel its account-support line as QuickBooks technical support. Intuit’s product selector is the starting point for product-specific help.
- Intuit remote-access warning: reviewed August 31, 2026 against [Intuit’s screen-sharing guide](https://quickbooks.intuit.com/learn-support/en-us/help-article/remote-access/use-smartlook-share-screen-support-agents/L9qN7BuTP_US_en_US), updated August 4, 2026. It describes in-app sharing and Intuit Meeting. Opening `https://glance.intuit.com/` redirects to `https://meet.app.intuit.com/download?groupid=20113`. Do not publish “Glance only” or treat the software name as proof of legitimacy. Advise clients to independently verify other remote-tool requests through QuickBooks support before installing or granting access.
- Sage: publisher-authored Sage 50 support article, solution 220924450010495. The article separates inbound technical support from sales. Do not substitute Sage’s sales/contact-us number.
- Optimum: residential and business contact pages. The listed numbers serve the pages’ “all other areas” region, including Louisiana. Northeast regions and Hendersonville/West Jefferson, NC require their own contacts. Mobile is separate. The residential page contains conflicting duplicate North Carolina entries, so this directory links to the regional page instead of reproducing those numbers.
- Pelican Broadband: official support page explicitly lists the dedicated 24/7 technical-support line. It differs from office and pay-by-phone numbers.
- AT&T: official support homepage, separate wireless and internet/home-phone entries. Other services go through the service selector. Hours are not copied because the homepage and service-specific pages differ.

## Adding or reviewing entries

1. Read a company-owned support page or publisher-authored documentation. A forum post, search ad, third-party directory, or search snippet alone is insufficient. A company's forum hostname does not make user-submitted content official.
2. Confirm the exact digits, country, product, customer type, and any regional limits. Distinguish sales, account help, billing, and technical support.
3. Keep a source link for every number. Prefer a direct support page to an old PDF where available. If a number cannot be verified, remove the call link and direct clients to the official support portal until reviewed.
4. Set `checkedOn` only after a human/content review of every contact for that company. Use ISO dates. Review periodically (suggested: every 90 days) and promptly after a correction; no recurring automation is configured.
5. Build with `npm run build`. Check search by company/product, combined category/search, zero results, reset, company anchors, mobile layout, and print. Printing intentionally includes every company even if search filters are active.

The safety advice links to the FTC’s tech-support scam guidance. Correction links open the user's mail client; there is no submission backend, advertising, or sponsored placement added by this feature. Existing site analytics are unchanged.
