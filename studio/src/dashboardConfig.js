export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60a3d83f032c8d0c27ed9dbc",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-4bi998mw",
                  apiId: "1beb1834-5632-429d-81ca-307163f5ba70",
                },
                {
                  buildHookId: "60a3d83f88bfd10ce409e0ef",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-o4zfabew",
                  apiId: "9e975618-8acb-4ade-815c-ed79ebf2d7d3",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/MarijnBetman/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-o4zfabew.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
