export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            padding: {
                root: "0px"
            },
            fontFamily: {
                sans: ["Poppins", "sans-serif"],
                poppins: ["Poppins", "sans-serif"]
            }
        }
    },

    plugins: [require("daisyui")]
};
