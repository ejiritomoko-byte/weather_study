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
  ],
};

const overviewTopics = [
  {
    title: "資料を読む目的",
    body: "気象庁の専門家向け資料は、短期・週間予報解説資料や気象情報を読み解き、自治体などへ実況と見通しを説明するための入口です。",
    source: "https://www.jma.go.jp/jma/kishou/know/expert/index.html",
  },
  {
    title: "リアルタイム資料",
    body: "高層天気図、FAX天気図、台風進路予測図、短期・週間予報解説資料を並べて、実況・予想・防災上の注目点をつなげて読みます。",
    source: "https://www.jma.go.jp/jma/kishou/know/expert/index.html",
  },
  {
    title: "防災気象情報",
    body: "警戒レベル、キキクル、線状降水帯の呼びかけなどは、現象の理解だけでなく避難判断へどう翻訳するかが要点です。",
    source: "https://www.jma.go.jp/jma/kishou/know/expert/index.html",
  },
  {
    title: "技術資料と教科書",
    body: "実況資料、予想資料、警報・キキクルの解説資料に加え、総観気象学の基礎・応用・理論編が学習の骨組みになります。",
    source: "https://www.jma.go.jp/jma/kishou/know/expert/index.html",
  },
];

const overviewQuestions = [
  {
    text: "気象庁の専門家向け資料集の主な狙いとして最も近いものはどれですか。",
    choices: ["観光案内を作る", "気象情報や予報解説資料を読み解き、適切に説明できるよう支援する", "過去の台風名だけを調べる", "天気図の画像を装飾に使う"],
    answer: 1,
    explanation: "公式ページは、気象情報や短期・週間予報解説資料を適切に読み解く支援を目的にしています。",
  },
  {
    text: "短期予報解説資料で特に確認したい観点はどれですか。",
    choices: ["予報の考え方と防災事項", "過去10年の全気温", "観測機器の価格", "観光地の混雑"],
    answer: 0,
    explanation: "短期予報解説資料は、短期予報の考え方や防災事項を確認する材料として使えます。",
  },
  {
    text: "キキクルや警戒レベルを学ぶときの中心はどれですか。",
    choices: ["色名を暗記して終わる", "危険度を避難判断や防災行動に結びつける", "天気記号だけを描く", "台風番号を覚える"],
    answer: 1,
    explanation: "防災気象情報は、現象理解と行動判断を結ぶために読むのが大切です。",
  },
  {
    text: "総観気象学の教科書群を使う目的として最もよいものはどれですか。",
    choices: ["短期予報解説資料を理解する土台を作る", "試験範囲をすべて無視する", "地名だけを覚える", "資料を開かずに済ませる"],
    answer: 0,
    explanation: "公式ページでは、短期予報解説資料を理解するために必要な知識を学ぶ教科書として掲載されています。",
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
          <a href="${topic.source}" target="_blank" rel="noreferrer">公式資料を見る</a>
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

  $("#exam-stage-panel").innerHTML = `
    <article class="exam-stage-card">
      <div>
        <p class="eyebrow">Step ${examStages.findIndex((item) => item.id === selectedExamStage) + 1}</p>
        <h3>${stage.label}</h3>
        <p>${stage.guidance}</p>
      </div>
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
