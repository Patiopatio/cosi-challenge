# Cosi Challenge

[Live Demo](cosi-challenge.vercel.app)

This coding challenge is a small Next.js single page application enabling the user who is on the way to the airport to do their check-in using a mobile phone.

## Run locally

First, run the development server:

``` bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The page auto-updates as you edit the file.

## Frameworks

* [Next.js](https://nextjs.org/)
* [Tailwind](https://tailwindcss.com/)
* [Redux](https://redux.js.org/)
* [React hook form](https://react-hook-form.com/)
* [MirageJs](https://miragejs.com/)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Contributing

Please refer to the project's style and contribution guidelines for submitting patches and additions. In general, follow the "fork-and-pull" Git workflow.

1. Fork the repo on GitHub
2. Clone the project to your own machine
3. Commit changes to your own branch
4. Push your work back up to your fork
5. Submit a Pull request so that one can review your changes
NOTE: Be sure to merge the latest from "upstream" before making a pull request!

## Open TODOs

Since this challenge is limited to 4 hours (I needed 6h) there are some open todos.

- input validation on checkin page
- separating html into sub components (like select, label, headline, text, image, etc. )
- using server side rendering [SSR](https://nextjs.org/docs/api-reference/data-fetching/getInitialProps) for SEO (not used due to client library miragejs)
- writing jest tests for the components
