# Privacy Policy — Xync Agent Setter

_Last updated: 2026-06-29_

Xync Agent Setter ("the Extension") is for Xync partners who want to grant the
Xync bot temporary, authorized control of their own cryptocurrency exchange account
(currently Bybit and HTX), so the bot can operate it on their behalf for a limited
time. This policy explains what data the Extension handles and why.

## What the Extension does

The Extension acts only when you click its toolbar button while signed in to a
supported exchange. On that click it reads the data needed to authenticate you to
Xync and submits it to the Xync backend. It does nothing else in the background
beyond detecting which exchange tab is active and, on HTX, capturing the signed
profile request that your own browser makes (see Permissions below).

## Data we process

When you click the button, for the exchange you are signed in to, the Extension
reads and transmits:

- **Session authentication data** — Bybit: the `secure-token` and `deviceId`
  cookies. HTX: the `HB_SSO` cookie and the per-session `Vtoken` request header
  that HTX uses to sign its OTC API calls.
- **Profile data returned by the exchange** — your user ID and, depending on the
  exchange, your real name, nickname, email address and KYC country code.
- **API credentials you choose to enter** — if Xync reports it still needs them,
  the Extension shows fields for your API key, API secret and 2FA secret. These
  are included only when you type them in.

## How the data is used

All of the above is sent in a single HTTPS request to
`https://api.xync.net/public/set-agent` for the sole purpose of establishing and
maintaining your agent relationship on Xync. The Extension uses the data for no
other purpose.

## What we do NOT do

- We do not sell or rent your data to anyone.
- We do not use or transfer your data for advertising, profiling, creditworthiness
  or lending.
- We do not transfer your data to any third party other than the Xync backend you
  are connecting to.
- We do not collect browsing history. The Extension is inert on every site other
  than the supported exchanges.

## Storage and retention

The Extension keeps the captured HTX request data only in `chrome.storage.session`,
which lives in memory and is cleared when the browser closes. The Extension stores
nothing else on your device and keeps no logs of its own. Data received by the Xync
backend is handled under the Xync platform's own terms and privacy policy.

## Permissions and why we need them

- **Host access to the exchanges / `activeTab`** — to read the active tab and the
  cookies needed to authenticate you.
- **`cookies`** — to read the session cookies listed above.
- **`webRequest`** — read-only, to capture the `Vtoken` signing header from HTX's
  own request to its profile API. The Extension never blocks or modifies any request.
- **`storage`** — to hold the captured HTX request in memory between page load and
  your click.

## Contact

Questions about this policy: **support@xync.net**

## Changes

We may update this policy; material changes are reflected by the "Last updated"
date above.
