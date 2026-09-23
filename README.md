# Don't Feed Machines // WIKI v0.0.1

the build & information wiki behind dontfeedmachines.com. 

this is a site to document concepts, prototypes, and theoretical concepts for counter-surveillance, personal opsec, defensive/offensive tooling for dealing with an AI world, and privacy hardware you can actually make.

each entry is a
markdown page with a parts list, a filetree, a build, and the reasoning for why the thing
works. this repo is the site, not the projects. the projects live in
`src/content/docs/toolkit/`.

custom adapted theme based on [Astro](https://astro.build) + [Starlight](https://starlight.astro.build) + [Dockit](https://github.com/themefisher/dockit-astro) 
 ||| deploys to Cloudflare Workers as static assets.

<!--want a page higher up than alphabetical? name it explicitly in
`src/config/sidebar.json` before the autogenerate entry, the way Smart Dust
Sweeper is pinned there now. everything you do not name falls in after it,
sorted by filename.-->

## where the knobs are

this repo is just for the astro build itself, not the content. the content is served as a submodule from [the Resources repo](https://github.com/DontFeedMachines/resources). if you want to submit a new tool, update for an existing one, any sort of PR or commits, please use that repo. write your entries in normal markdown and the custom parser will translate to the specialized MDX adaptor.


## structure

```
src/
  assets/         images and the logo
  components/
    override-components/   customized starlight internals
    user-components/       DocKit's own components
  config/         all the json config
  content/
    docs/         every page. toolkit/ is the meat
    i18n/         ui strings
    sections/     reusable page blocks
  styles/         global css
astro.config.mjs  wires the config json into starlight
wrangler.jsonc    cloudflare workers deploy target
```

## credits

- theme: [DocKit](https://github.com/themefisher/dockit-astro) by Themefisher,
  MIT. see [LICENSE](LICENSE).
- framework: [Astro](https://astro.build) and
  [Starlight](https://starlight.astro.build), the astro contributors, MIT.

site content and design: svde. copyright the respective owners.
