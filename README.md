# Clinician Mobile App

The **Clinician Mobile App** is the Expo/React Native application for healthcare clinicians. It provides clinicians with mobile access to core clinical workflows, including patient charts, queues, orders, results, and televisits.

This project is owned and maintained by **Opeyemi Opj — Clinician App Lead**, with shared mobile/platform support from **Chidera Aniude**.

---

## Role & Ownership

### Opeyemi Opj — Clinician App Lead

**Primary responsibility:** Expo clinician mobile application.

I own the clinician-facing mobile experience and am responsible for delivering mobile parity with the clinician web application where applicable.

### Core areas owned

* Clinician authentication and session experience
* Clinician dashboard
* Patient chart
* Patient queue
* Orders
* Results
* Televisit
* Mobile navigation
* Mobile-specific UX
* Thumb-zone interactions
* Gesture-based interactions
* Responsive mobile layouts
* Loading, empty, error, and offline states
* Integration of clinician workflows with the API
* Mobile implementation of approved design-system patterns

---

# Product Scope

The clinician application focuses on the workflows a clinician needs while working away from a desktop.

The primary clinical areas are:

```text
Authentication
      ↓
Clinician Dashboard
      ↓
Patient Queue
      ↓
Patient Chart
      ↓
Orders
      ↓
Results
      ↓
Televisit
```

The mobile application should make these workflows fast, clear, accessible, and usable on a phone.

---

# Main Features

## 1. Authentication

The app will provide secure clinician authentication.

Planned capabilities include:

* Sign in
* Sign up where applicable
* Session management
* Logout
* Authentication state
* Token/session handling
* Protected clinician routes
* Authentication error handling
* Loading states
* Session expiration handling

Authentication must integrate with the project's approved authentication and security architecture.

> Authentication and authorization must not be implemented only on the client. The backend remains responsible for enforcing access control.

---

# 2. Clinician Dashboard

The dashboard provides clinicians with a quick overview of their current work.

Potential dashboard information includes:

* Current queue
* Patients requiring attention
* Pending orders
* New results
* Upcoming televisits
* Relevant notifications
* Important clinical actions

The dashboard should prioritize information that clinicians need immediately.

---

# 3. Patient Queue

The queue allows clinicians to see and manage patients waiting for clinical attention.

The mobile queue should support:

* Patient list
* Queue status
* Patient priority
* Waiting information
* Queue actions
* Patient selection
* Refreshing queue data
* Loading states
* Empty queue state
* Error state

The interface should be optimized for quick interaction with one hand.

---

# 4. Patient Chart

The patient chart is one of the primary clinical workflows.

The mobile implementation should provide appropriate access to relevant patient information, such as:

* Patient demographics
* Clinical information
* Encounters
* Relevant history
* Orders
* Results
* Other approved clinical information

The mobile experience should prioritize important information while avoiding unnecessary complexity.

---

# 5. Orders

Clinicians should be able to access and interact with clinical orders according to the permissions and workflows defined by the backend.

The mobile implementation may include:

* Viewing orders
* Creating orders where supported
* Order status
* Order details
* Order history
* Appropriate validation
* Loading states
* Error handling

---

# 6. Results

The results workflow allows clinicians to review available clinical results.

The application should support:

* Results list
* Result details
* Result status
* Relevant patient context
* Loading states
* Empty states
* Error handling

Results should be presented clearly so clinicians can quickly understand the information available to them.

---

# 7. Televisit

The clinician application will support the clinician side of televisit workflows.

The implementation may include:

* Upcoming televisits
* Televisit details
* Joining a consultation
* Patient context
* Call/session state
* Connection state
* Appropriate error handling

Televisit functionality must follow the project's approved security and privacy requirements.

---

# Mobile UX Principles

The clinician application is designed specifically for mobile use rather than simply shrinking the web application.

## Thumb-zone UX

Important actions should be positioned where they can comfortably be reached with one hand.

Examples include:

* Primary actions
* Navigation
* Queue actions
* Patient selection
* Common clinical actions

---

## Gesture UX

Where appropriate, the application may use gestures to make common workflows faster.

Examples:

* Swipe interactions
* Pull-to-refresh
* Bottom sheets
* Gesture-based navigation
* Long press where appropriate

Gestures should never make essential functionality inaccessible or confusing.

---

# Technology

The clinician application uses:

* **React Native**
* **Expo**
* **Expo Router**
* **TypeScript**
* **React Native StyleSheet**
* REST/API integration with the project's backend
* Shared mobile components provided by the mobile platform layer

The application should follow the project's approved versions and dependency constraints.

---

# Project Structure

The mobile application is organized around Expo Router and feature responsibilities.

A starting structure:

```text
clinician-app/
│
├── app/
│   ├── _layout.tsx
│   │
│   ├── (auth)/
│   │   ├── index.tsx
│   │   ├── signup.tsx
│   │   └── forgot-password.tsx
│   │
│   └── (clinician)/
│       ├── dashboard.tsx
│       ├── queue.tsx
│       ├── orders.tsx
│       ├── results.tsx
│       └── televisit.tsx
│
├── components/
│   ├── ui/
│   └── clinician/
│
├── services/
│   ├── api.ts
│   └── auth.ts
│
├── context/
│   └── AuthContext.tsx
│
├── constants/
│   ├── colors.ts
│   ├── spacing.ts
│   └── typography.ts
│
├── types/
│
├── utils/
│
├── assets/
│
├── package.json
└── tsconfig.json
```

This structure can evolve as the application grows.

---

# Navigation

Expo Router is used for application navigation.

The application entry point is:

```json
"main": "expo-router/entry"
```

The root navigation layout is:

```text
app/_layout.tsx
```

Authentication routes should be separated from authenticated clinician routes.

Conceptually:

```text
                 App
                  │
             Authentication
             /            \
          Sign In        Sign Up
             │
             ↓
       Authenticated
          Clinician
             │
      ┌──────┼────────┐
      ↓      ↓        ↓
   Queue   Chart    Results
                    │
                Orders
                    │
                Televisit
```

---

# Backend Integration

The clinician app does not own the backend clinical logic.

The mobile application consumes APIs provided by the backend team.

### Backend/API owner

**Ebube Chidi — Backend/API Lead**

The mobile app should consume the approved API contracts rather than duplicating business logic locally.

Example:

```text
Clinician Mobile App
        │
        │ HTTP/API request
        ↓
     FastAPI
        │
        ↓
    PostgreSQL
```

The mobile app should handle:

* Request states
* Loading states
* API errors
* Authentication/session state
* Data presentation
* User interactions
* Appropriate local caching

The backend remains responsible for:

* Authentication
* Authorization
* Clinical business rules
* Data validation
* Tenant isolation
* Patient data access control
* Persistence

---

# Mobile Platform Collaboration

### Chidera Aniude — Mobile Shared/Platform

Chidera owns shared mobile/platform capabilities that support both the clinician and patient applications.

Areas of collaboration include:

* Shared React Native components
* Generated API client
* Offline-resilient synchronization
* Draft autosave
* Retry mechanisms
* Offline read capabilities
* Push notifications

### Working relationship

```text
                  Mobile
                    │
           ┌────────┴────────┐
           ↓                 ↓
       Opeyemi            Chidera
     Clinician App     Mobile Platform
           │                 │
           └────────┬────────┘
                    ↓
             Shared Components
              API Client
             Mobile Services
```

Clinician-specific functionality belongs primarily in the clinician application.

Cross-app functionality should be discussed with Chidera before duplicating it.

---

# Design & UX Collaboration

The clinician application should follow the project's approved clinician design system.

The design system is owned by:

**Chinenye Orakwue — Design System & UI/UX Lead**

The clinician app should follow approved:

* Design tokens
* Typography
* Spacing
* Components
* Accessibility requirements
* Light/dark themes
* Interaction patterns

Mobile-specific adaptations are allowed where necessary for usability.

---

# Security

Because the clinician app handles sensitive clinical workflows, security is a core requirement.

The mobile application must:# Clinician Mobile App

The **Clinician Mobile App** is the Expo/React Native application for healthcare clinicians. It provides clinicians with mobile access to core clinical workflows, including patient charts, queues, orders, results, and televisits.

This project is owned and maintained by **Opeyemi Opj — Clinician App Lead**, with shared mobile/platform support from **Chidera Aniude**.

---

## Role & Ownership

### Opeyemi Opj — Clinician App Lead

**Primary responsibility:** Expo clinician mobile application.

I own the clinician-facing mobile experience and am responsible for delivering mobile parity with the clinician web application where applicable.

### Core areas owned

* Clinician authentication and session experience
* Clinician dashboard
* Patient chart
* Patient queue
* Orders
* Results
* Televisit
* Mobile navigation
* Mobile-specific UX
* Thumb-zone interactions
* Gesture-based interactions
* Responsive mobile layouts
* Loading, empty, error, and offline states
* Integration of clinician workflows with the API
* Mobile implementation of approved design-system patterns

---

# Product Scope

The clinician application focuses on the workflows a clinician needs while working away from a desktop.

The primary clinical areas are:

```text
Authentication
      ↓
Clinician Dashboard
      ↓
Patient Queue
      ↓
Patient Chart
      ↓
Orders
      ↓
Results
      ↓
Televisit
```

The mobile application should make these workflows fast, clear, accessible, and usable on a phone.

---

# Main Features

## 1. Authentication

The app will provide secure clinician authentication.

Planned capabilities include:

* Sign in
* Sign up where applicable
* Session management
* Logout
* Authentication state
* Token/session handling
* Protected clinician routes
* Authentication error handling
* Loading states
* Session expiration handling

Authentication must integrate with the project's approved authentication and security architecture.

> Authentication and authorization must not be implemented only on the client. The backend remains responsible for enforcing access control.

---

# 2. Clinician Dashboard

The dashboard provides clinicians with a quick overview of their current work.

Potential dashboard information includes:

* Current queue
* Patients requiring attention
* Pending orders
* New results
* Upcoming televisits
* Relevant notifications
* Important clinical actions

The dashboard should prioritize information that clinicians need immediately.

---

# 3. Patient Queue

The queue allows clinicians to see and manage patients waiting for clinical attention.

The mobile queue should support:

* Patient list
* Queue status
* Patient priority
* Waiting information
* Queue actions
* Patient selection
* Refreshing queue data
* Loading states
* Empty queue state
* Error state

The interface should be optimized for quick interaction with one hand.

---

# 4. Patient Chart

The patient chart is one of the primary clinical workflows.

The mobile implementation should provide appropriate access to relevant patient information, such as:

* Patient demographics
* Clinical information
* Encounters
* Relevant history
* Orders
* Results
* Other approved clinical information

The mobile experience should prioritize important information while avoiding unnecessary complexity.

---

# 5. Orders

Clinicians should be able to access and interact with clinical orders according to the permissions and workflows defined by the backend.

The mobile implementation may include:

* Viewing orders
* Creating orders where supported
* Order status
* Order details
* Order history
* Appropriate validation
* Loading states
* Error handling

---

# 6. Results

The results workflow allows clinicians to review available clinical results.

The application should support:

* Results list
* Result details
* Result status
* Relevant patient context
* Loading states
* Empty states
* Error handling

Results should be presented clearly so clinicians can quickly understand the information available to them.

---

# 7. Televisit

The clinician application will support the clinician side of televisit workflows.

The implementation may include:

* Upcoming televisits
* Televisit details
* Joining a consultation
* Patient context
* Call/session state
* Connection state
* Appropriate error handling

Televisit functionality must follow the project's approved security and privacy requirements.

---

# Mobile UX Principles

The clinician application is designed specifically for mobile use rather than simply shrinking the web application.

## Thumb-zone UX

Important actions should be positioned where they can comfortably be reached with one hand.

Examples include:

* Primary actions
* Navigation
* Queue actions
* Patient selection
* Common clinical actions

---

## Gesture UX

Where appropriate, the application may use gestures to make common workflows faster.

Examples:

* Swipe interactions
* Pull-to-refresh
* Bottom sheets
* Gesture-based navigation
* Long press where appropriate

Gestures should never make essential functionality inaccessible or confusing.

---

# Technology

The clinician application uses:

* **React Native**
* **Expo**
* **Expo Router**
* **TypeScript**
* **React Native StyleSheet**
* REST/API integration with the project's backend
* Shared mobile components provided by the mobile platform layer

The application should follow the project's approved versions and dependency constraints.

---

# Project Structure

The mobile application is organized around Expo Router and feature responsibilities.

A starting structure:

```text
clinician-app/
│
├── app/
│   ├── _layout.tsx
│   │
│   ├── (auth)/
│   │   ├── index.tsx
│   │   ├── signup.tsx
│   │   └── forgot-password.tsx
│   │
│   └── (clinician)/
│       ├── dashboard.tsx
│       ├── queue.tsx
│       ├── orders.tsx
│       ├── results.tsx
│       └── televisit.tsx
│
├── components/
│   ├── ui/
│   └── clinician/
│
├── services/
│   ├── api.ts
│   └── auth.ts
│
├── context/
│   └── AuthContext.tsx
│
├── constants/
│   ├── colors.ts
│   ├── spacing.ts
│   └── typography.ts
│
├── types/
│
├── utils/
│
├── assets/
│
├── package.json
└── tsconfig.json
```

This structure can evolve as the application grows.

---

# Navigation

Expo Router is used for application navigation.

The application entry point is:

```json
"main": "expo-router/entry"
```

The root navigation layout is:

```text
app/_layout.tsx
```

Authentication routes should be separated from authenticated clinician routes.

Conceptually:

```text
                 App
                  │
             Authentication
             /            \
          Sign In        Sign Up
             │
             ↓
       Authenticated
          Clinician
             │
      ┌──────┼────────┐
      ↓      ↓        ↓
   Queue   Chart    Results
                    │
                Orders
                    │
                Televisit
```

---

# Backend Integration

The clinician app does not own the backend clinical logic.

The mobile application consumes APIs provided by the backend team.

### Backend/API owner

**Ebube Chidi — Backend/API Lead**

The mobile app should consume the approved API contracts rather than duplicating business logic locally.

Example:

```text
Clinician Mobile App
        │
        │ HTTP/API request
        ↓
     FastAPI
        │
        ↓
    PostgreSQL
```

The mobile app should handle:

* Request states
* Loading states
* API errors
* Authentication/session state
* Data presentation
* User interactions
* Appropriate local caching

The backend remains responsible for:

* Authentication
* Authorization
* Clinical business rules
* Data validation
* Tenant isolation
* Patient data access control
* Persistence

---

# Mobile Platform Collaboration

### Chidera Aniude — Mobile Shared/Platform

Chidera owns shared mobile/platform capabilities that support both the clinician and patient applications.

Areas of collaboration include:

* Shared React Native components
* Generated API client
* Offline-resilient synchronization
* Draft autosave
* Retry mechanisms
* Offline read capabilities
* Push notifications

### Working relationship

```text
                  Mobile
                    │
           ┌────────┴────────┐
           ↓                 ↓
       Opeyemi            Chidera
     Clinician App     Mobile Platform
           │                 │
           └────────┬────────┘
                    ↓
             Shared Components
              API Client
             Mobile Services
```

Clinician-specific functionality belongs primarily in the clinician application.

Cross-app functionality should be discussed with Chidera before duplicating it.

---

# Design & UX Collaboration

The clinician application should follow the project's approved clinician design system.

The design system is owned by:

**Chinenye Orakwue — Design System & UI/UX Lead**

The clinician app should follow approved:

* Design tokens
* Typography
* Spacing
* Components
* Accessibility requirements
* Light/dark themes
* Interaction patterns

Mobile-specific adaptations are allowed where necessary for usability.

---

# Security

Because the clinician app handles sensitive clinical workflows, security is a core requirement.

The mobile application must:

* Never hard-code credentials or secrets
* Never commit API keys or private credentials
* Never store sensitive authentication data insecurely
* Use the approved authentication/session mechanism
* Respect backend authorization
* Handle expired sessions correctly
* Avoid exposing sensitive information in logs
* Use secure network communication in production
* Follow the project's tenant and role permissions
* Avoid unnecessarily storing patient information locally

Client-side navigation should not be treated as an authorization mechanism.

For example:

```text
❌ Incorrect

If user can navigate to /patients
→ user automatically has access


✅ Correct

Mobile requests patient data
        ↓
Backend authenticates user
        ↓
Backend checks organization/tenant
        ↓
Backend checks role/permissions
        ↓
Backend returns authorized data
```

---

# State Handling

The application should explicitly handle:

### Loading

```text
Loading...
```

### Success

```text
Data displayed
```

### Empty

```text
No patients in queue
```

### Error

```text
Unable to load patients.
Try again.
```

### Offline

```text
You are offline.
Some information may be unavailable.
```

### Session expiration

```text
Your session has expired.
Please sign in again.
```

These states are part of the product experience and should not be treated as afterthoughts.

---

# Development Principles

## 1. Mobile-first

Do not simply copy the desktop web UI.

Ask:

> What is the fastest and safest way for a clinician to perform this task on a phone?

---

## 2. Keep clinical workflows simple

A clinician should not need unnecessary taps to complete a common task.

---

## 3. Reuse components

Shared UI should be reused instead of duplicated.

Example:

```text
components/ui/Button.tsx
components/ui/Input.tsx
components/ui/Card.tsx
```

---

## 4. Keep business logic out of UI components

Prefer:

```text
Screen
  ↓
Service / Hook
  ↓
API
```

rather than putting large API and business logic directly inside screen components.

---

## 5. Type everything

Use TypeScript types for:

* API responses
* Patients
* Encounters
* Orders
* Results
* Queue items
* Authentication state
* Navigation data

Avoid unnecessary use of:

```ts
any
```

---

# Testing

Every important clinician workflow should be tested.

Priority flows include:

* Sign in
* Authentication failure
* Session expiration
* Dashboard loading
* Queue loading
* Patient selection
* Patient chart
* Orders
* Results
* Televisit
* Logout
* Network failure
* Empty states

Tests should cover critical user behavior rather than only component rendering.

---

# Pull Requests

Before opening a PR:

```text
1. Test your changes
2. Check TypeScript errors
3. Check the affected mobile workflow
4. Verify loading/error/empty states
5. Verify mobile layout
6. Review your own diff
7. Update relevant documentation
8. Open a small PR
```

Every PR must receive peer review according to the team's review process.

Architecture-touching changes require facilitator review.

---

# Definition of Done

A clinician mobile feature is considered complete when:

* [ ] UI is implemented
* [ ] TypeScript types are correct
* [ ] API integration is complete where required
* [ ] Loading state exists
* [ ] Empty state exists
* [ ] Error state exists
* [ ] Offline behavior is considered
* [ ] Authentication/authorization is respected
* [ ] Mobile/one-handed UX is considered
* [ ] Accessibility is considered
* [ ] Relevant tests are written
* [ ] Documentation is updated when behavior changes
* [ ] PR has received required reviews
* [ ] Feature has been demonstrated

---

# Roadmap Ownership

## Phase 0 — Foundations

Mobile responsibilities include:

* Expo application foundation
* Routing foundation
* Shared mobile setup
* API integration foundation
* Authentication integration preparation

---

## Phase 1 — Front Desk & Clinical Core

**Primary clinician-app responsibility**

* Clinician authentication
* Dashboard
* Patient queue
* Patient chart
* Core clinical mobile workflows

---

## Phase 2 — Diagnostics & Medications

**Primary clinician-app responsibility**

* Orders
* Results
* Diagnostic-related workflows
* Medication-related clinician workflows where applicable

---

## Phase 3 — Money & Patients

The clinician app supports this phase where clinician workflows require interaction with:

* Patient information
* Billing status
* Payment-related clinical context

Payments and billing business logic remain owned by the Payments & Billing workstream.

---

## Phase 4 — Scheduling & Specialties

Clinician app responsibilities may include:

* Clinician scheduling
* Appointment-related workflows
* Specialty-specific workflows
* Televisit improvements

---

## Phase 5 — Interoperability & Analytics

Clinician app responsibilities may include:

* Clinician-facing analytics
* Interoperability-related displays
* Additional clinical data workflows

Backend interoperability remains owned by the backend/data workstream.

---

# Team Collaboration

### Primary pairing

**Chidera Aniude — Mobile Shared/Platform**

### Key collaborators

* **Ebube Chidi** — FastAPI/API
* **Christian Onoh** — PostgreSQL/data/multi-tenancy
* **Ifeanyi Amah** — Authentication/security/DevOps
* **Chinenye Orakwue** — Design system/UI/UX
* **Sarah Nnanyelugo** — QA and delivery
* **Aguwa Chidi** — Payments/billing when clinician workflows intersect
* **Kenechukwu Onyia** — Web clinician experience
* **PraiseGod Udeh** — Patient mobile app

---

# Team Workflow

The clinician app follows the team's shared development principles:

```text
Backlog
   ↓
Small task
   ↓
Implement
   ↓
Test
   ↓
Open PR
   ↓
Peer review
   ↓
Pod lead review
   ↓
Facilitator review if architecture-related
   ↓
Merge
   ↓
Demo
```

Everyone is expected to:

* Attend daily standup
* Work from the shared backlog
* Open small PRs
* Review peer PRs
* Keep relevant documentation current
* Demo their work at phase boundaries

---

# Current Focus

The initial clinician mobile foundation is:

```text
Expo
  ↓
React Native
  ↓
TypeScript
  ↓
Expo Router
  ↓
Authentication
  ↓
Clinician Dashboard
  ↓
Queue
  ↓
Patient Chart
  ↓
Orders
  ↓
Results
  ↓
Televisit
```

The application should be developed incrementally, with the authentication and navigation foundation established before implementing the core clinical workflows.

---

# Owner

**Opeyemi Opj**
**Role:** Clinician App Lead
**Platform:** Expo / React Native
**Area:** Clinician Mobile Application

**Pair:** Chidera Aniude — Mobile Shared/Platform


* Never hard-code credentials or secrets
* Never commit API keys or private credentials
* Never store sensitive authentication data insecurely
* Use the approved authentication/session mechanism
* Respect backend authorization
* Handle expired sessions correctly
* Avoid exposing sensitive information in logs
* Use secure network communication in production
* Follow the project's tenant and role permissions
* Avoid unnecessarily storing patient information locally

Client-side navigation should not be treated as an authorization mechanism.

For example:

```text
❌ Incorrect

If user can navigate to /patients
→ user automatically has access


✅ Correct

Mobile requests patient data
        ↓
Backend authenticates user
        ↓
Backend checks organization/tenant
        ↓
Backend checks role/permissions
        ↓
Backend returns authorized data
```

---

# State Handling

The application should explicitly handle:

### Loading

```text
Loading...
```

### Success

```text
Data displayed
```

### Empty

```text
No patients in queue
```

### Error

```text
Unable to load patients.
Try again.
```

### Offline

```text
You are offline.
Some information may be unavailable.
```

### Session expiration

```text
Your session has expired.
Please sign in again.
```

These states are part of the product experience and should not be treated as afterthoughts.

---

# Development Principles

## 1. Mobile-first

Do not simply copy the desktop web UI.

Ask:

> What is the fastest and safest way for a clinician to perform this task on a phone?

---

## 2. Keep clinical workflows simple

A clinician should not need unnecessary taps to complete a common task.

---

## 3. Reuse components

Shared UI should be reused instead of duplicated.

Example:

```text
components/ui/Button.tsx
components/ui/Input.tsx
components/ui/Card.tsx
```

---

## 4. Keep business logic out of UI components

Prefer:

```text
Screen
  ↓
Service / Hook
  ↓
API
```

rather than putting large API and business logic directly inside screen components.

---

## 5. Type everything

Use TypeScript types for:

* API responses
* Patients
* Encounters
* Orders
* Results
* Queue items
* Authentication state
* Navigation data

Avoid unnecessary use of:

```ts
any
```

---

# Testing

Every important clinician workflow should be tested.

Priority flows include:

* Sign in
* Authentication failure
* Session expiration
* Dashboard loading
* Queue loading
* Patient selection
* Patient chart
* Orders
* Results
* Televisit
* Logout
* Network failure
* Empty states

Tests should cover critical user behavior rather than only component rendering.

---

# Pull Requests

Before opening a PR:

```text
1. Test your changes
2. Check TypeScript errors
3. Check the affected mobile workflow
4. Verify loading/error/empty states
5. Verify mobile layout
6. Review your own diff
7. Update relevant documentation
8. Open a small PR
```

Every PR must receive peer review according to the team's review process.

Architecture-touching changes require facilitator review.

---

# Definition of Done

A clinician mobile feature is considered complete when:

* [ ] UI is implemented
* [ ] TypeScript types are correct
* [ ] API integration is complete where required
* [ ] Loading state exists
* [ ] Empty state exists
* [ ] Error state exists
* [ ] Offline behavior is considered
* [ ] Authentication/authorization is respected
* [ ] Mobile/one-handed UX is considered
* [ ] Accessibility is considered
* [ ] Relevant tests are written
* [ ] Documentation is updated when behavior changes
* [ ] PR has received required reviews
* [ ] Feature has been demonstrated

---

# Roadmap Ownership

## Phase 0 — Foundations

Mobile responsibilities include:

* Expo application foundation
* Routing foundation
* Shared mobile setup
* API integration foundation
* Authentication integration preparation

---

## Phase 1 — Front Desk & Clinical Core

**Primary clinician-app responsibility**

* Clinician authentication
* Dashboard
* Patient queue
* Patient chart
* Core clinical mobile workflows

---

## Phase 2 — Diagnostics & Medications

**Primary clinician-app responsibility**

* Orders
* Results
* Diagnostic-related workflows
* Medication-related clinician workflows where applicable

---

## Phase 3 — Money & Patients

The clinician app supports this phase where clinician workflows require interaction with:

* Patient information
* Billing status
* Payment-related clinical context

Payments and billing business logic remain owned by the Payments & Billing workstream.

---

## Phase 4 — Scheduling & Specialties

Clinician app responsibilities may include:

* Clinician scheduling
* Appointment-related workflows
* Specialty-specific workflows
* Televisit improvements

---

## Phase 5 — Interoperability & Analytics

Clinician app responsibilities may include:

* Clinician-facing analytics
* Interoperability-related displays
* Additional clinical data workflows

Backend interoperability remains owned by the backend/data workstream.

---

# Team Collaboration

### Primary pairing

**Chidera Aniude — Mobile Shared/Platform**

### Key collaborators

* **Ebube Chidi** — FastAPI/API
* **Christian Onoh** — PostgreSQL/data/multi-tenancy
* **Ifeanyi Amah** — Authentication/security/DevOps
* **Chinenye Orakwue** — Design system/UI/UX
* **Sarah Nnanyelugo** — QA and delivery
* **Aguwa Chidi** — Payments/billing when clinician workflows intersect
* **Kenechukwu Onyia** — Web clinician experience
* **PraiseGod Udeh** — Patient mobile app

---

# Team Workflow

The clinician app follows the team's shared development principles:

```text
Backlog
   ↓
Small task
   ↓
Implement
   ↓
Test
   ↓
Open PR
   ↓
Peer review
   ↓
Pod lead review
   ↓
Facilitator review if architecture-related
   ↓
Merge
   ↓
Demo
```

Everyone is expected to:

* Attend daily standup
* Work from the shared backlog
* Open small PRs
* Review peer PRs
* Keep relevant documentation current
* Demo their work at phase boundaries

---

# Current Focus

The initial clinician mobile foundation is:

```text
Expo
  ↓
React Native
  ↓
TypeScript
  ↓
Expo Router
  ↓
Authentication
  ↓
Clinician Dashboard
  ↓
Queue
  ↓
Patient Chart
  ↓
Orders
  ↓
Results
  ↓
Televisit
```

The application should be developed incrementally, with the authentication and navigation foundation established before implementing the core clinical workflows.

---

# Owner

**Opeyemi Opj**
**Role:** Clinician App Lead
**Platform:** Expo / React Native
**Area:** Clinician Mobile Application

**Pair:** Chidera Aniude — Mobile Shared/Platform
