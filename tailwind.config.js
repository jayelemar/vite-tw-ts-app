export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            padding: {
                // Use any valid utility class from Tailwind CSS
                root: "0px" // Example: Set padding to 2rem
            }
        }
    },
    // eslint-disable-next-line no-undef
    plugins: [require("daisyui")]
};
