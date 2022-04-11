import React from "react"

interface Props {
  tocLists: HTMLHeadingElement[] | null
}

const TocLists = ({ tocLists }: Props) => {
  return (
    <>
      <p className="mt-16 mb-6 text-2xl font-bold laptop:mt-24 tablet:mt-20 laptop:mb-8 tablet:mb-7 laptop:text-3xl">
        목차
      </p>
      {tocLists?.map((list, index) => {
        const tocList = list.innerHTML
        const id = list.id
        return (
          <li key={index} className="text-lg underline">
            <a href={`#${id}`}>{tocList}</a>
          </li>
        )
      })}
    </>
  )
}

export default TocLists
