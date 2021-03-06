const { exec } = require(`child_process`)

const runCommands = (commands) => {
    const ls = exec(commands.join(` && `))
    ls.stdout.on(`data`, (data) => { process.stdout.write(`${data}`) })
    ls.stderr.on(`data`, (data) => { process.stdout.write(`${data}`) })
}

const commands = [
    `git add .`,
    `git commit -m "as published to npm at ${new Date()}"`,
    `npm version patch`,
    `npm publish`,
    `git push origin master`,
    `git --no-pager log --oneline --decorate --graph --all -n 12`,
]

runCommands(commands)
