export type SupportCategory = 'devices' | 'software' | 'internet';

export interface SupportContact {
	label: string;
	phone: string;
	note: string;
	source: { label: string; url: string };
}

export interface SupportCompany {
	id: string;
	name: string;
	category: SupportCategory;
	keywords: string[];
	checkedOn: string;
	contacts: SupportContact[];
	guidance: string;
	supportUrl: string;
	supportLabel: string;
}

// Dates reflect a manual review of the cited publisher's content, not a test call.
// See docs/support-directory.md before adding or changing a contact.
export const supportCompanies: SupportCompany[] = [
	{
		id: 'apple', name: 'Apple', category: 'devices',
		keywords: ['iPhone', 'iPad', 'Mac', 'MacBook', 'Apple ID', 'iCloud'],
		checkedOn: '2026-08-31',
		contacts: [{
			label: 'U.S. technical support', phone: '1-800-275-2273',
			note: 'For help with Apple products and services.',
			source: { label: 'Apple support phone directory', url: 'https://support.apple.com/en-us/106932?choose-your-country-or-region=united-states' },
		}],
		guidance: 'Have your device and serial number ready. Apple Business, education, and Apple Cash have separate support options on the official page.',
		supportUrl: 'https://support.apple.com/contact', supportLabel: 'Apple support options',
	},
	{
		id: 'dell', name: 'Dell', category: 'devices',
		keywords: ['PC', 'computer', 'laptop', 'Inspiron', 'XPS', 'Latitude', 'ProSupport'],
		checkedOn: '2026-08-31',
		contacts: [{
			label: 'Consumer hardware warranty support', phone: '1-800-624-9896',
			note: 'Listed in Dell’s U.S. consumer in-home hardware service agreement.',
			source: { label: 'Dell consumer service agreement (PDF, page 1)', url: 'https://i.dell.com/sites/csdocuments/Legal_Docs/en/us/consumer-in-home-hardware-service-after-remote-diagnosis-US.pdf' },
		}],
		guidance: 'Have your Service Tag ready. For business devices, ProSupport, or another warranty plan, identify your device on Dell’s site to get the correct support route.',
		supportUrl: 'https://www.dell.com/support/incidents-online/en-us/contactus/dynamic', supportLabel: 'Find support by Dell Service Tag',
	},
	{
		id: 'hp', name: 'HP', category: 'devices',
		keywords: ['Hewlett Packard', 'PC', 'computer', 'laptop', 'printer', 'scanner', 'Care Pack', 'LaserJet', 'OfficeJet'],
		checkedOn: '2026-08-31',
		contacts: [{
			label: 'Consumer Care Pack service support', phone: '1-800-474-6836',
			note: 'HP publishes this number for consumer product Care Pack support.',
			source: { label: 'HP Care Pack support FAQ', url: 'https://www.hp.com/us-en/shop/cv/carepackfaq' },
		}],
		guidance: 'For printer setup, a scanner issue, a business device, or other coverage, start at HP’s support site with your model and serial number. Available contact options depend on your product.',
		supportUrl: 'https://support.hp.com/', supportLabel: 'Find support for your HP product',
	},
	{
		id: 'intuit', name: 'Intuit', category: 'software',
		keywords: ['QuickBooks', 'TurboTax', 'accounting', 'payroll', 'tax', 'Mailchimp'],
		checkedOn: '2026-08-31',
		contacts: [{
			label: 'Intuit account support', phone: '1-800-446-8848',
			note: 'Published by Intuit for account support; not a dedicated QuickBooks technical-support line.',
			source: { label: 'Intuit support and account resources', url: 'https://www.intuit.com/support/' },
		}],
		guidance: 'For QuickBooks, TurboTax, or another product, use Intuit’s official product-support links. Sign in to your product to find its contact or callback options.',
		supportUrl: 'https://www.intuit.com/support/', supportLabel: 'Choose your Intuit product',
	},
	{
		id: 'sage', name: 'Sage', category: 'software',
		keywords: ['Sage 50', 'Peachtree', 'accounting', 'payroll', 'Intacct', 'Sage 100', 'Sage 300'],
		checkedOn: '2026-08-31',
		contacts: [{
			label: 'Sage 50 — U.S. technical support', phone: '1-866-747-3888',
			note: 'For Sage 50 U.S. customers. Support entitlement may depend on your plan.',
			source: { label: 'Sage 50 technical-support contact article', url: 'https://us-kb.sage.com/portal/app/portlets/results/viewsolution.jsp?solutionid=220924450010495' },
		}],
		guidance: 'Have your Sage product, version, and account details ready. Intacct, Sage 100, Sage 300, and other products have separate support routes.',
		supportUrl: 'https://www.sage.com/en-us/support/', supportLabel: 'Choose your Sage product',
	},
	{
		id: 'optimum', name: 'Optimum', category: 'internet',
		keywords: ['Suddenlink', 'internet', 'cable', 'WiFi', 'broadband', 'TV', 'business', 'Louisiana'],
		checkedOn: '2026-08-31',
		contacts: [
			{
				label: 'Residential — Louisiana & “all other areas”', phone: '1-877-694-9474',
				note: 'Use the regional directory for NY, NJ, CT, PA, Hendersonville, NC, and West Jefferson, NC.',
				source: { label: 'Optimum residential support directory', url: 'https://www.optimum.net/support/contact-us/' },
			},
			{
				label: 'Business — Louisiana & “all other areas”', phone: '1-800-490-9604',
				note: 'Internet, phone, and TV technical support. The regions listed above have a different business number.',
				source: { label: 'Optimum business support directory', url: 'https://business.optimum.net/support/contact' },
			},
		],
		guidance: 'Check the service region and whether your account is residential or business. These are not Optimum Mobile support numbers.',
		supportUrl: 'https://www.optimum.net/support/contact-us/', supportLabel: 'Find your regional Optimum contact',
	},
	{
		id: 'pelican-broadband', name: 'Pelican Broadband', category: 'internet',
		keywords: ['internet', 'fiber', 'WiFi', 'Louisiana', 'Natchitoches', 'Collinston', 'Pleasant Hill'],
		checkedOn: '2026-08-31',
		contacts: [{
			label: '24/7 technical support', phone: '1-888-277-3090',
			note: 'Dedicated technical support for problems with your Pelican service.',
			source: { label: 'Pelican Broadband support page', url: 'https://pelicanbroadband.com/support/' },
		}],
		guidance: 'Have your service address and account information ready. Office contacts and payment services are separate from this technical-support line.',
		supportUrl: 'https://pelicanbroadband.com/support/', supportLabel: 'Pelican support and live chat',
	},
	{
		id: 'att', name: 'AT&T', category: 'internet',
		keywords: ['ATT', 'AT and T', 'wireless', 'cell phone', 'mobile', 'internet', 'fiber', 'WiFi', 'home phone'],
		checkedOn: '2026-08-31',
		contacts: [
			{
				label: 'Internet or home phone support', phone: '1-800-288-2020',
				note: 'Start here for home internet or home phone service.',
				source: { label: 'AT&T official support directory', url: 'https://www.att.com/support/' },
			},
			{
				label: 'Wireless support', phone: '1-800-331-0500',
				note: 'For AT&T wireless. You can also dial 611 from an AT&T mobile phone.',
				source: { label: 'AT&T official support directory', url: 'https://www.att.com/support/' },
			},
		],
		guidance: 'AT&T lists separate routes for prepaid, Internet Air, and business accounts. Use the official support page to select your service.',
		supportUrl: 'https://www.att.com/support/', supportLabel: 'Choose your AT&T service',
	},
];

export const supportCategories = [
	{ id: 'all', label: 'All companies' },
	{ id: 'devices', label: 'Computers & devices' },
	{ id: 'software', label: 'Software & accounting' },
	{ id: 'internet', label: 'Internet & phone' },
];

export const phoneHref = (phone: string) => `tel:+${phone.replace(/\D/g, '')}`;
export const formatCheckedDate = (date: string) => new Intl.DateTimeFormat('en-US', {
	month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC',
}).format(new Date(`${date}T00:00:00Z`));
