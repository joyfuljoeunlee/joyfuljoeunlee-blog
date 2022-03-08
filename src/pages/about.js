import { motion } from "framer-motion"
import * as React from "react"
import Layout from "../components/Layout"
import { useSiteMetadata } from "../hooks/useSiteMetadata"

const AboutSection = ({ heading, children }) => {
  return (
    <motion.div
      className="border-t-default pt-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {heading && <h2 className="text-2xl font-bold">{heading}</h2>}
      <div className="grid grid-cols-1 tablet:grid-cols-2 gap-8 mt-8">
        {children}
      </div>
    </motion.div>
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
      <h2 className="mb-8 text-2xl">
        안녕하세요, 사용자에게 좋은 경험을 주는 웹을 만드는 프론트엔드 개발자
        이조은입니다.
      </h2>
      <div className="grid grid-cols-1 gap-y-16 tablet:flex-row">
        <AboutSection heading="CONTACT">
          <div className="basis-1/4">
            <a
              href="mailto:joyfuljoeunlee@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
            </a>
          </div>
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
        </AboutSection>

        <AboutSection heading="WORK EXPERIENCE">
          <div className="basis-1/2">
            <h3 className="text-xl">레이지 소사이어티</h3>
            <div className="mt-2">
              <span className="block">프론트엔드 개발자</span>
              <span className="block">Feb 2021 - Oct 2021</span>
            </div>
          </div>
          <div className="basis-1/2">
            <div>
              <span className="font-bold">Description</span>
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
              <span className="font-bold">What did I do</span>
              <ul className="list-disc">
                <li className="list-inside">
                  신규 기능 개발 및 기존 코드 유지보수
                </li>
                <li className="list-inside">UI 컴포넌트 개발</li>
                <li className="list-inside">웹사이트 성능 개선</li>
                <li className="list-inside">상태 관리 개선</li>
                <li className="list-inside">프론트엔드 코드 컨벤션 개선</li>
                <li className="list-inside">오류 대응</li>
                <li className="list-inside">GTM 이벤트 태깅</li>
              </ul>
            </div>
            <div className="mt-2">
              <span className="font-bold">Tech Stack</span>
              <p>Next.js, SWR, Redux, styled-components</p>
            </div>
          </div>
        </AboutSection>

        <AboutSection heading="PROJECTS">
          <div className="basis-1/2">
            <h3 className="text-xl">개인 블로그</h3>
            <div className="mt-2">
              <span className="block">Jan 2022 - Present</span>
            </div>
          </div>
          <div className="basis-1/2">
            <div>
              <span className="font-bold">Description</span>
              <p>블로그를 직접 만들었습니다. 지속적으로 개선하고 있습니다.</p>
            </div>
            <div className="mt-2">
              <span className="font-bold">Tech Stack</span>
              <p>Gatsby, Tailwind CSS</p>
            </div>
          </div>
          <div className="basis-1/2">
            <h3 className="text-xl">웹사이트 성능 개선</h3>
            <div className="mt-2">
              <span className="block">Sep 2021</span>
            </div>
          </div>
          <div className="basis-1/2">
            <div>
              <span className="font-bold">Description</span>
              <p>회사 웹사이트 성능 개선 프로젝트를 단독으로 진행했습니다.</p>
            </div>
          </div>
        </AboutSection>

        <AboutSection heading="SKILLS">
          <div className="basis-1/2">
            <h3 className="text-xl">Frontend</h3>
          </div>
          <div className="basis-1/2">
            <ul className="list-disc">
              <li className="list-inside">
                주로 React를 사용하여 앱을 만듭니다.
              </li>
              <li className="list-inside">
                웹 성능을 최적화할 수 있는 다양한 방법을 활용할 수 있습니다.
              </li>
            </ul>
          </div>
          <div className="basis-1/2">
            <h3 className="text-xl">UI/UX</h3>
          </div>
          <div className="basis-1/2">
            <ul className="list-disc">
              <li className="list-inside">
                Framer 등의 디자인 도구로 프로토타입을 만들 수 있습니다.
              </li>
            </ul>
          </div>
        </AboutSection>

        <AboutSection heading="EDUCATION">
          <div className="basis-1/2">
            <h3 className="text-xl">위코드</h3>
            <div className="mt-2">
              <span className="block">프론트엔드 개발자 과정 11기</span>
              <span className="block">Jul 2020 - Oct 2020</span>
            </div>
          </div>
          <div className="basis-1/2">
            <p>
              이 교육 과정을 통해 2주 동안 진행되는 클론 프로젝트 2개, 4주 동안
              진행되는 인턴십을 경험할 수 있었습니다.
            </p>
          </div>
          <div className="basis-1/2">
            <h3 className="text-xl">전남대학교</h3>
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
            <h3 className="text-xl">
              2017 월드프렌즈 ICT 봉사단 성과보고대회 우수 활동팀, 최우수상
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
              봉사활동을 했습니다. 파견된 지역에 필요한 모바일 어플리케이션을
              직접 기획, 개발, 배포할 수 있었습니다.
            </p>
          </div>
        </AboutSection>
      </div>
    </Layout>
  )
}

export default About
