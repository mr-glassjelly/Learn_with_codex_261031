"use strict";
const GROUPS = [
  {
    "id": "arrivals",
    "title": "오늘 도착한 편지",
    "letters": [
      {
        "id": "autumn",
        "title": "",
        "author": "달빛낭만",
        "collection": "9월 편지 모임",
        "paper": "#f1e5e5",
        "ink": "#ac3c43",
        "body": "거창한 일이 없어도 괜찮은 하루.\n\n햇볕이 좋은 자리에 앉아 잠시 쉬었어요. 창문을 조금 열고, 식어가는 차를 마시며 오래 미뤄두었던 안부를 적었습니다.\n\n한 사람에게 편지를 전할 수 있다는 것만으로도 오늘은 충분했습니다. 당신에게도 그런 작은 행복이 있었기를 바라요.",
        "recipient": "금방 보고 싶은 영희에게",
        "signature": "따사로운 햇살 아래 찬 바람이 느껴지는 늦가을의 어느 날,\n달빛낭만 드림"
      },
      {
        "id": "thought",
        "title": "늘 당신의 편에서",
        "author": "주개연",
        "collection": "",
        "paper": "#d4d7e9",
        "ink": "#454575",
        "body": "익숙한 길을 조금 천천히 걸었습니다.\n\n문득 당신은 어떤 하루를 보내고 있을지 궁금해졌어요. 매일 나의 하루를 채우느라 바빴는데, 오늘은 누군가의 이야기를 듣고 싶었습니다.\n\n이 짧은 편지가 당신에게도 닿으면 좋겠습니다.",
        "recipient": "사랑하는 부모님께",
        "signature": "주개연 드림"
      },
      {
        "id": "jeju",
        "title": "오늘의 작은 자랑",
        "author": "In jeju",
        "collection": "9월 편지 모임",
        "paper": "#e8ebe1",
        "ink": "#56624b",
        "body": "오늘 잘한 일을 하나만 떠올려 보려고 해요.\n\n할 일을 끝내고, 오랫동안 미뤄온 안부도 전했습니다. 아주 작은 일이어도 오늘의 나에게는 잘했다고 말해주고 싶어요.\n\n당신의 오늘에는 어떤 작은 자랑이 있나요?",
        "recipient": "시작이 두려운 지우 님께",
        "signature": "처음의 설렘을 떠올리는 토요일,\nIn jeju 드림"
      },
      {
        "id": "jongno",
        "title": "",
        "author": "책먹는무무",
        "collection": "문화생활 아지트",
        "paper": "#e6e0d7",
        "ink": "#766451",
        "body": "오래된 골목 사이로 오후 햇살이 들었습니다.\n\n익숙한 풍경에도 매번 다른 빛이 있네요. 골목 끝 작은 가게에서 시간을 보내다가, 한결 가벼워진 기분으로 집으로 돌아왔어요.\n\n당신에게 잘 어울리는 동네는 어디인가요?",
        "recipient": "익숙한 골목을 걷는 당신에게",
        "signature": "늦가을의 햇살이 골목에 머무는 오후,\n책먹는무무 드림"
      }
    ]
  },
  {
    "id": "newsletter",
    "title": "일곤의 뉴스레터",
    "letters": [
      {
        "id": "news-1",
        "title": "편지를 쓰는\n토요일",
        "author": "일곤",
        "collection": "일곤의 뉴스레터",
        "paper": "#eee1d3",
        "ink": "#8b5c43",
        "body": "토요일 오전에는 조금 늦게 책상에 앉습니다.\n\n커피 한 잔을 곁에 두고 이번 주에 읽었던 문장들을 다시 펼쳐보았어요. 매일 지나쳤던 것들이 편지를 쓸 때에는 조금 다르게 보입니다.\n\n오늘은 어떤 이야기를 편지에 담고 싶으신가요?",
        "recipient": "이번 주를 함께 보낸 구독자님께",
        "signature": "커피 한 잔과 함께 시작하는 토요일 아침,\n일곤 드림"
      },
      {
        "id": "news-2",
        "title": "",
        "author": "일곤",
        "collection": "일곤의 뉴스레터",
        "paper": "#e2e7df",
        "ink": "#52654e",
        "body": "이번 주에는 하루에 한 문장씩 기록해 보았습니다.\n\n짧게 적어두었던 문장을 모으니 생각보다 많은 이야기가 남아 있었어요. 사소한 장면들을 오래 기억하는 방법이 꼭 거창할 필요는 없겠지요.\n\n당신의 이번 주에는 어떤 문장이 남았나요?",
        "recipient": "일상을 기록하는 당신에게",
        "signature": "평범한 하루의 끝에서,\n일곤 드림"
      },
      {
        "id": "news-3",
        "title": "느리게 읽는\n문장",
        "author": "일곤",
        "collection": "일곤의 뉴스레터",
        "paper": "#e3dfed",
        "ink": "#65527e",
        "body": "같은 문장도 천천히 읽으면 다른 이야기가 됩니다.\n\n오늘은 좋아하는 책의 한 페이지를 여러 번 읽었어요. 처음에는 보이지 않던 단어가 눈에 들어오고, 그 옆에 짧은 메모를 남겼습니다.\n\n이 편지도 당신의 속도로 읽어주세요.",
        "recipient": "좋은 문장을 아껴 읽는 당신에게",
        "signature": "일곤 드림"
      }
    ]
  },
  {
    "id": "recommended",
    "title": "읽어볼 만한 편지",
    "letters": [
      {
        "id": "jeju",
        "title": "오늘의 작은 자랑",
        "author": "In jeju",
        "collection": "9월 편지 모임",
        "paper": "#e8ebe1",
        "ink": "#56624b",
        "body": "오늘 잘한 일을 하나만 떠올려 보려고 해요.\n\n할 일을 끝내고, 오랫동안 미뤄온 안부도 전했습니다. 아주 작은 일이어도 오늘의 나에게는 잘했다고 말해주고 싶어요.\n\n당신의 오늘에는 어떤 작은 자랑이 있나요?",
        "recipient": "시작이 두려운 지우 님께",
        "signature": "처음의 설렘을 떠올리는 토요일,\nIn jeju 드림"
      },
      {
        "id": "jongno",
        "title": "",
        "author": "책먹는무무",
        "collection": "문화생활 아지트",
        "paper": "#e6e0d7",
        "ink": "#766451",
        "body": "오래된 골목 사이로 오후 햇살이 들었습니다.\n\n익숙한 풍경에도 매번 다른 빛이 있네요. 골목 끝 작은 가게에서 시간을 보내다가, 한결 가벼워진 기분으로 집으로 돌아왔어요.\n\n당신에게 잘 어울리는 동네는 어디인가요?",
        "recipient": "익숙한 골목을 걷는 당신에게",
        "signature": "늦가을의 햇살이 골목에 머무는 오후,\n책먹는무무 드림"
      },
      {
        "id": "autumn",
        "title": "",
        "author": "달빛낭만",
        "collection": "9월 편지 모임",
        "paper": "#f1e5e5",
        "ink": "#ac3c43",
        "body": "거창한 일이 없어도 괜찮은 하루.\n\n햇볕이 좋은 자리에 앉아 잠시 쉬었어요. 창문을 조금 열고, 식어가는 차를 마시며 오래 미뤄두었던 안부를 적었습니다.\n\n한 사람에게 편지를 전할 수 있다는 것만으로도 오늘은 충분했습니다. 당신에게도 그런 작은 행복이 있었기를 바라요.",
        "recipient": "금방 보고 싶은 영희에게",
        "signature": "따사로운 햇살 아래 찬 바람이 느껴지는 늦가을의 어느 날,\n달빛낭만 드림"
      },
      {
        "id": "thought",
        "title": "늘 당신의 편에서",
        "author": "주개연",
        "collection": "",
        "paper": "#d4d7e9",
        "ink": "#454575",
        "body": "익숙한 길을 조금 천천히 걸었습니다.\n\n문득 당신은 어떤 하루를 보내고 있을지 궁금해졌어요. 매일 나의 하루를 채우느라 바빴는데, 오늘은 누군가의 이야기를 듣고 싶었습니다.\n\n이 짧은 편지가 당신에게도 닿으면 좋겠습니다.",
        "recipient": "사랑하는 부모님께",
        "signature": "주개연 드림"
      }
    ]
  }
];
// Additional mock letters make the horizontal rows scrollable.
const additionalLetters = [
  ['quiet-evening', '조용한 저녁의 안부', '하루를 마친 수진에게', '오후의 기록', '#eee4d8', '#85674f'],
  ['slow-walk', '조금 느리게 걸어도', '자신의 속도를 찾는 민수에게', '느린산책', '#e0e8e5', '#526d64'],
  ['next-season', '다음 계절에도', '멀리 있는 친구에게', '여름끝', '#e8dfe9', '#785c7b'],
  ['news-4', '창가에 남겨둔 이야기', '잠깐의 쉼이 필요한 당신에게', '일곤', '#e7e5d8', '#737049'],
  ['news-5', '다시 펼친 첫 페이지', '새로운 시작을 앞둔 당신에게', '일곤', '#dde5ee', '#536a84']
].map(([id, title, recipient, author, paper, ink]) => ({
  id, title, recipient, author, paper, ink,
  collection: author === '일곤' ? '일곤의 뉴스레터' : '가을 편지 모임',
  signature: author + ' 드림',
  body: '오늘은 ' + title + '에 대해 적어봅니다.\n\n잠시 걸음을 멈추니 평소에는 지나쳤던 풍경이 눈에 들어왔어요. 특별하지 않은 하루에도 오래 간직하고 싶은 순간이 있네요.\n\n이 작은 이야기가 당신의 하루에도 편안한 쉼이 되기를 바랍니다.'
}));
GROUPS[0].letters.push(...additionalLetters.slice(0, 3));
GROUPS[1].letters.push(...additionalLetters.slice(3));
GROUPS[2].letters = GROUPS[2].letters.slice(0, 2);
const $ = (selector) => document.querySelector(selector);
const dialog = $('.letter-dialog');
const cardTemplate = $('.letter-card').cloneNode(true);
const groups = GROUPS.map((group) => ({ ...group, letters: group.letters.map(normalizeLetter), index: 0, element: document.querySelector('[data-group="' + group.id + '"]') }));
let activeId = groups[0].id, readingId = null, opener = null, readerMode = 'preview';
const displayText = (value) => String(value).replaceAll('마음', '편지');
function normalizeLetter(letter) {
  const author = typeof letter.author === 'string' && letter.author.trim() ? letter.author.trim() : '나';
  return { ...letter, author, recipient: typeof letter.recipient === 'string' ? letter.recipient.trim() : '', title: typeof letter.title === 'string' ? letter.title.trim() : '', signature: typeof letter.signature === 'string' && letter.signature.trim() ? letter.signature.trim() : author + ' 드림', collection: typeof letter.collection === 'string' ? letter.collection.trim() : '' };
}
function letterLabel(letter) { return [letter.recipient, letter.title, letter.author + ' 드림'].filter(Boolean).join(' · ').replaceAll('\n', ' '); }
// Preserve previously written letters without changing the browser's saved data.
try {
  const own = JSON.parse(localStorage.getItem('friction-mobile-web-letters') || '[]');
  if (Array.isArray(own)) groups[0].letters.unshift(...own.filter((item) => item && typeof item === 'object' && ['id','title','author','collection','body','paper','ink'].every((key) => typeof item[key] === 'string')).map(normalizeLetter));
} catch { /* The mockup also works without browser storage. */ }
groups[0].letters = groups[0].letters.slice(0, 7);
// Mock writing dates: each letter appears once, grouped newest date first.
const archiveLetters = [...new Map(GROUPS.flatMap((group) => group.letters).map((letter) => [letter.id, letter])).values()];
const mockWrittenDates = Object.fromEntries(archiveLetters.map((letter, index) => [letter.id,
  index < 7 ? '2026-10-15' : index < 10 ? '2026-09-11' : '2026-08-24'
]));
const archiveByDate = new Map();
const archivedIds = new Set();
for (const letter of GROUPS.flatMap((group) => group.letters)) {
  if (archivedIds.has(letter.id)) continue;
  archivedIds.add(letter.id);
  const writtenAt = mockWrittenDates[letter.id];
  if (!writtenAt) continue;
  if (!archiveByDate.has(writtenAt)) archiveByDate.set(writtenAt, []);
  archiveByDate.get(writtenAt).push(normalizeLetter({ ...letter, writtenAt }));
}
for (const [date, letters] of [...archiveByDate].sort(([a], [b]) => b.localeCompare(a))) {
  const id = 'archive-' + date;
  const [, month, day] = date.split('-').map(Number);
  const title = month + '월 ' + day + '일';
  const section = document.createElement('section');
  section.className = 'letter-section';
  section.id = id;
  section.dataset.group = id;
  section.setAttribute('aria-labelledby', 'heading-' + id);
  section.innerHTML = '<div class="section-heading"><h2 id="heading-' + id + '"><time datetime="' + date + '">' + title + '</time></h2><span class="letter-count"></span></div><div class="stack-stage"><div class="card-deck"></div></div>';
  $('#archiveFeed').append(section);
  groups.push({ id, title, letters, index: 0, element: section });
}
function groupFor(id) { return groups.find((group) => group.id === id); }
function renderGroup(group) {
  const deck = group.element.querySelector('.card-deck');
  const existing = new Map([...deck.children].map((card) => [card.dataset.id, card]));
  const visible = new Set();
  for (let index = 0; index < group.letters.length; index++) {
    const letter = group.letters[index];
    visible.add(letter.id);
    const card = existing.get(letter.id) || cardTemplate.cloneNode(true);
    card.dataset.id = letter.id;
    card.className = 'letter-card' + (letter.title ? ' has-title' : '');
    card.style.removeProperty('--depth');
    card.style.backgroundColor = letter.paper; card.style.color = letter.ink;
    card.tabIndex = 0;
    card.removeAttribute('aria-hidden');
    card.setAttribute('aria-label', displayText(letterLabel(letter)) + ' · 편지 읽기');
    card.querySelector('.card-recipient').textContent = displayText(letter.recipient);
    card.querySelector('h3').textContent = displayText(letter.title);
    card.querySelector('h3').hidden = !letter.title;
    card.querySelector('.card-byline strong').textContent = displayText(letter.author) + ' 드림';
    card.querySelector('.card-byline span').textContent = displayText(letter.collection);
    card.querySelector('.card-byline span').hidden = !letter.collection;
    deck.append(card);
  }
  for (const card of [...deck.children]) if (!visible.has(card.dataset.id)) card.remove();
  group.element.querySelector('.letter-count').textContent = group.letters.length + '통';
}
function renderPreview(group) {
  activeId = group.id;
  const letter = group.letters[group.index];
  $('#previewRecipient').textContent = displayText(letter.recipient);
  $('#previewRecipient').hidden = !letter.title || !letter.recipient;
  $('#previewTitle').textContent = displayText(letter.title || letter.recipient);
  $('#previewBody').textContent = displayText(letter.body);
  $('#previewAuthor').textContent = displayText(letter.signature);
  $('#previewOrigin').textContent = displayText(letter.collection);
  $('#previewOrigin').hidden = !letter.collection;
}
function move(id, direction) {
  const group = groupFor(id); if (!group) return;
  group.index = (group.index + direction + group.letters.length) % group.letters.length;
  renderGroup(group); renderPreview(group);
  const current = group.letters[group.index];
  $('[role="status"]').textContent = group.title + ', ' + (group.index + 1) + '번째 편지, ' + displayText(letterLabel(current));
  if (dialog.open && readingId === id) renderReading(group);
}
function renderReading(group) {
  const letter = group.letters[group.index];
  $('.letter-collection').textContent = displayText(letter.collection);
  $('.letter-collection').hidden = !letter.collection;
  $('.letter-reading').classList.toggle('has-title', Boolean(letter.title));
  $('#readingRecipient').textContent = displayText(letter.recipient);
  dialog.setAttribute('aria-labelledby', letter.title ? 'dialog-title' : 'readingRecipient');
  $('#dialog-title').textContent = displayText(letter.title);
  $('#dialog-title').hidden = !letter.title;
  $('.reading-body').textContent = displayText(letter.body);
  $('.reading-signature').textContent = displayText(letter.signature);
  const cover = $('.reader-cover');
  cover.classList.toggle('has-title', Boolean(letter.title));
  cover.style.backgroundColor = letter.paper; cover.style.color = letter.ink;
  cover.querySelector('.card-recipient').textContent = displayText(letter.recipient);
  cover.querySelector('h3').textContent = displayText(letter.title);
  cover.querySelector('h3').hidden = !letter.title;
  cover.querySelector('.card-byline strong').textContent = displayText(letter.author) + ' 드림';
  cover.querySelector('.card-byline span').textContent = displayText(letter.collection);
  cover.querySelector('.card-byline span').hidden = !letter.collection;
  const preview = readerMode === 'preview';
  $('.reader-preview').hidden = !preview;
  $('.letter-reading').hidden = preview;
  $('#readerHeading').textContent = preview ? '편지 보기' : '편지 읽기';
  if (preview) dialog.setAttribute('aria-labelledby', 'readerHeading');
}
function openLetter(group) {
  opener = document.activeElement; readingId = group.id; readerMode = 'preview';
  renderPreview(group); renderReading(group); dialog.showModal(); dialog.scrollTop = 0;
}
function closeLetter() { dialog.close(); readingId = null; opener?.focus(); }
for (const group of groups) {
  renderGroup(group);
  group.element.addEventListener('click', (event) => {
    const moving = event.target.closest('[data-move]');
    if (moving) { move(group.id, Number(moving.dataset.move)); return; }
    const card = event.target.closest('.letter-card');
    if (card) { group.index = group.letters.findIndex((letter) => letter.id === card.dataset.id); openLetter(group); }
  });
  group.element.addEventListener('keydown', (event) => {
    if (['ArrowLeft', 'ArrowRight'].includes(event.key) && event.target.closest('.letter-card')) {
      event.preventDefault();
      const cards = [...group.element.querySelectorAll('.letter-card')];
      const index = cards.indexOf(event.target.closest('.letter-card'));
      cards[(index + (event.key === 'ArrowRight' ? 1 : -1) + cards.length) % cards.length].focus();
    }
  });
}
function showFeed(archive) {
  $('#homeFeed').hidden = archive;
  $('#archiveFeed').hidden = !archive;
  for (const [id, selected] of [['homeTab', !archive], ['archiveTab', archive]]) {
    const button = document.getElementById(id);
    button.classList.toggle('active', selected);
    if (selected) button.setAttribute('aria-current', 'page');
    else button.removeAttribute('aria-current');
  }
  window.scrollTo({ top: 0, behavior: 'instant' });
  renderPreview(groups.find((group) => group.id.startsWith('archive-') === archive));
}
$('#homeTab').addEventListener('click', () => showFeed(false));
$('#archiveTab').addEventListener('click', () => showFeed(true));
$('.close-button').addEventListener('click', closeLetter);
$('.preview-close').addEventListener('click', closeLetter);
$('.read-letter-button').addEventListener('click', () => {
  const group = groupFor(readingId); if (!group) return;
  readerMode = 'read'; renderReading(group); dialog.scrollTop = 0;
  $('#readerHeading').focus({ preventScroll: true });
});
for (const button of document.querySelectorAll('[data-dialog-move]')) button.addEventListener('click', () => move(readingId, Number(button.dataset.dialogMove)));
dialog.addEventListener('cancel', (event) => { event.preventDefault(); closeLetter(); });
dialog.addEventListener('click', (event) => {
  if (event.target !== dialog) return;
  const box = dialog.getBoundingClientRect();
  if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) closeLetter();
});
// Follow the section being read while the page scrolls naturally on touchscreens.
if ('IntersectionObserver' in window) {
  const ratios = new Map();
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) ratios.set(entry.target.dataset.group, entry.isIntersecting ? entry.intersectionRatio : 0);
    if (dialog.open) return;
    const best = [...ratios].filter(([id]) => !groupFor(id).element.parentElement.hidden).sort((a, b) => b[1] - a[1])[0];
    if (best && best[1] > 0 && best[0] !== activeId) renderPreview(groupFor(best[0]));
  }, { rootMargin: '-44px 0px -15% 0px', threshold: [0, .1, .3, .5, .7, 1] });
  for (const group of groups) observer.observe(group.element);
}
renderPreview(groups[0]);

