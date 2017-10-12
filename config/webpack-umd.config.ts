import * as webpack from "webpack";
import * as path from "path";
import * as fs from "fs";
import * as angularExternals from "webpack-angular-externals";
import * as rxjsExternals from "webpack-rxjs-externals";

const pkg: any = JSON.parse(fs.readFileSync("./package.json").toString());

const config: webpack.Configuration = {
    entry: {
        "sygic-custom-url-ng": "./src/index.ts",
        "sygic-custom-url-ng.min": "./src/index.ts",
    },
    output: {
        path: path.join(__dirname, "..", "dist", "umd"),
        filename: "[name].js",
        libraryTarget: "umd",
        library: "ticktock"
    },
    resolve: {
        extensions: [".ts", ".js", ".json"]
    },
    externals: [
        angularExternals(),
        rxjsExternals()
    ],
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: "awesome-typescript-loader",
                        options: {
                            configFileName: "./config/tsconfig-umd.json"
                        }
                    }
                ],
                exclude: [
                    /node_modules/,
                    /\.(spec|e2e)\.ts$/
                ]
            }
        ]
    },
    plugins: [
        new webpack.ContextReplacementPlugin(
            /(ionic-angular)|(angular(\\|\/)core(\\|\/)@angular)/,
            path.resolve(__dirname, "src")
        ),

        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            sourceMap: true
        }),

        new webpack.BannerPlugin({
            banner: `
/**
 * ${pkg.name} - ${pkg.description}
 * @version v${pkg.version}
 * @author ${pkg.author}
 * @link ${pkg.homepage}
 * @license ${pkg.license}
 */
      `.trim(),
            raw: true,
            entryOnly: true
        })

    ]
};

export default config;
