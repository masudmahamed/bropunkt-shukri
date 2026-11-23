# Bropunkt.no - Product Requirements Document

## Original Problem Statement
Migrering av Bropunkt.no-prosjekt fra en annen Emergent-konto. Sette opp nettsiden som den er med alle sider og funksjoner.

## Architecture
- **Frontend**: React 19, TailwindCSS, Shadcn/UI, Poppins font, Craco build
- **Backend**: FastAPI, Motor (MongoDB), Resend e-post
- **Database**: MongoDB (contact_messages collection)

## Implemented Pages (April 2026)
1. **Hjem** (/) - Hero, kompetanse, tjenester, "Slik jobber vi", CTA
2. **Om oss** (/om-oss) - Hvem vi er, hvem vi hjelper, hvordan vi jobber, verdier
3. **Tjenester** (/tjenester) - 6 tjenester med detaljer og CTA-knapper
4. **Bropunkt Ungdom** (/ungdom) - Gruppeprogram, temaer, hvem det passer for
5. **For foreldre** (/foreldre) - Utfordringer, tilbud, hvordan vi hjelper
6. **Samarbeid** (/samarbeid) - Partnere, bidrag, eksempler
7. **Kontakt** (/kontakt) - Kontaktskjema, info, "Vi svarer innen 24 timer"

## Core Features
- 7-siders nettside med responsiv navigasjon
- Kontaktskjema med MongoDB-lagring
- Resend e-postintegrasjon for varsling
- SEO-optimalisering med meta-tags, Open Graph, JSON-LD
- Scroll-animasjoner og hover-effekter
- Mobilvennlig design med hamburger-meny

## Contact Form Status
- Skjema fungerer og lagrer meldinger i database
- Resend e-post konfigurert med API-nøkkel

## Contact Info
- Telefon: 915 25 200
- E-post: kontakt@bropunkt.no
- Lokasjon: Oslo, Norge
- Åpningstider: Man-Fre 09:00-17:00

## What's Been Implemented (April 2026)
- [x] Fullstendig migrering av alle 7 sider
- [x] Backend API med kontaktskjema-endepunkter
- [x] Resend e-postintegrasjon
- [x] MongoDB-tilkobling og datalagring
- [x] Alle tester bestått (100% backend, 100% frontend)

## Prioritized Backlog

### P0 (Kritisk) - FERDIG
- [x] Grunnleggende nettside-struktur (alle 7 sider)
- [x] Kontaktskjema som fungerer
- [x] SEO-optimalisering

### P1 (Høy prioritet)
- [ ] Google Analytics integrasjon
- [ ] Cookie-samtykke banner

### P2 (Medium prioritet)
- [ ] Blogg/Artikler-seksjon
- [ ] FAQ-side
- [ ] Personvernerklæring-side

## Next Tasks
1. Vurder Google Analytics for besøksstatistikk
2. Legg til personvernerklæring
3. Vurder blogg/artikler for SEO
