// 2025.05.10現在ファイルを自動検出してくれない

/* 依存関係
"tailwindcss": "^4.1.5"
@tailwindcss/vite": "^4.1.5",
"react": "^19.1.0",
*/

/* 参考
https://github.com/tailwindlabs/tailwindcss/discussions/16399?utm_source=chatgpt.com
https://github.com/tailwindlabs/tailwindcss/discussions/16958#discussioncomment-12404132
 */

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
};
