import React from "react";
import App from "../shared/App";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { saveFetchedJobList } from "../thunk-reducer/list/listing.actions";
import { fetchPopularJobs } from "../shared/api";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

export default (req, res, next, store) => {
  const promise = fetchPopularJobs();
  promise
    .then(data => {
      store.dispatch(saveFetchedJobList(data));
      const preloadedState = store.getState();
      let stateJson = JSON.stringify(preloadedState).replace(/</g, "\\u003c");

      //Wrapping Styled Sheet to React SSR
      const sheet = new ServerStyleSheet();
      try {
        var markup = renderToString(
          <StyleSheetManager sheet={sheet.instance}>
            <Provider store={store}>
              <StaticRouter location={req.url}>
                <App />
              </StaticRouter>
            </Provider>
          </StyleSheetManager>
        );
        var styleTags = sheet.getStyleTags();
      } catch (error) {
        console.error(error);
      } finally {
        sheet.seal();
      }

      res.send(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>SSR with RR</title>
                <meta charset="utf-8">
	            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no, user-scalable=yes">
                ${styleTags}
                <script src="/bundle.js" defer></script>
            </head>
            <body>
                <div id="app">${markup}</div>
                <script>window.__PRELOADED_STATE__ = ${stateJson}</script>
            </body>
            </html>
        `);
    })
    .catch(next);
};
