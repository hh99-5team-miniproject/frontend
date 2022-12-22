# 🐬Coding Vibe

코딩하면서 듣기 좋은 노래들을 상황에 따라 공유할 수 있는 커뮤니티 사이트



##  notion 링크

https://www.notion.so/Coding-Vibe-Mini-Project-ce76b6b3e4594016b5fe411a7a695b38



##  📆 개발기간

2022년 12월 16일 ~ 2022년 12월 22일



##  🛠️ 기술 스택

redux toolkit, styled component, react-router-dom, axios



##  👯 FE 팀원

- 최유정 : https://github.com/headwing
- 김세연 : https://github.com/saeyeonKim



##  👀 구현한 기능

- 유튜브 링크를 썸네일로 전환하여 화면 마운트 시 썸네일 노출
- 헤더와 좌측 메뉴바를 컴포넌트로 분리하여 불필요한 재렌더링 방지
- 좋아요 버튼 역시 컴포넌트로 분리하여 불필요한 재렌더링 방지
- 로그인한 경우 자신의 게시물 및 댓글 등록, 수정, 삭제 가능
- css 파일과 styled component 혼용, 조건에 따라 달라지는 경우 styled component 사용
- 배포시 "aws는 내부 또는 외부 명령 실행할 수 있는 프로그램 또는 배치 파일이 아닙니다."라는 에러의 경우 yarn upgrade 명령어 입력 후 배포 명령어 입력

### 경고창 뜨는 case
- 로그아웃한 경우 혹은 로그인을 안한 경우 게시물 및 댓글에 달린 수정, 삭제 버튼, 글 작성 버튼, 댓글 등록 버튼, 좋아요 클릭 시
- 타인의 게시물 수정 및 삭제 시도 시
- 타인의 댓글 수정 삭제 시도 시
- 게시물 작성 혹은 수정할 때 제목, 내용, 유튜브url, 카테고리 미입력 및 미선택 시 
- 게시물 작성 혹은 수정할 때 유튜브url이 아닌 잘못된 url 입력 시
- 로그인 혹은 회원가입의 경우 성공이면 성공 메세지alert, 실패면 서버에서 오는 에러 메세지alert(ex. 회원을 찾을 수 없습니다.)
