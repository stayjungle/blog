---
title: 스테이정글 개발팀에서<br> 함께 일할 동료를 찾습니다
summary: 테스트 주도 개발, 짝 프로그래밍을 하며 함께 성장할 수 있는 좋은 환경입니다.
layout: page
---
<script>
  import { onMount } from "svelte"
  import Swing from '$lib/components/Swing.svelte'
  import AlienAbduction from '$lib/components/AlienAbduction.svelte'
  import E from '$lib/components/Emoji.svelte'

  let serious = false
  let abductionFinished = false
  let body

  onMount(() => body = document.body)
  $: if(body) body.dataset.serious = serious
</script>

<form class="seriousness">
  <label>
    <input type="checkbox" name="seriousness" bind:checked={serious}>진지합니다
  </label>
</form>

<p class="웅성웅성 fun" style="text-align: center;">
  <Swing duration={0.3} content="👤" />
  <Swing duration={1.1} content="👥" />
  <Swing duration={0.5} content="👤" />
  <Swing duration={0.7} content="👤" />
  <Swing duration={1.1} content="👥" />
  <br />
  <Swing duration={0.5} content="👤 모야..." />
  <Swing duration={1.1} content="👥" />
  <Swing duration={0.7} content="👥 웅성웅성" />
  <Swing duration={0.3} content="👤 " />
  <br />
  <Swing duration={0.7} content="👥 뭐지?" />
  <Swing duration={1.1} content="👤" />
  <Swing duration={0.7} content="👥 스테이정글이 어디야?" />
  <Swing duration={0.3} content="👤 " />
  <br />
  <Swing duration={1.1} content="👥" />
  <Swing duration={0.3} content="👤 " />
  <Swing duration={0.7} content="👥 개발자?" />
  <Swing duration={1.3} content="👥 채용이래..." />
  <Swing duration={1.1} content="👥" />
  <br />
  <Swing duration={0.3} content="👤" />
  <Swing duration={1.1} content="👥" />
  <Swing duration={0.5} content="👤" />
  <Swing duration={0.7} content="👤" />
  <Swing duration={1.1} content="👥" />
</p>

<!--
<p class="fun">채용담당자:<br />하아... 지원자가 없어. 개발자들은 대체 어디에 있는걸까?</p>

<AlienAbduction on:finished={() => abductionFinished = true}/>

<p class="fun">
  채용담당자:<br />
  {
    !abductionFinished
      ? "아... 네카라쿠배에서 다 데려가고 있었어 😱"
      : "앗, 거기 당신! 스테이정글에 지원하시려고 마음을 먹었군요!"
  }
</p>
-->
## 스테이정글 소개

스테이정글은 식품 분야 <E>🧑🏻‍💼</E> 경영 전문가, <E>👩🏼‍🍳</E> 셰프, <E>👨🏻‍🔬</E> 영양학 전문가, <E>👩‍💻</E> IT 기술자가 모여 창발적 가치를 만들어내는 <E>🚀</E> 스타트업입니다.

음식, 식재료, 조리법, 영양성분, 건강 효과 등의 데이터를 수집/분석하고 고객의 식습관에 맞는
맞춤 식단 구독 서비스를 제공합니다. 이를 통해 단기적으로는 식생활 문제를 해결하고 장기적으로는
올바른 식습관 형성을 유도해 사람들이 건강한 삶을 살도록 돕고자 합니다.

## 개발팀 소개

스테이정글 개발팀은 이런 일을 합니다. <E>😎</E>

* 식약처 데이터베이스 등 다양한 데이터를 활용하여 고객에게 최적의 식단을 추천하는 알고리즘을
  개발합니다. NumPy, SciPy, pandas 등 다양한 데이터 처리 라이브러리를 활용하고, 유전자
  알고리즘이나 기계 학습 등을 적용하여 재미있고 도전적인 코드를 함께 만듭니다.
* 주방 운영 효율화를 위해 백오피스를 개발합니다. 잘 정의되지 않은 요구사항을 반영하며 빠르게
  적응하기 위해 구글 스프레드시트 등 기존의 도구를 최대한 활용하고 필요한 만큼의 코드만
  개발합니다.
* 고객 서비스용 챗봇을 개발합니다. 간단한 문자열 알고리즘이나 스테이트 머신부터 자연어
  처리까지, 다양한 기술을 활용하여 챗봇을 개발합니다.
* 고객 서비스용 웹사이트를 개발합니다. TypeScript와 SvelteKit을 활용하여 빠르고 동적인
  웹 사이트를 개발합니다.
* 마케팅 효율화를 위한 데이터 분석을 지원합니다. 구글 애널리틱스와 빅쿼리를 연동하여 데이터
  분석을 자동화하고, 작은 실험을 빠르게 자주 할 수 있는 환경을 만들어갑니다.

스테이정글 개발팀은 때론 필요한 코드만 최소한으로 만들기 위해 구글 스프레드시트를 사용하고,
때론 아직 국내 적용사례가 거의 없는 SvelteKit을 선도적으로 도입하기도 하는 등, 상황에 따라
적절한 기술적 의사결정을 합니다. 그 과정에서 다양한 경험을 하고 함께 성장할 수 있는 좋은
환경입니다. <E>🌱</E>

## 채용요건

<p><E>✅</E> 필수요건</p>

* 다양한 직군의 동료들과의 협업 능력, 뛰어난 의사소통 능력 및 문서 작성 능력
* 기술 문서를 읽기 위한 기본적인 영어 독해 능력
* Git 및 GitHub 기반 협업 경험
* Python 기반 웹 백엔드 개발 경험
* HTML5/CSS3 개발 경험. 시맨틱 마크업 및 웹 접근성에 대한 이해
* TypeScript 및 JavaScript 기반 웹 프론트엔드 개발 경험
* React, Vue, Svelte 중 1개 이상 라이브러리/프레임워크 사용 경험

<p><E>👍</E> 우대사항</p>

* 새로운 기술에 열려 있고 빠르게 습득할 수 있는 능력
* 애자일 방법론에 대한 이해
* 리팩토링, 테스트 주도 개발 경험
* 관계형 데이터베이스 설계 경험
* 데이터 분석 및 기계학습 관련 경험
* AWS 또는 GCP 사용 경험
* 맥과 리눅스 환경에 익숙하신 분

## 개발 프랙티스 및 문화

* 테스트 주도 개발을 합니다.
* 되도록 짝 프로그래밍을 합니다.
* 컨퍼런스 참여를 장려합니다.
* 사이드 프로젝트를 장려합니다.
* 모든 개발자가 풀스택을 지향합니다.
* 비개발직군도 모두 GitHub을 사용하여 협업합니다.

## 업무환경 및 복리후생

<ul>
  <li><E>💰</E> <strong>연봉</strong>: 최소 5,000만원
  <li><E>📍</E> <strong>사무실 위치</strong>: 양재동 <a href="http://naver.me/5vIu1YFA" target="_blank">NH디지털혁신캠퍼스</a>
  <li><E>🕒</E> <strong>출퇴근</strong>: 8시~11시 사이 자율 출근
  <li><E>🌴</E> <strong>휴가제도</strong>:
    <ul>
      <li>2년차부터 연차 21일 (1년차는 1개월 만근 당 1.5개)
      <li>자유로운 연차, 반차 사용
      <li>유급병가 5일
      <li>생일휴가
    </ul>
  <li><E>🎁</E> <strong>기타</strong>:
    <ul>
      <li>명절선물(추석, 설) 각 10만원
      <li>생일선물 10만원
    </ul>
</ul>

## 지원 방법

채용은 1) 사전과제, 2) 본과제, 3) 면접, 4) 연봉협상 순으로 진행됩니다.

다음 절차에 따라 지원해주시기 바랍니다.

1. **GitHub 계정 생성**: 본인의 GitHub 계정으로 `sj-application`이라는 이름의 비공개
   저장소를 생성하세요
2. **스테이정글 개발자 초대**: 해당 저장소에 다음 계정들을 "collaborators"로 초대하세요:
   `ak-stayjungle`, `alice-stayjungle`, `dahyun-stayjungle`
3. **사전과제 제시**: 영업일 기준 하루 이내에 스테이정글의 개발자가 해당 저장소에 새 이슈를
   생성하여 간단한 사전과제를 제시합니다.
4. **사전과제 제출**: 브랜치를 만들고 과제를 풀어주세요. 메인 브랜치로 PR을 보내면 제출한
   것으로 간주합니다. 제출 기한은 따로 없고 제출 시간에 따른 감점이나 가점은 없습니다. 다만
   지나치게 많은 시간을 쓰시지 않기를 바라는 마음에서 되도록 24시간 내 제출을 권장합니다.
5. **본과제 제시**: 사전과제 통과시 본과제가 제시됩니다.
6. **본과제 개발**: 원격으로 진행되는 실제 프로젝트라고 가정하고 약 일주일 동안 개발을
   진행해주세요. 사전과제와 마찬가지로 제출 기한은 따로 없고 제출 시간에 따른 감점이나 가점은
   없습니다. 하루 평균 1시간 이내로만 쓰시길 권장합니다.
7. **면접**
8. **연봉협상**

사전과제에 대한 부연:

* 백엔드는 Python, JavaScript, TypeScript 중 한 언어를 선택하여 풀어주세요.
* 프론트엔드는 JavaScript, TypeScript 중 한 언어를 선택하여 풀어주세요.
* 되도록 단위 테스트를 함께 작성해주세요.

본과제에 대한 부연:

* 채용 여부와 무관하게, 과제를 진행하는 과정 자체가 서로의 성장에 유익한 경험이 되길 바라며
  설계했습니다.
* 사전과제와 달리 본과제의 요구사항은 충분히 구체적이지 않을 수 있습니다. 코딩을 하기 전이나
  코딩을 하는 과정에서 궁금한 점이 있으시면 언제든 GitHub의 기능들을 적절히 활용하여 질문 및
  의사소통 해주세요. 언제 어떤 질문을 어떻게 하는지, 잘 정의되지 않은 문제를 어떻게
  구체화하는지 등도 중요한 역량이라고 생각합니다.
* 문제를 끝까지 완성하지 않아도 괜찮습니다. 결과만큼이나 과정 역시 중요하게 평가합니다.
* 과제 제출용 코드가 아니라 회사에서 실제로 사용할 목적의 코드라고 가정하고 작성해주세요. 오랜
  시간 동안 사용되며 앞으로 여러 동료들이 지속적으로 읽고 수정할 코드라고 가정해주세요.
* 완성된 코드 뿐 아니라 코드를 작성하는 과정도 중요합니다. 되도록 적절한 단위로 커밋을
  해주시기 바랍니다.
* Python 백엔드와 HTML/CSS/JavaScript/TypeScript 프론트엔드로 작성해주시기 바랍니다.
  프레임워크나 라이브러리에는 선택에는 제약이 없습니다.
* 제출하신 과제를 검토한 후 저희가 몇 가지 질문을 드릴 수 있습니다(왜 어떤 라이브러리를
  쓰셨는지 또는 왜 안쓰셨는지, 왜 특정한 설계를 하셨는지, 왜 어떤 질문을 하셨는지 혹은
  안하셨는지 등). 따라서 본과제를 수행하는 과정에서 내렸던 크고 작은 판단들을 근거와 함께
  기록해두시면 좋습니다.

<style>
  .웅성웅성 {
    margin-bottom: 2rem;
  }

  .seriousness {
    position: absolute;
    box-sizing: border-box;
    left: 1rem;
    top: 1rem;
    display: flex;
    gap: 1.5rem;
    margin: 0;
  }

  :global([data-serious="true"] .fun) {
    display: none;
  }
</style>
