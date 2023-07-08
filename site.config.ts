import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '43e5c532b71c40349378b2f66655ae1f',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Injoon\'s Portfolio',
  domain: 'portfolio-oij.vercel.app',
  author: 'Injoon Oh',

  // open graph metadata (optional)
  description: 'What I have done, am doing, and want to do. ',

  // social usernames (optional)
  // twitter: 'transitive_bs',
  github: 'injoon5',
  // linkedin: 'fisch2',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  pageUrlOverrides: {
     '/about': 'f9178ec53bc14e53b6b3f3210111ad0e',
     '/contact': 'e51b4c57f1104f9d8454879f967b84a3',
     '/blog': 'bfd9c70c8c4244ff8493637de829b5ab',
     '/projects': 'e4baa96c21764d65ad5fc797d315b0eb',
  },

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'custom',
  // navigationStyle: 'custom',
  navigationLinks: [
     {
       title: 'About',
       pageId: 'f9178ec53bc14e53b6b3f3210111ad0e'
     },
     {
      title: 'Projects',
      pageId: 'e4baa96c21764d65ad5fc797d315b0eb'
     },
     {
      title: 'Blog',
      pageId: 'bfd9c70c8c4244ff8493637de829b5ab'
     },
     {
       title: 'Contact',
       pageId: 'e51b4c57f1104f9d8454879f967b84a3'
     }
   ]
})
