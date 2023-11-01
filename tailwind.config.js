export default {
  plugins: [],
  theme: {
    colors: {
      'primary': '#212428',
      'black': '#171717',
      'white' : "#ffffff",
      'gray': '#c5cfdf',
      'red' :'#ff004e',
      'rose':'#C62E65'
    },
    extend: {},
  },
  content: ["./index.html",'./src/**/*.{svelte,js,ts}'], // for unused CSS
  variants: {
    extend: {

    },
  },
}