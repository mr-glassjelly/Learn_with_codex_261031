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
        "ink": "#705e4b",
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
        "ink": "#82553e",
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
        "ink": "#705e4b",
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
const $ = (selector) => document.querySelector(selector);
const dialog = $('.letter-dialog');
const cardTemplate = $('.letter-card').cloneNode(true);
const groups = GROUPS.map((group) => ({ ...group, page: 'home', letters: group.letters.map(normalizeLetter), index: 0, element: document.querySelector('[data-group="' + group.id + '"]') }));
let activeId = groups[0].id, readingId = null, opener = null, readerMode = 'preview', currentPage = 'home';
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
// Written-letter fixtures; each dated stack uses the same cover and reader.
const recordDates = ['2026-10-15', '2026-10-15', '2026-09-11', '2026-09-11', '2026-09-03', '2026-09-03'];
const recordSamples = [...GROUPS[0].letters, ...GROUPS[1].letters.slice(0, 2)].map((letter, n) => normalizeLetter({ ...letter, id: 'record-' + letter.id, author: '주개연', signature: recordDates[n].replace(/-/g, '.') + ',\n주개연 드림', createdAt: recordDates[n] }));
let recordsFingerprint = '';
function readSavedRecords() {
  const saved = [];
  try {
    const entries = JSON.parse(localStorage.getItem('friction-mobile-web-letters') || '[]');
    if (Array.isArray(entries)) for (const item of entries) {
      if (!item || !['id', 'body', 'author'].every(key => typeof item[key] === 'string')) continue;
      const time = Number(item.id.replace('own-', ''));
      const createdAt = typeof item.createdAt === 'string' ? item.createdAt.slice(0, 10) : Number.isFinite(time) && time > 0 ? new Date(time).toLocaleDateString('sv-SE') : '';
      if (/^\d{4}-\d{2}-\d{2}$/.test(createdAt)) saved.push(normalizeLetter({ ...item, createdAt }));
    }
    const study = JSON.parse(localStorage.getItem('friction-study-v2') || 'null');
    if (Array.isArray(study?.entries)) for (const item of study.entries) {
      if (typeof item.text !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(item.date || '')) continue;
      saved.push(normalizeLetter({ id: 'study-' + item.id, createdAt: item.date, title: item.title || '', recipient: '', author: '주개연', signature: '주개연 드림', body: item.text, collection: '나의 서재', paper: '#f1e5e5', ink: '#903540' }));
    }
  } catch { /* Sample dates remain usable when browser storage is unavailable. */ }
  return saved;
}
function refreshRecords() {
  const entries = [...readSavedRecords(), ...recordSamples];
  const fingerprint = JSON.stringify(entries);
  if (fingerprint === recordsFingerprint) return;
  recordsFingerprint = fingerprint;
  for (let n = groups.length - 1; n >= 0; n--) if (groups[n].page === 'records') {
    if (sectionObserver) sectionObserver.unobserve(groups[n].element);
    groups[n].element.remove(); groups.splice(n, 1);
  }
  const dates = new Map();
  for (const letter of entries) {
    if (!dates.has(letter.createdAt)) dates.set(letter.createdAt, []);
    dates.get(letter.createdAt).push(letter);
  }
  const prototype = $('.letter-section');
  for (const date of [...dates.keys()].sort().reverse()) {
    const element = prototype.cloneNode(true);
    const id = 'record-' + date, parts = date.split('-');
    const title = Number(parts[1]) + '월 ' + Number(parts[2]) + '일';
    element.id = id; element.dataset.group = id;
    element.setAttribute('aria-labelledby', 'heading-' + id);
    const heading = element.querySelector('.section-heading h2');
    heading.id = 'heading-' + id; heading.textContent = title;
    $('#recordsPage').append(element);
    const group = { id, title, createdAt: date, page: 'records', letters: dates.get(date), index: 0, element };
    groups.push(group); bindGroup(group);
    if (sectionObserver) sectionObserver.observe(element);
  }
}
function showPage(page) {
  if (!['home', 'records', 'my'].includes(page)) return;
  if (dialog.open) closeLetter();
  if (page === 'records') refreshRecords();
  currentPage = page;
  for (const key of ['home', 'records', 'my']) {
    $('#' + key + 'Page').hidden = key !== page;
    const tab = $('[data-page="' + key + '"]');
    tab.classList.toggle('active', key === page);
    if (key === page) tab.setAttribute('aria-current', 'page'); else tab.removeAttribute('aria-current');
  }
  $('.letter-preview').hidden = page === 'my';
  if (page === 'my') {
    const frame = $('#studyFrame');
    if (!frame.getAttribute('src')) frame.setAttribute('src', 'study.html?v=12');
  } else {
    const group = groups.find(g => g.page === page);
    if (group) renderPreview(group);
  }
  window.scrollTo({ top: 0, behavior: 'instant' });
  scheduleHeader();
}
let sectionObserver = null;

function groupFor(id) { return groups.find((group) => group.id === id); }
function cardPositions(count) { return Array.from({ length: Math.min(4, count) }, (_, position) => position); }
function renderGroup(group) {
  const deck = group.element.querySelector('.card-deck');
  for (const ghost of deck.querySelectorAll('[data-ghost]')) ghost.remove();
  const existing = [...deck.children], used = new Set(), cards = new Map();
  const positions = cardPositions(group.letters.length);
  // Every resting cover sits at the center or to its right.
  const priority = [0, 1, 2, 3];
  for (const position of priority.filter(slot => positions.includes(slot))) {
    const letter = group.letters[(group.index + position + group.letters.length) % group.letters.length];
    const candidates = existing.filter(card => card.dataset.id === letter.id && !used.has(card));
    const preferred = position === 0 ? (group.lastDirection || 0) : position;
    const card = candidates.find(card => Number(card.dataset.position) === preferred) || candidates[0] || cardTemplate.cloneNode(true);
    used.add(card); cards.set(position, card);
    card.dataset.id = letter.id; card.dataset.position = String(position);
    card.className = 'letter-card ' + (position === 0 ? 'front-card' : 'back-card side-card') + (letter.title ? ' has-title' : '');
    card.style.setProperty('--offset', (position * 26) + 'px');
    card.style.setProperty('--scale', String(1 - Math.abs(position) * .05));
    card.style.setProperty('--layer', String(4 - Math.abs(position)));
    card.style.backgroundColor = letter.paper; card.style.color = letter.ink;
    card.tabIndex = Math.abs(position) <= 1 ? 0 : -1;
    card.setAttribute('aria-hidden', String(Math.abs(position) > 1));
    const action = position < 0 ? '이전 편지로 이동' : position > 0 ? '다음 편지로 이동' : '편지 읽기';
    card.setAttribute('aria-label', action + ' · ' + displayText(letterLabel(letter)));
    card.querySelector('.card-recipient').textContent = displayText(letter.recipient);
    card.querySelector('h3').textContent = displayText(letter.title);
    card.querySelector('h3').hidden = !letter.title;
    card.querySelector('.card-byline strong').textContent = displayText(letter.author) + ' 드림';
    card.querySelector('.card-byline span').textContent = displayText(letter.collection);
    card.querySelector('.card-byline span').hidden = !letter.collection;
  }
  for (const position of [...positions].sort((a, b) => Math.abs(b) - Math.abs(a) || a - b)) deck.append(cards.get(position));
  for (const card of existing) if (!used.has(card)) card.remove();
  deck.setAttribute('role', 'group');
  deck.setAttribute('aria-roledescription', '캐러셀');
  deck.setAttribute('aria-label', group.title + ' · 좌우로 넘기는 편지');
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
function stackTransform(position) { return 'translateX(' + (position * 26) + 'px) scale(' + (1 - position * .05) + ')'; }
function clearDeckDrag(deck) {
  deck.style.setProperty('--drag', '0px');
  deck.style.setProperty('--swipe-progress', '0');
  deck.style.setProperty('--front-opacity', '1');
}
function commitMove(group, direction) {
  group.lastDirection = direction;
  group.index = (group.index + direction + group.letters.length) % group.letters.length;
  renderGroup(group); renderPreview(group);
  const current = group.letters[group.index];
  $('[role="status"]').textContent = group.title + ', ' + (group.index + 1) + '번째 편지, ' + displayText(letterLabel(current));
  if (dialog.open && readingId === group.id) renderReading(group);
}
function move(id, direction) {
  const group = groupFor(id);
  if (!group || group.animating || group.letters.length < 2) return;
  const deck = group.element.querySelector('.card-deck');
  const front = deck.querySelector('.front-card');
  const next = deck.querySelector('[data-position="1"]');
  const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
  if (reduced || !front || typeof front.animate !== 'function' || dialog.open) {
    clearDeckDrag(deck); commitMove(group, direction); return;
  }
  const computed = (card, position) => window.getComputedStyle ? window.getComputedStyle(card) : { transform: stackTransform(position), opacity: '1' };
  const frontStyle = computed(front, 0), nextStyle = next ? computed(next, 1) : null;
  // Save the live drag pose before advancing the data. The departing cover is
  // a transient visual only; resting stacks never contain a card on the left.
  const from = { transform: frontStyle.transform, opacity: Number(frontStyle.opacity) };
  const incomingFrom = direction > 0 && nextStyle ? { transform: nextStyle.transform, opacity: Number(nextStyle.opacity) } : null;
  const outgoing = front.cloneNode(true);
  outgoing.dataset.ghost = 'true'; outgoing.classList.add('exit-ghost');
  outgoing.tabIndex = -1; outgoing.setAttribute('aria-hidden', 'true');
  const hadFocus = deck.contains?.(document.activeElement);
  group.animating = true;
  clearDeckDrag(deck); commitMove(group, direction);
  const incoming = deck.querySelector('.front-card');
  deck.append(outgoing);
  const distance = Math.min(360, deck.getBoundingClientRect().width * 1.05);
  const timing = { duration: 420, easing: 'cubic-bezier(.22,.7,.2,1)', fill: 'forwards' };
  const exiting = outgoing.animate([from, { transform: 'translateX(' + (direction > 0 ? -distance : distance) + 'px) scale(.97)', opacity: 0 }], timing);
  const entering = incoming.animate([incomingFrom || { transform: 'translateX(' + (-distance * .55) + 'px) scale(.97)', opacity: 0 }, { transform: stackTransform(0), opacity: 1 }], timing);
  let finished = false;
  const finish = () => {
    if (finished) return; finished = true;
    outgoing.remove(); exiting.cancel(); entering.cancel(); group.animating = false;
    if (hadFocus && group.page === currentPage) incoming.focus({ preventScroll: true });
  };
  Promise.allSettled([exiting.finished, entering.finished]).then(finish);
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
function swipeDirection(dx, dy, width) {
  const threshold = Math.max(32, Math.min(60, width * .16));
  return Math.abs(dx) >= threshold && Math.abs(dx) > Math.abs(dy) * 1.2 ? (dx < 0 ? 1 : -1) : 0;
}
function bindGroup(group) {
  renderGroup(group);
  const deck = group.element.querySelector('.card-deck');
  let gesture = null, suppressClickUntil = 0;
  function resetGesture(resetStyles = true) {
    deck.classList.remove('is-dragging'); if (resetStyles) clearDeckDrag(deck); gesture = null;
  }
  deck.addEventListener('pointerdown', (event) => {
    if (group.animating || event.isPrimary === false || (event.pointerType === 'mouse' && event.button !== 0)) return;
    gesture = { id: event.pointerId, x: event.clientX, y: event.clientY, mode: null };
  });
  deck.addEventListener('pointermove', (event) => {
    if (!gesture || gesture.id !== event.pointerId) return;
    const dx = event.clientX - gesture.x, dy = event.clientY - gesture.y;
    if (!gesture.mode && Math.max(Math.abs(dx), Math.abs(dy)) > 10) {
      if (Math.abs(dx) > Math.abs(dy) * 1.2) {
        gesture.mode = 'horizontal'; deck.classList.add('is-dragging');
        deck.setPointerCapture?.(event.pointerId);
      } else if (Math.abs(dy) > Math.abs(dx) * 1.2) gesture.mode = 'vertical';
    }
    if (gesture.mode === 'horizontal') {
      event.preventDefault();
      const width = deck.getBoundingClientRect().width;
      const progress = Math.min(1, Math.max(0, -dx / (width * .7)));
      deck.style.setProperty('--drag', Math.max(-width * .85, Math.min(width * .85, dx * .8)) + 'px');
      deck.style.setProperty('--swipe-progress', String(progress));
      deck.style.setProperty('--front-opacity', String(1 - Math.min(.8, Math.abs(dx) / width * .8)));
    }
  });
  deck.addEventListener('pointerup', (event) => {
    if (!gesture || gesture.id !== event.pointerId) return;
    const dx = event.clientX - gesture.x, dy = event.clientY - gesture.y;
    const direction = gesture.mode !== 'vertical' ? swipeDirection(dx, dy, deck.getBoundingClientRect().width) : 0;
    if (Math.max(Math.abs(dx), Math.abs(dy)) > 10) suppressClickUntil = Date.now() + 400;
    if (direction && group.letters.length > 1) { resetGesture(false); move(group.id, direction); }
    else resetGesture();
  });
  deck.addEventListener('pointercancel', () => { suppressClickUntil = Date.now() + 400; resetGesture(); });
  group.element.addEventListener('click', (event) => {
    if (group.animating || Date.now() < suppressClickUntil) return;
    const card = event.target.closest('.letter-card');
    if (card) {
      const position = Number(card.dataset.position);
      if (position === 0) openLetter(group); else move(group.id, position > 0 ? 1 : -1);
      return;
    }
    if (event.target.closest('.stack-stage') && group.letters.length > 1) {
      const box = deck.getBoundingClientRect();
      if (event.clientX < box.left) move(group.id, -1);
      else if (event.clientX > box.right) move(group.id, 1);
    }
  });
  group.element.addEventListener('keydown', (event) => {
    if (['ArrowLeft', 'ArrowRight'].includes(event.key)) { event.preventDefault(); move(group.id, event.key === 'ArrowRight' ? 1 : -1); }
  });
}
for (const group of groups) bindGroup(group);
refreshRecords();
for (const button of document.querySelectorAll('[data-page]')) button.addEventListener('click', () => showPage(button.dataset.page));
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
  sectionObserver = new IntersectionObserver((entries) => {
    for (const entry of entries) ratios.set(entry.target.dataset.group, entry.isIntersecting ? entry.intersectionRatio : 0);
    if (dialog.open || currentPage === 'my') return;
    const best = [...ratios].filter(([id]) => groupFor(id)?.page === currentPage).sort((a, b) => b[1] - a[1])[0];
    if (best && best[1] > 0 && best[0] !== activeId) renderPreview(groupFor(best[0]));
  }, { rootMargin: '-44px 0px -15% 0px', threshold: [0, .1, .3, .5, .7, 1] });
  for (const group of groups) sectionObserver.observe(group.element);
}
renderPreview(groups[0]);

// Keep header geometry fixed while scrolling, so the feed never jumps in height.
const siteHeader = $('.site-header');
const brandRow = $('.brand-row');
const searchRow = $('.search-row');
const menuSearch = $('.menu-search');
let headerFrame = 0;
function updateHeader() {
  headerFrame = 0;
  const distance = brandRow.offsetHeight + searchRow.offsetHeight;
  const y = Math.max(0, window.scrollY || 0);
  const progress = distance > 0 ? Math.min(1, Math.max(0, (y / distance - .45) / .55)) : 0;
  const ready = progress >= .5;
  siteHeader.style.setProperty('--compact-progress', progress.toFixed(3));
  siteHeader.classList.toggle('is-compact-ready', ready);
  siteHeader.classList.toggle('is-collapsed', distance > 0 && y >= distance);
  menuSearch.tabIndex = ready ? 0 : -1;
  menuSearch.setAttribute('aria-hidden', String(!ready));
}
function scheduleHeader() { if (!headerFrame) headerFrame = requestAnimationFrame(updateHeader); }
window.addEventListener('scroll', scheduleHeader, { passive: true });
window.addEventListener('resize', scheduleHeader, { passive: true });
window.addEventListener('pageshow', scheduleHeader);
menuSearch.addEventListener('click', () => { window.scrollTo({ top: 0 }); });
updateHeader();
