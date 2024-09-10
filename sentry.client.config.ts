import * as Sentry from "@sentry/nextjs";
import { truncate } from "fs";

Sentry.init({
  dsn: "https://0fd06b1e8e075bc2cfa81f910c7555b2@o4507927550361600.ingest.de.sentry.io/4507927556194384",
  tracesSampleRate: 1,
  debug: false,
  replaysOnErrorSampleRate: 1.0,
  integrations: [
    Sentry.replayIntegration({
      maskAllText: true,
      blockAllMedia: true,
    }),
    Sentry.feedbackIntegration({
      colorScheme: "dark",
    }),
  ],
});
