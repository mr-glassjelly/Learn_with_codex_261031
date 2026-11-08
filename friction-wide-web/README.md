# Friction 와이드 디자인 목업

friction-mobile-web의 최신 화면과 편지 보기/읽기 동작을 바탕으로 만든 가로형 버전입니다.

- 전체 화면 폭에 세 개의 편지 행을 표시합니다.
- 각 행의 모든 카드를 가로로 펼치며, 좁은 화면에서는 가로로 스크롤합니다.
- 카드를 누르면 표지를 확인하고 편지 본문을 읽을 수 있습니다.
- 기록함은 목업 작성일(10월 15일, 9월 11일, 8월 24일)별로 최신순 표시합니다.
- 검색과 MY는 디자인 목업 상태입니다.

별도 빌드 없이 `dist/index.html`을 열거나 다음 명령으로 실행합니다.

```sh
python3 -m http.server 4174 --directory dist
```

와이드 전용 사이트: https://friction-wide-web-261108.afloatrhino4.chatgpt.site/

링크로 로그인 없이 접근할 수 있으며, 검색 제외용 noindex 메타 태그를 사용합니다.
