import * as React from "react"
import Layout from "../components/Layout"
import UpwardsContainer from "../components/motions/UpwardsContainer"
import useSiteMetadata from "../hooks/useSiteMetadata"

const AboutSection = ({ heading, children }) => {
  return (
    <UpwardsContainer className="about-section pt-16">
      {heading && (
        <h2 className="pt-8 text-4xl font-bold border-t-default">{heading}</h2>
      )}
      <div className="grid grid-cols-1 tablet:grid-cols-2 gap-16 mt-16">
        {children}
      </div>
    </UpwardsContainer>
  )
}

const About = ({ data, location }) => {
  const currentPage = ["About", "Blog"].find(element =>
    location.pathname.includes(element.toLowerCase(), 1)
  )

  const { defaultTitle } = useSiteMetadata()

  return (
    <Layout location={location} title={defaultTitle} seoTitle={currentPage}>
      <div className="grid justify-center items-center gap-3 m-auto pt-12 pb-24">
        <h1 className="m-0 text-7xl tablet:text-8xl laptop:text-9xl font-bold text-center dark:text-citric">
          {currentPage}
        </h1>
      </div>
      <UpwardsContainer>
        <h2 className="text-3xl">
          안녕하세요, 사용자에게 좋은 경험을 주는 웹을 만드는 프론트엔드 개발자
          이조은입니다. <b>좋은 UI/UX와 웹 성능</b>에 높은 가치를 두고, 공급자가
          아닌 <b>소비자 관점</b>에서 생각하는 태도를 가지고 웹을 구현합니다.
          다양한 직군의 동료와 같은 목표를 위해 <b>함께 일하며 성장하기</b>를
          꿈꿉니다. ESFP 유형에 속하며, 밝고 긍정적인 성격을 가지고 있습니다.
          요가, 등산, 요리 등의 취미로 스트레스를 해소합니다.
        </h2>
      </UpwardsContainer>
      <div className="grid grid-cols-1 gap-y-16 tablet:flex-row">
        <AboutSection heading="CONTACT">
          <div className="basis-1/4">
            <a
              href="https://github.com/joyfuljoeunlee"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
          <div className="basis-1/4">
            <a
              href="https://joyfuljoeunlee.dev/blog"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog
            </a>
          </div>
          <div className="basis-1/4">
            <a
              href="mailto:joyfuljoeunlee@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
            </a>
          </div>
        </AboutSection>

        <AboutSection heading="WORK EXPERIENCE">
          <div className="basis-1/2">
            <h3 className="text-2xl font-bold">레이지 소사이어티</h3>
            <div className="mt-2">
              <span className="block">프론트엔드 개발자</span>
              <span className="block">Feb 2021 - Oct 2021</span>
            </div>
          </div>
          <div className="basis-1/2">
            <div>
              <span className="block mb-2 text-xl font-bold">Description</span>
              <p>
                면도 용품 맞춤 구독 서비스를 제공하는&nbsp;
                <a
                  href="https://lazysociety.co.kr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  레이지 소사이어티
                </a>
                의 IT 서비스 팀에 속해 프론트엔드 개발을 담당했습니다.
                <br />
                회사 내부 운영상의 문제로 중도에 그만두게 되었습니다.
              </p>
            </div>
            <div className="mt-2">
              <span className="block mb-2 text-xl font-bold">
                What did I do
              </span>
              <ul>
                <li>
                  신규 기능 개발 (면도날 교체 주기 알림, 어드민에서 구독 항목
                  조회 및 변경, 브라우저 호환성 배너, 기프트 코드)
                </li>
                <li>기존 코드 유지 보수</li>
                <li>UI/UX 개선 (홈, 제품 상세, 구독, 결제 화면)</li>
                <li>웹사이트 성능 개선</li>
                <li>클라이언트 에러 대응 (런타임 에러, 웹 호환성 이슈)</li>
                <li>SWR 도입하여 클라이언트 상태 관리 개선</li>
                <li>프론트엔드 코드 컨벤션 정리</li>
                <li>Google Tag Manager 관리</li>
                <li>Google Merchant Center 관리</li>
              </ul>
            </div>
            <div className="mt-2">
              <span className="block mb-2 text-xl font-bold">Tech Stack</span>
              <p>
                Next.js, React, SWR, Redux, Styled Components, Vercel,
                WordPress, AWS
              </p>
            </div>
          </div>
        </AboutSection>

        <AboutSection heading="PROJECTS">
          <div className="basis-1/2">
            <h3 className="text-2xl font-bold">개인 블로그</h3>
            <div className="mt-2">
              <span className="block">Jan 2022 - Present</span>
            </div>
          </div>
          <div className="basis-1/2">
            <div>
              <span className="block mb-2 text-xl font-bold">Description</span>
              <p>
                <a
                  href="https://framer.com/projects/Blog--7RdcUSh2HdxYt96sBzDs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Framer로 간단하게 구현한 UI/UX 프로토타입
                </a>
                을 포함해 거의 모든 기능(다크 테마, 태그 필터 등)을 직접
                구현했습니다. 개인 프로젝트이지만 추후 변경 이력 추적을 위하여
                직관적인 커밋 히스토리를 유지하려고 노력합니다. 지속해서
                개선하고 있습니다.
              </p>
            </div>
            <div className="mt-2">
              <span className="block mb-2 text-xl font-bold">Tech Stack</span>
              <p>
                Gatsby, React, GraphQL, Tailwind CSS, Framer Motion, Netlify,
                Ghost, Framer
              </p>
            </div>
            <div className="mt-2">
              <span className="block mb-2 text-xl font-bold">Articles</span>
              <ul>
                <li>
                  <a
                    href="https://joyfuljoeunlee.dev/blog/ghost-gatsby-netlify-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ghost + Gatsby + Netlify 블로그 만들기 (1)
                  </a>
                </li>
                <li>
                  <a
                    href="https://joyfuljoeunlee.dev/blog/ghost-gatsby-netlify-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ghost + Gatsby + Netlify 블로그 만들기 (2)
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="basis-1/2">
            <h3 className="text-2xl font-bold">웹사이트 성능 개선</h3>
            <div className="mt-2">
              <span className="block">Sep 2021</span>
            </div>
          </div>
          <div className="basis-1/2">
            <div>
              <span className="block mb-2 text-xl font-bold">Description</span>
              <p>
                약 3주 동안 회사 웹사이트 성능 개선 프로젝트를 단독으로
                진행했습니다. LCP 20% 감소 및 TTI 10% 감소의 성과를
                만들었습니다.
              </p>
            </div>
            <div className="mt-2">
              <span className="block mb-2 text-xl font-bold">Articles</span>
              <ul>
                <li>
                  <a
                    href="https://joyfuljoeunlee.dev/blog/web-performance-optimization-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    웹 성능 측정과 최적화 (1)
                  </a>
                </li>
                <li>
                  <a
                    href="https://joyfuljoeunlee.dev/blog/web-performance-optimization-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    웹 성능 측정과 최적화 (2)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </AboutSection>

        <AboutSection heading="SKILLS">
          <div className="basis-1/2">
            <h3 className="text-2xl font-bold">Frontend</h3>
          </div>
          <div className="basis-1/2">
            <ul>
              <li>
                주로 React를 사용하여 웹을 만듭니다. Hook 사용에 익숙하고,
                반복되는 로직을 적절히 모듈화하여 사용할 수 있습니다.
              </li>
              <li>
                JavaScript 엔진의 동작 원리를 이해하고, 최신 JavaScript 문법에
                익숙합니다.
              </li>
              <li>
                SPA, SSG, SSR의 차이점을 이해하고 적절히 사용할 수 있습니다.
              </li>
              <li>
                웹 성능을 최적화할 수 있는 다양한 방법을 활용할 수 있습니다.
              </li>
              <li>
                웹 접근성을 위해 시맨틱 마크업을 준수합니다. 또한 웹 호환성을
                습관적으로 확인합니다.
              </li>
            </ul>
          </div>
          <div className="basis-1/2">
            <h3 className="text-2xl font-bold">UI/UX</h3>
          </div>
          <div className="basis-1/2">
            <ul>
              <li>
                Framer 등의 디자인 도구로 간단한 프로토타입을 만들 수 있습니다.
              </li>
            </ul>
          </div>
          <div className="basis-1/2">
            <h3 className="text-2xl font-bold">Data</h3>
          </div>
          <div className="basis-1/2">
            <ul>
              <li>
                SQL을 이용하여 데이터를 조회하고, Redash를 통해 데이터 시각화를
                할 수 있습니다.
              </li>
              <li>
                구글 태그 매니저를 활용하여 상황에 알맞은 이벤트를 태깅할 수
                있습니다.
              </li>
            </ul>
          </div>
          <div className="basis-1/2">
            <h3 className="text-2xl font-bold">Collaboration</h3>
          </div>
          <div className="basis-1/2">
            <ul>
              <li>
                Git을 활용한 워크 플로우에 익숙하며, 직관적인 커밋 히스토리를
                작성합니다.
              </li>
              <li>
                능숙하지 않은 분야가 있을지라도 업무에 필요하다면 적극적으로
                탐색하여 활용합니다.
              </li>
            </ul>
          </div>
        </AboutSection>

        <AboutSection heading="EDUCATION">
          <div className="basis-1/2">
            <h3 className="text-2xl font-bold">위코드</h3>
            <div className="mt-2">
              <span className="block">프론트엔드 개발자 과정 11기</span>
              <span className="block">Jul 2020 - Oct 2020</span>
            </div>
          </div>
          <div className="basis-1/2">
            <p>
              이 교육 과정을 통해 2주 동안 진행되는 클론 프로젝트 2개, 4주 동안
              진행되는 인턴십을 경험했습니다.
            </p>
          </div>
          <div className="basis-1/2">
            <h3 className="text-2xl font-bold">전남대학교</h3>
            <div className="mt-2">
              <span className="block">경영학 학사</span>
              <span className="block">Mar 2014 - Feb 2019</span>
            </div>
          </div>
          <div className="basis-1/2">
            <p>
              회계, 재무, 인사, 생산, 마케팅 등 기업 경영에 대한 전반적인 내용을
              중심으로 학과 수업을 이수했습니다.
            </p>
          </div>
        </AboutSection>

        <AboutSection heading="Awards">
          <div className="basis-1/2">
            <h3 className="text-2xl font-bold">
              2017 월드프렌즈 ICT 봉사단 성과 보고대회 우수 활동팀, 최우수상
            </h3>
            <div className="mt-2">
              <span className="block">
                과학기술정보통신부, NIA(한국정보화진흥원), KIV(월드프렌즈 ICT
                봉사단)
              </span>
              <span className="block">Jul 2017 - Aug 2017</span>
            </div>
          </div>
          <div className="basis-1/2">
            <p>
              저를 포함한 4명이 한 팀을 이루어 말레이시아에서 약 2달 동안 IT
              봉사활동을 했습니다. 파견된 지역에 필요한 안드로이드 앱을 직접
              기획, 개발, 배포할 수 있었습니다.
            </p>
          </div>
        </AboutSection>
      </div>
    </Layout>
  )
}

export default About
