# custom-hooks

React の開発を効率化するためのカスタムフック集です。  
実務や学習の中で頻繁に使うロジックをフックとして切り出し、再利用・保守性を高めることを目的としています。

## 使用技術

- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)（必要に応じて）

## セットアップ

```bash
# 依存パッケージのインストール
bun i

# 開発サーバーの起動
bun run dev
```

## フォルダ構成（予定）

```txt
src/
├── app/          # ページ
├── hooks/        # カスタムフック置き場
├── components/   # 必要に応じてデモ用コンポーネントなど
└── styles/       # スタイルシート
```

## 今後の予定

- よく使うユーティリティ系フックの実装（useCounter, useToggle, usePrevious など）
- 複数のフックを組み合わせたカスタムフックの設計
- デモを通じた動作確認とテスト導入（Jest / Vitest など）

## ライセンス

MIT
