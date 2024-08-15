module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class',
    theme: {
      fontFamily: {
        display: ['Open Sans', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      extend: {
        fontSize: {
          14: '14px',
        },
        backgroundColor: {
          'main-bg': '#FAFBFB',
          'main-dark-bg': '#20232A',
          'secondary-dark-bg': '#33373E',
          'light-gray': '#F7F7F7',
          'half-transparent': 'rgba(0, 0, 0, 0.5)',
        },
        borderWidth: {
          1: '1px',
        },
        borderColor: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        width: {
          136: '32rem',
          400: '400px',
          600: '600px',
          700: '700px',
          760: '760px',
          780: '780px',
          800: '800px',
          1000: '1000px',
          1200: '1200px',
          1250: '1250px',
          1300: '1300px',
          1350: '1350px',
          1400: '1400px',
        },
        height: {
          135: '31rem',
          69: '17.5rem',
          80: '80px',
          340: '340px',
          400: '400px',
          600: '600px',
          760: '760px',
          780: '780px',
          800: '800px',
          900: '900px',
          1000: '1000px',
          1200: '1200px',
          1400: '1400px',
        },
        minHeight: {
          590: '590px',
        },
        maxHeight:{
          34: '34rem'
        },
        backgroundImage: {
          'hero-pattern':
            "url('https://d3h9ln6psucegz.cloudfront.net/wp-content/uploads/2016/07/The-Viking-Row-Workout.jpg')",
            'dashboard-1' : "url('/src/assets/image-1.png')"
        },
        zIndex: {
          1: '1',
          2: '2',
          4: '4'
        }
      },
    },
    plugins: [],
  };