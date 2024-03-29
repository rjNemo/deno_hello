import { Locale } from "./repositories/locales.ts";

export const htmlBody = ({ locale: language, message: hello }: Locale) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
    <style> 
        html,body {
            height: 100%;
        }
        body {
            max-width: 650px;
            margin: 40px auto;
            padding: 0 10px;
            font: 18px/1.5 -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
            color: #444;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        h1, h2, h3 {
            line-height: 1.2;
        }

        @media (prefers-color-scheme: dark) {
            body {
                color: white;
                background: #444;
            }

            a:link {
                color: #5bf;
            }

            a:visited {
                color: #ccf;
            }
        }
    </style>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="description" content="Simple client for Hello deno back end">
    <title>Hello client</title>
</head>
    <body>
        <article>
            <h1>${hello}</h1>
            <p>Language: ${language}</p>
        </article>
    </body>
</html>`;
