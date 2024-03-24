const transformAndWriteToFile = require("json-to-frontmatter-markdown").default;
const { readFileSync } = require("fs");

const data = JSON.parse(readFileSync("./data.json"));

data.forEach((e) => {
  console.log("1" + e.title);

  transformAndWriteToFile({
    frontmatterMarkdown: {
      frontmatter: [{ title: e.title }, { slug: e.slug }],
      body: ``,
    },
    path: "./output",
    fileName: `${e.slug}.md`,
  });
});

// transformAndWriteToFile({
//   frontmatterMarkdown: {
//     frontmatter: [
//       { var1: "this is a string" },
//       { var2: ["this is an array", "element2"] },
//       {
//         obj1: {
//           var3: "var3",
//         },
//       },
//     ],
//     body: `
//       # h1 Heading 8-)
//       ## h2 Heading
//       ### h3 Heading
//       #### h4 Heading
//       ##### h5 Heading
//       ###### h6 Heading
//       `,
//   },
//   path: "./output",
//   fileName: "fileName.md",
// });
