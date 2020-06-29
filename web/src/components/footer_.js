import React from "react";
import tw, {styled} from 'twin.macro';
import SvgLogo from '../images/smre-logo1.svg';
import {FaPhoneAlt} from 'react-icons/fa'
const FooterContainer = styled.div`
	${tw`container mx-auto pt-8 pb-4`}
`
const FooterColumn = styled.div`
	${tw`w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4 pb-6`}

		h4 {
			${tw`text-gray-500 uppercase`}
		}
		ul {
			${tw``}
		}

`
const footerLinks = [
	[
		{id: '1a', text: 'FAQ'},
		{id: '1b', text: 'Help'},

	],
	[
		{id: '2a', text: 'Terms'},
		{id: '2b', text: 'Privacy'},

	],
	[
		{id: '3a', text: 'About Us'},
		{id: '3b', text: 'Our Team'},
		{id: '3d', text: 'Official Blog'},
		{id: '3c', text: 'Contact'},
	],
	[
		{id: '4a', text: 'Mortgages'},
		{id: '4b', text: 'Loans'},


	]
]
const Footer = ({siteTitle}) => (

<footer tw="bg-white text-gray-700 font-sans">
  <div tw="container px-5 py-24 mx-auto">
    <div tw="flex flex-wrap md:text-left text-center order-first">
      <div tw="lg:w-1/4 md:w-1/2 w-full pl-4">
        <h2 tw="font-sans font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav tw="list-none mb-10">
          <li>
            <a tw="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a tw="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a tw="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a tw="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div tw="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 tw="font-sans font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav tw="list-none mb-10">
          <li>
            <a tw="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a tw="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a tw="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a tw="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div tw="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 tw="font-sans font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav tw="list-none mb-10">
          <li>
            <a tw="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a tw="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a tw="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a tw="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div tw="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 tw="font-sans font-medium text-gray-900 tracking-widest text-sm mb-3">SUBSCRIBE</h2>
        <div tw="flex xl:flex-no-wrap md:flex-no-wrap lg:flex-wrap flex-wrap justify-center md:justify-start">
          <input tw="w-40 sm:w-auto bg-gray-100 rounded xl:mr-4 lg:mr-0 sm:mr-4 mr-2 border border-gray-400 focus:outline-none focus:border-indigo-500 text-base py-2 px-4" placeholder="Placeholder" type="text"/>
          <button tw="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
        </div>
        <p tw="text-gray-500 text-sm mt-2 md:text-left text-center">Bitters chicharrones fanny pack
          <br tw="lg:block hidden"/>waistcoat green juice
        </p>
      </div>
    </div>
  </div>
  <div tw="bg-gray-200">
    <div tw="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
      <a tw="flex font-medium items-center md:justify-start justify-center text-gray-900">
        <img src={SvgLogo} maxWidth='50%' height='auto' alt={siteTitle}/>
      </a>
      <p tw="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">&copy; {new Date().getFullYear()} Susan Mittman Real Estate. All rights reserved.
        <a href="/" rel="noopener noreferrer" tw="text-gray-600 ml-1" target="_blank"></a>
      </p>
      <span tw="text-sm sm:ml-auto text-gray-500 sm:mt-2 mt-4 block" >

          <FaPhoneAlt tw='align-bottom inline'/> 718-692-2010

      </span>
    </div>
  </div>
	</footer>


);

export default Footer;
