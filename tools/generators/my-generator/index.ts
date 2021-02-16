import { Tree } from '@nrwl/devkit';
import { sayHello } from '@nx-pnpm/utils';

export default async function (host: Tree, schema: any) {
  console.log(sayHello(schema.name));

  // await libraryGenerator(host, { name: schema.name });
  // await formatFiles(host);
  // return () => {
  //   installPackagesTask(host);
  // };
}
