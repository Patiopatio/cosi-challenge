import React from 'react';
import App from 'next/app';
import { Provider } from 'react-redux';
import '../assets/tailwind.css';
import { makeServer } from '../server/server';
import store from '../store/index';

makeServer({ environment: 'development'})

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Provider store={store}>
        <div className='bg-blue-100 h-screen'>
          <Component {...pageProps} />
          <style jsx>{``}</style>

          <style jsx global>{`
            html,
            body {
              padding: 0;
              margin: 0;
              font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                sans-serif;
            }

            * {
              box-sizing: border-box;
            }
          `}</style>
        </div>
      </Provider>
    )
  }
}

export default MyApp
