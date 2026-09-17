// すべて実在するサービスです。星評価・レビュー件数は捏造せず、
// 公開情報から確認できる事実（対象・費用・対応言語・提供元）のみを掲載しています。
// 掲載順は「公的機関 → 民間サービス」の分類順で、優劣を評価したランキングではありません。
const SERVICES = [
  {
    name: "ハローワーク外国人雇用サービスセンター",
    operator: "厚生労働省",
    type: "public",
    typeLabel: "公的機関",
    cost: "無料",
    catchphrase: "職員による対面相談と外国人向け求人紹介",
    description: "東京・愛知・大阪など主要都市に設置されている公的な相談窓口。留学生や在住外国人向けに求人紹介、就職ガイダンス、模擬面接などを無料で行っている。日本語でのやり取りが基本となる。",
    tags: ["公的機関", "求人紹介", "個別相談"],
    features: {
      "対象": "就労を希望する留学生・在住外国人",
      "費用": "無料",
      "対応言語": "日本語（要基礎日本語力）",
      "拠点": "東京・愛知・大阪など主要都市"
    },
    details: [
      "職員による対面での職業相談・求人紹介",
      "外国人留学生等就職面接会などのイベントを開催",
      "模擬面接や応募書類の相談に対応"
    ],
    ctaLabel: "詳細を見る（愛知の例）",
    url: "https://jsite.mhlw.go.jp/aichi-foreigner/ryugakusei.html"
  },
  {
    name: "留学生就職支援ネットワーク",
    operator: "加盟大学コンソーシアム",
    type: "public",
    typeLabel: "公的機関",
    cost: "無料（加盟大学の学生のみ）",
    catchphrase: "大学公認の就活学習サイト",
    description: "経済産業省・文部科学省の事業を源流とし、加盟大学に在籍する留学生向けに、日本の就活の進め方や試験対策をオンラインで学べる仕組みを提供している。利用には加盟大学に在籍している必要がある。",
    tags: ["公的機関", "セミナー"],
    features: {
      "対象": "加盟大学に在籍する留学生のみ",
      "費用": "無料",
      "対応言語": "日本語",
      "内容": "就活ノウハウのWeb学習、企業説明会情報"
    },
    details: [
      "日本での就活の進め方をオンラインで学習できる",
      "外国人留学生の採用に積極的な企業の情報を提供",
      "合同企業説明会・面接会の案内あり"
    ],
    ctaLabel: "公式サイトを見る",
    url: "https://ajinzai-sc.jp/"
  },
  {
    name: "マイナビ国際派就職",
    operator: "株式会社マイナビ",
    type: "private-free",
    typeLabel: "民間",
    cost: "無料",
    catchphrase: "海外留学生・バイリンガル人材向け求人サイト",
    description: "大手就職情報会社マイナビが運営する、海外留学経験者やバイリンガル人材向けの求人サイト。グローバル企業の求人情報のほか、自己PR・志望動機の作成を助けるツールやコラムを提供している。",
    tags: ["求人紹介", "セミナー"],
    features: {
      "対象": "海外留学生・バイリンガル人材",
      "費用": "無料",
      "対応言語": "日本語",
      "内容": "求人情報、自己PR作成ツール、コラム"
    },
    details: [
      "グローバル企業の求人情報を掲載",
      "自己PR・志望動機の作成を助ける穴埋め式ツールあり",
      "国別の就活スケジュール解説コラムを配信"
    ],
    ctaLabel: "公式サイトを見る",
    url: "https://global.mynavi.jp/"
  },
  {
    name: "リュウカツ",
    operator: "運営元Webサイト情報を要確認",
    type: "private-free",
    typeLabel: "民間",
    cost: "無料",
    catchphrase: "外国人留学生の就職・企業の外国人採用に特化",
    description: "外国人留学生の就職支援と、企業側の外国人採用支援を両方行っているサイト。求人情報のほか、個社説明会・合同企業説明会、就活ノウハウを伝えるセミナーを定期的に開催している。",
    tags: ["求人紹介", "セミナー", "個別相談"],
    features: {
      "対象": "外国人留学生",
      "費用": "無料",
      "対応言語": "日本語（求人によっては多言語対応）",
      "内容": "求人紹介、企業説明会、就活セミナー"
    },
    details: [
      "外国人採用実績のある企業の求人を多数掲載",
      "個社説明会・合同企業説明会を定期開催",
      "就活で役立つノウハウをスタッフが解説するセミナーあり"
    ],
    ctaLabel: "公式サイトを見る",
    url: "https://ryugakusei.com/"
  },
  {
    name: "CareerCross",
    operator: "株式会社キャリアクロス",
    type: "private-free",
    typeLabel: "民間",
    cost: "無料（求職者側）",
    catchphrase: "バイリンガル人材向け、IT・金融・エンジニア職に強い",
    description: "外資系・グローバル企業とバイリンガル人材をつなぐ求人サイト。特にIT・金融・エンジニア分野の求人に強みがあり、条件を絞った検索が可能。",
    tags: ["求人紹介"],
    features: {
      "対象": "バイリンガル人材（新卒〜中途）",
      "費用": "無料",
      "対応言語": "日本語・英語",
      "得意分野": "IT・金融・エンジニア職"
    },
    details: [
      "外資系・グローバル企業の求人を多数掲載",
      "職種・条件で絞り込んだ求人検索が可能",
      "英語での職務経歴書登録に対応"
    ],
    ctaLabel: "公式サイトを見る",
    url: "https://www.careercross.com/"
  },
  {
    name: "Daijob.com",
    operator: "株式会社パソナグループ系列",
    type: "private-free",
    typeLabel: "民間",
    cost: "無料",
    catchphrase: "1998年から続くバイリンガル人材向け求人サイト",
    description: "1998年開設と歴史が長く、バイリンガル・多言語人材向けの求人を1万件以上掲載。グローバル企業とのマッチングに強く、中堅・中途層向けの求人も多い。",
    tags: ["求人紹介"],
    features: {
      "対象": "バイリンガル・多言語人材",
      "費用": "無料",
      "対応言語": "日本語・英語",
      "求人数": "1万件以上"
    },
    details: [
      "1998年から運営されている老舗の求人サイト",
      "グローバル企業の求人に強い",
      "日英バイリンガルでの職務経歴書登録が可能"
    ],
    ctaLabel: "公式サイトを見る",
    url: "https://www.daijob.com/"
  },
  {
    name: "GaijinPot Jobs",
    operator: "GPlusMedia",
    type: "private-free",
    typeLabel: "民間",
    cost: "無料",
    catchphrase: "英語で使える、在日外国人向け最大級の求人サイト",
    description: "在日外国人向け総合情報サイト「GaijinPot」が運営する求人サービス。英語ベースで利用でき、日本語・英語レベルで求人を絞り込める。求人以外に生活情報や住居情報も提供している。",
    tags: ["求人紹介"],
    features: {
      "対象": "英語話者の外国人（学生〜就労者）",
      "費用": "無料",
      "対応言語": "英語",
      "特徴": "生活・住居情報も同時に提供"
    },
    details: [
      "日本語力・英語力別に求人を絞り込み検索できる",
      "レジュメ登録で企業からのスカウトを受けられる",
      "求人以外に生活ガイドや住居情報も充実"
    ],
    ctaLabel: "公式サイトを見る",
    url: "https://jobs.gaijinpot.com/"
  },
  {
    name: "YOLO JAPAN（ヨロワーク）",
    operator: "株式会社YOLO JAPAN",
    type: "private-free",
    typeLabel: "民間",
    cost: "無料",
    catchphrase: "在留外国人の登録者数が国内最大級",
    description: "20年以上外国人向けサービスを展開してきたYOLO JAPANが運営する求人サイト。日本語力に自信がない人向けの「日本語不問」求人や、寮付き・高時給案件も多く掲載している。",
    tags: ["求人紹介"],
    features: {
      "対象": "在留外国人全般（アルバイト〜正社員）",
      "費用": "無料",
      "対応言語": "やさしい日本語・多言語対応あり",
      "特徴": "日本語不問求人、寮付き案件が多い"
    },
    details: [
      "日本語力に不安がある人向けの求人が豊富",
      "エリア・時給・語学力などタグで絞り込み検索が可能",
      "企業からのスカウト機能あり"
    ],
    ctaLabel: "公式サイトを見る",
    url: "https://www.yolo-japan.com/"
  },
  {
    name: "Guidable Jobs",
    operator: "株式会社Guidable",
    type: "private-free",
    typeLabel: "民間",
    cost: "無料",
    catchphrase: "在日外国人向け生活情報メディアが運営する求人サービス",
    description: "在日外国人向けの生活情報サイト「Guidable」が運営する求人サービス。就職情報だけでなく、日本での暮らし方に関する記事も豊富で、生活面の不安解消と求職を同時に進められる。",
    tags: ["求人紹介"],
    features: {
      "対象": "在日外国人（学生・就労者）",
      "費用": "無料",
      "対応言語": "英語・日本語",
      "特徴": "生活情報メディアと一体型"
    },
    details: [
      "求人情報と生活ガイド記事を同じサイトで確認できる",
      "英語での情報発信が中心",
      "初めて日本で仕事を探す人向けの記事が充実"
    ],
    ctaLabel: "公式サイトを見る",
    url: "https://jobs.guidable.co/"
  },
  {
    name: "JASSO 留学生就職促進プログラム関連情報",
    operator: "独立行政法人日本学生支援機構（JASSO）",
    type: "public",
    typeLabel: "公的機関",
    cost: "無料",
    catchphrase: "国の機関が発行する就活ガイド・情報源",
    description: "留学生の受け入れ・支援を担う国の機関JASSOが提供する情報。就活スケジュールや基本的な進め方をまとめたガイドを毎年発行しており、日本の就活の全体像を把握する最初の一歩として使える。",
    tags: ["公的機関", "セミナー"],
    features: {
      "対象": "日本国内の留学生全般",
      "費用": "無料",
      "対応言語": "日本語（一部多言語）",
      "内容": "就活ガイドの発行、情報提供"
    },
    details: [
      "毎年更新される留学生向け就活ガイドを公開",
      "就活スケジュール・基礎知識を体系的に確認できる",
      "他の支援機関・大学窓口への橋渡し役にもなる"
    ],
    ctaLabel: "公式サイトを見る",
    url: "https://www.jasso.go.jp/"
  }
];

const rankingList = document.getElementById("rankingList");
const emptyState = document.getElementById("emptyState");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");

let activeTag = "all";
let query = "";

function matches(service) {
  const tagOk = activeTag === "all" || service.tags.includes(activeTag);
  const haystack = (service.name + " " + service.catchphrase + " " + service.description).toLowerCase();
  const queryOk = query === "" || haystack.includes(query);
  return tagOk && queryOk;
}

function render() {
  const visible = SERVICES.filter(matches);
  rankingList.innerHTML = "";

  visible.forEach(service => {
    const card = document.createElement("article");
    card.className = "card";
    card.dataset.type = service.type;

    const featuresHtml = Object.entries(service.features).map(([label, value]) => `
      <div class="feature-item">
        <span class="feature-label">${label}</span>
        <span class="feature-value">${value}</span>
      </div>
    `).join("");

    card.innerHTML = `
      <div class="badge-row">
        <span class="type-badge ${service.type}">${service.typeLabel}</span>
        <span class="cost-badge">${service.cost}</span>
      </div>
      <div class="card-header">
        <h2 class="service-title">${service.name}</h2>
        <span class="operator">${service.operator}</span>
      </div>
      <p class="catchphrase">「${service.catchphrase}」</p>
      <p class="description">${service.description}</p>
      <div class="features-grid">${featuresHtml}</div>
      <div class="card-actions">
        <button type="button" class="btn btn-outline js-detail-btn" data-name="${service.name}">詳細を見る</button>
        <button type="button" class="btn btn-primary js-cta-btn" data-name="${service.name}">${service.ctaLabel}</button>
      </div>
    `;
    rankingList.appendChild(card);
  });

  emptyState.hidden = visible.length > 0;

  document.querySelectorAll(".js-detail-btn, .js-cta-btn").forEach(btn => {
    btn.addEventListener("click", () => openModal(btn.dataset.name));
  });
}

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => {
      btn.classList.remove("active");
      btn.setAttribute("aria-pressed", "false");
    });
    button.classList.add("active");
    button.setAttribute("aria-pressed", "true");
    activeTag = button.dataset.tag;
    render();
  });
});

searchInput.addEventListener("input", (e) => {
  query = e.target.value.trim().toLowerCase();
  render();
});

// --- Modal ---
const modalOverlay = document.getElementById("modalOverlay");
const modalTitle = document.getElementById("modalTitle");
const modalCatch = document.getElementById("modalCatch");
const modalDetails = document.getElementById("modalDetails");
const modalCta = document.getElementById("modalCta");
const modalClose = document.getElementById("modalClose");
let lastFocusedElement = null;

function openModal(serviceName) {
  const service = SERVICES.find(s => s.name === serviceName);
  if (!service) return;

  lastFocusedElement = document.activeElement;
  modalTitle.textContent = service.name;
  modalCatch.textContent = `「${service.catchphrase}」`;
  modalDetails.innerHTML = service.details.map(d => `<li>${d}</li>`).join("");
  modalCta.href = service.url;

  modalOverlay.hidden = false;
  modalClose.focus();
  document.addEventListener("keydown", handleModalKeydown);
}

function closeModal() {
  modalOverlay.hidden = true;
  document.removeEventListener("keydown", handleModalKeydown);
  if (lastFocusedElement) lastFocusedElement.focus();
}

function handleModalKeydown(e) {
  if (e.key === "Escape") closeModal();
}

modalClose.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) closeModal();
});

render();
