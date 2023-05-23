import type { PageLoad } from './$types';
import data from '../data.json'
import { CommandsSchema } from '../schema/commands';
import { command, allCommands } from '../stores/commandStore'

const commands = CommandsSchema.parse(data);

export const load: PageLoad = (({ params }) => {
    const cmd = params.cmd;
    const selectedCommand = commands.find(c => c.cmd === cmd);
    if (selectedCommand) {
        command.set(selectedCommand);
    }
    allCommands.set(commands);
});

