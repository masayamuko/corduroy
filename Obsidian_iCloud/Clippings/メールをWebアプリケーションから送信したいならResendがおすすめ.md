---
title: "メールをWebアプリケーションから送信したいならResendがおすすめ"
source: "https://reffect.co.jp/javascript/resend"
author:
  - "[[reffect20181003@suginami]]"
published: 2023-11-16
created: 2025-07-04
description: "Resend は\"Email for Developers\"とホームページに記載されている通り非常に簡単にメールを送信することができるサービスです。JavaScript 環境だけで利用できるサービスではなく Python, PHP, Go など他の言語でも利用することができます。"
tags:
  - "clippings"
---
Resend は”Email for Developers”とホームページに記載されている通り非常に簡単にメールを送信することができるサービスです。JavaScript 環境だけで利用できるクラウドサービスではなく Python, PHP, Go など他の言語でも利用することができるので Web アプリケーションからメール送信を考えている場合はぜひ Resend を確認してみてください。

サービスを利用するためにはアカウントの作成が必要ですが、フリープランも準備されているので支払い情報の入力は必要なくメールアドレスさえあればすぐに利用することができます。メールを送信するためのサービスなので実際に本番環境で利用する場合には各自が管理するドメインを利用する必要があります。

本文書は Next.js を利用してResendの動作確認を行っています。

## プロジェクトの作成

“npx create-next-app@latest”コマンドで Next.js のプロジェクトを作成します。コマンド実行後に TypeScript, ESLint を利用するかどうか対話的に聞かれますが”src/ directory”を除いてすべて”Yes”に設定しています。

```bash
% npx create-next-app@latest nextjs-14-resend
✔ Would you like to use TypeScript? … No / Yes
✔ Would you like to use ESLint? … No / Yes
✔ Would you like to use Tailwind CSS? … No / Yes
✔ Would you like to use \`src/\` directory? … No / Yes
✔ Would you like to use App Router? (recommended) … No / Yes
✔ Would you like to customize the default import alias (@/*)? … No / Yes
Creating a new Next.js app in /Users/mac/Desktop/nextjs-14-resend.

Using npm.

Initializing project with template: app-tw

Installing dependencies:
- react
- react-dom
- next

Installing devDependencies:
- typescript
- @types/node
- @types/react
- @types/react-dom
- autoprefixer
- postcss
- tailwindcss
- eslint
- eslint-config-next

added 331 packages, and audited 332 packages in 41s

116 packages are looking for funding
  run \`npm fund\` for details

found 0 vulnerabilities
Initialized a git repository.

Success! Created nextjs-14-resend at /Users/mac/Desktop/nextjs-14-resend
```

## アカウントの作成

Resend のサービスを利用するためにはアカウントの作成を行う必要があります。 [Resend](https://resend.com/) のサイトにアクセスを行います。表示されたトップページにある”Get Started”ボタンをクリックします。

![Resendトップページ](https://reffect.co.jp/wp-content/uploads/2023/11/resend-1-1024x672.png)

Resendトップページ

サインアップ画面が表示されるのでアカウントを作成するためにメールアドレスの入力を行うか GitHub, Google アカウントを利用します。

![サインイン画面](https://reffect.co.jp/wp-content/uploads/2023/11/resend-2-1024x672.png)

サインイン画面

サインアップが完了するチーム名の設定画面が表示されるのでチーム名を入力して”Create team”ボタンをクリックしてください。

![チーム名の設定](https://reffect.co.jp/wp-content/uploads/2023/11/resend-3-1024x672.png)

チーム名の設定

Overview 画面が表示され、“Send your first email”ということでサービスを利用するための API キーを作成することができます。

![Overview画面](https://reffect.co.jp/wp-content/uploads/2023/11/resend-4-1024x722.png)

Overview画面

画面に表示された”Add API Key”ボタンをクリックすると API Key が表示されるので Next.js のプロジェクトディレクトリに.env ファイルを作成して表示されている API Key を設定します。

```bash
RESEND_API_KEY=re_DtrTermw_9fcEhapzjwNdZFACQowaZX7r
```

上記の API Key を利用できないので各自が取得した Key を設定してください。

各言語、フレームワークでの設定方法の例が表示されていますが React/Next.js についての設定方法はここにはないのでドキュメントには記載されています。“Send email”ボタンが表示されているのでボタンをクリックします。

![Send an email](https://reffect.co.jp/wp-content/uploads/2023/11/resend-5-1024x479.png)

Send an email

メールが送信されるので to に指定されているメールの Inbox を確認すると下記のメールがonboarding@resend.devから送信されていることが確認できます。

![送信されたメールの確認](https://reffect.co.jp/wp-content/uploads/2023/11/resend-6-1024x514.png)

送信されたメールの確認

## Next.js からのメール送信

Next.js からメールを送信するための設定方法は [Resend のドキュメント](https://resend.com/docs/send-with-nextjs) に記載されているのでその内容を参考に行います。

### Resend パッケージのインストール

resend パッケージのインストールを行います。

```bash
% npm install resend
```

### テンプレートコンポーネントの作成

メールのテンプレートを作成するために compoentns ディレクトリをプロジェクトディレクトリ直下に作成して email-template.tsx ファイルを作成して以下のコードを記述します。

```javascript
import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
  </div>
);
```

### Route Handlers の作成

メールの送信はサーバ側で行うため Route Handlers を作成します。app ディレクトリの下に api/send ディレクトリ、その下に route.ts ファイルを作成して以下のコードを記述します。先ほど作成した EmailTemplate コンポーネントを impor して to には各自のメールアドレスを設定してください。

```javascript
import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['johndoe10@gmail.com'],
      subject: 'Hello world',
      text: 'Welcome John',
      react: EmailTemplate({ firstName: 'John' }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
```

### 動作確認

動作確認を行うため”npm run dev”コマンドで開発サーバを起動します。

```bash
% npm run dev

> nextjs-14-resend@0.1.0 dev
> next dev

   ▲ Next.js 14.0.2
   - Local:        http://localhost:3000
   - Environments: .env
```

作成した Route Handlers を実行するためには API エンドポイントの/api/send に POST リクエストを送信する必要があります。ここでは curl コマンドを利用して実行します。

```bash
% curl -X POST http://localhost:3000/api/send

{"data":{"id":"18dcbf66-8cef-46bd-bf69-962c39fdbe82"},"error":null}%
```

テスト目的のメール送信なのでアカウントを作成したメールアドレスと異なるメールを”to”に指定した場合は以下のエラーメッセージが表示されます。

```bash
{"data":null,"error":{"statusCode":403,"message":"You can only send testing emails to your own email address (johndoe10@gmail.com).","name":"validation_error"}}%
```

ターミナルに表示されている resend.emails.send の戻り値には data と error プロパティを持つオブジェクトが戻されることもわかります。メールの送信に成功した場合は error の値は null ですが失敗すると statusCode、message を含むオブジェクトが入ります。

メール送信に成功した場合は to にしたメールアドレスの Inbox を確認するとメールを確認することができます。

resend.emails.send メソッドにメール送信に必須な項目を設定するだけで Next.js から簡単にメールが送信できることがわかりました。

## ドメインの設定

テストの動作確認では from には”onboarding@resend.dev”、to にはアカウントを作成したメールアドレスしか設定することができませんでした。本番環境では自サイトのドメインを利用してメールを送信することになります。自サイトのドメインからメールを送信するためにドメインの設定を行う必要があります。

サイドバーから Domains をクリックします。画面に表示されている”Add domain”をクリックします。

![Domain画面](https://reffect.co.jp/wp-content/uploads/2023/11/resend-7-1024x503.png)

Domain画面

各自が管理しているドメインを設定します。Region を選択する必要がありますが”North Virgnia”以外の”Ireland”と”San Paulo”は Pro となっているので”North Virgnia”を選択します。

![ドメイン設定画面](https://reffect.co.jp/wp-content/uploads/2023/11/resend-8-1024x503.png)

ドメイン設定画面

Pro はプランの名前です。

![fukidashi](https://reffect.co.jp/wp-content/uploads/2018/12/fukidashi.png)

ドメインの入力を行うと設定したドメイン名と DNS Records の画面が表示されます。Resend から送信されるメールが設定したドメインを利用して送信できるようにドメインの検証を行う必要があります。

![ドメインを入力後の画面](https://reffect.co.jp/wp-content/uploads/2023/11/resend-9-1024x629.png)

ドメインを入力後の画面

各自が契約しているドメインの管理サービスから DNS レコードの追加作業が必要となります。設定するレコードは画面に表示されているので 3 つのレコード(MX, TXT, TXT)を そのまま DNS レコードに追加してください。

  
本文書では DNS レコードの追加作業については利用するサービス毎に設定の画面が異なるため省略していますが難しい作業ではありません。  

![fukidashi](https://reffect.co.jp/wp-content/uploads/2018/12/fukidashi.png)

各自が利用するサービスで DNS の設定が完了したら、右上にある”Verify DNS Records”ボタンをクリックしてください。設定したドメインと追加した DNS レコードの検証が行われます。

![ドメインを入力後の画面](https://reffect.co.jp/wp-content/uploads/2023/11/resend-9-1024x629.png)

Verify DNS Recordsボタンのクリック

検証が開始してしばらくはステータスは”Pending”の状態になるので”Verified”のステータスに変わるまで待ちます。

検証が完了するとステータスは”Pending”から”Verified”に変わります。これでドメインの設定は完了です。

![Verifiedのステータス確認](https://reffect.co.jp/wp-content/uploads/2023/11/resend-11-1024x629.png)

Verifiedのステータス確認

動作確認のために from に設定したドメインのメールアドレス、from にアカウント作成に利用した以外のメールアドレスを設定してください。各自の環境によって to と form に設定する値は変わります。

```javascript
import { EmailTemplate } from '../../../components/email-template';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: 'reffect@xxxxxx.com',
      to: ['orangesky2011@gmail.com'],
      subject: 'Hello world',
      text: 'Welcome John',
      react: EmailTemplate({ firstName: 'John' }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
```

route.ts ファイルの更新が完了したら curl コマンドを利用して POST リクエストを送信します。

```bash
% curl -X POST http://localhost:3000/api/send

{"data":{"id":"225d3e68-a33f-479a-b5e6-bb26c1ee1a30"},"error":null}%
```

“to”に設定したメールアドレスの Inbox に”from”で設定したメールアドレスから送信したメールが届いていることを確認してください。メールが届いていれば正しい設定が完了しています。

送信したメールについてはサイドメニューの Emails から確認することができます。各メールをクリックすると送信した内容も確認することができます。

![メール送信履歴](https://reffect.co.jp/wp-content/uploads/2023/11/resend-14-1024x611.png)

メール送信履歴

サイドメニューの Logs では成功したか失敗したか等のメールのログを確認することができます。

## 価格、送信数制限

価格や送信数の制限については Settings 画面から確認することができます。

![プランと送信制限](https://reffect.co.jp/wp-content/uploads/2023/11/resend-13-1024x691.png)

プランと送信制限

2023 年 11 月ではフリープランでは月間 3,000 通のメールを送信でき、一日に 100 通のメールを送信することができます。ドメインの設定もプランによって異なります。

**\## React Email**

React Email は Resend と同じ開発者によって開発され React と TypeScript を利用して HTML メールのテンプレートを作成することができます。動作確認では EmailTemplate コンポーネントを利用しましたがそれの代わりになるコンポーネントを作成します。welcome メールや招待メールなどに活用することができます。

![React Emailトップ画面](https://reffect.co.jp/wp-content/uploads/2023/11/resend-15-1024x730.png)

React Emailトップ画面

### パッケージのインストール

[公式ドキュメントの Manual Setup](https://react.email/docs/getting-started/manual-setup) を参考にパッケージのインストールを行います。

```bash
% npm install react-email @react-email/button @react-email/html -E
```

### scripts への追加

package.json ファイルの scripts に”mail”の 1 行を追加します。

```javascript
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "mail": "email dev"
},
```

### テンプレートの作成

プロジェクトディレクトリ直下に emails ディレクトリを作成して index.tsx ファイルを作成して以下のコードを記述します。

```javascript
import { Button } from "@react-email/button";
import { Html } from "@react-email/html";
import * as React from "react";

export default function Email() {
  return (
    <Html>
      <Button
        href="https://example.com"
        style={{ background: "#000", color: "#fff", padding: "12px 20px" }}
      >
        Click me
      </Button>
    </Html>
  );
}
```

### 開発サーバの起動

package.json ファイルに追加した mail を利用して開発サーバを起動します。

```bash
% npm run mail
```

Next.js14 環境 で実行するとエラーが表示させるたのしばらくしてまた動作確認を行います。

![fukidashi](https://reffect.co.jp/wp-content/uploads/2018/12/fukidashi.png)