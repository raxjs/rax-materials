function loadRuntimeModules(runtime) {
  runtime.loadModule(
    require('/Users/guoda/work/rax/rax-materials/scaffolds/app-ts/node_modules/_build-plugin-app-core@0.1.24@build-plugin-app-core/lib/runtime.js')
  );

  runtime.loadModule(
    require('/Users/guoda/work/rax/rax-materials/scaffolds/app-ts/node_modules/_build-plugin-ice-store@1.7.9@build-plugin-ice-store/lib/runtime.js')
  );
}

export default loadRuntimeModules;
