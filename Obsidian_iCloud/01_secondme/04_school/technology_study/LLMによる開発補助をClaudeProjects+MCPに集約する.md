---
title: "LLM による開発補助を Claude Projects + MCP に集約する"
source: "https://zenn.dev/bm_sms/articles/claude_mcp_aggregate"
author:
  - "[[Zenn]]"
published: 2024-12-30
created: 2025-06-21
description:
tags:
  - "clippings"
---
[株式会社エス・エム・エス](https://zenn.dev/p/bm_sms) [Publicationへの投稿](https://zenn.dev/faq#what-is-publication)

43

17

こんにちは！  
みなさんはコーディングで LLM は利用していますか？

昨今は Cursor だったり、v0 だったりとコーディングを支援する LLM を活かした製品が続々と登場しています。

こういった製品は特定の用途に最適化されていて便利な一方、用途ごとに別の製品を利用するのは LLM を扱う都合上、気になる点もいくつかあります。

- コスト面:
	- LLM を裏で扱う都合上、サブスクにせよ従量課金にせよ一定の費用がかかってくる
	- 例えば、3製品をサブスク契約してそれぞれLimitの1/3だけ利用する場合、かなりコスパが悪く感じる
	- 従量課金でも、気をつけていないと費用が高額になりやすい
- オプトアウト等のポリシー面:
	- 製品ごとに「学習利用されないか？」等を調査する必要がある
	- 職業エンジニアが利用する場合、会社でガイドラインや利用申請が義務付けられていることもあるでしょう。製品ごとに都度そういった壁を突破するのも面倒

そこで、Claude Projects と MCP を活用すると

- プロンプトや環境の設定の手間さえ払ってしまえば、割と自由度高くなんでもできる
- API 版ではない Claude のみで完結するので、コストが Controllable かつ、用途ごとにサブスクを増やすことにならない

という状態を実現できます。

このエントリでは、「自然言語で依頼したLLMによるコーディング」を題材に Claude MCP と Projects の利用と管理方法・Tips 等を紹介します。

## 前提

- Claude Projects を利用するために Pro Plan
- Claude MCP を利用するには Web 版 Claude ではなく、Desktop版の Claude
- ローカルで MCP Server を動かすために Node.js, [uv](https://docs.astral.sh/uv/getting-started/installation/) のセットアップ

が必要です。

筆者は Mac を利用しているため Mac を前提にした記述になりますが、Windows でも動かせますので適時読み替えてもらえればと思います。

## Projects と MCP の概要

本題に入る前に Projects と MCP の概要について軽く説明をします。

### Claude Projects

Claude Projects は、チャットで会話する際に前提知識とシステムプロンプトのプリセットを作成できる機能です。

例えば、以下のような使い方ができます。

- 「コード生成用」Project を作成
- チームで利用しているコーディング規約・ドキュメントを知識として登録
- システムプロンプトに LLM の動き方を指示
	- Ex. 最初に要求を整理してから、実装を始めてください

Projects を利用することで、LLM の振る舞いとアウトプットの方向性をコントロールすることができます。

### Claude MCP (Model Context Protocol)

詳細な説明は公式ドキュメントに譲りますが、LLM に MCP というプロトコルを介して任意のアクションを実行できるようにするものです。

API で利用したことがある人向けに説明すると、「function calling を 普段のチャット UI から利用できるようにしたもの」といえばわかりやすいかもしれません。

具体的には、以下のような MCP の Reference Server が提供されています。

- brave を利用した検索
- URL アクセス
- ファイルシステム操作(ファイル・ディレクトリの読み解き、書き出し)
- Puppeteer を利用したブラウザ操作

Reference Server 以外にも公式やサードパーティーの MCP Server が公開されています。

- [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers)
	- Reference から third-party まで MCP の実装を集めたリポジトリ
- [https://www.mcpservers.ai/](https://www.mcpservers.ai/)
	- MCP Server を検索できるサイト

この辺りで調べるのが便利です。

他にもプロトコルに則った MCP Server を実装をすることで任意の SaaS API と繋いだりと、プログラムから操作できることはなんでもできます。(逆になんでもできちゃうので、セキュリティ面は気を使う必要がありそうです。)

## コード生成の基本方針

本題のコード生成の方針についてですが、生成したコードの動作保証のために MCP を活用していきます。

従来のチャット型の UI の LLM (Claude や ChatGPT) でコード生成をして貰う場合、生成したコードを実際に実行してみるところは人間が行う必要がありました。そのまま動かないことも多いので、エラー内容を貼り付けて修正を指示したり、自分で修正したりを繰り返すことで完成に近づけることになります。

一方、MCP を利用するとプロトコルを介して LLM が自発的に実行できるアクションを規定できます。プログラムの動作確認やトライアンドエラー、必要な情報の提供等を開発者の手を煩わせずに自律的に行うことができます。

上記のコンセプトを基本にプロンプトと MCP を設定していきます。

### MCP の設定

MCP の設定は `~/Library/Application\ Support/Claude/claude_desktop_config.json` に置く必要があります。

Claude Desktop の Settings > Developers > Edit Config から開いても良いです。

今回利用する MCP は以下のように設定します。

~/Library/Application\\ Support/Claude/claude\_desktop\_config.json

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "/path/to/npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/path/to/Apps",
        "/path/to/Playground"
      ]
    },
    "brave-search": {
      "command": "/path/to/npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-brave-search"
      ],
      "env": {
        "BRAVE_API_KEY": "みせられないよ"
      }
    },
    "sequential-thinking": {
      "command": "/path/to/npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-sequential-thinking"
      ]
    },
    "fetch": {
      "command": "/path/to/uvx",
      "args": [
        "mcp-server-fetch"
      ]
    },
    "mcp-server-commands": {
      "command": "/path/to/npx",
      "args": [
        "mcp-server-commands"
      ]
    }
  },
  "globalShortcut": ""
}
```

詳しくは公式ドキュメントを読んでもらえればと思いますが、mcpServers に利用する MCP Server の一覧を記述します。

### システムプロンプト

システムプロンプトで開発の流れと、MCP の利用場面を指示していきます。

```markdown
\`filesystem\`
```

概ね書いてあるとおりですが、少し補足します:

- `sequential-thinking` は o1 に近いような段階思考を可能にする MCP です。
	- 参考: ![](https://storage.googleapis.com/zenn-user-upload/4bc65f9c8d6e-20241230.png)
	- 実装の方針を「考える」ステップは特に複雑な思考が必要になるので、 `sequential-thinking` を利用します
- `brave-search` [Brave Search API](https://brave.com/search/api/) を利用した検索ができます。

### デモ: 実際に動かしてみる

実際にこの仕組みで私が公開している OSS のバグ修正をさせてみます。

依頼内容

```
/path/to/github-actions-search のバグ修正をお願いします。
ピン留め機能について、リポジトリをまたいでピンした workflow が共有されてしまう問題があるので解消してください。
typecheck, lint, test も通してください
```

![](https://storage.googleapis.com/zenn-user-upload/8725866f7b42-20241229.png)

![](https://storage.googleapis.com/zenn-user-upload/d7db50d1a50d-20241229.png)

- 問題を把握して解決手段に自律的にたどり着く
- 基本的な修正をした後、linter が通るように修正をする

の流れでノータッチでバグ修正を行うことができました。

## MCP の管理に必要な諸々をリポジトリ管理する

設定ファイルは `~/Library/Application\ Support/Claude/claude_desktop_config.json` に置く必要があり、端末ごとに設定ファイルが必要です。したがって、Git 管理したいなーという気持ちになります。

しかし、以下の理由で直接コミットすることは厳しいです。

- 環境変数指定を設定ファイルで行うので API\_KEY 等の秘匿情報を載せる必要がある
- npx や node を多様するが、mise 等の切り替えられる系のツールを使っているとパス解決ができないので、フルパス指定が必要がある
	- パス指定が必要な場合、端末によってパスが異なっていたり

加えて、前述の通り MCP Server はリポジトリを clone してこないと動かせないものもあったりもしましたし、特定の SaaS とつなぎたい場合等に提供されていなければ、自分で MCP Server を実装する必要があります。

そこで筆者は MCP 周りを管理するリポジトリを作成して運用しています。ちょうど dotfiles リポジトリのような運用です。

大まかな構成は以下のような感じです:

### MCP Server の設置

- mcps 以下に git submodule として clone が必要な公開されている MCP 実装を置く
	- (今回の記事では登場しませんが、モノによっては clone が必要なものもあったので)
- packages を pnpm workspace として登録し、オレオレ MCP を配置する
- mcps 以下をビルドするスクリプトを書いて、 [turborepo](https://turbo.build/repo/docs) のビルドとセットで実行することで MCP の準備ができている状態を作れます
	- 具体的には `pnpm i && pnpm build` だけで OK

package.json

```json
{
  "type": "module",
  "scripts": {
    "build": "pnpm /^build:.*/",
    "build:turbo": "turbo run build",
    "build:mcps": "./scripts/build_mcps.sh"
  },
}
```

```bash
#!/usr/bin/env bash

set -euxo pipefail

function npm_install_and_build() {
  local dir=$1

  pushd ./mcps/$dir
  npm ci
  npm run build
  popd
}

npm_install_and_build "some-mcp-server"
```

### 設定ファイル(claude\_desktop\_config.json) の管理

claude\_desktop\_config.json 自体はコミットせず、claude\_desktop\_config.json を生成できる `scripts/generate_config.ts` を作成してコミットします。

スクリプトの中で作成されたものを適切なパスに配る形にしています。

scripts/generate-config.ts

```typescript
import { execSync } from "node:child_process"
import { writeFileSync } from "node:fs"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import * as v from "valibot"

const __dirname = dirname(fileURLToPath(import.meta.url))
const repoRoot = resolve(__dirname, "..")
const homeDir = execSync("echo $HOME", { encoding: "utf-8" }).trim()

const envSchemas = {
  MCP_BRAVE_API_KEY: v.string(),
  MCP_NODE_PATH: v.optional(v.string(), "node"),
  MCP_NPX_PATH: v.optional(v.string(), "npx"),
  MCP_UVX_PATH: v.optional(v.string(), "uvx"),
  /**
   * @example ""
   * @example "~/Apps,~/Playground"
   */
  MCP_APP_DIRS: v.optional(v.string(), "~"),
  MCP_GLOBAL_SHORTCUT: v.optional(v.string(), ""),
  /**
   * @example ""
   * @example "brave-search"
   */
  MCP_DISABLE: v.optional(v.string(), "")
} as const

type McpServer = {
  command: string
  args?: ReadonlyArray<string>
  env?: Record<string, string>
}

const defineMcpServer = <
  const N extends string,
  const T extends v.BaseSchema<any, any, any>,
  const Declare extends McpServer,
>(
  name: N,
  requiredEnvSchema: T,
  cb: (context: { env: v.InferOutput<T> }) => Declare | Promise<Declare>
) => {
  return {
    name,
    generateConfig: async () =>
      await cb({ env: v.parse(requiredEnvSchema, process.env) }),
  } as const
}

const filesystemServer = defineMcpServer(
  "filesystem",
  v.object({
    MCP_NPX_PATH: envSchemas.MCP_NPX_PATH,
    MCP_APP_DIRS: envSchemas.MCP_APP_DIRS,
  }),
  ({ env }) => ({
    command: env.MCP_NPX_PATH,
    args: [
      "-y",
      "@modelcontextprotocol/server-filesystem",
      ...env.MCP_APP_DIRS.split(",").map((path) =>
        path.replace("$HOME", homeDir).replace("~", homeDir)
      ),
    ],
  })
)

const braveSearchServer = defineMcpServer(
  "brave-search",
  v.object({
    MCP_NPX_PATH: envSchemas.MCP_NPX_PATH,
    MCP_BRAVE_API_KEY: envSchemas.MCP_BRAVE_API_KEY,
  }),
  ({ env }) => ({
    command: env.MCP_NPX_PATH,
    args: ["-y", "@modelcontextprotocol/server-brave-search"],
    env: {
      BRAVE_API_KEY: env.MCP_BRAVE_API_KEY,
    },
  })
)

const sequentialThinkingServer = defineMcpServer(
  "sequential-thinking",
  v.object({
    MCP_NPX_PATH: envSchemas.MCP_NPX_PATH,
  }),
  ({ env }) => ({
    command: env.MCP_NPX_PATH,
    args: ["-y", "@modelcontextprotocol/server-sequential-thinking"],
  })
)

const fetchServer = defineMcpServer(
  "fetch",
  v.object({
    MCP_UVX_PATH: envSchemas.MCP_UVX_PATH,
  }),
  ({ env }) => ({
    command: env.MCP_UVX_PATH,
    args: ["mcp-server-fetch"],
  })
)

const mcpServerCommandsServer = defineMcpServer(
  "mcp-server-commands",
  v.object({
    MCP_NPX_PATH: envSchemas.MCP_NPX_PATH,
  }),
  ({ env }) => ({
    command: env.MCP_NPX_PATH,
    args: ["mcp-server-commands"],
  })
)

const mcpServers = [
  filesystemServer,
  braveSearchServer,
  sequentialThinkingServer,
  fetchServer,
  mcpServerCommandsServer,
] as const

const generateConfig = async () => {
  const env = v.parse(
    v.object({
      MCP_DISABLE: envSchemas.MCP_DISABLE,
      MCP_GLOBAL_SHORTCUT: envSchemas.MCP_GLOBAL_SHORTCUT,
    }),
    process.env
  )
  const disables = env.MCP_DISABLE.split(",")

  const configs = await Promise.all(
    mcpServers.map(async ({ name, generateConfig }) => {
      if (disables.includes(name)) return null

      return {
        name,
        config: await generateConfig(),
      }
    })
  )

  return {
    mcpServers: configs
      .filter((config) => config !== null)
      .reduce(
        (s, t) => ({
          ...s,
          [t.name]: t.config,
        }),
        {}
      ),
    globalShortcut: env.MCP_GLOBAL_SHORTCUT,
  }
}

const main = async () => {
  const config = await generateConfig()
  console.log("Configuration generated.", config)

  const outputPath = resolve(repoRoot, "claude_desktop_config.json")
  writeFileSync(outputPath, JSON.stringify(config, null, 2))
  console.log("Configuration file written to", outputPath)

  execSync(
    \`ln -s -f '${outputPath}' '${homeDir}/Library/Application Support/Claude/claude_desktop_config.json'\`,
    { stdio: "inherit" }
  )
  console.log("Configuration file copied to Claude Config.")
}

await main()
  .then(() => {
    console.log("Done")
  })
  .catch((error) => {
    if (error instanceof v.ValiError) {
      for (const issue of error.issues) {
        console.error("ValidationError", {
          keys: issue.path.map(({ key }) => key),
          message: issue.message,
          expected: issue.expected,
          received: issue.received,
        })
      }
    } else {
      console.error(error)
    }

    process.exit(1)
  })
```

これで generate\_config.ts を使って設定ファイルを生成すればあとは Claude Desktop を起動するだけで OK という形です。

私の管理リポジトリは公開しているので参考にどうぞ:

## コード生成する上での Tips

動かしてみて気をつけたほうが良いポイントがいくつかあったので紹介します。

### 自分用のコーディング規約を作成しておくと良い

チームではなく自分用の規約とはなんぞや？という感じですが、LLM に「自分風のコーディングスタイルを反映してもらうための規約」です。

そんなにスタイルにこだわりがなくても、プレーンな状態でコードを書かせると納得感のないコードを吐いてくることは割と多いと思います。

自分は「そうじゃないんだよなあ〜」というコードが吐かれた事例をベースに育てています。

例:

- テストは jest より vitest を使ってほしい
- TypeScript をそのまま実行する場合は ts-node ではなく tsx を利用してほしい
- immutable な style が好きなのでなるべく let を使わない
- 関数の引数は Array ではなく ReadonlyArray にしてほしい

のような割と無意識に行っている振る舞いが言語化されていくイメージです。

自分の場合は同リポジトリでこの規約を管理していて、Claude に限らず、コード生成に LLM を使うケースで利用しています。

### 文字数削減に気を使う

Claude には文字数制限があるので、膨大な変更が必要な依頼をなげてしまうと書き込みに失敗しがちです。「続けて」を連打することになります。

一度の文字数制限以外に、日当たりの制限に引っかかってロックされてしまうこともあるので、節約して使うのは重要です。

具体的には以下の3点を気をつけています。

- 依頼単位は小さいものにする
	- 抽象度の高い問題を扱わせたい場合は、抽象度を下げるための Claude Projects を別途用意して分解を手伝ってもらうと良いです
	- LLM 相手でもチケットは小さくして渡そうね、という話に行き着きます
- 知識はなるべくチャットではなく knowledge を活用する
	- 汎用的にしようと思うと MCP を介して knowledge を取得したくなるんですが、チャット経由で取得することになるので文字数としては無駄が多くなります
	- 「1開発対象」=「1 Claude Projects」の粒度で分けてドキュメントだったりは knowledge として渡すほうがコストが低そうです
- 概要把握にコードを読ませない
	- 体感「サンプルコードを読んで同じようなコードスタイルで書いてください」はあまり意図通りのコードが出てきません
	- 「サンプルコードを読んで、暗黙的に存在する規約を言語化してください」→生成された規約を読ませて則ったコードを書かせる、のほうが期待したアウトプットが出て着やすいです
	- 文字数節約のためにもこちらのほうが望ましい

## まとめ

Claude Projects + MCP を利用することで、自由度高く自律的にコード生成と動作確認をさせる方法を紹介しました！

同じような考え方で

- テックブログの構成や下書きを書いてもらう
- Perplexity のようなリサーチ用途
- v0 のような UI を確認しながら実装をする用途
- ...etc

等、Claude のサブスクリプションの範囲内でかなり自由度高く用途別に展開しやすいかなと思います。

MCP を育てて行く上で、MCP 関連の設定の管理が煩雑になっていくので dotfiles 的な管理リポジトリ(dotfiles に含めちゃっても良い)を作るのがオススメです。

43

17