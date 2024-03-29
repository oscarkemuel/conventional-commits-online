export interface Type {
  type: string;
  title: string;
  description: string;
}

export const types: Type[] = [
  {type: 'feat', title: 'Feature', description: 'A new feature'},
  {type: 'build', title: 'Build', description: 'Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)'},
  {type: 'ci', title: 'CI', description: 'Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)'},
  {type: 'docs', title: 'Documentation', description: 'Documentation only changes'},
  {type: 'fix', title: 'Fix', description: 'A bug fix'},
  {type: 'perf', title: 'Perf', description: 'A code change that improves performance'},
  {type: 'refactor', title: 'Refactor', description: 'A code change that neither fixes a bug nor adds a feature'},
  {type: 'style', title: 'Style', description: ' Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)'},
  {type: 'test', title: 'Test', description: 'Adding missing tests or correcting existing tests'},
  {type: 'chore', title: 'Chore', description: 'Changes to the build process or auxiliary tools and libraries such as documentation generation'},
  {type: 'revert', title: 'Revert', description: 'Reverts a previous commit'},
  {type: 'wip', title: 'WIP', description: 'Work in progress'}
]