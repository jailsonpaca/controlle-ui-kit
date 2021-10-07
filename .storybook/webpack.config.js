const path = require("path");

module.exports = ({ config }) => {
  config.resolve.modules = [
    ...(config.resolve.modules || []),
    path.resolve(__dirname, "../src"),
  ];
  config.module.rules.push({
    test: /\.(png|woff|woff2|eof|ttf|svg)$/,
    use: [
      {
        loader: "file-loader",
        query: {
          name: "[name].[ext]",
        },
      },
    ],
    include: path.resolve(__dirname, "../"),
  });
  return config;
};
