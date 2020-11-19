// webpack.common.ts`
import { Configuration } from 'webpack';
import { projectName, projectRoot, resolvePath } from '../env';

const commonConfig = {
    context: projectRoot,
    entry: resolvePath(projectRoot, './src/index.tsx'),
    output: {
        publicPath: '/',
        path: resolvePath(projectRoot, './dist'),
        filename: 'js/[name]-[hash].bundle.js',
        // 加盐 hash
        hashSalt: projectName || 'react typescript boilerplate',
    },
    resolve: {
        // 我们导入ts 等模块一般不写后缀名，webpack 会尝试使用这个数组提供的后缀名去导入
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    module: {
        rules: [
            {
                // 导入 jsx 的人少喝点
                test: /\.(tsx?|js)$/,
                loader: 'babel-loader',
                // 开启缓存
                options: { cacheDirectory: true },
                exclude: /node_modules/,
            },
        ],
    },
};
