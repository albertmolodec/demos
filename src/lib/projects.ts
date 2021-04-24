export interface Project {
  name: names
  label: string
  year?: number
  isBundled: boolean
  accentColor: string
}

export type names =
  | 'build-react'
  | 'use-toggle'
  | 'web-component'
  | 'vanilla-auth-form'
  | 'xsolla-summer-school'

export const projects: Project[] = [
  {
    name: 'build-react',
    label: 'Build my own react',
    year: 2021,
    isBundled: false,
    accentColor: '#202226',
  },
  {
    name: 'use-toggle',
    label: 'Custom useToggle hook',
    year: 2021,
    isBundled: false,
    accentColor: '#eeefef',
  },
  {
    name: 'web-component',
    label: 'Web component rendered by React',
    year: 2021,
    isBundled: false,
    accentColor: '#ffff4c',
  },
  {
    name: 'vanilla-auth-form',
    label: 'Vanilla auth form',
    year: 2019,
    isBundled: true,
    accentColor: '#e06395',
  },
  {
    name: 'xsolla-summer-school',
    label: 'Xsolla summer school test task',
    year: 2018,
    isBundled: false,
    accentColor: '#ff0858',
  },
]
