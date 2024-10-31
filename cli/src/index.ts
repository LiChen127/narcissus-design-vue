import { program } from 'commander';
import { createComponent } from './command/create-command';
export const mainEntry = () => {
  console.log('Before MainEntry:');

  program.version(require('../package').version)
    .usage('<command> [arguments]');

  program.command('create')
    .description('create a new component')
    .alias('c')
    .action(() => {
      console.log('创建组件');
    })
    .action(createComponent);

  program.parse(process.argv);

  if (!program.args.length) {
    program.help();
  }
};
