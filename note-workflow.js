const domains = [
  {
    id: "general",
    label: "一般知識",
    summary: "大気の熱力学、力学、放射、法規を固める",
    target: 82,
  },
  {
    id: "specialized",
    label: "専門知識",
    summary: "観測、数値予報、短期予報、防災情報を結びつける",
    target: 78,
  },
  {
    id: "practical",
    label: "記述",
    summary: "天気図読解と根拠のある文章答案を反復する",
    target: 70,
  },
];

const questions = {
  general: [
    {
      text: "乾燥断熱減率として最も近い値はどれですか。",
      choices: ["約0.65℃/100m", "約1.0℃/100m", "約6.5℃/100m", "約10℃/100m"],
      answer: 1,
      explanation: "未飽和の空気塊が断熱的に上下すると、約1.0℃/100mで温度が変化します。",
    },
    {
      text: "コリオリ力の向きについて、北半球で正しい説明はどれですか。",
      choices: ["運動方向の左向き", "運動方向の右向き", "鉛直上向き", "風速と逆向き"],
      answer: 1,
      explanation: "北半球では運動方向に対して右向きに働き、地衡風や低気圧の回転に関係します。",
    },
    {
      text: "気象業務法で、予報業務許可の対象として意識すべきものはどれですか。",
      choices: ["趣味の日記", "継続的に不特定多数へ提供する天気予報", "過去天気の閲覧", "学校内の実験記録"],
      answer: 1,
      explanation: "業として予報を提供する場合は、許可や責任体制に関する法規の理解が問われます。",
    },
    {
      text: "温位が高度とともに増加している大気の安定度として最も適切なのはどれですか。",
      choices: ["安定", "絶対不安定", "必ず中立", "必ず飽和している"],
      answer: 0,
      explanation: "温位が上方ほど大きい状態では、空気塊が鉛直に動きにくく、安定と判断します。",
    },
    {
      text: "黒体放射で、温度が高いほど放射エネルギーはどうなりますか。",
      choices: ["増加する", "減少する", "ゼロになる", "波長だけが長くなる"],
      answer: 0,
      explanation: "ステファン・ボルツマンの法則により、黒体放射の全エネルギーは絶対温度の4乗に比例します。",
    },
    {
      text: "飽和水蒸気圧について正しい説明はどれですか。",
      choices: ["温度が高いほど大きい", "温度と無関係", "気圧が高いほど必ずゼロになる", "海上だけで定義される"],
      answer: 0,
      explanation: "飽和水蒸気圧は温度が高いほど大きくなり、湿度や凝結の理解に直結します。",
    },
    {
      text: "気圧傾度力の向きとして正しいものはどれですか。",
      choices: ["高圧側から低圧側へ向く", "低圧側から高圧側へ向く", "常に北向き", "常に風と逆向き"],
      answer: 0,
      explanation: "気圧傾度力は気圧の高い側から低い側へ働き、風を生み出す基本の力です。",
    },
    {
      text: "雲粒が雨滴へ成長する暖かい雨の主な過程はどれですか。",
      choices: ["衝突・併合", "地衡風平衡", "放射平衡", "オゾン生成"],
      answer: 0,
      explanation: "暖かい雲では、雲粒同士が衝突・併合して大きな雨滴へ成長します。",
    },
  ],
  specialized: [
    {
      text: "気象レーダーで降水強度の推定に主に使われる観測量はどれですか。",
      choices: ["反射強度", "日射量", "海面気圧", "露点温度"],
      answer: 0,
      explanation: "レーダーは降水粒子からの反射を観測し、反射強度から降水の分布や強さを推定します。",
    },
    {
      text: "数値予報モデルの初期値を作る過程として最も適切なものはどれですか。",
      choices: ["統計補正", "データ同化", "天気図記号化", "目視観測"],
      answer: 1,
      explanation: "観測データとモデルの推定を組み合わせ、物理的に整合した初期状態を作るのがデータ同化です。",
    },
    {
      text: "竜巻注意情報が示す主な意味はどれですか。",
      choices: ["竜巻発生の可能性が高まっている", "竜巻が必ず発生する", "台風が上陸済み", "地震津波の危険がある"],
      answer: 0,
      explanation: "積乱雲に伴う激しい突風への注意を促す情報で、空の変化や避難行動の判断に使います。",
    },
    {
      text: "アメダスの降水量観測で一般に使われる単位はどれですか。",
      choices: ["mm", "hPa", "m/s", "K"],
      answer: 0,
      explanation: "降水量は深さに換算した量としてmmで表します。",
    },
    {
      text: "気象衛星の赤外画像で主に分かるものはどれですか。",
      choices: ["雲頂温度の高低", "地上の正確な風速だけ", "雨粒の個数だけ", "気圧計の型番"],
      answer: 0,
      explanation: "赤外画像は放射温度を利用するため、雲頂高度や雲の発達の推定に役立ちます。",
    },
    {
      text: "ガイダンスの説明として適切なのはどれですか。",
      choices: ["数値予報結果を統計的に補正し予報要素へ変換する資料", "観測を行わない予報", "天気図を描かない規則", "警報を必ず解除する資料"],
      answer: 0,
      explanation: "ガイダンスは数値予報の系統誤差を補正し、気温や降水確率などの予報に使われます。",
    },
    {
      text: "線状降水帯で特に問題となる現象はどれですか。",
      choices: ["同じ地域で非常に激しい雨が続く", "必ず快晴が続く", "気温が常に氷点下になる", "風が完全に止まる"],
      answer: 0,
      explanation: "発達した雨域が線状に停滞・継続し、同じ場所で大雨災害の危険が高まります。",
    },
    {
      text: "降水短時間予報の利用目的として近いものはどれですか。",
      choices: ["数時間先までの降水域の変化を確認する", "100年後の気候だけを見る", "地震発生時刻を予測する", "海底地形だけを読む"],
      answer: 0,
      explanation: "降水短時間予報は直近の降水分布や移動を把握し、防災判断の材料になります。",
    },
  ],
  practical: [
    {
      text: "記述答案で最も重要な姿勢はどれですか。",
      choices: ["知っている用語を多く並べる", "天気図や資料から根拠を示して簡潔に書く", "文章を長くする", "予想を断定しない"],
      answer: 1,
      explanation: "資料のどこから判断したかを明確にし、設問の指定語数と観点に合わせることが重要です。",
    },
    {
      text: "温暖前線付近で広がりやすい雲として代表的なものはどれですか。",
      choices: ["積乱雲のみ", "層状の雲", "晴天域", "砂じん嵐"],
      answer: 1,
      explanation: "暖気が寒気上を緩やかに上昇し、広い範囲に層状雲や降水域が現れやすくなります。",
    },
    {
      text: "地上天気図で等圧線の間隔が狭い領域について、まず考えるべきことはどれですか。",
      choices: ["気圧傾度が大きく風が強い", "必ず晴れる", "湿度が0%になる", "風が完全に止まる"],
      answer: 0,
      explanation: "等圧線の込み具合は気圧傾度の大きさを示し、風の強さを読む基本材料です。",
    },
    {
      text: "記述答案で『北上している』と書く前に確認したいものはどれですか。",
      choices: ["異なる時刻の位置変化", "紙の色", "受験番号", "選択肢の個数"],
      answer: 0,
      explanation: "移動方向や速度は、複数時刻の位置を比較して根拠を示します。",
    },
    {
      text: "850hPa天気図で気温と風を合わせて読む目的として近いものはどれですか。",
      choices: ["下層の暖湿気流入を確認する", "海底水温だけを読む", "成層圏のオゾンだけを読む", "観測所番号を暗記する"],
      answer: 0,
      explanation: "850hPa面は下層の暖湿気移流や前線付近の構造を読む材料になります。",
    },
    {
      text: "『指定語句を用いて』という設問で大切なことはどれですか。",
      choices: ["指定語句を文脈に合う形で必ず使う", "指定語句を無視する", "指定語句だけを羅列する", "字数を大幅に超える"],
      answer: 0,
      explanation: "指定語句は採点観点に直結しやすいため、意味が通る答案の中に入れます。",
    },
    {
      text: "鉛直流の分布を記述するときに有効な表現はどれですか。",
      choices: ["高度・場所・上昇/下降を組み合わせる", "色の好みを書く", "図番号だけを書く", "断定を避けて何も書かない"],
      answer: 0,
      explanation: "どの高度で、どの領域に、上昇流または下降流があるのかを具体的に示します。",
    },
    {
      text: "実技の見直しで優先したいものはどれですか。",
      choices: ["設問の問いに直接答えているか", "文字を飾っているか", "余白を全部埋めたか", "同じ語句を何度も繰り返したか"],
      answer: 0,
      explanation: "答案は設問の要求に直接答え、資料に基づく根拠を過不足なく示すことが重要です。",
    },
  ],
};

const overviewTopics = [
  {
    title: "気象業務法の入口",
    body: "予報業務を行うには、気象庁長官の許可、予報業務の目的・範囲、予報事項、予報資料、予報士の設置などを押さえます。試験では条文の丸暗記より、誰が何を行うときに許可や資格が必要かを問われます。",
  },
  {
    title: "大気の鉛直構造",
    body: "対流圏では高度とともに気温が下がり、雲や降水など多くの気象現象が起こります。成層圏ではオゾンによる紫外線吸収が重要で、気温の鉛直変化が対流圏とは異なります。",
  },
  {
    title: "熱力学と安定度",
    body: "空気塊が上昇すると膨張して冷え、下降すると圧縮されて暖まります。乾燥断熱減率、湿潤断熱減率、温位、相当温位は、対流の起こりやすさを読む基本です。",
  },
  {
    title: "水蒸気と降水過程",
    body: "飽和水蒸気圧、露点、相対湿度、凝結核、雲粒の成長をつなげて理解します。暖かい雨は併合過程、冷たい雨は氷晶過程が中心になります。",
  },
  {
    title: "放射と熱収支",
    body: "太陽放射は短波、地球放射は長波として扱います。アルベド、温室効果、放射平衡、雲や水蒸気の働きを、地表と大気のエネルギー収支として整理します。",
  },
  {
    title: "大気の力学",
    body: "気圧傾度力、コリオリ力、遠心力、摩擦力のつり合いから風を考えます。地衡風、傾度風、収束・発散、渦度は実技の天気図読解にも直結します。",
  },
];

const overviewQuestions = [
  {
    text: "一般知識の試験範囲に含まれるものとして適切なのはどれですか。",
    choices: ["気象業務法その他の気象業務に関する法規", "航空機の操縦方法", "地図投影法だけ", "海図の作図実務だけ"],
    answer: 0,
    explanation: "一般知識には、大気の基礎分野に加えて、気象業務法その他の気象業務に関する法規が含まれます。",
  },
  {
    text: "対流圏の特徴として最も適切なのはどれですか。",
    choices: ["多くの雲や降水現象が起こる", "高度とともに必ず気温が上がる", "水蒸気がまったく存在しない", "地表の影響を受けない"],
    answer: 0,
    explanation: "対流圏は地表に近く、水蒸気を含み、雲や降水など日々の気象現象が起こる層です。",
  },
  {
    text: "未飽和の空気塊が断熱的に上昇すると、温度はおよそどう変化しますか。",
    choices: ["約1℃/100mで低下する", "約1℃/100mで上昇する", "まったく変化しない", "高度に関係なく露点だけ上がる"],
    answer: 0,
    explanation: "未飽和空気の断熱変化では、乾燥断熱減率に従っておよそ1℃/100mで冷えます。",
  },
  {
    text: "暖かい雨の形成で中心となる過程はどれですか。",
    choices: ["雲粒同士の衝突・併合", "必ず雪結晶だけで成長する", "水蒸気が直接大粒の雨滴になる", "放射冷却だけで雨滴ができる"],
    answer: 0,
    explanation: "暖かい雲では、雲粒が衝突・併合して大きくなり、落下できる雨滴へ成長します。",
  },
  {
    text: "地衡風を考えるとき、主につり合う力の組み合わせはどれですか。",
    choices: ["気圧傾度力とコリオリ力", "重力と浮力だけ", "摩擦力と遠心力だけ", "日射と地球放射"],
    answer: 0,
    explanation: "地衡風は、摩擦の影響が小さい場で、気圧傾度力とコリオリ力がつり合う風です。",
  },
  {
    text: "地球放射について正しい説明はどれですか。",
    choices: ["主に長波放射として扱う", "主に可視光だけで扱う", "太陽放射より必ず波長が短い", "大気とは相互作用しない"],
    answer: 0,
    explanation: "地表や大気から出る地球放射は、試験では主に長波放射として扱います。",
  },
];

const cards = [
  {
    tag: "一般知識",
    front: "温位とは何を表す量ですか。",
    back: "空気塊を標準気圧まで断熱的に移動させたときの温度です。大気の安定度を考えるときに使います。",
  },
  {
    tag: "専門知識",
    front: "アメダスで観測される主な要素は何ですか。",
    back: "降水量、気温、風向・風速、日照時間などです。地点によって観測要素は異なります。",
  },
  {
    tag: "記述",
    front: "答案で「根拠」を書くときの基本は何ですか。",
    back: "資料番号、時刻、場所、変化傾向を具体的に示し、設問が求める現象に直接つなげます。",
  },
  {
    tag: "防災",
    front: "警報と注意報の違いを一言でいうと。",
    back: "警報は重大な災害のおそれ、注意報は災害のおそれがある場合に発表されます。",
  },
  {
    tag: "法規",
    front: "予報業務許可で押さえる観点は何ですか。",
    back: "業として予報を行うか、対象・目的・予報事項・体制がどうなっているかを確認します。",
  },
  {
    tag: "熱力学",
    front: "乾燥断熱減率の目安は何ですか。",
    back: "未飽和空気では約1℃/100mです。湿潤断熱減率は凝結熱の影響でこれより小さくなります。",
  },
  {
    tag: "熱力学",
    front: "相当温位が高い空気は何を示しやすいですか。",
    back: "暖かく湿った空気を示し、対流活動や大雨ポテンシャルを読む材料になります。",
  },
  {
    tag: "水蒸気",
    front: "露点温度とは何ですか。",
    back: "空気を冷やしたとき、水蒸気が飽和して凝結し始める温度です。",
  },
  {
    tag: "放射",
    front: "太陽放射と地球放射の違いは何ですか。",
    back: "太陽放射は主に短波、地球放射は主に長波として扱います。",
  },
  {
    tag: "力学",
    front: "地衡風とは何ですか。",
    back: "気圧傾度力とコリオリ力がつり合って吹く、摩擦の小さい上空の風です。",
  },
  {
    tag: "力学",
    front: "北半球の低気圧周辺の風向はどうなりますか。",
    back: "摩擦の影響で反時計回りに中心へ吹き込みます。",
  },
  {
    tag: "観測",
    front: "赤外衛星画像で読みやすいものは何ですか。",
    back: "雲頂温度です。雲頂が高いほど温度が低く、発達した雲の判別に役立ちます。",
  },
  {
    tag: "観測",
    front: "レーダーエコーで強い反射が示すものは何ですか。",
    back: "降水粒子が多い、または大きい可能性があり、強い降水域の把握に使います。",
  },
  {
    tag: "数値予報",
    front: "データ同化とは何ですか。",
    back: "観測値とモデルの推定値を組み合わせ、数値予報の初期値を作る過程です。",
  },
  {
    tag: "防災",
    front: "キキクルで重視することは何ですか。",
    back: "危険度の高まりを、避難判断や防災行動に結びつけることです。",
  },
  {
    tag: "実技",
    front: "答案で方角を書くときの注意点は何ですか。",
    back: "図の向きや緯度経度、複数時刻の位置関係を確認してから書きます。",
  },
  {
    tag: "実技",
    front: "『根拠を示せ』への基本対応は何ですか。",
    back: "場所、時刻、気圧・気温・風・降水などの具体値や変化を示して判断につなげます。",
  },
  {
    tag: "実技",
    front: "前線解析で見る基本要素は何ですか。",
    back: "気温傾度、風向の変化、湿り、雲・降水域、気圧の谷などを総合して判断します。",
  },
];

const weeklyPlan = [
  ["Day 1", "一般知識の熱力学", "断熱変化、温位、安定度を例題で確認"],
  ["Day 2", "一般知識の力学", "地衡風、傾度風、低気圧の回転を整理"],
  ["Day 3", "専門知識の観測", "レーダー、衛星、アメダスの役割を比較"],
  ["Day 4", "専門知識の予報", "数値予報、ガイダンス、短期予報を接続"],
  ["Day 5", "防災気象情報", "警報、注意報、台風情報、キキクルを復習"],
  ["Day 6", "記述の天気図読解", "前線、等圧線、降水域、風の変化を読む"],
  ["Day 7", "記述答案の演習", "根拠、時系列、指定語句を意識して答案化"],
];

const pastExams = [
  exam(56, [
    ["answer", "学科 解答", "cwfe_56_a.pdf"],
    ["answer", "合格基準", "cwfe_56_e.pdf"],
    ["general", "一般知識 問題", "gakka(ippan).pdf"],
    ["specialized", "専門知識 問題", "gakka(senmon).pdf"],
    ["written", "記述1 解答用紙", "jitsugi1(kai).pdf"],
    ["written", "記述1 問題", "jitsugi1(mon).pdf"],
    ["written", "記述2 解答用紙", "jitsugi2(kai).pdf"],
    ["written", "記述2 問題", "jitsugi2(mon).pdf"],
  ]),
  exam(57, [
    ["answer", "学科 解答", "cwfe_57_a.pdf"],
    ["answer", "合格基準", "cwfe_57_e.pdf"],
    ["general", "一般知識 問題", "gakka(ippan).pdf"],
    ["specialized", "専門知識 問題", "gakka(senmon).pdf"],
    ["written", "記述1 解答用紙", "jitsugi1(kai).pdf"],
    ["written", "記述1 問題", "jitsugi1(mon).pdf"],
    ["written", "記述2 解答用紙", "jitsugi2(kai).pdf"],
    ["written", "記述2 問題", "jitsugi2(mon).pdf"],
  ]),
  exam(58, [
    ["answer", "学科・記述 解答例", "cwfe_58_a.pdf"],
    ["general", "一般知識 問題", "gakka(ippan).pdf"],
    ["specialized", "専門知識 問題", "gakka(senmon).pdf"],
    ["written", "記述1 解答用紙", "jitsugi1(kai).pdf"],
    ["written", "記述1 問題", "jitsugi1(mon).pdf"],
    ["written", "記述2 解答用紙", "jitsugi2(kai).pdf"],
    ["written", "記述2 問題", "jitsugi2(mon).pdf"],
  ]),
  exam(59, [
    ["answer", "学科 解答", "cwfe_59_a.pdf"],
    ["answer", "合格基準", "cwfe_59_e.pdf"],
    ["general", "一般知識 問題", "gakka(ippan).pdf"],
    ["specialized", "専門知識 問題", "gakka(senmon).pdf"],
    ["written", "記述1 解答用紙", "jitsugi1(kai).pdf"],
    ["written", "記述1 問題", "jitsugi1(mon).pdf"],
    ["written", "記述2 解答用紙", "jitsugi2(kai).pdf"],
    ["written", "記述2 問題", "jitsugi2(mon).pdf"],
  ]),
  exam(60, [
    ["answer", "学科・記述 解答例", "cwfe_60_a_collection.pdf"],
    ["answer", "合格基準", "cwfe_60_e.pdf"],
    ["general", "一般知識 問題", "gakka(ippan).pdf"],
    ["specialized", "専門知識 問題", "gakka(senmon).pdf"],
    ["written", "記述1 解答用紙", "jitsugi1(kai).pdf"],
    ["written", "記述1 問題", "jitsugi1(mon).pdf"],
    ["written", "記述2 解答用紙", "jitsugi2(kai) .pdf"],
    ["written", "記述2 問題", "jitsugi2(mon).pdf"],
  ], "cwfe_60_z_collection"),
  exam(61, [
    ["answer", "学科・記述 解答例", "cwfe_61_a.pdf"],
    ["general", "一般知識 問題", "gakka(ippan).pdf"],
    ["specialized", "専門知識 問題", "gakka(senmon).pdf"],
    ["written", "記述1 解答用紙", "jitsugi1(kai).pdf"],
    ["written", "記述1 問題", "jitsugi1(mon).pdf"],
    ["written", "記述2 解答用紙", "jitsugi2(kai) .pdf"],
    ["written", "記述2 問題", "jitsugi2(mon).pdf"],
  ]),
  exam(62, [
    ["answer", "学科・記述 解答例", "cwfe_62_a.pdf"],
    ["general", "一般知識 問題", "gakka(ippan).pdf"],
    ["specialized", "専門知識 問題", "gakka(senmon).pdf"],
    ["written", "記述1 解答用紙", "jitsugi1(kai).pdf"],
    ["written", "記述1 問題", "jitsugi1(mon).pdf"],
    ["written", "記述2 解答用紙", "jitsugi2(kai) .pdf"],
    ["written", "記述2 問題", "jitsugi2(mon).pdf"],
  ]),
  exam(63, [
    ["answer", "学科・記述 解答例", "cwfe_63_a(gakka jitsugi_kaitourei).pdf"],
    ["general", "一般知識 問題", "gakka(ippan_mondai).pdf"],
    ["specialized", "専門知識 問題", "gakka(senmon_mondai).pdf"],
    ["written", "記述1 解答用紙", "jitsugi1(kaitouyoushi).pdf"],
    ["written", "記述1 問題", "jitsugi1(mondai).pdf"],
    ["written", "記述2 解答用紙", "jitsugi2(kaitouyoushi).pdf"],
    ["written", "記述2 問題", "jitsugi2(mondai).pdf"],
  ]),
  exam(64, [
    ["answer", "学科・記述 解答例", "cwfe_64_a(gakka jitsugi_kaitourei).pdf"],
    ["general", "一般知識 問題", "gakka(ippan_mondai).pdf"],
    ["specialized", "専門知識 問題", "gakka(senmon_mondai).pdf"],
    ["written", "記述1 解答用紙", "jitsugi1(kaitouyoushi).pdf"],
    ["written", "記述1 問題", "jitsugi1(mondai).pdf"],
    ["written", "記述2 解答用紙", "jitsugi2(kaitouyoushi).pdf"],
    ["written", "記述2 問題", "jitsugi2(mondai).pdf"],
  ]),
  exam(65, [
    ["answer", "学科・記述 解答例", "cwfe_65_a(gakka jitsugi_kaitourei).pdf"],
    ["general", "一般知識 問題", "gakka(ippan_mondai).pdf"],
    ["specialized", "専門知識 問題", "gakka(senmon_mondai).pdf"],
    ["written", "記述1 解答用紙", "jitsugi1(kaitouyoushi).pdf"],
    ["written", "記述1 問題", "jitsugi1(mondai).pdf"],
    ["written", "記述2 解答用紙", "jitsugi2(kaitouyoushi).pdf"],
    ["written", "記述2 問題", "jitsugi2(mondai).pdf"],
  ]),
].flat();

const examStages = [
  { id: "general", label: "一般知識", guidance: "まず15問を通して解き、法規・熱力学・力学の穴をメモします。" },
  { id: "specialized", label: "専門知識", guidance: "観測、数値予報、防災情報を、問題文のキーワードごとに整理します。" },
  { id: "written", label: "記述", guidance: "実技1と実技2を、問題文、図表、解答用紙の順に開いて答案を作ります。" },
];

const defaultState = {
  completed: { general: 22, specialized: 18, practical: 12 },
  correct: 0,
  total: 0,
  streak: 0,
  doneDays: [],
  weak: [],
  selectedExam: 65,
  examStage: "general",
  pastExamAnswers: {},
  writtenNotes: {},
};

const state = loadState();
let currentDomain = "general";
let currentQuestionIndex = 0;
let overviewQuestionIndex = 0;
let currentCardIndex = 0;
let cardShowingBack = false;
let selectedExam = Number(state.selectedExam || 65);
let selectedExamStage = state.examStage || "general";

const $ = (selector) => document.querySelector(selector);

function exam(number, files, folder = `cwfe_${number}_z`) {
  return files.map(([kind, title, filename]) => ({
    number,
    kind,
    title,
    filename,
    path: `past-exams/${folder}/${filename}`,
  }));
}

function loadState() {
  try {
    return { ...defaultState, ...JSON.parse(localStorage.getItem("weather-study-state")) };
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState() {
  localStorage.setItem("weather-study-state", JSON.stringify(state));
}

function showView(viewId) {
  document.querySelectorAll(".view").forEach((view) => {
    view.classList.toggle("is-visible", view.id === viewId);
  });
  document.querySelectorAll(".nav-tab").forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.view === viewId);
  });
}

function renderDashboard() {
  const values = domains.map((domain) => state.completed[domain.id] || 0);
  const overall = Math.round(values.reduce((sum, value) => sum + value, 0) / values.length);
  $("#overall-progress").textContent = `${overall}%`;
  $("#overall-bar").style.width = `${overall}%`;
  $("#study-streak").textContent = `${state.streak}日`;
  $("#accuracy").textContent = state.total ? `${Math.round((state.correct / state.total) * 100)}%` : "--";
  $("#answer-count").textContent = state.total ? `${state.total}問に回答` : "まだ演習なし";

  $("#domain-grid").innerHTML = domains
    .map((domain) => {
      const progress = state.completed[domain.id] || 0;
      const weakCount = state.weak.filter((item) => item.domain === domain.id).length;
      return `
        <article class="domain-card">
          <header>
            <div>
              <h4>${domain.label}</h4>
              <p>${domain.summary}</p>
            </div>
            <span class="chip">${weakCount ? `弱点 ${weakCount}` : "順調"}</span>
          </header>
          <div>
            <div class="progress-track"><span style="width: ${progress}%"></span></div>
            <p>${progress}% / 目標 ${domain.target}%</p>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderOverview() {
  $("#overview-grid").innerHTML = overviewTopics
    .map(
      (topic) => `
        <article class="overview-card">
          <h3>${topic.title}</h3>
          <p>${topic.body}</p>
        </article>
      `
    )
    .join("");
  renderOverviewQuestion();
}

function renderOverviewQuestion() {
  const question = overviewQuestions[overviewQuestionIndex];
  $("#overview-question-progress").textContent = `${overviewQuestionIndex + 1} / ${overviewQuestions.length}`;
  $("#overview-question-text").textContent = question.text;
  $("#overview-answer-box").hidden = true;
  $("#overview-choices").innerHTML = question.choices
    .map((choice, index) => `<button class="choice" data-overview-choice="${index}" type="button">${choice}</button>`)
    .join("");
}

function answerOverviewQuestion(choiceIndex) {
  const question = overviewQuestions[overviewQuestionIndex];
  const isCorrect = choiceIndex === question.answer;

  document.querySelectorAll("[data-overview-choice]").forEach((button) => {
    const buttonChoice = Number(button.dataset.overviewChoice);
    button.disabled = true;
    button.classList.toggle("is-correct", buttonChoice === question.answer);
    button.classList.toggle("is-wrong", buttonChoice === choiceIndex && !isCorrect);
  });

  $("#overview-answer-result").textContent = isCorrect ? "正解" : "もう一歩";
  $("#overview-answer-explanation").textContent = question.explanation;
  $("#overview-answer-box").hidden = false;
}

function renderQuestion() {
  const list = questions[currentDomain];
  const question = list[currentQuestionIndex];
  $("#question-domain").textContent = domains.find((domain) => domain.id === currentDomain).label;
  $("#question-progress").textContent = `${currentQuestionIndex + 1} / ${list.length}`;
  $("#question-text").textContent = question.text;
  $("#answer-box").hidden = true;
  $("#choices").innerHTML = question.choices
    .map((choice, index) => `<button class="choice" data-choice="${index}" type="button">${choice}</button>`)
    .join("");
}

function renderExamSelect() {
  const numbers = [...new Set(pastExams.map((item) => item.number))].sort((a, b) => b - a);
  $("#exam-select").innerHTML = numbers
    .map((number) => `<option value="${number}" ${number === selectedExam ? "selected" : ""}>第${number}回</option>`)
    .join("");
}

function renderExamFlow() {
  $("#selected-exam-title").textContent = `第${selectedExam}回`;
  $("#selected-exam-summary").textContent = "第56回〜第65回の過去問を収録しました。各回の問題と解答例を確認できます。";
  $("#exam-stepper").innerHTML = examStages
    .map((stage, index) => {
      const isActive = stage.id === selectedExamStage;
      return `
        <button class="exam-step ${isActive ? "is-active" : ""}" data-exam-stage="${stage.id}" type="button">
          <span>${index + 1}</span>
          ${stage.label}
        </button>
      `;
    })
    .join("");
  renderExamStage();
}

function renderExamStage() {
  const stage = examStages.find((item) => item.id === selectedExamStage);
  const files = pastExams.filter((item) => item.number === selectedExam);
  const stageFiles = files.filter((item) => item.kind === selectedExamStage);
  const answerFiles = files.filter((item) => item.kind === "answer");
  const practiceMarkup =
    selectedExamStage === "written"
      ? renderWrittenPractice()
      : renderGakkaPractice(selectedExamStage);

  $("#exam-stage-panel").innerHTML = `
    <article class="exam-stage-card">
      <div>
        <p class="eyebrow">Step ${examStages.findIndex((item) => item.id === selectedExamStage) + 1}</p>
        <h3>${stage.label}</h3>
        <p>${stage.guidance}</p>
      </div>
      ${practiceMarkup}
      <div class="exam-link-list">
        ${stageFiles.map(renderExamLink).join("")}
      </div>
      <div class="answer-reference">
        <h4>解答・基準</h4>
        <div class="exam-link-list compact-links">
          ${answerFiles.map(renderExamLink).join("")}
        </div>
      </div>
    </article>
  `;
}

function renderGakkaPractice(stageId) {
  const label = stageId === "general" ? "一般知識" : "専門知識";
  const answered = countAnswered(stageId);
  return `
    <section class="exam-practice" aria-label="${label}の解答入力">
      <div class="practice-head">
        <div>
          <h4>${label} 15問</h4>
          <p>${answered} / 15 問を入力済み</p>
        </div>
        <button class="secondary-button" data-clear-stage="${stageId}" type="button">この科目をリセット</button>
      </div>
      <div class="exam-question-grid">
        ${Array.from({ length: 15 }, (_, index) => renderExamQuestion(stageId, index + 1)).join("")}
      </div>
    </section>
  `;
}

function renderExamQuestion(stageId, questionNumber) {
  const key = getExamAnswerKey(stageId, questionNumber);
  const selected = state.pastExamAnswers[key];
  return `
    <div class="exam-question-card">
      <strong>問${questionNumber}</strong>
      <div class="answer-buttons" role="group" aria-label="問${questionNumber}の解答">
        ${[1, 2, 3, 4, 5]
          .map(
            (choice) => `
              <button class="${Number(selected) === choice ? "is-selected" : ""}" data-exam-answer="${key}" data-choice-value="${choice}" type="button">
                ${choice}
              </button>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderWrittenPractice() {
  return `
    <section class="exam-practice" aria-label="記述答案メモ">
      <div class="practice-head">
        <div>
          <h4>記述答案メモ</h4>
          <p>実技1・実技2の答案方針をここに残せます。</p>
        </div>
      </div>
      <div class="written-grid">
        ${["実技1 問1", "実技1 問2", "実技1 問3", "実技2 問1", "実技2 問2", "実技2 問3"]
          .map((label) => renderWrittenNote(label))
          .join("")}
      </div>
    </section>
  `;
}

function renderWrittenNote(label) {
  const key = `exam-${selectedExam}-written-${label}`;
  return `
    <label class="written-note">
      <span>${label}</span>
      <textarea data-written-note="${key}" rows="4" placeholder="根拠、使う図、答案の骨子をメモ">${state.writtenNotes[key] || ""}</textarea>
    </label>
  `;
}

function getExamAnswerKey(stageId, questionNumber) {
  return `exam-${selectedExam}-${stageId}-${questionNumber}`;
}

function countAnswered(stageId) {
  return Array.from({ length: 15 }, (_, index) => getExamAnswerKey(stageId, index + 1)).filter((key) => state.pastExamAnswers[key]).length;
}

function renderExamLink(file) {
  return `
    <a class="exam-file-link" href="${encodeURI(file.path)}" target="_blank" rel="noreferrer">
      <span>${file.title}</span>
      <small>${file.filename}</small>
    </a>
  `;
}

function answerQuestion(choiceIndex) {
  const question = questions[currentDomain][currentQuestionIndex];
  const isCorrect = choiceIndex === question.answer;
  state.total += 1;
  if (isCorrect) {
    state.correct += 1;
    state.completed[currentDomain] = Math.min(100, (state.completed[currentDomain] || 0) + 4);
  }

  document.querySelectorAll("[data-choice]").forEach((button) => {
    const buttonChoice = Number(button.dataset.choice);
    button.disabled = true;
    button.classList.toggle("is-correct", buttonChoice === question.answer);
    button.classList.toggle("is-wrong", buttonChoice === choiceIndex && !isCorrect);
  });

  $("#answer-result").textContent = isCorrect ? "正解" : "もう一歩";
  $("#answer-explanation").textContent = question.explanation;
  $("#answer-box").hidden = false;
  saveState();
  renderDashboard();
}

function nextQuestion() {
  currentQuestionIndex = (currentQuestionIndex + 1) % questions[currentDomain].length;
  renderQuestion();
}

function nextOverviewQuestion() {
  overviewQuestionIndex = (overviewQuestionIndex + 1) % overviewQuestions.length;
  renderOverviewQuestion();
}

function markWeak() {
  const question = questions[currentDomain][currentQuestionIndex];
  const exists = state.weak.some((item) => item.text === question.text);
  if (!exists) {
    state.weak.push({ domain: currentDomain, text: question.text });
    saveState();
    renderDashboard();
  }
  $("#mark-weak").textContent = "追加済み";
  setTimeout(() => {
    $("#mark-weak").textContent = "弱点に追加";
  }, 900);
}

function renderCard() {
  const card = cards[currentCardIndex];
  $("#card-tag").textContent = card.tag;
  $("#card-front").textContent = card.front;
  $("#card-back").textContent = card.back;
  $("#card-back").hidden = !cardShowingBack;
}

function shuffleCard() {
  const next = Math.floor(Math.random() * cards.length);
  currentCardIndex = next === currentCardIndex ? (next + 1) % cards.length : next;
  cardShowingBack = false;
  renderCard();
}

function renderPlan() {
  $("#plan-list").innerHTML = weeklyPlan
    .map(([day, title, detail], index) => {
      const done = state.doneDays.includes(index);
      return `
        <article class="plan-item ${done ? "is-done" : ""}">
          <span class="plan-day">${day.replace("Day ", "")}</span>
          <div>
            <h3>${title}</h3>
            <p>${detail}</p>
          </div>
          <span class="chip">${done ? "完了" : "未完了"}</span>
        </article>
      `;
    })
    .join("");
}

function completeToday() {
  const dayIndex = new Date().getDay();
  const planIndex = dayIndex === 0 ? 6 : dayIndex - 1;
  if (!state.doneDays.includes(planIndex)) {
    state.doneDays.push(planIndex);
    state.streak += 1;
    domains.forEach((domain) => {
      state.completed[domain.id] = Math.min(100, (state.completed[domain.id] || 0) + 2);
    });
  }
  saveState();
  renderDashboard();
  renderPlan();
}

document.querySelectorAll(".nav-tab").forEach((tab) => {
  tab.addEventListener("click", () => showView(tab.dataset.view));
});

document.querySelectorAll("[data-domain]").forEach((segment) => {
  segment.addEventListener("click", () => {
    currentDomain = segment.dataset.domain;
    currentQuestionIndex = 0;
    document.querySelectorAll("[data-domain]").forEach((button) => {
      button.classList.toggle("is-active", button === segment);
    });
    renderQuestion();
  });
});

$("#choices").addEventListener("click", (event) => {
  const button = event.target.closest("[data-choice]");
  if (button && !button.disabled) {
    answerQuestion(Number(button.dataset.choice));
  }
});

$("#overview-choices").addEventListener("click", (event) => {
  const button = event.target.closest("[data-overview-choice]");
  if (button && !button.disabled) {
    answerOverviewQuestion(Number(button.dataset.overviewChoice));
  }
});

$("#exam-stepper").addEventListener("click", (event) => {
  const button = event.target.closest("[data-exam-stage]");
  if (!button) return;
  selectedExamStage = button.dataset.examStage;
  state.examStage = selectedExamStage;
  saveState();
  renderExamFlow();
});

$("#exam-stage-panel").addEventListener("click", (event) => {
  const answerButton = event.target.closest("[data-exam-answer]");
  if (answerButton) {
    state.pastExamAnswers[answerButton.dataset.examAnswer] = Number(answerButton.dataset.choiceValue);
    saveState();
    renderExamStage();
    return;
  }

  const clearButton = event.target.closest("[data-clear-stage]");
  if (clearButton) {
    const stageId = clearButton.dataset.clearStage;
    Array.from({ length: 15 }, (_, index) => getExamAnswerKey(stageId, index + 1)).forEach((key) => {
      delete state.pastExamAnswers[key];
    });
    saveState();
    renderExamStage();
  }
});

$("#exam-stage-panel").addEventListener("input", (event) => {
  const textarea = event.target.closest("[data-written-note]");
  if (!textarea) return;
  state.writtenNotes[textarea.dataset.writtenNote] = textarea.value;
  saveState();
});

$("#next-question").addEventListener("click", nextQuestion);
$("#overview-next-question").addEventListener("click", nextOverviewQuestion);
$("#mark-weak").addEventListener("click", markWeak);
$("#shuffle-card").addEventListener("click", shuffleCard);
$("#complete-today").addEventListener("click", completeToday);
$("#flashcard").addEventListener("click", () => {
  cardShowingBack = !cardShowingBack;
  renderCard();
});
$("#flashcard").addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    cardShowingBack = !cardShowingBack;
    renderCard();
  }
});
$("#reset-progress").addEventListener("click", () => {
  Object.assign(state, structuredClone(defaultState));
  selectedExam = state.selectedExam;
  selectedExamStage = state.examStage;
  saveState();
  renderDashboard();
  renderPlan();
  renderQuestion();
  renderExamSelect();
  renderExamFlow();
});
$("#exam-select").addEventListener("change", (event) => {
  selectedExam = Number(event.target.value);
  selectedExamStage = "general";
  state.selectedExam = selectedExam;
  state.examStage = selectedExamStage;
  saveState();
  renderExamFlow();
});

renderDashboard();
renderOverview();
renderQuestion();
renderCard();
renderPlan();
renderExamSelect();
renderExamFlow();
