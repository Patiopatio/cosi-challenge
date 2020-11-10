import { createServer } from 'miragejs';

export function makeServer({ environment }) {
  return createServer({
    environment,
    routes() {
      // routes issue. For more info see: https://github.com/vercel/next.js/issues/16874
      this.passthrough((request) => {
        if (request.url === '/_next/static/development/_devPagesManifest.json')
          return true
      })

      this.namespace = '/api'
      this.get(
        '/passenger',
        () => (
          {
            passenger: {
              lastName: 'Doe',
              flightNumber: '123456'
            }
          }
        )
      )

      this.post(
        '/passenger',
        (_, request) => {
          const payload = JSON.parse(request.sendArguments[0])
          return {
            user: {
              lastName: 'Doe',
              flightNumber: '123456'
            }
          }
        },
        { timing: 3000 }
      )

      this.post('/passenger/checkin', (_, request) => {
        const payload = JSON.parse(request.sendArguments[0])
        return {
          user: {
            isConfirmed: true
          }
        };
      })
    }
  })
}
