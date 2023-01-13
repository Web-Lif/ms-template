import ESLintPlugin from 'eslint-webpack-plugin'
import { getFastpackConfig } from '@weblif/fastpack'

/**
 * 扩展 Webpack 的信息
 */
class WebpackChainPlugin {
    after(webpack: any) {
        webpack.plugin('fastpack/ESLintPlugin').use(ESLintPlugin, [{
            extensions: ['.ts', '.tsx', '.js', '.jsx']
        }])
    }
}

export default getFastpackConfig({
    title: 'test',
    router: {
        paths: [
            '/'
        ]
    },
    plugins: [
        new WebpackChainPlugin()
    ],
})