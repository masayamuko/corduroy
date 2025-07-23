

ChatGPTのように自分の分身となるパーソナルAI（例：「ティキちゃん」的な人格）を、Mac上でCursorを使って構築・運用するための手順を**ステップ形式**で解説します。各ステップごとに**目的**や**準備**、**手順**、**注意点**、**Tips**を整理しました。ChatGPTに慣れた方が、初めてCursorを使って長文コンテキストや記憶をもつAIを構築する際のガイドラインになります。

## ステップ1: Cursorのプラン理解と選択

**目的:** まずCursorの提供するプランと機能差を理解し、用途に合ったプランを選びます。特に長文コンテキスト扱いや使用できるモデル、ルール/ノートパッド機能について把握します。

**必要な準備:** Cursor公式サイトのプラン情報を確認。自分の利用量や使いたい機能（GPT-4やClaudeなど高度なモデル、大きなコンテキスト利用など）をイメージします。

**手順:**

1. **プラン種類の把握:** Cursorには現在、無料の**Hobbyプラン**（いわゆるフリープラン）、有料の**Proプラン**、および**Businessプラン**（チーム向け）があります[builder.io](https://www.builder.io/blog/cursor-advanced-features#:~:text=What%20are%20the%20pricing%20options,for%20Cursor)[cursor.com](https://cursor.com/pricing#:~:text=%2A%20)。料金は月額でHobbyは**無料**、Proは**$20/月**、Businessは**$40/ユーザー/月**となっており、年額一括払いでは約20%割引されます[cursor.com](https://cursor.com/pricing#:~:text=Monthly%20Yearly%20%28save%2020)[cursor.com](https://cursor.com/pricing#:~:text=%2A%20)。
    
2. **Hobby（無料）の内容:** フリープランでも基本的なCursor機能を試すことが可能です。ただし**高度なモデルの利用回数に制限**があります。例えばGPT-4やClaudeといった「プレミアムモデル」は**月50回まで**と限定され[cursor.com](https://cursor.com/pricing#:~:text=Includes)、その他の通常のコード補完（completions）は**月2000回まで**に制限されています[cursor.com](https://cursor.com/pricing#:~:text=Includes)。初回登録時には**2週間のPro相当の無料トライアル**（プレミアムモデル150回など）が付与されます[cursor.com](https://cursor.com/pricing#:~:text=Includes)[cursor.com](https://cursor.com/pricing#:~:text=Large%20language%20models%20cost%20quite,need%20to%20cover%20our%20costs)。
    
3. **Proプランの内容:** Proでは**プレミアムモデルを500回（優先実行）+無制限（低速実行）**で利用可能[cursor.com](https://cursor.com/pricing#:~:text=Everything%20in%20Hobby%2C%20plus)。また通常の補完も無制限になります[cursor.com](https://cursor.com/pricing#:~:text=Everything%20in%20Hobby%2C%20plus)。要するにProにすればGPT-4やClaudeなどを実質上回数気にせず使えるため、**長時間のチャットや長文コンテキスト利用に適しています**。またProとBusinessでは**Claude 3.5/3.7 Sonnet**などAnthropic社のモデルや、OpenAIのGPT-4（Cursor内名称o1等）が自由に選択できます[cursor.com](https://cursor.com/pricing#:~:text=What%20are%20the%20premium%20models%3F)。
    
4. **Businessプランの内容:** Businessは基本的にProと同じモデル・使用上限ですが、**組織管理機能**（プライバシーモードの強制、一括課金、SSO対応など）が追加されます[cursor.com](https://cursor.com/pricing#:~:text=Everything%20in%20Pro%2C%20plus)。個人で使う分にはProで十分で、Businessはチームで機密コードを扱う場合などに検討します。
    
5. **長文コンテキスト利用の前提:** **長大なコンテキスト**を扱うには、Anthropic Claudeの長文モデル（例: Claude 3.7 Sonnet MAX モード）やOpenAIのGPT-4 32k版などが必要になります。これらはCursor上では「プレミアムモデル」に分類されPro以上で利用可能です。またClaudeのMAXモードでは**最大20万トークン**もの文脈を扱えるため[apidog.com](https://apidog.com/blog/how-to-use-claude-3-7-sonnet-max-mode-in-cursor-ai-ide/#:~:text=1,capable%20when%20working%20with%20large)、非常に大量の知識や会話履歴を含めることができます。フリープランでも**自前のAPIキーを設定すれば**これらモデルを動かせますが（後述）、API利用料が別途発生します[docs.cursor.com](https://docs.cursor.com/settings/api-keys#:~:text=Cursor%20lets%20you%20input%20your,when%20calling%20the%20LLM%20providers)。頻繁に長文を使う場合はPro加入か、自前APIキーの用意を検討しましょう。
    
6. **ルール/ノートパッド機能の差:** ルールやノートパッドはCursorソフト自体の機能であり、**プランによる利用制限は基本ありません**。無料でもプロジェクト内にルールファイルを作成したり、ノートパッドを複数作って@参照することが可能です。Proではチャット回数制限が緩和されるため、結果的に**ルールに沿った長いやりとり**がしやすくなる、といった違いになります。機能そのものにロックはありませんので、Hobbyでもひと通り設定は試せます。
    

**注意点:** フリープランの月50回というのは**高度なモデル（GPT-4/Claude等）の呼び出し**に対する上限です[cursor.com](https://cursor.com/pricing#:~:text=Includes)。50回を超えるとその月はそれらモデルが使えなくなります（または非常に遅いキューに入れられる）。長時間の対話を続けるとすぐ到達するため、**本格運用前にProへの移行を視野**に入れてください。またCursorは無料トライアル中のみ500回の高速リクエストが可能ですが、終了後は制限が厳しくなるのでご注意ください。モデル選択に関して、無料でもGPT-3.5など**非プレミアムモデルは無制限**で利用できるため、軽い作業はそちらを使い、重要な場面でGPT-4等を使う工夫もできます。

**Tips:** 初期段階ではまず**無料トライアル**でPro機能を試してみることをおすすめします。14日間の間に、自分の作りたいAIの会話スタイルや必要なコンテキスト量を測りましょう。その上で、長期的にも使い込みたいと感じたらPro（月額約2,700円程度）を検討すると良いでしょう[builder.io](https://www.builder.io/blog/cursor-advanced-features#:~:text=What%20are%20the%20pricing%20options,for%20Cursor)。もしOpenAIやAnthropicのAPIキーを既に持っている場合、Cursorにそれを設定することで**自前課金で上限なく利用可能**です[docs.cursor.com](https://docs.cursor.com/settings/api-keys#:~:text=Cursor%20lets%20you%20input%20your,when%20calling%20the%20LLM%20providers)（この場合Cursorのプラン制限に縛られません）。ただしAPI利用料は別途かかる点と、一部Cursor独自モデル（o1-mini等）はAPIキーでは動かない制約[docs.cursor.com](https://docs.cursor.com/settings/api-keys#:~:text=OpenAI%20API%20Keys)も覚えておいてください。

---

## ステップ2: MacへのCursorインストールと初期設定

**目的:** CursorアプリケーションをMac（Appleシリコン含む）にインストールし、パーソナルAIを動かすための初期設定（ログイン、APIキー設定、言語設定など）を行います。

**必要な準備:** Macマシン（IntelまたはM1/M2/M3チップ搭載機）。インターネット接続。OpenAIやAnthropicのAPIキー（お持ちであれば用意）。Macのシステム設定で不明な開発元のアプリを許可できる知識。Cursor公式サイトのダウンロードページ。

**手順:**

1. **公式サイトからダウンロード:** Cursor公式サイト（cursor.com）にアクセスし、「Download」ページからMac用のインストーラをダウンロードします。Mac用には**Intel版（x64）**と**Apple Silicon版（arm64）**の2種類が提供されていますので、自身のMacに合わせて正しい方を取得してください[forum.cursor.com](https://forum.cursor.com/t/cursor-does-not-install-on-apple-m1-macos-sequoia-15-2/65024#:~:text=Hey%20bro%2C%20I%20have%20it,if%20it%20solves%20your%20problem)。例えばM1/M2/M3搭載Macの場合は**darwin-arm64.dmg**を選択します。
    
2. **アプリのインストール:** ダウンロードしたDMGファイルを開き、Cursorアプリを「アプリケーション」フォルダにドラッグ＆ドロップしてインストールします。Macが「開発元を検証中…」と表示しインストールをブロックする場合は、システム設定の「プライバシーとセキュリティ」で許可を与えるか、Ctrlキーを押しながらアプリを開いて承認してください。※Apple Silicon版を使えば基本的にネイティブ動作し問題なく起動します（v0.44.9以降Appleシリコン対応）[doesitarm.com](https://doesitarm.com/app/cursor#:~:text=Does%20Cursor%20work%20on%20Apple,as%20Cursor%20or%20Todesktop)。
    
3. **起動とサインイン:** Cursorを起動すると、初回にログインが求められます。Googleアカウントなどでサインインし、Cursorアカウントを作成してください（フリープラン開始＆Proトライアル開始となります）。ログイン後、**キーボードショートカット設定**（VS Code互換など）や**AIと対話する言語の選択**など初期セットアップ画面が表示されます[datacamp.com](https://www.datacamp.com/tutorial/cursor-ai-code-editor#:~:text=After%20installing%2C%20we%E2%80%99re%20prompted%20with,the%20following%20configuration%20screen)。ここで日本語を選べば、以降のAIアシスタントへの指示や回答を日本語で行えます。
    
4. **OpenAI/Anthropic APIキー設定（任意）:** ご自身でOpenAIのAPIキーやAnthropic ClaudeのAPIキーを持っている場合、Cursorに登録しておきましょう。画面右上の**設定(歯車アイコン) > Models**(モデル)の項目に進み、各プロバイダ（OpenAIやAnthropic）の欄にAPIキーを貼り付けて「Verify（確認）」をクリックします[docs.cursor.com](https://docs.cursor.com/settings/api-keys#:~:text=Cursor%20lets%20you%20input%20your,when%20calling%20the%20LLM%20providers)。正しく認証されれば**自分のAPI経由でモデルを使用するモード**が有効になります。[docs.cursor.com](https://docs.cursor.com/settings/api-keys#:~:text=Cursor%20lets%20you%20input%20your,when%20calling%20the%20LLM%20providers)（APIキー使用時は、カーソル社のサーバ経由ではありますがリクエスト回数無制限で利用可能です）。キーを設定しない場合は、Cursor社が提供する枠内でモデルを呼び出す形になります。
    
5. **モデルの有効化設定:** Cursorではデフォルトで使えるモデルの種類が制限されている場合があります。**設定 > Models**の一覧で、使用したいモデル（例えば「claude-3.7-sonnet MAX mode」など）がオフになっていたらオンに切り替えておきます[apidog.com](https://apidog.com/blog/how-to-use-claude-3-7-sonnet-max-mode-in-cursor-ai-ide/#:~:text=1,to%20enable%20it%20for%20use)。Proプランの場合、GPT-4やClaudeなど主要モデルは基本有効ですが、長文特化のMAXモードなどは明示的にトグルが必要な場合があります[apidog.com](https://apidog.com/blog/how-to-use-claude-3-7-sonnet-max-mode-in-cursor-ai-ide/#:~:text=1,to%20enable%20it%20for%20use)。自前APIキー使用時も、ここでモデルを有効にする必要があります。
    

**注意点:** ダウンロード時にアーキテクチャを間違えると、Macに「壊れているため開けません」等と表示されます[forum.cursor.com](https://forum.cursor.com/t/cursor-does-not-install-on-apple-m1-macos-sequoia-15-2/65024#:~:text=Download%20MacOS%20version%20from%20the,not%20the%20reason%20for%20this)。その際は正しいARM版/Intel版を入手し直してください。インストール直後、**古いCursorバージョンがある場合は自動で上書き**されます。トラブルがあれば公式フォーラム[forum.cursor.com](https://forum.cursor.com/t/cursor-does-not-install-on-apple-m1-macos-sequoia-15-2/65024#:~:text=Cursor%20cannot%20be%20installed%20on,Mac%20until%20you%20fix%20this)も参考にしてください。また、APIキーを設定した場合、一部のCursor独自機能（AI補完「Cursor Tab」など）はキー経由では動作しないことがあります[docs.cursor.com](https://docs.cursor.com/settings/api-keys#:~:text=Some%20Cursor%20features%20like%20Tab,like%20OpenAI%2C%20Anthropic%2C%20and%20Google)。しかし**チャットやエージェント機能はキー設定でも問題なく利用可能**です。AnthropicのAPIキー取得は個人では難しい場合があります（招待制のため）。入手できない場合は、Cursor側が提供するClaudeモデル利用枠（Proプランの範囲内）を使うことになります。

**Tips:** 初期設定画面で**「Codebase-wide」**というオプションがあれば有効にしておくと良いでしょう[datacamp.com](https://www.datacamp.com/tutorial/cursor-ai-code-editor#:~:text=,to%20run%20from%20the%20terminal)。これはプロジェクト全体をAIが理解に用いるかどうかの設定で、Persona用フォルダ内のファイルを参照しやすくなります。また**「Privacy Mode」**（プライバシーモード）の設定も確認してください。Pro以上ではオンにすると**プロンプトやコードが外部に送信・保存されなくなり**[cursor.com](https://cursor.com/pricing#:~:text=Large%20language%20models%20cost%20quite,need%20to%20cover%20our%20costs)[cursor.com](https://cursor.com/pricing#:~:text=What%20code%20do%20you%20store%3F)、プライバシーを重視した運用が可能です（Businessでは組織的に常時オンにできます）。個人の創作AIであれば必要に応じて切り替えてください。最後に、CursorはVS Codeベースなのでエディタ操作はVSCodeライクです。VSCodeに慣れている場合は**ショートカットをVSCodeモード**にすると快適です[datacamp.com](https://www.datacamp.com/tutorial/cursor-ai-code-editor#:~:text=After%20installing%2C%20we%E2%80%99re%20prompted%20with,the%20following%20configuration%20screen)。

---

## ステップ3: Persona用プロジェクトの作成とファイル構成

**目的:** AIに持たせる人格や記憶を管理するための**プロジェクトフォルダ**を用意し、Persona（人格プロファイル）やMemory（記憶データ）を記述するファイル群を構成します。これによりAIとの対話内容や知識を整理し、プロジェクト単位で管理できるようにします。

**必要な準備:** AIに与えたい**人格情報（キャラクター設定）**や**記憶させたい情報**の下書き。例えば、「ティキちゃん」の人物像（口調、知識範囲、役割など）や、自分に関する基本情報リストなどをテキストで用意しておくとスムーズです。

**手順:**

1. **新規フォルダの作成:** Finderで適当な場所に、新しいフォルダを作成します。名前は「TikiPersona」や「MySecondAI」などわかりやすいものにします。このフォルダが**AI用プロジェクト**となり、対話やルール、メモがこの中で管理されます。
    
2. **Cursorでプロジェクトを開く:** Cursorを起動し、メニューから**「Open」**ないし**「Open Folder」**を選択して、上記で作成したフォルダを開きます。するとCursor上でそのフォルダがワークスペース（プロジェクト）として扱われるようになります。初めてCursorでフォルダを開いた場合、自動的に`.cursor`という隠しフォルダが作成され、Cursor設定や履歴DBがそこに保存されます。
    
3. **Persona情報ファイルの作成:** プロジェクト直下に、新規ファイル「**persona.md**」を作成します。このMarkdownファイルにAIの人格プロフィールを書き込みます。内容例: AIの名前（ティキちゃん等）、一人称や口調、性格、知識の範囲（百科事典的知識を持つ等）、禁止事項など。後でルールに転用しますが、まずは自由に書き出して構いません。
    
4. **Memory情報ファイルの作成:** 同様に「**memory.md**」または「**knowledge.md**」といったファイルを作成します。ここにはAIに記憶させたい事項を書きます。例: ユーザー（あなた）のプロフィール（誕生日や好きなもの）、これまでの会話で明らかになった事実、AI自身が知っているべき設定（架空の過去の出来事）など。最初は箇条書きで構いません。今後会話が進むにつれて更新していく土台になります。
    
5. **フォルダ構成の工夫（任意）:** プロジェクト内に`docs`フォルダや`data`フォルダを作って情報を分類してもOKです。例えば`persona/`ディレクトリを作り、その中に詳細な設定を書いたファイルを複数置くこともできます。小説の設定資料集のように複数ファイルに分け、それらを必要に応じて参照する形でも構築可能です。まずはシンプルに上記2ファイルで始め、必要に応じて拡張しましょう。
    

**注意点:** Cursorでは**プロジェクト内のテキストもAIの参照コンテキスト**になり得ます。デフォルトではコードや文章をAIが検索・要約できる**コードベースインデックス機能**があります（有効化している場合）[datacamp.com](https://www.datacamp.com/tutorial/cursor-ai-code-editor#:~:text=,to%20run%20from%20the%20terminal)。そのため、persona.mdやmemory.mdに書いた内容もAIにとって参照可能な情報源です。ただし自動で常に読まれるわけではなく、後述する**ルール**や**@参照**を使って明示的に提示する必要があります。機密情報を含める場合は`.cursorignore`で除外もできますが[forum.cursor.com](https://forum.cursor.com/t/what-is-the-difference-between-notepad-project-root-cursorrules-rules-for-ai-in-the-cursor-settings-and-the-recent-added-project-rules/43133#:~:text=,the%20cursor%20will%20read%20it)、今回は自分専用AIなのであまり気にしすぎなくても良いでしょう。また、プロジェクトをGit管理する場合、この`.cursor`フォルダ内にはチャット履歴DBなども含まれるため、**公開リポジトリには含めない**よう注意してください。

**Tips:** この段階で**AIに与える設定をテキスト化する作業**は、AIキャラクターを作り込む上で重要です。箇条書きだけでなく、**例示会話**を書いておくのも有効です。たとえばpersona.mdに「ユーザー: 今日はどんな天気？ AI: （ティキちゃんらしく）えへへ、今日はとってもいい天気だね！」のように、AIの口調例をいくつか埋め込んでおくと、後でルールに転用する際に役立ちます。さらに、構成したフォルダごと**定期的にバックアップ**を取ることもおすすめします。自分の「第二の自分」の設定データなので、バージョン管理（Gitなど）で履歴を残しておくと、人格や知識をどう変更してきたか振り返ることができます。

---

## ステップ4: ルール設定とノートパッド活用によるコンテキスト共有

**目的:** Cursorの**Rules（ルール）機能**と**Notepad（ノートパッド）機能**を使って、AIに持たせたい人格・知識を**システムレベルの指示**として登録します。これにより、毎回の対話プロンプトに含めなくてもAIが常にその人格や規則を踏まえて応答するようになります。またノートパッドにより、チャットやエディタ上で共有したい情報を柔軟に参照できるようにします[docs.cursor.com](https://docs.cursor.com/beta/notepads#:~:text=Notepads%20are%20powerful%20context,contexts%20for%20your%20development%20workflow)[docs.cursor.com](https://docs.cursor.com/beta/notepads#:~:text=Getting%20started)。

**必要な準備:** ステップ3で作成したpersona.mdやmemory.mdの内容を参照できるようにしておきます。Cursor上でプロジェクトが開かれていることを確認し、右側のサイドバーに「Chat」や「Notepads」のパネルが見えている状態にします。

**手順:**

1. **プロジェクトルールの作成:** Cursorではプロジェクトごとのルールを複数登録できます（`.cursor/rules`フォルダにファイルとして保存されます）[docs.cursor.com](https://docs.cursor.com/context/rules#:~:text=Project%20Rules)[docs.cursor.com](https://docs.cursor.com/context/rules#:~:text=Rules)。新しいルールを作るには、**コマンドパレット**（`Cmd+Shift+P`）を開き「New Cursor Rule」を選択するか、設定画面の**Rules**セクションから「新規ルール追加」を行います[docs.cursor.com](https://docs.cursor.com/context/rules#:~:text=Creating%20a%20rule)。例えば「persona.mdc」という名前でルールファイルを追加しましょう。この`.mdc`ファイルはYAMLメタデータと内容ブロックからなります[docs.cursor.com](https://docs.cursor.com/context/rules#:~:text=Rule%20structure)。
    
2. **ルール内容の設定:** persona.mdcをエディタで開き、メタデータと内容を記述します。基本フォーマットは以下の通りです（`---`で囲まれた部分がメタ情報）:
    
    md
    
    コピーする
    
    `--- description: "AIの人格ルール"   # ルールの説明（任意） alwaysApply: true              # 常に適用するルールに設定 ---  あなたは「ティキちゃん」という名前のAIアシスタントです。   明るく優しい口調で話し、語尾に「♪」をつける癖があります。   人間のユーザーをサポートする親友という設定です。   # （以下略、persona.mdから必要情報を箇条書きなどで転記）`
    
    この例では`alwaysApply: true`とすることで**常に適用されるルール**になります[docs.cursor.com](https://docs.cursor.com/context/rules#:~:text=Rule%20Type%20Description%20,ruleName)。内容部分にステップ3で考えた**人格設定（口調や性格、役割、禁止事項など）**を記述します。必要に応じて改行や箇条書き、Markdown見出しも使えます。
    
3. **他のルールの追加（必要に応じて）:** ルールは分割して複数作れます[docs.cursor.com](https://docs.cursor.com/context/rules#:~:text=Good%20rules%20are%20focused%2C%20actionable%2C,and%20scoped)。例えば**知識ルール**や**スタイルガイド**を別ファイルにしてもOKです。大きな記憶設定は `memory.mdc` として `alwaysApply:true`にし、中にmemory.mdの内容を貼り付けても良いでしょう。また、プロジェクト特有のコマンドや用語のルールが欲しければ`description`を付けつつ作成できます。ルールにはこの他**Auto-Attached（特定パスに関連付け）**や**Manual（手動 @で呼び出す）**など種類があります[docs.cursor.com](https://docs.cursor.com/context/rules#:~:text=Rule%20Type%20Description%20,ruleName)が、人格や記憶といった常時参照したい内容は基本「Always」にします。ルールファイルを複数作る場合、それぞれ`.cursor/rules/`配下に保存され、Cursor設定から一覧・ON/OFF管理も可能です[docs.cursor.com](https://docs.cursor.com/context/rules#:~:text=Creating%20a%20rule)。
    
4. **ノートパッドの作成:** 次に**Notepad（ノートパッド）**機能を使って、動的に参照したいメモを用意します。サイドバーの「Notepads」セクションで「＋」ボタンをクリックし、ノートパッドに名前（例：「Memory」や「設定メモ」）を付けて新規作成します[docs.cursor.com](https://docs.cursor.com/beta/notepads#:~:text=Getting%20started)。作成したノートパッドに、先ほどのmemory.mdの内容をコピーペーストするか、要約を書き込みます。ノートパッドは**チャットや他の箇所で`@名前`と記述するとその内容を参照できる共有メモ**です[docs.cursor.com](https://docs.cursor.com/beta/notepads#:~:text=Notepads%20serve%20as%20collections%20of,and%20documentation%20that%20can%20be)。ファイル添付も可能なので、大きなテキストはファイルをドラッグ&ドロップして貼り付けても構いません[docs.cursor.com](https://docs.cursor.com/beta/notepads#:~:text=Key%20features)。複数のノートパッドを作成し、トピック別にメモを分けておくこともできます。
    
5. **ルール・ノートパッドの適用確認:** ルールを保存するとAIへのシステムプロンプトに組み込まれるようになります[docs.cursor.com](https://docs.cursor.com/context/rules#:~:text=Large%20language%20models%20do%20not,context%20at%20the%20prompt%20level)。ノートパッドは明示的に`@`で参照した時のみ読み込まれます[forum.cursor.com](https://forum.cursor.com/t/what-is-the-difference-between-notepad-project-root-cursorrules-rules-for-ai-in-the-cursor-settings-and-the-recent-added-project-rules/43133#:~:text=,the%20cursor%20will%20read%20it)。正しく設定できたか確認するには、Cursorの設定>Rules画面でルール一覧を見たり、実際に次ステップでチャットしてAIの応答に反映されているかを観察します。
    

**注意点:** 現在のCursorでは**「プロジェクトルール」**が推奨されており、昔のバージョンにあった単一ファイルの`.cursorrules`は**Legacy（非推奨）**扱いです[docs.cursor.com](https://docs.cursor.com/context/rules#:~:text=User%20Rules)。今回のように複数ルールを管理する場合、`.cursor/rules/`フォルダにファイルで保存する方式が便利なので、`.cursorrules`は使わなくて問題ありません（将来的に削除予定との情報あり[docs.cursor.com](https://docs.cursor.com/context/rules#:~:text=User%20Rules)）。また**ユーザールール**（グローバルルール）という機能もCursorにはあります[docs.cursor.com](https://docs.cursor.com/context/rules#:~:text=User%20Rules)。設定>Rules for AIで定義するそれは**全プロジェクト共通**のシステムプロンプトになります。例えば「常に敬語で答える」といった汎用ルールを入れておくことも可能ですが、今回の人格は特定プロジェクト内だけで使う想定なので**ユーザールールは空 or OFF**のままにしておくほうが無難です（他の用途のとき干渉しないように）。ノートパッドについては**Beta機能**であり将来変更の可能性があります[docs.cursor.com](https://docs.cursor.com/beta/notepads#:~:text=Notepads%20are%20currently%20in%20beta,be%20deprecated%20in%20the%20future)。ただ非常に便利なコンテキスト共有手段なので積極的に活用しましょう。内容が長すぎるノートパッドは扱いづらくなるので、適度な長さに収めるのもポイントです[docs.cursor.com](https://docs.cursor.com/context/rules#:~:text=Good%20rules%20are%20focused%2C%20actionable%2C,and%20scoped)（長大な情報はファイルにして分割し、必要なときに@で呼ぶと良いでしょう）。

**Tips:** **ルールは500行以下に抑える**のが目安とされています[docs.cursor.com](https://docs.cursor.com/context/rules#:~:text=Good%20rules%20are%20focused%2C%20actionable%2C,and%20scoped)。あれこれと情報を詰め込みすぎず、**要点を絞った複数のルール**に分割すると効果的です。例えば「キャラクター基本」「口調と文体」「知識ドメイン」などテーマごとに分けると整理できます。またCursorには**対話内容からルールを自動生成**する機能もあります[docs.cursor.com](https://docs.cursor.com/context/rules#:~:text=Generating%20rules)。後述しますが、対話中に`/Generate Cursor Rules`とコマンドを入力すると、直近の会話から推奨ルールを作ってくれるので、長い対話後にそれを保存して今後使う、といった運用も可能です。ノートパッドについては、**よく使う@参照をテンプレ化**できる利点があります。例えばプロンプトで毎回「先週までの議論を考慮して...」と説明していた部分を、ノートパッド「LastWeekSummary」にまとめておき`@LastWeekSummary`と書くだけで共有する、といった使い方もできます。ノートパッド作成時には**できるだけ短い名前**（スペースや特殊文字を含まない）を付けると、`@`入力で補完しやすくなります。

---

## ステップ5: パーソナルAIとのチャット開始と長文コンテキスト活用

**目的:** 準備した人格ルールとメモを元に、Cursor上で実際にAIアシスタント（第二の自分）とのチャットを開始します。必要に応じて長文コンテキストモデルを選択し、大量の知識を持った対話を行います。

**必要な準備:** ここまでのステップで**ルール設定**と**ノートパッド**の準備が完了していること。Cursorの画面でチャットパネルが開いていること（右側に「Chat」と入力欄が表示されている状態）。Proプランかトライアル中であるか、もしくは自前APIキーで高度なモデルが使える状態が望ましいです。

**手順:**

1. **モデルの選択:** チャットを始める前に、画面右下の**モデル選択ドロップダウン**を確認します。デフォルトでは軽量モデル（gpt-3.5相当やCursor独自モデル）になっている場合があります。人格AIとして**高い応答品質や長文コンテキスト**を求めるなら、`GPT-4`（OpenAI o1）や`Claude 3.7 Sonnet`を選択しましょう。[cursor.com](https://cursor.com/pricing#:~:text=What%20are%20the%20premium%20models%3F)特に長大なメモリを含めたいなら**Claude 3.7 Sonnet MAX**（20万トークン対応）がお勧めです[apidog.com](https://apidog.com/blog/how-to-use-claude-3-7-sonnet-max-mode-in-cursor-ai-ide/#:~:text=1,capable%20when%20working%20with%20large)。モデル一覧に表示されていない場合は、前ステップで触れた設定>Modelsで有効化してください。
    
2. **チャットの開始:** 挨拶から始めてみましょう。例えばチャット入力欄に「こんにちは、ティキちゃん。」と送信します。Cursorのチャットは**対話形式**で、左側に自分（ユーザー）の発言、右側にAIの応答が表示されます。バックエンドでは、**あなたの発言 + ルール群（システムプロンプト）**をまとめてモデルに送り、返信を受け取っています[docs.cursor.com](https://docs.cursor.com/context/rules#:~:text=Large%20language%20models%20do%20not,context%20at%20the%20prompt%20level)。そのため、AI（ティキちゃん）は冒頭からルールで定義した口調・人格で答えてくるはずです。例えば「えへへ、こんにちは♪」のように、指定通りの明るい調子で返事が来るでしょう。
    
3. **対話の継続:** あとは自由に会話を続けてみます。ChatGPT同様、質問したり相談したり、雑談も可能です。**ノートパッド参照**が必要なときは、発言中に `@ノートパッド名` と入力します。例えば「@Memory」によってMemoryノートパッドの内容がプロンプトに差し込まれます[forum.cursor.com](https://forum.cursor.com/t/what-is-the-difference-between-notepad-project-root-cursorrules-rules-for-ai-in-the-cursor-settings-and-the-recent-added-project-rules/43133#:~:text=,the%20cursor%20will%20read%20it)。AI側はそれを追加コンテキストとして認識し、より正確な回答を返すでしょう。「@persona.md」のように**特定ファイル名**で参照することも可能です。Cursorでは `@`で**ファイルやフォルダ、ノートパッドを参照**できる仕組みがあり[apidog.com](https://apidog.com/blog/how-to-use-claude-3-7-sonnet-max-mode-in-cursor-ai-ide/#:~:text=2,Additional%20Context)、長文モードのモデルであれば大量のテキストも参照できます。
    
4. **長文コンテキストの活用:** Claude 200kなどを選んだ場合、大容量のコンテキストを投入できます。例えば**巨大なドキュメントをAIに読ませる**ことも可能です[youtube.com](https://www.youtube.com/watch?v=ddWxrYlohUU#:~:text=Use%20Claude%20Chat%20With%20Cursor,the%20model%20to%20juggle)。チャット欄にファイルをドロップしたり、`@`でフォルダごと指定すれば、その中身（コードやテキスト）も踏まえて回答してくれます[apidog.com](https://apidog.com/blog/how-to-use-claude-3-7-sonnet-max-mode-in-cursor-ai-ide/#:~:text=2,Additional%20Context)。Persona運用においても、会話履歴が長くなってもモデルの記憶容量が大きければ途切れにくい利点があります。ただし**応答速度は遅くなる**傾向があり、Cursor側でも過去には1日10回まで長文モード使用を推奨する制限を設けていたことがあります[forum.cursor.com](https://forum.cursor.com/t/long-context-mode-gone-in-newest-update/29449#:~:text=clear%20explanation%20for%20removing%20it,lot%20of%20code%20as%20context)（現在は自動調整に変更）。長文コンテキスト利用時は時間に余裕を持ってやり取りしましょう。
    
5. **問題発生時の対処:** 会話中、もしAIが人格を忘れたような応答をし始めたり、コンテキストが混乱した場合は、一度**プロンプトでリマインド**してあげます。例えば「※ティキちゃんは親しみやすい口調で答えて」と送ると、ルールを再確認するきっかけになります。または**チャットをリセット**（新規スレッドを開始）して、必要ならノートパッドで過去内容を再投入する方法もあります。Cursorでは右上のメニュー等から過去チャットを確認・切り替えできるので、状況によって使い分けましょう。
    

**注意点:** **長い対話を続けるとモデルのコンテキスト上限に達する可能性**があります。例えばGPT-4（8k）の場合、数十ターン程度で古い発言が切り捨てられていきます。重要な事項は切り捨てられる前にMemoryノートやルールに反映しておくと良いでしょう。Claude 3.7 Sonnet MAXのように極めて大きなウィンドウを持つモデルではその心配は少ないですが、**レスポンスが遅延**することがあります[forum.cursor.com](https://forum.cursor.com/t/long-context-mode-gone-in-newest-update/29449#:~:text=BayZ0r%20%20November%2025%2C%202024%2C,12%3A09pm%20%207)。Cursorは負荷状況によってリクエストを**高速/低速キュー**に振り分けます[docs.cursor.com](https://docs.cursor.com/account/plans-and-usage#:~:text=Fast%20and%20Slow%20Requests)。Proでは500回までは高速処理、それを超えると遅延が出る場合あり[docs.cursor.com](https://docs.cursor.com/account/plans-and-usage#:~:text=Pro)[docs.cursor.com](https://docs.cursor.com/account/plans-and-usage#:~:text=Fast%20and%20Slow%20Requests)。もし応答が来ない場合、自分の使用状況（ダッシュボードで確認可）をチェックしてください。フリープラン利用中で50回を超えた場合、その後のプレミアムモデル呼び出しは実行されないor非常に遅くなります[forum.cursor.com](https://forum.cursor.com/t/question-about-free-plan-limits/71112#:~:text=When%20I%20go%20to%20cursor,settings%20online%20I%20see)[forum.cursor.com](https://forum.cursor.com/t/question-about-free-plan-limits/71112#:~:text=So%20does%20it%20mean%20I,This%20is%20for%20free%20plan)。そうなった場合は**翌月まで待つ**か、**プランをアップグレード**するか、自前APIキー設定で回避するかの判断が必要です。もう一点、CursorのAIは**会話を終了してIDEを閉じても、一応プロジェクト内に履歴が保存**されます。ただし完全な永続メモリではなく、新しい会話では改めてルール/ノートでコンテキストを与え直す必要があることを覚えておいてください。

**Tips:** Cursorチャットパネルの上部にある**「履歴」ボタン**（または`Cmd+Alt+L`ショートカット）で、**過去のチャット履歴一覧**を見ることができます[cursorpractice.com](https://cursorpractice.com/en/cursor-tutorials/getting-started/4-Chat#:~:text=Cursor%20IDE%20Tutorials%20,You%20can%20click%20any)。ここから過去の対話を読み返したり再開したりできますので、長期のやりとりも安心です。特に気に入った会話は、区切りの良いところでそのまま続けてもいいですが、新しいトピックに移る時は**新規チャットを開く**ことでコンテキストをリセットしAIの混乱を防げます（以前の話題は必要時に@で参照）。またモデル選択ドロップダウンの横にある**「Thinking」スイッチ**を試してみるのも良いでしょう[apidog.com](https://apidog.com/blog/how-to-use-claude-3-7-sonnet-max-mode-in-cursor-ai-ide/#:~:text=1,switch%20for%20more%20deliberate%20reasoning)。これをオンにするとAIがより時間をかけて推論するモードになり、応答が詳細になる場合があります（ただしトークン消費も増えます）。自分のAIとの対話ログを後から読み返すと、新しい発見があるものです。時々**AIに「今までの話をまとめて」**と頼んでみるのも良いでしょう。きちんとルールやメモを認識していれば、AI自身が自身の記憶を要約してくれるはずです。

---

## ステップ6: 情報追加と人格アップデートの運用

**目的:** 会話を重ねる中で得られた新情報をAIの記憶に組み込み、必要に応じて人格や行動スタイルの設定を更新します。これによりAIが**継続的に成長・調整**され、常に望ましい「第二の自分」であり続けます。

**必要な準備:** 追加したい情報や変更したい設定の整理。例えば「会話でAIが知った〇〇の事実を今後も覚えていてほしい」「もう少しフランクな口調に変えたい」など、反映すべき内容を明確にします。またCursor上で当該プロジェクトを開いていることと、必要ならテキストエディタやメモ帳（Cursor内でも良い）で更新内容を下書きしておくと良いでしょう。

**手順:**

1. **メモリーファイル/ノートパッドの更新:** 会話中に出てきた新情報を**memory.mdやMemoryノートパッド**に追記します。例えばユーザーが新たに明かした個人情報や、AIが学習すべき知識（架空の設定上の出来事など）を箇条書きで追加します。「2025年4月22日：○○について議論。ティキちゃんは△△と認識した。」のように日時とともに書いておくと、あとで見返す際に便利です。ノートパッドの場合、サイドバーから該当ノートを開いて直接編集できます。編集内容は自動保存され、次回@参照時には最新内容が反映されます。
    
2. **人格ルールの調整:** AIの応答スタイルに不満や変更したい点があれば**ルールファイル（persona.mdc等）を編集**します。例えば「もう少し丁寧語を減らしてフランクに」と思ったら、その旨をルール文面に追記します。また会話でAIが勘違いした点があれば、「○○と質問されたら××ではなく△△と答えること」等の規則を追加して補正できます。編集後は上書き保存すれば即座に新ルールが適用されます（既存のチャットスレッドにも影響しますが、AIの記憶は遡及しないため、新規質問以降に効いてきます）。
    
3. **対話からのルール生成（必要に応じて）:** Cursorの**/Generate Cursor Rules**コマンドを活用します[docs.cursor.com](https://docs.cursor.com/context/rules#:~:text=Generating%20rules)。長い対話セッションの後で、「今回のやりとりから学んだAIの振る舞い」を抽出したい場合、チャット入力欄に `/Generate Cursor Rules` と入力して送信します。すると直近の会話を要約・分析してCursorがルール案を生成します。それを受け取ったら、新たなルールファイルとして保存したり、既存のpersonaルールに統合したりできます。例えば「ユーザーは○○が好き」「返信するとき最初に相槌を打つようにする」等、暗黙の決まり事が明文化されるので便利です。
    
4. **複数人格やシナリオへの対応（応用）:** 場合によっては**別の人格**を試したくなるかもしれません。その場合は、同じプロジェクト内でルールを差し替えることもできますが、混在すると複雑になるため**プロジェクトごと分ける**のがおすすめです。フォルダをコピーして別名（例えば「TikiPersona_v2」）にし、新しい設定を書き込む方法です。こうしておけば元の人格データは保ったまま、新しい実験ができます。いずれにせよ、人格や記憶を更新するときは**一貫性**を意識しましょう。矛盾する設定がルールやメモに共存するとAIも混乱する可能性があるため、不要になった記述は削除するか、わざと曖昧にせず明示的に訂正しておきます。
    
5. **自動化の工夫（高度なオプション）:** 手動で更新する他に、プログラミングが得意な場合は**更新の一部を自動化**できます。例えばCursorのチャット履歴はローカルのSQLite DBに保存されているので[github.com](https://github.com/somogyijanos/cursor-chat-export#:~:text=somogyijanos%2Fcursor,workspace%20are%20saved%20here)、スクリプトで重要発言を抽出しmemory.mdに書き込むといったことも不可能ではありません。あるいはCursorを拡張するプラグインを自作し、特定コマンドでメモリ更新を行うアイデアもあります。ただし公式にサポートされた方法ではないため、現状は**定期的な手動メンテナンス**を習慣化する方が確実です。
    

**注意点:** ルールやメモを更新した後は**AIがすぐにその変更を理解するとは限らない**ことに留意してください。ルールは新たなプロンプトから適用されますが、例えば現在進行中の対話では以前のルールのもとでAIが話しています。そのため途中で大きく設定を変えた場合、一旦会話を切って仕切り直すか、AIに対して「設定が変更された」ことを説明するとよいでしょう。また、あまりに情報が増えすぎると、モデルの負荷が上がり**応答の質が落ちる可能性**があります[reddit.com](https://www.reddit.com/r/cursor/comments/1fejeql/how_do_you_have_a_memory_for_your_chats/#:~:text=How%20do%20you%20have%20a,does%20your%20premium%20models%20reset)。定期的にメモの整理（古い情報のアーカイブ化等）を行い、常に必要十分な情報だけをルール/ノートパッドに残すよう努めましょう。Cursorのルールファイル自体はテキスト管理できますが、**重複**や**矛盾**があるとモデルの挙動が不安定になることがあります。「○○すること」と「○○してはならない」が混在する、などは避けてください。

**Tips:** **人格変更や知識追加の履歴**をつけておくと、AIの成長記録になって面白いものです。例えば日付ごとに「〇月〇日：△△をルールに追加」「○月○日：□□の事実をmemoryに追記」のようにCHANGELOG.mdに書いておくと、人間側が振り返りやすくなります。AIに「最近何を覚えたか教えて？」と尋ねてみるのも良いフィードバックになります。正しく記憶させられていれば、AIが更新内容を答えてくれるでしょう。さらに、定期的に**ルールファイルを見直してリファクタリング**する習慣も役立ちます。最初は試行錯誤で増えた規則も、一段落したら整理して簡潔にまとめ直すことで、より少ないコンテキストで同じ効果を出せます。これはChatGPTのプロンプトエンジニアリングと似た作業ですが、Cursorのルール機能のおかげで一度書いたものを再利用できる点が効率的です。

---

## ステップ7: 会話履歴の整理と再利用方法（エクスポート・連携）

**目的:** AIとの貴重な対話ログを整理・保存し、必要に応じて外部にエクスポートしたり参照できるようにします。またCursor外のサービスと連携させたい場合のヒントを述べます。これにより**AIとの会話から得られた知見を貯めて活用**できるようになります。

**必要な準備:** エクスポートや連携に用いるツール（後述のCursor拡張機能やスクリプト）の把握。エクスポート先（Markdownファイルやノートアプリなど）の用意。特別なツールを使わずに手動コピーでも構いませんので、保存したい履歴を選定しておきます。

**手順:**

1. **Cursor内での履歴確認:** Cursorでは各プロジェクトごとにチャット履歴がローカル保存されています。右上の**履歴ボタン**（時計アイコンのようなもの）を押すと、これまでのチャットセッションの一覧が表示されます[cursorpractice.com](https://cursorpractice.com/en/cursor-tutorials/getting-started/4-Chat#:~:text=Cursor%20IDE%20Tutorials%20,You%20can%20click%20any)。目的のセッションをクリックすると、その内容がサイドバーに展開され、スクロールして全文を見ることができます。まずはここで必要なログを確認しましょう。
    
2. **内蔵DBからのエクスポート（手動）:** 最も単純な方法は、履歴一覧から内容を**テキスト選択してコピー**し、自分でMarkdownファイル等に貼り付けて保存することです。この際、会話形式（User:～ AI:～）でコピーされますので、そのまま保存しても再利用しやすい形式になります。小規模な履歴ならこれで十分ですが、非常に長いと選択が大変なので次の方法も検討してください。
    
3. **Cursor拡張機能の利用:** Cursorにはコミュニティ提供の**エクスポート用拡張**があります。有名なのは**SpecStory**という拡張で、チャットやComposerの履歴をMarkdownやHTML、さらには共有用のURLとして保存できるツールです[forum.cursor.com](https://forum.cursor.com/t/guide-5-steps-exporting-chats-prompts-from-cursor/2825#:~:text=We%20just%20built%20a%20native,Visual%20Studio%20Marketplace)[forum.cursor.com](https://forum.cursor.com/t/guide-5-steps-exporting-chats-prompts-from-cursor/2825#:~:text=WooodHead%20%20March%205%2C%202025%2C,8%3A06am%20%2015)。これはVisual Studio Codeの拡張として提供されており、CursorはVSCode互換なのでインストール可能です[forum.cursor.com](https://forum.cursor.com/t/guide-5-steps-exporting-chats-prompts-from-cursor/2825#:~:text=We%20just%20built%20a%20native,Visual%20Studio%20Marketplace)。Cursor画面下部の拡張機能マークから「SpecStory」で検索しインストール、コマンドパレットで「Export Chat History」を実行すると、選択したチャットをMarkdownファイルとしてプロジェクト内に吐き出すことができます。
    
4. **オープンソースツールの利用:** さらに高度な方法として、**cursor-export**というオープンソースのCLIツールも公開されています[forum.cursor.com](https://forum.cursor.com/t/guide-5-steps-exporting-chats-prompts-from-cursor/2825#:~:text=Introducing%20cursor,backup%20Cursor%20chat%20history)。これはプロジェクト内のSQLiteデータベース（`state.vscdb`）を読み取り、全チャット履歴をMarkdown/HTML/JSONでまとめて出力するものです[forum.cursor.com](https://forum.cursor.com/t/guide-5-steps-exporting-chats-prompts-from-cursor/2825#:~:text=Introducing%20cursor,backup%20Cursor%20chat%20history)。GitHub上で公開されており、Node.js環境があれば使えます。大量の会話ログを一括でバックアップしたい場合に便利です。
    
5. **エクスポート結果の活用:** 保存した会話ログは、自分のノートアプリ（例: ObsidianやNotion）に貼り付けたり、バージョン管理して蓄積しても良いでしょう。必要な部分だけ抽出して**新たな知識データベース**を作るのも一案です。また別のAIシステムでこのログを解析させ、要約や重要点抽出をすることもできます。万一Cursor側のデータベースが破損・消失した場合も、エクスポートがあれば安心です。エクスポートしたMarkdownから再びCursorのノートパッドに内容を戻すことで、**他プロジェクトで過去の会話内容を参照**することも可能です。
    

**注意点:** 現状、Cursorには**標準でチャット履歴を外部にエクスポートする機能はありません**。上記のように拡張やスクリプトに頼る必要があり、非公式である点に注意してください。特にSpecStory拡張などは強力ですが、Cursorのバージョンアップでスキーマが変わると使えなくなる可能性もあります[forum.cursor.com](https://forum.cursor.com/t/guide-5-steps-exporting-chats-prompts-from-cursor/2825#:~:text=didn%E2%80%99t%20come%20up%20in%20your,list%20of%20chats%20Image%3A%20%3Afrowning)。最新版に追随しているか確認しながら利用しましょう。また、エクスポートしたデータを**他のCursorプロジェクトにインポートする公式手段は無い**ため、過去ログを再利用する際は結局コピペや@参照で読み込ませる形になります。例えばProjectAのチャットをProjectBで使いたい場合、ProjectAでエクスポート→ProjectBでノートパッドに貼り付け→@参照、というワークフローになります。外部連携に関して言えば、Cursorはローカルアプリなので直接の連携機能は限定的です。SlackやLINEでこのAIと話したい、といった場合は、現状Cursor外で同様の人格を再現するしかありません（例えばOpenAI APIを使った自前ボットにCursorのルール文を組み込む等）。Cursor内のAIをそのまま外部サービス化する機能は提供されていないことを留意してください。

**Tips:** エクスポートしたログは**自分だけのAI百科事典**のようなものです。内容をカテゴリー別に整理しておけば、AIとの対話から得たアイデアやコードスニペット、物語などを後から簡単に見返せます。Notion等に蓄積する場合は、タグ付けや索引をつけるとさらに便利でしょう。もしCursorを長期間アップデートしていく予定なら、定期的に`state.vscdb`自体をバックアップしておくのも玄人向けTipです[github.com](https://github.com/somogyijanos/cursor-chat-export#:~:text=somogyijanos%2Fcursor,workspace%20are%20saved%20here)（SQLiteブラウザで中身を見ることもできます）。将来的にCursorの機能追加で公式エクスポート機能や他AIチャットとの連携が強化される可能性もありますので、アップデート情報や公式フォーラムをチェックしてみてください。何より、**自分の分身AIとの対話を楽しむ**ことが大切です。ログを読み返して「ああ、こんなこと話したな」と振り返る時間も、きっと新たな発見につながるでしょう。

---

以上、Mac環境でCursorを導入しChatGPT的な「第二の自分」AIを構築するためのロードマップをステップ別に解説しました。**目的に応じたプラン選択**から始まり、**環境構築**、**人格・記憶データの設計**、**ルール/ノートパッド活用**、そして**長期運用と改善**まで網羅しています。最初は設定や調整に手間取るかもしれませんが、一度仕組みを作ってしまえば後は対話を重ねるごとにAIが育っていきます。ぜひCursorを活用して、あなただけの「ティキちゃん」のような頼れるAIパートナーを育成してみてください。楽しみながら創意工夫することが最大のTipsです。🎉

**参考文献・情報源:** Cursor公式ドキュメントおよびフォーラム（プラン内容[cursor.com](https://cursor.com/pricing#:~:text=Includes)[cursor.com](https://cursor.com/pricing#:~:text=Everything%20in%20Hobby%2C%20plus)、ルール/ノートパッド機能[docs.cursor.com](https://docs.cursor.com/context/rules#:~:text=Project%20Rules)[docs.cursor.com](https://docs.cursor.com/beta/notepads#:~:text=Notepads%20are%20powerful%20context,contexts%20for%20your%20development%20workflow)等）、有志ブログ・解説記事（Claude長文モード[apidog.com](https://apidog.com/blog/how-to-use-claude-3-7-sonnet-max-mode-in-cursor-ai-ide/#:~:text=1,capable%20when%20working%20with%20large)、Cursor導入手順[datacamp.com](https://www.datacamp.com/tutorial/cursor-ai-code-editor#:~:text=After%20installing%2C%20we%E2%80%99re%20prompted%20with,the%20following%20configuration%20screen)等）、コミュニティによる知見共有（フォーラムのエクスポート情報[forum.cursor.com](https://forum.cursor.com/t/guide-5-steps-exporting-chats-prompts-from-cursor/2825#:~:text=WooodHead%20%20March%205%2C%202025%2C,8%3A06am%20%2015)など）。これらを元に2025年時点の最新情報を反映しています。