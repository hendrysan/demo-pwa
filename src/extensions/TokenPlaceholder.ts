import { Node, mergeAttributes } from "@tiptap/core";

export const TokenPlaceholder = Node.create({
  name: "tokenPlaceholder",
  group: "inline",
  inline: true,
  atom: true,

  addAttributes() {
    return {
      token: {},
    };
  },

  parseHTML() {
    return [{ tag: "span[data-token]" }];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "span",
      mergeAttributes(HTMLAttributes, { class: "text-blue-500" }),
      `[${HTMLAttributes.token}]`,
    ];
  },

  addInputRules() {
    return [
      {
        find: /\[([a-zA-Z0-9_]+)\]$/,
        handler: ({ match, chain, range }) => {
          const token = match[1];

          // Use the `range` provided by Tiptap instead of relying on match.index
          chain()
            .deleteRange(range)
            .insertContent({ type: "tokenPlaceholder", attrs: { token } })
            .run();
        },
      },
    ];
  },
});
