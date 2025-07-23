

## はじめに

Obsidianで構築した「第二の自分」の記憶領域（Vault）を、AIコードエディタのCursorで開くことで、ノートの検索・編集をChatGPTと対話しながら行うことが可能になります。Vault内の対話ログや人格ノート、ナレッジノート、信条ノート、テンプレートなどをCursor上で扱えるように設定し、AI補助によって記録や整理を効率化しましょう。本ガイドでは、**CursorでObsidian Vaultを開く方法**から、**ChatGPT連携によるノート活用のコツ**、**テンプレート管理とAI自動補完の使い方**、さらに**長期運用のためのGit連携・同期方法**まで、初心者でも実践できる手順をステップごとに解説します。

## 1. Obsidian VaultをCursorで開く：環境設定とベストプラクティス

### Vaultをプロジェクトとして開く

まずはObsidianのVaultフォルダをCursorで開きます。**Cursorを起動**し、メニューから「フォルダを開く」（Open Folder）を選択して、Obsidian Vaultのディレクトリを指定します[web-highlights.com](https://web-highlights.com/blog/turn-obsidian-into-an-ai-powered-second-brain-using-cursor/#:~:text=4,more%20in%20the%20Cursor%20documentation)。これでVault内のMarkdownファイル群がCursorのプロジェクトとして読み込まれます。Cursorは開いたフォルダ内のファイルを自動的に**インデックス（ベクトル埋め込み）**し、AIが参照できるデータベースを構築します[web-highlights.com](https://web-highlights.com/blog/turn-obsidian-into-an-ai-powered-second-brain-using-cursor/#:~:text=On%20the%20contrary%2C%20Cursor%20is,the%20necessary%20data%20for%20it)。Vault全体が「第二の自分」の知識ベースとしてAIに認識されるイメージです。初回は埋め込み処理に多少時間がかかる場合もありますが、完了すれば準備OKです。

**補足:** Cursorを利用するにはアカウント登録（無料）が必要です。未登録の場合は初回起動時に案内に従ってサインアップしてください[web-highlights.com](https://web-highlights.com/blog/turn-obsidian-into-an-ai-powered-second-brain-using-cursor/#:~:text=1,automatically%20start%20embedding%20your%20notes)。また、ChatGPTの高度なモデル（GPT-4等）を使う場合、Cursor内でモデル選択も可能です（デフォルトはGPT-4[cursorpractice.com](https://cursorpractice.com/en/cursor-tutorials/getting-started/4-Chat#:~:text=Selecting%20AI%20Models)）。

### Markdownファイルの閲覧・編集設定

Cursorはコードエディタですが、Markdownファイル（.md）もテキストとして問題なく編集できます。デフォルトではMarkdownのプレーンテキストが表示されますが、必要に応じてプレビュー表示することも可能です。CursorはVS Code拡張機能を利用できるため、例えば**「Markdown Preview」**といった拡張を入れればMarkdownを整形表示できます[dev.to](https://dev.to/heymarkkop/cursor-tips-10f8#:~:text=Use%20a%20,It%20is%20shared)。プレビューが不要であればそのままテキスト編集で構いません。Markdown記法（見出しや箇条書き記号など）はそのまま残りますが、Obsidian同様に編集可能です。 **ポイント:** Obsidian特有のリンク記法（`[[ノート名]]`など）もテキストのまま表示されますが、後述のAI検索で活用できます。

### Vault内のフォルダ・ファイル管理

Cursorの左サイドバーにはVault内のフォルダとファイルがツリー表示されます。**ノートの分類**をObsidianで既に行っている場合は、その構成がそのまま反映されます。もし未整理であれば、次のようなフォルダ構成を検討しましょう:

- **Persona（人格）ノート用フォルダ:** Tikiちゃんの人格設定や信条を記したノートを保管します。例：「Persona」フォルダに「人格ノート.md」「信条ノート.md」を配置。
    
- **Knowledge（知識）ノート用フォルダ:** ナレッジベースとなる各種メモをまとめます。トピックごとにノートを作成し「Knowledge」フォルダに入れると良いでしょう。
    
- **Logs（対話ログ）/日記用フォルダ:** ChatGPTとの対話ログや日次の記録を残すノートを保存します。日付ごとにファイルを作成し「2025-05-09.md」のようにYYYY-MM-DD形式で命名すると時系列管理が容易です。
    
- **Templates（テンプレート）用フォルダ:** 繰り返し使うフォーマットはテンプレートファイル（Markdown）にして保管します。例えば「Templates」フォルダに「日記テンプレート.md」「会議メモテンプレート.md」等を用意。
    

新しいノートを作成するには、サイドバーでフォルダを右クリックして「新規ファイル」を選ぶか、上部メニューから「File -> New File」を実行します。ファイル名はわかりやすいものを付け、`.md`拡張子を忘れないようにしてください。**ヒント:** Obsidianで作成した添付ファイルや設定フォルダ（例: `.obsidian/`）も一覧に表示されますが、これらは編集しないよう注意しましょう。必要であればCursorに読み込まれないよう除外も可能です（`.cursorignore`設定については後述[docs.cursor.com](https://docs.cursor.com/context/ignore-files#:~:text=Cursor%20reads%20and%20indexes%20your,file%20to%20your%20root%20directory)）。

## 2. ChatGPT連携機能の活用：Vaultの知識を対話で引き出す

### Vaultのノートを対話に読み込ませる方法

VaultをCursorで開いたことで、**AIチャット（ChatGPT機能）がVault内の情報を参照**できるようになりました。Cursorはプロジェクト内のファイル内容をベクトル索引化しており、質問に応じて関連するデータを自動取得します[web-highlights.com](https://web-highlights.com/blog/turn-obsidian-into-an-ai-powered-second-brain-using-cursor/#:~:text=On%20the%20contrary%2C%20Cursor%20is,the%20necessary%20data%20for%20it)。ChatGPTと対話するには、**AIパネル（Chatウィンドウ）**を開きます。デフォルトで画面右側に折りたたまれているので、`Ctrl/⌘ + L`キーで表示し、入力ボックスに質問を打ち込んでEnterで送信します[web-highlights.com](https://web-highlights.com/blog/turn-obsidian-into-an-ai-powered-second-brain-using-cursor/#:~:text=4,more%20in%20the%20Cursor%20documentation)。するとAI（選択したモデル）が応答し、Vault内の情報を元にした回答を返してくれます。

  
_CursorでObsidian Vaultを開き質問した例。Vault内に保存した過去の会話ログやメモを踏まえ、ChatGPTが正確な回答を生成している様子[web-highlights.com](https://web-highlights.com/blog/turn-obsidian-into-an-ai-powered-second-brain-using-cursor/#:~:text=Image%3A%20Cursor%20Response%3A%20Hello%2C%20Thank,Click%20on%20theCursor%20Response)[web-highlights.com](https://web-highlights.com/blog/turn-obsidian-into-an-ai-powered-second-brain-using-cursor/#:~:text=This%20response%20is%20very%20accurate,and%20correct)。通常のChatGPTでは得られないコンテキストを活用できるのが利点です。_

**ノートを文脈に含めるコツ:** Chat質問時に**現在編集中のファイル**がある場合、その内容は自動で文脈に含まれます[cursorpractice.com](https://cursorpractice.com/en/cursor-tutorials/getting-started/4-Chat#:~:text=Default%20Context)。例えばVault内の「人格ノート.md」を開いたまま「Tikiちゃんの性格設定を教えて」と尋ねれば、開いているノートの内容を参照して回答が得られます。特定のノートに基づいて質問したい場合は、事前にそのノートをエディタで開いておくと良いでしょう。また、**`@`記号**を使ってチャット入力中にファイル名を指定することも可能です。`@`を入力するとファイル検索候補が表示され、選択したノートを文脈に追加できます[docs.cursor.com](https://docs.cursor.com/context/@-symbols/@-files#:~:text=In%20AI%20input%20boxes%20such,results%20after%20the%20%40Code%20strategy)。Vault内の任意のノートをドラッグ＆ドロップでチャット画面に投入しても同様に参照されます[docs.cursor.com](https://docs.cursor.com/context/@-symbols/@-files#:~:text=Drag%20and%20Drop)。このようにして、**Vault全体**だけでなく**特定のノート**を積極的にAIに読ませることもできます。

**例:** 「昨日の対話ログを要約して」とAIに依頼する場合、前日に記録した対話ログノート（例: `Logs/2025-05-08.md`）を開いてから質問すると、そのファイル内容を踏まえた要約が得られます。逆に何も開かずに漠然と質問した場合でも、AIはVault全体を検索して関連情報を探します。ただしVaultが大きい場合や質問が一般的すぎる場合、意図したノートが参照されないこともあります。そんな時は質問文にキーワード（ノート名や固有名詞）を含めたり、上記の方法でノートを直接指定したりしてみましょう。

### プロンプト工夫による記憶補助

Vaultの知識を最大限に引き出すには、**プロンプト（質問文）の工夫**も大切です。例えば、回答にVault内の情報を使ってほしいときは「～というノートに基づくと...」と明示すると効果的です。また「知らない場合はVaultの内容のみを使って答えてください」のように指示すれば、AIが無理に想像で埋めず手持ちの知識に沿った回答をしてくれます。

**人格設定の活用:** Tikiちゃんの人格ノートを活かし、あたかもTikiちゃん本人と対話しているような応答を得ることも可能です。新しいチャットスレッドを開始するとき、最初にシステムメッセージ的に「あなたはユーザーの第二の自分であるTikiちゃんという設定です。以下が人格詳細です: ...」と人格ノートの要点を伝えておく方法があります。または、Vaultルートに特殊ファイル**`.cursorrules`**を作成し、そこにTikiちゃんの人格や口調に関するガイドラインを書く手もあります。`.cursorrules`に記載した内容は**すべてのプロンプトに自動付加**されるため[dev.to](https://dev.to/heymarkkop/cursor-tips-10f8#:~:text=)、毎回指示しなくてもAIがそれを参照してくれるようになります。例えば `.cursorrules` に「常に一人称は『ボク』を使う」「回答は丁寧語で」など書いておけば、ChatGPTの応答が一貫した人格・文体を保ちやすくなります。[dev.to](https://dev.to/heymarkkop/cursor-tips-10f8#:~:text=Use%20a%20,context%20for%20all%20Cursor%20prompts)

**注意:** 2025年現在、Cursorは主にコードアシスト用に最適化されているため、Markdownの内容編集に関する指示では一部挙動が不安定な場合があります[forum.cursor.com](https://forum.cursor.com/t/obsidian-vaults-as-first-class-citizen/16562#:~:text=,gets%20confused%20for%20markdown%20edits)。たとえば「このノートの○○の部分を書き換えて」と依頼すると、チャット画面上でMarkdownが正しく表示されない等の不具合報告があります[forum.cursor.com](https://forum.cursor.com/t/cursor-ai-gets-confused-for-markdown-edits/16560#:~:text=Take%20any%20markdown%20file%20,refactor%20any%20part%20of%20it)。現状、内容を編集する提案が出た場合は自動適用がうまく動作しないケースもあるので、AIの回答を参考に**手動でノートを修正**するのが確実です。

### 対話ログの整理とVaultへの反映

ChatGPTとの対話を重ねるほど、「第二の自分」の知識は豊かになります。その情報をしっかりVaultに蓄積しておくことも重要です。**対話ログの保存**には以下の方法があります。

- **手動でコピーする:** 最も簡単なのは、ChatGPT（Cursor AI）のやり取り内容を選択してコピーし、新規Markdownノートに貼り付けて保存する方法です。対話の日付やテーマをタイトルにすると後で検索しやすくなります。例えば「2025-05-09-対話ログ.md」といったファイル名で保存しておけば、日付順にログを管理できます。
    
- **要点をまとめて記録する:** 全文を残す代わりに、**対話の要約や結論だけをノート化**する方法もおすすめです。対話終了時にChatGPTに「この対話の重要ポイントを箇条書きでまとめて」と依頼し、その結果をナレッジノートに追記する運用です。こうすることで冗長なやり取りを圧縮し、本質的な知見だけをVaultに残せます。
    
- **自動エクスポートツールの利用（上級者向け）:** Cursorには標準でチャット内容をエクスポートするボタンがありませんが、ユーザ有志によるエクスポートスクリプトやツールが存在します[forum.cursor.com](https://forum.cursor.com/t/guide-5-steps-exporting-chats-prompts-from-cursor/2825#:~:text=1,browser%20and%20enter%20this%20query)[forum.cursor.com](https://forum.cursor.com/t/guide-5-steps-exporting-chats-prompts-from-cursor/2825#:~:text=I%E2%80%99ve%20made%20a%20cursor%20chat,as%20md%2C%20pdf%20or%20html)。例えばデータベースから履歴を抽出してMarkdownやHTMLに保存するプログラムがGitHubで公開されています。これらを利用すれば複数のチャット履歴を一括でVaultに取り込むことも可能です。ただし設定がやや高度になるため、まずは手動または要約の方法から始めると良いでしょう。
    

いずれの方法でも大切なのは、**対話から得られた知識を適切な場所に反映する**ことです。対話ログをそのまま保管する場合は「Logs」フォルダ等に蓄積し、後から検索できる状態にします。要約を作成した場合は該当するトピックのナレッジノートや信条ノートに追記すると、Vault全体の知識がアップデートされます。「第二の自分」は常に進化していくものなので、対話を通じて得たものを定期的にVaultにフィードバックしていきましょう。

## 3. Cursor上でのテンプレート管理とAI自動補完の活用

### Obsidianテンプレートの再利用

Obsidianで作成したテンプレートは、Cursor上でも同じMarkdownファイルとして活用できます。Vault内の「Templates」フォルダ（またはテンプレート用ノート群）を開き、目的のテンプレートファイルを表示しましょう。**新しいノートをテンプレートから作る基本手順**は次の通りです：

1. **テンプレートを開く:** 例として「日記テンプレート.md」を開き、その内容（見出しや項目の箇条書きなど）を全選択してコピーします。
    
2. **新規ノートを作成:** 日付や用途に応じて新しい.mdファイルを作ります（例: `2025-05-09-日記.md`）。開いたら先ほどコピーしたテンプレート内容を貼り付けます。
    
3. **プレースホルダの置換:** テンプレート内に`{{date}}`などObsidian独自の変数記法がある場合、Cursorでは自動展開されないため手動で今日の日付やタイトルに置き換えます。必要に応じて見出し名なども編集します。
    

以上でテンプレートに沿ったノートの骨子ができあがります。あとは各項目に沿って内容を書き込んでください。Obsidianのテンプレート機能に比べて自動化はされませんが、**雛形を再利用する**という点では同じ効果が得られます。

**ヒント:** テンプレートファイル名や内容に応じて、自分が分かりやすいように項目を日本語化したり工夫しましょう。例えば「Daily Journal Template.md」を「日記テンプレート.md」としておけば、Vault内検索で「テンプレート」と調べるだけで候補が出て管理が楽になります。

### AI補完機能を活用したテンプレート挿入・要約

CursorのAI機能はチャットだけでなく**インライン補完**にも力を発揮します。これは文章を書いている途中で次の文やコードを提案してくれる機能で、Obsidianには無い利点です。Markdown執筆中に「Tab」キーを押すと、AIが続きを予測して補完してくれる場合があります。例えばテンプレートに沿って項目列挙を始めると、その続きをAIがサジェストしてくれることがあります（箇条書きの続きを提案する等）。常に的確とは限りませんが、書き進める手助けになります。

**AIにテンプレート適用を頼む:** もう一つの活用法は、**ChatGPTにテンプレート内容を基に文章生成させること**です。例えば会議議事録のテンプレートがある場合、Chatに「以下のテンプレートに沿って、今日の会議内容をまとめてください」とプロンプトし、テンプレートテキストを添えることで、自動で項目ごとの内容を書いてもらうことも可能です。具体的には:

1. テンプレートファイルを開き内容をコピー（または`@テンプレートファイル名`でチャットに引用）します。
    
2. ChatGPTに「このテンプレートに従って○○について記録してください」と依頼します。テンプレートの構造（見出し一覧など）も一緒に提示します。
    
3. AIがテンプレートの各項目を埋めたMarkdownテキストを返してくれます。それを新規ノートに貼り付け、必要なら手動で修正します。
    

このようにすれば、ひな型への書き出し作業をAIに任せ、人間は内容の確認・編集に専念できます。ただしVault内の情報を踏まえた正確性が求められる場合は、AIの出力を過信しすぎないよう注意しましょう。**常に最終チェックは自分で行う**ことが大切です。

**ノート要約への活用:** AI補完はノートの**要約作成**にも便利です。長いナレッジノートを後で読み返しやすくするため、冒頭にサマリーを付けたい場合などに役立ちます。手順は、ノート全文を選択してChatGPTに「このノートを要約して」と依頼し、その結果得られた2～3文のまとめをノート先頭に追記するだけです。これで要点をすぐ把握できるようになります。同様に、複数のノートを横断したサマリーも可能です。関連するノートを次々に要約させ、それらを統合する形で新たな知識ノートを作る、といったことも対話を通じてスムーズに行えます。

## 4. Vaultの長期運用: Git連携と同期の工夫

### Markdownノートのバージョン管理（Git導入）

Obsidian Vaultを長期的に運用するなら、**Gitによるバージョン管理**を導入することを強くおすすめします。Gitを使うことで各ノートの変更履歴がすべて記録されるため、過去の状態との差分確認や、誤って内容を消してしまった際の復元が容易になります。また、GitHubなどリモートリポジトリと組み合わせればデバイス間の同期も実現できます[dev.to](https://dev.to/padiazg/how-to-sync-your-obsidian-vault-using-github-a-complete-guide-2l08#:~:text=Setting%20up%20GitHub%20synchronization%20for,taking)。有償のObsidian Syncを使わなくても、無料で安全にVaultをバックアップ・同期できる手段としてGitは有効です[dev.to](https://dev.to/padiazg/how-to-sync-your-obsidian-vault-using-github-a-complete-guide-2l08#:~:text=management%2C%20but%20one%20question%20often,for%20your%20Obsidian%20vault%2C%20whether)。

**Git導入手順の概要:**

1. **Gitリポジトリの初期化:** パソコンにGitがインストールされていない場合は先にインストールします。その後、Vaultのフォルダを開いて`git init`コマンドを実行し、リポジトリを作成します（GUIツールのGitHub Desktop等を使っても構いません）。
    
2. **初回コミットとリモート設定:** すべてのMarkdownノートと関連ファイルをステージしてコミットします。GitHubなどにプライベートリポジトリを作成し、Vaultリポジトリのリモート先として登録します。例えばGitHubを利用する場合、リポジトリを作って表示される`git remote add origin ...`および`git push -u origin main`コマンドをVaultフォルダで実行します。
    
3. **定期的なコミット＆プッシュ:** 今後Vaultに変更を加えた際は適宜`git add .`, `git commit -m "Update notes"`, `git push`という操作で変更を記録・送信します。コミットメッセージには「日記追加」「誤字修正」など内容が分かる説明を書いておくと履歴管理に役立ちます。ObsidianのGitプラグインを使えば一定時間ごとに自動コミット・プッシュも可能ですが、まずは手動でも問題ありません。
    

このようにGitで管理しておけば、Vaultのノート群は常に履歴つきで安全に保存されます。GitHub上にリポジトリがあれば万一PCが故障してもクラウド上にバックアップがある状態です。まさに「自分の知識の完全な支配と保全」が実現できるわけです[dev.to](https://dev.to/padiazg/how-to-sync-your-obsidian-vault-using-github-a-complete-guide-2l08#:~:text=Setting%20up%20GitHub%20synchronization%20for,taking)。

**補足:** `.gitignore`や`.cursorignore`ファイルも適切に設定しましょう。例えばVault直下に`.gitignore`を作り、Obsidianの設定フォルダ（`.obsidian/`）や一時ファイル、不要な添付ファイルなどを無視リストに入れておくと、これらはGitの管理対象から除外されます。同様に、`.cursorignore`を設置すればCursorのAIインデックスから特定ファイルを除外できます[docs.cursor.com](https://docs.cursor.com/context/ignore-files#:~:text=Cursor%20reads%20and%20indexes%20your,file%20to%20your%20root%20directory)。機密性の高いメモや大容量のファイルは`.cursorignore`に記載しておくとAIが参照しなくなるため安心です。

### 複数環境やチームでの同期・共同編集

Gitを使ったVault管理は**複数デバイスやチームでの共有**にも威力を発揮します。自宅PCとノートPCの両方でVaultを編集したい場合、片方で変更をコミット＆プッシュし、もう片方で`git pull`して取り込むだけで内容を同期できます。毎日の終わりにコミット→プッシュし、別端末で作業を始める前にプルする運用にすれば、常に最新ノートを持ち歩けます。同期漏れや競合が起きないよう、「編集前にプル、編集後にプッシュ」を習慣づけましょう。

チームやコミュニティでVaultを共有する場合も、GitHub上のリポジトリにメンバーを招待すれば**共同編集のプラットフォーム**になります。複数人が同じノートを更新する際は、プルリクエストを使って変更内容をレビュー・マージする運用が考えられます。MarkdownテキストはGit上で差分（どの行が変更されたか）が明確に表示されるため、知識の追加・修正履歴を追いやすい利点があります。誰がどの情報を追加したか、議論の結果どんな変更が加えられたか、といったこともGitのログで辿ることができます。

**コミュニティとの連携:** Vaultの一部を公開したり、外部に情報提供するケースもあるでしょう。例えばナレッジノートをブログやWikiとして公開したい場合、GitHubリポジトリをそのままGitHub Pages等でサイト化することも可能です。あるいはObsidian Publishを利用してVaultをウェブ公開する手段もあります。いずれにせよ、**元データはMarkdown＋Gitで管理**しておけば、公開・非公開の切り分けやフォーマット変換も柔軟に行えます。

### 運用時のTipsまとめ

- **バックアップの徹底:** Git運用していても、定期的にリポジトリのコピーを別ディスクに保存するなど多重のバックアップを取ると安心です。特にVaultが成長してかけがえのない知的資産になってきたら、念入りな保存計画を立てましょう。
    
- **定期メンテナンス:** ObsidianとCursorで併用運用する場合、片方で大幅に構成を変えたときはもう片方で不整合がないか確認します（例えばObsidianでノート名を変更→Cursorで古い名前のまま開いていた等がないかなど）。Gitを介していれば基本的に整合性は保たれますが、念のため動作確認する習慣を付けましょう。
    
- **無理のない範囲でAIを活用:** Cursor＋Vault環境は非常に強力ですが、すべてをAI任せにせず自分の頭で整理する時間も取りましょう。AIは提案・補助役です。テンプレートへの自動記入や要約も、最後は自分で見直し改善することで「第二の自分」の質が向上します。
    

以上のガイドを参考に、ObsidianのVaultとCursorを連携させた「第二の自分」環境を構築し、日々の記録と振り返りを充実させてください。適切な設定と運用により、対話ベースで知識を整理する新しいワークフローがきっと実現できるでしょう。Happy noting and chatting![dev.to](https://dev.to/padiazg/how-to-sync-your-obsidian-vault-using-github-a-complete-guide-2l08#:~:text=Setting%20up%20GitHub%20synchronization%20for,taking)