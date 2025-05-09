# 学習用テンプレートリポジトリ

このリポジトリは、React/Next.js学習におけるアウトプットのベースとして使用します。

## 含まれているもの

- README雛形
- .gitignore（Node.js向け）
- MIT License

## 使い方

1. このテンプレートから新しいリポジトリを作成
2. 自分のプロジェクト内容に合わせて編集
3. GitHubにpushし、必要に応じてデプロイ

## 運用ルールの推奨

このテンプレートから作成されたリポジトリでは、以下の運用ルールを設定することを推奨します。

### ブランチ保護（main ブランチ）

このテンプレートから作成されたリポジトリでは、以下のブランチ保護ルールを `main` ブランチに対して設定することを推奨します。

- ✅ Pull Request 経由でのみマージを許可（`Require a pull request before merging`）
  - Copilot によるレビューを自動実行（`Request pull request review from Copilot`）
- 🚫 強制プッシュの禁止（`Block force pushes`）
- 🚫 ブランチの削除を禁止（`Restrict deletions`）

> これにより、コードの信頼性・レビュー品質・履歴の安全性が担保されます。

※ テンプレートからリポジトリを作成した場合、これらの設定は自動では引き継がれません。  
　必要に応じて GitHub の Settings → Branches より手動で設定してください。

### 📝 Pull Request テンプレート

このテンプレートリポジトリには、Copilot に日本語でレビューさせるための `pull_request_template.md` が `.github/` ディレクトリに含まれています。

このテンプレートを用いることで、PR の目的やレビュー観点が明確になり、Copilot も日本語で的確なレビューを行いやすくなります。

---

📘 詳細や記録は「不可能を超えるフロントエンドの歩み」にまとめています。
