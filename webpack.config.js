export const resolve = {
    fallback: {
        "path": false
    }
};
  import Dotenv from 'dotenv-webpack';

export const plugins = [
    new Dotenv()
];
