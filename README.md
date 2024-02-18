# SAAS
## Overview
This is a SaaS product intended to help other customer find their local dispersancy

# Backend
 Firebase. 
The important thing to know: "To prevent abuse, new projects currently have an SMS daily quota of 50/day. To increase this quota, please add a billing account to the project"
# Firebase offers important aspects of the tool
https://firebase.google.com/support/faq#pricing-free-trial

https://firebase.google.com/docs/auth/web/firebaseui?hl=en&authuser=0

this is for free a period of time
## Technology Stack
- FastAPI for the backend framework
- AWS or GCP for cloud hosting or host on Azure
- Prisma for database ORM, or an alternative if preferred

# Stripe docs:
https://github.com/stripe/stripe-python


## Integration
The Language Model for chatbot interactions can be implemented using Python or OpenAI, depending on the choice of technology.

# Frontend
Nextjs and React.
Remember to use the docs:

To use Client Components, you can add the React "use client" directive at the top of a file, above your imports.

"use client" is used to declare a boundary between a Server and Client Component modules. This means that by defining a "use client" in a file, all other modules imported into it, including child components, are considered part of the client bundle.

# SetUP
For App folder make sure to make a new folder named Client and add the APP folder there. The 


## Technology Stack
- Next.js for the frontend framework
-   
- React for building user interfaces
- Vercel for hosting the frontend, or another suitable frontend hosting solution



Server Components: Render on the server, improving performance and SEO.
Client Components: Render on the client, enabling interactive features and client-side state.
use client Directive: Explicitly marks a component as a Client Component
