export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f97f4bcbbdee6642eac7652',
                  title: 'Sanity Studio',
                  name: 'are-martin-portfolio-studio',
                  apiId: '5e2d2701-a811-4afa-b6ce-5c665d082f7b'
                },
                {
                  buildHookId: '5f97f4bcf2c69c6621afcccd',
                  title: 'Portfolio Website',
                  name: 'are-martin-portfolio',
                  apiId: '38cb260c-7fa6-4ef0-b4a9-adb643b12943'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AreMartin/Are-Martin-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://are-martin-portfolio.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
