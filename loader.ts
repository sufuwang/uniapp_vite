import { Plugin } from 'postcss';

type TypeLoader = () => Plugin;

const Loader: TypeLoader = () => {
  const prepare: Plugin['prepare'] = (result) => {
    // console.info('result: \n');
    return {
      Once(root) {
        root.walkRules((rule) => {
          if (rule.selector === 'img') {
            console.info(rule)
            rule.selector = 'image';
          }
        });
      },
    };
  };
  return {
    postcssPlugin: 'changeSelectorPlugin',
    prepare,
  };
};

export default Loader;
