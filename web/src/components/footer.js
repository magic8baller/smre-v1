import React from "react";
import tw, {styled} from 'twin.macro';
import SvgLogo from '../images/smre-logo1.svg';

const FooterContainer = styled.div`
	${tw`container mx-auto pt-8 pb-4`}
`
const FooterColumn = styled.div`
	${tw`w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4 pb-6`}

		h4 {
			${tw`text-white uppercase`}
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
	<footer className="bg-gray-500">
		<FooterContainer>
			<div tw='flex flex-wrap overflow-hidden sm:-mx-1 md:-mx-px lg:-mx-2 xl:-mx-2'>
				<FooterColumn>
					<img src={SvgLogo} maxWidth='70%' height='auto' alt={`${siteTitle} logo`} />
				</FooterColumn>
				<FooterColumn>
					<ul>
						<h4>
							links
</h4>
						{footerLinks[0].map(link =>
							<li tw='leading-7 text-sm' key={link.id}>
								<a href='/' tw='text-white underline text-sm'>{link.text}</a>
							</li>
						)}
					</ul>
				</FooterColumn>
				{/* <FooterColumn>
<ul>
<h4>
	legal
</h4>
{footerLinks[1].map(link =>
	<li key={link.id}>
		{link.text}
	</li>
)}
</ul>
				</FooterColumn> */}
				<FooterColumn>
					<ul>
						<h4>
							services
</h4>
						{footerLinks[3].map(link =>
							<li tw='leading-7 text-sm' key={link.id}>
								<a href='/' tw='text-white underline text-sm'>{link.text}</a>
							</li>
						)}
					</ul>
				</FooterColumn>
				<FooterColumn>
					<ul>
						<h4>
							company
</h4>
						{footerLinks[2].map(link =>
							<li tw='leading-7 text-sm' key={link.id}>
								<a href='/' tw='text-white underline text-sm'>{link.text}</a>
							</li>
						)}
					</ul>
				</FooterColumn>
			</div>
			<div className="pt-4 md:flex md:items-center md:justify-center" style={{borderTop: '1px solid white'}}>
				<ul className="">
					<li className="md:mx-2 md:inline leading-7 text-sm" id="footer-navi-2"><a href='/' className="text-white underline text-sm" href="/disclaimer">Disclaimer</a></li>
					<li className="md:mx-2 md:inline leading-7 text-sm" id="footer-navi-2"><a href='/' className="text-white underline text-sm" href="/cookie">Cookie policy</a></li>
					<li className="md:mx-2 md:inline leading-7 text-sm" id="footer-navi-2"><a href='/' className="text-white underline text-sm" href="/privacy">Privacy</a></li>
				</ul>
			</div>
		</FooterContainer>
	</footer>
);

export default Footer;
