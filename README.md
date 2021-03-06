# 이게모약
- 간편하고 쉽게, 내 손 안의 작은 알약 사전


## 1. 프로젝트 소개

**어떠한 데이터셋와 도구 및 기술을 사용했는지에 대한 설명과 엔드유저에게 보이는 웹서비스에 대한 소개**

  - 사용하려는 데이터(제안된 데이터 중 하나 또는 선택한 다른 데이터 세트)를 명시, 이에 대한 설명

  - 기술 스택: python, jupyter, javascript, postgreSQL

  - 사용된 라이브러리 (numpy, matplotlib, wordcloud 등)

  - 웹서비스에 대한 자세한 개요

## 2. 프로젝트 목표

**인공지능(자연어/이미지) 모델 사용 결과로 도출되는 인사이트와 웹서비스의 해결과제에 대한 논의 (50자 이상)**
  
병원 입원 과정에서 환자가 어떤 기저질환을 가지고 있고 어떤 약을 복용하고 있는지 조사하는 것은 매우 중요하다. 기저 질환과 자가 복용약에 따라 의사의 처방이 달라지 때문이다. 따라서 의료진들이 자가 복용약을 조사할 때는 놓치는 부분없이 세세히 조사해야한다.<br><br>
하지만 인구의 고령화에 따라 만성질환자의 수는 증가하고 있고 만성 질환자는 급성 질환자에 비해 복용하는 약의 가짓 수가 많다. 많은 종류의 약 복용과 장기화되는 복용 기간으로 복용약 관리에 부담을 느끼는 환자들이 증가하고 있다. 간호사로 1년간 근무했던 한 팀원은 복용약을 한통에 넣어 보관하는 환자의 약을 조사하느라 40분이 넘게 걸린 경험을 예시로 들었다. 이런 경우에는 모든 약들을 확인해봐야 하기 때문에 자가 복용약 검사 시간이 길어질 수 밖에 없다.또한 같은 성분의 약이더라도 다양한 제조사에서 제작을 하고 다른 경우가 많기 때문에 **자가 복용약 조사에 많은 시간이 들어가고 있는 현실**이다.<br><br>
우리 '머슴러닝'은 꼭 필요하지만 많은 시간이 들어가는 **자가 복용약 조사 시간을 줄이고 의료진들이 그만큼 환자들과의 접촉 시간을 늘릴 수 있다면 한국의 의료서비스의 질을 높일 수 있다**는 생각에서 이 프로젝트를 시작하게 되었다.<br><br>
나아가, 많은 복용약의 관리의 어려움을 느끼고 있는 만성질환자들의 부담감을 줄이고 코로나로 앞당겨진 **원격진료에서 환자가 의사와 자신이 복용하고 있는 약의 정보를 정확하게 소통해 비대면 진료의 편의성과 정확성을 높이고자 한다**.

## 3. 프로젝트 기능 설명

  ###  1. 메인기능
  #### 메인1. 약 검색
    1. 이미지로 약 검색하기
       - 유저에게 어떤 사진을 올려야하는지 가이드라인을 제시한다.
       - 유저가 사진을 올리면 인공지능 모델을 통해 검색한다.
       - 검색된 약에 관한 정보를 유저에게 제공한다.
       - 유저에게 제공되는 정보는 모두 동일 (약 종류, 성분, 함량, BIT 분류, 용법, 용량 , 효능, 효과, 부작용) 
    2. 약 이름으로 검색하기
       - 검색된 약에 관한 정보를 유저에게 제공한다.
    3. 모양, 색상별로 약 검색하기
       - 검색된 약에 관한 정보를 유저에게 제공한다.
  #### 메인2. 로그인
    1. 카카오톡 auth 기능
  #### 메인3. 내 알약 상자(로그인 시 이용 가능)
    1. 최근 검색한 알약 리스트
       - 로그인 후 알약을 검색할 시 최근 검색한 알약 기록이 남는다.
    2. 알약 즐겨찾기
       - 내 알약 상자에 담을 알약들을 즐겨찾기 기능으로 추가할 수 있다.
    3. 즐겨찾기 해놓은 알약 한장의 사진으로 정리해주기
       - 병원에 갈 일이 있을 경우, 즐겨찾기 해뒀던 알약들을 한 장의 이미지로 리스트업해서 정리해준다.

  ###  2. 서브기능
  #### 서브1. 검색 알약 랭킹
    - 다른 유저들은 어떤 알약을 많이 검색했는지 알려준다.
  #### 서브2. 폐의약품 수거 콘텐츠
    - 기간이 지나거나 복용할 수 없게 된 약들의 처리 방법을 알려준다.
    - 페이지를 나누어 콘텐츠로 제작 예정
  #### 서브3. 일반 의약품 정보
    - 의사의 복용없이도 구매가 가능한 일반 의약품들의 정보를 알려준다.
  
  ###  3. 서비스 이용 시 기대효과
  1. 의료진들의 자가 복용약 검색 시간 단축
  2. 병원 방문이 잦은 사람들에게 약 정보 관리의 편리함 제공
  3. 폐의약품 수거 방법을 모르는 일반인들에게 정보 제공
  4. 일반 의약품에 대한 정보 제공 및 오남용 사례 제공으로 경각심 제공

## 4. 프로젝트 구성도
  
  - 와이어프레임 : https://whimsical.com/MscfTZm3e8potKm2VCW6mE
  
  - 스토리보드 추가 : https://docs.google.com/presentation/d/1B5KuEGC8jShuV6noWppPJ2DjDeJ1ffua8vgU5LeQ30c/edit#slide=id.p

## 5. 프로젝트 팀원 역할 분담

| 이름 | 담당 업무 |
| ------ | ------ |
| Kaky(강경모) | 프론트엔드 개발 |
| Sgaeng(강석영) | 백엔드 개발 / 인공지능 |
| Cozy(김민지) | 백엔드 개발 / 인공지능 |
| Nick(김태호) | 팀장 / 프론트엔드 개발 |
| Mojito(김효곤) | 백엔드 개발 / 프론트엔드 개발 |
| June(민경준) | 백엔드 개발 / 인공지능 |


**멤버별 responsibility**

1. 프론트엔드 담당 (강경모, 김태호, 김효곤)

- 기획 단계: 구체적인 설계와 지표에 따른 프로젝트 제안서 작성
- 개발 단계: 팀원간의 일정 등 조율 + 프론트 or 백엔드 개발
- 수정 단계: 기획, 스크럼 진행, 코치님 피드백 반영해서 수정, 발표 준비

2. 백엔드 담당 (강석영, 김민지, 김효곤, 민경준)

- 기획 단계: 큰 주제에서 문제 해결 아이디어 도출, 데이터 수집, 와이어프레임 작성
- 개발 단계: 와이어프레임을 기반으로 구현, 데이터 처리 및 시각화 담당, UI 디자인 완성
- 수정 단계: 피드백 반영해서 프론트 디자인 수정

 3. 인공지능 담당 (강석영, 김민지, 민경준)

- 기획 단계: 기획 데이터 분석을 통해 해결하고자 하는 문제를 정의
- 개발 단계: 웹 서버 사용자가 직접 백엔드에 저장할수 있는 기능 구현, 데이터 베이스 구축 및 API 활용, 데이터 분석 개념 총동원하기
- 수정 단계: 코치님 피드백 반영해서 분석/ 시각화 방식 수정

## 6. 버전
  - v1.0.0

## 7. FAQ
  - 자주 받는 질문 정리
