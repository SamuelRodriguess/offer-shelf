# Offer Shelf

## Features

- Fetches product data from a public API.
- Responsive banner with mobile and desktop images.
- Atomic React components for product cards and product lists.
- Responsive design with mobile detection.
- Uses Next.js Image component for optimized image loading.
- Supports Suspense for asynchronous data fetching.

## Getting Started

### Prerequisites

- Node.js v22.17
- yarn v1.22
- React v19
- Next.js v15
- TypeScript 
- Tailwind CSS

### Installation

1. Clone the repository:

```
git clone https://github.com/SamuelRodriguess/offer-shelf
```

2. Install dependencies:
```
yarn install
```

### Running the Project

To start the development server:
```
yarn dev
```

## Project Structure

- `app/` – Next.js app routes and pages
- `components/` – Reusable React components
- `hooks/` – Custom hooks (e.g. `useProductList`, `useIsMobile`)
- `assets/` – Static assets like images
- `utils/` – Utility functions
