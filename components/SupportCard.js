import React from 'react'
import tw from 'twin.macro'
import { Icon } from './../components'

const Support = ({
  hasSupport,
  icon = hasSupport ? Icon.tick : Icon.cross,
  label = hasSupport ? 'Supported' : 'Unsupported',
}) => (
  <div
    css={[
      tw`text-sm rounded-full px-4 py-1 uppercase tracking-wider inline-flex items-center justify-center cursor-default`,
      hasSupport ? tw`bg-purple-100 text-purple-800` : tw`bg-gray-100`,
    ]}
  >
    <div
      css={[
        tw`mr-2 text-base xl:text-lg`,
        hasSupport ? tw`text-purple-500` : tw`text-gray-500`,
      ]}
    >
      {icon}
    </div>
    {label}
  </div>
)

const OfficialSeal = tw(Icon.tailwind)`inline-block text-2xl text-green-500`

const Link = ({ title, url }) => (
  <a
    key={title}
    as={!url && 'div'}
    href={url || null}
    target={url ? '_blank' : null}
    className="group"
    css={[
      tw`flex pr-2 md:pr-4 md:px-4 py-2 md:inline-flex items-center`,
      !url && tw`cursor-not-allowed`,
    ]}
  >
    <div
      css={[
        tw`text-xl whitespace-no-wrap`,
        url ? tw`text-purple-800 group-hocus:text-gray-800` : tw`text-gray-300`,
      ]}
    >
      {title}
    </div>
    <div
      css={[
        tw`text-2xl pl-1 ml-auto md:ml-0`,
        url ? tw`text-purple-400 group-hocus:text-gray-400` : tw`text-gray-200`,
      ]}
    >
      {Icon.arrowRight}
    </div>
  </a>
)

export default ({
  name,
  url,
  isOfficialPlugin,
  hasSupport,
  notes,
  links,
  urlDisplay = url?.replace('https://github.com/', '').replace('https://', ''),
}) => (
  <div key={name}>
    <div tw="py-7 md:py-4 xl:px-0 md:flex">
      <a
        tw="block sm:w-72 xl:w-96 xl:flex-shrink-0 pb-6 md:pt-6 md:pr-6"
        href={url}
        target="_blank"
        className="group"
      >
        <div tw="text-2xl space-x-2 text-black items-center align-middle">
          <span>{name}</span>
          {isOfficialPlugin && <OfficialSeal />}
        </div>
        <div tw="group-hocus:text-gray-800 truncate">{urlDisplay}</div>
      </a>

      <div tw="md:px-6 md:w-1/3 flex md:py-6 items-start xl:items-center space-x-2">
        <Support {...{ hasSupport }} />
      </div>

      <div tw="flex flex-col xl:flex-row xl:items-center xl:justify-end divide-y md:divide-y-0 mt-5 md:mt-4 lg:mt-0 md:pl-6 md:ml-auto md:w-56 lg:w-72 xl:w-full">
        {links?.map(Link)}
      </div>
    </div>

    {notes && (
      <div tw="bg-gray-50 text-gray-600 rounded-lg -mt-3 mb-6 px-6 py-3">
        {notes}
      </div>
    )}
  </div>
)
