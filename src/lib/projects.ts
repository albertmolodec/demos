export interface File {
  name: string;
  language: string;
}

export interface Project {
  name: Name;
  label: string;
  year?: number;
  isBundled: boolean;
  withReadme: boolean;
  accentColor: string;
  files: File[];
}

export type Name =
  | "build-react"
  | "use-toggle"
  | "web-component"
  | "vanilla-auth-form"
  | "xsolla-summer-school"
  | string;

export const projects: Project[] = [
  {
    name: "vanilla-auth-form",
    label: "Vanilla auth form",
    year: 2019,
    isBundled: true,
    withReadme: true,
    accentColor: "#e06395",
    files: [],
  },
  {
    name: "xsolla-summer-school",
    label: "Xsolla summer school test task",
    year: 2018,
    isBundled: false,
    withReadme: true,
    accentColor: "#ff0858",
    files: [
      {
        name: "index.html",
        language: "html",
      },
      {
        name: "js/scripts.js",
        language: "javascript",
      },
    ],
  },
  {
    name: "build-react",
    label: "Build my own react",
    year: 2021,
    isBundled: false,
    withReadme: true,
    accentColor: "#202226",
    files: [
      {
        name: "index.jsx",
        language: "javascript",
      },
      {
        name: "didact.js",
        language: "javascript",
      },
    ],
  },
  {
    name: "use-toggle",
    label: "Custom useToggle hook",
    year: 2021,
    isBundled: false,
    withReadme: false,
    accentColor: "#eeefef",
    files: [
      {
        name: "index.jsx",
        language: "javascript",
      },
      {
        name: "useToggle.js",
        language: "javascript",
      },
    ],
  },
  {
    name: "web-component",
    label: "Web component rendered by React",
    year: 2021,
    isBundled: false,
    withReadme: true,
    accentColor: "#ffff4c",
    files: [
      {
        name: "user-card.js",
        language: "javascript",
      },
      {
        name: "templates.js",
        language: "javascript",
      },
    ],
  },
  {
    name: "usa-map",
    label: "USA map widget",
    year: 2024,
    isBundled: true,
    withReadme: true,
    accentColor: "#e6e6e6",
    files: [],
  },
  {
    name: "element-widget",
    label: "Element widget",
    year: 2024,
    isBundled: true,
    withReadme: true,
    accentColor: "#e6e6e6",
    files: [],
  },
];
