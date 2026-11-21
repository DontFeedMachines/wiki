import { visit } from 'unist-util-visit';

export function remarkStarlightCards() {
  return (tree) => {
    visit(tree, (node) => {
      if (node.type === 'containerDirective') {
        if (node.name === 'cardgrid') {
          const data = node.data || (node.data = {});
          data.hName = 'div';
          data.hProperties = { class: 'card-grid starlight-card-grid' };
        }
        if (node.name === 'card') {
          const data = node.data || (node.data = {});
          const title = node.attributes?.title || '';
          const icon = node.attributes?.icon || '';

          data.hName = 'article';
          data.hProperties = { class: 'card sl-flex' };

          // Create the title paragraph
          const titleChildren = [];
          if (icon) {
             // We won't inject the full SVG, we'll just add a span with the icon class or emoji
             titleChildren.push({
               type: 'element',
               data: {
                 hName: 'span',
                 hProperties: { class: 'icon' }
               },
               children: [{ type: 'text', value: '✧' }] // generic placeholder icon
             });
          }
          titleChildren.push({
            type: 'element',
            data: { hName: 'span', hProperties: { style: 'font-weight: 600;' } },
            children: [{ type: 'text', value: title }]
          });

          const titleParagraph = {
            type: 'paragraph',
            data: {
              hName: 'p',
              hProperties: { class: 'title sl-flex', style: 'font-size: var(--sl-text-h4); gap: 1rem; align-items: center;' }
            },
            children: titleChildren
          };

          const bodyDiv = {
            type: 'element',
            data: {
              hName: 'div',
              hProperties: { class: 'body' }
            },
            children: node.children
          };

          node.children = [titleParagraph, bodyDiv];
        }
      }
    });
  };
}
