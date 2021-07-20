export interface IScaffold {
  target: string;
  name: string;
  data: any;
  preview: Array<{ name: string; message: string; output: string }>;
}

export interface IConfig {
  tmpDir: string;
  scaffolds: IScaffold[];
}
