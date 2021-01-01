module.exports = {
  siteMetadata: {
    title: `catid's Hacks`,
    siteUrl: `https://nehalem.netlify.com`,
    description: `Better than kinky sex with models`,
    topics: ["Game Hacking", "Startups", "VR", "Forward Error Correction", "3D Printing"],
    menu: [
      {
        name: 'Home',
        path: '/'
      },
      {
        name: 'Origin Story',
        path: '/game_hacking'
      },
    ],
    footerMenu: [
      {
        name: 'Home',
        path: '/'
      },
      {
        name: 'Origin Story',
        path: '/game_hacking'
      },
    ],
    search: true,
    author: {
      name: `catid`,
      description: `Retweet me.  Star my repos.  Like my videos.`,
      social: {
        facebook: ``,
        twitch: ``,
        instagram: ``,
        github: `https://github.com/catid`,
        twitter: `https://twitter.com/mrcatid`,
        linkedin: `https://www.linkedin.com/in/christopher-taylor-1a539a31/`,
        youtube: `https://www.youtube.com/channel/UChp5dJk1m-rOKXeCfb8gGxA`
      }
    }
  },
  plugins: [
    {
      resolve: `@nehalist/gatsby-theme-nehalem`,
      options: {
        manifest: {
          name: `nehalem - A Gatsby theme`,
          short_name: `nehalem`,
          start_url: `/`,
          background_color: `#a4cbb8`,
          theme_color: `#a4cbb8`,
          display: `minimal-ui`,
          icon: `${__dirname}/content/assets/images/logo.jpg`
        }
      }
    }
  ]
};
