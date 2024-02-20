---
title: Migrating Blog from Netlify to Github Pages
date: "2024-02-16"
---

My netlify blog wasn't working because I forgot to renew the domain name jenlky.com. I had to contact Namecheap and used the WhoIs Lookup to figure out someone has bought it over. What used to cost S\$14 per year is now \$688 because it has become a premium domain. 

I decided to use Github pages instead. First I had to rename my repository name from `my-blog` to `jenlky.github.io` so the url will be the latter rather than `jenlky.github.io/my-blog`. 

Next they recommend downloading `gh-pages` and adding a deploy script `gh-pages -d dist`. This is to push the build from `/dist` folder to `gh-pages` branch. I changed it to `gh-pages -d public` because GatsbyJS output the build to `/public` folder instead.

Afterwards I tried to run my blog. It turns out that GatsbyJS is now on v5.13 while mine was still running on v2.0. I took a look at the documentation https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v2-to-v3/ and figured out that it only runs on Node 10. 

Lastly, I had to make some CSS changes remove obsolete projects, add new projects and clean up the bio to reflect the latest changes.