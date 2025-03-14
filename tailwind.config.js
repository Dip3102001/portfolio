const { default: daisyui } = require("daisyui");
const { default: themes } = require("daisyui/theme/object");

module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}", // Include all JS/TS/JSX/TSX files in the src folder
    ],
    theme: {
      extend: {},
    },
    plugins: [require("daisyui")],
    daisyui : {
        themes :[
            {
                mytheme:{
                    "chat-bubble-primary" : "#41c300",
                    "chat-bubble-secondary" : "#4a26fd",
                }
            }
        ]
    }
  };