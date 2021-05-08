import execa from 'execa'

export async function run(command, cwd) {
  return execa.command(command, { stdio: 'inherit', cwd })
}

export async function runArgs(command, args, cwd) {
  return execa(command, args, { stdio: 'inherit', cwd })
}