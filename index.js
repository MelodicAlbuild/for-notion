const { Client } = require("@notionhq/client");

const notion = new Client({
  auth: "",
});

const databaseId = "";
const date = new Date();
const isoString = date.toISOString();
const response = await notion.pages.create({
  parent: {
    type: "database_id",
    database_id: databaseId,
  },
  properties: {
    "Task Name": {
      title: [
        {
          text: {
            content: "Testing Task",
          },
        },
      ],
    },
    "Assigned On": {
      date: {
        start: isoString,
      },
    },
    Status: {
      status: {
        name: "ASSIGNED",
      },
    },
    "Created By": {
      people: [
        {
          object: "user",
          id: "32dea315-2189-4016-8c3a-37eeea1400bb",
        },
      ],
    },
    "Managed By": {
      people: [
        {
          object: "user",
          id: "1427a347-ebdf-489c-91ea-c08012d3ba31",
        },
      ],
    },
    "Thread ID": {
      rich_text: [
        {
          type: "text",
          text: {
            content: "XXXXXXXXXXXXXX",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text: "XXXXXXXXXXXXXX",
          href: null,
        },
      ],
    },
  },
});
let newPageId = response.id;
let blockResponse = await notion.blocks.children.append({
  block_id: newPageId,
  children: [
    {
      type: "heading_2",
      heading_2: {
        rich_text: [
          {
            type: "text",
            text: {
              content: "Concept",
            },
          },
        ],
      },
    },
    {
      type: "column_list",
      column_list: {
        children: [
          {
            type: "column",
            column: {
              children: [
                {
                  type: "paragraph",
                  paragraph: {
                    rich_text: [
                      {
                        type: "text",
                        text: {
                          content: "{Discord post description}",
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            type: "column",
            column: {
              children: [
                {
                  type: "paragraph",
                  paragraph: {
                    rich_text: [
                      {
                        type: "text",
                        text: {
                          content: "{Discord post image(s)}",
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
});
let childResponse = await notion.databases.create({
  parent: {
    type: "page_id",
    page_id: newPageId,
  },
  title: [
    {
      type: "text",
      text: {
        content: "Development Images",
        link: null,
      },
    },
  ],
  is_inline: true,
  properties: {
    Name: {
      title: {},
    },
    Art: {
      files: {},
    },
  },
});
let blockResponse2 = await notion.blocks.children.append({
  block_id: newPageId,
  children: [
    {
      type: "heading_1",
      heading_1: {
        rich_text: [
          {
            type: "text",
            text: {
              content: "Final Art Uploads",
            },
          },
        ],
      },
    },
    {
      type: "heading_2",
      heading_2: {
        rich_text: [
          {
            type: "text",
            text: {
              content: "Creature/Rune",
            },
          },
        ],
      },
    },
    {
      type: "file",
      file: {
        type: "external",
        external: {
          url: "",
        },
      },
    },
  ],
});
